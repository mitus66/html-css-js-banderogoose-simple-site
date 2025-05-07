const form = document.querySelector('#form');
const launchBtn = document.querySelector('#launch-btn');
const goToFormButton = document.querySelector('#go-to-form-btn');
const userEmailField = document.querySelector('#user-email');
const userNameField = document.querySelector('#user-name');

goToFormButton.addEventListener('click', function (e) {
    e.preventDefault();
    form.scrollIntoView();
});

function clearFormFields() {
    userNameField.value = '';
    userEmailField.value = '';
}

function addGooseElement() {
    const targetContainer = document.querySelector('#form');
    const gooseEl = document.createElement('img');
    gooseEl.classList.add('goose-anim');

    targetContainer.appendChild(gooseEl);
}

function showGooseAnim(callback) {
    const gooseEl = document.querySelector('.goose-anim');

    gooseEl.setAttribute('src', './img/goose-anim.gif');

    setTimeout(() => {
        gooseEl.removeAttribute('src');
        if (typeof callback === 'function') {
            callback();
        }
    }, 4000);
}

addGooseElement();

form.addEventListener('submit', e => {
    e.preventDefault();

    if (userEmailField?.value?.length > 320) {
        alert('Email надто довгий');
        return;
    }

    console.log('Імʼя користувача: ', userNameField.value);
    console.log('Email користувача: ', userEmailField.value);

    launchBtn.setAttribute('disabled', true);
    launchBtn.style.opacity = '0.7';

    showGooseAnim(() => {
        clearFormFields(); // очищення
        launchBtn.removeAttribute('disabled'); // активуємо кнопку знову
        launchBtn.style.opacity = '1';
    });
});
