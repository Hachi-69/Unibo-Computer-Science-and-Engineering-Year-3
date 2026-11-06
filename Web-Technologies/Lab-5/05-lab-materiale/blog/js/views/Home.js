import { ultimiArticoli } from "../data.js";

export const Home = {
    data() {
        return { articoli: [], caricamento: true, errore: null };
    },
    methods: {
        // TODO: definire riassunto(testo), massimo 160 caratteri.
        riassunto(testo) {
            return testo.length > 160 ? testo.substring(0, 160) + "..." : testo;
        }
    },
    async mounted() {
        // TODO: chiamare ultimiArticoli(2), gestire caricamento ed errori.
        try {
            this.articoli = await ultimiArticoli(2);
        } catch (e) {
            console.log(e);
            this.errore = e;
        }
        finally {
            this.caricamento = false;
        }
    },
    template: `
        <h2>Ultimi articoli</h2>
        <!-- TODO: v-if, v-else-if, v-for, router-link. -->
        <p v-if="caricamento" class="stato">Caricamento articoli...</p>
        <p v-else-if="errore" class="errore-caricamento"> {{errore}} </p>
        <p v-else-if="!articoli.length"> Nessun articolo disponibile </p>
        <!-- Usare la classe lista-articoli e il markup del blog originale. -->
        <div v-else class="lista-articoli"> 
            <article v-for="articolo in articoli" :key="articoli.id">
                <img :src="articolo.immagine" alt="" />
                <h3> {{articolo.titolo}} </h3>
                <p>{{articolo.data + " " + articolo.autore}}</p>
                <p>{{riassunto(articolo.testo)}}</p>
                <p v-if="articolo.categorie?.length"> 
                    Categorie:
                    <template v-for="categoria in articolo.categorie"> {{categoria + " "}} </template>
                </p>
                <router-link :to="'/articolo/' + articolo.id"> Leggi tutto</router-link>
            </article>
        </div>
    `
};
