function calculate(){
  const prices = document.querySelectorAll(".prices");
  let sum = 0;

  prices.forEach(price=>{
    // Extract numbers from cell
    const value = price.innerText.match(/\d+/g);
    if(value){
      sum += Number(value[value.length-1]);
    }
  });

  const table = document.querySelector("table");

  const old = document.getElementById("ans");
  if(old) old.remove();

  const row = document.createElement("tr");
  const cell = document.createElement("td");

  cell.colSpan = 2;
  cell.id = "ans";
  cell.innerText = sum;

  row.appendChild(cell);
  table.appendChild(row);
}