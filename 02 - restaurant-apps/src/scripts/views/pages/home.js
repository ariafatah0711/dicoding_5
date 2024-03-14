// import TheMovieDbSource from "../../data/themoviedb-source";
// import { createMovieItemTemplate } from "../templates/template-creator";
// data
import $ from "jquery";
import datas from "../../data/DATA.json";

const Home = {
  async render() {
    return `
        <h1 tabindex="0" id="explore" class="title">explore restaurant</h1>
        <restaurant-list id="restaurant"></restaurant-list>
    `;
  },

  async afterRender() {
    $(`restaurant-list`).prop(`restaurants`, datas.restaurants);
    // const movies = await TheMovieDbSource.nowPlayingMovies();
    // const moviesContainer = document.querySelector("#movies");
    // movies.forEach((movie) => {
    //   moviesContainer.innerHTML += createMovieItemTemplate(movie);
    // });
  },
};

export default Home;
