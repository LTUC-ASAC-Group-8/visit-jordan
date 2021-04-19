/* eslint-disable no-inner-declarations */
'use strict';
//run the automatic slideshow
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName('slides');
//   let dots = document.getElementsByClassName('dot');
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) { slideIndex = 1; }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' active', '');
//   }
//   slides[slideIndex - 1].style.display = 'block';
//   dots[slideIndex - 1].className += ' active';
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }


//create html structure(packages) by constructor

let allPackages = [];
let x = 0;
let bookedPackages = [];

function Package(name, description, price, img1, img2, img3) {
  this.name = name,
    this.description = description,
    this.price = price,
    this.img1 = img1,
    this.img2 = img2,
    this.img3 = img3,

    allPackages.push(this);
}

//create instances
let pacakge1 = new Package('test package', 'heloo from test package', '1200', 'https://via.placeholder.com/200x70/sss', 'https://via.placeholder.com/150x70/sss', 'https://via.placeholder.com/200x70/sss');


let container = document.getElementById('parent-container');

Package.prototype.renderContent = function () {


  //main section
  let bigSection = document.createElement('section');
  container.appendChild(bigSection);
  bigSection.setAttribute('class', 'first-row');
  //booking package
  let bookingContent = document.createElement('div');
  bigSection.appendChild(bookingContent);
  bookingContent.setAttribute('class', 'bookingContent');


  //first slide
  let firstSlide = document.createElement('div');
  bookingContent.appendChild(firstSlide);
  firstSlide.setAttribute('class', 'Slides');
  //img number
  let imgNumber1 = document.createElement('div');
  firstSlide.appendChild(imgNumber1);
  imgNumber1.setAttribute('class', 'imgNumber');

  //image
  let firstImage = document.createElement('img');
  firstSlide.appendChild(firstImage);
  firstImage.setAttribute('class', 'package-img');
  firstImage.setAttribute('src', this.img1);



  //second slide
  let secondSlide = document.createElement('div');
  bookingContent.appendChild(secondSlide);
  secondSlide.setAttribute('class', 'Slides');
  //img number
  let imgNumber2 = document.createElement('div');
  secondSlide.appendChild(imgNumber2);
  imgNumber2.setAttribute('class', 'imgNumber');

  //image
  let secondImage = document.createElement('img');
  secondSlide.appendChild(secondImage);
  secondImage.setAttribute('class', 'package-img');
  secondImage.setAttribute('src', this.img2);


  //third slide
  let thirdSlide = document.createElement('div');
  bookingContent.appendChild(thirdSlide);
  thirdSlide.setAttribute('class', 'Slides');
  //img number
  let imgNumber3 = document.createElement('div');
  thirdSlide.appendChild(imgNumber3);
  imgNumber3.setAttribute('class', 'imgNumber');

  //image
  let thirdImage = document.createElement('img');
  thirdSlide.appendChild(thirdImage);
  thirdImage.setAttribute('class', 'package-img');
  thirdImage.setAttribute('src', this.img2);

  //add package name
  let packageName = document.createElement('h3');
  bookingContent.appendChild(packageName);
  packageName.textContent = this.name;
  packageName.setAttribute('class', 'packageName');

  //add package price
  let packagePrice = document.createElement('h4');
  bookingContent.appendChild(packagePrice);
  packagePrice.textContent = this.price;
  packagePrice.setAttribute('class', 'packagePrice');

  //create booking button
  let bookingButton = document.createElement('input');
  bookingContent.appendChild(bookingButton);
  bookingButton.setAttribute('class', 'bookingButton');
  bookingButton.setAttribute('type', 'button');
  bookingButton.setAttribute('value', 'book');

  //create dots container
  let dotContainer = document.createElement('div');
  bookingContent.appendChild(dotContainer);
  dotContainer.setAttribute('style', 'text-align:center');

  //create first dot by span
  let dotElement1 = document.createElement('span');
  bookingContent.appendChild(dotElement1);
  dotElement1.setAttribute('class', 'dotElement');

  //create second dot by span
  let dotElement2 = document.createElement('span');
  bookingContent.appendChild(dotElement2);
  dotElement2.setAttribute('class', 'dotElement');

  //create third dot by span
  let dotElement3 = document.createElement('span');
  bookingContent.appendChild(dotElement3);
  dotElement3.setAttribute('class', 'dotElement');



  //create description content
  let descriptionElement = document.createElement('p');
  bookingContent.appendChild(descriptionElement);
  descriptionElement.textContent = this.description;

  let object = this;
  //addeventlistner for book button
  let x = 0;
  bookingButton.addEventListener('click', savingBookedPackages);
  function savingBookedPackages() {
    x++;
    bookedPackages.push(object);
    console.log(bookedPackages);
    settingData();
  }

};

allPackages[0].renderContent();


function settingData() {

  let bookedArrayString = JSON.stringify(bookedPackages);
  localStorage.setItem('bookedpackage', bookedArrayString);

}


// if (x >= 1) {
//   bookingButton.removeEventListener('click', savingBookedPackages);
// }

// gettingData();

// if (allPackages[0] || allPackages[4] || allPackages[8]) {

// }
// else (allPackages[1] || allPackages[4] || allPackages[8]) {

// }


function gettingData() {

  let bookedData = localStorage.getItem('bookedpackage');
  let bookedArrayString = JSON.parse(bookedData);
  console.log("bookedArrayString", bookedArrayString)

  if (bookedArrayString !== null) {

    // reinstaniation  the prototypes
    for (let i = 0; i < bookedArrayString.length; i++) {
      new Package(bookedArrayString[i].name, bookedArrayString[i].description, bookedArrayString[i].price, bookedArrayString[i].img1, bookedArrayString[i].img2, bookedArrayString[i].img3);
      console.log('all packeages after new', bookedArrayString);

    }
  }
}















