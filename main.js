document.addEventListener("DOMContentLoaded", function () {
    
    let flipSwitch = document.getElementById("fs");
    let images = document.querySelectorAll(".photo_container");


    flipSwitch.addEventListener("change", function () {
        if (flipSwitch.checked) {
            images.forEach(function (image) {
                image.style.filter = "grayscale(100%)";
            });
        } else {
            images.forEach(function (image) {
                image.style.filter = "none";
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {

    let flipSwitch = document.getElementById("fs");
    let photoContainer = document.querySelector(".photo_container");

    
    flipSwitch.addEventListener("change", function () {
        
        if (flipSwitch.checked) {  
            photoContainer.querySelectorAll(".image_container").forEach(function (imageContainer) {
                imageContainer.style.filter = "grayscale(100%)";
            });
        } else {
            photoContainer.querySelectorAll(".image_container").forEach(function (imageContainer) {
                imageContainer.style.filter = "none";
            });
        }
    });

    // Get the "More photos" button element
    let morePhotosButton = document.querySelector(".button1");

    // Add a click event listener to the "More photos" button
    morePhotosButton.addEventListener("click", function () {
        // Fetch and generate 4 more random photos at the bottom
        fetchPhotos();
    });

    // Get the button element for fetching new photos
    let fetchButton = document.querySelector(".button");

    // Add a click event listener to the fetchButton
    fetchButton.addEventListener("click", function () {
        // Clear existing photos
        photoContainer.innerHTML = "";

        // Fetch new photos from Picsum Photos API and generate 4 new photos
        fetchPhotos();
    });

    // Function to fetch and generate 4 new photos from Picsum Photos API
    function fetchPhotos() {
        // Generate 4 random photo URLs
        for (let i = 0; i < 4; i++) {
            let randomWidth = Math.floor(Math.random() * 800) + 200; // Random width between 200 and 1000
            let randomHeight = Math.floor(Math.random() * 800) + 200; // Random height between 200 and 1000
            let imgUrl = `https://picsum.photos/${randomWidth}/${randomHeight}`;
            let description = "Elvis Photos  https://picsum.photos/seed/picsum/200/300"; // You can customize the description

            // Create image container
            let imageContainer = document.createElement("div");
            imageContainer.className = "image_container";

            // Create image element
            let img = document.createElement("img");
            img.className = "pics";
            img.src = imgUrl;

            // Create description paragraph
            let descriptionParagraph = document.createElement("p");
            descriptionParagraph.className = "static_description";
            descriptionParagraph.textContent = description;

            // Append image and description to the container
            imageContainer.appendChild(img);
            imageContainer.appendChild(descriptionParagraph);

            // Append the image container to the photo container
            photoContainer.appendChild(imageContainer);
        }
    }
});
