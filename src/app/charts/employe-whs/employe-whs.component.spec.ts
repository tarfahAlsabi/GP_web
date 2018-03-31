import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeWhsComponent } from './employe-whs.component';

describe('EmployeWhsComponent', () => {
  let component: EmployeWhsComponent;
  let fixture: ComponentFixture<EmployeWhsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeWhsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeWhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
