const container = document.querySelector('#container');
const rowMaster = document.createElement('div');
const sqMaster = document.createElement('div');

rowMaster.style.display = 'flex';
rowMaster.style.justifyContent = 'center';
sqMaster.style.cssText = 'height: 2em; width: 2em; border-style: solid';

container.appendChild(rowMaster);
for (let i = 0; i < 16; i++) {
    let sq = sqMaster.cloneNode();
    rowMaster.appendChild(sq);
}

for (let i = 0; i < 16; i++) {
    let row = rowMaster.cloneNode(true);
    container.appendChild(row);
}
