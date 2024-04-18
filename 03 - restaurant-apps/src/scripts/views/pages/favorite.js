import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import { createRestaurantItemTemplate } from "../templates/template-creator";
import loading from "../../utils/loading-helper";

const Favorite = {
  async render() {
    return `
      <hero-app class="hero"></hero-app>
      <main>
        <h1 tabindex="0" id="favorite" class="title">favorite restaurant</h1>
        <loading-circle></loading-circle>
        <restaurant-list id="restaurant-list" class="restaurant-fav"></restaurant-list>
      </main>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    console.log(restaurants);
    loading.hidden();

    const restaurantListContainer = document.querySelector("#restaurant-list");

    restaurants.forEach((restaurant) => {
      restaurantListContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    if (restaurants.length === 0) {
      restaurantListContainer.innerHTML += `
        <div class="page-none-container">
          <p id="page-none">Belum ada restoran favorit yang ditambahkan :(</p>
        </div>
      `;
    }
  },
};

export default Favorite;
