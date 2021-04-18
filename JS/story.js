'use strict';

let storyArr=[];

let container=document.getElementById('container');

function Story(feedback, uploadImage){
    
    this.feedback=feedback;
    this.uploadImage=uploadImage;

    storyArr.push(this);
    
    updateStorage();
    
}

console.log(storyArr);
// storyArr=[];


function updateStorage(){
    let arrayString=JSON.stringify(storyArr);
    console.log(storyArr);
    console.log(arrayString);

    localStorage.setItem('story',arrayString);
    
    console.log(storyArr);
    console.log(arrayString);
}

function getStory() {
    let data =localStorage.getItem('story');
    let dataStory=JSON.parse(data);
    
    if (data !==null){
        
        storyArr=dataStory;
    }

    renderStory();
    
}


function handleSubmit(event){
    event.preventDefault();
    console.log(event.target);

    
    let ans =event.target;
    let feedback=ans.feedback.value;
    let uploadImage=ans.uploadImage.value;
    
    new Story(feedback, uploadImage);
    
    // renderStory();
}


function renderStory(){
    let parent= document.getElementById('first-pra');
    let image= document.createElement('img');
    image.setAttribute('src','img/jo2.jpg');
    parent.appendChild(image);
    
    //    storyRen.textContent='';
}
container.addEventListener('submit', handleSubmit);
console.log(container);

getStory();

// console.log(button);

// button.addEventListener('submit',submitter);

// function submitter(event) {
    //     event.preventDefault();
    //     let feedback=event.target.feedback.value;
    //     console.log(feedback);

    // }
// submitter();
console.log(storyArr);