import api from '../api.js';

function update(session) {
    session = api.getStars();
    session.navajo = 'completed';
    api.setStars(session);
}
export default update;