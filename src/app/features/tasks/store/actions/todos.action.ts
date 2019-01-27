import { Action } from '@ngrx/store';
import { List } from 'src/app/shared';
import { Todo } from '../../models';

// Load Todos
export const LOAD_TODOS = '[Todos] Load Todos';
export const LOAD_TODOS_FAIL = '[Todos] Load Todos Fail';
export const LOAD_TODOS_SUCCESS = '[Todos] Load Todos Success';

export class LoadTodos implements Action {
  readonly type = LOAD_TODOS;
}

export class LoadTodosFail implements Action {
  readonly type = LOAD_TODOS_FAIL;
  constructor(public payload: any) {}
}

export class LoadTodosSuccess implements Action {
  readonly type = LOAD_TODOS_SUCCESS;
  constructor(public payload: List<Todo[]>) {}
}

// action types

export type TodosAction = LoadTodos | LoadTodosFail | LoadTodosSuccess;
