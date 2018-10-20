let nextId = 1;

export class Card {
  id: number;
  constructor(
    public name: string,
    public description: string,
    public imageName: string) {
    this.id = nextId++;
  }
}
