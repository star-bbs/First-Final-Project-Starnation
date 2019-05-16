import createQuestLink from '../src/map/create-quest-link.js';
const test = QUnit.test;

QUnit.module('create quest link');

test('create quest link', function(assert) {
    
    const quest = {
        id: 'navajo',
        image: 'navajo.png',
        map: {
            top: '40%',
            left: '72%'
        }
    };
    
    const expected = '<a class="quest" id="navajo" href="quest.html?id=navajo" style="position: fixed; top: 40%; left: 72%;"><img src="./assets/navajo.png"></a>';
    const result = createQuestLink(quest);
    assert.equal(result.outerHTML, expected);
});