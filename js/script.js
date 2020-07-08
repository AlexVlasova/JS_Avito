'use strict';
// ctrl + shift + l

const modalAdd = document.querySelector('.modal__add');
const modalItem = document.querySelector('.modal__item');
const btnAdd = document.querySelector('.add__ad');
const btnSubmit = document.querySelector('.modal__btn-submit');
const submitForm = document.querySelector('.modal__submit');
const catalog = document.querySelector('.catalog');

document.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode;

    if (keyCode === 27) {
        modalAdd.classList.add('hide');
        modalItem.classList.add('hide');
    }
});

btnAdd.addEventListener('click', () => {
    modalAdd.classList.remove('hide');
    btnSubmit.disabled = true;
});

modalAdd.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('modal__close') || target === modalAdd) {
        modalAdd.classList.add('hide');
        submitForm.reset();
    }
});

catalog.addEventListener('click', (event) => {
    const target = event.target;

    if (target.closest('.card')) {
        modalItem.classList.remove('hide');
    }
});

modalItem.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('modal__close') || target === modalItem) {
        modalItem.classList.add('hide');
    }
});