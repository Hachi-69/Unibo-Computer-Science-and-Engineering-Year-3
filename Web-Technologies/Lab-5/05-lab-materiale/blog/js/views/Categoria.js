import { articoliCategoria } from "../data.js";

export const Categoria = {
    props: ["categoria"],
    data() { return { articoli: [], caricamento: true, errore: null }; },
    watch: {
        // TODO: ricaricare gli articoli quando cambia la prop categoria.
    },
    mounted() {
        // TODO: caricare la categoria iniziale.
    },
    methods: {
        async carica() {
            // TODO: articoliCategoria(this.categoria).
            // Evitare che una richiesta precedente sovrascriva la nuova categoria.
        },
        // TODO: riassunto(testo).
    },
    template: `
        <h2>Categoria: {{ categoria }}</h2>
        <!-- TODO: stati e articoli della categoria. -->
    `
};
