import buttonChoice from './button-choice.js';

const helpMoon = document.getElementById('index-form');

helpMoon.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(helpMoon);
    buttonChoice(formData);
});