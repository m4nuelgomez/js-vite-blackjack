export const determineWinner = (playersPoints) => {
	const [minimunPoints, computerPoints] = playersPoints;

	setTimeout(() => {
		if (computerPoints === minimunPoints) {
			alert('Nadie gana');
		} else if (minimunPoints > 21) {
			alert('La computadora gana');
		} else if (computerPoints > 21) {
			alert('Jugador gana');
		} else {
			alert('Computadora gana');
		}
	}, 100);
};
