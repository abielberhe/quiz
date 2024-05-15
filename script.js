let currentQuestion = 1;
let score = 0;

function nextQuestion() {
  const currentQuestionDiv = document.getElementById("question" + currentQuestion);
  const selectedOption = document.querySelector('input[name="q' + currentQuestion + '"]:checked');

  if (selectedOption) {
    if (selectedOption.value === "ጥርሙዝ" && currentQuestion === 1) score++;
    if (selectedOption.value === "ሰንበት" && currentQuestion === 2) score++;
    if (selectedOption.value === "ዕድመ" && currentQuestion === 3) score++;
    if (selectedOption.value === "ለይቲ" && currentQuestion === 4) score++;
    if (selectedOption.value === "ወሓዚ" && currentQuestion === 5) score++;
    if (selectedOption.value === "ጀምስ" && currentQuestion === 6) score++;
    if (selectedOption.value === "ዮሴፍ" && currentQuestion === 7) score++;
    if (selectedOption.value === "ግብጺ" && currentQuestion === 8) score++;
    if (selectedOption.value === "ኪሎ" && currentQuestion === 9) score++;
    if (selectedOption.value === "ዓዲ" && currentQuestion === 10) score++;
  }

  currentQuestionDiv.style.display = "none";
  currentQuestion++;

  const nextQuestionDiv = document.getElementById("question" + currentQuestion);
  if (nextQuestionDiv) {
    nextQuestionDiv.style.display = "block";
    if (currentQuestion === 11) {
      document.getElementById("nextBtn").style.display = "none";
      showResult();
    }
  } else {
    document.getElementById("nextBtn").style.display = "none"; // Hide next button if there are no more questions
    showResult(); // Show result directly when there are no more questions
  }
}

function showResult() {
  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = `ካብ 10 ሕቶታት ${score} መሊስካ/ኪ።`;
  resultContainer.style.display = "block";
  document.getElementById("retryBtn").style.display = "block"; // Show retry button
}

function retryQuiz() {
  currentQuestion = 1;
  score = 0;
  document.getElementById("result").style.display = "none"; // Hide result
  document.getElementById("retryBtn").style.display = "none"; // Hide retry button

  // Reset all questions to initial state
  for (let i = 1; i <= 10; i++) {
    const questionDiv = document.getElementById("question" + i);
    const radioInputs = questionDiv.getElementsByTagName("input");
    for (let j = 0; j < radioInputs.length; j++) {
      radioInputs[j].checked = false;
    }
    if (i === 1) {
      questionDiv.style.display = "block";
    } else {
      questionDiv.style.display = "none";
    }
  }

  document.getElementById("nextBtn").style.display = "block"; // Show next button
}
