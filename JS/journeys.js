/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */


let tripsArray = [];
let favouritesArray = [];

// console.log(favouritesArray);

function Trip(name, description, image, video) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.video = video;
    tripsArray.push(this);

}

new Trip('Amman', 'hello to amman', 'img/859669.jpg', 'https://www.youtube.com/watch?v=ZJ6fQhE4pcY');
new Trip('aqaba', 'hello from aqaba', 'img/jo2.jpg', 'www.youtube.com/watch?v=TxzHbTTpSKA');

let favourite1 = document.getElementById('container');
// console.log(favourite1);






// Render
Trip.prototype.render = function () {


    let newImage = document.createElement('img');
    newImage.setAttribute('src', this.image);
    newImage.setAttribute('id', this.name);
    favourite1.appendChild(newImage);
    // console.log(newImage);


    let button = document.createElement('button');
    button.textContent = 'Add to Favourite';
    favourite1.appendChild(button);

    button.addEventListener('click', submitter);

    // articles must be added and all informations

    // submitter
    let object = this;
    // console.log(object);

    let stringObject = JSON.stringify(object);

    object = JSON.parse(stringObject);

    // console.log(object);

    console.log(favouritesArray);
    function submitter() {

        console.log(favouritesArray);

        console.log('Why always true? ',!(favouritesArray.includes(object)));

        if (!(favouritesArray.includes(object))) {

            favouritesArray.push(object);

            // console.log('hello inside if');
            settingItem();
        }
        console.log(favouritesArray);

    }
    // button.removeEventListener('click', submitter);
};


for (let i = 0; i < tripsArray.length; i++) {

    tripsArray[i].render();
    // console.log(tripsArray);
}




function settingItem() {
    let stringArray = JSON.stringify(favouritesArray);
    localStorage.setItem('favouriteJourneys', stringArray);
}


function gettingItem() {
    let stringTripsArray = localStorage.getItem('favouriteJourneys');
    let dataArray = JSON.parse(stringTripsArray);



    // console.log(dataArray);
    if (dataArray !== null) {
        tripsArray = [];
        for (let i = 0; i < dataArray.length; i++) {
            new Trip(dataArray[i].name, dataArray[i].description, dataArray[i].image, dataArray[i].video);
        }
        // console.log(tripsArray);
        favouritesArray = [];
        favouritesArray = dataArray;
        // console.log(favouritesArray);
    }

}


gettingItem();




// console.log(favouritesArray);

