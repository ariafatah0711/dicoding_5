import RestaurantApiSource from "../../data/restaurant-api-source";
import { createRestaurantSearchTemplate, createRestaurantItemTemplate } from "../templates/template-creator";
import { searchRestaurant } from "../../utils/api-handler";

const Home = {
  async render() {
    return `
        <hero-app class="hero"></hero-app>
        <main>
          <h1 tabindex="0" id="explore" class="title">explore restaurant</h1>
          <restaurant-search id="restaurant-search"></restaurant-search>
          <restaurant-list id="restaurant-list"></restaurant-list>
        </main>
    `;
  },

  async afterRender() {
    const restaurantListContainer = document.querySelector("#restaurant-list");
    const restaurantSearchContainer = document.querySelector("restaurant-search");

    restaurantSearchContainer.innerHTML = createRestaurantSearchTemplate();
    const restaurantSearchSubmitContainer = document.querySelector("main restaurant-search #search-submit");

    // restaurant-list
    const restaurants = await RestaurantApiSource.listRestaurant();
    restaurants.forEach((restaurant) => {
      restaurantListContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    // restaurant-search
    restaurantSearchSubmitContainer.addEventListener("click", (event) => {
      event.preventDefault();
      searchRestaurant();
    });
  },
};

export default Home;
