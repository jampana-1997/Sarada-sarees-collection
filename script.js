const toggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("sarada-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  toggle.textContent = "🌙";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  localStorage.setItem("sarada-theme", dark ? "dark" : "light");
  toggle.textContent = dark ? "🌙" : "☀️";
});
