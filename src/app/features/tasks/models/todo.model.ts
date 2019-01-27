import { Link, ContentList } from 'src/app/shared';

export class Todo extends ContentList {
  id?: string;
  title?: string;
  description?: string;
  [id: number]: any;

  constructor(options: Todo) {
    super();
    this.id = options.id;
    this.title = options.title;
    this.description = options.description;
  }
}
