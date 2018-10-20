import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
    <app-header></app-header>
    <app-board-selection></app-board-selection>
  `,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Loteria Espacial';
}
