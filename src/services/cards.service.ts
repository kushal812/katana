import { ICard, IDeck } from '@interfaces/deck.interface';
import deckModel from '@models/deck.model';
import Deck from '@utils/deck';
import { HttpException } from '@exceptions/HttpException';

class CardsService {
  public decks = deckModel;

  public async createDeck({ type, shuffle }): Promise<IDeck> {
    // if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const deck = new Deck({ type, shuffle });
    const newDeck: IDeck = await this.decks.create({
      type: deck.getDeckType(),
      shuffled: deck.getShuffled(),
      remaining: deck.getRemainingCards(),
      cards: deck.getDeck(),
    });

    return {
      deckId: newDeck._id,
      type: newDeck.type,
      shuffled: newDeck.shuffled,
      remaining: newDeck.remaining,
    };
  }

  public async getDeck(id): Promise<IDeck> {
    const deck: IDeck = await this.decks.findOne({ _id: id });

    if (!deck) {
      throw new HttpException(400, 'Invalid deck');
    }

    return {
      deckId: deck._id,
      type: deck.type,
      shuffled: deck.shuffled,
      remaining: deck.remaining,
      cards: deck.cards,
    };
  }

  public async drawCard(id, count): Promise<ICard[]> {
    const deck: IDeck = await this.decks.findOne({ _id: id });

    if (!deck) {
      throw new HttpException(400, 'Invalid deck');
    }

    let poppedCards: ICard[];
    if (count > 0 && deck.remaining && count <= deck.remaining) {
      poppedCards = deck.cards.splice(0, count);
    } else {
      throw new HttpException(400, 'Invalid draw count');
    }

    await this.decks.findOneAndUpdate({ _id: id }, { cards: deck.cards, remaining: deck.cards.length });

    return poppedCards;
  }
}

export default CardsService;
