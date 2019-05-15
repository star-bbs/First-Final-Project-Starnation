import createQuestLink from './create-quest-link.js';
import api from '../api.js';

const parentElement = document.getElementById('parent-element');
const quests = api.getQuests();

for(let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    const link = createQuestLink(quest);
    parentElement.appendChild(link);
}