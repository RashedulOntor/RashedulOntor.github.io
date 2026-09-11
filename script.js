// 1. Navbar Shadow on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.boxShadow = 'none';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// 2. Typing Effect using Typed.js (Updated Texts)
var typed = new Typed('.typing-text', {
    strings: [
        'Professional Android App Developer.', 
        'Tech Enthusiast.', 
        'Learner.', 
        'Educator.'
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});

// 3. About Section Tabs functionality
function opentab(tabname, event) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    // Remove active classes from all tabs
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    // Add active class to the clicked tab
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// 4. Scroll Reveal Animation (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));





// 5. Particles.js Configuration for Tech Vibe
if (document.getElementById('particles-js')) {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 70, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#2563eb" }, /* Tech Blue Color */
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": false },
            "size": { "value": 3, "random": true },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#2563eb",
                "opacity": 0.4,
                "width": 1.5
            },
            "move": {
                "enable": true,
                "speed": 2.5,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "grab" }, /* Connects lines to mouse */
                "onclick": { "enable": true, "mode": "push" }, /* Adds more particles on click */
                "resize": true
            },
            "modes": {
                "grab": { "distance": 180, "line_linked": { "opacity": 0.8 } },
                "push": { "particles_nb": 4 }
            }
        },
        "retina_detect": true
    });
}


// 5. Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check Local Storage for saved theme
if(localStorage.getItem('theme') === 'dark'){
    body.classList.add('dark-theme');
    themeToggle.classList.remove('fa-moon');
    themeToggle.classList.add('fa-sun'); // Change icon to sun
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    // Save preference and change icon
    if(body.classList.contains('dark-theme')){
        localStorage.setItem('theme', 'dark');
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.classList.remove('fa-sun');
        themeToggle.classList.add('fa-moon');
    }
});