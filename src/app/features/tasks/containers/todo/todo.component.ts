import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todoInfo: Todo;

  constructor() {}

  ngOnInit() {}
}
