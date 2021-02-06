function buildSketchPad(size, color) {
    const sketchPad = document.querySelector('#sketchPad');    

    for (let i = 1; i <= size; i++) {
        const cellDiv = document.createElement('div');

        cellDiv;
        cellDiv.style.backgroundColor = color;
        cellDiv.setAttribute('class', 'cellRow');
        cellDiv.setAttribute('id', `row${i}`);
        sketchPad.appendChild(cellDiv);

        for (let j = 1; j <= size; j++) {
            const parent = document.querySelector(`#row${i}`);
            const cellDiv = document.createElement('div');

            cellDiv;
            cellDiv.setAttribute('class', 'cell');
            parent.appendChild(cellDiv);
        }
    }    
}

function removeCellRow() {
    const cellRow = document.querySelectorAll('.cellRow');

    cellRow.forEach((row) => {
        row.remove();
    })
}

function buildSketchSetupQuestions() {
    const parent = document.querySelector('#sketchSetup');
    const form = document.createElement('form');
    const title = document.createElement('h3');
    const padSizeLabel = document.createElement('label');
    const padSize = document.createElement('input');
    const padBackgroundColorLabel = document.createElement('label');
    const padBackgroundColor = document.createElement('input');
    const padColorLabel = document.createElement('label');
    const padColor = document.createElement('input');
    const submitBtn = document.createElement('button');

    form.setAttribute('id', 'sketchPadQuestions');

    title.setAttribute('id', 'setupTitle');
    title.innerText = 'Sketch Pad Setup';

    padSizeLabel.setAttribute('for', 'padSize');
    padSizeLabel.innerText = 'Pad Size:';
    padSize.setAttribute('type', 'number');
    padSize.setAttribute('id', 'padSize');
    padSize.setAttribute('name', 'padSize');
    padSize.setAttribute('min', '10');
    padSize.setAttribute('max', '125');
    padSize.setAttribute('required', '');
    padSize.setAttribute('value', '100');

    padBackgroundColorLabel.setAttribute('for', 'padBackgroundColor');
    padBackgroundColorLabel.innerText = 'Background Color:';
    padBackgroundColor.setAttribute('type', 'color');
    padBackgroundColor.setAttribute('id', 'padBackgroundColor');
    padBackgroundColor.setAttribute('name', 'padBackgroundColor');
    padBackgroundColor.setAttribute('value', '#ffffff');

    padColorLabel.setAttribute('for', 'padColor');
    padColorLabel.innerText = 'Sketch Color:';
    padColor.setAttribute('type', 'color');
    padColor.setAttribute('id', 'padColor');
    padColor.setAttribute('name', 'padColor');
    padColor.setAttribute('value', '#000000');

    submitBtn.setAttribute('type', 'button');
    submitBtn.setAttribute('id', 'submitBtn');
    submitBtn.innerText = 'Submit';

    form.appendChild(title);
    form.appendChild(padSizeLabel);
    form.appendChild(padSize);
    form.appendChild(padBackgroundColorLabel);
    form.appendChild(padBackgroundColor);
    form.appendChild(padColorLabel);
    form.appendChild(padColor);
    form.appendChild(submitBtn);

    parent.appendChild(form);
}

function getSketchSetupAnswers() {
    const sketchSetup = document.querySelector('#sketchSetup');
    const padSize = document.querySelector('#padSize');
    const padBackgroundColor = document.querySelector('#padBackgroundColor');
    const padColor = document.querySelector('#padColor');
    const submitBtn = document.querySelector('#submitBtn'); 

    sketchSetup.style.display = 'flex';

    submitBtn.addEventListener('click', () => {
        removeCellRow();
        buildSketchPad(padSize.value, padBackgroundColor.value);
        draw(padColor.value);
        sketchSetup.style.display = 'none';
    })
}

function draw(color) {
    const cell = document.querySelectorAll('.cell');

    cell.forEach((x) => {
        x.addEventListener('mouseover', () => {
            x.style.backgroundColor = color;
        })
    })
}

const newPadBtn = document.querySelector('#newSketchPad');
const changeColors = document.querySelector('#changeColors');

buildSketchPad(100, 'white');
draw('black');
buildSketchSetupQuestions();

newPadBtn.addEventListener('click', () => {
    getSketchSetupAnswers();
})