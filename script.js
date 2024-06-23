const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
	row.classList.add("row");
	
  for (let j = 0; j < 16; j++) {
    const col = document.createElement("div");
		col.classList.add("col");
		col.textContent = j;
		row.appendChild(col);
  }
  container.appendChild(row);
}

container.addEventListener("mouseover", (e) => {
  e.target.setAttribute("style", "background: blue;");
})