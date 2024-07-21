const body = document.querySelector('body');
const container = document.createElement('div');
container.setAttribute('class', 'container');
body.appendChild(container);
const btn = document.querySelector('button');
let userAnswer = '';

function createRow() {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    container.appendChild(row);
    
    for (i = 0; i < userAnswer; i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'red';
        });
        row.appendChild(square);
    };
    
};

btn.addEventListener('click', () => {
    userAnswer = prompt('Choose grid size (0-100)');
    if (userAnswer > 100) {
        alert('The grid is too big!')
    } else {
        container.querySelectorAll('*').forEach(n => n.remove());
        let i = 0;
        do {
            i += 1; 
            createRow();
        } while (i < userAnswer);
    };
});


