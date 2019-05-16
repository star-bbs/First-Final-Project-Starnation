import api from '../api.js';
import createQuestLink from './create-quest-link.js';
//TODO: what the hell is wrong with session??
function createCompletedQuest(quest) {
    api.getStars();

    const link = createQuestLink(quest);
    link.classList.add('completed');
    return link;
}
export default createCompletedQuest;