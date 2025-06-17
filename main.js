const book = document.getElementById('book');
const backcover = document.querySelector('.book-backcover');
const imgLeft = document.getElementById('img-left');
const imgRight = document.getElementById('img-right');

const pasos = ['cerrado', 'izquierda', 'derecha', 'cerrar'];
let paso = 0;

book.addEventListener('click', () => {
	if (paso === 0) {
		book.classList.add('open-step-1');
		backcover.style.opacity = 1;
		backcover.style.visibility = 'visible';
		imgLeft.src = './assets/1.png';
		paso = 1;
	} else if (paso === 1) {
		const flipPage = document.getElementById('page-flip');
		const imgRight = document.querySelector('.page-right img');
		const imgFlip = flipPage.querySelector('img');

		imgRight.src = './assets/2.png';
		imgFlip.src = './assets/1.png';

		book.classList.remove('open-step-1');
		book.classList.add('open-step-2');

		flipPage.classList.add('flip');

		setTimeout(() => {
			flipPage.classList.remove('flip');
			flipPage.style.opacity = 0;
			flipPage.style.visibility = 'hidden';

			paso = 2;
		}, 1000);
	} else if (paso === 2) {
		book.classList.remove('open-step-2');
		book.classList.add('closing');
		setTimeout(() => {
			book.classList.remove('closing');
			backcover.style.opacity = 0;
			backcover.style.visibility = 'hidden';
			paso = 0;
		}, 1000);
	}
});

