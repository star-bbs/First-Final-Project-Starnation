function createCompletedQuest(quest) {
    const span = document.createElement('span');
    span.classList.add('completed-quest');
    const searchParams = new URLSearchParams();
    searchParams.set('id', quest.id);
    const image = document.createElement('img');
    image.setAttribute('src', './assets/' + quest.id + '.png');
    
    span.style.position = 'fixed';
    span.style.top = quest.map.top;
    span.style.left = quest.map.left;
    span.appendChild(image);
    return span;
}
export default createCompletedQuest;