import { Injectable } from '@angular/core';
import { Todo } from '../models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { List } from 'src/app/shared';
import { ITodosService } from './interfaces';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosService implements ITodosService {
  private url = 'http://localhost:8080/todos';

  constructor(private http: HttpClient) {}

  public getTodos(): Observable<List<Todo[]>> {
    return this.http
      .get<List<Todo[]>>(this.url)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
