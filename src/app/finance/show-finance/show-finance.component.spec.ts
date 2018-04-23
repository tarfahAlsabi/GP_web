import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFinanceComponent } from './show-finance.component';

describe('ShowFinanceComponent', () => {
  let component: ShowFinanceComponent;
  let fixture: ComponentFixture<ShowFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
