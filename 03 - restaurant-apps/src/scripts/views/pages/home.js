import RestaurantApiSource from "../../data/restaurant-api-source";
import { createRestaurantSearchTemplate, createRestaurantItemTemplate } from "../templates/template-creator";
import { searchRestaurant } from "../../utils/api-handler";
import loading from "../../utils/loading-helper";

const Home = {
  async render() {
    return `
        <hero-app class="hero"></hero-app>
        <main>
          <h1 tabindex="0" id="explore" class="title">explore restaurant</h1>
          <restaurant-search id="restaurant-search"></restaurant-search>
          <loading-circle></loading-circle>
          <restaurant-list id="restaurant-list"></restaurant-list>
        </main>
    `;
  },

  async afterRender() {
    const restaurantListContainer = document.querySelector("#restaurant-list");
    const restaurantSearchContainer = document.querySelector("restaurant-search");
    restaurantSearchContainer.innerHTML = createRestaurantSearchTemplate();
    const restaurantSearchSubmitContainer = document.querySelector("main restaurant-search #search-submit");

    loading.show();
    const restaurants = await RestaurantApiSource.listRestaurant();
    console.log(restaurants);
    loading.hidden();

    restaurants.forEach((restaurant) => {
      restaurantListContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    restaurantSearchSubmitContainer.addEventListener("click", (event) => {
      event.preventDefault();
      searchRestaurant("offline");
    });
  },
};

export default Home;
