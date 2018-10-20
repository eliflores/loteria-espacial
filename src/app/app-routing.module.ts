import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayLoteriaComponent} from './play-loteria/play-loteria.component';
import {BoardSelectionComponent} from './board-selection/board-selection.component';
import {AboutUsComponent} from './about-us/about-us.component';

const routes: Routes = [
  {
    path: 'play',
    component: PlayLoteriaComponent
  },
  {
    path: 'start',
    component: BoardSelectionComponent
  },
  { path: 'about-us',
    component: AboutUsComponent
  },
  { path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
