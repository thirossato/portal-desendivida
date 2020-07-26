import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minhas-financas',
  templateUrl: './minhas-financas.component.html',
  styleUrls: ['./minhas-financas.component.scss']
})
export class MinhasFinancasComponent implements OnInit {
  totalBalance = 1800;
  creditCardValue = 350;
  receipt = 2500;
  expenses =  750;

  constructor() { }

  ngOnInit(): void {
  }

}
