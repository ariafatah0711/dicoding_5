import "./top-restaurant-item.js";

class TopRestaurantList extends HTMLElement {
  get restaurants() {
    return this._restaurants;
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this._restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement(
        "top-restaurant-item"
      );
      restaurantItemElement.restaurant = restaurant;
      restaurantItemElement.tabIndex = 0;

      this.appendChild(restaurantItemElement);
    });
  }
}

customElements.define("top-restaurant-list", TopRestaurantList);
