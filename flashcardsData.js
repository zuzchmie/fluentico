// flashcardsData.js - Centralna baza wszystkich zestawów fiszek
window.flashcardsSets = {
    "jedzenie": [
        { polish: "Jabłko", english: "Apple" },
        { polish: "Zupa", english: "Soup" },
        { polish: "Marchewka", english: "Carrot" },
        { polish: "Śliwka", english: "Plum" },
        { polish: "Kawa", english: "Coffee" },
        { polish: "Chleb", english: "Bread" }
    ],
    "przydatne_zwroty": [
        { polish: "Dzień dobry", english: "Good morning" },
        { polish: "Do widzenia", english: "Goodbye" },
        { polish: "Dziękuję", english: "Thank you" },
        { polish: "Przepraszam", english: "I'm sorry" },
        { polish: "Proszę", english: "Please" }
    ],
    "podroz": [
        { polish: "Samolot", english: "Airplane" },
        { polish: "Lotnisko", english: "Airport" },
        { polish: "Bilet", english: "Ticket" },
        { polish: "Walizka", english: "Suitcase" }
    ],
    "hotel": [
        { polish: "Recepcja", english: "Reception" },
        { polish: "Pokój", english: "Room" },
        { polish: "Rezerwacja", english: "Reservation" },
        { polish: "Klucz", english: "Key" }
    ],
    "sklep": [
        { polish: "Sklep", english: "Shop" },
        { polish: "Cena", english: "Price" },
        { polish: "Kasa", english: "Cash register" },
        { polish: "Rabat", english: "Discount" }
    ],
    "restauracja": [
        { polish: "Menu", english: "Menu" },
        { polish: "Kelner", english: "Waiter" },
        { polish: "Rachunek", english: "Bill" },
        { polish: "Stolik", english: "Table" }
    ]
};

// Funkcja do pobierania zestawu po nazwie
function getFlashcardsSet(setName) {
    return flashcardsSets[setName] || [];
}

// Funkcja zwracająca wszystkie dostępne zestawy
function getAllSets() {
    return Object.keys(flashcardsSets);
}