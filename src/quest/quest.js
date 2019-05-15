import api from '../api.js';
import createChoice from '../quest/create-choice.js';
//IMPORT LOAD PROFILE FUNCTION ONCE WE MAKE IT

const title = document.getElementById('title');
const description = document.getElementById('description');
const questForm = document.getElementById('quest-form');
const result = document.getElementById('result');

const searchParams = new URLSearchParams(window.location.search);
const quests = api.getQuests();
const questId = searchParams.get('id');
const quest = api.getQuest(quests, questId);

title.textContent = quest.title;
description.textContent = quest.description;
console.log(questId);
for (let i = 0; i < quest.choices.length; i++) {
    const choice = quest.choices[i];
    const questions = createChoice(choice);
    questForm.appendChild(questions);   
}