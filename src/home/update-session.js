import api from '../api.js';
//TODO: changed const session to just sesson-- does this break the build??
function update(session) {
    session = api.getStars();
    session.navajo = 'completed';
    api.setStars(session);
}
export default update;