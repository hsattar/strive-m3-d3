const hideCards = () => {
    const hideBtn = document.querySelectorAll('.hideBtn')
    hideBtn.forEach(btn => btn.addEventListener('click', (e) => {
    const parentCard = e.target.parentElement.parentElement.parentElement.parentElement
    parentCard.classList.add('d-none')
}))
}

const displaySuccessMessage = (numberOfImages) => {
    const successAlert = document.querySelector('.alert-success')
    successAlert.classList.remove('d-none')
    successAlert.innerText = `${numberOfImages} Images Have Loaded`
    setTimeout(() => {
        successAlert.classList.add('d-none')
    }, 5000)
}

const displayErrorMessage = (error) => {
    const errorAlert = document.querySelector('.alert-danger')
    errorAlert.classList.remove('d-none')
    errorAlert.innerText = `${error}`
    setTimeout(() => {
        errorAlert.classList.add('d-none')
    }, 5000)
}

showFirstCarousel = () => {
    const firstCarouselImage = document.querySelector('.carousel-item')
    firstCarouselImage.classList.add('active')
}

const searchData = () => {
    fetch(`https://api.pexels.com/v1/search?query=people`, {
    headers: {
        Authorization: config.API_KEY
    }})
    .then(response => response.json())
    .then(body => {
        const displayImgContainer = document.querySelector('.displayImgContainer')
        displaySuccessMessage(body.photos.length)
        displayImgContainer.innerHTML = 
        body.photos.map(photo =>`
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
        </div>`).join('')        
    })
.then(hideCards)
.catch(error => displayErrorMessage(error))
}

const searchData2 = () => {
    fetch("https://api.pexels.com/v1/search?query=nature", {
    headers: {
        Authorization: config.API_KEY
    }})
    .then(response => response.json())
    .then(body => {
        const displayImgContainer = document.querySelector('.displayImgContainer')
        displaySuccessMessage(body.photos.length)
        displayImgContainer.innerHTML = 
        body.photos.map(photo =>`
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
        </div>`).join('')
    })
    .then(hideCards)
    .catch(error => displayErrorMessage(error))
}
    

const userSearch = () => {
    const userInput = document.querySelector('.searchInput')
    fetch(`https://api.pexels.com/v1/search?query=${userInput.value}`, {
    headers: {
        Authorization: config.API_KEY
    }})
    .then(response => response.json())
    .then(body => {
        const displayImgContainer = document.querySelector('.displayImgContainer')
        console.log(body.photo)
        displaySuccessMessage(body.photos.length)
        displayImgContainer.innerHTML = 
        body.photos.map(photo =>`
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
        `).join('')
    })
    .then(hideCards)
    .catch(error => displayErrorMessage(error))
}

const carouselImages = () => {
    fetch(`https://api.pexels.com/v1/search?query=house&per_page=3`, {
    headers: {
        Authorization: config.API_KEY
    }})
    .then(response => response.json())
    .then(body => {
        const carouselContainer = document.querySelector('.carousel-inner')
        displaySuccessMessage(body.photos.length)
        carouselContainer.innerHTML = 
        body.photos.map(photo =>`
        <div class="carousel-item">
            <img src=${photo.src.large} class="d-block carousel-image w-100" alt="...">
        </div>
        `).join('')
    })
    .then(showFirstCarousel)
    .then(hideCards)
    .catch(error => displayErrorMessage(error))
}

carouselImages()

const loadImgBtn = document.querySelector('.loadImgBtn')
loadImgBtn.addEventListener('click', searchData)

const loadSecondaryBtn = document.querySelector('.loadSecondaryBtn')
loadSecondaryBtn.addEventListener('click', searchData2)

const search = document.querySelector('.searchBtn')

search.addEventListener('click', userSearch)