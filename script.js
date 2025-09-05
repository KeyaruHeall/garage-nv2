function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));

  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  }
}

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
});
document.querySelectorAll('.checklist input[type="checkbox"]').forEach((checkbox, index) => {
  const saved = localStorage.getItem(`tool-${index}`);
  if (saved === 'true') checkbox.checked = true;

  checkbox.addEventListener('change', () => {
    localStorage.setItem(`tool-${index}`, checkbox.checked);
  });
});
document.querySelectorAll('.checklist input[type="checkbox"]').forEach((checkbox, index) => {
  const key = `checklist-${checkbox.closest('section').id}-${index}`;
  const saved = localStorage.getItem(key);
  if (saved === 'true') checkbox.checked = true;

  checkbox.addEventListener('change', () => {
    localStorage.setItem(key, checkbox.checked);
  });
});