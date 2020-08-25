import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import CreateWallet from "../components/CreateWallet.vue";
import ImportWallet from "../components/ImportWallet.vue";
import UnlockWallet from "../components/UnlockWallet.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/create",
    name: "Create",
    component: CreateWallet
  },
  {
    path: "/import",
    name: "Import",
    component: ImportWallet
  },
  {
    path: "/unlock",
    name: "Unlock",
    component: UnlockWallet
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
