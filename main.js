
const genres = ["一般常識", "地理歴史", "科学", "漫画アニメ", "映画", "歌手", "都道府県", "英語", "数学", "ポコチャ"];
const questions = {
  "一般常識": [
    { q: "日本の首都は？", a: ["東京", "大阪", "京都", "名古屋"], c: 0 },
    { q: "1週間は何日？", a: ["5", "6", "7", "8"], c: 2 }
  ],
  "ポコチャ": [
    { q: "ポコチャのマスコットの色は？", a: ["ピンク", "青", "緑", "黄色"], c: 1 },
    { q: "ポコチャで配信されるコンテンツは？", a: ["ライブ配信", "音楽CD", "漫画", "写真"], c: 0 }
  ]
};

let selectedGenres = [];
const genreContainer = document.getElementById("genres");
const startBtn = document.getElementById("startQuiz");

genres.forEach(name => {
  const btn = document.createElement("button");
  btn.textContent = name;
  btn.onclick = () => {
    btn.classList.toggle("selected");
    if (selectedGenres.includes(name)) {
      selectedGenres = selectedGenres.filter(g => g !== name);
    } else if (selectedGenres.length < 6) {
      selectedGenres.push(name);
    } else {
      alert("最大6ジャンルまで選択可能です");
      return;
    }
    startBtn.disabled = selectedGenres.length === 0;
  };
  genreContainer.appendChild(btn);
});

startBtn.onclick = () => {
  const quizDiv = document.getElementById("quiz");
  quizDiv.style.display = "block";
  genreContainer.style.display = "none";
  startBtn.style.display = "none";

  let selectedQuestions = [];
  selectedGenres.forEach(g => {
    if (questions[g]) selectedQuestions.push(...questions[g]);
  });

  selectedQuestions = selectedQuestions.sort(() => 0.5 - Math.random()).slice(0, 6);

  let index = 0;
  const render = () => {
    const q = selectedQuestions[index];
    quizDiv.innerHTML = `<h2>Q${index + 1}: ${q.q}</h2>`;
    q.a.forEach((ans, i) => {
      const b = document.createElement("button");
      b.textContent = ans;
      b.onclick = () => {
        if (i === q.c) alert("正解！");
        else alert("不正解！");
        index++;
        if (index < selectedQuestions.length) render();
        else quizDiv.innerHTML = "<h2>終了！おつかれさまでした。</h2>";
      };
      quizDiv.appendChild(b);
    });
  };
  render();
};
