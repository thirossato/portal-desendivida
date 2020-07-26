export interface IProgressBarModel {
    label: string;
    color: 'red' | 'green';
    maxVal: number;
    currentProgress: number;
  }