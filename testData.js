

window.flashcardsSets = {
    JEDZENIE: {
        icon: "bi-egg-fried",
        cards: [
        { polish: "jabłko", correct: "apple", wrong1: "pear", wrong2: "grape" },
        { polish: "chleb", correct: "bread", wrong1: "pasta", wrong2: "rice" },
        { polish: "ryba", correct: "fish", wrong1: "beef", wrong2: "pork" }
        ]
    },

    RESTAURACJA: {
        icon: "bi-fork-knife",
        cards: [
        { polish: "rezerwacja", correct: "reservation", wrong1: "waiter", wrong2: "table" },
        { polish: "kelner", correct: "waiter", wrong1: "chef", wrong2: "customer" },
        { polish: "rachunek", correct: "bill", wrong1: "menu", wrong2: "tips" }
        ]
    },

    KRAJE: {
        icon: "bi-flag",
        cards: [
        { polish: "Polska", correct: "Poland", wrong1: "Holland", wrong2: "Iceland" },
        { polish: "Niemcy", correct: "Germany", wrong1: "Denmark", wrong2: "Austria" },
        { polish: "Korea Południowa", correct: "South Korea", wrong1: "North Korea", wrong2: "Japan" },
        { polish: "Włochy", correct: "Italy", wrong1: "Spain", wrong2: "Greece" },
        { polish: "Francja", correct: "France", wrong1: "Belgium", wrong2: "Canada" }
        ]
    },


    PODRÓZ: {
        icon: "bi-airplane",
        cards: [
        { polish: "lotnisko", correct: "airport", wrong1: "harbor", wrong2: "station" },
        { polish: "bilet", correct: "ticket", wrong1: "invoice", wrong2: "passport" },
        { polish: "paszport", correct: "passport", wrong1: "wallet", wrong2: "card" },
        { polish: "walizka", correct: "suitcase", wrong1: "bag", wrong2: "basket" },
        { polish: "podróżować", correct: "to travel", wrong1: "to cook", wrong2: "to call" },
        { polish: "dworzec", correct: "station", wrong1: "office", wrong2: "cinema" }
        ]
    },


    HOTEL: {
        icon: "bi-suitcase",
        cards: [
        { polish: "pokój", correct: "room", wrong1: "hall", wrong2: "window" },
        { polish: "recepcja", correct: "reception", wrong1: "kitchen", wrong2: "office" },
        { polish: "bagaż", correct: "luggage", wrong1: "shopping", wrong2: "laundry" },
        { polish: "rezerwować", correct: "to book", wrong1: "to sleep", wrong2: "to order" },
        { polish: "klucz", correct: "key", wrong1: "wallet", wrong2: "ticket" },
        { polish: "winda", correct: "elevator", wrong1: "stairs", wrong2: "balcony" }
        ]
    },

    SKLEP: {
        icon: "bi-basket",
        cards: [
        { polish: "sklep", correct: "shop", wrong1: "school", wrong2: "office" },
        { polish: "kasjer", correct: "cashier", wrong1: "driver", wrong2: "waiter" },
        { polish: "cena", correct: "price", wrong1: "size", wrong2: "weight" },
        { polish: "promocja", correct: "sale", wrong1: "queue", wrong2: "bill" },
        { polish: "koszyk", correct: "basket", wrong1: "bag", wrong2: "box" },
        { polish: "paragon", correct: "receipt", wrong1: "ticket", wrong2: "invoice" },
        { polish: "kupić", correct: "to buy", wrong1: "to show", wrong2: "to leave" },
        { polish: "kolejka", correct: "queue", wrong1: "street", wrong2: "table" },
        { polish: "gotówka", correct: "cash", wrong1: "card", wrong2: "coin" },
        { polish: "sklep spożywczy", correct: "grocery store", wrong1: "restaurant", wrong2: "station" }
        ]
    }

};


// Function to return full set by name
function getTestSet(name) {
    return flashcardsSets[name]?.cards || [];
}

// Function to return full set by name
function getFlashcardsSet(setName) {
    return flashcardsSets[setName]?.cards || [];
}

// Funkcja zwracająca wszystkie dostępne zestawy
function getAllSets() {
    return Object.keys(flashcardsSets);
}

// Funkcja pobierająca nazwę ikony
function getSetIcon(setName) {
    return flashcardsSets[setName]?.icon || "bi-collection";
}
