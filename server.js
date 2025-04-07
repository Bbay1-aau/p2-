// ✅ Node.js + Express server til AlzCare login

const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // gør HTML/CSS/JS tilgængelig

// Læs brugere fra JSON (fake database)
const usersFile = path.join(__dirname, 'users.json');
function getUsers() {
  const rawData = fs.readFileSync(usersFile);
  return JSON.parse(rawData);
}

// Login-endpoint
app.post('/login', (req, res) => {
  const { username, password, role } = req.body;
  const users = getUsers();

  const foundUser = users.find(
    u => u.username === username && u.password === password && u.role === role
  );

  if (foundUser) {
    // Send redirect URL baseret på rolle
    if (role === 'patient') return res.json({ redirect: 'patient.html' });
    if (role === 'family') return res.json({ redirect: 'family.html' });
    if (role === 'doctor') return res.json({ redirect: 'doctor.html' });
  } else {
    return res.status(401).json({ error: 'Forkert brugernavn eller kodeord' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`AlzCare server kører på http://localhost:${PORT}`);
});
