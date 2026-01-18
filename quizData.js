
const allWords = [
    // --- KRAJE ---
    { polish: "Polska", correct: "Poland", wrong1: "Polish", wrong2: "China" },
    { polish: "Włochy", correct: "Italy", wrong1: "Germany", wrong2: "Poland" },
    { polish: "Niemcy", correct: "Germany", wrong1: "France", wrong2: "Austria" },
    { polish: "Francja", correct: "France", wrong1: "French", wrong2: "Spain" },
    { polish: "Hiszpania", correct: "Spain", wrong1: "Portugal", wrong2: "Mexico" },
    { polish: "Wielka Brytania", correct: "Great Britain", wrong1: "England", wrong2: "USA" },
    { polish: "Stany Zjednoczone", correct: "United States", wrong1: "Canada", wrong2: "America" },
    { polish: "Japonia", correct: "Japan", wrong1: "China", wrong2: "Korea" },
    { polish: "Grecja", correct: "Greece", wrong1: "Turkey", wrong2: "Egypt" },
    { polish: "Egipt", correct: "Egypt", wrong1: "Africa", wrong2: "Dubai" },
    { polish: "Turcja", correct: "Turkey", wrong1: "Greece", wrong2: "Syria" },
    { polish: "Norwegia", correct: "Norway", wrong1: "Sweden", wrong2: "Denmark" },
    { polish: "Szwajcaria", correct: "Switzerland", wrong1: "Sweden", wrong2: "Austria" },

    // --- PODRÓŻ ---
    { polish: "bilet", correct: "ticket", wrong1: "train", wrong2: "gate" },
    { polish: "samolot", correct: "airplane", wrong1: "airport", wrong2: "pilot" },
    { polish: "walizka", correct: "suitcase", wrong1: "bag", wrong2: "box" },
    { polish: "pociąg", correct: "train", wrong1: "bus", wrong2: "track" },
    { polish: "lotnisko", correct: "airport", wrong1: "station", wrong2: "plane" },
    { polish: "paszport", correct: "passport", wrong1: "ID card", wrong2: "ticket" },
    { polish: "podróż", correct: "journey", wrong1: "trip", wrong2: "visit" },
    { polish: "dworzec", correct: "station", wrong1: "stop", wrong2: "platform" },
    { polish: "przesiadka", correct: "transfer", wrong1: "transit", wrong2: "flight" },
    { polish: "wakacje", correct: "holidays", wrong1: "weekend", wrong2: "work" },
    { polish: "mapa", correct: "map", wrong1: "guide", wrong2: "compass" },
    { polish: "przewodnik", correct: "guide", wrong1: "tourist", wrong2: "pilot" },
    { polish: "bagaż", correct: "luggage", wrong1: "backpack", wrong2: "case" },

    // --- HOTEL ---
    { polish: "pokój", correct: "room", wrong1: "hall", wrong2: "bed" },
    { polish: "rezerwacja", correct: "reservation", wrong1: "information", wrong2: "payment" },
    { polish: "klucz", correct: "key", wrong1: "card", wrong2: "door" },
    { polish: "recepcja", correct: "reception", wrong1: "lobby", wrong2: "office" },
    { polish: "gość", correct: "guest", wrong1: "host", wrong2: "client" },
    { polish: "piętro", correct: "floor", wrong1: "ground", wrong2: "wall" },
    { polish: "winda", correct: "elevator", wrong1: "stairs", wrong2: "ladder" },
    { polish: "śniadanie", correct: "breakfast", wrong1: "lunch", wrong2: "dinner" },
    { polish: "łazienka", correct: "bathroom", wrong1: "kitchen", wrong2: "toilet" },
    { polish: "ręcznik", correct: "towel", wrong1: "soap", wrong2: "sheet" },
    { polish: "pościel", correct: "bedding", wrong1: "pillow", wrong2: "blanket" },
    { polish: "klimatyzacja", correct: "air conditioning", wrong1: "heating", wrong2: "fan" },
    { polish: "wymeldowanie", correct: "check-out", wrong1: "check-in", wrong2: "exit" },

    // --- SKLEP ---
    { polish: "sklep", correct: "shop", wrong1: "market", wrong2: "store" },
    { polish: "koszyk", correct: "basket", wrong1: "cart", wrong2: "bag" },
    { polish: "cena", correct: "price", wrong1: "value", wrong2: "cost" },
    { polish: "paragon", correct: "receipt", wrong1: "invoice", wrong2: "bill" },
    { polish: "pieniądze", correct: "money", wrong1: "cash", wrong2: "coins" },
    { polish: "karta płatnicza", correct: "credit card", wrong1: "debit", wrong2: "wallet" },
    { polish: "promocja", correct: "sale", wrong1: "discount", wrong2: "cheap" },
    { polish: "kolejka", correct: "queue", wrong1: "line", wrong2: "row" },
    { polish: "klient", correct: "customer", wrong1: "seller", wrong2: "buyer" },
    { polish: "sprzedawca", correct: "seller", wrong1: "manager", wrong2: "clerk" },
    { polish: "przymierzalnia", correct: "fitting room", wrong1: "bedroom", wrong2: "locker" },
    { polish: "rozmiar", correct: "size", wrong1: "length", wrong2: "width" },
    { polish: "reklamacja", correct: "complaint", wrong1: "return", wrong2: "refund" },
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