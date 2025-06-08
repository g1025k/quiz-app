
async function startQuiz() {
  const res = await fetch("一般常識.json");
  const data = await res.json();
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  let current = 0;

  function showQuestion() {
    const q = data[current];
    container.innerHTML = `<h2>Q${current + 1}. ${q.question}</h2>` +
      q.choices.map(c => `<button onclick="answer('${c}')">${c}</button>`).join("<br>");
  }

  window.answer = function (choice) {
    const correct = data[current].answer;
    const expl = data[current].explanation;
    alert(choice === correct ? "正解！\n" + expl : "不正解...\n" + expl);
    current++;
    if (current < data.length) showQuestion();
    else container.innerHTML = "<h3>終了！お疲れ様でした。</h3>";
  };

  showQuestion();
}
