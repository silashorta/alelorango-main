const menuBtn = document.getElementById('botao-menu');
const menu = document.querySelector('.menu__lista-resp');
const menuIcon = menuBtn.querySelector('img');

menuBtn.addEventListener('click', function() {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    menuIcon.src = 'icon/icons8-menu-arredondado-30.png';
  } else {
    menu.style.display = 'block';
    menuIcon.src = 'icon/icons8-fechar-janela-50.png';
  }
});

