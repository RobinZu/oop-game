
class Player {
    constructor() {
        this.width = 20;
        this.height = 24;
        this.positionX = 0;
        this.positionY = 0;

        this.createDomElement();
    }
     createDomElement() {
        // step1: create the element:
        this.domElement = document.createElement("div");

        // step2: add content or modify (ex. innerHTML...)
        this.domElement.id = "player";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        //step3: append to the dom: `parentElm.appendChild()`
        const board = document.getElementById("board");
        board.appendChild(this.domElement);
      }
       moveLeft() {
        this.positionX -= 4;
        this.domElement.style.left = this.positionX + "vw";
       }
       moveRight() {
        this.positionX += 4;
        this.domElement.style.left = this.positionX + "vw";
      }
      moveDown(){
        this.positionY -= 4;
        this.domElement.style.bottom = this.positionY + "vh";
      }
      moveUp(){
        this.positionY += 4;
        this.domElement.style.bottom = this.positionY + "vh";
      };
 }


class Obstacle {
    constructor() {
        this.width = 25;
        this.height = 40;
        this.positionX = Math.floor(Math.random() * (100 - this.width + 1)); // random number between 0 and (100 - this.width)
        this.positionY = 100;

        this.createDomElement();
    }
    createDomElement() {

        const classesArr= ["obstacle-cat", "obstacle-giphy", "obstacle-karate",
             "obstacle-2","obstacle-3", "obstacle-4",
            "obstacle-5", "obstacle-6", "obstacle-7", "obstacle-10", "obstacle-8"
            , "obstacle-9","obstacle11", "obstacle-12", "obstacle-13",
              "obstacle-15" ];
        const randomIndex =  Math.floor(Math.random() * classesArr.length ++);
        const randomClass = classesArr[randomIndex];

        // step1: create the element:
        this.domElement = document.createElement("div");

        // step2: add content or modify (ex. innerHTML...)
        this.domElement.className = "obstacle " + randomClass;
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        //step3: append to the dom: `parentElm.appendChild()`
        const board = document.getElementById("board");
        board.appendChild(this.domElement);
    }
    moveDown() {
        this.positionY--;
        this.domElement.style.bottom = this.positionY + "vh";
    }
}



const player = new Player();
const obstacles = []; // array of instances of the class Obstacle

// create obstacles
setInterval(() => {
    const newObstacle = new Obstacle();
    obstacles.push(newObstacle);
}, 5000);


// update all obstacles
setInterval(() => {
    obstacles.forEach((obstacleInstance) => {
        // move current obstacle
        obstacleInstance.moveDown();

        // detect collision
        if(
            player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
            player.positionX + player.width > obstacleInstance.positionX &&
            player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
            player.positionY + player.height > obstacleInstance.positionY
        ) {
            console.log("game over!....");
            location.href = "gameover.html";
        }
    });
}, 50);


document.addEventListener("keydown", (e) => {
    if (e.code === 'ArrowLeft') {
        player.moveLeft();
    } else if (e.code === 'ArrowRight') {
        player.moveRight();
    } else if (e.code === 'ArrowUp'){
        player.moveUp();
    } else if (e.code === 'ArrowDown'){
        player.moveDown();
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('myAudio');
    var autoplayMsg = document.getElementById('autoplayMsg');

    // Try to play the audio
    audio.play().then(function() {
        console.log('Audio is playing automatically.');
    }).catch(function(error) {
        console.log('Autoplay was prevented:', error);

        // Show a message to the user that autoplay was blocked
        autoplayMsg.style.display = 'block';

        // Allow the user to start the audio manually
        autoplayMsg.addEventListener('click', function() {
            audio.play();
        });
    });
});