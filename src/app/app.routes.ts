import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListGameComponent } from './components/games/list-game/list-game.component';
export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'account',
    component: ListGameComponent,
  },
];
