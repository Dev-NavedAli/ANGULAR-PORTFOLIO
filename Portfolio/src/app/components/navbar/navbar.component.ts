import { Component , HostListener } from '@angular/core';
import {NgClass ,CommonModule} from '@angular/common'

@Component({
  selector: 'app-navbar',
  imports:[NgClass,CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  menuOpen: boolean = false;
  isScroll:boolean=false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Toggles between true and false
  }

  @HostListener('window:scroll',[])
  onWindowScroll(){
    if(window.scrollY > 50){
      this.isScroll = true;
    }else{
      this.isScroll = false;
    }
  }


}