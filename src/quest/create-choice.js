
function createChoice(questChoice) {
    const choiceId = questChoice.choices[0].id;
    const choiceDescription = questChoice.choices[0].description;
    const label = document.createElement('label');
    const input = document.createElement('input');

    label.htmlFor = choiceId;
    label.classList.add('radio-button');
    label.textContent = choiceDescription;
    input.required = true;
    input.id = choiceId;
    input.type = 'radio';
    input.name = questChoice.id; 
    input.value = choiceId;
    label.appendChild(input);
    return label;
}
export default createChoice;