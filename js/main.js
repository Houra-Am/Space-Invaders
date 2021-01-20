// change the timer (set interval)

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

        if ((leftEdge && direction === -1) || (rightEdge && direction === 1)) {
            direction = width;
        } else if (direction === width) {
            if (leftEdge) {
                direction = 1;
            } else {
                direction = -1
            };
        };

        for (var i = 0; i <= alienInvaders.length - 1; i++) {
            squares[alienInvaders[i]].classList.remove('invader');
        };
        for (var i = 0; i <= alienInvaders.length - 1; i++) {
            alienInvaders[i] += direction;
        };

        for (var i = 0; i <= alienInvaders.length - 1; i++) {
            squares[alienInvaders[i]].classList.add('invader');
        };


        //game over
        if (squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
            resultDisplay.textContent = 'Game Over';
            squares[currentShooterIndex].classList.add('boom');
            clearInterval(invaderId);
        };

        for (var i = 0; i <= alienInvaders.length - 1; i++) {
            if (alienInvaders[i] > (squares.length - (width - 1))) {
                resultDisplay.textContent = 'Game Over';
                resultDisplay.classList.add("alert");

                clearInterval(invaderId);
            };
        };

    };
    invaderId = setInterval(moveInvader, 200);

    //shoot at aliens
    function shoot(e) {
        var laserId = null;
        var currentLaserIndex = currentShooterIndex;

        function moveLaser() {
            squares[currentLaserIndex].classList.remove("laser");
            currentLaserIndex -= width;
            squares[currentLaserIndex].classList.add("laser")
            if (squares[currentLaserIndex].contains('invader')) {
                squares[currentInvaderIndex].classList.remove('laser')
                squares[currentInvaderIndex].classList.remove('invader')
                squares[currentInvaderIndex].classList.add('boom')

                setTimeout(() => squares[currentLaserIndex].classList.remove('boom'), 250)
                clearInterval(laserId)

                const alienTakenDown = alienInvaders.indexOf(currentLaserIndex)
                alienInvaderTakenDown.push(alienTakenDown)
                result++
                resultDisplay.textContent = result
            }
            if (currentLaserIndex < width) {
                clearInterval(laserId)
                setTimeout(() => squares[currentLaserIndex].classList.remove('laser'), 100)
            }
        }

        document.addEventListener('keyup', e => {
            if (e.keyCode === 32 || e.keyCode === 38) {
                laserId = setInterval(moveLaser, 100)
            };
        });

    };
    document.addEventListener("keyup", shoot);


});