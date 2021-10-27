
      PICTURE GALLERY EXERCISE

      FIRST STEPS:

        - Download the bootstrap layout from this page
        - Create an account on pexels to retrieve your API key: [https://www.pexels.com/api/new/](https://www.pexels.com/api/new/)
        You can find the API key by clicking on your profile picture and then on `Image and video API.`
        - The key needs to go into the **headers** of yout HTTP request, using the `Authorization` property:

        {Authorization: "YOUR API KEY"}

        This should be enough to make your GET request successful. 

    **API Docs (more info on the API key and how to place it):**

        `https://www.pexels.com/api/documentation/?language=javascript#authorization`

    ⚠️HINTS!⚠️

        1. You can replace the images src for making your pictures appear on button click or you can use template literals to re-create all the cards from scratch.
        2. Use arrow functions to practice them!

    💻EXERCISES:

        Starting from the bootstrap layout, work in pair with your teammate to solve as many exercises as possible.
        **Remember!** Practice is key, so switch between navigating and coding each exercise!
        Docs for the search endpoint: `https://www.pexels.com/api/documentation/?language=javascript#photos-search`

        1. When pressing the **Load images** button, load the pictures from 
        `https://api.pexels.com/v1/search?query=your-query` and display them on your template.
        2. When pressing the **Load secondary Images** button, load the pictures from `[https://api.pexels.com/v1/search?query=your-secondary-query](https://api.pexels.com/v1/search?query=your-secondary-query)` and display them on your template.
        3. Replace the **Edit** buttons on the cards with a **Hide** button. 
        4. When pressed, this button should make the whole card disappear. 
        5. Replace the **9 mins** string in the cards with the ID of the image
        6. Add in the "jumbotron" a search input field. Use the value of this input to search and load new images and replace existing ones. You may add a third button for this exercise. 

    💻EXTRAS:

        1. After every button is pressed, display an alert that lasts 5 second showing the result of the operation (ex. "20 images loaded")
        2. Handle API errors gracefully, using **alert components** with a custom message inside. 
        3. Add a carousel at the bottom of the page with images from another API call. 
        4.  When the user clicks on the **view** button inside a card, open that image in a modal

    💻MORE EXTRAS:

        1. Use the `.map` method to create, from your API response, an array containing just the url strings. 
        2. Use the `.filter` method to modify the result of the API call. Keep only the images from a specific author or your chosen.
     