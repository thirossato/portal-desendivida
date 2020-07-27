import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseFinanceiraComponent } from './analise-financeira.component';

describe('AnaliseFinanceiraComponent', () => {
  let component: AnaliseFinanceiraComponent;
  let fixture: ComponentFixture<AnaliseFinanceiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnaliseFinanceiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaliseFinanceiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
