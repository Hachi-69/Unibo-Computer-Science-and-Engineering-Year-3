
import { caricaArticolo } from "../data.js";

export const DettaglioArticolo = {
    props: ["id"],
    data() { return { articolo: null, caricamento: true, errore: null }; },
    watch: { id: { immediate: true, handler: "carica" } },
    methods: {
        async carica() {
            const id = this.id;
            this.caricamento = true;
            this.errore = null;
            this.articolo = null;
            try {
                const articolo = await caricaArticolo(id);
                if (this.id === id) this.articolo = articolo;
            } catch (e) {
                console.error(e);
                if (this.id === id) this.errore = "Impossibile caricare i dati. Riprova più tardi.";
            }
            if (this.id === id) this.caricamento = false;
        }
    },
    template: `<h2>{{ !caricamento && !errore && !articolo ? 'Articolo non trovato' : 'Dettaglio articolo' }}</h2>
        <p v-if="caricamento" class="stato">Caricamento articolo...</p>
        <p v-else-if="errore" class="errore-caricamento">{{ errore }}</p>
        <article v-else-if="articolo">
            <img :src="articolo.immagine" alt="">

            <h3>{{ articolo.titolo }}</h3>

            <p>{{ articolo.data }} {{ articolo.autore }}</p>

            <p>{{ articolo.testo }}</p>

            <p v-if="articolo.categorie?.length" class="categorie">
                Categorie:
                <router-link v-for="categoria in articolo.categorie" :key="categoria"
                    :to="'/categoria/' + categoria">{{ categoria }}</router-link>
            </p>
        </article>

        <router-link class="torna" to="/archivio">Torna all'archivio</router-link>`
};
