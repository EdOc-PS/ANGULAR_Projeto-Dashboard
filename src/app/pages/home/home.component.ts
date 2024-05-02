import { Component } from '@angular/core';
import { BigCardComponent } from "./cards/big-card/big-card.component";


@Component({
    selector: 'home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [BigCardComponent]
})
export class HomeComponent {

}
