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

function Package(name, description1, description2, price, img1, img2, img3, img4) {
  this.name = name,
  this.description1 = description1,
  this.description2 = description2,
  this.price = price,
  this.img1 = img1,
  this.img2 = img2,
  this.img3 = img3,
  this.img4 = img4,

  allPackages.push(this);
}


// //create instances
// let pacakge1 = new Package('test package1 ttrip to aqaba ', 'heloo from test package', '1200', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250');

// let pacakge2 = new Package('test package2', 'heloo from test package2', '500', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250');

// let pacakge3 = new Package('test pacakge3', 'heloo from test pacakge3', '500', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250');

// let pacakge4 = new Package('test pacakge4', 'heloo from test pacakge4', '500', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250');

// let pacakge5 = new Package('test pacakge5', 'heloo from test pacakge5', '500', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250');

// let pacakge6 = new Package('test pacakge6', 'heloo from test pacakge6', '500', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250');

// let pacakge7 = new Package('test pacakge7', 'heloo from test pacakge7', '500', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250');

// let pacakge8 = new Package('test pacakge8', 'heloo from test pacakge8', '500', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250');

// let pacakge9 = new Package('test pacakge9', 'heloo from test pacakge9', '500', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250/sss', 'https://via.placeholder.com/350x250');

//create instances
let pacakge1 = new Package('Full Jordan Bike Trail', 'Overview: \nRide the full Jordan Bike Trail, starting in the green North, leading through stony deserts, stunning valleys and the red sand dunes of Wadi Rum, finishing in Aqaba at the shores of the Red Sea.\nTour Highlights:\nGet to know Jordan’s diverse nature and beautiful landscapes.Don’t miss out on the top historical and cultural sights.Move off the beaten paths and discover all the hidden treasures.', '\nDay 1: Amman Airport - Amman Hotel || Day 2: Amman - Jerash - Cycle Anjara to Wadi Zarqa - Amman ||\nDay 3: Amman - Karak - Cycle Karak to Wadi Hasa - Dana\n || Day 4: Dana - Shobak - Cycle Shobak to Little Petra - Little Petra\n || Day 5: Little Petra - Full Day Petra Visit - Petra\n || Day 6: Petra - Cycle Rajif to Wadi Rum - Sunset Jeep Tour - Wadi Rum\n || Day 7: Wadi Rum - Cycle Wadi Rum to Aqaba - Aqaba\n || Day 8: Aqaba - Dead Sea\n || Day 9: Dead Sea - Amman Airport - Departure',
  '1050', 'images/packagaes img/pack1-2.jpg', 'images/packagaes img/pack1-3.jpg', 'images/packagaes img/pack1-3.jpg', 'images/packagaes img/pack1-4.jpg');

let pacakge2 = new Package('Ajloun Forest Reserve Trail', 'Located in the Ajloun Highlands in the north of Jordan, this beautiful nature reserve consists of 13 km2 of rolling hill country dominated by open woodlands that are home to a diverse collection of plant and animal species. The rich greenery makes Ajloun a popular spot for picnickers and hikers, especially in the spring, when the reserve is coated in a wide variety of wildflowers.', 'This trail takes you through wooded valleys to the lush green orchards of Orjan village, giving you the chance to discover the rural lifestyle of the region. A poplar-lined spring provides a wonderful contrast to the arid mountains of the previous stages of the trail. As you hike, note the dramatic rock walls, old water mills once used by local people to grind their seeds and the hollow walnut tree. Enjoy a delicious traditional meal in an orchard of fig, pomegranate, apple and apricot trees.', '300', 'images/packagaes img/pack2-img2.png', 'images/packagaes img/pack2-img1.png', 'images/packagaes img/pack2-img3.png', 'images/packagaes img/pack2-img2.png');

// “+friends[names].firstName+ “\n”, “Last Name:

let pacakge3 = new Package('Best Of The Jordan Trail', 'Overview:\n The Jordan Trail offers over 600 km of hiking tracks, and it would take around 40 days to complete all of it.\nFor all those who don’t have that much time at hand – this tour takes you to the highlights of Jordan and the Jordan Trail:\nthe green north including Jerash, the Dana to Petra trek (rated as one of the world’s best hikes by National Geographic), the wonders of Petra, the sense of remoteness from Wadi Gseib to Abasiah village, and the majestic grandeur of Wadi Rum.\nWe arrange all the logistics, so you can just hike and enjoy the amazing scenery.\nNote: For this tour, please make sure that you have a good level of fitness.', 'Day 1: Amman Airport - Amman Hotel Day 2: Amman - Amman City Tour - Amman Day 3: Amman - Jerash - Ajloun - Hike from Ajloun Castle to Tell Mar Elias - Ajloun Day 4: Ajloun - Hike to Rasoun - Dana Day 5: Dana - Hike from Dana Village to Feynan Ecolodge Day 6: Feynan - Hike from Ras Al Feid to Ghbour Whedat Day 7: Hike from Ghbour Whedat to Little Petra Day 8: Hike from Little Petra to Petra Day 9: Discover Petra! Day 10: Petra - Wadi Gseib - Hike from Wadi Gsieb to Wadi Raqiah Day 11: Hike from Wadi Raqiah to near Hummeima Day 12: Trekking and Scrambling through Wadi Rum Day 13: Wadi Rum - Dead Sea Day 14: Dead Sea - Amman - Airport - Departure', '750', 'images/packagaes img/pack3-img3.jpg', 'images/packagaes img/pack3-img2.jpg', 'images/packagaes img/pack3-img1.jpg', 'images/packagaes img/pack3-img3.jpg');

let pacakge4 = new Package('7-day Sightseeing Tour', 'Overview:This is a 7-day tour visiting and experiencing Jordan’s unique sites, and engaging with its people and culture.Tour Highlights:Jerash & Ajloun: Explore history in the green north.Petra: Discover the ancient Nabataean city carved in red stone.Wadi Rum: Let the majestic desert and sparkling stars work their magic.Dead Sea: Float in the salty waters on the lowest point on earth.', 'Day 1: Airport - Amman Hotel Day 2: Amman - Jerash - Ajloun - Amman Day 3: Amman - Mount Nebo - Madaba - Karak - Shobak - Petra Day 4: Petra - Petra Visit - Wadi Rum - 2-Hour Jeep Tour - Wadi Rum Day 5: Wadi Rum - Aqaba - Boat Ride & BBQ - Dead Sea Day 6: Dead Sea - Dead Sea Experience - Amman Day 7: Amman - Airport - Departure', '450', 'images/packagaes img/pack4-img4.jpg', 'images/packagaes img/pack4-img2.jpg', 'images/packagaes img/pack4-img1.jpg', 'images/packagaes img/pack4-img4.jpg');

let pacakge5 = new Package('Jordan Active Adventure', 'Overview:Experience Jordan’s most beautiful sights and places – all with a sense of adventure!.Tour Highlights:Canyon through Wadi Hidan – a volcanic valley with natural pools Cycle the best parts of the brand-new Jordan Bike Trail Visit Jordan’s most famous places, as well as the hidden gems Summit Jabal Umm ad-Dami, Jordan’s highest Peak. Go for a boat ride on the Red Sea. There’s also plenty of time for relaxing, swimming, snorkeling', 'ITINERARY Day 1: Amman Airport - Amman Day 2: Amman - Canyon Hike - Dana Village Day 3: Dana - Shobak - Cycling: Shobak to Little Petra - Little Petra Day 4: Little Petra - Petra - Full Day Visit - Petra Day 5: Petra - Cycling: Rajif to Wadi Rum - Sunset Camel Ride - Wadi RumDay 6: Wadi Rum - Um Ad-Dami Jordan\'s Highest Peak - Aqaba Day 7: Aqaba - Boat Ride - Dead Sea Day 8: Dead Sea - Amman Airport - Departure', '1450', 'images/packagaes img/pack5-img1.jpg', 'images/packagaes img/pack5-img2.jpg', 'images/packagaes img/pack5-img3.jpg', 'images/packagaes img/pack5-img1.jpg');

let pacakge6 = new Package('Ancient Capital Of As-salt', '6 hours Experience Jordan’s first ancient capital of As-Salt, one of the country’s oldest and prettiest cities. This private trip . While you’re in As-Salt do not miss out on the unique architectural style seen in old homes across the city. A collection of these homes are currently being considered for inclusion on the UNESCO World Heritage List. ', 'Stop 1: Al Ain Plaza, the center of the city. Stop 2: Abu Jaber Museum  | the Historic Old Salt Museum. Stop 3: Al-Eskafyeh Street. Stop 4: Hammam Street to Al-Khader Street. stop 5: Do some outdoor activities at As- salt or Jalad area like paintball or other.', '250', 'images/packagaes img/pack6-img1.jpg', 'images/packagaes img/pack6-img2.jpg', 'images/packagaes img/pack6-img3.jpg', 'images/packagaes img/pack6-img4.jpg');

let pacakge7 = new Package('Madaba-Mount Nebo', 'Overview: This is a 1-day tour to Amman, Madaba, and Mpunt Nebo, for those staying in Jerusalem, or other points in Israel/Palestine. It starts and ends in Jerusalem or elsewhere in Israel/Palestine (supplement applies). You will visit Jordan’s vibrant capital, Amman, as well as the smaller town of Madaba, see the stunning views from Mount Nebo, and finally explore the wonders of Petra. Tour Highlights: Amman – Visit the capital city. Madaba&Mount Nebo – Discover Byzantine mosaics and ancient churches, and gaze across the Holy Land from the spot where according to tradition Moses died.', 'At 6:30am (suggested time) you will be collected from your location in Jerusalem and transferred to Jordan River / Sheikh Hussein Border Crossing. Once arrived on the Jordanian side, we drive south to Amman. There, you will have the chance to visit both the modern downtown, now the economic, political and cultural center of Jordan, and the old Citadel above the city, which includes the Temple of Hercules and historic palaces, as well as great views over Amman. After that, drive to the smaller town of Madaba and discover the amazing Byzantine mosaics excavated in different locations throughout the town. Especially worth seeing: the ‘Madaba Map’, the oldest preserved mosaic map of the Holy Lands. Continue to Mount Nebo and enjoy the view where, according to tradition, Moses looked across to the Promised Land, and later died and was buried. In the evening drive south to Petra, and stay overnight in a hotel or Bedouin Camp near the site.', '110', 'images/packagaes img/pack7-img2.jpg', 'images/packagaes img/pack7-img3.jpg', 'images/packagaes img/pack7-img4.jpg', 'images/packagaes img/pack7-img1.jpg');

let pacakge8 = new Package('Amman Tour', 'Amman\'s layered history is reflected in its diverse people and its varied architecture. The city is home to a multidenominational and multicultural population. the city has a very special urban context and on this tour, you will discover the hidden gems of Amman as well as the famous historical places', 'stop 1 : al  Lweibdeh walk stop 2 : Abdali stop 3 : downtown Amman stop 4 : tradinonal lunch stop 5: a night walk the rainbow street ', '110', 'images/packagaes img/pack8-img1.jpg', 'images/packagaes img/pack8-img3.jpg', 'images/packagaes img/pack8-img4.jpg', 'images/packagaes img/pack8-img2.jpg');

let pacakge9 = new Package('Aqaba Activeties ', 'duration 1 day Enjoy snorkeling at the beach (snorkeling multiple sites depending on personal fitness). See all of what the Gulf of Aqaba (Red Sea) has to offer, with the ability to return to the beach whenever you wish and try the diving ', 'part 1 : snorkeling part 2 : lunch by the see part 3 : diving ', '830', 'images/packagaes img/pack9-img4.jpg', 'images/packagaes img/pack9-img3.jpg', 'images/packagaes img/pack9-img1.jpg', 'images/packagaes img/pack9-img2.jpg');



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
  imgNumber1.textContent = '1/3';

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
  imgNumber2.textContent = '2/3';

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
  imgNumber3.textContent = '3/3';

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
  let modelBoxcont = document.createElement('div');
  bookingContent.appendChild(modelBoxcont);
  modelBoxcont.setAttribute('class', 'modelBoxcont');

  //create Description model div
  let modelBoxdiv2 = document.createElement('div');
  modelBoxcont.appendChild(modelBoxdiv2);
  modelBoxdiv2.setAttribute('class', 'modelBoxdiv2');


  //create Description span
  let modelBoxSpan = document.createElement('span');
  modelBoxdiv2.appendChild(modelBoxSpan);
  modelBoxSpan.setAttribute('class', 'modelBoxSpan');
  modelBoxSpan.textContent = 'x';

  //create description0 for name
  let descriptionContent0 = document.createElement('h2');
  modelBoxdiv2.appendChild(descriptionContent0);
  descriptionContent0.textContent = this.name;
  descriptionContent0.setAttribute('class', 'descriptionContent0');

  //create description1 content
  let descriptionContent1 = document.createElement('p');
  modelBoxdiv2.appendChild(descriptionContent1);
  descriptionContent1.textContent = this.description1;
  descriptionContent1.setAttribute('class', 'descriptionContent1');

  //create description2 content
  let descriptionContent2 = document.createElement('p');
  modelBoxdiv2.appendChild(descriptionContent2);
  descriptionContent2.textContent = this.description2;
  descriptionContent2.setAttribute('class', 'descriptionContent2');

  // add event for Description button

  // When the user clicks on the button, open the modal
  readMoreButton.onclick = function () {
    modelBoxcont.style.display = 'block';
  };

  // When the user clicks on <span> (x), close the modal
  modelBoxSpan.onclick = function () {
    modelBoxcont.style.display = 'none';
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modelBoxcont) {
      modelBoxcont.style.display = 'none';
    }

  };

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

};

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
      new Package(bookedArrayParse[i].name, bookedArrayParse[i].description1, bookedArrayParse[i].description2, bookedArrayParse[i].price, bookedArrayParse[i].img1, bookedArrayParse[i].img2, bookedArrayParse[i].img3, bookedArrayParse[i].img4);
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



