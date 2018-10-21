import {Injectable, Type} from '@angular/core';

import {Logger} from './logger.service';
import {Board} from './board';
import {Card} from './card';

const nasaImages = require('./nasa-images.json');

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private static readonly cards: Card[] = nasaImages.map(nasaImage => {
    return new Card(nasaImage.name, nasaImage.description, nasaImage.imageName);
  });
  private readonly boards: Board[] = [];

  private static generateBoards() {
    return [
      new Board([
        [this.cards[7], this.cards[1], this.cards[3], this.cards[4]],
        [this.cards[9], this.cards[2], this.cards[18], this.cards[31]],
        [this.cards[19], this.cards[13], this.cards[14], this.cards[6]],
        [this.cards[27], this.cards[28], this.cards[20], this.cards[17]]]),
      new Board([
        [this.cards[0], this.cards[9], this.cards[16], this.cards[15]],
        [this.cards[6], this.cards[27], this.cards[29], this.cards[18]],
        [this.cards[13], this.cards[31], this.cards[7], this.cards[4]],
        [this.cards[5], this.cards[1], this.cards[20], this.cards[2]]]),
      new Board([
        [this.cards[9], this.cards[13], this.cards[18], this.cards[15]],
        [this.cards[31], this.cards[14], this.cards[17], this.cards[20]],
        [this.cards[19], this.cards[28], this.cards[4], this.cards[32]],
        [this.cards[33], this.cards[31], this.cards[29], this.cards[27]]]),
      new Board([
        [this.cards[7], this.cards[32], this.cards[15], this.cards[29]],
        [this.cards[8], this.cards[13], this.cards[6], this.cards[27]],
        [this.cards[23], this.cards[0], this.cards[20], this.cards[2]],
        [this.cards[14], this.cards[31], this.cards[4], this.cards[3]]]),
      new Board([
        [this.cards[22], this.cards[26], this.cards[13], this.cards[9]],
        [this.cards[14], this.cards[6], this.cards[15], this.cards[3]],
        [this.cards[31], this.cards[11], this.cards[20], this.cards[12]],
        [this.cards[21], this.cards[19], this.cards[2], this.cards[5]]]),
      new Board([
        [this.cards[14], this.cards[1], this.cards[27], this.cards[33]],
        [this.cards[28], this.cards[5], this.cards[6], this.cards[20]],
        [this.cards[30], this.cards[9], this.cards[26], this.cards[11]],
        [this.cards[19], this.cards[31], this.cards[13], this.cards[7]]]),
      new Board([
        [this.cards[8], this.cards[12], this.cards[20], this.cards[2]],
        [this.cards[31], this.cards[29], this.cards[23], this.cards[5]],
        [this.cards[26], this.cards[33], this.cards[3], this.cards[18]],
        [this.cards[15], this.cards[14], this.cards[7], this.cards[11]]]),
      new Board([
        [this.cards[3], this.cards[13], this.cards[10], this.cards[2]],
        [this.cards[9], this.cards[4], this.cards[21], this.cards[32]],
        [this.cards[23], this.cards[15], this.cards[17], this.cards[27]],
        [this.cards[29], this.cards[18], this.cards[0], this.cards[20]]]),
      new Board([
        [this.cards[25], this.cards[29], this.cards[32], this.cards[6]],
        [this.cards[14], this.cards[8], this.cards[2], this.cards[23]],
        [this.cards[20], this.cards[13], this.cards[31], this.cards[15]],
        [this.cards[7], this.cards[27], this.cards[3], this.cards[0]]]),
    ];
  }

  constructor(private logger: Logger) {
    this.boards = BackendService.generateBoards();
  }

  getAll(type: Type<any>): PromiseLike<any[]> {
    if (type === Board) {
      return Promise.resolve<Board[]>(this.boards);
    }

    if (type === Card) {
      return Promise.resolve<Card[]>(BackendService.cards);
    }
    const err = new Error('Cannot get object of this type');
    this.logger.error(err);
    throw err;
  }
}
