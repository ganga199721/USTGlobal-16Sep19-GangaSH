import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcarsComponent } from './childcars.component';

describe('ChildcarsComponent', () => {
  let component: ChildcarsComponent;
  let fixture: ComponentFixture<ChildcarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildcarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
