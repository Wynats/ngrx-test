import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models';
import { List } from 'src/app/shared';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public todos$: Observable<List<Todo[]>>;

  constructor(private store: Store<fromStore.TasksState>) {}

  ngOnInit() {
    this.todos$ = this.store.select<List<Todo[]>>(fromStore.getAllTodos);
    this.store.dispatch(new fromStore.LoadTodos());
  }
}
