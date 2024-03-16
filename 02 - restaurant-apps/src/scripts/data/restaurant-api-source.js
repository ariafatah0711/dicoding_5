import API_ENDPOINT from "../globals/api-endpoint";

class RestaurantApiSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.GET_LIST_RESTAURANT);
    const responseJson = await response.json();
    console.log(responseJson.restaurants);
    return responseJson.restaurants;
  }
}

export default RestaurantApiSource;
