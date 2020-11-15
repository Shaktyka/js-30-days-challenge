const playSound = (keyCode) => {
    // const keyCode = evt.keyCode;

    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

    if (!audio) {
        return;
    }

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
};

const removeTransition = (evt) => {
    if (evt.propertyName !== 'transform') {
        return;
    }
    evt.target.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
    key.addEventListener('click', () => playSound(key.dataset.key));
    key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', (evt) => playSound(evt.keyCode));