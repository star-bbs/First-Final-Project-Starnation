import makeSession from '../src/home/make-session.js';
const test = QUnit.test;

QUnit.module('make session test');

test('create session object from form data', (assert) => {
    
    // arrange
    const formData = new FormData();
    formData.set('key', 'value');

    // act
    const sessionObj = makeSession(formData);
    const expected = {
        button: null,
        completed: {},
        constellations: []
    };

    // assert
    const result = 
    // what your user object should look like
    
    assert.deepEqual(sessionObj, expected);
});