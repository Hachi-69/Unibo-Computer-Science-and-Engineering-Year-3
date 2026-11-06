
import { caricaArticoli, caricaAutori } from "./data.js";

const contenitore = document.querySelector("#app");
let versioneVista = 0;

function elemento(tag, testo) {
    const nodo = document.createElement(tag);
    nodo.textContent = testo;
    return nodo;
}

function iniziaVista(titolo) {
    const versione = ++versioneVista;
    contenitore.replaceChildren(elemento("h2", titolo));
    return versione;
}

function mostraStato(testo, classe = "stato") {
    const messaggio = elemento("p", testo);
    messaggio.className = classe;
    contenitore.append(messaggio);
}

function mostraErrore(errore) {
    console.error(errore);
    mostraStato(
        "Impossibile caricare i dati. Riprova più tardi.",
        "errore-caricamento"
    );
}

// HOME

export async function mostraHome() {
    const versione = iniziaVista("Ultimi articoli");
    mostraStato("Caricamento articoli...");

    try {
        const articoli = await caricaArticoli();

        if (versione !== versioneVista) return;

        contenitore.replaceChildren(
            elemento("h2", "Ultimi articoli")
        );

        if (articoli.length === 0) {
            mostraStato("Nessun articolo disponibile.");
        } else {
            articoli.slice(0, 3).forEach(a =>
                contenitore.append(a.toDOM())
            );
        }
    } catch (errore) {
        if (versione === versioneVista) {
            iniziaVista("Ultimi articoli");
            mostraErrore(errore);
        }
    }
}

// ARCHIVIO

export async function mostraArchivio() {
    const versione = iniziaVista("Archivio articoli");
    mostraStato("Caricamento articoli...");

    try {
        const articoli = await caricaArticoli();

        if (versione !== versioneVista) return;

        contenitore.replaceChildren(
            elemento("h2", "Archivio articoli")
        );

        if (articoli.length === 0) {
            mostraStato("Nessun articolo disponibile.");
        } else {
            articoli.forEach(a =>
                contenitore.append(a.toDOM())
            );
        }
    } catch (errore) {
        if (versione === versioneVista) {
            iniziaVista("Archivio articoli");
            mostraErrore(errore);
        }
    }
}

// CONTATTI

export async function mostraContatti() {
    const versione = iniziaVista("Contatti");
    mostraStato("Caricamento autori...");

    try {
        const autori = await caricaAutori();

        if (versione !== versioneVista) return;

        contenitore.replaceChildren(
            elemento("h2", "Contatti")
        );

        if (autori.autori.length === 0) {
            mostraStato("Nessun autore disponibile.");
        } else {
            const sezione = document.createElement("section");
            sezione.append(autori.toDOM());
            contenitore.append(sezione);
        }
    } catch (errore) {
        if (versione === versioneVista) {
            iniziaVista("Contatti");
            mostraErrore(errore);
        }
    }
}

// DETTAGLIO ARTICOLO

export async function mostraArticolo(id) {
    const versione = iniziaVista("Dettaglio articolo");
    mostraStato("Caricamento articolo...");

    try {
        const articoli = await caricaArticoli();

        if (versione !== versioneVista) return;

        const articolo = articoli.find(a =>
            String(a.id) === id
        );

        contenitore.replaceChildren(
            elemento(
                "h2",
                articolo ? "Dettaglio articolo" : "Articolo non trovato"
            )
        );

        if (articolo) {
            contenitore.append(articolo.toDOM(true));
        }

        const torna = elemento("a", "Torna all'archivio");
        torna.href = "#/archivio";
        torna.className = "torna";
        contenitore.append(torna);

    } catch (errore) {
        if (versione === versioneVista) {
            iniziaVista("Dettaglio articolo");
            mostraErrore(errore);
        }
    }
}

// LOGIN

export function mostraLogin() {
    iniziaVista("Login");

    // La struttura del form rimane identica al primo laboratorio.
    const form = document.createElement("form");
    form.action = "#";
    form.method = "post";

    const ul = document.createElement("ul");

    for (const [id, etichetta, tipo, completamento] of [
        ["username", "Username:", "text", "username"],
        ["password", "Password:", "password", "current-password"]
    ]) {
        const li = document.createElement("li");

        const label = elemento("label", etichetta);
        label.htmlFor = id;

        const input = document.createElement("input");
        input.type = tipo;
        input.id = id;
        input.name = id;
        input.autocomplete = completamento;

        li.append(label, input);
        ul.append(li);
    }

    const li = document.createElement("li");
    const invia = document.createElement("input");
    invia.type = "submit";
    invia.value = "Invia";

    li.append(invia);
    ul.append(li);
    form.append(ul);
    contenitore.append(form);

    const username = form.querySelector("#username");
    const password = form.querySelector("#password");

    const erroreUsername = elemento("span", "");
    const errorePassword = elemento("span", "");
    const messaggio = elemento("p", "");

    username.insertAdjacentElement("afterend", erroreUsername);
    password.insertAdjacentElement("afterend", errorePassword);
    form.insertAdjacentElement("afterend", messaggio);

    erroreUsername.style.color = "red";
    errorePassword.style.color = "red";
    messaggio.style.color = "green";

    erroreUsername.style.display = "block";
    errorePassword.style.display = "block";

    form.addEventListener("submit", event => {
        event.preventDefault();

        erroreUsername.textContent = "";
        errorePassword.textContent = "";
        messaggio.textContent = "";

        let valido = true;
        const valoreUsername = username.value.trim();

        if (valoreUsername === "") {
            erroreUsername.textContent = "Username obbligatorio.";
            valido = false;
        } else if (valoreUsername.length < 3) {
            erroreUsername.textContent =
                "Lo username deve contenere almeno 3 caratteri.";
            valido = false;
        }

        if (password.value === "") {
            errorePassword.textContent = "Password obbligatoria.";
            valido = false;
        } else if (password.value.length < 8) {
            errorePassword.textContent =
                "La password deve contenere almeno 8 caratteri.";
            valido = false;
        }

        if (valido) {
            messaggio.textContent =
                "Dati validi! Login simulato con successo.";
        }
    });
}

// PAGINA NON TROVATA

export function mostraNonTrovata() {
    iniziaVista("Pagina non trovata");

    const link = elemento("a", "Torna alla Home");
    link.href = "#/";

    contenitore.append(link);
}
