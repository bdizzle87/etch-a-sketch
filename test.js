const container = document.querySelector('.container');

const gridSize = []

//get object of div names.
function getDivArray() {
    for (let i = 0; i < 16; i++) {
    gridSize[i] = "div" + i
    // div = document.createElement('div');
    // container.appendChild(div);
    }
}

function createDiv() {
    text.forEach(function(el) {
        var div = document.createElement("div");
        div.className = "gridChild";
        div.innerHTML = el;
        document.body.appendChild(div);
    });
}

//
function getDiv() {

    
    for (const [key, value] of Object.entries(gridSize))
        console.log(value);
}
getDivArray();

    