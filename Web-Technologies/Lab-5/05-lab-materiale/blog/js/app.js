// TODO: inizializzare l'applicazione Vue, installare il router e montarla su #app.
import { router } from "./router.js";

const app = Vue.createApp({});
app.use(router);
app.mount("#app");
