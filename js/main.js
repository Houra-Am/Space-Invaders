document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const resultDisplay = document.querySelector('#result');
    var width = 15;
    var currentShooterIndex = 217;
    var currentInvaderIndex = 0;
    var alienInvaderTakenDown = [];
    var result = 0;
    var direction = 1;
    var invaderId = null;


    // alien invaders

    const alienInvaders = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        30, 31, 32, 33, 34, 35, 36, 37, 38, 39
    ]

    // display the invaders

    alienInvaders.forEach(invader => squares[currentInvaderIndex + invader].classList.add('invader'))

    // display the shooter

    squares[currentShooterIndex].classList.add('shooter');

    //move the shooter

    function moveShooter(e) {
        squares[currentShooterIndex].classList.remove('shooter');
        if (e.keyCode === 37 && currentShooterIndex % width !== 0) {
            if (currentShooterIndex % width !== 0) {
                currentShooterIndex -= 1;
            }
        } else if (e.keyCode === 39) {
            if (currentShooterIndex % width < width - 1) {
                currentShooterIndex += 1;
            }
        }
        squares[currentShooterIndex].classList.add('shooter');
    }
    document.addEventListener('keydown', moveShooter);


    //alien invaders attack

    function moveInvader() {
        const leftEdge = alienInvaders[0] % width === 0;
        const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1;


    }





})