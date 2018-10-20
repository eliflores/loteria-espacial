import {Injectable, Type} from '@angular/core';

import {Logger} from './logger.service';
import {Board} from './board';
import {Card} from './card';

const CARDS = [
  new Card('Hubble Spies Glittering Star Cluster in Nearby Galaxy',
    'This glittering ball of stars is the globular cluster NGC 1898, which lies toward the center of the Large Magellanic Cloud.',
    'potw1840a.jpg')
];

const card = CARDS[0];
const BOARDS = [
  new Board([[card, card, card, card], [card, card, card, card], [card, card, card, card], [card, card, card, card]])
];

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private logger: Logger) {
  }

  getAll(type: Type<any>): PromiseLike<any[]> {
    if (type === Board) {
      return Promise.resolve<Board[]>(BOARDS);
    }
    const err = new Error('Cannot get object of this type');
    this.logger.error(err);
    throw err;
  }
}
