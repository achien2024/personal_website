let previousIndex = null; // To keep track of the previous image index
const totalImages = 352; // Total number of images

// Function to generate a random number between 1 and totalImages
function getRandomImageIndex() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * totalImages) + 1; // Generate a number between 1 and 376
  } while (randomIndex === previousIndex); // Ensure it's not the same as the previous
  previousIndex = randomIndex; // Update the previous index
  return randomIndex;
}

// Function to update the image source
function nextImage() {
  const imageElement = document.getElementById('slideshowImage');

  imageElement.classList.add("fade-out")

  setTimeout(() => {
    
    const imageIndex = getRandomImageIndex();
    imageElement.src = `photography/random/${String(imageIndex).padStart(3, '0')}.JPG`; // Format to 001.JPG

    imageElement.onload = () => {
        imageElement.classList.remove("fade-out");
        imageElement.classList.add("fade");
    }
    setTimeout(() => {
        imageElement.classList.remove("fade");
      }, 750); // Match this duration to the fade-in duration
    
    }, 750);
}

function reload()
{
    const imageElement = document.getElementById('slideshowImage');
    const imageIndex = getRandomImageIndex();
    imageElement.src = `photography/random/${String(imageIndex).padStart(3, '0')}.JPG`; // Format to 001.JPG

    imageElement.onload = () => {
        imageElement.style.opacity = '1'; // Fade in the image
    };
}

// Generate a random image on page load
window.onload = function() {
  reload();
};