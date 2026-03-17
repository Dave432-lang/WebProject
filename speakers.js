const speakers = [
  {
    name: "Dr. Kwame Mensah",
    title: "Chief Technology Officer",
    company: "Ghana Tech Solutions",
    bio: "Pioneer in AI and Machine Learning with over 15 years of experience driving digital transformation across Africa.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kwame",
  },
  {
    name: "Ama Osei",
    title: "Cybersecurity Expert",
    company: "SecureNet Africa",
    bio: "Leading cybersecurity consultant specializing in protecting African businesses from digital threats.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ama",
  },
  {
    name: "Kofi Asante",
    title: "Blockchain Developer",
    company: "CryptoHub Ghana",
    bio: "Blockchain architect building decentralized solutions for financial inclusion in emerging markets.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kofi",
  },
  {
    name: "Abena Frimpong",
    title: "Data Scientist",
    company: "DataViz Africa",
    bio: "Data science leader using analytics and visualization to solve complex business challenges.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Abena",
  },
  {
    name: "Yaw Boateng",
    title: "Cloud Solutions Architect",
    company: "CloudFirst Ghana",
    bio: "Expert in cloud infrastructure and DevOps, helping organizations scale their digital operations.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yaw",
  },
  {
    name: "Akosua Darko",
    title: "UX/UI Designer",
    company: "Design Lab Accra",
    bio: "Award-winning designer creating intuitive and beautiful digital experiences for African users.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Akosua",
  },
];

const speakersContainer = document.getElementById("speakers");

speakers.forEach((speaker) => {
  const card = document.createElement("div");
  card.classList.add("speaker-card");

  card.innerHTML = `
    <img src="${speaker.image}" alt="${speaker.name}" class="speaker-image" />
    <div class="speaker-info">
      <h3>${speaker.name}</h3>
      <div class="title">${speaker.title}</div>
      <div class="company">${speaker.company}</div>
      <p class="bio">${speaker.bio}</p>
      <button class="toggle">Read More</button>
      <div class="socials">
        <a href="#"><i class="fab fa-linkedin"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
      </div>
    </div>
  `;
  speakersContainer.appendChild(card);

  const bio = card.querySelector(".bio");
  const toggle = card.querySelector(".toggle");
  let expanded = false;

  toggle.addEventListener("click", () => {
    expanded = !expanded;
    bio.style.whiteSpace = expanded ? "normal" : "nowrap";
    bio.style.overflow = expanded ? "visible" : "hidden";
    bio.style.textOverflow = expanded ? "unset" : "ellipsis";
    toggle.textContent = expanded ? "Read Less" : "Read More";
  });
});
