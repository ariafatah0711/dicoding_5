const assert = require("assert");

Feature("Search Restaurant");

Scenario("Empty search field", async ({ I }) => {
  I.amOnPage("/");

  I.waitForElement("restaurant-search");
  I.fillField("restaurant-search form #input-search", "");
  I.click("#search-submit");

  I.wait(1);
  I.seeElement("restaurant-item");
});

Scenario("Empty search result", async ({ I }) => {
  I.amOnPage("/");

  I.waitForElement("restaurant-search");
  I.fillField("restaurant-search form #input-search", "qwertyuiop");
  I.click("#search-submit");

  I.wait(1);
  I.dontSeeElement("restaurant-item");
});

Scenario("Searching a restaurant, ", async ({ I }) => {
  I.amOnPage("/");

  I.waitForElement("restaurant-search");
  I.fillField("restaurant-search form #input-search", "Melting");
  I.click("#search-submit");

  I.wait(1);

  const firstRestaurant = locate(".restaurant__title a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  assert.strictEqual(firstRestaurantTitle, "Melting Pot");
});
