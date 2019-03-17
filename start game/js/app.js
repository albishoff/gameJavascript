let $start = document.querySelector('#start');
let $game = document.querySelector('#game');

$start.addEventListener('click', () => {
	console.log('start');
	$start.classList.add('hide');

	$game.style.backgroundColor = '#fff';

	renderBox();
});

function renderBox() {}
