// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '15px 5%';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.padding = '20px 5%';
        navbar.style.background = 'rgba(255, 255, 255, 0.9)';
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Testimonial Slider Auto Scroll
const slider = document.querySelector('.testimonial-slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});

// Auto-scroll testimonials
let scrollAmount = 0;
const scrollSpeed = 1;
const scrollDelay = 3000;

function autoScrollTestimonials() {
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
    } else {
        scrollAmount += scrollSpeed;
    }
    slider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

let scrollInterval = setInterval(autoScrollTestimonials, scrollDelay);

// Pause auto-scroll on hover
slider.addEventListener('mouseenter', () => {
    clearInterval(scrollInterval);
});

slider.addEventListener('mouseleave', () => {
    scrollInterval = setInterval(autoScrollTestimonials, scrollDelay);
});

// Animation on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.destination-card, .experience-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animation
document.querySelectorAll('.destination-card, .experience-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Previous JavaScript remains the same, add these new functions

// Country A-Z Filter Functionality
const alphaButtons = document.querySelectorAll('.alpha-btn');
const destinationCards = document.querySelectorAll('.destination-card');

alphaButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        alphaButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.dataset.filter;
        
        destinationCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
            } else {
                const country = card.dataset.country.toLowerCase();
                if (country.startsWith(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});

// City Search Functionality
const citySearchInput = document.getElementById('city-search-input');
const citySearchBtn = document.getElementById('city-search-btn');

function performCitySearch() {
    const searchTerm = citySearchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        destinationCards.forEach(card => {
            card.style.display = 'block';
        });
        return;
    }
    
    destinationCards.forEach(card => {
        const city = card.dataset.city.toLowerCase();
        if (city.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

citySearchBtn.addEventListener('click', performCitySearch);
citySearchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        performCitySearch();
    }
});

// Reset filters when clicking on Destinations in nav
document.querySelector('a[href="#destinations"]').addEventListener('click', () => {
    alphaButtons.forEach(btn => {
        if (btn.dataset.filter === 'all') {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    citySearchInput.value = '';
    destinationCards.forEach(card => {
        card.style.display = 'block';
    });
});