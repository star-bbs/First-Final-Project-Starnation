function buttonChoice(form) {
    if(form.get('first-choice') === 'no') {
        alert('Why you gotta be like that?');
        return 'checked no';
    } else {
        window.location = './map.html';
        return 'checked yes';
    }
}
export default buttonChoice;