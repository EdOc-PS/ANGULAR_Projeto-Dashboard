import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { GameService } from '../../core/services/game.service';
import { HttpClientModule } from '@angular/common/http';
import { ListGameComponent } from '../../components/games/list-game/list-game.component';
import { BigCardComponent } from '../../components/games/cards/big-card/big-card.component';
@Component({
  selector: 'home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [ListGameComponent, HttpClientModule, NgIf, BigCardComponent],
})

export class HomeComponent implements OnInit {
  $games = this.gameService.$games;
  constructor(private gameService: GameService) {
    this.getGamesRegistered()
  }

  ngOnInit(): void {
  }

  isScreenSmall(): boolean {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 912;
    }
    return false

  }

  getGamesRegistered() {
    this.gameService.searchGames().subscribe(gameData => this.gameService.setGames(gameData.results))
  }
}
