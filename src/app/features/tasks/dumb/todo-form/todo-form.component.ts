import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Input() todoInfo?: Todo;
  todoForm;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.todoForm = this.fb.group({
      title: [''],
      description: [''],
      people: ['']
    });
  }
}
