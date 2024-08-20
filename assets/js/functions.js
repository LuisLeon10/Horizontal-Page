const contenedorScroll = document.querySelector(".container");

contenedorScroll.addEventListener(
	"wheel",
	(event) => {
		if (window.matchMedia("(min-width: 768px)").matches) {
			// Para pantallas más grandes (escritorios, tablets en modo horizontal)
			event.preventDefault(); // Evita el scroll vertical predeterminado
			contenedorScroll.scrollLeft += event.deltaY * 5; // Desplaza horizontalmente
		} else {
			// Para pantallas más pequeñas (móviles, tablets en modo vertical)
			contenedorScroll.scrollTop += event.deltaY * 5; // Desplaza verticalmente
		}
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
