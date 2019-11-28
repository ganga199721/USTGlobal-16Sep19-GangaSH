import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildmoviesComponent } from './childmovies.component';

describe('ChildmoviesComponent', () => {
  let component: ChildmoviesComponent;
  let fixture: ComponentFixture<ChildmoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildmoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
