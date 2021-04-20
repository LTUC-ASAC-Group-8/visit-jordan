/* eslint-disable no-trailing-spaces */
'use strict';

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1;}
  slides[slideIndex-1].style.display = 'block';
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}



// var slideIndex1 = 1;
// showSlides1(slideIndex1);

// function plusSlides1(n) {
//  showSlides1(slideIndex1 += n);
// }

// function currentSlide1(n) {
//  showSlides1(slideIndex1 = n);
// }
// function showSlides1(n) {
//   var i;
//   var slides1 = document.getElementsByClassName("mySlides1");
//   var dots = document.getElementsByClassName("dot1");
//   if (n > slides1.length) {slideIndex1 = 1}
//   if (n < 1) {slideIndex1 = slides1.length}
//   for (i = 0; i < slides1.length; i++) {
//     slides1[i].style1.display = "none";
//  }
//   for (i = 0; i < dots1.length; i++) {
//      dots1[i].className1 = dots1[i].className1.replace(" active1", "");
//   }
//  slides1[slideIndex1-1].style1.display = "block1";
//  dots1[slideIndex1-1].className1 += " active1";
// }


// Favourite Feature




// favourite1.addEventListener('click', renderFavourite1);

// function renderFavourite1() {
//   let stringParent = localStorage.getItem('div');
//   console.log(stringParent);

//   let parent = JSON.parse(stringParent);
//   console.log(parent);
//   parent.appendChild(favourite1);
//   let image = document.createElement('div');
//   console.log(image);
// }


