import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TasksRoutingModule } from './tasks-routing.module';
import { StoreModule } from '@ngrx/store';

import { reducers, effects } from './store';

import * as fromContainers from './containers';
import * as fromServices from './services';
import * as fromDumb from './dumb';
import { EffectsModule } from '@ngrx/effects';
import { TodoFormComponent } from './dumb/todo-form/todo-form.component';

@NgModule({
  declarations: [...fromContainers.containers, ...fromDumb.dumbs, TodoFormComponent],
  exports: [...fromContainers.containers, ...fromDumb.dumbs],
  imports: [
    CommonModule,
    HttpClientModule,
    TasksRoutingModule,
    StoreModule.forFeature('tasks', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [...fromServices.services]
})
export class TasksModule {}
