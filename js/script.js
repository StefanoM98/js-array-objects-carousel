// CREIAMO L'ARREY DI IMMAGINI DA POI INSERIRE TRAMITE JS

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
console.log(images);
const itemsContainer = document.querySelector(".slider-items")
const thumbsContainer = document.querySelector(".thumbs")

let thumbsDivs;
 
for (let i = 0; i < images.length; i++) {
    const currentImg = images[i];

    const sliderItems = `
        <div class="item">
            <img class="main-image" src="${currentImg.image}" alt="">  
            <div class="text">
                <h2 class="title">${currentImg.title}</h2>
                <h4 class="subtitle">${currentImg.text}</h4>
            </div>    
        </div>
        `

    thumbsDivs = 
    `<div class="thumb" style ="height: calc(100% / 5)">
        <img src="${currentImg.image}" >
     </div>`
     
    itemsContainer.innerHTML += sliderItems;
    thumbsContainer.innerHTML += thumbsDivs;
}
const mainTitle = document.querySelector(".title");
const mainSubTitle = document.querySelector(".subtitle");
const mainImg = document.querySelector(".main-image");

// STAMPO LA PRIMA IMMAGINE
const itemsArrey = document.getElementsByClassName("item")
console.log(itemsArrey);

let showItemInIndex = 0;
itemsArrey[showItemInIndex].classList.add("active")

// ATTIVIAMO I BOTTONI IN MODO DA CAMBIARE IMG AL CLICK
const nextImg = document.querySelector(".next")
const prevImg = document.querySelector (".prev")

// GESTIAMO IL BOTTONE NEXT
nextImg.addEventListener("click", function(){
    nextImage();
    clearInterval(autoplayInteval);
    autoplayInteval = setInterval(nextImage, 3000);
});
autoplayInteval = setInterval(nextImage, 3000);

// GESTIAMO IL BOTTONE PREVIOUS

prevImg.addEventListener("click", function() {
    prevImage();
    clearInterval(autoplayInteval);
    autoplayInteval = setInterval(nextImage, 3000)
});

// FUNZIONE PER L'IMMAGINE SUCCESSIVA
function nextImage() {
    // FACCIAMO SCORRERE LE IMMAGINI
    itemsArrey[showItemInIndex].classList.remove("active");   
    if (showItemInIndex < images.length - 1) {
        showItemInIndex++;
    } else {
        showItemInIndex = 0;
    }
    itemsArrey[showItemInIndex].classList.add("active");
}

function prevImage() {
    itemsArrey[showItemInIndex].classList.remove("active");
    if (showItemInIndex === 0){
        showItemInIndex = images.length -1;
    } else{
        showItemInIndex--;
    }
    itemsArrey[showItemInIndex].classList.add("active");
}

// BLOCCO DEL CAROSELLO IN HOVER

itemsContainer.addEventListener("mouseover", function(){
    clearInterval(autoplayInteval);
});

itemsContainer.addEventListener("mouseout", function(){
    aulayInteval = setInterval(nextImage, 3000);
});

// CLICK SULLE THUMBS
const thumbsclick = document.querySelectorAll(".thumb")
console.log(thumbsclick);
for(let i = 0; i < thumbsclick.length; i++) {
    const currentThumb = thumbsclick[i]
    currentThumb.addEventListener("click", function(){
        const currentImg = images[i]

        mainImg.src = currentImg.image;
        mainTitle.innerHTML = currentImg.title;
        mainSubTitle.innerHTML = currentImg.text;
    })
}
