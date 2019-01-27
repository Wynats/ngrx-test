import * as fromTodos from './todos.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface TasksState {
  todos: fromTodos.TodoState;
}

export const reducers: ActionReducerMap<TasksState> = {
  todos: fromTodos.reducer
};

export const getTasksState = createFeatureSelector<TasksState>('tasks');
