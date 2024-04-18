const assert = require("assert");

Feature("Liking Restaurant");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked restaurants", ({ I }) => {
  I.see("Belum Ada Restoran Favorit Yang Ditambahkan :(", "p");
});

Scenario("liking one restaurant", async ({ I }) => {
  I.see("Belum Ada Restoran Favorit Yang Ditambahkan :(", "p");

  I.amOnPage("/");

  I.seeElement(".restaurant__title a");
  const firstRestaurant = locate(".restaurant__title a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement("restaurant-item");

  const likedRestaurantTitle = (await I.grabTextFrom(".restaurant__title")).trim();
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario("Unliking one restaurant", async ({ I }) => {
  I.amOnPage("/");

  I.waitForElement("restaurant-item .card-content .restaurant__title a", 2);

  const firstRestaurant = locate("restaurant-item .card-content .restaurant__title a").first();
  I.click(firstRestaurant);

  I.waitForElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.waitForElement("restaurant-item .card-content .restaurant__title a");

  const likedRestaurant = locate("restaurant-item .card-content .restaurant__title a").first();
  I.click(likedRestaurant);

  I.waitForElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.see("Belum Ada Restoran Favorit Yang Ditambahkan :(", "p");
});
