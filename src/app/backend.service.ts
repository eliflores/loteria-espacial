import {Injectable, Type} from '@angular/core';

import {Logger} from './logger.service';
import {Board} from './board';
import {Card} from './card';

const nasaImages = require('./nasa-images.json');

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private static cards: Card[] = nasaImages.map(nasaImage => {
    return new Card(nasaImage.name, nasaImage.description, nasaImage.imageName);
  });
  private boards: Board[] = [];

  private static generateBoards() {
    return [
      new Board([
        [this.cards[0], this.cards[1], this.cards[3], this.cards[4]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]]]),
      new Board([
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]]]),
      new Board([
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]]]),
      new Board([
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]]]),
      new Board([
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]]]),
      new Board([
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]]]),
      new Board([
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]]]),
      new Board([
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]]]),
      new Board([
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]],
        [this.cards[0], this.cards[0], this.cards[0], this.cards[0]]]),
    ];
  }

  constructor(private logger: Logger) {
    this.boards = BackendService.generateBoards();
  }

  getAll(type: Type<any>): PromiseLike<any[]> {
    if (type === Board) {
      return Promise.resolve<Board[]>(this.boards);
    }
    const err = new Error('Cannot get object of this type');
    this.logger.error(err);
    throw err;
  }
}
