import api from '../api.js';
import createQuestLink from './create-quest-link.js';

function createCompletedQuest(quest) {
    api.getStars();

    const link = createQuestLink(quest);
    link.classList.add('completed');
    return link;
}
export default createCompletedQuest;