import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';

import * as todoActions from '../actions/todos.action';
import * as fromServices from '../../services';
import { of } from 'rxjs';

@Injectable()
export class TodosEffects {
  constructor(
    private actions$: Actions,
    private todoService: fromServices.TodosService
  ) {}

  @Effect()
  loadTodos$ = this.actions$.pipe(
    ofType(todoActions.LOAD_TODOS),
    switchMap(() => {
      return this.todoService.getTodos().pipe(
        map(todos => new todoActions.LoadTodosSuccess(todos)),
        catchError(error => of(new todoActions.LoadTodosFail(error)))
      );
    })
  );
}
