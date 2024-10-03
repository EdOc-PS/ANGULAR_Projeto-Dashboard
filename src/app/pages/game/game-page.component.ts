import { Component, OnInit } from '@angular/core';
import { GameDetails } from '../../core/models/gamesDetails.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'game-page',
  standalone: true,
  imports: [],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.css'
})
export class GameDetailsPage implements OnInit{
  gameDetails: GameDetails;
  constructor(private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.gameDetails = this.route.snapshot.data['game'] as GameDetails
    console.log(this.gameDetails);

  }

}
