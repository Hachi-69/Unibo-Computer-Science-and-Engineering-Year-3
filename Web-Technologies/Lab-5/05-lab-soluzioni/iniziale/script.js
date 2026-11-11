const app = Vue.createApp({
    data() {
        return {
            messaggio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        };
    },
    methods: {
        maiuscolo() {
            this.messaggio = this.messaggio.toUpperCase();
        },
        minuscolo() {
            this.messaggio = this.messaggio.toLowerCase();
        },
        sposta() {
            if (this.messaggio.length >= 5) {
                this.messaggio = this.messaggio.substring(5) + this.messaggio.substring(0, 5);
            }
        }
    }
}).mount("#app");
