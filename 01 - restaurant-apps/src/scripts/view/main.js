import $ from "jquery";
import datas from "../../public/data/DATA.json";

const main = async () => {
  /* restaurant list */
  $(`restaurant-list`).prop(`restaurants`, datas.restaurants);

  /* dragable false */
  $("body").on("dragstart", function () {
    return false;
  });

  /* drawer */
  $("#menu").click((event) => {
    $("#drawer").toggleClass("open");
    event.stopPropagation();
  });
  $("main, .nav a").click(() => {
    $("#drawer").removeClass("open");
  });
};

export default main;
