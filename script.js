const container = document.querySelector("#container");
const button = document.querySelector("#newGrid");

for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
	row.classList.add("row");
	
  for (let j = 0; j < 16; j++) {
    const col = document.createElement("div");
		col.classList.add("col");
		row.appendChild(col);
  }
  container.appendChild(row);
}

container.addEventListener("mouseover", (e) => {
  e.target.setAttribute("style", "background: lightBlue;");
})

button.addEventListener("click", () => {
  container.textContent = "";
	let size = +prompt("Please input the side size:");
	for (let i = 0; i < size; i++) {
		const row = document.createElement("div");
		row.classList.add("row");
		
		for (let j = 0; j < size; j++) {
			const col = document.createElement("div");
			col.classList.add("col");
			row.appendChild(col);
		}
		container.appendChild(row);
	}
})