const menuBtn = document.getElementById('botao-menu');
const menu = document.querySelector('.menu__lista-resp');
let menuIcon = menuBtn.querySelector('img');

menuBtn.addEventListener('click', function () {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        menuIcon.src = 'icon/icons8-menu-arredondado-30.png';
        menuIcon.classList.remove('rotated');
    } else {
        menu.style.display = 'block';
        menuIcon.src = 'icon/icons8-excluir-24.png';
        menuIcon.classList.add('rotated');
    }
});


const comoParticipar = document.querySelector('#botao-como-participar');
const botaoPremios = document.querySelector('#botao-premios')
comoParticipar.addEventListener('click', function () {
    console.log('clicado')
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        menuIcon.src = 'icon/icons8-excluir-24.png';
    } else {
        menu.style.display = 'block';
        menuIcon.src = 'icon/icons8-menu-arredondado-30.png';
    }
    menuIcon.src = 'icon/icons8-menu-arredondado-30.png';
});
botaoPremios.addEventListener('click', function () {
    console.log('clicado')
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }

    menuIcon.src = 'icon/icons8-menu-arredondado-30.png';
});
const botaoRegulamento = document.querySelector('#botao-regulamento')
botaoRegulamento.addEventListener('click', function () {
    console.log('clicado')
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }

    menuIcon.src = 'icon/icons8-menu-arredondado-30.png';
});




