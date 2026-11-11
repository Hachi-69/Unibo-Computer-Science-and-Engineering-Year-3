import { articoliCategoria } from "../data.js";
export const Categoria = {
    props: ["categoria"],
    data() { return { articoli: [], caricamento: true, errore: null }; },
    watch: { categoria: { immediate: true, handler: "carica" } },
    methods: {
        riassunto(testo) { 
            return testo.length > 160 ? testo.slice(0, 160) + "..." : testo; 
        },
        async carica() {
            const richiesta = this.categoria;
            this.caricamento = true;
            this.errore = null;
            this.articoli = [];
            try {
                const risultati = await articoliCategoria(richiesta);
                if (this.categoria === richiesta) this.articoli = risultati;
            } catch (e) {
                console.error(e);
                if (this.categoria === richiesta) this.errore = "Impossibile caricare i dati. Riprova più tardi.";
            }
            if (this.categoria === richiesta) this.caricamento = false;
        }
    },
    template: `<h2>Categoria: {{ categoria }}</h2>
        <p v-if="caricamento" class="stato">Caricamento articoli...</p>
        <p v-else-if="errore" class="errore-caricamento">{{ errore }}</p>
        <p v-else-if="!articoli.length" class="stato">Nessun articolo per questa categoria.</p>
        <div v-else class="lista-articoli">
            <article v-for="articolo in articoli" :key="articolo.id">
                <img :src="articolo.immagine" alt="">

                <h3>{{ articolo.titolo }}</h3>

                <p>{{ articolo.data }} {{ articolo.autore }}</p>

                <p>{{ riassunto(articolo.testo) }}</p>

                <p v-if="articolo.categorie?.length" class="categorie">
                    Categorie:
                    <router-link v-for="categoria in articolo.categorie" :key="categoria"
                        :to="'/categoria/' + categoria">{{ categoria }}</router-link>
                </p>

                <router-link :to="'/articolo/' + articolo.id">
                    Leggi tutto
                </router-link>
            </article>
        </div>`
};
