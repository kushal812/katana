import { typeOfDeck } from '@config';

class Deck {
  private deck = [];
  private type;
  private remaining = 52;
  private isShuffled = false;

  constructor({ type = typeOfDeck.FULL, shuffle = false }) {
    this.deck = [];
    this.type = type;
    this.isShuffled = shuffle;

    this.createDeck();
  }

  private createDeck() {
    const suits = [
      { value: 'HEARTS', code: 'H' },
      { value: 'SPADES', code: 'S' },
      { value: 'CLUBS', code: 'C' },
      { value: 'DIAMONDS', code: 'D' },
    ];
    const cards = [
      { value: 'ACE', code: 'A' },
      { value: 2, code: 2 },
      { value: 3, code: 3 },
      { value: 4, code: 4 },
      { value: 5, code: 5 },
      { value: 6, code: 6 },
      { value: 7, code: 7 },
      { value: 8, code: 8 },
      { value: 9, code: 9 },
      { value: 10, code: 10 },
      { value: 'JACK', code: 'J' },
      { value: 'QUEEN', code: 'Q' },
      { value: 'KING', code: 'K' },
    ];
    const shorts = [2, 3, 4, 5, 6];

    for (const suit in suits) {
      for (const card in cards) {
        if (this.type === typeOfDeck.FULL || (this.type === typeOfDeck.SHORT && !shorts.includes(<number>cards[card].code))) {
          this.deck.push({ value: cards[card].value, suit: suits[suit].value, code: `${cards[card].code}${suits[suit].code}` });
        }
      }
    }

    if (this.isShuffled) {
      this.shuffle();
    }
    this.remaining = this.deck.length;
  }

  getRemainingCards() {
    return this.remaining;
  }

  getDeck() {
    return this.deck;
  }

  getDeckType() {
    return this.type;
  }

  getShuffled() {
    return this.isShuffled;
  }

  reset() {
    this.deck = [];

    this.createDeck();
  }

  shuffle() {
    const { deck } = this;
    let m = deck.length,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      [deck[m], deck[i]] = [deck[i], deck[m]];
    }

    this.isShuffled = true;

    return this;
  }
}

export default Deck;
