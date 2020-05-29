import createQuestLink from './create-quest-link.js';

function createCompletedQuest(quest) {
    const link = createQuestLink(quest);
    link.classList.add('completed');
    return link;
}
export default createCompletedQuest;