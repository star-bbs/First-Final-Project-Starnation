import makeSession from './make-session.js';
import api from '../api.js';

const helpMoon = document.getElementById('index-form');

helpMoon.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(helpMoon);
    const session = makeSession(formData);

    api.setStars(session); 

    console.log(session);
});
