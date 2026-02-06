function calculate(){
  const prices = document.querySelectorAll(".prices");
  let sum = 0;

  prices.forEach(price => {
    // Remove everything except digits and spaces
    const cleaned = price.innerText.replace(/[^\d ]/g, "").trim();

    // Split by space and take last value
    const parts = cleaned.split(" ");
    const latest = parts[parts.length - 1];

    sum += Number(latest);
  });

  const table = document.querySelector("table");

  // Remove old total
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