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

const createRestaurantDetailTemplate = (restaurant) => `
    <h1>${restaurant.name}</h1>
`;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
