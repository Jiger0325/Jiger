const pictures = ["img/Tavan Bogd.jpeg", "img/Golden Eagle.jpg", "img/Horse Riding.jpg", "img/Kazakh Nomads.jpg", "img/Winter Migration.jpg", "img/Jeep Tour.jpg", "img/Mountain Climbing.jpg", "img/Fly Fishing.jpeg"];
const pictureTexts = ["Altai Trek", "Golden Eagle Tour", "Horse Riding", "Kazakh Nomads", "Nomad's Winter Migration", "Altai 4x4 Tour", "Mountain Climbing", "Fly Fishing"];



let currentPictureIndex = 0;

const pictureElement = document.querySelector(".picture");
const pictureTextElement = document.querySelector(".picture-text");
const prevButton = document.querySelector(".picture-nav.prev");
const nextButton = document.querySelector(".picture-nav.next");

function showPicture(index) {
  if (index < 0) {
    currentPictureIndex = pictures.length - 1;
  } else if (index >= pictures.length) {
    currentPictureIndex = 0;
  }

  pictureElement.src = pictures[currentPictureIndex];
  pictureTextElement.textContent = pictureTexts[currentPictureIndex];
}

prevButton.addEventListener("click", () => {
  currentPictureIndex--;
  showPicture(currentPictureIndex);
});

nextButton.addEventListener("click", () => {
  currentPictureIndex++;
  showPicture(currentPictureIndex);
});

// Function to change pictures automatically every 5 seconds
function changePictureAutomatically() {
  currentPictureIndex++;
  showPicture(currentPictureIndex);
}

// Set an interval to change pictures every 5 seconds
const intervalId = setInterval(changePictureAutomatically, 5000);

showPicture(currentPictureIndex);






// JavaScript to handle navigation
const navLinks = document.querySelectorAll('navbar a');
const contentSections = document.querySelectorAll('div[id]');

navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);

    // Hide all content sections
    contentSections.forEach(section => {
      section.style.display = 'none';
    });

    // Display the selected content section
    document.getElementById(targetId).style.display = 'block';
  });
});




// Show hidden images when clicking on "View more Adventure"
function showMoreImages() {
  var hiddenImages = document.querySelectorAll('.Hidden_Button');

  hiddenImages.forEach(function(image) {
    image.classList.remove('Hidden_Button');
  });

  // Hide the "View More Adventure" button and show the "View Less Adventure" button
  document.getElementById('see-more-button').style.display = 'none';
  document.getElementById('see-less-button').style.display = 'block';
}


