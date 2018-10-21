import {Injectable} from '@angular/core';
import {Board} from './board';
import {BackendService} from './backend.service';
import {Logger} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private boards: Board[] = [];

  constructor(private backend: BackendService, private logger: Logger) {
    this.backend.getAll(Board).then((boards: Board[]) => {
      this.logger.log(`Fetched ${boards.length} boards.`);
      this.boards.push(...boards); // fill cache
    });
  }

  getBoards() {
    return this.boards;
  }

  getById(id: Number) {
    const boards = this.getBoards();
    return boards.find((board: Board) => {
      return board.id === id;
    });
  }
}
