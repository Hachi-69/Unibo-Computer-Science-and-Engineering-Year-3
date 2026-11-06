
import { Articolo, Autore, Autori } from "./model.js";

let richiestaArticoli;
let richiestaAutori;

async function caricaJSON(percorso) {
    const risposta = await fetch(percorso);

    if (!risposta.ok) {
        throw new Error("Errore HTTP: " + risposta.status);
    }

    const dati = await risposta.json();

    if (!Array.isArray(dati)) {
        throw new Error("Il JSON non contiene un array");
    }

    return dati;
}

export function caricaArticoli() {
    if (!richiestaArticoli) {
        richiestaArticoli = caricaJSON("./data/articoli.json")
            .then(dati => dati.map(a => new Articolo(
                a.Autore,
                a.Data,
                a.Titolo,
                a.Immagine,
                a.Testo,
                a.id
            )))
            .catch(errore => {
                richiestaArticoli = undefined;
                throw errore;
            });
    }

    return richiestaArticoli;
}

export function caricaAutori() {
    if (!richiestaAutori) {
        richiestaAutori = caricaJSON("./data/autori.json")
            .then(dati => new Autori(dati.map(a => new Autore(
                a.nome,
                a.cognome,
                a.email,
                a.argomenti
            ))))
            .catch(errore => {
                richiestaAutori = undefined;
                throw errore;
            });
    }

    return richiestaAutori;
}