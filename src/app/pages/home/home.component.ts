import { Component, OnInit} from '@angular/core';
import { BigCardComponent } from "./cards/big-card/big-card.component";
import { SmallCardComponent } from "./cards/small-card/small-card.component";
import { DefaultCardComponent } from "./cards/default-card/default-card.component";
import { NgIf } from '@angular/common';
import { environment } from '../../../environments/environment';
import { RAWGService } from '../../service/rawg.service';
import { Games } from '../../models/games.model';


@Component({
    selector: 'home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css', 'home.media.component.css'],
    imports: [BigCardComponent, SmallCardComponent, DefaultCardComponent, NgIf]
})
export class HomeComponent implements OnInit {

  games: Games[] = []

  constructor(private rawgServices: RAWGService){
    console.log(environment.api);

  }
  ngOnInit(): void {

  }



  isScreenSmall(): boolean{
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 912;
    }
      return false

  }
}
