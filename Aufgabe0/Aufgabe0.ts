document.addEventListener("DOMContentLoaded", meineFunktion);


function meineFunktion(): void {
    var eingabe: string = prompt("Ihr Name");
    if (eingabe != null) {
        document.getElementById("demo").innerHTML =
            "Hallo " + eingabe + "! Alles Klar?";
        console.log("Hallo " + eingabe + "! Alles Klar?");
    }
}