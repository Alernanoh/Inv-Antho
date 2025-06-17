const book = document.getElementById('book');
const backcover = document.querySelector('.book-backcover');
const imgLeft = document.getElementById('img-left');
const imgRight = document.getElementById('img-right');

const pasos = ['cerrado', 'izquierda', 'derecha', 'cerrar'];
let paso = 0;

book.addEventListener('click', () => {
	if (paso === 0) {
		// Abre la página izquierda
		book.classList.add('open-step-1');
		backcover.style.opacity = 1;
		backcover.style.visibility = 'visible';
		imgLeft.src = './assets/2.png'; // Imagen izquierda
		paso = 1;
	} else if (paso === 1) {
		// Abre la página derecha con animación de hoja girando
		const flipPage = document.getElementById('page-flip');
		const imgRight = document.querySelector('.page-right img');
		const imgFlip = flipPage.querySelector('img');

		imgRight.src = './assets/1.png';
		imgFlip.src = './assets/2.png';

		book.classList.remove('open-step-1');
		book.classList.add('open-step-2');

		// Mostrar y animar la hoja de giro
		flipPage.classList.add('flip');

		setTimeout(() => {
			flipPage.classList.remove('flip');
			flipPage.style.opacity = 0;
			flipPage.style.visibility = 'hidden';

			paso = 2;
		}, 1000);
	} else if (paso === 2) {
		// Cierra el libro
		book.classList.remove('open-step-2');
		book.classList.add('closing'); // Clase para animación de cierre
		setTimeout(() => {
			book.classList.remove('closing');
			backcover.style.opacity = 0;
			backcover.style.visibility = 'hidden';
			paso = 0;
		}, 1000); // espera a que termine la animación
	}
});

