(function () {
  const STORAGE_KEY = 'unfd-theme';
  const root = document.documentElement;

  function readTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {}
  }

  function updateButton(theme) {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;

    const label = theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro';
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    updateButton(theme);
  }

  applyTheme(readTheme() === 'light' ? 'light' : 'dark');

  document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.theme-toggle');
    updateButton(root.getAttribute('data-theme'));
    if (!button) return;

    button.addEventListener('click', function () {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      saveTheme(next);
    });
  });
})();
