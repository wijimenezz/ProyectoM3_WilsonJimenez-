import { router } from "./router.js";

export function navigateTo(path) {
  const fullPath = path === "home" ? "/" : `/${path}`;
  history.pushState(null, "", fullPath);
  router();
}

export function setupNavigation() {
  document.addEventListener("click", (event) => {
    // 1. Find the closest element with data-route
    //    (handles clicks on child elements like <svg> or <span> inside the button)
    const trigger = event.target.closest("[data-route]");
    if (!trigger) return;

    // 2. Read the route
    const route = trigger.dataset.route;
    if (!route) return;

    // 3. Respect modified clicks (open in new tab behavior, if you ever want it)
    const isModified =
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    if (isModified) return;

    // 4. Intercept and navigate
    event.preventDefault();
    navigateTo(route);
  });
}
