import {Card} from './card';

let nextId = 1;

export class Board {
  id: number;
  constructor(
    public cards: Array<Card>) {
    this.id = nextId++;
  }
}
