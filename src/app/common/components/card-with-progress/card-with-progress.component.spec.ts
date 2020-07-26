import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithProgressComponent } from './card-with-progress.component';

describe('CardWithProgressComponent', () => {
  let component: CardWithProgressComponent;
  let fixture: ComponentFixture<CardWithProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardWithProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWithProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
