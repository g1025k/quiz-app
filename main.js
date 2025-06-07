
const quizData = [
  {
    question: "日本の首都はどこ？",
    options: ["大阪", "京都", "東京", "札幌"],
    answer: "東京"
  },
  {
    question: "地球は何番目の惑星？",
    options: ["1番目", "3番目", "5番目", "2番目"],
    answer: "3番目"
  },
  {
    question: "水の化学式は？",
    options: ["H2O", "CO2", "NaCl", "O2"],
    answer: "H2O"
  },
  {
    question: "日本の通貨は？",
    options: ["ドル", "ユーロ", "円", "ウォン"],
    answer: "円"
  },
  {
    question: "リンゴは英語で？",
    options: ["Banana", "Carrot", "Apple", "Melon"],
    answer: "Apple"
  },
  {
    question: "富士山の高さは？（m）",
    options: ["1000", "3776", "4200", "1500"],
    answer: "3776"
  }
];

let current = 0;
const maxQuestions = 6;
let score = 0;

const shuffled = quizData.sort(() => 0.5 - Math.random()).slice(0, maxQuestions);

function showQuestion() {
  const container = document.getElementById("quiz-container");
  const questionNumber = document.getElementById("question-number");
  const questionText = document.getElementById("question-text");
  const optionsDiv = document.getElementById("options");
  const feedback = document.getElementById("feedback");
  feedback.textContent = "";

  if (current >= shuffled.length) {
    container.innerHTML = `<h2>クイズ終了！</h2><p>あなたのスコア: ${score}/${maxQuestions}</p><button onclick="location.href='index.html'">トップに戻る</button>`;
    return;
  }

  const q = shuffled[current];
  questionNumber.textContent = "Q" + (current + 1);
  questionText.textContent = q.question;
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "option-button";
    btn.onclick = () => {
      if (opt === q.answer) {
        feedback.textContent = "正解！";
        feedback.style.color = "green";
        score++;
      } else {
        feedback.textContent = `不正解... 正解は「${q.answer}」です`;
        feedback.style.color = "red";
      }
      setTimeout(() => {
        current++;
        showQuestion();
      }, 1000);
    };
    optionsDiv.appendChild(btn);
  });
}

window.onload = showQuestion;
