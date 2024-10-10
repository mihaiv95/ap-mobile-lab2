document.addEventListener("touchstart", on_touch);
document.addEventListener("mousedown", on_touch);

var recognition = new webkitSpeechRecognition();
var recognition_started = false;  // Variabilă globală pentru a verifica dacă recunoașterea a început

recognition.lang = 'en-US';

function on_touch() {
    if (!recognition_started) {  // Verificăm dacă recunoașterea nu a început deja
        recognition.start();
        recognition_started = true;
    }
}

function onend() {
    recognition.stop();
    recognition_started = false;
}

recognition.onend = onend;
recognition.onspeechend = onend;
recognition.onresult = on_results;  // Corectarea numelui evenimentului

function on_results(e) {
    document.getElementById("text").innerHTML += "Ati rostit cuvantul: " +
        e.results[0][0].transcript + ", acuratete: " + e.results[0][0].confidence + "<br>";
}