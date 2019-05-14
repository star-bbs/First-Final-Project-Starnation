
const test = QUnit.test;

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

test('create choice test', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const questChoice = {
            id: 'navajo',
            choices: [{
                id: 'coyote',
                description: 'Coyote Star'
            }]

    }
    const expected = '<label for="coyote" class="radio-button">Coyote Star<input required="" id="coyote" type="radio" name="navajo" value="coyote"></label>';
    //Act 

    const result = createChoice(questChoice);
    //Assert
    assert.deepEqual(result.outerHTML, expected);
});