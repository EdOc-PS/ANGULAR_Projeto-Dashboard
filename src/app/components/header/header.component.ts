import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MenuNavComponent } from '../menu-nav/menu-nav.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'home-header',
  standalone: true,
  imports: [MatDialogModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) { }

  abrirPopUp() {
    this.dialog.open(MenuNavComponent)
  }
}
