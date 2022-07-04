import mongoose from 'mongoose';
import request from 'supertest';
import App from '@/app';
import { CreateDeckDto } from '@dtos/cards.dto';
import CardsRoute from '@routes/cards.route';
import { typeOfDeck } from '../config';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Cards Test', () => {
  afterAll(() => mongoose.disconnect());

  describe('[POST] /deck', () => {
    it('Should create a new deck', async () => {
      const deckData: CreateDeckDto = {
        type: typeOfDeck.FULL,
        shuffled: true,
      };

      const cardsRoute = new CardsRoute();
      const deck = cardsRoute.cardsController.cardsService.decks;

      deck.create = jest.fn().mockReturnValue({
        _id: '60706478aad6c9ad19a31c84',
        type: typeOfDeck.FULL,
        remaining: 52,
        shuffled: true,
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([cardsRoute]);
      return request(app.getServer()).post(`${cardsRoute.path}deck`).send(deckData).expect(201, {
        deckId: '60706478aad6c9ad19a31c84',
        type: 'FULL',
        shuffled: true,
        remaining: 52,
      });
    });
  });

  describe('[GET] /deck/{:id}', () => {
    it('Should get the deck', async () => {
      const cardsRoute = new CardsRoute();
      const deck = cardsRoute.cardsController.cardsService.decks;

      deck.findOne = jest.fn().mockReturnValue({
        _id: '60706478aad6c9ad19a31c84',
        type: typeOfDeck.FULL,
        remaining: 52,
        shuffled: true,
        cards: [],
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([cardsRoute]);
      return request(app.getServer())
        .get(`${cardsRoute.path}deck/60706478aad6c9ad19a31c84`)
        .send()
        .expect(200)
    });
  });
});
