import RestaurantApiSource from "../../data/restaurant-api-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
        <h1 tabindex="0" id="explore" class="title">explore restaurant</h1>
        <restaurant-list id="restaurant-list"></restaurant-list>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector("#restaurant-list");
    const restaurants = await RestaurantApiSource.listRestaurant();

    console.log(restaurants);
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;