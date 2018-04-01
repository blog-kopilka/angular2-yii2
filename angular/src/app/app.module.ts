import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { BooksComponent }  from './books.component';
import { DetailComponent }      from './detail.component';
import { CreateComponent }      from './create.component';
import { UpdateComponent }      from './update.component';

import { AppRoutingModule }     from './app-routing.module';

import { HttpModule }    from '@angular/http';


@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    BooksComponent,
    CreateComponent,
    UpdateComponent,
    DetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }