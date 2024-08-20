const contenedorScroll = document.querySelector(".container");

contenedorScroll.addEventListener(
	"wheel",
	(event) => {
		event.preventDefault(); // Evita el scroll vertical predeterminado
		contenedorScroll.scrollLeft += event.deltaY * 5; // Desplaza horizontalmente según el movimiento de la rueda
	},
	{ passive: false }
);

let isDown = false;
let startX;
let scrollLeft;

contenedorScroll.addEventListener("mousedown", (e) => {
	isDown = true;
	contenedorScroll.classList.add("mouse"); // Opcional: cambia el estilo del cursor
	startX = e.pageX - contenedorScroll.offsetLeft;
	scrollLeft = contenedorScroll.scrollLeft;
});

contenedorScroll.addEventListener("mouseleave", () => {
	isDown = false;
	contenedorScroll.classList.remove("mouse");
});

contenedorScroll.addEventListener("mouseup", () => {
	isDown = false;
	contenedorScroll.classList.remove("mouse");
});

contenedorScroll.addEventListener("mousemove", (e) => {
	if (!isDown) return;
	e.preventDefault();
	const x = e.pageX - contenedorScroll.offsetLeft;
	const walk = (x - startX) * 2; // Multiplica por 2 para aumentar la velocidad de desplazamiento
	contenedorScroll.scrollLeft = scrollLeft - walk;
});
