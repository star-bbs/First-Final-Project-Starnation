import buttonChoice from '../src/home/button-choice.js';

const test = QUnit.test;

test('make no alert', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const form = new FormData();
    form.set('firstChoice', 'yes');
    
    const expected = 'checked no';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = buttonChoice(form);
    //Assert
    assert.equal(result, expected);
});