
const searchData = () => {
    fetch(`https://api.pexels.com/v1/search?query=lights`, {
  headers: {
    Authorization: config.API_KEY
  }})
    .then(response => response.json())
    .then(body => {
            console.log(body.photos)
            const displayImgContainer = document.querySelector('.displayImgContainer')
            displaySuccessMessage(body.photos.length)
            displayImgContainer.innerHTML = body.photos.map((photo) =>
            `
            <div class="col-12 col-md-4">
                <div class="card">
                    <img src=${photo.src.small} class="card-img-top pexel-img img-fluid" alt="...">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-flex justify-content-between">
                            <button class="hideBtn btn btn-danger">Hide</button>
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                            View
                            </button>
                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel"></h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>
                                    <div class="modal-body">
                                    <img src=${photo.src.small} class="card-img-top pexel-img img-fluid" alt="...">
                                    </div>
                                    <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <p class="text-muted">${photo.id}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
            ).join('')
            
        })
    .then(hideCards)
    .catch(error => displayErrorMessage(error))
}

const hideCards = () => {
    const hideBtn = document.querySelectorAll('.hideBtn')
    hideBtn.forEach(btn => btn.addEventListener('click', (e) => {
    const parentCard = e.target.parentElement.parentElement.parentElement.parentElement
    parentCard.classList.add('d-none')
}))
}

const displayImgModal = () => {

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
        .catch(error => displayErrorMessage(error))
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
        .catch(error => displayErrorMessage(error))
    }
    
const hideCards3 = () => {
    const hideBtn = document.querySelectorAll('.hideBtn')
    hideBtn.forEach(btn => btn.addEventListener('click', (e) => {
    const parentCard = e.target.parentElement.parentElement.parentElement.parentElement
    parentCard.classList.add('d-none')
}))
}

//////Extras03

const loadImgBtn = document.querySelector('.loadImgBtn')
loadImgBtn.addEventListener('click', searchData)

const loadSecondaryBtn = document.querySelector('.loadSecondaryBtn')
loadSecondaryBtn.addEventListener('click', searchData2)

const search = document.querySelector('.searchBtn')

search.addEventListener('click', userSearch)

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
    }, 10000)
}

const carouselData = () => {
    fetch("https://api.pexels.com/v1/search?query=flowers", {
  headers: {
    Authorization: config.API_KEY
  }})
    .then(response => response.json())
    .then(body => {
            console.log(body.photos)
            const carouselContainer = document.querySelector('.carousel-inner')
            carouselContainer.innerHTML = body.photos.map((photo) =>
                `
                <div class="carousel-item">
                    <img src="${photo.src.small}" class="d-block w-100" style="height: 300px; object-fit: cover"alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                `
            ).join('')
            
        })
    .then(activateFirstSlide)
    .catch(error => displayErrorMessage(error))
}

const activateFirstSlide = () => {
    const slideToActivate = document.querySelector('.carousel-item:first-Child')
    slideToActivate.classList.add("active")
} 

window.onload = () => {
    carouselData()
};


