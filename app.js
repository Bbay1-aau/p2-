// app.js
const patient = {
  name: "Anna",
  age: 74,
  husband: "Erik",
  dog: "Bella",
  doctorTime: "13:00",
  pills: ["08:30 - Morgenpille", "20:00 - Aftenpille"],
  schedule: [
    "08:00 - Morgenmad",
    "10:00 - Gåtur med Bella",
    "13:00 - Lægebesøg",
    "17:30 - Middag",
    "20:00 - Medicin"
  ]
};

document.getElementById("greetingCard").innerHTML = `
  <h2>Godmorgen, ${patient.name} 🌞</h2>
  <p>I dag er ${new Date().toLocaleDateString("da-DK", { weekday: 'long', day: 'numeric', month: 'long' })}</p>
  <p>Du er ${patient.age} år gammel</p>
  <p>Din mand hedder ${patient.husband} ❤️</p>
  <p>Din hund hedder ${patient.dog} 🐶</p>
`;

document.getElementById("doctorReminder").textContent = `Du skal til lægen kl. ${patient.doctorTime}`;
document.getElementById("pillReminder").innerHTML = patient.pills.map(p => `💊 ${p}`).join("<br>");

const scheduleList = document.getElementById("scheduleList");
patient.schedule.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  scheduleList.appendChild(li);
});
