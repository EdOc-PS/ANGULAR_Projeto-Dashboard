import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Game } from '../../../../core/models/games.model';
import { DefaultCardComponent } from "../default-card/default-card.component";
import { SmallCardComponent } from "../small-card/small-card.component";

@Component({
    selector: 'big-card',
    standalone: true,
    templateUrl: './big-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrl: './big-card.component.css',
    imports: [DefaultCardComponent, SmallCardComponent]
})

export class BigCardComponent {
  @Input({ required: true}) games: Game[] = [];

  newImage: string;
  newName: string;

  updateBigCard(event: { image: string, name: string }) {
      this.newImage = event.image;
      this.newName = event.name;
  }
}
