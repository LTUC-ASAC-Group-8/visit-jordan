/* eslint-disable indent */


let tripsArray = [];
let favouritesArray = [];

function Trip(name, description, image, video) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.video = video;
    tripsArray.push(this);
}

let amman = new Trip('Amman', 'hello to amman', 'img/859669.jpg' ,'www.youtube.com/watch?v=NIhbo1ymNEQ');
new Trip('aqaba', 'hello from aqaba', 'img/jo2.jpg','www.youtube.com/watch?v=TxzHbTTpSKA');

let favourite1 = document.getElementById('container');
console.log(favourite1);

console.log(amman);
// Render


// render();

Trip.prototype.render = function () {

    
    let newImage = document.createElement('img');
    newImage.setAttribute('src', this.image);
    newImage.setAttribute('id',this.name);

    favourite1.appendChild(newImage);

console.log(newImage);
    let button = document.createElement('button');
    button.textContent = 'submit';
    favourite1.appendChild(button);

    button.addEventListener('click', submitter);

    // articles must be added and all informations

    // submitter
    let object = this;

    function submitter() {
        favouritesArray.push(object);
        console.log(favouritesArray);
        settingItem();
    }
};





for (let i = 0; i < tripsArray.length; i++) {

    tripsArray[i].render();
    console.log(tripsArray);
}

function settingItem() {
    let stringArray = JSON.stringify(favouritesArray);
    localStorage.setItem('favouriteJourneys', stringArray);
}


function gettingItem() {
    let stringArray = localStorage.getItem('favouriteJourneys');
    let dataArray = JSON.parse(stringArray);

    console.log(dataArray);
    if (dataArray !== null) {
        tripsArray = [];
        for (let i = 0; i < dataArray.length; i++) {
            new Trip(dataArray[i].name, dataArray[i].description, dataArray[i].image , dataArray[i].video )

        }
        console.log(tripsArray);
        for (let i = 0; i < tripsArray.length; i++) {

            tripsArray[i].render();
        }
    }


}


gettingItem();