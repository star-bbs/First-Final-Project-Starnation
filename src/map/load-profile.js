import api from '../api.js';

const stars = document.getElementById('stars');
const profile = {

    loadConstellation() {
        const star = document.createElement('img');
        star.src = '../../assets/single-star.png';
        stars.appendChild(star);

    },
    loadAll() {
        const session = api.getStars();
        
        for(let i = 0; i < session.constellations.length; i++) {
            session.constellations[i];
            profile.loadConstellation();
        }
    }
};
export default profile;