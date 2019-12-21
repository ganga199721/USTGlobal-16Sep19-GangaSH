import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeHeaderComponent } from './user-home-header.component';

describe('UserHomeHeaderComponent', () => {
  let component: UserHomeHeaderComponent;
  let fixture: ComponentFixture<UserHomeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHomeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
