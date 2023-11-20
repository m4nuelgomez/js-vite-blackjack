export const createCard = (card, turn, divPlayersCards) => {
	const imgCard = document.createElement('img');
	imgCard.src = `assets/cards/${card}.png`;
	imgCard.classList.add('card');
	divPlayersCards[turn].append(imgCard);
};
