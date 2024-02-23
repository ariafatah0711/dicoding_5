class FooterApp extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        footer-app {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 70px;
          background: #424242;
          color: #efefef;
        }
        footer-app .title {
          width: 100%;
          font-size: 1.25rem;
          color: #efefef;
        }
      </style>
        <h1 class="title">Copyright &copy;2024 - Gurih Nusantara</h1>
      `;
    // this.tabIndex = 0;
  }
}

customElements.define("footer-app", FooterApp);
