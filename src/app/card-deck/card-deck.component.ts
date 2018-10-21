import { Component, OnInit } from '@angular/core';
import {Card} from '../card';
import {Logger} from '../logger.service';
import {CardService} from '../card.service';

@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.scss'],
})
export class CardDeckComponent implements OnInit {
  currentCard: Card;

  constructor(private logger: Logger, private cardService: CardService) { }

  ngOnInit() {
    this.currentCard = this.cardService.getRandomCard();
  }

  nextCard() {
    this.logger.log('Getting the next card');
    this.currentCard = this.cardService.getRandomCard();
  }
}
