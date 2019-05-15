import api from '../api.js';
import createChoice from '../quest/create-choice.js';
import scoreQuest from './score-quest.js';
//IMPORT LOAD PROFILE FUNCTION ONCE WE MAKE IT

const title = document.getElementById('title');
const description = document.getElementById('description');
const questForm = document.getElementById('quest-form');
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
    questForm.appendChild(questions);   
}
questForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(questForm);
    const choiceId = formData.get('one');
    const choice = api.getQuest(quest.choices, choiceId);

    const session = api.getStars();
    scoreQuest(session, questId, choice);
    api.setStars(session);
    console.log(session);
    questForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;

})