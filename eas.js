const container = document.querySelector('.container');
let size = 16;
const totalWidth = 500;

// create initial grid
for(let i = 0; i< size*size; i++){
    itemSize = totalWidth / size;
    let div = document.createElement('div');
    div.classList.add("grid-item");
    // new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad.
        div.style.width = itemSize + "px";
        div.style.height = itemSize + "px";

    div.addEventListener('mouseover', function() {
        var randomColor = Math.floor(Math.random()*16777215).toString(16); 
        div.style.backgroundColor = "#" + randomColor;
    });


    container.appendChild(div);
}

// resize grid-items (pixels) and fit in to fixed size container
function createGrid(size) {
    const container = document.querySelector('.container');
    container.innerHTML = ''; // Clear existing grid

    itemSize = totalWidth / size;

    for (let i = 0; i < size * size; i++) {
        let div = document.createElement('div');
        div.classList.add("grid-item");

        // new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad.
        div.style.width = itemSize + "px";
        div.style.height = itemSize + "px";

        div.addEventListener('mouseover', function() {
            var randomColor = Math.floor(Math.random()*16777215).toString(16); 
            div.style.backgroundColor = "#" + randomColor;
        });
        
        container.appendChild(div);
    }
}

// resize button popup
button = document.querySelector('#resize-button');

button.addEventListener("click", () => {
      // Process the user input
      let size = parseInt(prompt("Enter the number of squares per side (max 100):"), 10);

    if (isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    createGrid(size);
}
);


