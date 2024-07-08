import { Component, Input } from '@angular/core';
import { Game } from '../../../../core/models/games.model';

@Component({
  selector: 'small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})

export class SmallCardComponent {
  @Input({ required: true}) games: Game;
}
