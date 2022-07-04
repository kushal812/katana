export interface ICard {
  value: String;
  suit: String;
  code: String;
}

export interface IDeck {
  _id?: String;
  deckId?: String;
  type: String;
  shuffled: false;
  remaining: Number;
  cards?: [ICard];
}
