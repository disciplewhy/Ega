//toggle class active
const navbarNav = document.querySelector
('.navbar-nav');
//ketika menu bar di klik
document.querySelector('#menu').
onclick = () =>  {
    navbarNav.classList.toggle('active');
};

//klik diluar side bar utk menghilangkan side bar
const menu  = document.querySelector('#menu');

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});