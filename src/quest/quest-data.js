const navajo = {
    id: 'navajo',
    title: 'Navajo Constellations',
    map: {
        top: '40%',
        left: '72%'
    },
    description: `
        The word for Constellations in Navajo is "So' Dine'e" or "Star People". 
        As in other cultures, certain star configurations represent images that
        have associated stories and meanings attached to them. 
    `,
    choices: [{
        id: 'northstar',
        name: 'one',
        description: 'Northern Fire',
        result: `
            Nahookos Biko, or Northern Fire, is also known as the North Star
            surrounded by four other stars. It represents the fire in the 
            center of the hogan, or home. 
        `,
    }, {
        id: 'rabbit',
        name: 'one',
        description: 'Rabbit Tracks',
        result: `
            This constellation, which is part of the tail if "Scorpius", was 
            used by hunters long ago to determine when the traditional hunting
            season would begin. When this constellation remained in one place,
            deer was not hunted because their young still depend on their mothers
            for nourishment. Only until the star tips to the easy did the hunting
            season 'truly' begin.
        `
    }, {
        id: 'coyote',
        name: 'one',
        description: 'Coyote Star',
        result: `
            Called So' Tsoh in Navajo, which literally translates to "Big Star",
            this is also known as the "Morning Star" and is seen very early in the
            morning. Some people call the Coyote Star "So'Doo Nidisiidii," which
            means "the star without a mouth" because it doesn't come in regular 
            monthly star patterns.
        `
    }]

};

const quests = [navajo];
export default quests;