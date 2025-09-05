function showPage(id) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function showPage(id) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Alternar tema
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Carregar tema salvo
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');

  // Salvar preferência
  if (body.classList.contains('light-theme')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
});