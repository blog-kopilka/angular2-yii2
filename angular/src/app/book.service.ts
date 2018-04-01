import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Book } from './book';

@Injectable()
export class BookService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private booksUrl = '/apibooks';  // URL to web api

    constructor(private http: Http) { }

    getData(): Promise<Book[]> {
        return this.http.get(this.booksUrl)
            .toPromise()
            .then(response => response.json() as Book[])
            .catch(this.handleError);
    }

    getDetail(id: number): Promise<Book> {
        return this.http.get(`${this.booksUrl}/${id}`)
            .toPromise()
            .then(response => response.json() as Book)
            .catch(this.handleError);
    }

    create(title: string, src: string, created_at: string, description: string, author: string): Promise<Book> {
        return this.http
            .post(this.booksUrl, JSON.stringify({
                title: title,
                src: src,
                created_at: created_at,
                description: description,
                author: author
            }), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Book)
            .catch(this.handleError);
    }

    update(book: Book): Promise<Book> {
        const url = `${this.booksUrl}/${book.id}`;
        return this.http
            .put(url, JSON.stringify(book), {headers: this.headers})
            .toPromise()
            .then(() => book)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.booksUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            // .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}