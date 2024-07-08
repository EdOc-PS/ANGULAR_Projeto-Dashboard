import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { MenuNavComponent } from "./components/menu-nav/menu-nav.component";
import { HeaderComponent } from "./components/header/header.component";
import { HttpClientModule } from '@angular/common/http';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',

    imports: [ RouterOutlet, HttpClientModule,
               HomeComponent, MenuNavComponent, HeaderComponent]
})
export class AppComponent {
  title = 'dashboard';

}

