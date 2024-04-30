import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { MenuNavComponent } from "./menu-nav/menu-nav.component";

@Component({
    selector: 'home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, MenuNavComponent]
})
export class HomeComponent {

}
