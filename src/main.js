import { setupNavigation } from "./navigation.js";
import { router } from "./router.js";

setupNavigation();

window.addEventListener("popstate", () => {
  router();
});
