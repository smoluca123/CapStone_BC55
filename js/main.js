const $e = document.querySelector.bind(document);
const darkBtn = $e('.dark-btn');
const lightBtn = $e('.light-btn');

var isDarkTheme = JSON.parse(localStorage.getItem('darkTheme')) || false;
$e('.dark-light').onclick = function () {
  toggleTheme(isDarkTheme);
};

renderTheme(isDarkTheme);

function toggleTheme(isDark) {
  document.body.classList.toggle('dark', !isDark);
  darkBtn.classList.toggle('btn-hide', !isDark);
  lightBtn.classList.toggle('btn-hide', isDark);
  isDarkTheme = !isDarkTheme;
  localStorage.setItem('darkTheme', isDarkTheme);
}

function renderTheme(isDark) {
  document.body.classList.toggle('dark', isDark);
  darkBtn.classList.toggle('btn-hide', !isDark);
  lightBtn.classList.toggle('btn-hide', isDark);
}
