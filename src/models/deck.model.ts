import { model, Schema, Document } from 'mongoose';
import { IDeck } from '@interfaces/deck.interface';
import { typeOfDeck } from '@config';

const deckSchema: Schema = new Schema({
  type: { type: String, default: typeOfDeck.FULL },
  shuffled: { type: Boolean, default: false },
  remaining: Number,
  cards: [
    {
      _id: false,
      value: String,
      suit: String,
      code: String,
    },
  ],
});

const decksModel = model<IDeck & Document>('Decks', deckSchema);

export default decksModel;
