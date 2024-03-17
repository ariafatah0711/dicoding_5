import CONFIG from "../../globals/config";

const createRestaurantItemTemplate = (restaurant) => `
    <restaurant-item>
        <div class="card-image">
            <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="image ${restaurant.name}">
            <h3>${restaurant.city}</h3>
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

{
  /* <div class="detail-image"></div>; */
}

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="detail-title">
        <h1><a href="#/home">⇱</a>${restaurant.name}</h1>
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
`;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
