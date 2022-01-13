let list = document.getElementById('list');
let navbtn = document.getElementById('bars');
let moon = document.getElementById('moon-icon');
let nav = document.getElementsByTagName('nav')[0];
let footer = document.getElementsByTagName('footer')[0];
let github = document.getElementById('github');
let more = document.getElementById('more-projects-link');
let button = document.getElementsByTagName('button');

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

   for( i=0; i < button.length; i++) {
        buttons = button[i];
        if (moon.classList.contains('fa-sun')) {
            buttons.style.color = 'black';
            buttons.style.backgroundColor = 'white';
        } else {
            buttons.style.color = 'white';
            buttons.style.backgroundColor = 'black';
        }
    }

    if (moon.classList.contains('fa-sun')) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        nav.style.backgroundColor = ' #05125a';
        footer.style.backgroundColor = '#05125a';
        list.style.backgroundColor = '#05125a';
        github.style.background = 'radial-gradient( white 66%, black 34%)';
        more.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        nav.style.backgroundColor = 'black';
        footer.style.backgroundColor = 'black';
        list.style.backgroundColor = 'black';
        github.style.background = 'white';
        more.style.color = 'black';
    }
}
