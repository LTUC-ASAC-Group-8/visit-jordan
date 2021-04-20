/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
'use strict';

let storyArr=[];

let addForm=document.getElementById('add');

function Story(feedback, uploadImage){
    
    this.feedback=feedback;
    this.uploadImage=uploadImage;
    
    storyArr.push(this);    
}

// console.log(storyArr);
// storyArr=[];

function handleSubmit(event){
        // if (uploadImage !==null){
        
        event.preventDefault();   
        let feedback1=event.target.feedback.value;
        let uploadImage1=event.target.uploadImage.value;
        
        let visitor= new Story(feedback1, uploadImage1);
        console.log(visitor);
        updateStorage();
        visitor.renderStory();
    // }
}

addForm.addEventListener('submit', handleSubmit);

Story.prototype.renderStory =function (){
    // for (let i=0; i< storyArr.length;i++){
        
        let parent= document.getElementById('first-pra');
        let doc= document.createElement('p');
        let image= document.createElement('img');
        doc.textContent=this.feedback;
        image.setAttribute('src',this.uploadImage);
        parent.appendChild(image);
        parent.appendChild(doc);
        // }
        
        
    };
    // console.log(addForm);
    
    for(let i=0; i<storyArr.length;i++){
        console.log(storyArr);
        storyArr[i].renderStory();
    }


function updateStorage(){
    let arrayString=JSON.stringify(storyArr);
    localStorage.setItem('story',arrayString);
}

function getStory() {
    let data =localStorage.getItem('story');
 
    if (data !==null){
        let dataStory=JSON.parse(data);
        console.log("dataStory",dataStory[0].feedback);
        for (let i = 0; i < dataStory.length; i++) {
            new Story(dataStory[i].feedback,dataStory[i].uploadImage);
            
        }
        for(let i=0; i<storyArr.length;i++){
        console.log(storyArr);
        storyArr[i].renderStory();
    }
    }

 
    
}



    getStory();

