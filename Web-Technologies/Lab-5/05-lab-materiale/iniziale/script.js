const app = Vue.createApp({
    data() {
        return {
            messaggio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolores molestias eos magni corporis mollitia voluptates, sed rem minus quam quis facilis veniam.Molestias et porro quaerat velit, harum iusto!"
        }
    },
    methods: {
        maiuscolo() {
            this.messaggio = this.messaggio.toUpperCase();
        },
        minuscolo() {
            this.messaggio = this.messaggio.toLowerCase();
        },
        sposta() {
            this.messaggio = this.messaggio.substring(5) + this.messaggio.substring(0, 5);
        }
    }
});

app.mount("#app");
