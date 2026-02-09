function calculate() {
  const prices = document.querySelectorAll(".prices");
  let sum = 0;

  prices.forEach(price => {
    // Get only digits from the cell
    const numbers = price.innerText.match(/\d+/g);

    if (numbers) {
      // Take the LAST number (latest typed value)
      const latest = numbers[numbers.length - 1];
      sum += parseInt(latest);
    }
  });

  const table = document.querySelector("table");

  // Remove old total if exists
  const old = document.getElementById("ans");
  if (old) old.parentElement.remove();

  // Create total row
  const row = document.createElement("tr");
  const cell = document.createElement("td");

  cell.colSpan = 2;
  cell.id = "ans";
  cell.innerText = sum;

  row.appendChild(cell);
  table.appendChild(row);
}