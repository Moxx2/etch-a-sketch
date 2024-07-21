const body = document.querySelector('body');
const container = document.createElement('div');
container.setAttribute('class', 'container');
body.appendChild(container);

function createRow() {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    container.appendChild(row);
    
    for (i = 0; i < 5; i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'red';
        });
        row.appendChild(square);
    };
    
};

createRow();
createRow();
