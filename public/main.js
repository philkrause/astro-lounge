let slide = 0
const allData = []

const get_pic_api = () => {
  console.log('fetching api')

  fetch('https://sdg-astro-api.herokuapp.com/api/Nasa/apod')
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data.url)
      document.querySelector(
        '.image-of-the-day'
      ).style.backgroundImage = `url(${data.url})`
    })
}
const get_news_api = () => {
  console.log('fetching api 2')

  fetch('https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming')
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(slide)
      let allData = data
      document.querySelector('.news-feed h2 span').textContent =
        data[slide].mission_name
      document.getElementById('details').textContent = data[slide].details
      document.getElementById('eta').textContent = data[slide].launch_date_local
      document.getElementById('launch_name').textContent =
        data[slide].launch_site.site_name_long
    })
}
const nextSlide = () => {
  slide += 1
  get_news_api()
}
const prevSlide = () => {
  slide -= 1
  get_news_api()
}
const main = () => {
  get_pic_api()
  get_news_api()
}
document.addEventListener('DOMContentLoaded', main)
document.querySelector('.right-button').addEventListener('click', nextSlide)
document.querySelector('.left-button').addEventListener('click', prevSlide)
