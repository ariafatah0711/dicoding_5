import RestaurantApiSource from '../../data/restaurant-api-source'
import { createRestaurantDetailTemplate } from '../templates/template-creator'
import { postReview } from '../../utils/api-handler'
import LikeButtonInitiator from '../../utils/like-button-initiator'
import loading from '../../utils/loading-helper'
import UrlParser from '../../routes/url-parser'
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'

const Detail = {
  async render () {
    return `
        <loading-circle></loading-circle>
        <restaurant-detail id="restaurant-detail" class="restaurant-detail"></restaurant-detail>
        <div id="likeButtonContainer"></div>
      `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurantContainer = document.querySelector('#restaurant-detail')
    loading.show()

    try {
      const restaurant = await RestaurantApiSource.detailRestaurant(url.id)
      loading.hidden()

      restaurantContainer.innerHTML += createRestaurantDetailTemplate(restaurant)
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          city: restaurant.city,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
          description: restaurant.description,
          fav: true,
          icon: 'fa fa-heart'
        }
      })

      const submitReview = document.querySelector('#form-submit')
      submitReview.addEventListener('click', (event) => {
        event.preventDefault()
        postReview()
      })
    } catch (error) {
      loading.hidden()
      restaurantContainer.innerHTML += `
        <div class="page-none-container">
          <p id="page-none">Upps... Maaf halaman tidak bisa diakses <span onclick="location.reload()">refresh</span> Coba periksa koneksi anda</p>
        </div>
      `
    }
  }
}

export default Detail
