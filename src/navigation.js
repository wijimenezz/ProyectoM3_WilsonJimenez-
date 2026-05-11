import { router } from "./router.js";
import { setPendingMessage } from "./services/chatState.js";

export function navigateTo(path) {
  const fullPath = path === "home" ? "/" : `/${path}`;

  // ✅ FIX — If we're already on this route, do nothing.
  // Without this, clicking the nav-chat button (which overlaps the
  // chat input bar visually) re-renders the whole page and kills
  // the input every time the user tries to click it.
  if (window.location.pathname === fullPath) return;

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

    // If the clicked element carries a message (starter chip),
    // store it before navigating so renderChat() can pick it up.
    const message = trigger.dataset.message;
    if (message) setPendingMessage(message);

    navigateTo(route);
  });

  // Browser back/forward buttons
  window.addEventListener("popstate", router);
}
