import scoreQuest from '../src/quest/score-quest.js';
const test = QUnit.test;

QUnit.module('score quest test');

test('score quest test', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const user = {
        button: 'yes',
        constellations: [],
        completed: {}
    };
    
    const questId = 'navajo';

    const choice = {
        id: 'rabbit',
    };

    const expected = {
        button: 'yes',
        constellations: ['rabbit'],
        completed: {
            navajo: true
        }
    };
    //Act 
    
    const result = scoreQuest(user, questId, choice);
    //Assert
    assert.deepEqual(result, expected);
});