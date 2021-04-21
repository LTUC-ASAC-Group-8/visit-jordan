/* eslint-disable quotes */
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

new Trip('DESERT CASTLES', "Jordan is home to some of the world's most spectacular Roman ruins. Quseir Amra is one of Jordan's four UNESCO World Heritage Sites. Jordan's Desert Castles are home to stunning examples of both early Islamic art and architecture. Amman is a great place for a family-friendly meal and to mingle with the locals.", 'images/places-images/DESERT CASTLES.jpg', 'videoplayback.mp4');


new Trip('PELLA', "Ajlun Castle was built in 1184 AD by one of Saladin's generals to control the iron mines of Ajlun. Umm Qays is well known as the location of the famed miracle of the Gadarene swine. Pella is a favorite of archaeologists due to its extraordinary wealth of antiquities. Visit the ancient city of As-Salt, which houses the tomb/shrine of Job.", 'images/places-images/PELLA.jpg', '/places-video/Pella.mp4');


new Trip('MUJIB NATURE RESERVE', "Mujib Nature Reserve is a 20 minute drive from the resort area and the world's lowest nature reserve. Hike Jordan's Grand Canyon by jumping, abseiling and floating. Enjoy a sunset dinner at the Dead Sea Panorama Complex", 'images/places-images/MUJIB NATURE RESERVE.jpg', '/places-video/Mujib Reserve.mp4');


new Trip('MOUNT NEBO', "The most prestigious location in Jordan is Family Adventures. Sixty years on Mount Nebo hill shows a basilica church with one of the world's most beautiful mosaic floors. You will enjoy inspiring views of the Jordan Valley and Dead Sea from the platform in front of the church to the rooftops of Jerusalem and Bethlehem. The bible states that Moses is buried in an undisclosed spot near the mountain of Nebo, and that he is buried elsewhere from when he saw the Holy Land.", 'images/places-images/MOUNT NEBO.jpg', '/places-video/Mount Nebo - Jordan.mp4');


new Trip("MA'IN HOT SPRINGS", "Discover Haret Jdoudna with lunch and set off in Ma'in Hot Springs. Stop into Saint George's Church to get an insight into the Holy Land's oldest mosaic map. Discover the place on one of the few walking paths. Before you visit the Mujib Chalets on the Dead Sea, enjoy the sunset in the Dead Sea view. Spend the night in a retreat 260 m below the sea level, at Evason Ma'In Six Senses Spa. Returning to your home tab.", "images/places-images/MA'IN HOT SPRINGS.jpg", "/places-video/Ma'in .mp4");



new Trip('DANA NATURE RESERVE', "Family Adventures is one of Jordan's biggest and only natural reserves. About 555 plant species and 200 animals species are in the Dana Nature Reserve. Genuine fire cooking, Bedouin style in Rummana campsite, will be served on an evening. Walk around the park to enjoy the breathtaking view of the Great Rift Valley at the end of the day, with a stunning view. Jordan's only bio-geographical reserve which encompasses four separate areas of the nation. You'll see one of the lovely Jordana Hyenas rehabilitated and reintroduced in the wild, or you can see the Caracal Cat if you're lucky.", 'images/places-images/DANA NATURE RESERVE.jpg', '/places-video/Dana Nature Reserve.mp4');

new Trip("BETHANY BEYOND THE JORDAN", "The site of Jesus' baptism is Bethany Outside the Jordan. The place of Baptism is situated east of the river Jordan. On his visit to Jordan in 2000, Pope John Paul II visited the baptismal site. The place is a popular pilgrimage site for U.S. and international religious pilgrims and visitors. It lies in the old wild north of the Dead Sea in the region between Tell el-Kharrar and Tell Mar Elias. It was the first known incarnation of the Trinity, in the Spirit of Elijah, that John the Baptist came to preach and baptize.", 'images/places-images/BETHANY BEYOND THE JORDAN.jpg', '/places-video/Bethany Beyond .mp4');


new Trip('KARAK CASTLE', "The castle founded in 1142 AD by Baldwin I of Jerusalem is ruled by Karak. Lawrence from Arabia spent days on his research tour of 1909 visiting the castle. Another memorial to the ancient glory of the cruisers less than one hour north of Petra is Shobak Castle. Tours begin at8.30 pm and end every Monday, Monday, Wednesday and Thursday at 10.00 pm in the evening.", 'images/places-images/KARAK CASTLE.jpg', '/places-video/Karak Castle.mp4');


new Trip('SHOBAK CASTLE', "Karak is the residence of Lawrence of Arabia's castle on his 1909 study trip. Shobak Castle, perched on the edge of the mountain, dates back to the same tumultuous time Karak was. Less than an hour north of Petra is Petra's ancient site", 'images/places-images/SHOBAK CASTLE.jpg', '/places-video/Shobak Castle Jordan.mp4');


new Trip('ANJARA', "The hills east of the Jordan Valley were renowned in the Biblical period for the luxuriant woods of Gilead. Visit the Anjara cave known by Jesus and his mother, Mary as a resting stop. Exploring Jerash Decapolis, one of Roman provincial towns best preserved.", 'images/places-images/ANJARA.jpg', '/places-video/Anjara.mp4');


new Trip('SHAWMARI', "Take a safari after lunch and find out about the reinstatement in the Shawmari Wildlife Reserve, the Arabian Ibex and Oryx.", 'images/places-images/SHAWMARI.jpg', '/places-video/Shaumari -.mp4');


new Trip('WADI MUJIB', "In the morning, float on the Dead Sea and walk one of Wadi Mujib's many paths. Along the way, look to St. George's Church and glimpse the Holy Land's oldest mosaic map. Then go east and enjoy this natural spa in the Ma'in Hot Springs.", 'images/places-images/WADI MUJIB.jpg', '/places-video/Wadi Mujib,.mp4');





new Trip("King's Highway", "The King's Road is a 335 kilometre thoroughfare through the north of the Middle East. The road is a wealth of archeological sites which reads like a historical index and a biblical gazette. Some of the most beautiful early Christian Byzantine mosaics on Middle East on the road.", "images/places-images/King's Highway.jpg", '');


new Trip('Dar As Saraya Museum', "Dar al-Saraia Museum is situated on Tell Irbid Archeological Hill. It's an ancient Ottoman building that was changed to the seat of the Ottoman king in 1886. The exhibition comprises many halls that show different subjects.", 'images/places-images/dar al-saraya museum.jpg', '');


new Trip('Berenice Beach', "The Beach Club Berenice provides a mixed use of beach sports on a genuinely designed beach with panoramic views and outstanding landscape architecture", 'images/places-images/Berenice Beach.jpg', '');



new Trip('Wadi al hidan', "Wadi Al Hidan is one of Jordan's most scenic and beautiful canyons; with spectacular views of the cliffs in the black basalt, you can take a slide and swim at the proper natural pools.", 'images/places-images/Wadi al hidan.jpg', '');







let favourite1 = document.getElementById('container');
// console.log(favourite1);






// Render
Trip.prototype.render = function () {



    let newSection = document.createElement('section');
    favourite1.appendChild(newSection);

    let newImage = document.createElement('img');
    newImage.setAttribute('src', this.image);
    newImage.setAttribute('id', this.name);
    newSection.appendChild(newImage);
    // console.log(newImage);


    let newPagrh=document.createElement('p');
    newSection.appendChild(newPagrh);
    newPagrh.textContent = this.description;


    let newVideo = document.createElement('video');
    newVideo.setAttribute('src', this.video);
    newVideo.setAttribute('controls','controls');
    newVideo.setAttribute('muted','muted');
    // newVideo.setAttribute('type','video/mp4');
    // newVideo.setAttribute('autoplay', 'false');
    newSection.appendChild(newVideo);


    let button = document.createElement('button');
    button.textContent = 'Add to Favourite';
    newSection.appendChild(button);


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

        if (!favouritesArray.includes(object)) {
            console.log('hellothere',favouritesArray);

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

