// Попробовать загрузить рандомные картинки через API
/*
const unsplash = new Unsplash({ accessKey: 'ffPLk-BJNnrWt_on2WeTzrg3W9UdHPjO7kPsk9hIdvc' });

unsplash.photos.getRandomPhoto({ collections: ['nature'], count: 5, featured: true })
    .then(toJson)
    .then(json => {
        console.log(json);
    });

1. Можно сделать переключение картинок кликами по стрелкам влево-вправо
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