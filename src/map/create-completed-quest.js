import api from '../api.js';
import createQuestLink from './create-quest-link.js';

function createCompletedQuest(quest) {
    const session = api.getStars();
    // const link = document.getElementById(quest.id);
    const link = createQuestLink(quest);
    link.classList.add('completed');
    return link;
}
export default createCompletedQuest;



// const span = document.createElement('span');
// span.classList.add('completed-quest');
// const searchParams = new URLSearchParams();
// searchParams.set('id', quest.id);
// const image = document.createElement('img');
// image.setAttribute('src', './assets/' + quest.id + '.png');

// span.style.position = 'fixed';
// // span.style.top = quest.map.top;
// // span.style.left = quest.map.left;
// span.appendChild(image);