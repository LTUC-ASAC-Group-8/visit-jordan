/* eslint-disable no-inner-declarations */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
'use strict';




let favouriteJourneys = [];
function gettingItems() {
    let stringFavouriteJourneys = localStorage.getItem('favouriteJourneys');
    favouriteJourneys = JSON.parse(stringFavouriteJourneys);
    // console.log(favouriteJourneys);
}

gettingItems();




if (favouriteJourneys !== null) {
    let imageContainer = document.getElementById('imageContainer');

    function renderFavouriteImages() {
        for (let i = 0; i < favouriteJourneys.length; i++) {

            let image = document.createElement('img');
            imageContainer.appendChild(image);

            image.setAttribute('src', favouriteJourneys[i].image);
            image.setAttribute('width', '200px');
            image.setAttribute('id', favouriteJourneys[i].name);
            // console.log(image);
        }
    }
    renderFavouriteImages();




    let imageSet;
    console.log(favouriteJourneys);

    for (let i = 0; i < favouriteJourneys.length; i++) {
        imageSet = document.getElementById(favouriteJourneys[i].name);
        // console.log(favouriteJourneys[i].name);
        console.log("hello ", imageSet);
    }


    imageContainer.addEventListener('click', divClicking);

    function divClicking(event) {
        imageSet = event.target;
        console.log('Hey ', event.target.name);


        let parent = document.getElementById('detailsContainer');
        let title = document.createElement('h2');
        let video = document.createElement('video');
        let paragraph = document.createElement('p');

        parent.appendChild(title);
        parent.appendChild(video);
        parent.appendChild(paragraph);
        // console.log(parent);


        // console.log(imageSet.id);
        // console.log(favouriteJourneys[0].name);
        for (let i = 0; i < favouriteJourneys.length; i++) {
            if (imageSet.id === favouriteJourneys[i].name) {
                title.textContent=(favouriteJourneys[i].name);
                video.setAttribute('src',favouriteJourneys[i].video);
                paragraph.textContent=(favouriteJourneys[i].description);
            }

        }



    }


    function renderDetails() {
        //     let parent = document.getElementById('detailsContainer');
        //     let title = document.createElement('h2');
        //     let video = document.createElement('video');
        //     let paragraph = document.createElement('p');

        //     parent.appendChild(title);
        //     parent.appendChild(video);
        //     parent.appendChild(paragraph);
        //     // console.log(parent);


        //     title.textContent=();

        // }
        // renderDetails();
    }
} else {
    let parent = document.getElementById('link');
    let link = document.createElement('a');
    parent.appendChild(link);
    link.textContent = ('Hello Empty');
    link.setAttribute('href', 'DiscoverJordanPlaces.html');
}










// imageContainer.addEventListener('click', hello);

// let imageSet, imageSet2;

// // console.log(favouriteJourneys);

// // imageSet.addEventListener('click',hello);

// for (let i = 0; i < favouriteJourneys.length; i++) {
//     imageSet2 = document.getElementById(favouriteJourneys[i].name);
//     // console.log(favouriteJourneys[i].name);
//     // console.log("hello ",imageSet);
// }


// if (imageSet2 !== null) {
//     imageSet2.addEventListener('click', hello);
// }

// function hello(event) {
//     imageSet = event.target;
//     console.log(imageSet);
// }

