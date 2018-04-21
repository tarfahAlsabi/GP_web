import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeStatmentReporComponent } from './income-statment-repor.component';

describe('IncomeStatmentReporComponent', () => {
  let component: IncomeStatmentReporComponent;
  let fixture: ComponentFixture<IncomeStatmentReporComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeStatmentReporComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeStatmentReporComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
