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



function gettingItems() {
    let stringFavouriteJourneys = localStorage.getItem('journeys');

    let favouriteJourneys = JSON.parse(stringFavouriteJourneys);

    console.log(favouriteJourneys);
}

gettingItems();
