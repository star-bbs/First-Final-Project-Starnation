import quest from './quest/quest-data.js';

const api = {
    storage: localStorage,
    setStars(session) {
        const json = JSON.stringify(session);
        api.storage.setItem('session', json);
    },
    getStars() {
        const json = api.storage.getItem('session');
        if(!json) return null;
        const session = JSON.parse(json);
        return session;
    }
}