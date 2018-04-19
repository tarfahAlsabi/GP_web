import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatursComponent } from './featurs.component';

describe('FeatursComponent', () => {
  let component: FeatursComponent;
  let fixture: ComponentFixture<FeatursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
