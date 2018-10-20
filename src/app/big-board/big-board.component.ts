import {Component, OnInit} from '@angular/core';
import {Board} from '../board';
import {BoardService} from '../board.service';

@Component({
  selector: 'app-big-board',
  templateUrl: './big-board.component.html',
  styleUrls: ['./big-board.component.scss']
})
export class BigBoardComponent implements OnInit {
  private board: Board;

  constructor(private boardService: BoardService) {
  }

  ngOnInit() {
    this.board = this.boardService.getById(1);
  }
}
