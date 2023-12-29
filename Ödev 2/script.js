const imgs = document.querySelectorAll(".img");
const imgsList = [...imgs];

const keywords = [
  "art",
  "design",
  "creativity",
  "photography",
  "technology",
  "programming",
  "education",
  "computer",
  "history",
  "rococo",
  "revolution",
  "reform",
  "astronomy",
  "baroc",
  "nature",
  "animal",
  "communication",
  "philosophy",
  "psychology",
  "mythology",
  "community",
  "artificial intelligence",
  "space",
  "cybersecurity",
  "data science",
  "robotics",
  "machine learning",
  "innovation",
  "software development",
  "automation",
  "blockchain",
  "virtual reality",
  "healthcare",
  "sustainability",
  "renewable energy",
  "climate change",
  "space exploration",
  "meditation",
  "mindfulness",
  "fitness",
  "nutrition",
  "travel",
  "literature",
  "music",
  "adventure",

];

function getRandomImageUrl(keyword) {
  return `https://source.unsplash.com/random/?${keyword}`;
}

document.addEventListener("DOMContentLoaded", () => {
  imgsList.forEach((img) => {
    const randomIndex = Math.floor(Math.random() * keywords.length);
    const randomKeyword = keywords.splice(randomIndex, 1)[0];
    img.src = getRandomImageUrl(randomKeyword);
  });
});


