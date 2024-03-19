import CONFIG from './config'

const API_ENDPOINT = {
  GET_LIST_RESTAURANT: `${CONFIG.BASE_URL}list`,
  GET_DETAIL_RESTAURANT: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SEARCH: (query) => `${CONFIG.BASE_URL}search?q=${query}`,
  POST_REVIEW: `${CONFIG.BASE_URL}review`
}

export default API_ENDPOINT
