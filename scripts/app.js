
// document.addEventListener('DOMContentLoaded', function() {
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');


// fetch all the animals from dotnet 6.0 api
function getAllAnimals() {
  fetch('https://localhost:7252/api/animals')
  .then(data => data.json())
  .then(response => displayAnimalsThumbnails(response));
}


function displayAnimalsThumbnails(animals){
  let allAnimals = '';
  
  let allAnimalsForListDom = '';
  animals.forEach(animal => {
    const animalThumbnailElement = `
      <div class="item">
        <img src="${animal.imagePath}" alt="">
        <div class="content">
          <div class="title">
            ${animal.title}
          </div>
          <div class="des">
            ${animal.topic}
          </div>
        </div>
      </div>
    `;

    allAnimals += animalThumbnailElement;

    let animalIndex = animals.indexOf(animal) + 1 ;
    if(animalIndex === 1){
      animalIndex = animals.length - 1;
    }else{
      animalIndex = animalIndex - 2;
    }
    console.log(animalIndex, animals.length);

    const animalListElement = `
    <div class="item">
    <img src="${animals[animalIndex].imagePath}" alt="">
    <div class="content">
      <div class="author">${animals[animalIndex].author}</div>
      <div class="title">${animals[animalIndex].title}</div>
      <div class="topic">${animals[animalIndex].topic}</div>
      <div class="des">
        ${animals[animalIndex].description}
      </div>
      <div class="buttons">
        <button>SEE MORE</button>
        <button>SUBSCRIBE</button>
      </div>
    </div>
  </div>
  `;
  allAnimalsForListDom += animalListElement;

  });

  thumbnailDom.innerHTML = allAnimals;
  listItemDom.innerHTML = allAnimalsForListDom;

  // if (Array.isArray(animals)) { // Add the first element to the end of the array 
    
  //   // Remove the first element and store it in a variable 
  //   const firstElement = animals.shift(); // Add the removed element to the end of the array 
  //   animals.push(firstElement);

  //   let allAnimalsForListDom = '';
  //   animals.forEach(animal => {
  //     const animalElement = `
  //       <div class="item">
  //       <img src="${animal.imagePath}" alt="">
  //       <div class="content">
  //         <div class="author">${animal.author}</div>
  //         <div class="title">${animal.title}</div>
  //         <div class="topic">${animal.topic}</div>
  //         <div class="des">
  //           ${animal.description}
  //         </div>
  //         <div class="buttons">
  //           <button>SEE MORE</button>
  //           <button>SUBSCRIBE</button>
  //         </div>
  //       </div>
  //     </div>
  //     `;
  //     allAnimalsForListDom += animalElement;
  //   });
  //   listItemDom.innerHTML = allAnimalsForListDom;
  // }

}

getAllAnimals();

if(nextDom){
  nextDom.onclick = function() {
    showSlider('next');
  }
}

if(prevDom){
  prevDom.onclick = function() {
    showSlider('prev');
  }
}

let timeRunning = 2100;
let runTimeOut;

let timeAutoNext = 5000;
let runTimeAutoNext;

function showSlider(type) {
  let itemSlider = document.querySelectorAll('.carousel .list .item');
  let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');  

  if(type === 'next'){
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add('next');
  }else {
    let positionLastItem = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(itemThumbnail[positionLastItem]);
    carouselDom.classList.add('prev');

  }


  clearTimeout(runTimeOut);

  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev');
  },timeRunning)

  clearTimeout(runTimeAutoNext);
  runTimeAutoNext = setTimeout(() => {
    nextDom.click();
  }, timeAutoNext);
}

setTimeout(() => {

  showSlider('next');

}, 7000);


// });
