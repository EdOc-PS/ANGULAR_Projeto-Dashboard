import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { MenuNavComponent } from "./components/menu-nav/menu-nav.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css', './app.media.component.css'],
    imports: [RouterOutlet, HomeComponent, MenuNavComponent, HeaderComponent]
})
export class AppComponent {
  title = 'dashboard';


}
