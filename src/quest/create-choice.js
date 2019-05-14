function createChoice(questChoice) {
    console.log(questChoice);
    const choiceId = questChoice.id;
    const choiceDescription = questChoice.description;
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