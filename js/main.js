
class Player {
    constructor() {
        this.positionX = 0;
        this.positionY = 0;
        this.width = 20;
        this.height = 20;

        this.createDomElement();
    }
    createDomElement() {
        // step1: create the element:
        this.domElement = document.createElement("div");

        // step2: add content or modify (ex. innerHTML...)
        this.domElement.id = "player";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";

        //step3: append to the dom: `parentElm.appendChild()`
        const board = document.getElementById("board");
        board.appendChild(this.domElement);
    }
    moveLeft() {
        this.positionX--;
        this.domElement.style.left = this.positionX + "vw";
    }
    moveRight() {
        this.positionX++;
        this.domElement.style.left = this.positionX + "vw";
    }
}


class Obstacle {
    constructor() {
        this.positionX = 40;
        this.positionY = 90;
        this.width = 20;
        this.height = 10;

        this.createDomElement();
    }
    createDomElement() {
        // step1: create the element:
        this.domElement = document.createElement("div");

        // step2: add content or modify (ex. innerHTML...)
        this.domElement.className = "obstacle";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";

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
}, 4000);


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
    }
});