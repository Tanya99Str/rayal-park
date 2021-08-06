import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsOneUserComponent } from './comments-one-user.component';

describe('CommentsOneUserComponent', () => {
  let component: CommentsOneUserComponent;
  let fixture: ComponentFixture<CommentsOneUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsOneUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsOneUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
