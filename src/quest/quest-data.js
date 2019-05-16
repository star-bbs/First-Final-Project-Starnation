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
        name: 'choice',
        description: 'Northern Fire',
        result: `
            Nahookos Biko, or Northern Fire, is also known as the North Star
            surrounded by four other stars. It represents the fire in the 
            center of the hogan, or home. 
        `
    }, {
        id: 'rabbit',
        name: 'choice',
        description: 'Rabbit Tracks',
        result: `
            This constellation, which is part of the tail of "Scorpius", was 
            used by hunters long ago to determine when the traditional hunting
            season would begin. When this constellation remained in one place,
            deer was not hunted because their young still depend on their mothers
            for nourishment. Only until the star tips to the easy did the hunting
            season 'truly' begin.
        `
    }, {
        id: 'coyote',
        name: 'choice',
        description: 'Coyote Star',
        result: `
            Called So' Tsoh in Navajo, which literally translates to "Big Star",
            this is also known as the "Morning Star" and is seen very early in the
            morning. Some people call the Coyote Star "So'Doo Nidisiidii," which
            means "the star without a mouth" because it doesn't come in regular 
            monthly star patterns.
        `,
    }]
};
const greek = {
    id: 'greek',
    title: 'Ancient Greek Constellations',
    map: {
        top: '15%',
        left: '4%'
    },
    description: `
    There is only limited information on ancient Greek constellations, with 
    some fragmentary evidence being found in the Works and Days of the Greek 
    poet Hesiod, who mentioned the "heavenly bodies". Greek astronomy 
    essentially adopted the older Babylonian system in the Hellenistic era, 
    first introduced to Greece by Eudoxus of Cnidus in the 4th century BC.
    `,
    choices: [{
        id: 'dog',
        name: 'choice',
        description: 'Sirius, The Dog Star',
        result: `
        The ancient Greeks observed that the appearance of Sirius heralded the 
        hot and dry summer and feared that it caused plants to wilt, men to 
        weaken, and women to become aroused. Due to its brightness, Sirius 
        would have been noted to twinkle more in the unsettled weather conditions 
        of early summer. To Greek observers, this signified certain emanations 
        which caused its malignant influence. 
        `
    }, {
        id: 'sisters',
        name: 'choice',
        description: 'Pleiades, The Seven Sisters',
        result: `
        The name of the Pleiades comes from Ancient Greek. It probably 
        derives from plein, "to sail", because of the cluster's importance in 
        delimiting the sailing season in the Mediterranean Sea: "the season of 
        navigation began with their heliacal rising". However, in mythology the 
        name was used for the Pleiades, seven divine sisters, the name supposedly 
        deriving from that of their mother Pleione and effectively meaning "daughters 
        of Pleione". In reality, the name of the star cluster almost certainly came 
        first and Pleione was invented to explain it.
        `
    }, {
        id: 'orion',
        name: 'choice',
        description: 'Orion',
        result: `
        Orion's current name derives from Greek mythology in which Orion 
        was a gigantic supernaturally strong hunter of ancient times born to Euryale, 
        a Gorgon, and Poseidon, god of the sea. One myth recounts Gaia's rage at Orion, 
        who dared to say that he would kill every animal on the planet. The angry goddess 
        tried to dispatch Orion with a scorpion. This is given as the reason that the 
        constellations of Scorpius and Orion are never in the sky at the same time.
        `,
    }]
};
const chinese = {
    id: 'chinese',
    title: 'Ancient Chinese Constellations',
    map: {
        top: '30%',
        left: '80%'
    },
    description: `
    Ancient China had a long tradition of observing celestial phenomena. 
    Nonspecific Chinese star names, later categorized in the twenty-eight 
    mansions, have been found on oracle bones from Anyang, dating back to the 
    middle Shang dynasty. These constellations are some of the most important 
    observations of Chinese sky, attested from the 5th century BC. Parallels to 
    the earliest Babylonian star catalogues suggest that the ancient 
    Chinese system did not arise independently.
    `,
    choices: [{
        id: 'andromeda',
        name: 'choice',
        description: 'The Immortal Woman',
        result: `
        The modern constellation Andromeda lies across two of the quadrants,
        symbolized by the Black Tortoise of the North (Běi Fāng Xuán Wǔ) and
        the White Tiger of the West (Xī Fāng Bái Hǔ), that divide the sky 
        in traditional Chinese uranography. The name of the western constellation 
        in modern Chinese is Xiān Nǚ Zuò, meaning "The Immortal Woman / 
        Fairy constellation".
        `,
        id: 'cassiopeia',
        name: 'choice',
        descripion: 'The Immortal Queen',
        result: `
        The modern constellation Cassiopeia lies across two of the quadrants 
        symbolized by the Black Tortoise of the North (Běi Fāng Xuán Wǔ), 
        The White Tiger of the West (Xī Fāng Bái Hǔ) as well as the Three Enclosures 
        (Sān Yuán), that divide the sky in traditional Chinese uranography. The 
        name of the western constellation in modern Chinese is Xiān Hòu Zuò, 
        meaning "The Immortal Queen Constellation".
        `,
    }, {
        id: 'cygnus',
        name: 'choice',
        description: 'The Swan',
        result: `
        According to traditional Chinese uranography, the modern constellation 
        Cygnus is located within the northern quadrant of the sky, which is symbolized 
        as the Black Tortoise of the North (Běi Fāng Xuán Wǔ). The name of the western
        constellation in modern Chinese is Tiān é Zuò, meaning "the swan constellation".
        `,
    }]
};
const quests = [navajo, greek, chinese];
export default quests;