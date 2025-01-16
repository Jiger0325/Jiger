//Automatic SlideShow
let slideIndex = 0;
showSlides()
function showSlides()
{
    let i;
    let slides = document.getElementsByClassName("slides");
    for(i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length)
    {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000);
}

//---------------------------------------------------------------------------------------------------------------------------------------------


//The Best Selling Tours
let currentSlideIndex = 0; // Start with the first tour as active (index 0)
showSlides2(currentSlideIndex);

function currentSlide(n) 
{
    currentSlideIndex = n - 1; // Update to zero-based index for the tapped dot
    showSlides2(currentSlideIndex);
}

function showSlides2(n) 
{
    const slides = document.querySelectorAll('.tour');
    const dots = document.querySelectorAll('.dot');

    // Hide all slides and remove active classes
    slides.forEach(slide => {
        slide.style.display = 'none';
        slide.classList.remove('tour-left', 'active', 'tour-right');
    });

    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    // Display three tours: left, active, right
    slides[currentSlideIndex].style.display = 'block';
    slides[currentSlideIndex].classList.add('tour-left');

    slides[currentSlideIndex + 1].style.display = 'block';
    slides[currentSlideIndex + 1].classList.add('active');

    slides[currentSlideIndex + 2].style.display = 'block';
    slides[currentSlideIndex + 2].classList.add('tour-right');

    // Highlight the correct dot
    dots[currentSlideIndex].classList.add('active'); 
}

//---------------------------------------------------------------------------------------------------------------------------------------------

//Nomad's & Altai peak's Travelogue
document.getElementById("viewMoreButton").addEventListener("click", function() {
    const hiddenImages = document.querySelector(".travelogue-hidden-images");
    hiddenImages.classList.toggle("show"); // Toggle the 'show' class

    if (hiddenImages.classList.contains("show")) {
        this.textContent = "View Less"; // Change button text
    } else {
        this.textContent = "View More"; // Revert button text
    }
});

//---------------------------------------------------------------------------------------------------------------------------------------------

//Partners


let currentSlideIndex2 = 0; // Start at the first image
const slides = document.querySelectorAll('.partner-image');
const totalSlides = slides.length;

showSlides3(currentSlideIndex2);

function showSlides3(n) {
    slides.forEach(slide => slide.style.display = 'none');

    if (window.innerWidth >= 1200) {
        // Desktop view: Show four images and arrows
        for (let i = 0; i < 4; i++) {
            slides[(n + i) % totalSlides].style.display = 'block';
        }
    } else {
        // Mobile view: Show one image
        slides[n % totalSlides].style.display = 'block';
    }
}

function shiftRight() {
    currentSlideIndex2++;

    if (currentSlideIndex2 > document.querySelectorAll('.partner-image').length - 4) {
        currentSlideIndex2 = 0;
    }
    
    showSlides3(currentSlideIndex2);
}
function shiftLeft() {
    currentSlideIndex2--;
    if (currentSlideIndex2 < 0) {
        currentSlideIndex2 = document.querySelectorAll('.partner-image').length - 4; 
    }
    showSlides3(currentSlideIndex2);
}

// Event listeners for arrows
document.querySelector('.left-arrow').addEventListener('click', shiftLeft);
document.querySelector('.right-arrow').addEventListener('click', shiftRight);

// Adjust on window resize
window.addEventListener('resize', () => showSlides3(currentSlideIndex2));


//---------------------------------------------------------------------------------------------------------------------------------------------


//Expand text
function toggleExpand(icon) {
    // Find the expandable content related to this icon
    var content = icon.parentElement.nextElementSibling;

    // Toggle the 'expanded' class to animate the expansion
    content.classList.toggle('expanded');

    // Optionally, change the icon to a minus when expanded
    if (content.classList.contains('expanded')) {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
    } else {
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
    }
}



//Target info
function scrollToSection(sectionId, targetId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });

    // Remove 'clicked' class from all sections
    const sections = document.querySelectorAll('.sticky-content-subinfo');
    sections.forEach(section => {
        section.classList.remove('clicked');
    });

    // Remove 'clicked' class from all sections in '.tour-top-buttons'
    const buttons = document.querySelectorAll('.tour-top-buttons');
    buttons.forEach(button => {
        button.classList.remove('clicked');
    });

    // Add 'clicked' class to the targeted section
    const targetSection = document.getElementById(targetId);
    targetSection.classList.add('clicked');
}

function BookingPaymentSection() {
    scrollToSection('booking-payment-section', 'booking-payment');
}

function VisaInsuranceSection() {
    scrollToSection('visa-insurance-section', 'visa-insurance');
}

function ResponsibilitiesSection() {
    scrollToSection('responsibilities-section', 'responsibilities');
}

function HealthSafetySection() {
    scrollToSection('health-safety-section', 'health-safety');
}

function FaqSection() {
    scrollToSection('faq-section', 'faq');
}

function OverviewSection() {
    scrollToSection('overview-section', 'overview');
}

function TourGallerySection() {
    scrollToSection('tour-gallery-section', 'tour-gallery');
}

function PriceIncludeExcludeSection() {
    scrollToSection('price-include-exclude-section', 'price-include-exclude');
}

function ItinerarySection() {
    scrollToSection('itinerary-section', 'itinerary');
}





//--------------------------------------------------------------------------------------------------------------

//Tour
function toggleExpand2(button) {
    const content = button.nextElementSibling; // Access the expandable content
    const parent = button.closest('.sticky-content-tour'); // Access the parent element

    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded'); // Collapse content
        button.querySelector('span').textContent = '+'; // Change symbol to '+'
        parent.classList.remove('expanded'); // Remove the expanded class from the parent
    } else {
        content.classList.add('expanded'); // Expand content
        button.querySelector('span').textContent = '−'; // Change symbol to '−'
        parent.classList.add('expanded'); // Add the expanded class to the parent
    }
}

//--------------------------------------------------------------------------------------------------------------

//Light and Dark Mode

function setTheme(theme) {
    const body = document.body;
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
    setRadioButton(theme);
}

function setRadioButton(theme) {
    document.getElementById('lightMode').checked = theme === 'light';
    document.getElementById('darkMode').checked = theme === 'dark';
}

document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
});

//--------------------------------------------------------------------------------------------------------------

//Menu

function toggleMenu() {
    const menuLinks = document.getElementById('menuLinks');
    menuLinks.classList.toggle('active');
}

//--------------------------------------------------------------------------------------------------------------

