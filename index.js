
require('dotenv').config()




// const LoadImgBtn = document.querySelector('.loadImgBtn')
// LoadImgBtn.addEventListener('click', loadImages)
// const displayImg = document.querySelectorAll('svg')

const searchData = () => {
    fetch('https://api.pexels.com/v1/search?Ocean', {
        "Authorization": process.env.API_KEY
    })
    .then(response => response.json())
    .then(body => {
        console.log(body)
        alert('Succes!')
    })
}
searchData()