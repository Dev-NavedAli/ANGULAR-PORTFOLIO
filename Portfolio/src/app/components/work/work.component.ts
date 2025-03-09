import { Component } from '@angular/core';
import { workData } from './workData';


@Component({
  selector: 'app-work',
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {

   workData = workData

}
