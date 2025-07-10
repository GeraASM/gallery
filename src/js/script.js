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
        informationPictures = data.slice();
        data.forEach((picture, index) => {
            const textContent = textsContent[index]
            if (!textContent) return; // Evita error si falta algún .gallery__texts 
            const namePicture = picture.name;
            const authorPicture = picture.artist.name;
            const nameShow = textContent.querySelector(".gallery__name");
            const authorShow = textContent.querySelector(".gallery__author");
            nameShow.textContent = namePicture;
            authorShow.textContent = authorPicture;
        });
    })
const galleryPictures = document.querySelectorAll('.gallery__redirection');
function showInformation(e) {
    const idPicture = e.currentTarget.querySelector('.gallery__picture').id;
    console.log(idPicture);
    const infoPicture = informationPictures.find(picture => picture.name === idPicture);
    console.log(infoPicture);
    localStorage.setItem("selectedPicture", JSON.stringify(infoPicture));
    localStorage.setItem("allPicture", JSON.stringify(informationPictures));
}


galleryPictures.forEach(picture => picture.addEventListener("click", showInformation));