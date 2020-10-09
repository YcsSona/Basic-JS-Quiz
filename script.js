// Store all the correct answers
const correctAnswers = ["A", "A", "B", "A"];

const form = document.querySelector(".quiz-form");

const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  // Prevents default refreshing when submitting
  e.preventDefault();

  let score = 0;

  // Getting values from the form input fields
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // Comparing userAnswers with the correctAnswers by checking positions
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  // First scroll to top then show result
  scrollTo(0, 0);

  // Show result on page
  // result.querySelector('span').textContent = `${score}%`;
  result.classList.remove("d-none");

  // Just to animate the score
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
