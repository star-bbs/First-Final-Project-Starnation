import api from '../api.js';

function loadProfile() {
    const stars = document.getElementById('stars');
    const session = api.getStars();
    const star = document.createElement('img');
    star.src = '../../assets/single-star.png';

    for (let i = 0; i < session.constellations.length; i++) {
        const element = session.constellations[i];
        stars.appendChild(star);
        console.log(i);
        
    }
}
export default loadProfile;