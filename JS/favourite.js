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

imageContainer.addEventListener('click',hello)


let imageSet ,imageSet2;

// console.log(favouriteJourneys);


// imageSet.addEventListener('click',hello);

for (let i = 0; i < favouriteJourneys.length; i++) {
    imageSet2=document.getElementById(favouriteJourneys[i].name)
    // console.log(favouriteJourneys[i].name);
    // console.log("hello ",imageSet);
   
}

  
if (imageSet2 !== null) {
    imageSet2.addEventListener('click',hello);
}

function hello (event) {
    imageSet=event.target;
    console.log(imageSet)
}


function renderImage() {

    
    for (let i = 0; i < favouriteJourneys.length; i++) {
        let image=document.createElement ('img');

        imageContainer.appendChild(image);
        image.setAttribute('src',favouriteJourneys[i].image);
        image.setAttribute('width','200px');
        image.setAttribute('id',favouriteJourneys[i].name)
        console.log(image);
  
    }

    
}
renderImage();









// var p = {
//     "p1": "value1",
//     "p2": "value2",
//     "p3": "value3"
// };

// for (var key in p) {
//     if (p.hasOwnProperty(key)) {
//         console.log(key + " -> " + p[key]);
//     }
// }






function renderResult() {
    
 
    
}