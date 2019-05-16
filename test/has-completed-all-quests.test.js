import hasCompletedAllQuests from '../src/map/has-completed-all-quests.js';
const test = QUnit.test;
QUnit.module('Has completed all quests function test');

const quests = [
    { id: 'one' },
    { id: 'two' },
    { id: 'three' },
];

test('has completed all quests', function(assert) {
    
    const session = {
        completed: {
            one: true,
            two: true,
            three: true,
        }
    };

    const result = hasCompletedAllQuests(quests, session);
    assert.equal(result, true);
});