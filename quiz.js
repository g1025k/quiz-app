let questions = [];
let currentIndex = 0;
let score = 0;

fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        questions = shuffleArray(data).slice(0, 6);
        showNextQuestion();
    });

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showNextQuestion() {
    const container = document.getElementById("quiz-container");
    const questionElem = document.getElementById("question");
    const choicesElem = document.getElementById("choices");
    const feedbackElem = document.getElementById("feedback");
    const nextBtn = document.getElementById("next-btn");

    feedbackElem.innerHTML = "";
    choicesElem.innerHTML = "";
    nextBtn.style.display = "none";

    if (currentIndex >= questions.length) {
        questionElem.innerHTML = `終了！あなたのスコアは ${score} / ${questions.length} です。<br><br><a href="index.html">トップに戻る</a>`;
        return;
    }

    const q = questions[currentIndex];
    questionElem.innerText = q.question;

    q.choices.forEach((choice, i) => {
        const btn = document.createElement("button");
        btn.innerText = choice;
        btn.onclick = () => {
            if (i === q.answer) {
                score++;
                feedbackElem.innerHTML = "<p style='color:green;'>正解！</p><p>" + q.explanation + "</p>";
            } else {
                feedbackElem.innerHTML = "<p style='color:red;'>不正解！</p><p>正解は「" + q.choices[q.answer] + "」です。<br>" + q.explanation + "</p>";
            }
            nextBtn.style.display = "block";
        };
        choicesElem.appendChild(btn);
    });

    currentIndex++;
}