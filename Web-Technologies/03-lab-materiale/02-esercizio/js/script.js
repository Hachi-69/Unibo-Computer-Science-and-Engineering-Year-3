
const jsonArticoli = `[
    {
        "Autore": "Gino Pino",
        "Data": "23 Ottobre 2026",
        "Titolo": "Intro alle Tecnologie Web Client Side",
        "Immagine": "./img/html5-js-css3.png",
        "Testo": "\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\""
    },
    {
        "Autore": "Cippa Lippa",
        "Data": "23 Ottobre 2026",
        "Titolo": "Intro alle Tecnologie Web Server Side",
        "Immagine": "./img/php.png",
        "Testo": "\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\""
    }
]`;

class Articolo {
    constructor(autore, data, titolo, immagine, testo) {
        this.autore = autore;
        this.data = data;
        this.titolo = titolo;
        this.immagine = immagine;
        this.testo = testo;
    }

    toConsole() {
        console.log("Titolo: " + this.titolo);
        console.log("Autore: " + this.autore);
        console.log("Data: " + this.data);
        console.log("Immagine: " + this.immagine);
        console.log("Testo: " + this.testo);
    }

    toDOM() {
        const articolo = document.createElement("article");

        const img = document.createElement("img");
        img.src = this.immagine;
        img.alt = "";

        const titolo = document.createElement("h3");
        titolo.textContent = this.titolo;

        const dataAutore = document.createElement("p");
        dataAutore.textContent = this.data + " - " + this.autore;

        const testo = document.createElement("p");
        testo.textContent = this.testo;

        const bottone = document.createElement("a");
        bottone.href = "#";
        bottone.textContent = "Leggi tutto";

        articolo.append(img, titolo, dataAutore, testo, bottone);

        return articolo;
    }
}

const dati = JSON.parse(jsonArticoli);
const articoli = dati.map(a => new Articolo(a.Autore, a.Data, a.Titolo, a.Immagine, a.Testo));
const contenitore = document.querySelector("main");
articoli.forEach(articolo => {
    articolo.toConsole();
    contenitore.append(articolo.toDOM());
})