import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechelevateComponent } from './techelevate.component';

describe('TechelevateComponent', () => {
  let component: TechelevateComponent;
  let fixture: ComponentFixture<TechelevateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechelevateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechelevateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
