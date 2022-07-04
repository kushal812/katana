import { Router } from 'express';
import CardsController from '@controllers/cards.controller';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import { CreateDeckDto, DrawDeckDto, GetDeckDto } from '@dtos/cards.dto';

class CardsRoute implements Routes {
  public path = '/';
  public router = Router();
  public cardsController = new CardsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}deck`, validationMiddleware(CreateDeckDto, 'body'), this.cardsController.createDeck);
    this.router.get(`${this.path}deck/:id`, validationMiddleware(GetDeckDto, 'params'), this.cardsController.getDeck);
    this.router.get(`${this.path}deck/:id/draw/:count`, validationMiddleware(DrawDeckDto, 'params'), this.cardsController.drawCard);
  }
}

export default CardsRoute;
