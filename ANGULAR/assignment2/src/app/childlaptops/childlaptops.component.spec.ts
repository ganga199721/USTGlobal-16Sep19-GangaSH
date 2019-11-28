import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildlaptopsComponent } from './childlaptops.component';

describe('ChildlaptopsComponent', () => {
  let component: ChildlaptopsComponent;
  let fixture: ComponentFixture<ChildlaptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildlaptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildlaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
