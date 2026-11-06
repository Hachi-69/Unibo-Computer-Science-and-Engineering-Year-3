import { caricaArticoli, ordinaArticoliPerData } from "../data.js";

export const Archivio = {
    data() { return { articoli: [], caricamento: true, errore: null }; },
    methods: {
        // TODO: riassunto(testo).
    },
    async mounted() {
        // TODO: caricare e ordinare tutti gli articoli.
    },
    template: `
        <h2>Archivio articoli</h2>
        <!-- TODO: stati di caricamento/errore e lista articoli. -->
    `
};
