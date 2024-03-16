import RestaurantApiSource from "../../data/restaurant-api-source";

const Favorite = {
  async render() {
    return `
      <hero-app class="hero"></hero-app>
      <main>
        <h1 tabindex="0" id="favorite" class="title">favorite restaurant</h1>
        <restaurant-favorite-list id="restaurant-list"></restaurant-favorite-list>
      </main>
    `;
  },

  async afterRender() {
    // test
  },
};

export default Favorite;
