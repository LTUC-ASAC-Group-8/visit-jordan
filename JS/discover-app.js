'use strict';
//run the automatic slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('slides');
  let dots = document.getElementsByClassName('dot');
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

//run book button
let bookButton = document.getElementById('button');

// bookButton.addEventListener('click', booking);


//   let bokkContentHTML = document.getElementById('bokkingContent');
//   let outputData= document.querySelectorAll('div');
// console.log(bokkContentHTML);
// console.log(outputData);
//     let b = document.getElementById('bokkingContent').value

// document.getElementById('output').innerHTML = b;

// outputData.appendChild(bokkContentHTML);

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// }
//store the book container in local storage

//   console.log(outputData);
// Get form, item, and wishlist
let addToWishList = document.getElementById('bokkingContent');
console.log(addToWishList);
let wishlistItem = document.querySelector('img1');
// let page = window.open('test.html');
// let testDiv = page.document.getElementById('output');
// console.log(testDiv);
// console.log(typeof page);
// page.addEventListener('DOMContentLoaded', () => {
//   // Now we can access the #test element on the other page
//   const testDiv = page.document.getElementById('output');
//   testDiv.textContent = 'Hello world!';
//   console.log(testDiv);
// });
// let wishlist = document.getElementById('output');

// console.log(addToWishList);
// console.log(wishlistItem);
// console.log(wishlist);



// addToWishList.addEventListener('submit', function (event) {

//   // Don't submit the form
//   event.preventDefault();

//   // Ignore it if the wishlist item is empty
//   if (wishlistItem.length < 1) return;
//   // img.setAttribute('src', 'images/' + this.name + '.jpeg');
//   // Add item to wishlist
//   wishlistItem.setAttribute('src', 'https://via.placeholder.com/200x70/sss');

//   // Clear input
//   // wishlistItem.value = '';

//   // Save the list to localStorage
//   localStorage.setItem('wishlistItems', wishlist.innerHTML);

// }, false);

// // Check for saved wishlist items
// let saved = localStorage.getItem('wishlistItems');
// console.log(saved);

// // If there are any saved items, update our list
// if (saved) {
//   wishlist.innerHTML = saved;
// }






