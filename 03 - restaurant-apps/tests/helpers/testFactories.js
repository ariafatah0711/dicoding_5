import LikeButtonInitiator from "../../src/scripts/utils/like-button-initiator";
import FavoriteRestaurantIdb from "../../src/scripts/data/favorite-restaurant-idb";

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};
export { createLikeButtonPresenterWithRestaurant };
