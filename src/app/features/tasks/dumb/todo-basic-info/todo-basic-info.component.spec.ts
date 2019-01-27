import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoBasicInfoComponent } from './todo-basic-info.component';

describe('TodoBasicInfoComponent', () => {
  let component: TodoBasicInfoComponent;
  let fixture: ComponentFixture<TodoBasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
