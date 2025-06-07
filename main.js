const genres = [
  "一般常識", "地理歴史", "スポーツ", "科学", "漫画アニメ",
  "映画", "歌手", "都道府県", "英語", "数学", "ポコチャ"
];

const genreButtonsDiv = document.getElementById("genre-buttons");
const startButton = document.getElementById("startButton");
let selected = [];

genres.forEach(genre => {
  const btn = document.createElement("button");
  btn.innerText = genre;
  btn.onclick = () => {
    if (selected.includes(genre)) {
      selected = selected.filter(g => g !== genre);
      btn.style.backgroundColor = "#007BFF";
    } else {
      if (selected.length >= 6) {
        alert("最大6ジャンルまで選べます");
        return;
      }
      selected.push(genre);
      btn.style.backgroundColor = "#28a745";
    }
    startButton.style.display = selected.length > 0 ? "inline-block" : "none";
  };
  genreButtonsDiv.appendChild(btn);
});

startButton.onclick = () => {
  alert("選択されたジャンル: " + selected.join(", ") + "\n※今後クイズが出題されます。");
};
