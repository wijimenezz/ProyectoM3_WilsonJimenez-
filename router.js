import { renderAbout } from "./Views/about.js";
import { renderChat } from "./Views/chat.js";
import { renderHome } from "./Views/home.js";
import { renderNotFound } from "./Views/notFound.js";

const routes = {
  "/": renderHome,
  "/chat": renderChat,
  "/about": renderAbout,
};

export function router() {
  const path = window.location.pathname;
  const render = routes[path] || renderNotFound;
  render();
}
