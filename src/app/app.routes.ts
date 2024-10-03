import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GameDetailsPage } from './pages/game/game-page.component';
import { GameIdResolver } from './core/resolvers/game-id_resolver';
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
    component: GameDetailsPage,
  }
];
