
const searchData = () => {
    fetch("https://api.pexels.com/v1/search?query=people", {
  headers: {
    Authorization: config.API_KEY
  }})
    .then(response => response.json())
    .then(body => console.log(body))
    .catch(error => console.error(error))
}
searchData()