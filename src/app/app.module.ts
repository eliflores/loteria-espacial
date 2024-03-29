import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardSelectionComponent } from './board-selection/board-selection.component';
import { HeaderComponent } from './header/header.component';
import { BoardComponent } from './board/board.component';
import { PlayLoteriaComponent } from './play-loteria/play-loteria.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BigBoardComponent } from './big-board/big-board.component';
import { CardDeckComponent } from './card-deck/card-deck.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardSelectionComponent,
    HeaderComponent,
    BoardComponent,
    PlayLoteriaComponent,
    AboutUsComponent,
    BigBoardComponent,
    CardDeckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
