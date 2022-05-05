const naruto = document.querySelector('.naruto');
const background = document.querySelector('.background');

let isJumping = false;
let position = 0;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();
        }
    }
}

function jump() {
    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 80) {
            clearInterval(upInterval);
            //Descendo
            let downInterval = setInterval(() => {
                if (position <= 10) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    naruto.style.bottom = position + 'px';
                }
            }, 20);
        } else {
            // Subindo
            position += 70;
            naruto.style.bottom = position + 'px';
        }
    }, 20);
}

function createakatsuki() {
    const akatsuki = document.createElement('div');
    let akatsukiPosition = 1000;
    let randomTime = Math.random() * 10000;

    

    akatsuki.classList.add('akatsuki');
    akatsuki.style.left = 1000 + 'px';
    background.appendChild(akatsuki)

    let leftInterval = setInterval(() => {
        if (akatsukiPosition < -0) {
            // Saiu da tela
            clearInterval(leftInterval);
            background.removeChild(akatsuki);
        } else if (akatsukiPosition > 0 && akatsukiPosition < 20 && position < 60) {
                // Game over
                clearInterval(leftInterval);
    isGameOver = true;
    document.body.innerHTML = '<h1 class="game-over">Você foi derrotado pela akatsuki!\nTreine mais os seus jutsus para vencer na próxima vez!</h1>';
} else {
    akatsukiPosition -= 10;
    akatsuki.style.left = akatsukiPosition + 'px';
}
  }, 20);

setTimeout(createakatsuki, randomTime);
}

createakatsuki();
document.addEventListener('keyup', handleKeyUp);

