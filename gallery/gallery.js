// let elements = document.querySelectorAll(".rolling-text");

// elements.forEach((element) => {
//     let innerText = element.innerText;
//     element.innerHTML = "";

//     let textContainer = document.createElement("div");
//     textContainer.classList.add("block");

//     for(let letter of innerText){
//         let span = document.createElement("span");
//         span.innerText = letter.trim() === "" ? "\xa0" : letter;
//         span.classList.add("letter");
//         textContainer.appendChild(span);
//     }

//     element.appendChild(textContainer);
//     element.appendChild(textContainer.cloneNode(true));
// });

// elements.forEach((element) => {
//     element.addEventListener("mouseover", () => {
//         element.classList.remove("play");
//     });
// });

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [

  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e",

    "#396387",
    "#4f679b",
    "#6a69aa",
    "#876ab2",
    "#a56ab3",
    "#c36baa",
    "#df6d99",
    "#f67280"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();



// video 

// var tag  = document.createElement('script');
// tag.src = "https://youtube.com/player_api";
// var control = document.getElementsByTagName('script')[0];
// control.parentNode.insertBefore(tag, control);

// var player;
// function onYoutubePlayerAPIReady(){
//     player = new YT.Player('video', {
//         height: '360px',
//         width: '640px',
//         videoId: '31QlsakkRM4'
//     });
// }



const hamburger = document.querySelector(".hamburger");
const mainnav = document.querySelector(".main-nav");

hamburger.addEventListener("click", ()=> {
  hamburger.classList.toggle("active");
  mainnav.classList.toggle("active");
})

document.querySelectorAll(".rolling-text").forEach(n => n.addEventListener("click",() => {
  hamburger.classList.remove("active");
  mainnav.classList.remove("active");
}))


//array creating start here

const galleryImages = {
  '2k18': [
    '../assets/images/navkriti_2k18/1.jpg',
    '../assets/images/navkriti_2k18/2.jpg'
  ],
  '2k23': [
    '../assets/images/navkriti_2k23/1.2.jpg',
    '../assets/images/navkriti_2k23/2.1.jpg',
    '../assets/images/navkriti_2k23/1.3.jpg',
    '../assets/images/navkriti_2k23/2.1.jpg',
    '../assets/images/navkriti_2k23/2.2.jpg',
    '../assets/images/navkriti_2k23/2.3.jpg'
  ],
  '2k25': [
    '../assets/images/navkriti_2k25/1.1.jpg',
    '../assets/images/navkriti_2k25/1.2.jpg',
    '../assets/images/navkriti_2k25/2.jpg',
    '../assets/images/navkriti_2k25/3.jpg',
    '../assets/images/navkriti_2k25/5.jpg',
    '../assets/images/navkriti_2k25/6.1.jpg',
    '../assets/images/navkriti_2k25/6.jpg',
    '../assets/images/navkriti_2k25/7.jpg',
    '../assets/images/navkriti_2k25/7.1.jpg'
  ]
};

let currentGallery = [];
let currentIndex = 0;

function openGallery(key) {
  currentGallery = galleryImages[key];
  currentIndex = 0;
  showImage();
  document.getElementById('galleryModal').style.display = 'block';
}

function closeGallery() {
  document.getElementById('galleryModal').style.display = 'none';
}

function showImage() {
  const img = document.getElementById('galleryImage');
  img.src = currentGallery[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentGallery.length;
  showImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  showImage();
}




function openGallery(key) {
  currentGallery = galleryImages[key];
  currentIndex = 0;
  showImage();
  document.getElementById('galleryModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';  // 👈 Prevent scroll
}

function closeGallery() {
  document.getElementById('galleryModal').style.display = 'none';
  document.body.style.overflow = '';        // 👈 Restore scroll
}