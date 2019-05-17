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
      console.log(data[0].mission_name)
      document.querySelector('.news-feed').appendChild('h2').textContent =
        data[0].mission_name
    })
}

const main = () => {
  get_pic_api()
  get_news_api()
}

document.addEventListener('DOMContentLoaded', main)
