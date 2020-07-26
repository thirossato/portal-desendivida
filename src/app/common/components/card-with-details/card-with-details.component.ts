import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-with-details',
  templateUrl: './card-with-details.component.html',
  styleUrls: ['./card-with-details.component.scss']
})
export class CardWithDetailsComponent{
  @Input() title: string;
  @Input() image: 'cartao' | 'banco' | 'setaCima' | 'setaBaixo';
  @Input() elipsisColor: string;
  @Input() value: number;

  constructor() { }
}
