const main = document.querySelector('.main')


function getGrid(size){
    for(let i = 1; i <= size * size; i++){
            const div = document.createElement('div');
            div.classList.add('grid')
            main.appendChild(div)
    }
}

getGrid(16);

