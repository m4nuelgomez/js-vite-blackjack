import { cardValue } from './card-value';

// Turno: 0 = Primer jugador y el último será la computadora
export const accumulatePoints = (card, turn, playersPoints, pointsHTML) => {
	playersPoints[turn] = playersPoints[turn] + cardValue(card);
	pointsHTML[turn].innerText = playersPoints[turn];
	return playersPoints[turn];
};
