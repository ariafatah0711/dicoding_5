import "regenerator-runtime";
import "../styles/style.scss";
import "../scripts/components/hero-app.js";
import "../scripts/components/footer-app.js";
import "../scripts/components/loading.js";

/* lazy loading */
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const START = 10;
const NUMBER_OF_IMAGES = 100;

/* script */
import App from "./views/app";
import swRegister from "./utils/sw-register";
// import WebSocketInitiator from "./utils/websocket-initiator";
// import CONFIG from "./globals/config.js";

const app = new App({
  button: document.querySelector("#menu"),
  drawer: document.querySelector("#drawer"),
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", async () => {
  app.renderPage();
  await swRegister();
  // WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
