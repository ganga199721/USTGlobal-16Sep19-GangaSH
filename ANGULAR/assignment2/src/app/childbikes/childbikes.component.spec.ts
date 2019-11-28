import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildbikesComponent } from './childbikes.component';

describe('ChildbikesComponent', () => {
  let component: ChildbikesComponent;
  let fixture: ComponentFixture<ChildbikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildbikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildbikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
