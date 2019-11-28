import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildmobilesComponent } from './childmobiles.component';

describe('ChildmobilesComponent', () => {
  let component: ChildmobilesComponent;
  let fixture: ComponentFixture<ChildmobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildmobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildmobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
