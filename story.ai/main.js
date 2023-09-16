// Navbar responsiveness
const mobile = document.getElementById("menu");
const navList = document.getElementById("hidden-menu");

// Updating images
const firstHeaderImage = document.getElementById("header-img");
const secondHeaderImage = document.getElementById("header-img1");

// Blog slides
const first = document.getElementById("first");
const second = document.getElementById("second");
const vl = document.getElementById("vl");

// Function to toggle navigation menu
mobile.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// Function to toggle header images at intervals
function toggleImage() {
  if (firstHeaderImage.src.includes("Property_1_Variant1.png")) {
    firstHeaderImage.src = "images/Modern cute chatbot illustration set 3.png";
  } else {
    firstHeaderImage.src = "images/Property_1_Variant1.png";
  }
}

function imageToggle() {
  if (secondHeaderImage.src.includes("Property_1_Variant2.png")) {
    secondHeaderImage.src = "images/Modern cute chatbot illustration set 4.png";
  } else {
    secondHeaderImage.src = "images/Property_1_Variant2.png";
  }
}

setInterval(toggleImage, 1000);
setInterval(imageToggle, 1000);

// Function to move a line to the right
moveRight = () => {
  let position = 0;

  function animate() {
    if (position == 240) {
      clearInterval(animation);
    } else {
      position++;
      vl.style.left = position + "px";
    }
  }

  const animation = setInterval(animate, 15);
}

// Function to make text appear with fading effect
appearText = (text) =>{
  const duration = 2000;
  const increment = 0.01;
  let opacity = 0;

  const appearInterval = setInterval(() => {
    opacity += increment;
    text.style.opacity = opacity;

    if (opacity >= 1) {
      clearInterval(appearInterval);
    }
  }, duration * increment);
}

window.addEventListener("load", () => {
  // Call the moveRight and appearText functions after the window is loaded
  moveRight();
  appearText(first);
});
