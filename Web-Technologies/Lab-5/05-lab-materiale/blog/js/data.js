
let richiestaArticoli;
let richiestaAutori;

async function caricaJSON(percorso) {
    const risposta = await fetch(percorso);
    if (!risposta.ok) {
        throw new Error("Errore HTTP: " + risposta.status);
    }

    const dati = await risposta.json();

    if (!Array.isArray(dati)) {
        throw new Error("Formato JSON non valido");
    }

    return dati;
}

export function ordinaArticoliPerData(articoli) {
    const mesi = {
        gennaio: 0, febbraio: 1, marzo: 2,
        aprile: 3, maggio: 4, giugno: 5,
        luglio: 6, agosto: 7, settembre: 8,
        ottobre: 9, novembre: 10, dicembre: 11
    };

    function dataArticolo(articolo) {
        const [giorno, mese, anno] = articolo.data.split(" ");
        return new Date(
            Number(anno),
            mesi[mese.toLowerCase()],
            Number(giorno)
        );
    }

    return [...articoli].sort(
        (a, b) => dataArticolo(b) - dataArticolo(a)
    );
}

export function caricaArticoli() {
    if (!richiestaArticoli) {
        richiestaArticoli = caricaJSON("./data/articoli.json")
            .catch(e => {
                richiestaArticoli = undefined;
                throw e;
            });
    }

    return richiestaArticoli;
}

export function caricaAutori() {
    if (!richiestaAutori) {
        richiestaAutori = caricaJSON("./data/autori.json")
            .catch(e => {
                richiestaAutori = undefined;
                throw e;
            });
    }

    return richiestaAutori;
}

export async function ultimiArticoli(numero = 2) {
    const articoli = await caricaArticoli();
    return ordinaArticoliPerData(articoli).slice(0, numero);
}

export async function articoliCategoria(categoria) {
    const articoli = await caricaArticoli();

    const filtrati = articoli.filter(articolo =>
        articolo.categorie.some(
            c => c.toLowerCase() === categoria.toLowerCase()
        )
    );

    return ordinaArticoliPerData(filtrati);
}
