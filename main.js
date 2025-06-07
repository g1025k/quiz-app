
const questions = [
    {
        question: "第二次世界大戦で日本が1941年に攻撃したアメリカの軍港はどこか。",
        choices: ["真珠湾", "サイパン", "ミッドウェー", "グアム"],
        correct: 0,
        explanation: "真珠湾攻撃により、日本とアメリカは正式に開戦しました。これが太平洋戦争の始まりです。"
    },
    {
        question: "日本の首都はどこ？",
        choices: ["大阪", "東京", "福岡", "札幌"],
        correct: 1,
        explanation: "日本の首都は東京です。"
    }
];

let currentIndex = 0;
let score = 0;

const questionBox = document.getElementById("question-box");
const choicesList = document.getElementById("choices");
const feedbackBox = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");

function showQuestion() {
    const q = questions[currentIndex];
    questionBox.textContent = q.question;
    choicesList.innerHTML = "";
    feedbackBox.textContent = "";
    q.choices.forEach((choice, index) => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.textContent = choice;
        btn.onclick = () => handleAnswer(index);
        li.appendChild(btn);
        choicesList.appendChild(li);
    });
}

function handleAnswer(selected) {
    const q = questions[currentIndex];
    const correct = q.correct;
    if (selected === correct) {
        score++;
        feedbackBox.innerHTML = "正解！<br>答え：" + q.choices[correct] + "<br>解説：" + q.explanation;
    } else {
        feedbackBox.innerHTML = "不正解！<br>正解：" + q.choices[correct] + "<br>解説：" + q.explanation;
    }
    Array.from(choicesList.getElementsByTagName("button")).forEach(btn => {
        btn.disabled = true;
    });
}

nextButton.onclick = () => {
    currentIndex++;
    if (currentIndex < questions.length) {
        showQuestion();
    } else {
        questionBox.textContent = "全てのクイズが終了しました！あなたのスコアは " + score + " / " + questions.length;
        choicesList.innerHTML = "";
        feedbackBox.innerHTML = '<a href="index.html">トップに戻る</a>';
        nextButton.style.display = "none";
    }
};

showQuestion();
