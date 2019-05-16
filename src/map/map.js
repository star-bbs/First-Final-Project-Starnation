import createQuestLink from './create-quest-link.js';
import api from '../api.js';
import profile from './load-profile.js';
import createCompletedQuest from './create-completed-quest.js';
import hasCompletedAllQuests from './has-completed-all-quests.js';

profile.loadAll();


const parentElement = document.getElementById('parent-element');
const quests = api.getQuests();
const session = api.getStars();

<<<<<<< HEAD
if(hasCompletedAllQuests(quests, session)) {
    window.location = './end.html';
}
=======
// const questImg = document.getElementById('')
>>>>>>> 5a928ee8178fc05638e8d740c8506572a667886d

for(let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    let link = null;

    if(session.completed[quest.id]) {
        link = createCompletedQuest(quest);
    } else {
        link = createQuestLink(quest);
        parentElement.appendChild(link);
        console.log(link);
    }
}

// for(let i = 0; i < quests.length; i++) {
//     const quest = quests[i];
//     const link = createQuestLink(quest);
//     parentElement.appendChild(link);
// }

// if(session.completed[quest.id]) {
//     link = createCompletedQuest(quest);
// } 