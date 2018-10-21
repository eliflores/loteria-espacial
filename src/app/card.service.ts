import {Injectable} from '@angular/core';
import {Card} from './card';
import {BackendService} from './backend.service';
import {Logger} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cards: Card[] = [];

  constructor(private backend: BackendService, private logger: Logger) {
    this.backend.getAll(Card).then((cards: Card[]) => {
      this.logger.log(`Fetched ${cards.length} cards`);
      this.cards.push(...cards);
    });
  }

  getCards() {
    return this.cards;
  }

  getRandomCard() {
    const cards = this.getCards();
    const index = this.getRandomInt(cards.length);
    return cards[index];
  }

  private getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
