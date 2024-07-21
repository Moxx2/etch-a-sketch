const body = document.querySelector('body');
const container = document.createElement('div');
container.setAttribute('class', 'container');
body.appendChild(container);

for (i = 0; i <=15; i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'red';
    });
    container.appendChild(square);
};
