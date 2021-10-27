const hideCards = () => {
    const hideBtn = document.querySelectorAll('.hideBtn')
    hideBtn.forEach(btn => btn.addEventListener('click', (e) => {
    const parentCard = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
    parentCard.classList.add('d-none')
}))
}

const viewImage = () => {
    const viewImageBtn = document.querySelectorAll('.viewImage')
    viewImageBtn.forEach(btn => btn.addEventListener('click', (e) => {
        console.log(e)
        const imageId = e.target.parentElement.nextElementSibling.innerText
        const imageSrc = e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.src
        e.target.dataset.target = `#${imageId}`
        createModal(imageId, imageSrc)
}))
}

const createModal = (imageId, imageSrc) => {
    const modal=document.createElement('div')
    modal.innerHTML = `
    <div class="modal" id="${imageId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <img src=${imageSrc}>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        </div>
    </div>
    </div>`
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

const searchData = (query) => {
    fetch(`https://api.pexels.com/v1/search?query=${query}`, {
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
                <img src=${photo.src.large} class="card-img-top pexel-img img-fluid" alt="...">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div class="d-flex justify-content-between">
                        <div>
                            <button class="btn btn-primary viewImage" data-toggle="modal" data-target="#">View</button>
                            <button class="hideBtn btn btn-danger">Hide</button>
                        </div>
                        <p class="text-muted">${photo.id}</p>
                    </div>
                </div>
            </div>
        </div>`).join('')        
    })
    .then(viewImage)
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
    .catch(error => displayErrorMessage(error))
}

carouselImages()

const loadImgBtn = document.querySelector('.loadImgBtn')
loadImgBtn.addEventListener('click', () => {
    searchData('aniamls')
})

const loadSecondaryBtn = document.querySelector('.loadSecondaryBtn')
loadSecondaryBtn.addEventListener('click', () => {
    searchData('nature')
})

const search = document.querySelector('.searchBtn')
search.addEventListener('click', () => {
    const userInput = document.querySelector('.searchInput').value
    searchData(userInput)
})