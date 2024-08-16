const images = document.querySelectorAll("gallery-img");
const currentIndex = 0;

function showImage(index) {
  const enlargedImage = document.querySelector("#enlarged-image");
  const enlargedCaption = document.querySelector("#enlarged-caption");
  enlargedImage.src = images[index].src;
  enlargedCaption.textContent = images[index].alt;
  document.querySelector("#enlarged-container").style.display = "flex";
  document.querySelector("#overlay").style.display = "block";
  currentIndex = index;
}

function hideImage() {
  document.querySelector("#enlarged-container").style.display = "none";
  document.querySelector("#overlay").style.display = "none";
}

for ( i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    showImage(Array.from(images).indexOf(this));
  });
}

document.querySelector("#enlarged-container").addEventListener("click", function() {
  hideImage();
});

document.querySelector("#overlay").addEventListener("click", function() {
  hideImage();
});

document.addEventListener
