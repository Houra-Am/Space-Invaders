//mouvment
const move = document.querySelector('.move');
const titre = document.querySelector('#title');

//moving event
move.addEventListener("mousemove", (e) => {
    var xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    var yAxis = (window.innerHeight / 2 - e.pageY) / 2;
    titre.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

move.addEventListener("mouseenter", (e) => {
    titre.style.transition = "none";
});

//Animation out
move.addEventListener("mouseleave", (e) => {
    titre.style.transition = "all 0.5s ease";
    titre.style.transform = `rotateY(0deg) rotateX(0deg)`;
});