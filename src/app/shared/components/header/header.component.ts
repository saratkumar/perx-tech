import { Component, OnInit } from '@angular/core';
import { MENULIST } from 'src/app/models/menuList.interface';
import { MENU_LIST } from '../../constants/menuList.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuList: MENULIST[] = MENU_LIST;
  activeIndex: number = 0;
  constructor() { 
    console.log(this.menuList)
  }

  ngOnInit(): void {
  }

}
