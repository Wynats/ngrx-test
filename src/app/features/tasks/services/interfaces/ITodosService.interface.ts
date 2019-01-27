import { Observable } from 'rxjs';
import { List } from 'src/app/shared';
import { Todo } from '../../models';

export interface ITodosService {
  getTodos: () => Observable<List<Todo[]>>;
}
