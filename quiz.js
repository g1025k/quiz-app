const urlParams = new URLSearchParams(window.location.search);
const genres = JSON.parse(decodeURIComponent(urlParams.get("genres")));
const quizContainer = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const timerEl = document.getElementById("timer");

let current = 0;
let score = 0;
let startTime = 0;

const questions = Array.from({ length: 6 }).map((_, i) => ({
  question: `(${genres[i]}) 問題${i + 1}の内容です。`,
  correct: "正解",
  options: ["正解", "不正解A", "不正解B"],
  explanation: "これは正解の理由です。"
}));

function showQuestion() {
  const q = questions[current];
  questionEl.textContent = q.question;
  choicesEl.innerHTML = "";
  feedbackEl.textContent = "";
  timerEl.textContent = "";

  startTime = Date.now();
  setTimeout(() => {
    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => {
        const timeTaken = ((Date.now() - startTime) / 1000).toFixed(1);
        if (opt === q.correct) {
          score++;
          feedbackEl.textContent = `⭕ 正解！ (${timeTaken}秒) 解説: ${q.explanation}`;
        } else {
          feedbackEl.textContent = `❌ 不正解 (${timeTaken}秒) 解説: ${q.explanation}`;
        }
        setTimeout(() => {
          current++;
          if (current < questions.length) {
            showQuestion();
          } else {
            quizContainer.innerHTML = `<h1>スコア: ${score} / 6</h1><button onclick="location.href='index.html'">トップに戻る</button>`;
          }
        }, 3000);
      };
      choicesEl.appendChild(btn);
    });
  }, 10000);
}

showQuestion();
