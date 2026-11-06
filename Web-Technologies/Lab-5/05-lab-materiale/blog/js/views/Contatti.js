import { caricaAutori } from "../data.js";

export const Contatti = {
    data() { return { autori: [], caricamento: true, errore: null }; },
    async mounted() {
        // TODO: recuperare gli autori con caricaAutori().
    },
    template: `
        <h2>Contatti</h2>
        <!-- TODO: mostrare gli autori in una tabella accessibile. -->
    `
};
