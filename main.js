
const questions = [
  {
    question: "富士山の高さは？",
    choices: ["3,776m", "2,500m", "4,100m"],
    answer: 0,
    explanation: "富士山の標高は3,776メートルです。"
  },
  {
    question: "水の化学式は？",
    choices: ["H2O", "CO2", "NaCl"],
    answer: 0,
    explanation: "水は水素2つと酸素1つで構成されています。"
  },
  {
    question: "ポコチャのキャラ「あい」の口癖は？",
    choices: ["やった～", "まじで！", "ねぇねぇ"],
    answer: 2,
    explanation: "キャラ「あい」の口癖は「ねぇねぇ」です。"
  }
];

let current = 0;
let startTime;
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const resultEl = document.getElementById("result");

function showQuestion() {
  if (current >= questions.length) {
    resultEl.innerHTML += "<p>全問終了！スコア: " + score + " / " + questions.length + "</p>";
    resultEl.innerHTML += "<button onclick='location.href="index.html"'>トップに戻る</button>";
    return;
  }

  questionEl.textContent = questions[current].question;
  choicesEl.innerHTML = "";
  resultEl.textContent = "";

  startTime = new Date();

  setTimeout(() => {
    questions[current].choices.forEach((choice, idx) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.textContent = choice;
      btn.onclick = () => selectAnswer(idx);
      li.appendChild(btn);
      choicesEl.appendChild(li);
    });
  }, 10000);
}

let score = 0;

function selectAnswer(index) {
  const endTime = new Date();
  const elapsed = Math.round((endTime - startTime) / 1000);
  const q = questions[current];
  const correct = index === q.answer;
  if (correct) score++;

  resultEl.innerHTML = "<p>" + (correct ? "正解！" : "不正解…") + "</p>";
  resultEl.innerHTML += "<p>" + q.explanation + "</p>";
  resultEl.innerHTML += "<p>回答時間: " + elapsed + " 秒</p>";

  current++;
  setTimeout(showQuestion, 3000);
}

showQuestion();
