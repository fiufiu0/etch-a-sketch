const main = document.querySelector('.main');
const colorBtn = document.querySelector('.btn-color');
const picker = document.getElementById('picker');
const rainbow = document.getElementById('rainbow');
const clear = document.getElementById('clear');
const range = document.getElementById('range');


clear.onclick = () => clearGrid();


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
    e.target.style.background = 'red'
    
    console.log(e.type)


}

