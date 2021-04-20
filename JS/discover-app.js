/* eslint-disable no-trailing-spaces */
/* eslint-disable no-var */
/* eslint-disable no-inner-declarations */
'use strict';


let allPackages = [];

// console.log('localStorage',localStorage.length);

// if (localStorage.length===0) {
// }

var bookedPackages = [];

//create html structure(packages) by constructor

function Package(name, description, price, img1, img2, img3, img4) {
  this.name = name,
    this.description = description,
    this.price = price,
    this.img1 = img1,
    this.img2 = img2,
    this.img3 = img3,
    this.img4 = img4,

    allPackages.push(this);
}

//create instances
let pacakge1 = new Package('test package1 ttrip to aqaba ', 'heloo from test package', '1200', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250');

let pacakge2 = new Package('test package2', 'heloo from test package2', '500', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250');

let pacakge3 = new Package('test pacakge3', 'heloo from test pacakge3', '500', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250');

let pacakge4 = new Package('test pacakge4', 'heloo from test pacakge4', '500', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250');

let pacakge5 = new Package('test pacakge5', 'heloo from test pacakge5', '500', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250');

let pacakge6 = new Package('test pacakge6', 'heloo from test pacakge6', '500', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250');

let pacakge7 = new Package('test pacakge7', 'heloo from test pacakge7', '500', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250');

let pacakge8 = new Package('test pacakge8', 'heloo from test pacakge8', '500', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250');

let pacakge9 = new Package('test pacakge9', 'heloo from test pacakge9', '500', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250');



let container = document.getElementById('parent-container');

Package.prototype.renderContent = function () {

  //main section
  let bigSection = document.createElement('section');
  container.appendChild(bigSection);
  bigSection.setAttribute('class', 'bigSection');

  //booking package
  let bookingContent = document.createElement('div');
  bigSection.appendChild(bookingContent);
  bookingContent.setAttribute('class', 'bookingContent');

  //first slide
  let firstSlide = document.createElement('div');
  bookingContent.appendChild(firstSlide);
  firstSlide.setAttribute('class', 'slides');

  //image
  let firstImage = document.createElement('img');
  firstSlide.appendChild(firstImage);
  firstImage.setAttribute('class', 'package-img');
  firstImage.setAttribute('src', this.img1);

  //img number
  let imgNumber1 = document.createElement('div');
  firstSlide.appendChild(imgNumber1);
  imgNumber1.setAttribute('class', 'imgNumber');
  imgNumber1.textContent = "1/3";

  //second slide
  let secondSlide = document.createElement('div');
  bookingContent.appendChild(secondSlide);
  secondSlide.setAttribute('class', 'slides');

  //image
  let secondImage = document.createElement('img');
  secondSlide.appendChild(secondImage);
  secondImage.setAttribute('class', 'package-img');
  secondImage.setAttribute('src', this.img2);

  //img number
  let imgNumber2 = document.createElement('div');
  secondSlide.appendChild(imgNumber2);
  imgNumber2.setAttribute('class', 'imgNumber');
  imgNumber2.textContent = "2/3";

  //third slide
  let thirdSlide = document.createElement('div');
  bookingContent.appendChild(thirdSlide);
  thirdSlide.setAttribute('class', 'slides');

  //image
  let thirdImage = document.createElement('img');
  thirdSlide.appendChild(thirdImage);
  thirdImage.setAttribute('class', 'package-img');
  thirdImage.setAttribute('src', this.img3);

  //img number
  let imgNumber3 = document.createElement('div');
  thirdSlide.appendChild(imgNumber3);
  imgNumber3.setAttribute('class', 'imgNumber');
  imgNumber3.textContent = "3/3";

  //fourth slide
  let fourthSlide = document.createElement('div');
  bookingContent.appendChild(fourthSlide);
  fourthSlide.setAttribute('class', 'slides4');

  //image
  let fourthImage = document.createElement('img');
  fourthSlide.appendChild(fourthImage);
  fourthImage.setAttribute('class', 'package-img');
  fourthImage.setAttribute('src', this.img4);

  //img number
  let imgNumber4 = document.createElement('div');
  fourthSlide.appendChild(imgNumber4);
  imgNumber4.setAttribute('class', 'imgNumber');

  //create dots container
  let dotContainer = document.createElement('div');
  bookingContent.appendChild(dotContainer);
  dotContainer.setAttribute('style', 'text-align:center');
  dotContainer.setAttribute('class', 'dotContainer');

  //create first dot by span
  let dotElement1 = document.createElement('span');
  dotContainer.appendChild(dotElement1);
  dotElement1.setAttribute('class', 'dotElement');

  //create second dot by span
  let dotElement2 = document.createElement('span');
  dotContainer.appendChild(dotElement2);
  dotElement2.setAttribute('class', 'dotElement');

  //create third dot by span
  let dotElement3 = document.createElement('span');
  dotContainer.appendChild(dotElement3);
  dotElement3.setAttribute('class', 'dotElement');


  //add package name
  let packageName = document.createElement('h3');
  bookingContent.appendChild(packageName);
  packageName.textContent = this.name;
  packageName.setAttribute('class', 'packageName');

  //add package price
  let packagePrice = document.createElement('h4');
  bookingContent.appendChild(packagePrice);
  packagePrice.textContent = `Price : ${this.price} $`;
  packagePrice.setAttribute('class', 'packagePrice');


  //create Description button
  let readMoreButton = document.createElement('input');
  bookingContent.appendChild(readMoreButton);
  readMoreButton.setAttribute('class', 'Description');
  readMoreButton.setAttribute('type', 'button');
  readMoreButton.setAttribute('value', 'Description');

  //create booking button
  let bookingButton = document.createElement('input');
  bookingContent.appendChild(bookingButton);
  bookingButton.setAttribute('class', 'bookingButton');
  bookingButton.setAttribute('type', 'button');
  bookingButton.setAttribute('value', 'book');

  //create Description model box
  let modelBoxcont = document.createElement('div')
  bookingContent.appendChild(modelBoxcont);
  modelBoxcont.setAttribute('class', 'modelBoxcont');

  //create Description model div
  let modelBoxdiv2 = document.createElement('div')
  modelBoxcont.appendChild(modelBoxdiv2);
  modelBoxdiv2.setAttribute('class', 'modelBoxdiv2');


  //create Description span
  let modelBoxSpan = document.createElement('span');
  modelBoxdiv2.appendChild(modelBoxSpan);
  modelBoxSpan.setAttribute('class', 'modelBoxSpan');
  modelBoxSpan.textContent = "x";

  //create description content
  let descriptionContent = document.createElement('p');
  modelBoxdiv2.appendChild(descriptionContent);
  descriptionContent.textContent = this.description;

  // add event for Description button

  // When the user clicks on the button, open the modal
  readMoreButton.onclick = function () {
    modelBoxcont.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  modelBoxSpan.onclick = function () {
    modelBoxcont.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modelBoxcont) {
      modelBoxcont.style.display = "none";
    }

  }

  //addeventlistner for book button
  let object = this;
  bookingButton.addEventListener('click', savingBookedPackages);
  function savingBookedPackages() {

    console.log('bookedPackages before if', bookedPackages);
    if (!(bookedPackages.includes(object))) {


      bookedPackages.push(object);
      console.log('bookedPackages after if', bookedPackages.includes(object));
      settingData();
    }
  }

}

for (let i = 0; i < allPackages.length; i++) {
  allPackages[i].renderContent();
}



function settingData() {

  let bookedArrayString = JSON.stringify(bookedPackages);
  localStorage.setItem('bookedPackage', bookedArrayString);

}

gettingData();



function gettingData() {

  let bookedData = localStorage.getItem('bookedPackage');
  let bookedArrayParse = JSON.parse(bookedData);
  console.log('bookedArrayString', bookedArrayParse);

  if (bookedArrayParse !== null) {

    //updating value of bookedPackages

    // reinstaniation  the prototypes
    for (let i = 0; i < bookedArrayParse.length; i++) {
      new Package(bookedArrayParse[i].name, bookedArrayParse[i].description, bookedArrayParse[i].price, bookedArrayParse[i].img1, bookedArrayParse[i].img2, bookedArrayParse[i].img3);
      console.log('all packeages after new', bookedArrayParse);

    }
    bookedPackages = bookedArrayParse;
  }
}



// run the automatic slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('slides');
  let dots = document.getElementsByClassName('dotElement');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



