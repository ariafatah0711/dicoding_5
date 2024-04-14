const loading = {
  hidden () {
    const loadingContainer = document.querySelector('.loader-wrapper')
    loadingContainer.classList.add('display-none')
  },
  show () {
    const loadingContainer = document.querySelector('.loader-wrapper')
    loadingContainer.classList.remove('display-none')
  }
}

export default loading
