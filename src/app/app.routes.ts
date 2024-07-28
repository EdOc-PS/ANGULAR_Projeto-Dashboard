import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GameDetailsComponent } from './pages/game/game-details.component';
import { GameIdResolver } from './core/resolvers/gameId. resolver';
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
    path: 'games/:id',
    resolve:{
        game: GameIdResolver,
    },
    component: GameDetailsComponent,
  }
];
