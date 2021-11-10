const btn = document.createElement('button');
btn.innerHTML=("RELOAD");

document.body.appendChild(btn);



const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c+1);
    container.appendChild(cell).className = "grid-item";
  };

container.addEventListener('mouseover',function(event){
    event.target.style.color='green';


    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  
},false);




};

makeRows(16, 16);