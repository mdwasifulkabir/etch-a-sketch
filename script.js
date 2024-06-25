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
	const randColor = getRandomColor();
  e.target.style.background = randColor;
})

button.addEventListener("click", () => {
  container.textContent = "";
	let size;
	do {
		size = +prompt("Please input a size (1-100)");	
	} while (isNaN(size) || size > 100 || size <= 0);
    
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

function getRandomColor() {
	const getRandomVal = () => Math.floor(Math.random() * 256);
	const r = getRandomVal();
	const g = getRandomVal();
	const b = getRandomVal();
	return `rgb(${r}, ${g}, ${b})`
}