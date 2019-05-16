import createCompletedQuest from '../src/map/create-completed-quest.js';
const test = QUnit.test;

QUnit.module('create completed quest link');

test('create completed quest', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const quest = {
        id: 'navajo',
        image: 'navajo.png',
        map: {
            top: '40%',
            left: '72%'
        }
    };
    
    const expected = '<a class="quest completed" id="navajo" href="quest.html?id=navajo" style="position: fixed; top: 40%; left: 72%;"><img src="./assets/navajo.png"></a>';
    
    //Act 
    const result = createCompletedQuest(quest);
    //Assert
    assert.equal(result.outerHTML, expected);
});