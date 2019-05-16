import api from '../api.js';

const stars = document.getElementById('stars');
const profile = {

    //TODO: created dumb console logs-- our (constellation) param is...useless???? 
    loadConstellation(constellation) {
        const star = document.createElement('img');
        star.src = '../../assets/single-star.png';
        stars.appendChild(star);
        console.log(constellation);
    },
    loadAll() {
        const session = api.getStars();
        
        for(let i = 0; i < session.constellations.length; i++) {
            const constellation = session.constellations[i];
            profile.loadConstellation();
            //constellation
            console.log(constellation);
        }
    }
};
export default profile;