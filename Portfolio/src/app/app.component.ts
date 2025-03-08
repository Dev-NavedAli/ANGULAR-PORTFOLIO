import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { WorkComponent } from './components/work/work.component';


@Component({
  selector: 'app-root',
  imports: [NavbarComponent,HeaderComponent,AboutComponent, ServicesComponent,WorkComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}