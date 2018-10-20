import {Component, OnInit} from '@angular/core';
import {BoardService} from '../board.service';
import {Board} from '../board';

@Component({
  selector: 'app-board-selection',
  templateUrl: './board-selection.component.html',
  styleUrls: ['./board-selection.component.scss'],
  providers: [BoardService]
})
export class BoardSelectionComponent implements OnInit {
  boards: Board[];
  selectedBoard: Board;

  constructor(private boardService: BoardService) {
  }

  ngOnInit() {
    this.boards = this.boardService.getBoards();
  }

  selectedBoard(board: Board) { this.selectedBoard = board; }
}
