import createChoice from '../src/quest/create-choice.js';
const test = QUnit.test;

test('create choice test', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const questChoice = {
      id: 'coyote',
      name: 'one',
      description: 'Coyote Star'
    }
    const expected = '<label for="coyote" class="radio-button">Coyote Star<input required="" id="coyote" type="radio" name="one" value="coyote"></label>';
    //Act 

    const result = createChoice(questChoice);
    //Assert
    assert.deepEqual(result.outerHTML, expected);
});