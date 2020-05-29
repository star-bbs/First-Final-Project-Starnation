function populateSky(constellations) {
    const parentEl = document.getElementById('end-constellations');
    for(let i = 0; i < constellations.length; i++) {
        const constellation = constellations[i];

        const img = document.createElement('img');
        img.src = './assets/' + constellation + '.png';
        parentEl.appendChild(img);
    }
    return parentEl;
}
export default populateSky;