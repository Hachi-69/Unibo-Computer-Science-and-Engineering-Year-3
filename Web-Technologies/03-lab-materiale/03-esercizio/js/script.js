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

    toConsole() {
        console.log("Nome: " + this.nome);
        console.log("Cognome: " + this.cognome);
        console.log("Email: " + this.email);
        console.log("Argomenti: " + this.argomenti);
    }

    toDOM() {
        const authorTable = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");

        const tr = document.createElement("tr");
        const th1 = document.createElement("th");
        const th2 = document.createElement("th");
        const th3 = document.createElement("th");

        th1.setAttribute("scope", "col");
        th2.setAttribute("scope", "col");
        th3.setAttribute("scope", "col");

        th1.textContent = "Autore";
        th2.textContent = "Email";
        th3.textContent = "Argomenti";

        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);

        thead.appendChild(tr);
        authorTable.appendChild(thead);

        const tr2 = document.createElement("tr");
        const th4 = document.createElement("th");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");

        th4.setAttribute("scope", "row");
        th4.textContent = this.nome + " " + this.cognome;
        td1.textContent = this.email;
        td2.textContent = this.argomenti;

        tr2.appendChild(th4);
        tr2.appendChild(td1);
        tr2.appendChild(td2);

        tbody.appendChild(tr2);
        authorTable.appendChild(tbody);

        return authorTable;
    }
}

const autori = JSON.parse(jsonAutori).map(autore => new Autore(autore.nome, autore.cognome, autore.email, autore.argomenti));
const contenitore = document.querySelector("main section");
autori.forEach(autore => {
    autore.toConsole();
    contenitore.appendChild(autore.toDOM());
});

/**                <table>
    <thead>
        <tr><th scope="col">Autore</th><th scope="col">Email</th><th scope="col">Argomenti</th></tr>
    </thead>
    <tbody>
        <tr><th scope="row">Gino Pino</th><td>ginopino@blogtw.com</td><td>HTML, CSS, JS</td></tr>
        <tr><th scope="row">Cippa Lippa</th><td>cippalippa@blogtw.com</td><td>PHP</td></tr>
    </tbody>
</table>
                 */