webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__books_component__ = __webpack_require__("../../../../../src/app/books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_component__ = __webpack_require__("../../../../../src/app/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_component__ = __webpack_require__("../../../../../src/app/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__update_component__ = __webpack_require__("../../../../../src/app/update.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'books', component: __WEBPACK_IMPORTED_MODULE_2__books_component__["a" /* BooksComponent */] },
    { path: 'books/create', component: __WEBPACK_IMPORTED_MODULE_4__create_component__["a" /* CreateComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_3__detail_component__["a" /* DetailComponent */] },
    { path: 'update/:id', component: __WEBPACK_IMPORTED_MODULE_5__update_component__["a" /* UpdateComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_service__ = __webpack_require__("../../../../../src/app/book.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Коллекция книг';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <router-outlet></router-outlet>\n  ",
        providers: [__WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__books_component__ = __webpack_require__("../../../../../src/app/books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_component__ = __webpack_require__("../../../../../src/app/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_component__ = __webpack_require__("../../../../../src/app/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__update_component__ = __webpack_require__("../../../../../src/app/update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__books_component__["a" /* BooksComponent */],
            __WEBPACK_IMPORTED_MODULE_6__create_component__["a" /* CreateComponent */],
            __WEBPACK_IMPORTED_MODULE_7__update_component__["a" /* UpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_5__detail_component__["a" /* DetailComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/book.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookService = (function () {
    function BookService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.booksUrl = '/apibooks'; // URL to web api
    }
    BookService.prototype.getData = function () {
        return this.http.get(this.booksUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BookService.prototype.getDetail = function (id) {
        return this.http.get(this.booksUrl + "/" + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BookService.prototype.create = function (title, src, created_at, description, author) {
        return this.http
            .post(this.booksUrl, JSON.stringify({
            title: title,
            src: src,
            created_at: created_at,
            description: description,
            author: author
        }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    BookService.prototype.update = function (book) {
        var url = this.booksUrl + "/" + book.id;
        return this.http
            .put(url, JSON.stringify(book), { headers: this.headers })
            .toPromise()
            .then(function () { return book; })
            .catch(this.handleError);
    };
    BookService.prototype.delete = function (id) {
        var url = this.booksUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .catch(this.handleError);
    };
    BookService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return BookService;
}());
BookService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], BookService);

var _a;
//# sourceMappingURL=book.service.js.map

/***/ }),

/***/ "../../../../../src/app/books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_service__ = __webpack_require__("../../../../../src/app/book.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BooksComponent = (function () {
    function BooksComponent(_bookService) {
        this._bookService = _bookService;
    }
    BooksComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    BooksComponent.prototype.getBooks = function () {
        var _this = this;
        this._bookService.getData().then(function (books) { return _this.books = books; });
    };
    return BooksComponent;
}());
BooksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'my-books',
        template: __webpack_require__("../../../../../src/app/templates/books.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */]) === "function" && _a || Object])
], BooksComponent);

var _a;
//# sourceMappingURL=books.component.js.map

/***/ }),

/***/ "../../../../../src/app/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_service__ = __webpack_require__("../../../../../src/app/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateComponent = (function () {
    function CreateComponent(_bookService, location) {
        this._bookService = _bookService;
        this.location = location;
    }
    CreateComponent.prototype.add = function (title, src, created_at, description, author) {
        var _this = this;
        title = title.trim();
        src = src.trim();
        created_at = created_at.trim();
        description = description.trim();
        author = author.trim();
        if (!title) {
            return;
        }
        this._bookService.create(title, src, created_at, description, author)
            .then(function () {
            _this.location.back();
        });
    };
    return CreateComponent;
}());
CreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'my-detail',
        template: __webpack_require__("../../../../../src/app/templates/create.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* Location */]) === "function" && _b || Object])
], CreateComponent);

var _a, _b;
//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ "../../../../../src/app/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_service__ = __webpack_require__("../../../../../src/app/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailComponent = (function () {
    function DetailComponent(_bookService, route, location, router) {
        this._bookService = _bookService;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.getBook();
    };
    DetailComponent.prototype.delete = function (book) {
        var _this = this;
        this._bookService
            .delete(book.id)
            .then(function () {
            _this.router.navigate(['/books']);
        });
    };
    DetailComponent.prototype.getBook = function () {
        var _this = this;
        this.route.params.switchMap(function (params) { return _this._bookService.getDetail(+params['id']); })
            .subscribe(function (book) { return _this.book = book; });
    };
    DetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return DetailComponent;
}());
DetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Component */])({
        selector: 'my-detail',
        template: __webpack_require__("../../../../../src/app/templates/detail.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* Location */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], DetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/templates/books.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <p>\n                <a class=\"btn btn-lg btn-success\" [routerLink]=\"['/books/create']\">+ Добавить материал</a>\n            </p>\n        </div>\n    </div>\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div *ngFor=\"let book of books\" class=\"col-xs-6 col-md-2\">\n            <a routerLink=\"/detail/{{book.id}}\" class=\"thumbnail\">\n                <img src = \"{{book.src}}\" style=\"width:200px;height:200px;\">\n            </a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/templates/create.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">Создание нового материала</div>\n                <div class=\"panel-body\">\n                    <div class=\"form-group\">\n                        <label>Название</label>\n                        <input class=\"form-control\" placeholder=\"Введите название книги\" #bookName />\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Картинка</label>\n                        <input class=\"form-control\" placeholder=\"Ссылка на изображение\" #bookSrc />\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Дата</label>\n                        <input class=\"form-control\" placeholder=\"Введите дату публикации\" #createDate />\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Детальное описание</label>\n                        <textarea class=\"form-control\" placeholder=\"Детальное описание\" #bookDescription ></textarea>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Автор</label>\n                        <input class=\"form-control\" placeholder=\"Автор\" #bookAuthor />\n                    </div>\n                    <button (click)=\"add(bookName.value, bookSrc.value, createDate.value, bookDescription.value, bookAuthor.value);\n                    bookName.value='';  bookSrc.value=''; createDate.value=''; bookDescription.value=''; bookAuthor.value=''\"\n                            class=\"btn btn-primary\">Отправить</button>\n                    <a [routerLink]=\"['/books']\" class=\"btn btn-default\">Назад</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-6\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/templates/detail.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-body\">\n                    <h2>{{ book.title }}</h2>\n                    <p>{{ book.created_at }}</p>\n                    <p>\n                        <a class=\"btn btn-warning\" routerLink=\"/update/{{book.id}}\">Редактировать</a>\n                        <a class=\"btn btn-danger\" (click)=\"delete(book); $event.stopPropagation()\">Удалить</a>\n                    </p>\n                    <p>\n                        <img src = \"{{ book.src }}\" class=\"img-responsive img-rounded\">\n                    </p>\n                    <p>{{ book.description }}</p>\n                    <p><b>{{ book.author }}</b></p>\n                    <p>\n                        <a class=\"btn btn-default\" [routerLink]=\"['/books']\">back</a>\n                    </p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-6\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/templates/update.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">Редактирование материала</div>\n                <div class=\"panel-body\">\n                    <div class=\"form-group\">\n                        <label>Название</label>\n                        <input class=\"form-control\" [(ngModel)]=\"book.title\" (ngModelChange)=\"save()\" placeholder=\"Название\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Дата</label>\n                        <input class=\"form-control\" [(ngModel)]=\"book.created_at\" (ngModelChange)=\"save()\" placeholder=\"Ссылка на изображение\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Картинка</label>\n                        <input class=\"form-control\" [(ngModel)]=\"book.src\" (ngModelChange)=\"save()\" placeholder=\"Ссылка на изображение\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Детальное описание</label>\n                        <textarea class=\"form-control\" [(ngModel)]=\"book.description\" (ngModelChange)=\"save()\" placeholder=\"Детальное описание\" ></textarea>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Автор</label>\n                        <input class=\"form-control\" [(ngModel)]=\"book.author\" (ngModelChange)=\"save()\" placeholder=\"Ссылка на изображение\" />\n                    </div>\n                    <a (click)=\"goBack();\" class=\"btn btn-default\">Назад</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-6\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_service__ = __webpack_require__("../../../../../src/app/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateComponent = (function () {
    function UpdateComponent(_bookService, route, location) {
        this._bookService = _bookService;
        this.route = route;
        this.location = location;
    }
    UpdateComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    UpdateComponent.prototype.getBooks = function () {
        var _this = this;
        this.route.params.switchMap(function (params) { return _this._bookService.getDetail(+params['id']); })
            .subscribe(function (book) { return _this.book = book; });
    };
    UpdateComponent.prototype.save = function () {
        this._bookService.update(this.book);
    };
    UpdateComponent.prototype.goBack = function () {
        this.location.back();
    };
    return UpdateComponent;
}());
UpdateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Component */])({
        selector: 'my-detail',
        template: __webpack_require__("../../../../../src/app/templates/update.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* Location */]) === "function" && _c || Object])
], UpdateComponent);

var _a, _b, _c;
//# sourceMappingURL=update.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map