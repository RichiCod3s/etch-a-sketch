const container = document.querySelector('.container');

for(let i = 0; i< 16*16; i++){
   let div = document.createElement('div');
   
    div.classList.add("grid-item");

    div.addEventListener('mouseover', function() {
        div.style.backgroundColor = 'blue';
    });

    div.addEventListener('mouseout', function() {
        div.style.backgroundColor = 'blue';
    });


    container.appendChild(div);
}

// resize button popup
button = document.querySelector('#resize-button');

button.addEventListener("click", () => {
    size = prompt("Please enter the number of squares per side for your grid");
});