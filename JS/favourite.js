/* eslint-disable indent */
'use strict';

// let div = document.getElementById('imageContainer');
// console.log(typeof div);

// let stringDiv = JSON.stringify(div);
// console.log(stringDiv);


// let test = localStorage.setItem('div' , stringDiv);

// console.log(test);
// console.log(stringDiv);

// let stringParent = localStorage.getItem('div');
// console.log(stringParent);

// let parent = JSON.parse(stringParent);
// console.log(parent);


let favouriteJourneys=[];
function gettingItems() {
    let stringFavouriteJourneys = localStorage.getItem('favouriteJourneys');

     favouriteJourneys = JSON.parse(stringFavouriteJourneys);

    console.log(favouriteJourneys);
}

gettingItems();


let imageContainer=document.getElementById("imageContainer");

function renderImage() {

    
    for (let i = 0; i < favouriteJourneys.length; i++) {

        let image=document.createElement ('img');
        imageContainer.appendChild(image);
        image.setAttribute('src',favouriteJourneys[i].image);
        image.setAttribute('width','200px');
        console.log(image);
  
    }

    
}
renderImage();
