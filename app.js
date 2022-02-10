window.onscroll = function() {navbarBg()};
function navbarBg(){
    let navbar = document.getElementsByClassName("navbar")[0];
    let nousYPosition = document.getElementsByClassName("quisommesnous")[0];
    let calcul = nousYPosition.offsetTop - (nousYPosition.offsetHeight+30) ;
    if(window.pageYOffset >= calcul){
        navbar.style.backgroundColor = "rgba(110, 38, 14, 0.90)";
    }
    else{
        navbar.style.backgroundColor = "rgba(160, 82, 45,0)"
    }
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})