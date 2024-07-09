import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '../../../../core/models/games.model';

@Component({
  selector: 'small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})

export class SmallCardComponent {
  @Input({ required: true }) games: Game;
  @Output() imageClicked = new EventEmitter<{image: string, name: string }>();

  image: string;
  name:string;

  ngOnInit() {
    this.image = this.games.background_image;
    this.name = this.games.name;
  }

  selectCardSmall() {
    this.imageClicked.emit({image: this.image, name: this.name});
    
    /*
     const divElement = document.querySelector('div');
      if (divElement) {
      divElement.classList.add('clicked');
    }
     */

  }
}
