const container = document.querySelector('#container');
const gridChange = document.querySelector('#gridChange');
const gridReset = document.querySelector('#gridReset');
const update = document.querySelector('#update');
const rowMaster = document.createElement('div');
const sqMaster = document.createElement('div');
const message = document.createElement('div');

// Grid Builder
rowMaster.style.display = 'flex';
rowMaster.style.justifyContent = 'center';
sqMaster.classList.add('sq');

function createGrid(divisor = 16) {
    let length = container.clientWidth;
    length = length / divisor;
    sqMaster.style.cssText = `height: ${length}px; width: ${length}px`;
    
    container.appendChild(rowMaster);
    for (let i = 0; i < divisor; i++) {
        let sq = sqMaster.cloneNode();
        rowMaster.appendChild(sq);
    }

    for (let i = 0; i < divisor - 1; i++) {
        let row = rowMaster.cloneNode(true);
        container.appendChild(row);
    }

    document.querySelectorAll('.sq').forEach((sq) => {
        sq.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'red';
        });
    });
}

createGrid();

// Button Events
function updateMessage(str) {
    message.textContent = str;
    update.appendChild(message);
    setTimeout(() => update.removeChild(update.firstChild), 1500);
}

gridChange.addEventListener('click', () => {   
    userNum = Number(prompt('Input a new grid size (min 1, max 100)'));
    if (userNum >= 1 && userNum <= 100) {
        document.querySelectorAll('.sq').forEach((sq) => {
            sq.remove();
        });
        while (container.firstChild) 
            container.removeChild(container.firstChild);
        createGrid(userNum);
        updateMessage('Grid Resized!');
    }
    else {
        updateMessage('Error! Try Again.');
    }
});

gridReset.addEventListener('click', () => {
    document.querySelectorAll('.sq').forEach((sq) => {
        sq.style.backgroundColor = 'initial';
    });
    updateMessage('Grid Reset!');
});