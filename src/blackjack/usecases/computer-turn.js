import { askCard } from './ask-card';
import { determineWinner } from './determine-winner';
import { accumulatePoints } from './accumulate-points';
import { createCard } from './create-card';

/**
 *
 * @param {Number} minimunPoints Puntos mínimos que la computadora necesita para ganar
 * @param {Array<String>} deck
 */

// Turno de la computadora
export const computerTurn = (
	minimunPoints,
	deck = [],
	playersPoints,
	pointHTML,
	divPlayersCards
) => {
	if (!minimunPoints) throw new Error('Puntos mínimos son necesarios');
	if (!deck) throw new Error('El deck es necesario');

	let computerPoints = 0;

	do {
		const card = askCard(deck);
		computerPoints = accumulatePoints(
			card,
			playersPoints.length - 1,
			playersPoints,
			pointHTML
		);
		createCard(card, playersPoints.length - 1, divPlayersCards);
	} while (computerPoints < minimunPoints && minimunPoints <= 21);

	determineWinner(playersPoints);
};
