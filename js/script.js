'use strict';
// ctrl + shift + l

// Массив объявлений
const dataBase = [];

const modalAdd = document.querySelector('.modal__add');
const modalItem = document.querySelector('.modal__item');

const btnAdd = document.querySelector('.add__ad');
const btnSubmit = document.querySelector('.modal__btn-submit');
const submitForm = document.querySelector('.modal__submit');
const catalog = document.querySelector('.catalog');
const modalBtnWarning = document.querySelector('.modal__btn-warning');

// Создается коллекция из дочерних элементов
// Она не очень удобна, поэтому из нее делаем обычный массив
const elementsModalSubmit = [...submitForm.elements]
    .filter((elem) => {
        return elem.tagName !== 'BUTTON';
    });
// Оператор спред - просто перечисление через , всех элементов

// Чтобы получить массив из элементов, необходимо их просто обернуть в []
submitForm.addEventListener('input', () => {
    const validForm = elementsModalSubmit.every(elem => elem.value);
    btnSubmit.disabled = !validForm;
    modalBtnWarning.style.display = validForm ? 'none' : '';
})

const closeModal = () => {
        modalAdd.classList.add('hide');
        modalItem.classList.add('hide');
        submitForm.reset();
        document.removeEventListener('keydown', closeModal);

        btnSubmit.disabled = true;
        modalBtnWarning.style.display = '';
}

btnAdd.addEventListener('click', () => {
    modalAdd.classList.remove('hide');
    btnSubmit.disabled = true;
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') 
            closeModal();
    });
});

modalAdd.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('modal__close') || target === modalAdd) {
        closeModal();
    }
});

catalog.addEventListener('click', (event) => {
    const target = event.target;
    if (target.closest('.card')) {
        modalItem.classList.remove('hide');
        document.addEventListener('keydown', (event) => {
            if (event.code === 'Escape') 
                closeModal();
        });
    }
});

modalItem.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('modal__close') || target === modalItem) {
        closeModal();
    }
});

// Задача - проверить на заполнение все поля формы
// Убрать надпись про заполнение полей и открыть отправку

submitForm.addEventListener('submit', event => {
    event.preventDefault();
    const itemObject = {};

    for (const elem of elementsModalSubmit) {
        itemObject[elem.name] = elem.value;
    }
    dataBase.push(itemObject);
    closeModal();
});