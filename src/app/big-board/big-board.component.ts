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
  public board: Board;

  constructor(private boardService: BoardService) {
  }

  ngOnInit() {
    this.board = this.boardService.getById(this.boardId);
  }
}
