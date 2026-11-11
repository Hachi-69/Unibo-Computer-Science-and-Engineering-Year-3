import { Home } from "./views/Home.js";
import { Archivio } from "./views/Archivio.js";
import { Categoria } from "./views/Categoria.js";
import { DettaglioArticolo } from "./views/DettaglioArticolo.js";
import { Contatti } from "./views/Contatti.js";
import { Login } from "./views/Login.js";
import { NonTrovata } from "./views/NonTrovata.js";
const { createRouter, createWebHashHistory } = VueRouter;
export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", component: Home },
        { path: "/archivio", component: Archivio },
        { path: "/contatti", component: Contatti },
        { path: "/login", component: Login },
        { path: "/categoria/:categoria", component: Categoria, props: true },
        { path: "/articolo/:id([1-9]\\d*)", component: DettaglioArticolo, props: true },
        { path: "/:pathMatch(.*)*", component: NonTrovata }
    ]
});
