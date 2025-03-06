import { Component } from '@angular/core';
import { infoList } from './infoList';
import { toolsData } from './infoList';


@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  infoList =  infoList;
  toolsData = toolsData

}