document.addEventListener("DOMContentLoaded", meineFunktion);
function meineFunktion() {
    var eingabe = prompt("Ihr Name", "bla");
    if (eingabe != null) {
        document.getElementById("demo").innerHTML =
            "Hallo " + eingabe + "! Alles Klar?";
    }
}
//# sourceMappingURL=Aufgabe0.js.map