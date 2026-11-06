import { caricaArticoli, caricaAutori } from "./data.js";

const contenitore = document.querySelector("#app");

function elemento(tag, testo) {
    const nodo = document.createElement(tag);
    nodo.textContent = testo;
    return nodo;
}

function iniziaVista(titolo) {
    contenitore.replaceChildren(elemento("h2", titolo));
}

function mostraStato(testo, classe = "stato") {
    const messaggio = elemento("p", testo);
    messaggio.className = classe;
    contenitore.append(messaggio);
}

function mostraErrore(errore) {
    console.error(errore);
    mostraStato("Impossibile caricare i dati. Riprova più tardi.", "errore-caricamento");
}

// GUIDATO: implementare la Home caricando gli ultimi tre articoli.
export async function mostraHome() {
    iniziaVista("Ultimi articoli");
    // TODO: stato di caricamento, try/catch, caricaArticoli(),
    //       array vuoto, articoli.slice(0, 3), toDOM().
}

// AUTONOMO: mostrare tutti gli articoli.
export async function mostraArchivio() {
    iniziaVista("Archivio articoli");
    // TODO: caricare e visualizzare tutti gli articoli.
}

// AUTONOMO: tabella degli autori.
export async function mostraContatti() {
    iniziaVista("Contatti");
    // TODO: caricare gli autori e utilizzare Autori.toDOM().
}

// AUTONOMO: rotta parametrizzata #/articolo/ID.
export async function mostraArticolo(id) {
    iniziaVista("Dettaglio articolo");
    // TODO: caricare gli articoli, cercare l'id e visualizzare toDOM(true).
    // TODO: gestire l'articolo inesistente e il link all'archivio.
}

// COMPLETO: il login riutilizza la validazione del laboratorio precedente.
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
            erroreUsername.textContent = "Lo username deve contenere almeno 3 caratteri.";
            valido = false;
        }
        if (password.value === "") {
            errorePassword.textContent = "Password obbligatoria.";
            valido = false;
        } else if (password.value.length < 8) {
            errorePassword.textContent = "La password deve contenere almeno 8 caratteri.";
            valido = false;
        }
        if (valido) messaggio.textContent = "Dati validi! Login simulato con successo.";
    });
}

export function mostraNonTrovata() {
    iniziaVista("Pagina non trovata");
    const link = elemento("a", "Torna alla Home");
    link.href = "#/";
    contenitore.append(link);
}
