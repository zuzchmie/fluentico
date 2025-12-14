// flashcardsData.js - Centralna baza wszystkich zestawów fiszek
window.flashcardsSets = {
    "JEDZENIE": {
        icon: "bi-egg-fried",
        cards: [
        { polish: "Jabłko", english: "Apple" },
        { polish: "Zupa", english: "Soup" },
        { polish: "Marchewka", english: "Carrot" },
        { polish: "Śliwka", english: "Plum" },
        { polish: "Kawa", english: "Coffee" },
        { polish: "Chleb", english: "Bread" }
        ]
    },
    "KRAJE": {
        icon: "bi-flag",
        cards: [
        { polish: "Polska", english: "Poland" },
        { polish: "Niemcy", english: "Germany" },
        { polish: "Francja", english: "France" },
        { polish: "Włochy", english: "Italy" },
        { polish: "Anglia", english: "England" }
        ]
    },
    "PODROZ": {
        icon: "bi-airplane",
        cards: [
        { polish: "Samolot", english: "Airplane" },
        { polish: "Lotnisko", english: "Airport" },
        { polish: "Bilet", english: "Ticket" },
        { polish: "Walizka", english: "Suitcase" }
        ]
    },
    "HOTEL": {
        icon: "bi-suitcase",
        cards: [
        { polish: "Recepcja", english: "Reception" },
        { polish: "Pokój", english: "Room" },
        { polish: "Rezerwacja", english: "Reservation" },
        { polish: "Klucz", english: "Key" }
        ]
    },
    "SKLEP": {
        icon: "bi-basket",
        cards: [
        { polish: "Sklep", english: "Shop" },
        { polish: "Cena", english: "Price" },
        { polish: "Kasa", english: "Cash register" },
        { polish: "Rabat", english: "Discount" }
        ]
    },
    "RESTAURACJA": {
        icon: "bi-fork-knife",
        cards: [
        { polish: "Menu", english: "Menu" },
        { polish: "Kelner", english: "Waiter" },
        { polish: "Rachunek", english: "Bill" },
        { polish: "Stolik", english: "Table" }
        ]
    }
};

// Funkcja do pobierania zestawu po nazwie
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
