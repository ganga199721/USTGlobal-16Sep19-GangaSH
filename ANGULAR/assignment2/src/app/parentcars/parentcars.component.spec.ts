import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcarsComponent } from './parentcars.component';

describe('ParentcarsComponent', () => {
  let component: ParentcarsComponent;
  let fixture: ComponentFixture<ParentcarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentcarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
