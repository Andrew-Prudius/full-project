import '../scss/style.scss'
import "../scss/start.scss"
import "../scss/brands.scss"
import "../scss/menu.scss"
import "../scss/feedback.scss"
import "../scss/media.scss"
import "../scss/normalize.scss"

 // свайпер

 var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    slidesPerView: 'auto'

  });

  // Кнопки брендов

  const buttonOpen = document.querySelector('#button-open');
  const buttonClose = document.querySelector('#button-close');
  const allBrandsList = document.querySelector('.all-brands__list');

  buttonOpen.addEventListener('click', function () {
    allBrandsList.classList.add("screenClose");
    buttonOpen.style.display = "none";
    buttonClose.style.display = "flex";
  });

  buttonClose.addEventListener('click', function () {
    allBrandsList.classList.remove("screenClose");
    buttonClose.style.display = "none";
    buttonOpen.style.display = "flex";
    
  });

  // Кнопки ремонта ноутбуков

const buttonUnblock = document.querySelector('#button-unblock'); 
const buttonShut = document.querySelector('#button-shut'); 
const allRepairList = document.querySelector('.all-repairs__list'); 

buttonUnblock.addEventListener('click', function () { 
  allRepairList.classList.add("frontClose"); 
  buttonUnblock.style.display = "none"; 
  buttonShut.style.display = "flex"; 
}); 

buttonShut.addEventListener('click', function () { 
  allRepairList.classList.remove("frontClose"); 
  buttonShut.style.display = "none"; 
  buttonUnblock.style.display = "flex"; 
});

 // Обратная связь

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup__close-btn');
const openPopupBtn = document.querySelector('.open-popup-btn');

openPopupBtn.addEventListener('click', function () { 
  popup.style.display = 'flex';
});

closeBtn.addEventListener('click', function () { 
  popup.style.display = 'none';
});

// Обратная связь 768px

const popups = document.querySelector('.popups');
const closeBtns = document.querySelector('.popup__close-btns');
const openPopupBtns = document.querySelector('.open-popup-btns');

openPopupBtns.addEventListener('click', function () { 
  popup.style.display = 'flex';
});

closeBtns.addEventListener('click', function () { 
  popup.style.display = 'none';
});

// Заказать звонок

const callsPopup = document.querySelector('.callsPopup');
const closeCallsPopup = document.querySelector('.closeCallsPopup');
const openCallsPopup = document.querySelector('.openCallsPopup');

openCallsPopup.addEventListener('click', function () { 
  callsPopup.style.display = 'flex';
});

closeCallsPopup.addEventListener('click', function () { 
  callsPopup.style.display = 'none';
});

// Заказать звонок 768

const callsPopups = document.querySelector('.callsPopups');
const closeCallsPopups = document.querySelector('.closeCallsPopups');
const openCallsPopups = document.querySelector('.openCallsPopups');

openCallsPopups.addEventListener('click', function () { 
  callsPopup.style.display = 'flex';
});

closeCallsPopups.addEventListener('click', function () { 
  callsPopup.style.display = 'none';
});

// Показать/скрыть текст в самом начале

const buttonTextOpen = document.getElementById('buttonTextOpen');
const buttonTextClose = document.getElementById('buttonTextClose');
const hiddenText = document.getElementById('hidden-text');

buttonTextOpen.addEventListener('click', () => {
  hiddenText.classList.remove('textClose');
  buttonTextOpen.style.display = 'none';
  buttonTextClose.style.display = 'flex';
});

buttonTextClose.addEventListener('click', () => {
  hiddenText.classList.add('textClose');
  buttonTextOpen.style.display = 'flex';
  buttonTextClose.style.display = 'none';
});

// мобильный бургер

const burger = document.querySelector('.burger');
const closeBurger = document.querySelector('.closeBurger');
const openBurger = document.querySelector('.openBurger');

openBurger.addEventListener('click', function () { 
  burger.style.display = 'flex';
});

closeBurger.addEventListener('click', function () { 
  burger.style.display = 'none';
});



