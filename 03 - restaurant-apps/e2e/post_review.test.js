const assert = require("assert");

Feature("Post Review");

Scenario("Post a review", async ({ I }) => {
  I.amOnPage("/");

  I.waitForElement("restaurant-item .card-content .restaurant__title a", 2);
  I.click(locate("restaurant-item .card-content .restaurant__title a").first());

  I.waitForElement("restaurant-detail .detail-form");

  const name = "aria (tester e2e)";
  const review = "test 12345";

  I.fillField("input#input-name", name);
  I.fillField("textarea#input-review", review);
  I.click("#form-submit");

  I.seeElement(".detail-review ul li .review-title h1");
  I.seeElement(".detail-review ul li .review-content p");

  const lastReviewName = locate(".detail-review ul li .review-title h1").last();
  const lastReviewContent = locate(".detail-review ul li .review-content p").last();

  const lastReviewNameText = await I.grabTextFrom(lastReviewName);
  const lastReviewContentText = await I.grabTextFrom(lastReviewContent);

  I.wait(2);
  assert.ok(lastReviewNameText.includes(name), "The last review name doesn't contain the expected text");
  assert.strictEqual(lastReviewContentText, review);
});
