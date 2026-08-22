import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar/sidebar.component';
import { HeaderComponent } from '../header/header/header.component';
import { AppComponent } from '../../app.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,
    SidebarComponent
    ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
