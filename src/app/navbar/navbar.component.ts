import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
   toggless():void {
    // let nav = document.getElementById('navbarNavAltMarkup');
    // nav?.removeAttribute('class');
    // nav.addClassName('collapsed navbar-collapsed');
  }
}

