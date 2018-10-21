import {Component, OnInit} from '@angular/core';
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
  pastCards: Card[] = [];
  thereAreRemainingCards: Boolean;

  constructor(private logger: Logger, private cardService: CardService) {
  }

  ngOnInit() {
    this.currentCard = this.cardService.getRandomCard();
  }

  nextCard() {
    this.logger.log('Getting the next card');
    let randomCard = this.cardService.getRandomCard();

    while (this.pastCards.includes(randomCard) && !this.areThereCardsRemaining()) {
      randomCard = this.cardService.getRandomCard();
    }

    if (!this.areThereCardsRemaining()) {
      this.currentCard = randomCard;
      this.pastCards.push(randomCard);
    }
  }

  private areThereCardsRemaining() {
    if (this.pastCards.length === 34) {
      this.thereAreRemainingCards = true;
    }
    return this.thereAreRemainingCards;
  }
}
