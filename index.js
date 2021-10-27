import { createClient } from 'pexels';
require('dotenv').config()

const client = createClient(process.env.API_KEY);


const LoadImgBtn = document.querySelector('.loadImgBtn')
LoadImgBtn.addEventListener('click', loadImages)
const displayImg = document.querySelectorAll('svg')

const searchData = () => {
    fetch('`https://api.pexels.com/v1/search?query=your-query`')
    .then(response => response.json())
    .then(body => {
        console.log(body)
        alert('Succes!')
    })
}


loadImages = () => {

}