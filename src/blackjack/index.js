import _ from 'underscore';
import {
	createDeck,
	askCard,
	computerTurn,
	accumulatePoints,
	createCard
} from './usecases';

let deck = [];

const cardTypes = ['C', 'D', 'H', 'S'],
	specialCardTypes = ['A', 'J', 'Q', 'K'];

let playersPoints = [];

// Referencias del HTML
const btnAsk = document.querySelector('#btnAsk'),
	btnStop = document.querySelector('#btnStop'),
	btnNew = document.querySelector('#btnNew');

const divPlayersCards = document.querySelectorAll('.divCards'),
	pointsHTML = document.querySelectorAll('small');

// Esta función inicializa el juego
const initializeGame = (numPlayers = 2) => {
	deck = createDeck(cardTypes, specialCardTypes);

	playersPoints = [];
	for (let i = 0; i < numPlayers; i++) {
		playersPoints.push(0);
	}

	pointsHTML.forEach((element) => (element.innerText = 0));
	divPlayersCards.forEach((element) => (element.innerHTML = ''));

	btnAsk.disabled = false;
	btnStop.disabled = false;
};

// Eventos
btnAsk.addEventListener('click', () => {
	const card = askCard(deck);
	const playerPoints = accumulatePoints(card, 0, playersPoints, pointsHTML);

	createCard(card, 0, divPlayersCards);

	if (playerPoints > 21) {
		btnAsk.disabled = true;
		btnStop.disabled = true;
		computerTurn(
			playerPoints,
			deck,
			playersPoints,
			pointsHTML,
			divPlayersCards
		);
	} else if (playerPoints === 21) {
		btnAsk.disabled = true;
		btnStop.disabled = true;
		computerTurn(
			playerPoints,
			deck,
			playersPoints,
			pointsHTML,
			divPlayersCards
		);
	}
});

btnStop.addEventListener('click', () => {
	btnAsk.disabled = true;
	btnStop.disabled = true;
	computerTurn(
		playersPoints[0],
		deck,
		playersPoints,
		pointsHTML,
		divPlayersCards
	);
});

btnNew.addEventListener('click', () => {
	initializeGame();
});
