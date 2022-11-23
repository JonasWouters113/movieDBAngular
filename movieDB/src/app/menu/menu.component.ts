import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  onMenuClick(){
    this.menuOpen = !this.menuOpen;
  }

}
