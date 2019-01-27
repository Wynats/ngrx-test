import { Page, Link } from '.';

// export class List<Partial<ContentList>> {
//   links: Link[];
//   content: T | T[];
//   page: Page;
// }

export class List<T> {
  links: Link[];
  content: T;
  page: Page;
}
