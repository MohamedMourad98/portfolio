const header = document.querySelector("header");

document.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});
function showtime(){
    var date = new Date();
    var houres = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if(houres > 12){
        houres = houres - 12;
    }
    houres = (houres < 10) ? "0" + houres : houres;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    var time = houres + ":" + minutes + ":" + seconds ;
    document.getElementById("myClock").innerHTML =  time;
    setTimeout(showtime,1000);
}
showtime();
var typed= new Typed(".input", {
    strings: ["  MOHAMED MOURAAD",],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})
































// let menu = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };

// window.onscroll = () => {
//     menu.classList.remove('bx-x');
//     navbar.classList.remove('active');
// };