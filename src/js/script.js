const textsContent = document.querySelectorAll('.gallery__texts');
let informationPictures;
fetch('./data.json')
    .then(response => {
        if (response.ok) {
            console.log('Is correct!');
        }
        return response.json();
    })
    .then(data => {
        informationPictures = data;
        data.forEach((picture, index) => {
            const textContent = textsContent[index]
            const namePicture = picture.name;
            const authorPicture = picture.artist.name;
            const nameShow = textContent.querySelector(".gallery__name");
            const authorShow = textContent.querySelector(".gallery__author");
            nameShow.textContent = namePicture;
            authorShow.textContent = authorPicture;
        });
    })