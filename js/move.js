// modification 02 - landing page music
var backgroundMusic = new sound("sfx/spaceinvaders1.wav");

//mouvment
const move = document.querySelector('.move');
const titre = document.querySelector('#title');

//modification 04 - start game function
function startGame() {
    myGameArea.start();
}

//moving event
move.addEventListener("mousemove", (e) => {
    var xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    var yAxis = (window.innerHeight / 2 - e.pageY) / 2;
    titre.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    // modification 05 - start music
    backgroundMusic.play();
});

move.addEventListener("mouseenter", (e) => {
    titre.style.transition = "none";
});

//Animation out
move.addEventListener("mouseleave", (e) => {
    titre.style.transition = "all 0.5s ease";
    titre.style.transform = `rotateY(0deg) rotateX(0deg)`;
});


// modification 03 - backgroundMusic function

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function() {
        this.sound.pause();
    }
};