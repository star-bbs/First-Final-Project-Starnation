import api from '../api.js';
import createChoice from '../quest/create-choice.js';
import scoreQuest from './score-quest.js';
import profile from '../map/load-profile.js';

profile.loadAll();

const title = document.getElementById('title');
const description = document.getElementById('description');
const questForm = document.getElementById('quest-form');
const radio = document.getElementById('radio');
const result = document.getElementById('result');
const audio = document.getElementById('audio');

const searchParams = new URLSearchParams(window.location.search);
const quests = api.getQuests();
const questId = searchParams.get('id');
const quest = api.getQuest(quests, questId);

title.textContent = quest.title;
description.textContent = quest.description;

for(let i = 0; i < quest.choices.length; i++) {
    const choice = quest.choices[i];
    const questions = createChoice(choice);
    radio.appendChild(questions);   
}

questForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(questForm);

    const choiceId = formData.get('choice');
    // You're misusing the api.getQuest method here.
    // It is essentialy a "findById" type functionality.
    // But you don't need the choice, just the id...
    const choice = api.getQuest(quest.choices, choiceId);

    const session = api.getStars();
    // So better off changing scoreQuest to just take the choiceId
    // since you are not using any additional choice info 
    scoreQuest(session, questId, choice);
    api.setStars(session);
    questForm.classList.add('hidden');
    result.classList.remove('hidden');
    description.textContent = choice.result;
    profile.loadConstellation(choice.id);
    audio.play();
});
