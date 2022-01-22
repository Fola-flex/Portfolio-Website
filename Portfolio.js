let list = document.getElementById('list');
let navbtn = document.getElementById('bars');
let moon = document.getElementById('moon-icon');
let nav = document.getElementsByTagName('nav')[0];
let footer = document.getElementsByTagName('footer')[0];

navbtn.addEventListener('click', () => {
    shownav();   
});

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

function darkMode() {
    moon.classList.toggle('fa-sun');
  

    if (moon.classList.contains('fa-sun')) {
        moon.style.transition = 'all 1s ease-in';
        moon.style.transform = 'rotate(360deg)';
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        nav.style.backgroundColor = ' #05125a';
        footer.style.backgroundColor = '#05125a';
        list.style.backgroundColor = '#05125a';
    } else {
        moon.style.transition = 'all 1s ease-in';
        moon.style.transform = 'rotate(0deg)';
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        nav.style.backgroundColor = 'black';
        footer.style.backgroundColor = 'black';
        list.style.backgroundColor = 'black';
    }
}

    
