class HeroApp extends HTMLElement {
  constructor () {
    super()
    this.render()
  }

  render () {
    this.innerHTML = `
        <style>
            .hero {
              display: flex;
              min-width: 100%;
              min-height: 200px;
            }
            .hero picture {
              /* max-height: 200px; */
              min-width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;
            }
        </style>
        <picture>
          <source media="(min-width: 800px)" srcset="./images/heros/hero-image_2-medium.jpg">
          <source media="(min-width: 1200px)" srcset="./images/heros/hero-image_2-large.jpg">
          <img class="lazyload" data-src="./images/heros/hero-image_2-small.jpg" alt="">
        </picture>
    `
  }
}

customElements.define('hero-app', HeroApp)
