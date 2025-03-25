let list = document.getElementById('list');
let navbtn = document.getElementById('bars');
let moon = document.getElementById('moon-icon');
let nav = document.getElementsByTagName('nav')[0];
let footer = document.getElementsByTagName('footer')[0];
let year = document.getElementsByClassName('year')[0];
let express = document.querySelectorAll(".express_js");
let display_year = new Date();
let darkMode = localStorage.getItem("dark-mode");

year.innerHTML = display_year.getFullYear();

navbtn.addEventListener('click', () => {
    shownav();   
});

moon.addEventListener('click', () => {
    darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
    if (darkMode === "disabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
})

function shownav() {
    list.classList.toggle('sidenav');
    if (list.classList.contains('sidenav')) {
        navbtn.innerHTML = '&times;';
        navbtn.style.fontSize = '55px';
        navbtn.style.top = '2%';
    } else {
        navbtn.innerHTML = '&#9776;';
        navbtn.style.fontSize = '25px';
        navbtn.style.top = '3%';
    }
};

const enableDarkMode = () => {
    moon.classList.add('fa-sun');
    moon.classList.remove('fa-moon')
    localStorage.setItem("dark-mode", "enabled");
    moon.style.transition = 'all 0.7s ease-in';
    moon.style.transform = 'rotate(360deg)';
    document.body.style.backgroundColor = 'black';
    document.body.style.transition = 'all 0.7s ease-in';
    document.body.style.color = 'white';
    nav.style.backgroundColor = ' #05125a';
    footer.style.backgroundColor = '#05125a';
    list.style.backgroundColor = '#05125a';
    express.forEach((element) => {
        element.src = "svg/express_dark.svg";
        element.srcset = "svg/express_dark.svg"
    })
} 
    
const disableDarkMode = () => {
    moon.classList.add('fa-moon');
    moon.classList.remove('fa-sun')
    localStorage.setItem("dark-mode", "disabled");
    moon.style.transition = 'all 0.7s ease-in';
    moon.style.transform = 'rotate(0deg)';
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    nav.style.backgroundColor = 'black';
    footer.style.backgroundColor = 'black';
    list.style.backgroundColor = 'black';
    express.forEach((element) => {
        element.src = "svg/express.svg";
        element.srcset = "svg/express.svg"
    })
}

if (darkMode === "enabled") {
    enableDarkMode(); // set state of darkMode on page load
}

const fades = document.querySelectorAll('.reveal');

const appearOption = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries) 
{entries.forEach(entry => {
    if (!entry.isIntersecting) {
        entry.target.classList.remove('active');
    } else {
        entry.target.classList.add('active');
    }
})}, appearOption)

fades.forEach(fader => {
    appearOnScroll.observe(fader);
});