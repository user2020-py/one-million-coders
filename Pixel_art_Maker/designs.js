// DOM values
const submit = document.querySelector('.submit');
const table = document.getElementById('pixelCanvas');
const colorPicker = document.getElementById('colorPicker');
const height = document.getElementById('inputHeight')
const width = document.getElementById('inputWidth')

// Event Listeners
height.addEventListener('input', getValueHeight);
width.addEventListener('input', getValueWidth);
submit.addEventListener('click', makeGrid);
colorPicker.addEventListener('input', getColorValue);

// Functions of events

// Height value
function getValueHeight() {
    return height.value;
}

// Width value
function getValueWidth() {
    return width.value;
}


// Color value
function getColorValue() {
    let color = colorPicker.value;
    return color;
}


// Construct the table
function makeGrid(e) {

    // clear the table when user enters a new height and width values
    table.innerHTML = '';
    // hieght and width size and color value
    let heightValue = getValueHeight();
    let widthValue = getValueWidth();
    // Rows
    for (let i = 0; i < heightValue; i++) {
        let tr = document.createElement('tr');
        // Columns
        for (let i = 0; i < widthValue; i++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    const td = document.querySelectorAll('td');

    for (let i = 0; i < td.length; i++) {
        td[i].addEventListener('click', changeColor);

        function changeColor() {
            td[i].style.backgroundColor = `${getColorValue()}`;
        }
    }

    e.preventDefault();
}


