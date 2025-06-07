const genres = ["一般常識", "地理歴史", "科学", "漫画アニメ", "映画", "歌手", "都道府県", "英語", "数学", "ポコチャ"];
const selectedGenres = new Set();
const genreContainer = document.getElementById("genre-buttons");
const startBtn = document.getElementById("start-btn");
const randomBtn = document.getElementById("random-btn");

genres.forEach(genre => {
  const btn = document.createElement("button");
  btn.textContent = genre;
  btn.className = "genre-btn";
  btn.onclick = () => {
    if (selectedGenres.has(genre)) {
      selectedGenres.delete(genre);
      btn.classList.remove("selected");
    } else {
      if (selectedGenres.size < 6) {
        selectedGenres.add(genre);
        btn.classList.add("selected");
      }
    }
    startBtn.disabled = selectedGenres.size !== 6;
  };
  genreContainer.appendChild(btn);
});

randomBtn.onclick = () => {
  const shuffled = [...genres].sort(() => 0.5 - Math.random());
  selectedGenres.clear();
  document.querySelectorAll(".genre-btn").forEach(btn => btn.classList.remove("selected"));
  shuffled.slice(0, 6).forEach(name => {
    selectedGenres.add(name);
    [...document.querySelectorAll(".genre-btn")].find(btn => btn.textContent === name).classList.add("selected");
  });
  startBtn.disabled = false;
};

startBtn.onclick = () => {
  const query = encodeURIComponent(JSON.stringify(Array.from(selectedGenres)));
  window.location.href = `quiz.html?genres=${query}`;
};
