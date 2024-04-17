class HeroApp extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
            .hero {
              display: flex;
              min-width: 100%;
            }
            .hero {
              max-height: 200px;
              min-width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;
            }
        </style>

        <img src='./images/heros/hero-image_2-small.jpg' srcset='./images/heros/hero-image_2-small.jpg 480w, ./images/heros/hero-image_2-medium.jpg 1080w' alt="" loading="eager">
       `;
  }
}

{
  //   <picture>
  //   <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg">
  // </picture>
  // <source media="(min-width: 601px)" srcset="./images/heros/hero-image_2-medium.jpg">
  // <img src='./images/heros/hero-image_2-small.jpg' alt="">
  /* <img src="./images/heros/hero-image_2.jpg" alt=""></img> */
}

customElements.define("hero-app", HeroApp);
