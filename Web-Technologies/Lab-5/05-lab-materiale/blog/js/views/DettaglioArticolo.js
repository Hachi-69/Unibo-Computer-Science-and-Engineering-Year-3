import { caricaArticoli } from "../data.js";

export const DettaglioArticolo = {
    props: ["id"],
    data() { return { articolo: null, caricamento: true, errore: null }; },
    watch: {
        // TODO: reagire al cambio di id.
    },
    mounted() {
        // TODO: caricare l'articolo iniziale.
    },
    methods: {
        async carica() {
            // TODO: trovare l'articolo corrispondente all'id.
        }
    },
    template: `
        <h2>Dettaglio articolo</h2>
        <!-- TODO: caricamento, errore, articolo non trovato, contenuto e categorie. -->
    `
};
