class HeroApp extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
            .hero {
                height: 200px;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
            }
        </style>
        <img src="./images/heros/hero-image_2.jpg" alt="">
    `;
  }
}

customElements.define("hero-app", HeroApp);
