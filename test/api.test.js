import quests from '../src/quest/quest-data.js';
import api from '../src/api.js';

const test = QUnit.test;

test('make get quest api test', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = quests;
    //Act 
    // Call the function you're testing and set the result to a const

    const result = api.getQuests();
    //Assert
    assert.deepEqual(result, expected);
});