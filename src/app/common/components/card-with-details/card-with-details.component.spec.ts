import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithDetailsComponent } from './card-with-details.component';

describe('CardWithDetailsComponent', () => {
  let component: CardWithDetailsComponent;
  let fixture: ComponentFixture<CardWithDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardWithDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWithDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
