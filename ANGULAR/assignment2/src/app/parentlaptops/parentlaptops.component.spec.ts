import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentlaptopsComponent } from './parentlaptops.component';

describe('ParentlaptopsComponent', () => {
  let component: ParentlaptopsComponent;
  let fixture: ComponentFixture<ParentlaptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentlaptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentlaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
