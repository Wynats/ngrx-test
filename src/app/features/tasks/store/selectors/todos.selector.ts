import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRoot from '../../../../core/store';
import * as fromFeature from '../reducers';
import * as fromTodos from '../reducers/todos.reducer';
import { Todo } from '../../models';

export const getTodoState = createSelector(
  fromFeature.getTasksState,
  (state: fromFeature.TasksState) => state.todos
);

export const getTodosEntities = createSelector(
  getTodoState,
  fromTodos.getTodosEntities
);

export const getSelectedTodo = createSelector(
  getTodosEntities,
  fromRoot.getRouterState,
  (entities, router): Todo => {
    return router.state && entities[router.state.params.todoId];
  }
);

export const getAllTodos = createSelector(
  getTodosEntities,
  entities => {
    if (entities.content) {
      // make content as array to iterate in the container
      const content = Object.keys(entities.content).map(
        id => entities.content[id]
      );
      return {
        links: entities.links,
        content,
        page: entities.page
      };
    }
  }
);

export const getTodosLoaded = createSelector(
  getTodoState,
  fromTodos.getTodosLoaded
);
export const getTodosLoading = createSelector(
  getTodoState,
  fromTodos.getTodosLoading
);
