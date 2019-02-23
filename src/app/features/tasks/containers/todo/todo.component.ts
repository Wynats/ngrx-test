import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models';

import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todo$: Observable<Todo>;
  editMode = false;

  constructor(private store: Store<fromStore.TasksState>) {}

  ngOnInit() {
    this.todo$ = this.store.select(fromStore.getSelectedTodo);
  }
  onDelete() {}
  onModify() {
    this.editMode = !this.editMode;
  }
}
