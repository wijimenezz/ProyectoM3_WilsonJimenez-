import { router } from "./router.js";

export function navigateTo(path) {
  const fullPath = path === "home" ? "/" : `/${path}`;

  history.pushState({}, "", fullPath);

  router();
}

export function setupNavigation() {
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-route]");

    if (!trigger) return;

    const route = trigger.dataset.route;

    if (!route) return;

    event.preventDefault();

    navigateTo(route);
  });

  // Browser back/forward buttons
  window.addEventListener("popstate", router);
}
