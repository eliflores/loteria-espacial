import {Component, Input, OnInit} from '@angular/core';
import {Board} from '../board';
import {BoardService} from '../board.service';

@Component({
  selector: 'app-big-board',
  templateUrl: './big-board.component.html',
  styleUrls: ['./big-board.component.scss']
})
export class BigBoardComponent implements OnInit {
  @Input() boardId: Number;
  board: Board;
  alreadyClickedCards: number;

  constructor(private boardService: BoardService) {
  }

  ngOnInit() {
    this.board = this.boardService.getById(this.boardId);
    this.alreadyClickedCards = 0;
  }

  onCardClick(event: MouseEvent) {
    const element = event.target as HTMLImageElement;
    element.attributes['class'].value = `${element.attributes['class'].value} selected-card`;
    this.alreadyClickedCards = this.alreadyClickedCards + 1;
  }

  isTheGameWon() {
    return this.alreadyClickedCards === 16;
  }
}
