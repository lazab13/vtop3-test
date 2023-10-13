let headerToggle = document.querySelector('.main-header__button');
let headerLanguage = document.querySelector('.main-header__button-box');

headerToggle.addEventListener('click', function () {
  if (headerLanguage.classList.contains('main-header__button-box--en')) {
    headerLanguage.classList.remove('main-header__button-box--en');
    headerLanguage.classList.add('main-header__button-box--ru');
  } else {
    headerLanguage.classList.add('main-header__button-box--en');
    headerLanguage.classList.remove('main-header__button-box--ru');
  }
});
