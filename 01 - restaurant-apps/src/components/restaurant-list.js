import "./restaurant-item.js";

class RestaurantList extends HTMLElement {
  get restaurants() {
    return this._restaurants;
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this._restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement("restaurant-item");
      restaurantItemElement.restaurant = restaurant;
      restaurantItemElement.tabIndex = 0;

      this.appendChild(restaurantItemElement);
    });
  }
}

customElements.define("restaurant-list", RestaurantList);
