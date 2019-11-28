import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentbikesComponent } from './parentbikes.component';

describe('ParentbikesComponent', () => {
  let component: ParentbikesComponent;
  let fixture: ComponentFixture<ParentbikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentbikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentbikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
