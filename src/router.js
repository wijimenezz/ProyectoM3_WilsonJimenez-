import { renderAbout } from "./Views/about.js";
import { renderChat } from "./Views/chat.js";
import { renderHome } from "./Views/home.js";
import { renderNotFound } from "./Views/notFound.js";

const routes = {
  "/": renderHome,
  "/chat": renderChat,
  "/about": renderAbout,
};

const pathToRoute = {
  "/": "home",
  "/chat": "chat",
  "/about": "about",
};

export function router() {
  const path = window.location.pathname;
  const render = routes[path] || renderNotFound;
  render();

  const route = pathToRoute[path] ?? "home";
  document
    .querySelectorAll(".nav-btn")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelector(`.nav-btn[data-route="${route}"]`)
    ?.classList.add("active");
}
