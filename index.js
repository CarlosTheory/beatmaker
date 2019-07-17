//Despues que cargue el contenido, el codigo dentro del arrow function va 
// a ejecutarse

window.addEventListener('load', () => {
	const sounds = document.querySelectorAll('.sound');
	const pads = document.querySelectorAll('.pads div');
	const visual = document.querySelector('.visual');
	const colors = [
		'#60d494',
		'#1B998B',
		'#ED217C',
		'#2D3047',
		'#FFFD82',
		'#FF9B71'
	];


	const teclasPermitidas = [
		'q', 'w', 'e', 'r', 't', 'y'
	];

		// const teclaPresionada = document.addEventListener('keydown', (event) => {
		// 	console.log(event.key);

		// 	teclasPermitidas.forEach((tecla, index), function(){
		// 		console.log(tecla[index]);
		// 	});

		// 	console.log(teclasPermitidas[index]);
		// });

	// teclas.forEach((tecla, index) => {
	// 	tecla.addEventListener('keydown', function() {
	// 		console.log(tecla);
	// 	});
	// });

// Sonidos
	//Evento al clickear sobre el pad
	pads.forEach((pad, index) => {
		pad.addEventListener('click', function(){

			//Resetear el sonido, para que cada vez que exista el evento 'Click'
			sounds[index].currentTime = 0;

			sounds[index].play();

			createBubbles(index);
		});		
	});

	//Funcion que hace burbujas 
	const createBubbles = (index) => {
		const bubble = document.createElement('div');
		visual.appendChild(bubble); 
		bubble.style.backgroundColor = colors[index];
		bubble.style.animation = 'jump 1s ease';

		bubble.addEventListener('animationend', function(){
			visual.removeChild(this);
		});

		console.log(index);
	};



// console.log(sounds[0]);
});

