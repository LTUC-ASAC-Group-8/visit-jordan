/* eslint-disable no-inner-declarations */
'use strict';

// geting the  booked  data from the storage

let bookedArrayString = [];
function gettingData() {

  let bookedData = localStorage.getItem('bookedPackage');
  bookedArrayString = JSON.parse(bookedData);
  // console.log(bookedArrayString);
}
gettingData();

// rendering the booked data


let bookedImagesContan = document.getElementById('itemList');
let totalContainer = document.getElementById('totalContainar');


let renderdTotalNmber;


// let counter = 0;
let total = 0;
let renderdsection;

function renderBookedImages() {

  for (let i = 0; i < bookedArrayString.length; i++) {

    renderdsection = document.createElement('section');
    bookedImagesContan.appendChild(renderdsection);
    renderdsection.setAttribute('class', 'renderdsection');

    //  create img element

    let renderdimage = document.createElement('img');
    renderdsection.appendChild(renderdimage);
    renderdimage.setAttribute('src', bookedArrayString[i].img4);
    renderdimage.setAttribute('class', 'renderdimage');

    //  create the name element

    let renderdname = document.createElement('h4');
    renderdsection.appendChild(renderdname);
    renderdname.textContent = bookedArrayString[i].name;
    renderdname.setAttribute('class', 'renderdname');

    //  create the price element

    let renderdprice = document.createElement('h5');
    renderdsection.appendChild(renderdprice);
    renderdprice.textContent = `${bookedArrayString[i].price} $`;
    renderdprice.setAttribute('class', 'renderdprice');

    total += parseInt(bookedArrayString[i].price);
    let counter = 1;

    // create div container for - 1 + 
    let renderDivContainer = document.createElement('div');
    renderdsection.appendChild(renderDivContainer);
    renderDivContainer.setAttribute('class', 'renderDivContainer');

    //create delete button

    let deleteButton = document.createElement('input');
    renderDivContainer.appendChild(deleteButton);
    deleteButton.setAttribute('class', 'deleteButton');
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('value', '-');

    deleteButton.addEventListener('click', deleteBookedPackage);
    function deleteBookedPackage() {

      counter--;
      total -= parseInt(bookedArrayString[i].price);
      renderdprice.textContent = `${parseInt(bookedArrayString[i].price) * counter} $`;
      console.log('before', counter);

      if (counter === 0) {

        let confirmMassge = confirm(`the package ${bookedArrayString[i].name} will be deleted`);
        console.log(confirmMassge);

        if (confirmMassge === true) {
          renderdimage.remove();
          renderdname.remove();
          renderdprice.remove();
          deleteButton.remove();
          renderdcounter.remove();
          addButton.remove();
        } else {
          counter = 1;
          total += parseInt(bookedArrayString[i].price);
          renderdprice.textContent = `${parseInt(bookedArrayString[i].price) * counter} $`;
        }
        console.log('hello from  if ');

      } else if (counter > 0) {
        renderdcounter.textContent = counter;
        console.log('hello from else ');
      }
      else if (counter < 0) {

        renderdimage.remove();
        renderdname.remove();
        renderdprice.remove();
        deleteButton.remove();
        renderdcounter.remove();
        addButton.remove();
        console.log('hello from <0 ');
        // renderdimage.setAttribute('src',"");
      }

      renderdTotalNmber.textContent = `${total} $`;
      console.log('before', counter);

    }

    //  create the counter element

    let renderdcounter = document.createElement('h5');
    renderDivContainer.appendChild(renderdcounter);
    renderdcounter.textContent = counter;
    renderdcounter.setAttribute('class', 'renderdcounter');

    //create adding button

    let addButton = document.createElement('input');
    renderDivContainer.appendChild(addButton);
    addButton.setAttribute('class', 'addButton');
    addButton.setAttribute('type', 'button');
    addButton.setAttribute('value', '+');

    addButton.addEventListener('click', addBookedPackage);
    function addBookedPackage() {
      counter++;
      renderdcounter.textContent = counter;
      total += parseInt(bookedArrayString[i].price);
      renderdprice.textContent = `${parseInt(bookedArrayString[i].price) * counter} $`;
      renderdTotalNmber.textContent = `${total} $`;
    }

  }

  //  create the total element

  let renderdTotal = document.createElement('h3');
  totalContainer.appendChild(renderdTotal);
  renderdTotal.textContent = 'Total';
  renderdTotal.setAttribute('class', 'renderdTotal');

  //  print the total

  renderdTotalNmber = document.createElement('h4');
  totalContainer.appendChild(renderdTotalNmber);
  renderdTotalNmber.textContent = `${total} $`;
  renderdTotalNmber.setAttribute('class', 'renderdTotalNmber');

}
renderBookedImages();


//purchase event

let purchaseButton = document.getElementById('purchase');
purchaseButton.addEventListener('click', purchaseEvent);

function purchaseEvent(event) {

  event.preventDefault();
  alert(`Thank you for purchasing \nyour total is ${total} `);

  // clear items and total after purches

  bookedImagesContan.textContent = '';
  renderdTotalNmber.textContent = '0';

  localStorage.clear();
  // console.log(localstorage);


}






