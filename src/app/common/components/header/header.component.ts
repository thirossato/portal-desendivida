import { Component, OnInit } from '@angular/core';
import {faAngleDown, faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName = 'Lucas';
  userFullName = 'Lucas Venturini';
  selectedDate = 'Jul 2020';
  faAngleDown = faAngleDown;
  faPlus = faPlus;


  constructor() { }

  ngOnInit(): void {
  }

}
