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
  if (slideIndex > slides.length) {slideIndex = 1;}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += ' active';
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//run book button
let bookButton=document.getElementById('button');

bookButton.addEventListener('click',booking);

function booking(){
//     let bokkContentHTML = document.getElementById('bokkingContent');
//     let outputData= document.getElementById('output');

//     let b = document.getElementById('bokkingContent').value

// document.getElementById('output').innerHTML = b;
     
    // outputData.appendChild(bokkContentHTML);
    
    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];
    // }
  //store the book container in local storage

//   console.log(outputData);
  
}





