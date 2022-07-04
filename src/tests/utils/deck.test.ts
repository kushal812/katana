import Deck from '../../utils/deck';
import { typeOfDeck } from '../../config';

describe('Should test the dec class', () => {
  const deck = new Deck({ type: typeOfDeck.SHORT, shuffle: false });

  it('should create a deck', () => {
    expect(deck.getDeck()).toEqual([
      { code: 'AH', suit: 'HEARTS', value: 'ACE' },
      { code: '7H', suit: 'HEARTS', value: 7 },
      { code: '8H', suit: 'HEARTS', value: 8 },
      { code: '9H', suit: 'HEARTS', value: 9 },
      { code: '10H', suit: 'HEARTS', value: 10 },
      { code: 'JH', suit: 'HEARTS', value: 'JACK' },
      { code: 'QH', suit: 'HEARTS', value: 'QUEEN' },
      { code: 'KH', suit: 'HEARTS', value: 'KING' },
      { code: 'AS', suit: 'SPADES', value: 'ACE' },
      { code: '7S', suit: 'SPADES', value: 7 },
      { code: '8S', suit: 'SPADES', value: 8 },
      { code: '9S', suit: 'SPADES', value: 9 },
      { code: '10S', suit: 'SPADES', value: 10 },
      { code: 'JS', suit: 'SPADES', value: 'JACK' },
      { code: 'QS', suit: 'SPADES', value: 'QUEEN' },
      { code: 'KS', suit: 'SPADES', value: 'KING' },
      { code: 'AC', suit: 'CLUBS', value: 'ACE' },
      { code: '7C', suit: 'CLUBS', value: 7 },
      { code: '8C', suit: 'CLUBS', value: 8 },
      { code: '9C', suit: 'CLUBS', value: 9 },
      { code: '10C', suit: 'CLUBS', value: 10 },
      { code: 'JC', suit: 'CLUBS', value: 'JACK' },
      { code: 'QC', suit: 'CLUBS', value: 'QUEEN' },
      { code: 'KC', suit: 'CLUBS', value: 'KING' },
      { code: 'AD', suit: 'DIAMONDS', value: 'ACE' },
      { code: '7D', suit: 'DIAMONDS', value: 7 },
      { code: '8D', suit: 'DIAMONDS', value: 8 },
      { code: '9D', suit: 'DIAMONDS', value: 9 },
      { code: '10D', suit: 'DIAMONDS', value: 10 },
      { code: 'JD', suit: 'DIAMONDS', value: 'JACK' },
      { code: 'QD', suit: 'DIAMONDS', value: 'QUEEN' },
      { code: 'KD', suit: 'DIAMONDS', value: 'KING' },
    ]);
  });
})
