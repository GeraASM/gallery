let allData, numberPictures, indexStart, count;
const image = document.getElementById("image");
const viewClick = document.getElementById("view");
const overImg = document.getElementById("overImg");
const imageBackground = overImg.querySelector(".information__img");
const title = document.getElementById("title");
const author = document.getElementById("author");
const authorImg = document.getElementById("authorImg");
const year = document.getElementById("year");
const information = document.getElementById("information");
const titleFooter = document.getElementById("nameFooter");
const authorFooter = document.getElementById("authorFooter");
const back = document.getElementById("back");
const next = document.getElementById("next");
const carruselOptions = document.querySelectorAll(".carrusel__option");
const close = document.getElementById('close');

viewClick.addEventListener("click", () => {
    overImg.style.opacity = '1';
})

close.addEventListener("click", () => {
    overImg.style.opacity = '0';
})


function showData(data) {
    image.alt = data.name;
    image.src = window.innerWidth >= 1024 ? data.images.hero.large : data.images.hero.small;
    imageBackground.src = window.innerWidth >= 1024 ? data.images.hero.large : data.images.hero.small;
    imageBackground.alt = data.name;
    title.textContent = data.name;
    titleFooter.textContent = data.name;
    author.textContent = data.artist.name;
    authorFooter.textContent = data.artist.name;
    authorImg.src = data.artist.image;
    authorImg.alt = data.artist.name;
    year.textContent = data.year;
    information.textContent = data.description;
}

window.addEventListener('DOMContentLoaded', () => {
    const dataInfo = JSON.parse(localStorage.getItem('selectedPicture'));
    allData = JSON.parse(localStorage.getItem("allPicture"));
    numberPictures = allData.length;
    indexStart = allData.findIndex(dta => dta.name === dataInfo.name);
    showData(dataInfo);
    count = parseInt(indexStart);
    if (0 < count < numberPictures) {
        back.classList.remove("carrusel__arrow--deactive");
    } else if (count === numberPictures - 1) {
        next.classList.add("carrusel__arrow--deactive");
        
    }
    if (carruselOptions[count]) {
        removeOptions();
        carruselOptions[count].classList.add("carrusel__option--active");
    }
});

function countBack(e) {
    count--;
    console.log(count);
    if (carruselOptions[count]) {
        removeOptions();
        carruselOptions[count].classList.add("carrusel__option--active");
    }
    if (next.classList.contains("carrusel__arrow--deactive")) next.classList.remove("carrusel__arrow--deactive");
    if (count <= 0) {
        e.currentTarget.classList.add('carrusel__arrow--deactive');
        count = 0;
        showArrow(count);
        return
    } 
    showArrow(count);
}

function countNext(e) {
    count++;
    if (carruselOptions[count]) {
        removeOptions();
        carruselOptions[count].classList.add("carrusel__option--active");
    }
    if (back.classList.contains("carrusel__arrow--deactive")) back.classList.remove("carrusel__arrow--deactive");
    if (count >= numberPictures - 1) {
        e.currentTarget.classList.add('carrusel__arrow--deactive');
        count = numberPictures - 1;
        showArrow(count);
        return
    }
    showArrow(count);
    console.log(count);
}

function showArrow(c) {
    showData(allData[c]);
}

function removeOptions() {
    carruselOptions.forEach(option => option.classList.remove("carrusel__option--active"));
}

back.addEventListener("click", countBack);
next.addEventListener("click", countNext);