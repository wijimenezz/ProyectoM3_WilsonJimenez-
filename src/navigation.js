import { router } from "./router.js";

export function navigateTo(path) {
  history.pushState(null, "", path);
  router();
}
