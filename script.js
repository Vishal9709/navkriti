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


//toggle menu

// let menuList = document.getElementById("menuList")
// menuList.style.maxHeight = "0px";

// function toggleMenu(){
//   if(menuList.style.maxHeight = "0px")
//   {
//     menuList.style.maxHeight = "300px";
//   }
//   else{
//     menuList.style.maxHeight = "0px";
//   }
// }

// toggle menu 

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





// popup 
// const popup = document.querySelector('.popup');
// const x = document.querySelector('.popup-content i')

// window.addEventListener('load', () => {
//   popup.classList.add('showPopup');
//   popup.childNodes[1].classList.add('showPopup');
// })

// x.addEventListener('click', () => {
//   popup.classList.remove('showPopup');
//   popup.childNodes[1].classList.add('showPopup');
// })


// let modelBox = document.getElementById("modelBox");

// document.onmouseleave = function(){
//   modelBox.style.display = "none";
// }

// function closeModel(){
//   modelBox.style.display = "none";
// }


document.addEventListener('DOMContentLoaded', function () {

  const popupOverlay = document.getElementById('popupOverlay');

  const popup = document.getElementById('popup');

  const closePopup = document.getElementById('closePopup');

  const emailInput = document.getElementById('emailInput');

  // Function to open the popup

  function openPopup() {

      popupOverlay.style.display = 'block';

  }

  // Function to close the popup

  function closePopupFunc() {

      popupOverlay.style.display = 'none';

  }

  // Function to submit the signup form

  function submitForm() {

      const email = emailInput.value;

      // Add your form submission logic here

      console.log(`Email submitted: ${email}`);

      closePopupFunc(); // Close the popup after form submission

  }

  // Event listeners

  // Trigger the popup to open (you can call this function on a button click or any other event)

  openPopup();

  // Close the popup when the close button is clicked

  closePopup.addEventListener('click', closePopupFunc);

  // Close the popup when clicking outside the popup content

  popupOverlay.addEventListener('click', function (event) {

      if (event.target === popupOverlay) {

          closePopupFunc();

      }

  });

  // You can customize and expand these functions based on your specific requirements.

});
