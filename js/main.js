
class Player {
    constructor() {
        this.positionX = 0;
        this.positionY = 0;
        this.width = 20;
        this.height = 20;

        this.createDomElement();
    }
    createDomElement(){
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


const player = new Player();



document.addEventListener("keydown", (e) => {
    if (e.code === 'ArrowLeft') {
        player.moveLeft();
    } else if (e.code === 'ArrowRight') {
       player.moveRight();
    }
});