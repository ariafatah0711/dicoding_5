class RestaurantItem extends HTMLElement {
  get restaurant() {
    return this._restaurant;
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="card-image">
                <img src="${this._restaurant.pictureId}" alt="image ${this._restaurant.name}">
            </div>
                <div class="card-content">
                <h3>Rating: ${this._restaurant.rating}</h3>
                <h2>${this._restaurant.name}</h2>
                <p>${this._restaurant.description}</p>
            </div>
    `;
  }
}

customElements.define("restaurant-item", RestaurantItem);
