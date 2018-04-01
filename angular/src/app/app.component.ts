import { Component } from '@angular/core';

import {BookService} from './book.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
  `,
  providers: [BookService]
})

export class AppComponent {
  title = 'Коллекция книг';
}