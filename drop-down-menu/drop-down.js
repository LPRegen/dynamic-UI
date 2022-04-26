'use strict';

const displayBtn = document.querySelector('#btn-click-display');
const contentItems = document.querySelector('.content-items-click');

displayBtn.addEventListener('click', () => {
  contentItems.classList.toggle('clicked');
});
