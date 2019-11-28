import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentmobilesComponent } from './parentmobiles.component';

describe('ParentmobilesComponent', () => {
  let component: ParentmobilesComponent;
  let fixture: ComponentFixture<ParentmobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentmobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentmobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
