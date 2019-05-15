import buttonChoice from "./button-choice.js";

//TODO: get help with setting keys and values for quest data
function makeSession(formData) {
    const session = {
        button: formData.get('first-choice'),
        constellations: [],
    }
    return session;
}
export default makeSession;