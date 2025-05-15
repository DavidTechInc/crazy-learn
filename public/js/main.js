// === AOS INIT ===
AOS.init({
  duration: 800,
  once: true,
  offset: 100
});

// === DARK/LIGHT MODE TOGGLE ===
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
  });

  // Apply saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
  }
}

// === BUTTON FEEDBACK ANIMATION ===
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    setTimeout(() => btn.classList.remove("clicked"), 300);
  });
});

// crazy
const quizForm = document.querySelector("form.quiz-form");
if (quizForm) {
  quizForm.addEventListener("submit", (e) => {
    const input = quizForm.querySelector("input[name='answer']");
    if (input.value.trim() === "") {
      e.preventDefault();
      alert("Please enter your answer first.");
    }
  });
}