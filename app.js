const main = document.querySelector('.main');
const colorBtn = document.querySelector('.btn-color');
const picker = document.getElementById('picker');
const rainbow = document.getElementById('rainbow');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');
const range = document.getElementById('range');
const btn = document.querySelectorAll('button');
const p = document.getElementById('value');

let MODE = 'color';
let mouse = false;

clear.onclick = () => clearGrid();
rainbow.onclick = () => setMode('rainbow');
colorBtn.onclick = () => setMode('color');
picker.onclick = () => setMode('picker');
eraser.onclick = () => setMode('eraser');
range.onchange = () => {
    getGrid(range.value); // reload grid if range is changed
    p.textContent = `${range.value} x ${range.value}`;
    clearGrid(); // clear grid if size is changed
}


function getGrid(size){
    for(let i = 1; i <= size * size; i++){
            const div = document.createElement('div');
            div.classList.add('grid');

            main.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
            main.style.gridTemplateRows = `repeat(${size}, 1fr)`;

            div.addEventListener('mouseover', changeColor);
            div.addEventListener('mousedown', changeColor);

            main.appendChild(div)
    }
}

getGrid(16); // initial grid 16x16

function clearGrid() {
    main.innerHTML = '';
    getGrid(range.value);
}

main.onmousedown = () => {
    mouse = !mouse;
}

main.onmouseup = () => {
    mouse = !mouse;
}


function changeColor(e){
    
    if(e.type === 'mouseover' && !mouse) {
        return
    } 
    
    if(MODE === 'rainbow'){
        e.target.style.background = randomColor();
    } else if (MODE === 'eraser'){
        e.target.style.background = "#fefae0";
    } else if (MODE === 'picker' || MODE === 'color'){
        e.target.style.background = picker.value;
    } 

}

function setMode(mode){
    return MODE = mode;
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
