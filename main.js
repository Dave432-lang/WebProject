const eventDate = new Date("March 15, 2025 09:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "<h3>Event Started!</h3>";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}, 1000);




const day1Schedule = [
  { time: "08:00 AM - 09:00 AM", activity: "Registration & Breakfast", speaker: "-", venue: "Main Hall", type: "networking" },
  { time: "09:00 AM - 09:30 AM", activity: "Opening Ceremony", speaker: "University Administration", venue: "Main Auditorium", type: "keynote" },
  { time: "09:30 AM - 10:30 AM", activity: "Keynote: The Future of AI in Africa", speaker: "Dr. Kwame Mensah", venue: "Main Auditorium", type: "keynote" },
  { time: "10:30 AM - 11:00 AM", activity: "Coffee Break & Networking", speaker: "-", venue: "Lobby Area", type: "break" },
  { time: "11:00 AM - 12:30 PM", activity: "Workshop: Cybersecurity Fundamentals", speaker: "Ama Osei", venue: "Tech Lab A", type: "workshop" },
  { time: "11:00 AM - 12:30 PM", activity: "Workshop: Blockchain Development", speaker: "Kofi Asante", venue: "Tech Lab B", type: "workshop" },
  { time: "12:30 PM - 01:30 PM", activity: "Lunch Break", speaker: "-", venue: "Cafeteria", type: "break" },
  { time: "01:30 PM - 03:00 PM", activity: "Panel: Data Science in Business", speaker: "Abena Frimpong & Team", venue: "Conference Room", type: "panel" },
  { time: "03:00 PM - 03:30 PM", activity: "Refreshment Break", speaker: "-", venue: "Lobby Area", type: "break" },
  { time: "03:30 PM - 05:00 PM", activity: "Workshop: Cloud Architecture", speaker: "Yaw Boateng", venue: "Tech Lab A", type: "workshop" },
  { time: "05:00 PM - 06:00 PM", activity: "Day 1 Networking Session", speaker: "-", venue: "Main Hall", type: "networking" },
];

const day2Schedule = [
  { time: "08:30 AM - 09:00 AM", activity: "Registration & Breakfast", speaker: "-", venue: "Main Hall", type: "networking" },
  { time: "09:00 AM - 10:00 AM", activity: "Keynote: Design Thinking for Tech", speaker: "Akosua Darko", venue: "Main Auditorium", type: "keynote" },
  { time: "10:00 AM - 10:30 AM", activity: "Coffee Break", speaker: "-", venue: "Lobby Area", type: "break" },
  { time: "10:30 AM - 12:00 PM", activity: "Workshop: Mobile App Development", speaker: "Kwesi Owusu", venue: "Tech Lab A", type: "workshop" },
  { time: "10:30 AM - 12:00 PM", activity: "Workshop: IoT Solutions", speaker: "Nana Adjei", venue: "Tech Lab B", type: "workshop" },
  { time: "12:00 PM - 01:00 PM", activity: "Lunch Break", speaker: "-", venue: "Cafeteria", type: "break" },
  { time: "01:00 PM - 02:30 PM", activity: "Panel: Entrepreneurship in Tech", speaker: "Efua Agyeman & Guests", venue: "Conference Room", type: "panel" },
  { time: "02:30 PM - 03:00 PM", activity: "Refreshment Break", speaker: "-", venue: "Lobby Area", type: "break" },
  { time: "03:00 PM - 04:30 PM", activity: "Workshop: Software Architecture", speaker: "Adwoa Sarpong", venue: "Tech Lab A", type: "workshop" },
  { time: "04:30 PM - 05:00 PM", activity: "Closing Ceremony & Certificates", speaker: "Event Organizers", venue: "Main Auditorium", type: "keynote" },
];


function renderSchedule(schedule) {
  const tbody = document.getElementById("scheduleBody");
  tbody.innerHTML = "";

  schedule.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.time}</td>
      <td>${item.activity}</td>
      <td>${item.speaker}</td>
      <td>${item.venue}</td>
      <td><span class="type ${item.type}">${item.type}</span></td>
    `;
    tbody.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const day1Btn = document.getElementById("day1Btn");
  const day2Btn = document.getElementById("day2Btn");

  renderSchedule(day1Schedule);

  day1Btn.addEventListener("click", () => {
    renderSchedule(day1Schedule);
    day1Btn.classList.add("active");
    day2Btn.classList.remove("active");
  });

  day2Btn.addEventListener("click", () => {
    renderSchedule(day2Schedule);
    day2Btn.classList.add("active");
    day1Btn.classList.remove("active");
  });
});
