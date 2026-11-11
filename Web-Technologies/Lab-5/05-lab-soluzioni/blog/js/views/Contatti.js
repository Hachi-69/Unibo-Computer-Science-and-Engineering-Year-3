import { caricaAutori } from "../data.js";
export const Contatti = {
    data() { return { autori: [], caricamento: true, errore: null }; },
    async mounted() {
        try { this.autori = await caricaAutori(); }
        catch (e) { console.error(e); this.errore = "Impossibile caricare i dati. Riprova più tardi."; }
        finally { this.caricamento = false; }
    },
    template: `<h2>Contatti</h2>
        <section>
            <p v-if="caricamento">Caricamento autori...</p>
            <p v-else-if="errore" class="errore">{{ errore }}</p>
            <p v-else-if="!autori.length">Nessun autore disponibile.</p>
            <table v-else>
                <caption>Autori del blog</caption>
                <thead><tr><th scope="col">Nome e cognome</th><th scope="col">Email</th><th scope="col">Argomenti</th></tr></thead>
                <tbody><tr v-for="autore in autori" :key="autore.email">
                    <th scope="row">{{ autore.nome }} {{ autore.cognome }}</th>
                    <td>{{ autore.email }}</td><td>{{ autore.argomenti }}</td>
                </tr></tbody>
            </table>
        </section>`
};
