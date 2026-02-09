function calculate() {
  const prices = document.querySelectorAll(".prices");
  let sum = 0;

  prices.forEach(price => {
    const text = price.innerText.trim();

    // Extract number from the END of the string
    const match = text.match(/(\d+)$/);

    if (match) {
      sum += Number(match[1]);
    }
  });

  const table = document.querySelector("table");

  // Remove old total row if exists
  const old = document.getElementById("ans");
  if (old) old.parentElement.remove();

  // Create new total row
  const row = document.createElement("tr");
  const cell = document.createElement("td");

  cell.colSpan = 2;
  cell.id = "ans";
  cell.innerText = sum;

  row.appendChild(cell);
  table.appendChild(row);
}