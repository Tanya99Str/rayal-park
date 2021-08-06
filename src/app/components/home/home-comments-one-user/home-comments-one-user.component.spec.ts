import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCommentsOneUserComponent } from './home-comments-one-user.component';

describe('HomeCommentsOneUserComponent', () => {
  let component: HomeCommentsOneUserComponent;
  let fixture: ComponentFixture<HomeCommentsOneUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCommentsOneUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCommentsOneUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
