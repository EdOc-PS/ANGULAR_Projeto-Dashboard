import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Game } from '../../../core/models/games.model';
import { DefaultCardComponent } from '../cards/default-card/default-card.component';

@Component({
  selector: 'list-game',
  standalone: true,
  imports: [DefaultCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list-game.component.html',
  styleUrl: './list-game.component.css'
})
export class ListGameComponent {
  @Input({ required: true }) games: Game[] = [];
  @ViewChild('containerScroll', { static: true }) containerScroll!: ElementRef

  moveLeft() {
    this.containerScroll.nativeElement.scrollBy({
      left: -1230,
    })

  }
  moveRight() {
    this.containerScroll.nativeElement.scrollBy({
      left: 1230,
    })
  }


}
