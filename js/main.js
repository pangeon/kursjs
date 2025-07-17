// Tworzenie nowego przycisku i dodanie go do dokumentu
const button = document.createElement("button");
button.innerHTML = "Rozwiń skrót"; // Ustawienie tekstu na przycisku
document.body.appendChild(button); // Dodanie przycisku do strony

// Obsługa kliknięcia w przycisk - wyświetlenie alertu z rozwinięciem skrótu HTML
button.addEventListener("click", function() {
    alert("HTML (ang. HyperText Markup Language, hipertekstowy język znaczników)");
});

// Pobranie elementu o id 'frame' i wstawienie do niego opisu HTML
const frame = document.getElementById("frame");
frame.innerHTML = "<p><strong>HTML</strong> pozwala opisać strukturę informacji zawartych wewnątrz strony internetowej," +
    "nadając odpowiednie znaczenie semantyczne poszczególnym fragmentom tekstu – formując hiperłącza," + 
    "akapity, nagłówki, listy – oraz osadza w tekście dokumentu obiekty plikowe, na przykład multimedia," + 
    "lub elementy baz danych, na przykład interaktywne formularze danych.</p>";