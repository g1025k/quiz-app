
const genres = ["一般常識", "地理歴史", "科学", "漫画アニメ", "映画", "歌手", "都道府県", "英語", "数学", "ポコチャ"];
const selectedGenres = [];

const genreList = document.getElementById("genre-list");
const startBtn = document.getElementById("startBtn");
const randomBtn = document.getElementById("randomBtn");

genres.forEach(genre => {
  const btn = document.createElement("button");
  btn.textContent = genre;
  btn.onclick = () => toggleGenre(genre, btn);
  genreList.appendChild(btn);
});

randomBtn.onclick = () => {
  selectedGenres.length = 0;
  Array.from(genreList.children).forEach(btn => btn.classList.remove("selected"));
  const shuffled = [...genres].sort(() => Math.random() - 0.5);
  for (let i = 0; i < 6; i++) {
    selectedGenres.push(shuffled[i]);
    const btn = Array.from(genreList.children).find(b => b.textContent === shuffled[i]);
    if (btn) btn.classList.add("selected");
  }
  startBtn.disabled = false;
};

startBtn.onclick = () => {
  if (selectedGenres.length === 6) {
    alert("クイズ開始！選択ジャンル: " + selectedGenres.join(", "));
    // クイズページに遷移させる処理などをここに
  }
};

function toggleGenre(genre, btn) {
  if (btn.classList.contains("selected")) {
    btn.classList.remove("selected");
    const index = selectedGenres.indexOf(genre);
    if (index !== -1) selectedGenres.splice(index, 1);
  } else {
    if (selectedGenres.length < 6) {
      btn.classList.add("selected");
      selectedGenres.push(genre);
    }
  }
  startBtn.disabled = selectedGenres.length !== 6;
}
