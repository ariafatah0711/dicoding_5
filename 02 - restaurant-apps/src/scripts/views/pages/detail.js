import RestaurantApiSource from "../../data/restaurant-api-source";
import { createRestaurantDetailTemplate } from "../templates/template-creator";
import UrlParser from "../../routes/url-parser";

const Detail = {
  async render() {
    return `
        <restaurant-detail id="restaurant-detail" class="restaurant-detail"></restaurant-detail>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector("#restaurant-detail");

    try {
      const restaurant = await RestaurantApiSource.detailRestaurant(url.id);
      console.log(restaurant);
      restaurantContainer.innerHTML += createRestaurantDetailTemplate(restaurant);
    } catch (error) {
      restaurantContainer.innerHTML += `<p id="page-none">Upps... Maaf halaman tidak bisa diakses <br/> Coba periksa koneksi anda </p>`;
    }
  },
};

export default Detail;
