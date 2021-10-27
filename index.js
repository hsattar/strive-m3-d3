
const searchData = () => {
    fetch("https://api.pexels.com/v1/search?query=people", {
  headers: {
    Authorization: config.API_KEY
  }})
    .then(response => response.json())
    .then(body => {
            console.log(body.photos)
            const displayImgContainer = document.querySelector('.displayImgContainer')
            displayImgContainer.innerHTML = 
            
            body.photos.map((photo) =>
                `
            <div class="col-12 col-md-4">
                <div class="card">
                    <img src=${photo.src.small} class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button class="hideBtn btn btn-danger">Hide</button>
                    </div>
                </div>
            </div>
            `
            ).join('')
        })
    .then(hideCards)
    .catch(error => console.error(error))
}
const hideCards = () => {
    const hideBtn = document.querySelectorAll('.hideBtn')
console.log(hideBtn)
hideBtn.forEach(btn => btn.addEventListener('click', (e) => {
    const parentCard = e.target.parentElement.parentElement.parentElement
    parentCard.classList.add('d-none')
}))
}



const searchData2 = () => {
    fetch("https://api.pexels.com/v1/search?query=nature", {
  headers: {
    Authorization: config.API_KEY
  }})
    .then(response => response.json())
    .then(body => {
            console.log(body.photos)
            const displayImgContainer = document.querySelector('.displayImgContainer')
            displayImgContainer.innerHTML = 
            
            body.photos.map((photo) =>
            `
            <div class="col-12 col-md-4">
                <div class="card">
                    <img src=${photo.src.small} class="card-img-top pexel-img img-fluid" alt="...">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button class="btn btn-danger">Hide</button>
                    </div>
                </div>
            </div>
            `
            ).join('')
        })
    .catch(error => console.error(error))
}


const loadImgBtn = document.querySelector('.loadImgBtn')
loadImgBtn.addEventListener('click', searchData)

const loadSecondaryBtn = document.querySelector('.loadSecondaryBtn')
loadSecondaryBtn.addEventListener('click', searchData2)
