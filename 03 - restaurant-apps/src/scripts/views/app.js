import DrawerInitiator from "../utils/drawer-initiator";
import UrlParser from "../routes/url-parser.js";
import routes from "../routes/routes";

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const skipLink = document.querySelector(".skip-link");
    const headerElement = document.querySelector("header");

    window.addEventListener("scroll", () => {
      headerElement.classList.toggle("scrolled", window.scrollY > 0);
    });

    skipLink.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollBy(0, 200);
      skipLink.blur();
    });

    // if (window.location.href.includes("#test")) {
    //   const restaurantList = document.querySelector("restaurant-list");
    //   console.log(restaurantList);
    //   if (restaurantList) {
    //     // restaurantList.style.minHeight = "100px";
    //     document.body.style.color = "red";
    //     console.log("test berhasil");
    //   }
    // }

    window.scrollTo(0, 0);
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
