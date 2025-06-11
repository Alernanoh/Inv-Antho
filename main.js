// main.js

const book = document.getElementById('book');
const content = document.getElementById('invitation-content');
const backcover = document.querySelector('.book-backcover');

book.addEventListener('click', () => {
	const isOpen = book.classList.toggle('open');

	if (isOpen) {
		// Mostrar la contraportada al abrir el libro
		backcover.style.opacity = 1;
		backcover.style.visibility = 'visible';

		// Mostrar la invitación después de 1 segundo
		setTimeout(() => {
			content.classList.add('visible');
		}, 1500); // Coincide con la duración de la animación del libro
	} else {
		// Ocultar la invitación al cerrar
		content.classList.remove('visible');

		// Ocultar la contraportada al cerrar
		setTimeout(() => {
			backcover.style.opacity = 0;
			backcover.style.visibility = 'hidden';
		}, 1500); // Esperar hasta que termine la animación de cierre
	}
});
