import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models';

@Component({
  selector: 'app-todo-basic-info',
  templateUrl: './todo-basic-info.component.html',
  styleUrls: ['./todo-basic-info.component.scss']
})
export class TodoBasicInfoComponent implements OnInit {
  @Input() todoInfo: Todo;

  constructor() {}

  ngOnInit() {}
}
