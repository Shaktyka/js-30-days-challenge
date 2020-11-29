window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;

const flowers = document.querySelector('.flowers');

const getFrase = () => {
    const p = document.createElement('p');
    p.classList.add('frase');
    return p;
};

let p = getFrase();
p.textContent = 'Скажите что-нибудь...';

const words = document.querySelector('.words');
words.appendChild(p);

const clear = () => {
    flowers.textContent = '';
    words.innerHTML = '';
    let p = getFrase();
    p.textContent = 'Скажите что-нибудь...';
    words.appendChild(p);
};

recognition.addEventListener('result', (evt) => {
    let transcript = Array.from(evt.results)
        .map((result) => {
            return result[0];
        })
        .map((result) => result.transcript)
        .join('');

    p.textContent = transcript;

    if (evt.results[0].isFinal) {
        p = getFrase();
        words.appendChild(p);
    }

    if (transcript.includes('цветы')) {
        flowers.textContent = flowers.textContent + ' ' + '💐';
    } else if (transcript.includes('котики')) {
        flowers.textContent = flowers.textContent + ' ' + '🙈';
    } else if (transcript.includes('программирование')) {
        flowers.textContent = flowers.textContent + ' ' + '❤️';
    } else if (transcript.includes('очисти')) {
        clear();
    }
});

recognition.addEventListener('end', recognition.start);

recognition.start();