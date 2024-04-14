import API_ENDPOINT from '../globals/api-endpoint'
import addFavorite from '../utils/favorite-handler'

class RestaurantApiSource {
  static async listRestaurant () {
    const response = await fetch(API_ENDPOINT.GET_LIST_RESTAURANT)
    const responseJson = await response.json()
    const responseJsonFav = await addFavorite(responseJson)
    return responseJsonFav.restaurants
  }

  static async detailRestaurant (id) {
    const response = await fetch(API_ENDPOINT.GET_DETAIL_RESTAURANT(id))
    const responseJson = await response.json()
    return responseJson.restaurant
  }

  static async searchRestaurant (query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query))
    const responseJson = await response.json()
    const responseJsonFav = await addFavorite(responseJson)
    return responseJsonFav.restaurants
  }

  static async postReview (data) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return response.json()
  }
}

export default RestaurantApiSource
