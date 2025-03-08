import { Component } from '@angular/core';
import { serviceData } from './serviceData';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  services = serviceData;

}
