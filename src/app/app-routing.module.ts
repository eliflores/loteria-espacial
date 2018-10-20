import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayLoteriaComponent} from './play-loteria/play-loteria.component';

const routes: Routes = [
  {
    path: 'play',
    component: PlayLoteriaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
