import { Component, OnInit } from '@angular/core';
import { IProgressBarModel } from 'src/app/common/interfaces/progress-bar.interface';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-minhas-financas',
  templateUrl: './minhas-financas.component.html',
  styleUrls: ['./minhas-financas.component.scss']
})
export class MinhasFinancasComponent implements OnInit {
  totalBalance = 1800;
  creditCardValue = 350;
  receipt = 2500;
  expenses = 750;
  plannedExpenses = 1500;
  plannedReceipt = 2500;
  // monthBalanceProgressBar: IProgressBarModel;
  expensesPlaningProgressBar: IProgressBarModel;
  receiptPlaningProgressBar: IProgressBarModel;

  constructor() { }

  ngOnInit(): void {
    // this.monthBalanceProgressBars = [{
    //   label: 'Despesas',
    //   color: 'red',
    //   maxVal: this.receipt,
    //   currentProgress: this.expenses
    // }, {
    //   label: 'Receitas',
    //   color: 'green',
    //   maxVal: this.receipt,
    //   currentProgress: this.receipt - this.expenses
    // }];

    this.expensesPlaningProgressBar = {
      label: '',
      color: 'red',
      currentProgress: this.expenses,
      maxVal: this.plannedExpenses
    };

    this.receiptPlaningProgressBar = {
      label: '',
      color: 'green',
      currentProgress: this.receipt,
      maxVal: this.plannedReceipt
    };
  }

}
