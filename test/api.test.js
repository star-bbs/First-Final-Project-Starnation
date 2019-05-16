import quests from '../src/quest/quest-data.js';
import api from '../src/api.js';
QUnit.module('api test suite');
const test = QUnit.test;

test('make get quest api test', function(assert) {

    const expected = quests;
    const result = api.getQuests();
    assert.deepEqual(result, expected);
});

test('takes an id and returns quest', function(assert) {
    
    const expectedQuest = quests[0];
    const foundQuest = api.getQuest(quests, 'navajo');
    assert.deepEqual(foundQuest, expectedQuest);
});