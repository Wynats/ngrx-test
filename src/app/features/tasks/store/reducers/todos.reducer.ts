import { Todo } from '../../models';

import * as fromTodos from '../actions/todos.action';
import { List } from 'src/app/shared';

export interface TodoState {
  entities: List<{ [id: number]: Todo }>;
  loaded: boolean;
  loading: boolean;
}

export const initialState: TodoState = {
  entities: new List<{ [id: number]: Todo }>(),
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromTodos.TodosAction
): TodoState {
  switch (action.type) {
    case fromTodos.LOAD_TODOS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromTodos.LOAD_TODOS_SUCCESS: {
      const todos = action.payload;

      const content = todos.content;

      const contentEntities = content.reduce(
        (test: { [id: string]: Todo }, todo: Todo) => {
          return {
            ...test,
            [todo.id]: todo
          };
        },
        {
          ...state.entities.content
        }
      );

      const entities = {
        links: todos.links,
        content: contentEntities,
        page: todos.page
      };

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }
    case fromTodos.LOAD_TODOS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }
  }
  return state;
}

export const getTodosEntities = (state: TodoState) => state.entities;
export const getTodosLoading = (state: TodoState) => state.loading;
export const getTodosLoaded = (state: TodoState) => state.loaded;
