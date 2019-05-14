function createQuestLink(quest) {
    const link = document.createElement('a');
    link.classList.add('quest');
    const searchParams = new URLSearchParams();
    searchParams.set('id', quest.id);
    const image = document.createElement('img');
    image.setAttribute('src', './assets/' + quest.id + '.png');
    link.href = 'quest.html?' + searchParams.toString();
    
    link.style.position = 'fixed';
    link.style.top = quest.map.top;
    link.style.left = quest.map.left;
    link.appendChild(image);
    return link;
    }
    export default createQuestLink;