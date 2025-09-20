'use strict';

//modal elements
const modalEl = document.querySelector('.modal');

//overlay modal
const overlayEl = document.querySelector('.overlay');

//close modal
const btnCloseModalEl = document.querySelector('.close-modal');

//open modal
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

let lastFocusedButton = null;

const openModal = function () {
    modalEl.classList.remove('hidden');
    overlayEl.classList.remove('hidden');
    modalEl.focus();
    lastFocusedButton = document.activeElement;
};

const closeModal = function () {
    modalEl.classList.add('hidden');
    overlayEl.classList.add('hidden');
    if (lastFocusedButton) {
    lastFocusedButton.focus();
  }
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
        closeModal();
    }
});

modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');

btnCloseModalEl.setAttribute('aria-label', 'Close modal');