function buttonChoice(form) {
    console.log(form);
    if(form.get('firstChoice') === 'no') {
        alert('Why you gotta be like that?');
        return 'checked no';
    } else {
        window.location = './map.html';
        return 'checked yes';
    }
}
export default buttonChoice;