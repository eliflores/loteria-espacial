import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-play-loteria',
  templateUrl: './play-loteria.component.html',
  styleUrls: ['./play-loteria.component.scss']
})
export class PlayLoteriaComponent implements OnInit, OnDestroy {
  boardId: number;
  private sub: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.boardId = +params['board'];
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
