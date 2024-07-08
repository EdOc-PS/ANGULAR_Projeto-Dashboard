import { Component, Input } from '@angular/core';
import { Game } from '../../../../core/models/games.model';


@Component({
  selector: 'default-card',
  standalone: true,
  imports: [],
  templateUrl: './default-card.component.html',
  styleUrl: './default-card.component.css'
})
export class DefaultCardComponent {
  @Input({ required: true}) games: Game;
}
