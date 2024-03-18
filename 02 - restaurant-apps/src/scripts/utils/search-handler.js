const search = async (query) => {
  const li = document.querySelectorAll("restaurant-item");
  let haveData = false;
  for (let i = 0; i < li.length; i++) {
    const title = li[i].getElementsByTagName("a")[0];
    const txtValue = title.textContent || title.innerText;
    if (txtValue.toUpperCase().indexOf(query) > -1) {
      li[i].style.display = "";
      haveData = true;
    } else {
      li[i].style.display = "none";
    }
  }
};

export default search;
