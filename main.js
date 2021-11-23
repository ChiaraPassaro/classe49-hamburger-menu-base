const buttonOpen = document.querySelector('.header-right a i');
const buttonClose = document.querySelector('.close i');
const hamburgerMenu = document.querySelector('.hamburger-menu');

console.log(buttonOpen, buttonClose);


buttonOpen.addEventListener('click',
  function () {
    hamburgerMenu.classList.add('active');
  }
);

buttonClose.addEventListener('click',
  function () {
    hamburgerMenu.classList.remove('active');
  }
);

const list = document.querySelector('.header-right ul');
const text = 'Link nuovo';
const li = `<li><a href="#">${text}</a></li>`;
console.log(list.innerHTML);
// list.innerHTML = list.innerHTML + li;
list.innerHTML += li;