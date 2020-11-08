/*
Развитие:
1. Можно сделать переключение картинок кликами по стрелкам влево-вправо
2. Подключить авторизацию
3. Написать на реакте
4. Сделать возможность создавать и сохранять свои галереи
 */

const panels = document.querySelectorAll('.panel');

// Переключение класса 'open'
function toggleOpen(evt) {
    const target = evt.target.closest('.panel');
    const opened = document.querySelector('.open');
    if (target !== opened) {
        target.classList.add('open');
        if (opened) {
            opened.classList.remove('open');
        }
    } else {
        target.classList.remove('open');
    }
};

// Переключение класса 'open-active'
function toggleActive(evt) {
    if (evt.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
};

// Обработчики на клик по панели
panels.forEach(item => {
    item.addEventListener('click', toggleOpen);
});

// Обработчики на событие окончания перехода (анимации)
panels.forEach(item => {
    item.addEventListener('transitionend', toggleActive);
});