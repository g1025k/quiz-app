
const genres = [
  "一般常識", "地理歴史", "スポーツ", "科学", "漫画アニメ", "映画",
  "歌手", "都道府県", "英語", "数学", "ポコチャ"
];
const container = document.getElementById("genre-buttons");
const selected = new Set();

genres.forEach(genre => {
  const btn = document.createElement("button");
  btn.textContent = genre;
  btn.onclick = () => {
    if (selected.has(genre)) {
      selected.delete(genre);
      btn.classList.remove("selected");
    } else if (selected.size < 6) {
      selected.add(genre);
      btn.classList.add("selected");
    }
  };
  container.appendChild(btn);
});

document.getElementById("start-btn").onclick = () => {
  if (selected.size === 0) {
    alert("ジャンルを1つ以上選択してください。");
    return;
  }
  alert("クイズを開始します：" + [...selected].join(", "));
};
    