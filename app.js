const botaoAbrir = document.querySelector('#botao-menu');
const menu = document.querySelector('.menu-lista');

botaoAbrir.addEventListener('click', () => {
  menu.style.display = 'menu-lista';
});
