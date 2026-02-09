function calculate() {
  const prices = document.querySelectorAll(".prices");
  let sum = 0;

  prices.forEach(price => {
    // Extract last numeric value from cell
    const numbers = price.innerText.match(/\d+/g);
    if (numbers) {
      sum += Number(numbers[numbers.length - 1]);
    }
  });

  const table = document.querySelector("table");

  // Remove old total row if it exists
  const old = document.getElementById("ans");
  if (old) old.remove();

  // Create new row
  const row = document.createElement("tr");
  const cell = document.createElement("td");

  cell.colSpan = 2;
  cell.id = "ans";
  cell.innerText = sum;

  row.appendChild(cell);
  table.appendChild(row);
}