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

    
    let morePhotosButton = document.querySelector(".button1");

    
    morePhotosButton.addEventListener("click", function () {
        fetchPhotos();
    });

    let fetchButton = document.querySelector(".button");

    fetchButton.addEventListener("click", function () {
        photoContainer.innerHTML = "";

        fetchPhotos();
    });

    function fetchPhotos() {
        for (let i = 0; i < 4; i++) {
            let randomWidth = Math.floor(Math.random() * 800) + 200; 
            let randomHeight = Math.floor(Math.random() * 800) + 200; 
            let imgUrl = `https://picsum.photos/${randomWidth}/${randomHeight}`;
            let description = "Elvis Photos  https://picsum.photos/seed/picsum/200/300"; 

            let imageContainer = document.createElement("div");
            imageContainer.className = "image_container";

            
            let img = document.createElement("img");
            img.className = "pics";
            img.src = imgUrl;

            let descriptionParagraph = document.createElement("p");
            descriptionParagraph.className = "static_description";
            descriptionParagraph.textContent = description;

            imageContainer.appendChild(img);
            imageContainer.appendChild(descriptionParagraph);

            photoContainer.appendChild(imageContainer);
        }
    }
});
