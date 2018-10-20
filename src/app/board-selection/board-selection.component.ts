import {Component, OnInit} from '@angular/core';
import {BoardService} from '../board.service';
import {Board} from '../board';
import {Logger} from '../logger.service';

@Component({
  selector: 'app-board-selection',
  templateUrl: './board-selection.component.html',
  styleUrls: ['./board-selection.component.scss'],
  providers: [BoardService]
})
export class BoardSelectionComponent implements OnInit {
  boards: Board[];
  selectedBoard: Board;

  constructor(private boardService: BoardService, private logger: Logger) {
  }

  ngOnInit() {
    this.boards = this.boardService.getBoards();
  }

  selectBoard(board: Board) {
    this.logger.log(`Selected Board ${board}`);
    this.selectedBoard = board;
  }
}
