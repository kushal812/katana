import { NextFunction, Request, Response } from 'express';
import CardsService from '@services/cards.service';
import {ICard, IDeck} from '@interfaces/deck.interface';
import { CreateDeckDto } from '@dtos/cards.dto';

class CardsController {
  public cardsService = new CardsService();

  public createDeck = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deckData: CreateDeckDto = req.body;
      const deck: IDeck = await this.cardsService.createDeck({ type: deckData.type, shuffle: deckData.shuffled });

      res.status(201).json(deck);
    } catch (error) {
      next(error);
    }
  };

  public getDeck = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deck: IDeck = await this.cardsService.getDeck(req.params.id);

      res.status(200).json(deck);
    } catch (error) {
      next(error);
    }
  };

  public drawCard = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cards: ICard[] = await this.cardsService.drawCard(req.params.id, req.params.count);

      res.status(200).json({ cards });
    } catch (error) {
      next(error);
    }
  };
}

export default CardsController;
