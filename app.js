const main = document.querySelector('.main');
const colorBtn = document.querySelector('.btn-color');
const picker = document.getElementById('picker');
const rainbow = document.getElementById('rainbow');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');
const range = document.getElementById('range');

let COLOR = '#d4a373';
let MODE = 'color';

clear.onclick = () => clearGrid();
rainbow.onclick = () => setMode('rainbow');
colorBtn.onclick = () => setMode('color');
picker.onclick = () => setMode('picker');
eraser.onclick = () => setMode('eraser');


function getGrid(size){
    for(let i = 1; i <= size * size; i++){
            const div = document.createElement('div');
            div.classList.add('grid')

            div.addEventListener('mouseover', changeColor);
            div.addEventListener('mousedown', changeColor);

            main.appendChild(div)
    }
}

getGrid(16); // initial grid

function clearGrid() {
    main.innerHTML = ''
    getGrid(16)
}

function changeColor(e){
   
    if(MODE === 'rainbow'){
        e.target.style.background = randomColor();
    } else if (MODE === 'eraser'){
        e.target.style.background = "#fefae0";
    } else if (MODE === 'color'){
        e.target.style.background = COLOR;
    } else if (MODE === 'picker'){
        e.target.style.background = picker.value;
    }

}

function setMode(mode){
    if(mode === 'rainbow'){
        MODE = 'rainbow';
    } else if(mode === 'eraser'){
        MODE = 'eraser'
    } else if(mode === 'color'){
        MODE = 'color'
    } else if(mode === 'picker'){
        MODE = 'picker';
    }
}

function randomNumber(){
    return Math.floor(Math.random() * 255);
}

function randomColor(){
     let r = randomNumber();
     let g = randomNumber();
     let b = randomNumber();
    
    return `rgb(${r},${g},${b})`;

}
