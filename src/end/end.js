import api from '../api.js';
import populateSky from './populate-sky.js';

const session = api.getStars();
// limit data to what's needed
populateSky(session.constellations);