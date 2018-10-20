import {Component, OnInit} from '@angular/core';
import {BoardService} from '../board.service';
import {Board} from '../board';
import {Logger} from '../logger.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-board-selection',
  templateUrl: './board-selection.component.html',
  styleUrls: ['./board-selection.component.scss'],
  providers: [BoardService]
})
export class BoardSelectionComponent implements OnInit {
  boards: Board[];
  constructor(private boardService: BoardService, private logger: Logger, private router: Router) {
  }

  ngOnInit() {
    this.boards = this.boardService.getBoards();
  }

  selectBoard(board: Board) {
    this.logger.log(`Selected Board ${board}`);
    this.router.navigate(['play'], { queryParams: { board: board.id} });
  }
}
