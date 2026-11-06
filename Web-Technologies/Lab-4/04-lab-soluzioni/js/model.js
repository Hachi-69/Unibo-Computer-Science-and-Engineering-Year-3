
export class Articolo {
    constructor(autore, data, titolo, immagine, testo, id) {
        this.autore = autore;
        this.data = data;
        this.titolo = titolo;
        this.immagine = immagine;
        this.testo = testo;
        this.id = id;
    }

    toConsole() {
        console.log("Titolo: " + this.titolo);
        console.log("Autore: " + this.autore);
        console.log("Data: " + this.data);
        console.log("Immagine: " + this.immagine);
        console.log("Testo: " + this.testo);
    }

    getRiassunto(lunghezza = 160) {
        return this.testo.length > lunghezza
            ? this.testo.substring(0, lunghezza) + "..." : this.testo;
    }

    toDOM(completo = false) {
        const articolo = document.createElement("article");
        const immagine = document.createElement("img");
        immagine.src = this.immagine;
        immagine.alt = "";

        const titolo = document.createElement("h3");
        titolo.textContent = this.titolo;

        const dataAutore = document.createElement("p");
        dataAutore.textContent = this.data + " " + this.autore;

        const testo = document.createElement("p");
        testo.textContent = completo ? this.testo : this.getRiassunto();

        articolo.append(immagine, titolo, dataAutore, testo);

        if (!completo) {
            const bottone = document.createElement("a");
            bottone.href = "#/articolo/" + this.id;
            bottone.textContent = "Leggi tutto";
            articolo.append(bottone);
        }

        return articolo;
    }
}

export class Autore {
    constructor(nome, cognome, email, argomenti) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.argomenti = argomenti;
    }

    getNomeCompleto() {
        return this.nome + " " + this.cognome;
    }

    toConsole() {
        console.log("Nome: " + this.getNomeCompleto());
        console.log("Email: " + this.email);
        console.log("Argomenti: " + this.argomenti);
    }

    toDOM() {
        const tr = document.createElement("tr");

        const nome = document.createElement("th");
        nome.scope = "row";
        nome.textContent = this.getNomeCompleto();

        const email = document.createElement("td");
        email.textContent = this.email;

        const argomenti = document.createElement("td");
        argomenti.textContent = this.argomenti;

        tr.append(nome, email, argomenti);
        return tr;
    }
}

export class Autori {
    constructor(autori) {
        this.autori = autori;
    }

    toConsole() {
        this.autori.forEach(autore => autore.toConsole());
    }

    toDOM() {
        const table = document.createElement("table");

        const caption = document.createElement("caption");
        caption.textContent = "Autori del blog";

        const thead = document.createElement("thead");
        const intestazione = document.createElement("tr");

        ["Nome e cognome", "Email", "Argomenti"].forEach(colonna => {
            const th = document.createElement("th");
            th.scope = "col";
            th.textContent = colonna;
            intestazione.append(th);
        });

        thead.append(intestazione);

        const tbody = document.createElement("tbody");
        this.autori.forEach(autore => tbody.append(autore.toDOM()));

        table.append(caption, thead, tbody);
        return table;
    }
}
