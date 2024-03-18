import RestaurantApiSource from "../data/restaurant-api-source";
import UrlParser from "../routes/url-parser";
import { createRestaurantItemTemplate } from "../views/templates/template-creator";
import search from "./search-handler";

const postReview = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const name = document.querySelector("#input-name");
  const review = document.querySelector("#input-review");
  const detailReviewContainer = document.querySelector(".detail-review ul");

  if (name.value === "" || review.value === "") {
    alert("nama dan review harus diisi");
    return;
  }

  const data = {
    id: url.id,
    name: name.value,
    review: review.value,
  };

  const date = new Date().toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const reviewTemplate = `
    <li>
        <div class="review-title">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icons">
                <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
            </svg>
            <h1>
                ${data.name}
                <span>${date}</span>
            </h1>
        </div>
        <div class="review-content">
            <p>${data.review}</p>
        </div>
    </li>
  `;

  await RestaurantApiSource.postReview(data);
  detailReviewContainer.innerHTML += reviewTemplate;
  name.value = "";
  review.value = "";
};

const searchRestaurant = async (mode = "online") => {
  const searchInputContainer = document.querySelector("#input-search");
  const searchInput = document.querySelector("#input-search").value.toUpperCase();
  const restaurantListContainer = document.querySelector("#restaurant-list");

  if (mode === "offline") {
    search(searchInput);
    searchInputContainer.value = "";
  }

  try {
    const datas = await RestaurantApiSource.searchRestaurant(searchInput);
    restaurantListContainer.innerHTML = "";
    datas.forEach((data) => {
      restaurantListContainer.innerHTML += createRestaurantItemTemplate(data);
    });
  } catch (error) {
    search(searchInput);
  } finally {
    searchInputContainer.value = "";
  }
};

export { postReview, searchRestaurant };
