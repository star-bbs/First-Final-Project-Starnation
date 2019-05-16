import api from '../api.js';

function update(session) {
    const session = api.getStars();
    session.navajo = 'completed';
    api.setStars(session);
}
export default update;