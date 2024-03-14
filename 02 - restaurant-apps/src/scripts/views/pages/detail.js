// import TheMovieDbSource from "../../data/themoviedb-source";
// import { createMovieItemTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    return `
        details
      `;
  },

  async afterRender() {
    // const movies = await TheMovieDbSource.nowPlayingMovies();
    // const moviesContainer = document.querySelector("#movies");
    // movies.forEach((movie) => {
    //   moviesContainer.innerHTML += createMovieItemTemplate(movie);
    // });
  },
};

export default Detail;
