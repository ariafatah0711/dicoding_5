class HeroApp extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
            .hero {
                max-height: 200px;
                min-width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
            }
        </style>
        
        <img src='./images/heros/hero-image_2-small.jpg' alt="">
    `;
  }
}

{
  /* <img src="./images/heros/hero-image_2.jpg" alt=""></img> */
}

customElements.define("hero-app", HeroApp);
