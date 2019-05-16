import scoreQuest from '../src/quest/score-quest.js';
const test = QUnit.test;

QUnit.module('score quest test');

test('score quest test', function(assert) {

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
    
    const result = scoreQuest(user, questId, choice);
    assert.deepEqual(result, expected);
});