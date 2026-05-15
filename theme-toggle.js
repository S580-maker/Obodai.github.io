document.addEventListener('DOMContentLoaded', function () {
  const root = document.body;
  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  const storedTheme = localStorage.getItem('theme');

  function getTimeBasedTheme() {
    const hour = new Date().getHours();
    return hour >= 7 && hour < 19 ? 'light' : 'dark';
  }

  const initialTheme = storedTheme || getTimeBasedTheme();

  function applyTheme(theme) {
    const isLight = theme === 'light';
    root.classList.toggle('light-mode', isLight);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    toggle.textContent = isLight ? '☾' : '☀';
    toggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
  }

  toggle.addEventListener('click', function () {
    const nextTheme = root.classList.contains('light-mode') ? 'dark' : 'light';
    applyTheme(nextTheme);
  });

  applyTheme(initialTheme);
});