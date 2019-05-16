import api from '../api.js';
import populateSky from './populate-sky.js';

const session = api.getStars();
populateSky(session);