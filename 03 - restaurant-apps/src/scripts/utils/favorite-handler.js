import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb'

const addFavorite = async (restaurants) => {
  const restaurantFavorite = await FavoriteRestaurantIdb.getAllRestaurants()
  if (restaurants.restaurants) {
    restaurants.restaurants.forEach((restaurant) => {
      restaurant.icon = 'fa fa-heart-o'
      restaurantFavorite.forEach((fav) => {
        if (restaurant.name === fav.name) {
          restaurant.icon = 'fa fa-heart'
        }
      })
    })
  }
  return restaurants
}

export default addFavorite
