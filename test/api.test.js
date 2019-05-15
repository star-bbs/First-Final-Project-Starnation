import quests from '../src/quest/quest-data.js';
import api from '../src/api.js';
QUnit.module('api test suite');
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

test('takes an id and returns quest', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expectedQuest = quests[0];
    //Act 
    // Call the function you're testing and set the result to a const

    const foundQuest = api.getQuest(quests, 'navajo');
    //Assert
    assert.deepEqual(foundQuest, expectedQuest);
});