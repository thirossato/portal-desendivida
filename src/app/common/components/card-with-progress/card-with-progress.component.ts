import { Component, OnInit, Input } from '@angular/core';
import { IProgressBarModel } from '../../interfaces/progress-bar.interface';

@Component({
  selector: 'app-card-with-progress',
  templateUrl: './card-with-progress.component.html',
  styleUrls: ['./card-with-progress.component.scss']
})
export class CardWithProgressComponent implements OnInit {
  @Input() tittle: string;
  @Input() progressBar: IProgressBarModel;


  constructor() { }

  ngOnInit(): void {
  }
  getWidth() {
    return ((this.progressBar.currentProgress * 100) / this.progressBar.maxVal).toString() + '%';
  }
}
