import makeSession from '../src/home/make-session.js';
const test = QUnit.test;

QUnit.module('make session test');

test('create session object from form data', (assert) => {
    
    const formData = new FormData();
    formData.set('key', 'value');

    const sessionObj = makeSession(formData);
    const expected = {
        button: null,
        completed: {},
        constellations: []
    };

    assert.deepEqual(sessionObj, expected);
});