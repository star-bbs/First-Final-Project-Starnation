function populateSky(session) {
    const parentEl = document.getElementById('end-constellations');
    console.log(parentEl);
    for (let i = 0; i < session.constellations.length; i++) {
        const constellation = session.constellations[i];

        const img = document.createElement('img');
        img.src = './assets/' + constellation + '.png';
        console.log(parentEl);
        parentEl.appendChild(img);
    }
    return parentEl;
}
export default populateSky;