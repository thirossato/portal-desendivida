import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasFinancasComponent } from './minhas-financas.component';

describe('MinhasFinancasComponent', () => {
  let component: MinhasFinancasComponent;
  let fixture: ComponentFixture<MinhasFinancasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasFinancasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasFinancasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
