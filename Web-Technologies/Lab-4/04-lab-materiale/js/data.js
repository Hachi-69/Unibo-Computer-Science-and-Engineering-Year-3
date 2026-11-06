import { Articolo, Autore, Autori } from "./model.js";

// GUIDATO: recuperare un array da un file JSON con fetch() e response.json().
async function caricaJSON(percorso) {
    // TODO: eseguire fetch(percorso)
    // TODO: verificare risposta.ok
    // TODO: convertire la risposta in JSON e controllare che sia un array
    throw new Error("TODO: implementare caricaJSON()");
}

// GUIDATO: convertire i dati in istanze di Articolo con map().
export async function caricaArticoli() {
    // TODO: usare caricaJSON("./data/articoli.json")
    // Campi JSON: Autore, Data, Titolo, Immagine, Testo, id
    throw new Error("TODO: implementare caricaArticoli()");
}

// AUTONOMO: recuperare e convertire gli autori.
export async function caricaAutori() {
    // TODO: usare caricaJSON("./data/autori.json")
    // Creare le istanze di Autore e poi la collezione Autori
    throw new Error("TODO: implementare caricaAutori()");
}
