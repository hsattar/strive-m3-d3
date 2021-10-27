
const searchData = () => {
    fetch(`https://api.pexels.com/v1/search?query=people`, {
  headers: {
    Authorization: config.API_KEY
  }})
    .then(response => response.json())
    .then(body => {
            console.log(body.photos)
            const displayImgContainer = document.querySelector('.displayImgContainer')
            displaySuccessMessage(body.photos.length)
            displayImgContainer.innerHTML = 
            
            body.photos.map((photo) =>
                `
            <div class="col-12 col-md-4">
                <div class="card">
                    <img src=${photo.src.small} class="card-img-top pexel-img img-fluid" alt="...">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-flex justify-content-between">
                            <button class="hideBtn btn btn-danger">Hide</button>
                            <p class="text-muted">${photo.id}</p>
                        </div>
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
    hideBtn.forEach(btn => btn.addEventListener('click', (e) => {
    const parentCard = e.target.parentElement.parentElement.parentElement.parentElement
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
            displaySuccessMessage(body.photos.length)
            displayImgContainer.innerHTML = 
            
            body.photos.map((photo) =>
            `
            <div class="col-12 col-md-4">
                <div class="card">
                    <img src=${photo.src.small} class="card-img-top pexel-img img-fluid" alt="...">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-flex justify-content-between">
                            <button class="hideBtn btn btn-danger">Hide</button>
                            <p class="text-muted">${photo.id}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
            ).join('')
        })
        .then(hideCards2)
        .catch(error => console.error(error))
    }
    
const hideCards2 = () => {
    const hideBtn = document.querySelectorAll('.hideBtn')
    hideBtn.forEach(btn => btn.addEventListener('click', (e) => {
    const parentCard = e.target.parentElement.parentElement.parentElement.parentElement
    parentCard.classList.add('d-none')
}))
}

const userSearch = () => {
    const userInput = document.querySelector('.searchInput')
    fetch(`https://api.pexels.com/v1/search?query=${userInput.value}`, {
  headers: {
    Authorization: config.API_KEY
  }})
    .then(response => response.json())
    .then(body => {
            console.log(body.photos)
            const displayImgContainer = document.querySelector('.displayImgContainer')
            displaySuccessMessage(body.photos.length)
            displayImgContainer.innerHTML = 
            
            body.photos.map((photo) =>
            `
            <div class="col-12 col-md-4">
                <div class="card">
                    <img src=${photo.src.small} class="card-img-top pexel-img img-fluid" alt="...">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-flex justify-content-between">
                            <button class="hideBtn btn btn-danger">Hide</button>
                            <p class="text-muted">${photo.id}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
            ).join('')
        })
        .then(hideCards3)
        .catch(error => console.error(error))
    }
    
const hideCards3 = () => {
    const hideBtn = document.querySelectorAll('.hideBtn')
    hideBtn.forEach(btn => btn.addEventListener('click', (e) => {
    const parentCard = e.target.parentElement.parentElement.parentElement.parentElement
    parentCard.classList.add('d-none')
}))
}


const loadImgBtn = document.querySelector('.loadImgBtn')
loadImgBtn.addEventListener('click', searchData)

const loadSecondaryBtn = document.querySelector('.loadSecondaryBtn')
loadSecondaryBtn.addEventListener('click', searchData2)

const search = document.querySelector('.searchBtn')

search.addEventListener('click', userSearch)

const displaySuccessMessage = (numberOfImages) => {
    const successAlert = document.querySelector('.alert-success')
    successAlert.classList.remove('d-none')
    successAlert.innerHTML = `<p>${numberOfImages} Images Have Loaded</p>`
    setTimeout(() => {
        successAlert.classList.add('d-none')
    }, 5000)
}
