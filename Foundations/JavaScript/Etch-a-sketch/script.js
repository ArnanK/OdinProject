let size = 16;
let board = document.getElementById('board');
let statusDC = 'draw';

let initialize = (n)=>{
    for (let i = 0; i < n * n; i++) {
        // Create a new div element for each box
        let box = document.createElement('div');
        box.className = `box${i}`
        box.style.border = '1px  black';
        // Append the box to the board
        board.appendChild(box);
    }
    board.style.gridTemplateColumns = `repeat(${n} ,1fr)`;
    board.style.gridTemplateRows = `repeat(${n} ,1fr)`;
    
}

let removeBoxes = ()=>{
    board.attributes.style.gridTemplateColumns= ``;
    board.attributes.style.gridTemplateRows= ``;
    while(board.hasChildNodes()){
        board.removeChild(board.firstChild);
    }
}

//Start Program Here
function start(){
    initialize(size);
    setupBoxes();
}


//Draw Event Handler
function setupBoxes(){
    let inputBoxes = document.querySelectorAll('.board div');
    let isMouseDown = false;
    inputBoxes.forEach(inputBox =>{
        inputBox.addEventListener('mousedown',()=>{
            isMouseDown = true;
            if(statusDC =='draw')inputBox.style.cssText='background-color:black;';
            else if(statusDC =='erase')inputBox.style.cssText='background-color:white;';
        });
        inputBox.addEventListener('mouseup',()=>{
            isMouseDown = false;
        });
        inputBox.addEventListener('mouseover', ()=>{
            if(isMouseDown){
                if(statusDC =='draw')inputBox.style.cssText='background-color:black;';
                else if(statusDC =='erase')inputBox.style.cssText='background-color:white;';
            }
        })
    });
}

//Button Event Handlers
let clearButton = document.getElementById('clear');
clearButton.addEventListener('click',()=>{
    for (let i = 0; i < board.children.length; i++) {
        let child = board.children[i];
        child.style.backgroundColor = 'white';
    }
})

let drawButton = document.getElementById('draw');
drawButton.addEventListener('click',()=>{
    statusDC='draw';
    drawButton.style = 'color: #EEF0F2;background-color: #1C1C1C;'
    eraserButton.style = 'color: #1C1C1C;background-color: #EEF0F2;'
});
let eraserButton = document.getElementById('erase');
eraserButton.addEventListener('click',()=>{
    statusDC='erase';
    eraserButton.style = 'color: #EEF0F2;background-color: #1C1C1C;'
    drawButton.style = 'color: #1C1C1C;background-color: #EEF0F2;'
})

let slider = document.getElementById('myRange');
let sizeText = document.getElementById('sizeText');
slider.addEventListener('input', ()=>{
    size = slider.value;
    sizeText.innerText = `${slider.value}x${slider.value}`;
    removeBoxes();
    initialize(size);
    setupBoxes();
})



//start
start();