import createChoice from '../src/quest/create-choice.js';
const test = QUnit.test;

test('create choice test', function(assert) {
    
    const questChoice = {
        id: 'coyote',
        name: 'one',
        description: 'Coyote Star'
    };
    
    const expected = '<label for="coyote" class="radio-button">Coyote Star<input required="" id="coyote" type="radio" name="one" value="coyote"></label>';
    const result = createChoice(questChoice);
    assert.deepEqual(result.outerHTML, expected);
});