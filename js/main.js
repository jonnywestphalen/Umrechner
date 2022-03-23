document.getElementById("kilogrammeingabefeld").addEventListener("input", kilogramm)
document.getElementById("grammeingabefeld").addEventListener("input", gramm)
document.getElementById("lbseingabefeld").addEventListener("input", lbs)
                                                        /*Eingabefeld mit Funktion verknüpfen*/
function kilogrammingramm(kilogramm) {/*Funktion mit Parameter Kilogramm*/
   return kilogramm * 1000 /*Ergebnis der Berechnung als endgültiges Ergebnis der Funktion festlegen;
                             Beendung der Ausführung der Funktion*/
}

function kilogramminlbs(kilogramm) {
    return kilogramm * 2.20462
}

function gramminkilogramm(gramm) {/*Funktion mit Parameter Gramm*/
    return gramm / 1000
}

function gramminlbs(gramm) {
    return gramm / 453.592
}

function lbsinkilogramm(lbs) {/*Funktion mit Parameter lbs*/
    return lbs * 0.453592
}

function lbsingramm(lbs) {
    return lbs * 453.592
}

function kilogramm(event) {/*Reaktionsfunktion auf inputevent*/
    const kilogramm = event.target.value/*Auslesung des Wertes des Eingeabefelds, Erstellen einer Konstante*/
    document.getElementById("grammeingabefeld").value = kilogrammingramm(kilogramm)
                            /*Zugriff auf Eingabefeld; Definition seines Wertes*/
    document.getElementById("lbseingabefeld").value = kilogramminlbs(kilogramm)
}

function gramm(event) {
    const gramm = event.target.value
    document.getElementById("kilogrammeingabefeld").value = gramminkilogramm(gramm)
    document.getElementById("lbseingabefeld").value = gramminlbs(gramm)
                            /*Zugriff auf Eingabefeld; Definition seines Wertes*/
}

function lbs(event){
    const lbs = event.target.value
    document.getElementById("grammeingabefeld").value = lbsingramm(lbs)
    document.getElementById("kilogrammeingabefeld").value = lbsinkilogramm(lbs)
                            /*Zugriff auf Eingabefeld; Definition seines Wertes*/
}