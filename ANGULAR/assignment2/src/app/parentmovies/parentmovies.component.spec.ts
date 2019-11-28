import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentmoviesComponent } from './parentmovies.component';

describe('ParentmoviesComponent', () => {
  let component: ParentmoviesComponent;
  let fixture: ComponentFixture<ParentmoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentmoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
