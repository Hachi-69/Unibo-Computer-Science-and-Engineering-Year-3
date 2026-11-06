import {
    mostraHome,
    mostraArchivio,
    mostraContatti,
    mostraLogin,
    mostraArticolo,
    mostraNonTrovata
} from "./views.js";

function router() {
    const hash = window.location.hash || "#/";

    // GUIDATO: evidenziare la voce attiva nel menu con aria-current.

    // GUIDATO: riconoscere le rotte Home, Archivio, Contatti e Login.
    // AUTONOMO: riconoscere #/articolo/ID usando startsWith() e split().
    // Per le rotte sconosciute chiamare mostraNonTrovata().

    // Comportamento provvisorio: rende utilizzabile la vista Login
    // anche prima del completamento del router.
    if (hash === "#/login") {
        mostraLogin();
    } else {
        mostraNonTrovata();
    }
}

window.addEventListener("hashchange", router);
router();
