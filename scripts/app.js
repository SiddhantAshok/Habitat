
// document.addEventListener('DOMContentLoaded', function() {
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

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
