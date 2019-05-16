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
const resultDescription = document.getElementById('result-description');

const searchParams = new URLSearchParams(window.location.search);
const quests = api.getQuests();
const questId = searchParams.get('id');
const quest = api.getQuest(quests, questId);

title.textContent = quest.title;
description.textContent = quest.description;
for (let i = 0; i < quest.choices.length; i++) {
    const choice = quest.choices[i];
    const questions = createChoice(choice);
    radio.appendChild(questions);   
}
questForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(questForm);
    //TODO: CHANGED formData.get('one') to formData.get('choice')
    const choiceId = formData.get('choice');
    const choice = api.getQuest(quest.choices, choiceId);
    console.log(choice);

    const session = api.getStars();
    scoreQuest(session, questId, choice);
    api.setStars(session);
    questForm.classList.add('hidden');
    result.classList.remove('hidden');
    description.textContent = choice.result;
    profile.loadConstellation(choice.id);
})