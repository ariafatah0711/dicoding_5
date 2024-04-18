import { itActsAsFavoriteRestaurantModel } from "./contract/favoriteContractRestaurant";
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant-idb";

describe("Favorite restaurant Idb Contract Test Implementation", () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
