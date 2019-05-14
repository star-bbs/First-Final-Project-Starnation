import createCompletedQuest from '../src/map/create-completed-quest.js';
const test = QUnit.test;

QUnit.module('create completed quest link');


test('create quest link', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const quest = {
        id: 'indigenous',
        image: 'indigenous.png',
        map: {
            top: '40%',
            left: '72%'
        }
    };
    
    const expected = '<span class="completed-quest" style="position: fixed; top: 40%; left: 72%;"><img src="./assets/indigenous.png"></span>';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = createCompletedQuest(quest);
    //Assert
    assert.equal(result.outerHTML, expected);
});