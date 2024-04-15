import CONFIG from "../../globals/config";

const createRestaurantSearchTemplate = () => `
    <form>
        <input id="input-search" type="text" placeholder="search" require autocomplete="off" maxlength="20">
        <button type="submit" id="search-submit">cari</button>
    </form>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <restaurant-item>
        <div class="card-image">
            <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="image ${restaurant.name}">
            <h3>${restaurant.city}</h3>
            <i class="${restaurant.icon}" aria-hidden="true"></i>
        </div>
        <div class="card-content">
            <h3>★ ${restaurant.rating}</h3>
            <h2>
                <a href="#/detail/${restaurant.id}">${restaurant.name}</a>
            </h2>
            <p>${restaurant.description}</p>
        </div>
    </restaurant-item>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="detail-title">
        <h1><a href="javascript:void(0);" onclick="window.history.back()">⇱</a>${restaurant.name}</h1>
        <span>(${restaurant.city})</span>
    </div>

    <div class="detail-content">
        <div class="detail-iamge">
            <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="image ${restaurant.name}">
        </div>
        <div class="detail-article">
            <h1>rating <span>${restaurant.rating} / 5.0</span></h1>
            <h1>alamat <span>${restaurant.address}</span></h1>
            <h1>category <span>${restaurant.categories.map((categorie) => categorie.name)}</span></h1>
        </div>
        <div class="detail-description">
            <p class="description">${restaurant.description}</p>
        </div>
    </div>

    <h1 class="title">daftar menu</h1>
    <div class="detail-menu">
        <div class="detail-foods">
            <h1>makanan</h1>
            <ul>
                ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join("")}
            </ul>
        </div>
        <div class="detail-drinks">
            <h1>minuman</h1>
            <ul>
                ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join("")}
            </ul>
        </div>
    </div>

    <h1 class="title">ulasan review</h1>
    <div class="detail-review">
        <ul>
            ${restaurant.customerReviews
              .map(
                (customerReview) => `
                    <li>
                        <div class="review-title">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icons">
                                <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                            </svg>
                            <h1>
                                ${customerReview.name}
                                <span>${customerReview.date}</span>
                            </h1>
                        </div>
                        <div class="review-content">
                            <p>${customerReview.review}</p>
                        </div>
                    </li>
                `
              )
              .join("")}
        </ul>
    </div>

    <div class="detail-form">
        <form class="form-review">
            <h1>tambahkan ulasanmu</h1>
            <label for="input-name">name: </label>
            <input id="input-name" type="text" placeholder="nama" require autocomplete="off" maxlength="30">
            <label for="input-review">review: </label>
            <textarea id="input-review" rows="4" maxlength="120" placeholder="ulasan"></textarea>
            <button type="submit" id="form-submit">kirim</button>
        </form>
    </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantSearchTemplate,
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
