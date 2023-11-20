import _ from 'underscore';

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} cardTypes Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} specialCardTypes Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} Retorna un nuevo deck de cartas
 */

export const createDeck = (cardTypes, specialCardTypes) => {
	if (!cardTypes || cardTypes.length === 0)
		throw new Error('cardTypes es obligatorio como un arreglo de string');
	if (!specialCardTypes || specialCardTypes.length === 0)
		throw new Error(
			'specialCardTypes es obligatorio como un arreglo de string'
		);

	let deck = [];

	for (let i = 2; i <= 10; i++) {
		for (let type of cardTypes) {
			deck.push(i + type);
		}
	}

	for (let type of cardTypes) {
		for (let special of specialCardTypes) {
			deck.push(special + type);
		}
	}
	return _.shuffle(deck);
};
