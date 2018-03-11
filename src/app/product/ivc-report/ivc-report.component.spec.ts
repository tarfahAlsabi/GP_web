import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvcReportComponent } from './ivc-report.component';

describe('IvcReportComponent', () => {
  let component: IvcReportComponent;
  let fixture: ComponentFixture<IvcReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvcReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvcReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
