const Canvas = document.getElementById("mycanvas")
const ctx = Canvas.getContext('2d');
let score = document.getElementsByClassName('score');
let gameOver = false;
let qs =+prompt("Choose difficulty: easy(e), medium(m), hard(h), insane(i)")
let interval = setInterval(move, 100)
let nud= 20;
let row = 20;
let clum = 20;
let snakeX = nud * 5;
let snakeY = nud * 5;
let alimY = nud * 10;
let alimX = nud * 10;
let snakelocX = 0;
let snakelocY = 0;
Canvas.height = row * nud;
Canvas.width = clum * nud;
let snake= []
let scoreCount = score.innerText;

move();
alim();
ideh();
// if(ctx.beginPath()){
//     
// }
// gameOver.join()
function check(){
    if(qs==easy && qs == e ){
        let interval = setInterval(move, 1000)
    }else if(qs == medium && qs ==m){
        let interval = setInterval(move, 100)
    }else if(qs == hard && qs == h){
        let interval = setInterval(move, 10)
    }else if( qs == insane && qs == i){
        let interval = setInterval(move, 1)
    }
    // if(qs == gigaChad){
    //     let interval = setInterval(move, 0.1)
    // }
}
function move(){
    if(gameOver){
        return
    }
    ctx.beginPath()
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,Canvas.width,Canvas.height)
    
    ctx.fillStyle="#AF270A"
    ctx.fillRect(alimX, alimY, nud, nud)

  

    for(let i = snake.length-1; i>0; i--){
        snake[i] = snake[i-1];
    }

    ctx.fillStyle="#1c8e40"
    snakeX += snakelocX * nud;
    snakeY += snakelocY * nud;
    ctx.fillRect(snakeX, snakeY, nud, nud)
    
    ctx.closePath();
    
    if(snakeX>=Canvas.width){
        alert("U LOSE, Ur SCOre is"+ " " + snake.length);
        restart()
    }
    if(snakeX<0){
        alert("U LOSE, Ur SCOre is"+ " " + snake.length)
        restart()
    }
    if(snakeY>=Canvas.height){
        alert("U LOSE, Ur SCOre is"+ " " + snake.length)
        restart()
        
    }
    if(snakeY<  0){
        alert("U LOSE, Ur SCOre is"+ " " + snake.length)
        restart();
        
    }
    console.log(snakeX)
    if(snake.length){
        snake[0] = [snakeX, snakeY];
    }
    for(let i = 0; i<snake.length; i++){
        ctx.fillRect(snake[i][0], snake[i][1], nud, nud)
    }
    for (let i = 1; i < snake.length; i++) {
        if (snakeX == snake[i][0] && snakeY == snake[i][1]) {
            GameOver();
            restart();
        }
    }
    
    if(snakeX * nud == alimX * nud && snakeY * nud == alimY * nud){
        alim();
        snake.push([alimX, alimY])
        document.getElementById("score").innerText =
              parseInt(document.getElementById("score").innerText) + 1;
    }
}
function restart(){
    snakeX = Math.floor(Math.random() * clum) * nud;
    snakeY = Math.floor(Math.random() * row) * nud;
    alim();
    snake.length=0
    snakelocX=0;
    snakelocY=0;
    document.getElementById("score").innerText = 0;
}
function ideh(){
    
}
function alim(){
    alimX = Math.floor(Math.random() * clum) * nud;
    alimY = Math.floor(Math.random() * row) * nud;
}
addEventListener("keydown", hodloh);
function hodloh(e){
    
    switch(e.key){
        case 'ArrowUp':
            if(snakelocY != 1){
                snakelocX = 0;
                snakelocY = -1;
            }
            break;
    }
    switch(e.key){
        case 'ArrowDown':
            if(snakelocY != -1){
                snakelocX = 0;
                snakelocY = 1;
            }
            break;
    }
    switch(e.key){
        case 'ArrowLeft':
            if(snakelocX !=1){
                snakelocX = -1;
                snakelocY = 0;
            }
            break;
    }
    switch(e.key){
        case 'ArrowRight':
            if(snakelocX !=-1){
                snakelocX = 1;
                snakelocY = 0;
            }
            break;
    }
    switch(e.key){
        case 'd':
            if(snakelocX != -1){
                snakelocX = 1;
                snakelocY = 0;
            }
            break;
    }
    switch(e.key){
        case 'w':
            if(snakelocY != 1){
                snakelocX = 0;
                snakelocY = -1;
            }
            break;
    }
    switch(e.key){
        case 's':
            if(snakelocY != -1){
                snakelocX = 0;
                snakelocY = 1;
            }
            break;
    }
    switch(e.key){
        case 'a':
            if(snakelocX !=1){
                snakelocX = -1;
                snakelocY = 0;
            }
            break;
    }
    switch(e.key){
        case 'd':
            if(snakelocX != -1){
                snakelocX = 1;
                snakelocY = 0;
            }
            break;
    }
}
hodloh();
function GameOver(){
    
    alert("Game Over, Your score is: " + snake.length);
    restart()
}