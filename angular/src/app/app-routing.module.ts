import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent }      from './books.component';
import { DetailComponent }      from './detail.component';
import { CreateComponent }      from './create.component';
import { UpdateComponent }      from './update.component';

const routes: Routes = [
    { path: 'books',     component: BooksComponent },
    { path: 'books/create',     component: CreateComponent },
    { path: 'detail/:id',     component: DetailComponent },
    { path: 'update/:id',     component: UpdateComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}