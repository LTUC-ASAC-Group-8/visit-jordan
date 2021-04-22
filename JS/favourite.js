/* eslint-disable no-inner-declarations */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
'use strict';




let favouriteJourneys = [];
console.log(favouriteJourneys);



function gettingItems() {
    let stringFavouriteJourneys = localStorage.getItem('favouriteJourneys');
    favouriteJourneys = JSON.parse(stringFavouriteJourneys);
    // console.log(favouriteJourneys);
}

gettingItems();


if (favouriteJourneys !== null && favouriteJourneys.length !== 0) {
    let imageContainer = document.getElementById('imageContainer');

    function renderFavouriteImages() {
        for (let i = 0; i < favouriteJourneys.length; i++) {
            let imageArticle=document.createElement('article');

            imageContainer.appendChild(imageArticle);
            imageArticle.setAttribute('id',favouriteJourneys[i].name);

            let image = document.createElement('img');
            imageArticle.appendChild(image);

            image.setAttribute('src', favouriteJourneys[i].image);
            image.setAttribute('width', '200px');
            image.setAttribute('id', favouriteJourneys[i].name);
            // console.log(image);

        //     let button = document.createElement('button');
        // imageArticle.appendChild(button);
        // button.textContent = 'Remove';
        }
    }
    renderFavouriteImages();




    let imageSet;
    console.log(favouriteJourneys);

    for (let i = 0; i < favouriteJourneys.length; i++) {
        imageSet = document.getElementById(favouriteJourneys[i].name);
        // console.log(favouriteJourneys[i].name);
        console.log("hello ", imageSet);
    }


    imageContainer.addEventListener('click', divClicking);


    
    
    
    // console.log(parent);
    
    
    let parent = document.getElementById('detailsContainer');
    let articleEl=document.createElement('article');
    let copyTitle,videoCopy,paraCopy;
    // make a article for every image
    function showingDiv() {
        
        let title = document.createElement('h2');
        copyTitle=title;
    
        let video = document.createElement('video');
        videoCopy=video;
        let paragraph = document.createElement('p');
        paragraph.setAttribute('id','description')
        paraCopy=paragraph;
        
             articleEl.appendChild(title);
             articleEl.appendChild(video);
             articleEl.appendChild(paragraph);
    }
    // append title video paragraph to that article
    parent.appendChild(articleEl);
    showingDiv();
    

    let button = document.createElement('button');
    //  imageArticle.appendChild(button);
     button.textContent = 'Remove From Favourite';
     
     function divClicking(event) {
         button.className='button';
         articleEl.appendChild(button);

        // let button = document.createElement('button');
        // parent.appendChild(button);
        // button.textContent = ('Remove');

        imageSet = event.target;
        console.log('Hey ', event.target.name);

        // console.log(imageSet.id);
        // console.log(favouriteJourneys[0].name);
        
        for (let i = 0; i < favouriteJourneys.length; i++) {
            if (imageSet.id === favouriteJourneys[i].name) {
                button.setAttribute('id', favouriteJourneys[i].name);

                copyTitle.textContent = (favouriteJourneys[i].name);
                videoCopy.setAttribute('src', favouriteJourneys[i].video);
                videoCopy.setAttribute('controls',favouriteJourneys[i].video);
                videoCopy.setAttribute('autoplay','');
                paraCopy.textContent = (favouriteJourneys[i].description);

                button.addEventListener('click', removeItem);
            }
        }

        function removeItem() {

            for (let i = 0; i < favouriteJourneys.length; i++) {

                if (button.id === favouriteJourneys[i].name) {
                    favouriteJourneys.splice(i, 1);
                    console.log(favouriteJourneys);
                    imageContainer.textContent='';
                    articleEl.textContent='';
                    // ar
                    renderFavouriteImages();


                    // detail
                    showingDiv();

                    settingItems();

                }
            }
        }

        function settingItems() {
            let stringData = JSON.stringify(favouriteJourneys);
            localStorage.setItem('favouriteJourneys', stringData);
        }
    }



} else {
    let parent = document.getElementById('link');
    let link = document.createElement('a');
    parent.appendChild(link);
    link.setAttribute('href','DiscoverJordanPlaces.html');
    link.setAttribute('id','empty-link')
    
    link.textContent = ('You Can Add A Place To Your Favourite List, Click on Discover Jordan!');

}









// imageContainer.addEventListener('click', hello);

// let imageSet, imageSet2;

// // console.log(favouriteJourneys);

// // imageSet.addEventListener('click',hello);

// for (let i = 0; i < favouriteJourneys.length; i++) {
//     imageSet2 = document.getElementById(favouriteJourneys[i].name);
//     // console.log(favouriteJourneys[i].name);
//     // console.log("hello ",imageSet);
// }


// if (imageSet2 !== null) {
//     imageSet2.addEventListener('click', hello);
// }

// function hello(event) {
//     imageSet = event.target;
//     console.log(imageSet);
// }

