<script>
function calculate(){
  const prices = document.querySelectorAll(".prices");
  let sum = 0;

  prices.forEach(price => {
    sum += Number(price.innerText);
  });

  const table = document.querySelector("table");

  // Remove old total row if exists
  const old = document.getElementById("ans");
  if(old){
    old.remove();
  }

  const row = document.createElement("tr");
  const cell = document.createElement("td");

  cell.colSpan = 2;
  cell.id = "ans";
  cell.innerText = sum;

  row.appendChild(cell);
  table.appendChild(row);
}
</script>