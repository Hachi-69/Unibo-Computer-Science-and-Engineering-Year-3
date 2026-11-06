// TODO: importare le viste e configurare Vue Router con hash history.
// Rotte: /, /archivio, /categoria/:categoria, /articolo/:id,
// /contatti, /login e fallback per le rotte sconosciute.
// Per categoria e dettaglio, ricordarsi di props: true.

import { Home } from "./views/Home.js";
import { Login } from "./views/Login.js";
import { NonTrovata } from "./views/NonTrovata.js";

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        { path: "/", component: Home },
        { path: "/login", component: Login },
        { path: "/:pathMatch(.*)*", component: NonTrovata },

    ]
}); // TODO: sostituire con createRouter(...)
