import { ultimiArticoli } from "../data.js";

export const Home = {
    data() {
        return { articoli: [], caricamento: true, errore: null };
    },
    methods: {
        // TODO: definire riassunto(testo), massimo 160 caratteri.
    },
    async mounted() {
        // TODO: chiamare ultimiArticoli(2), gestire caricamento ed errori.
    },
    template: `
        <h2>Ultimi articoli</h2>
        <!-- TODO: v-if, v-else-if, v-for, router-link. -->
        <!-- Usare la classe lista-articoli e il markup del blog originale. -->
    `
};
