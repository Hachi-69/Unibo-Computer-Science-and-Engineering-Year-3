
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

    // Aggiorna la voce attiva nel menu
    document.querySelectorAll("nav a").forEach(link => {
        if (link.getAttribute("href") === hash) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });

    // Seleziona la vista
    if (hash === "#/") {
        mostraHome();

    } else if (hash === "#/archivio") {
        mostraArchivio();

    } else if (hash === "#/contatti") {
        mostraContatti();

    } else if (hash === "#/login") {
        mostraLogin();

    } else if (hash.startsWith("#/articolo/")) {
        const parti = hash.split("/");
        const id = Number(parti[2]);

        if (
            parti.length === 3 &&
            /^[1-9]\d*$/.test(parti[2]) &&
            Number.isSafeInteger(id)
        ) {
            mostraArticolo(parti[2]);
        } else {
            mostraNonTrovata();
        }

    } else {
        mostraNonTrovata();
    }
}

window.addEventListener("hashchange", router);
router();
