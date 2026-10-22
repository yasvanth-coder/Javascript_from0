const board = document.querySelector('#board');
let score = document.getElementById("score");
let time = document.getElementById("time");
const rows = 6;
const cols = 20;
const blocks = [];
const snake = [
    {x: 2, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 0}
];
let food= {x:Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows)};
let direction = 'right';
for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const block = document.createElement('div');
        block.classList.add('block');
        // block.textContent = `${row}-${col}`;
        board.appendChild(block);
        blocks[`${row}-${col}`] = block;
    }
}
function render(){
    document.querySelectorAll('.block').forEach(block => {
        block.classList.remove('fill');
        block.classList.remove('food');
    });

    blocks[`${food.y}-${food.x}`].classList.add('food');
    let val = -3;
    snake.forEach((segment) => {
        val += 1;
        score.textContent = `${val}`;
        blocks[`${segment.y}-${segment.x}`].classList.add('fill');
    });
}
render();
setInterval(() => {
    const head = {...snake[0]};

    if (direction === 'left') {
        head.x -= 1;
    } else if (direction === 'right') {
        head.x += 1;
    } else if (direction === 'up') {
        head.y -= 1;
    } else if (direction === 'down') {
        head.y += 1;
    }
    if (head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows) {
        return;
    }
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        food = {
            x: Math.floor(Math.random() * cols),
            y: Math.floor(Math.random() * rows)
        };
    } else {
        snake.pop();
    }
    render();
}, 300);
addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        direction = 'left';
    } else if (event.key === 'ArrowRight') {
        direction = 'right';
    } else if (event.key === 'ArrowUp') {
        direction = 'up';
    } else if (event.key === 'ArrowDown') {
        direction = 'down';
    }
});
let milliSeconds = 0;
    setInterval(() => {
    milliSeconds++;
    time.textContent = `${milliSeconds}`;
    if(milliSeconds == 60000){
        
    }
    }, 1000);


