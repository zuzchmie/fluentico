
const allWords = [
    // --- KRAJE ---
    { polish: "Polska", correct: "Poland", wrong1: "Polish", wrong2: "China" },
    { polish: "Włochy", correct: "Italy", wrong1: "Germany", wrong2: "Poland" },
    { polish: "Niemcy", correct: "Germany", wrong1: "France", wrong2: "Austria" },

    // --- PODRÓŻ ---
    { polish: "bilet", correct: "ticket", wrong1: "train", wrong2: "gate" },
    { polish: "samolot", correct: "airplane", wrong1: "airport", wrong2: "pilot" },
    { polish: "walizka", correct: "suitcase", wrong1: "bag", wrong2: "box" },

    // --- HOTEL ---
    { polish: "pokój", correct: "room", wrong1: "hall", wrong2: "bed" },
    { polish: "rezerwacja", correct: "reservation", wrong1: "information", wrong2: "payment" },
    { polish: "klucz", correct: "key", wrong1: "card", wrong2: "door" },

    // --- SKLEP ---
    { polish: "sklep", correct: "shop", wrong1: "market", wrong2: "store" },
    { polish: "koszyk", correct: "basket", wrong1: "cart", wrong2: "bag" },
    { polish: "cena", correct: "price", wrong1: "value", wrong2: "cost" },
];


function getTestSet(name) {
    if (name === "all") return allWords;
    return [];
}


function getRandom15() {
    const shuffled = [...allWords].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 15);
}


if (typeof window !== "undefined") {
    window.getTestSet = getTestSet;
    window.getRandom15 = getRandom15;
}