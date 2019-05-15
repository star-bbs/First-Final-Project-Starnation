import api from '../api.js';

const stars = document.getElementById('stars');
const profile = {

    loadAll() {
        const session = api.getStars();
        
        for (let i = 0; i < session.constellations.length; i++) {
            const constellation = session.constellations[i];
            profile.loadConstellation(constellation);
        }
    },

    loadConstellation(constellation) {
        const star = document.createElement('img');
        star.src = '../../assets/single-star.png';
        stars.appendChild(star);
    }
}
export default profile;