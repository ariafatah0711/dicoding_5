import "regenerator-runtime";
import "../styles/style.scss";

// components
import "../scripts/components/hero-app.js";
import "../scripts/components/footer-app.js";

import App from "./views/app";
import swRegister from "./utils/sw-register";
// import WebSocketInitiator from "./utils/websocket-initiator";
// import FooterToolsInitiator from "./utils/footer-tools-initiator";
// import CONFIG from "./globals/config";

const app = new App({
  button: document.querySelector("#menu"),
  drawer: document.querySelector("#drawer"),
  images: document.querySelectorAll("img"),
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", async () => {
  app.renderPage();
  await swRegister();
  //   WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
