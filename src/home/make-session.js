
//TODO: FIGURE OUT WHY CONSTELLATIONS = 0 and not []
function makeSession(formData) {
    const session = {
        button: formData.get('first-choice'),
        constellations: [],
        completed: {}
    }
    return session;
}
export default makeSession;