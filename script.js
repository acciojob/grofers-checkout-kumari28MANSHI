const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

  const getSum = () => {
  // Select all price cells
  const prices = document.querySelectorAll(".price");

  let total = 0;

  // Add all prices
  prices.forEach((price) => {
    total += Number(price.textContent);
  });

  // Create new row
  const tr = document.createElement("tr");
  const td = document.createElement("td");

  td.colSpan = 2; // single cell across table
  td.textContent = "Total Price: " + total;

  tr.appendChild(td);

  // Append row to table
  const table = document.querySelector("table");
  table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);

