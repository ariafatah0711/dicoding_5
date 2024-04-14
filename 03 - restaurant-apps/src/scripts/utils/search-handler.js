const search = async (query) => {
  const li = document.querySelectorAll('restaurant-item')

  for (let i = 0; i < li.length; i++) {
    const title = li[i].getElementsByTagName('a')[0]
    const txtValue = title.textContent || title.innerText
    if (txtValue.toUpperCase().indexOf(query) > -1) {
      li[i].style.display = 'flex'
    } else {
      li[i].style.display = 'none'
    }
  }
}

export default search
