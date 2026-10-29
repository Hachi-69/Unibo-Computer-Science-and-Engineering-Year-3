const jsonAutori = `[
    {
        "nome": "Gino",
        "cognome": "Pino",
        "email": "gino.pino@blogtw.com",
        "argomenti": "HTML, CSS, JavaScript"
    },
    {
        "nome": "Cippa",
        "cognome": "Lippa",
        "email": "cippa.lippa@blogtw.com",
        "argomenti": "PHP"
    },
    {
        "nome": "Mario",
        "cognome": "Rossi",
        "email": "mario.rossi@blogtw.com",
        "argomenti": "HTML, CSS, Accessibilità"
    },
    {
        "nome": "Anna",
        "cognome": "Bianchi",
        "email": "anna.bianchi@blogtw.com",
        "argomenti": "Vue.js, JavaScript, CSS"
    }
]`;

class Autore {
    constructor(nome, cognome, email, argomenti) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.argomenti = argomenti;
    }

    getCompleteName() {
        return this.nome + " " + this.cognome;
    }

    toConsole() {
        console.log("Nome: " + this.getCompleteName());
        console.log("Email: " + this.email);
        console.log("Argomenti: " + this.argomenti);
    }

    toDOM() {
        const tr = document.createElement("tr");

        const nome = document.createElement("th");
        nome.scope = "row";
        nome.textContent = this.getCompleteName();

        const email = document.createElement("td");
        email.textContent = this.email;

        const argomenti = document.createElement("td");
        argomenti.textContent = this.argomenti;

        tr.append(nome, email, argomenti);

        return tr;
    }
}

class Autori {
    constructor(autori) {
        this.autori = autori;
    }

    toConsole() {
        this.autori.forEach(a => {
            a.toConsole();
        });
    }

    toDOM() {
        const table = document.createElement("table");

        const caption = document.createElement("caption");
        caption.textContent = "Autori del blog";

        const thead = document.createElement("thead");
        const intestazione = document.createElement("tr");

        const colonne = ["Nome e cognome", "Email", "Argomenti"];

        colonne.forEach(c => {
            const th = document.createElement("th");
            th.scope = "col";
            th.textContent = c;
            intestazione.append(th);
        });

        thead.append(intestazione);

        const tbody = document.createElement("tbody");

        this.autori.forEach(e => {
            tbody.append(e.toDOM());
        });

        table.append(caption, thead, tbody);

        return table;
    }
}

const dati = JSON.parse(jsonAutori);
const elencoAutori = dati.map(a => new Autore(
    a.nome, a.cognome, a.email, a.argomenti
));

const autori = new Autori(elencoAutori);

autori.toConsole();

const contenitore = document.querySelector("main > section");
contenitore.append(autori.toDOM());