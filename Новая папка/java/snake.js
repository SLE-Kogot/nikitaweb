const canvas  = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let skoreAr = document.getElementById("div")


const ground = new Image();
ground.src = "img/ground.png"

const food = new Image();
food.src = "img/apple.png"

const box = 40;
let skore = 0

let apple = {
    x: Math.floor(Math.random() * 15) * box,
    y: Math.floor(Math.random() * 15) * box,
}

let snake = [];
snake[0] = {
    x: 7 * box,
    y: 7 * box
}

let dir;
document.addEventListener("keydown", direction);

function direction(event) {
    if (event.keyCode == 37 && dir != "right") dir = "left"
    else if (event.keyCode == 38 && dir != "down") dir = "up"
    else if (event.keyCode == 39 && dir != "left") dir = "right"
    else if (event.keyCode == 40 && dir != "up") dir = "down"
}

function drawGame() {
    ctx.drawImage(ground, 0, 0);
    ctx.drawImage(food, apple.x, apple.y);

    ctx.fillStyle = "green";
    for (let i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        
    }

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    if ( snakeX == apple.x && snakeY == apple.y){
        apple ={
            x: Math.floor(Math.random() * 15) * box,
            y: Math.floor(Math.random() * 15) * box,
        }
        skore++
    }else{
        snake.pop();
    }


    if (snakeX < box || snakeX > box * 15 || snakeY < box || snakeY > box * 15){
        clearInterval(game);
    }

    if (dir == "left")  snakeX -= box;
    if (dir == "right") snakeX += box;
    if (dir == "up")    snakeY -= box;  
    if (dir == "down")  snakeY += box;

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); 
    
    skoreAr.innerHTML = (skore)
    
    

    
}

let game = setInterval(drawGame, 100);