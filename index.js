import { createClient } from 'pexels';

const client = createClient('563492ad6f917000010000014b7b5c512f0348b299efc18f99f8af30');



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