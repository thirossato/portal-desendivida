import { Component, OnInit } from '@angular/core';
import{ faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-analise-financeira',
  templateUrl: './analise-financeira.component.html',
  styleUrls: ['./analise-financeira.component.scss']
})
export class AnaliseFinanceiraComponent implements OnInit {
  faAngleDown = faAngleDown;
  status = {
    name: 'Vermelho',
    description: 'Encontramos algumas dividas suas, mas podemos te ajudar a sair desta situação',
    color: 'red'
  };

  debtsFound = 3;
  otherDebts = 0;
  financing = 1;
  laterPaidDebts = 7;
  loans = 1;
  totalAccounts = 1;
  creditCards = 3;
  creditCardsArr = ['Casas bahia','Mastercard Santander', 'Elo Riachuleo'];
  creditCardsHistory = this.creditCardsArr.join(', ').replace(/, ([^,]*)$/, ' e $1');
  constructor() { }

  ngOnInit(): void {
  }

}
