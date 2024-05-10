const container = document.querySelector('#container');
const rowMaster = document.createElement('div');
const sqMaster = document.createElement('div');

let length = container.clientWidth;
let divisor = 16;
length = length / divisor;

rowMaster.style.display = 'flex';
rowMaster.style.justifyContent = 'center';
sqMaster.classList.add('sq');
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

const sqAll = document.getElementsByClassName('sq');
Array.from(sqAll).forEach((sq) => {
    sq.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'red';
    });
});