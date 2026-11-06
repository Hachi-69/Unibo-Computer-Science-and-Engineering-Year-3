export const Login = {
    data() { return { username: "", password: "", errori: {}, conferma: "" }; },
    methods: {
        invia() {
            this.errori = {}; this.conferma = "";
            if (!this.username.trim()) this.errori.username = "Username obbligatorio.";
            else if (this.username.trim().length < 3) this.errori.username = "Lo username deve contenere almeno 3 caratteri.";
            if (!this.password) this.errori.password = "Password obbligatoria.";
            else if (this.password.length < 8) this.errori.password = "La password deve contenere almeno 8 caratteri.";
            if (!Object.keys(this.errori).length) this.conferma = "Dati validi! Login simulato con successo.";
        }
    },
    template: `<h2>Login</h2>
        <form action="#" method="post" @submit.prevent="invia" novalidate>
            <ul>
                <li><label for="username">Username:</label><input type="text" id="username" name="username" autocomplete="username" v-model="username" :aria-invalid="!!errori.username" :aria-describedby="errori.username ? 'errore-username' : undefined"><span v-if="errori.username" id="errore-username" class="errore">{{ errori.username }}</span></li>
                <li><label for="password">Password:</label><input type="password" id="password" name="password" autocomplete="current-password" v-model="password" :aria-invalid="!!errori.password" :aria-describedby="errori.password ? 'errore-password' : undefined"><span v-if="errori.password" id="errore-password" class="errore">{{ errori.password }}</span></li>
                <li><input type="submit" value="Invia"></li>
            </ul>
        </form>
        <p v-if="conferma" class="conferma" role="status">{{ conferma }}</p>`
};
