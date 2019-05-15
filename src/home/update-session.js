import api from '../api.js';
//TODO: score quest function-- check guide, understand what params to pass?
function update(session) {
    const session = api.getStars();
    session.navajo = 'completed';
    api.setStars(session);
}
export default update;