let containerDom = document.querySelector('.container');
// let listItemDom = document.querySelector('.carousel .list');
// let thumbnailDom = document.querySelector('.carousel .thumbnail');

getAllAnimals();

function displayAnimals(animals) {
  let allAnimals = '';
  
  
  animals.forEach(animal => {
    const animalThumbnailElement = `
     <div class="card">
        <img class="cardImage" src="${animal.imagePath}" alt="Card Image">
        <div class="cardTitle">${animal.title}</div>
        <div class="cardTopic">${animal.topic}</div>
      </div>
    `;

    allAnimals += animalThumbnailElement;
  });
  containerDom.innerHTML = allAnimals;
}

function getAllAnimals() {
  fetch('https://localhost:7252/api/animals')
  .then(data => data.json())
  .then(response => displayAnimals(response));
}