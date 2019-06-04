(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");








var appRoutes = [
    { path: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ROUTE_LOGIN, component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"] },
    { path: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ROUTE_HOME, component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ROUTE_PAGE_NOT_FOUND, component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] },
    { path: '', redirectTo: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ROUTE_LOGIN, pathMatch: 'full' },
    { path: '**', redirectTo: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ROUTE_PAGE_NOT_FOUND, pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _services_restful_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/restful.service */ "./src/app/services/restful.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _services_tokeninterceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/tokeninterceptor.service */ "./src/app/services/tokeninterceptor.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _errordialog_errordialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./errordialog/errordialog.component */ "./src/app/errordialog/errordialog.component.ts");
/* harmony import */ var _errordialog_errordialog_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./errordialog/errordialog.service */ "./src/app/errordialog/errordialog.service.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _errordialog_errordialog_component__WEBPACK_IMPORTED_MODULE_14__["ErrordialogComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_16__["SigninComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__["PageNotFoundComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            providers: [
                _services_restful_service__WEBPACK_IMPORTED_MODULE_10__["RestfulService"],
                _services_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"],
                _errordialog_errordialog_service__WEBPACK_IMPORTED_MODULE_15__["ErrordialogService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], useClass: _services_tokeninterceptor_service__WEBPACK_IMPORTED_MODULE_12__["TokeninterceptorService"], multi: true }
            ],
            entryComponents: [_errordialog_errordialog_component__WEBPACK_IMPORTED_MODULE_14__["ErrordialogComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem("token") != null) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate([_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ROUTE_LOGIN], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/errordialog/errordialog.component.css":
/*!*******************************************************!*\
  !*** ./src/app/errordialog/errordialog.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yZGlhbG9nL2Vycm9yZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/errordialog/errordialog.component.html":
/*!********************************************************!*\
  !*** ./src/app/errordialog/errordialog.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title align=\"center\">\n  {{title}}\n</h2>\n<mat-dialog-content>\n  <p>\n    Reason: {{data.reason}}\n  </p>\n  <p>\n    Status: {{data.status}}\n  </p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"center\">\n  <button mat-button mat-dialog-close>Close</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/errordialog/errordialog.component.ts":
/*!******************************************************!*\
  !*** ./src/app/errordialog/errordialog.component.ts ***!
  \******************************************************/
/*! exports provided: ErrordialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrordialogComponent", function() { return ErrordialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ErrordialogComponent = /** @class */ (function () {
    function ErrordialogComponent(data) {
        this.data = data;
        this.title = 'Error';
    }
    ErrordialogComponent.prototype.ngOnInit = function () {
    };
    ErrordialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-errordialog',
            template: __webpack_require__(/*! ./errordialog.component.html */ "./src/app/errordialog/errordialog.component.html"),
            styles: [__webpack_require__(/*! ./errordialog.component.css */ "./src/app/errordialog/errordialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ErrordialogComponent);
    return ErrordialogComponent;
}());



/***/ }),

/***/ "./src/app/errordialog/errordialog.service.ts":
/*!****************************************************!*\
  !*** ./src/app/errordialog/errordialog.service.ts ***!
  \****************************************************/
/*! exports provided: ErrordialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrordialogService", function() { return ErrordialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _errordialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errordialog.component */ "./src/app/errordialog/errordialog.component.ts");




var ErrordialogService = /** @class */ (function () {
    function ErrordialogService(dialog) {
        this.dialog = dialog;
    }
    ErrordialogService.prototype.openDialog = function (data) {
        var dialogRef = this.dialog.open(_errordialog_component__WEBPACK_IMPORTED_MODULE_3__["ErrordialogComponent"], {
            width: '300px',
            data: data
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed.. result', result);
        });
    };
    ErrordialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ErrordialogService);
    return ErrordialogService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  header works!\n</p>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services/restful.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/restful.service.ts ***!
  \*********************************************/
/*! exports provided: RestfulService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestfulService", function() { return RestfulService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var RestfulService = /** @class */ (function () {
    function RestfulService(http) {
        this.http = http;
    }
    RestfulService.prototype.api_GET = function (perameterjson, apiPath) {
        console.log('perameter json for get call is ', perameterjson);
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_HOST;
        switch (apiPath) {
            case _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_HOST:
                url += _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_HOST + '?page=' + perameterjson.page + '&id=' + perameterjson.id;
                break;
            default:
                console.error('ERROR -- : @api_GET api path not added.');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('api path not added.');
        }
        console.log('called api [' + url + ']');
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                console.log('event--->>>', event);
                // this.errorDialogService.openDialog(event);
            }
            return event;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error || 'Server error'); }));
    };
    RestfulService.prototype.api_DELETE = function (data, apiPath) {
        console.log('api_DELETE data ', data);
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_HOST;
        switch (apiPath) {
            case _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_HOST:
                url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_HOST + data._id;
                break;
            default:
                console.error('ERROR -- : @api_DELETE api path not added.');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('api path not added.');
        }
        console.log('called api [' + url + ']');
        return this.http.delete(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                console.log('event--->>>', event);
                // this.errorDialogService.openDialog(event);
            }
            return event;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error || 'Server error'); }));
    };
    RestfulService.prototype.api_PUT = function (data, apiPath) {
        console.log('put data ', data);
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_HOST;
        switch (apiPath) {
            case _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_HOST:
                url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_HOST;
                break;
            default:
                console.error('ERROR -- : @api_PUT api path not added.');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('api path not added.');
        }
        console.log('called api [' + url + ']');
        return this.http.put(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                console.log('event--->>>', event);
                // this.errorDialogService.openDialog(event);
            }
            return event;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error || 'Server error'); }));
    };
    RestfulService.prototype.api_POST = function (data, apiPath) {
        console.log('post data ', data);
        console.log('post apiPath ', apiPath);
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_HOST;
        switch (apiPath) {
            case _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_LOGIN:
                url += _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_LOGIN;
                break;
            case _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_REGISTER:
                url += _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_REGISTER;
                break;
            default:
                console.error('ERROR -- : @api_POST api path not added.');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('api path not added.');
        }
        console.log('called api [' + url + ']');
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                console.log('event--->>>', event);
                // this.errorDialogService.openDialog(event);
            }
            return event;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error || 'Server error'); }));
    };
    RestfulService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RestfulService);
    return RestfulService;
}());



/***/ }),

/***/ "./src/app/services/tokeninterceptor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/tokeninterceptor.service.ts ***!
  \******************************************************/
/*! exports provided: TokeninterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokeninterceptorService", function() { return TokeninterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _errordialog_errordialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errordialog/errordialog.service */ "./src/app/errordialog/errordialog.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var TokeninterceptorService = /** @class */ (function () {
    function TokeninterceptorService(errorDialogService) {
        this.errorDialogService = errorDialogService;
    }
    TokeninterceptorService.prototype.intercept = function (request, next) {
        var _this = this;
        var token = localStorage.getItem('token');
        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        request = request.clone({ headers: request.headers.set('appname', 'Remittance') });
        request = request.clone({ headers: request.headers.set('portalname', 'remittance') });
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
                console.log('event--->>>', event);
                // this.errorDialogService.openDialog(event);
            }
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            var data = {};
            data = {
                reason: error && error.error.reason ? error.error.reason : '',
                status: error.status
            };
            _this.errorDialogService.openDialog(data);
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
        }));
    };
    TokeninterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_errordialog_errordialog_service__WEBPACK_IMPORTED_MODULE_2__["ErrordialogService"]])
    ], TokeninterceptorService);
    return TokeninterceptorService;
}());



/***/ }),

/***/ "./src/app/services/util.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/util.service.ts ***!
  \******************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _errordialog_errordialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errordialog/errordialog.service */ "./src/app/errordialog/errordialog.service.ts");



var UtilService = /** @class */ (function () {
    function UtilService(errorDialogService) {
        this.errorDialogService = errorDialogService;
        this.errorMessagesArray = ["Please enter valid email.", "Wrong email and/or password", "Backend Server Issue", "Something is not right"];
    }
    UtilService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    UtilService.prototype.errorMessage = function (errorcode) {
        var data = {};
        data = {
            reason: this.errorMessagesArray[errorcode] + '',
            status: errorcode
        };
        this.errorDialogService.openDialog(data);
    };
    UtilService.prototype.alertErrors = function (errors) {
        var data = {};
        data = {
            reason: errors,
            status: 1001
        };
        this.errorDialogService.openDialog(data);
    };
    UtilService.prototype.readfile = function (event) {
        var fileObj = {
            "name": "",
            "type": "",
            "size": "",
            "lastModifiedDate": "",
            "result": ""
        };
        fileObj.name = event.target.files[0].name;
        fileObj.type = event.target.files[0].type;
        fileObj.size = event.target.files[0].size;
        fileObj.lastModifiedDate = event.target.files[0].lastModifiedDate;
        var reader = new FileReader();
        reader.onload = function (evt) {
            console.info("reader object onload: ", evt);
            fileObj.result = evt.target["result"];
        };
        reader.readAsDataURL(event.target.files[0]);
        // console.info("fileSelected",this.util.uploadFile(event.target.files[0]))
        // console.info("fileObj",fileObj)
        return fileObj;
    };
    UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_errordialog_errordialog_service__WEBPACK_IMPORTED_MODULE_2__["ErrordialogService"]])
    ], UtilService);
    return UtilService;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#signin-container {\n  text-align: center;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  height: 82vH;\n  height: calc(100vH - 136px);\n}\n#signin-wrapper{\n  padding: 2em 3em;\n  width: 500px;\n  border-radius: 4px;\n  border:1px solid #eee;\n  margin: 0 auto;\n}\n#signin-form{\n  margin-top: 1em;\n}\nimg#sc-chalk-logo-img{\n  height: 70px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2lnbmluLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogODJ2SDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZIIC0gMTM2cHgpO1xufVxuI3NpZ25pbi13cmFwcGVye1xuICBwYWRkaW5nOiAyZW0gM2VtO1xuICB3aWR0aDogNTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOjFweCBzb2xpZCAjZWVlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbiNzaWduaW4tZm9ybXtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuaW1nI3NjLWNoYWxrLWxvZ28taW1ne1xuICBoZWlnaHQ6IDcwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inlineitemes\">\n  <mat-card class=\"half\" align=\"center\">\n    <div id=\"sc-chalk-logo\">\n      <img id=\"sc-chalk-logo-img\" src=\"/assets/logo.png\">\n    </div>\n    <form\n      [formGroup]=\"loginForm\"\n      (ngSubmit)=\"onLoginSubmit()\"\n      autocomplete=\"off\">\n      <mat-form-field >\n        <input matInput placeholder=\"Username\" formControlName=\"email\">\n      </mat-form-field>\n      <br/>\n      <mat-form-field >\n        <input matInput placeholder=\"password\" formControlName=\"password\">\n      </mat-form-field>\n      <div class=\"input-container-full-width\" id=\"submit-button-container\">\n        <button\n          mat-raised-button\n          color=\"primary\"\n          id=\"signin-submit-button\"\n          type=\"submit\"\n          [disabled]=\"loadSpinner\">\n          <p id=\"signin-button-text\" *ngIf=\"!loadSpinner\">\n            Login\n          </p>\n          <mat-progress-spinner\n            [diameter]=\"30\"\n            *ngIf=\"loadSpinner\"\n            id=\"signin-spinner\"\n            class=\"progress-spinner\"\n            color=\"accent\"\n            [mode]=\"mode\"\n            [value]=\"value\">\n          </mat-progress-spinner>\n        </button>\n      </div>\n    </form>\n  </mat-card>\n\n  <mat-card class=\"half\" align=\"center\">\n    <form\n      [formGroup]=\"registerForm\"\n      (ngSubmit)=\"onRegisterSubmit()\"\n      autocomplete=\"off\">\n      <img style=\"width:180px;height:auto;\" [src]=\"profilePic.result\" alt=\"Profile\" />\n      <br/>\n      <input  placeholder=\"Upload Profile Pic\" type=\"file\" accept=\"image/*\"  (change)=fileEvent($event) >\n      <br/>\n      <mat-form-field >\n        <input matInput placeholder=\"Name\" formControlName=\"name\">\n      </mat-form-field>\n      <br/>\n      <mat-form-field >\n        <input matInput placeholder=\"Email\" formControlName=\"email\">\n      </mat-form-field>\n      <br/>\n      <mat-form-field >\n        <input matInput placeholder=\"password\" formControlName=\"password\">\n      </mat-form-field>\n      <br/>\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"myDatepicker\"  placeholder=\"dob\" formControlName=\"dob\">\n        <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\n        <mat-datepicker #myDatepicker></mat-datepicker>\n      </mat-form-field>\n      <br/>\n      <mat-form-field >\n        <input matInput placeholder=\"contact\" formControlName=\"contact\">\n      </mat-form-field>\n      <div class=\"input-container-full-width\" id=\"submit-button-container\">\n        <button\n          mat-raised-button\n          color=\"primary\"\n          id=\"signin-submit-button\"\n          type=\"submit\"\n          [disabled]=\"loadSpinner\">\n          <p id=\"signin-button-text\" *ngIf=\"!loadSpinner\">\n            Register\n          </p>\n          <mat-progress-spinner\n            [diameter]=\"30\"\n            *ngIf=\"loadSpinner\"\n            id=\"signin-spinner\"\n            class=\"progress-spinner\"\n            color=\"accent\"\n            [mode]=\"mode\"\n            [value]=\"value\">\n          </mat-progress-spinner>\n        </button>\n      </div>\n    </form>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _errordialog_errordialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errordialog/errordialog.service */ "./src/app/errordialog/errordialog.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _services_restful_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/restful.service */ "./src/app/services/restful.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var SigninComponent = /** @class */ (function () {
    function SigninComponent(errorDialogService, util, rest, router, route) {
        this.errorDialogService = errorDialogService;
        this.util = util;
        this.rest = rest;
        this.router = router;
        this.route = route;
        this.loadSpinner = false;
        this.mode = 'indeterminate';
        this.value = 50;
        this.profilePic = {
            "name": "default",
            "type": "",
            "size": "",
            "lastModifiedDate": "",
            "result": "/assets/photoplace.jpeg"
        };
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            rememberMe: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, null)
        });
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].ROUTE_HOME;
    };
    SigninComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        if (this.util.validateEmail(this.loginForm.value.email)) {
            this.loadSpinner = true;
            this.rest.api_POST({
                username: this.loginForm.value.email,
                password: this.loginForm.value.password
            }, _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].API_LOGIN)
                .subscribe(function (data) {
                console.info('----->>>', data);
                _this.loadSpinner = false;
                if (data["status"]) {
                    localStorage.setItem("user", JSON.stringify(data["user"]));
                    localStorage.setItem("token", data["token"]);
                    _this.router.navigate([_this.returnUrl]);
                }
                else {
                    _this.util.alertErrors(data["errors"]);
                    console.log("Wrong email and/or password.");
                }
            }, function (error) {
                _this.loadSpinner = false;
                _this.util.errorMessage(2);
            });
            // this.loginForm.reset();
        }
        else {
            this.util.errorMessage(0);
            console.log("Please enter valid email.");
        }
    };
    SigninComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        if (this.util.validateEmail(this.registerForm.value.email)) {
            this.loadSpinner = true;
            this.rest.api_POST({
                name: this.registerForm.value.name,
                email: this.registerForm.value.email,
                dob: this.registerForm.value.dob,
                contact: this.registerForm.value.contact,
                photo: this.profilePic,
                password: this.registerForm.value.password
            }, _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].API_REGISTER)
                .subscribe(function (data) {
                console.info('----->>>', data);
                _this.loadSpinner = false;
                if (data["status"]) {
                    localStorage.setItem("user", JSON.stringify(data["user"]));
                    localStorage.setItem("token", data["token"]);
                    _this.router.navigate([_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].ROUTE_HOME]);
                }
                else {
                    _this.util.alertErrors(data["errors"]);
                }
            }, function (error) {
                _this.loadSpinner = false;
                _this.util.errorMessage(0);
            });
            // this.registerForm.reset();
        }
        else {
            this.util.errorMessage(0);
            console.log("Please enter valid email.");
        }
    };
    SigninComponent.prototype.fileEvent = function (event) {
        this.profilePic = this.util.readfile(event);
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_errordialog_errordialog_service__WEBPACK_IMPORTED_MODULE_3__["ErrordialogService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
            _services_restful_service__WEBPACK_IMPORTED_MODULE_5__["RestfulService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true,
    API_HOST: "http://34.203.42.185:8899",
    API_LOGIN: "/login/v1",
    API_REGISTER: '/register/v1',
    ROUTE_LOGIN: "login",
    ROUTE_HOME: "home",
    ROUTE_PAGE_NOT_FOUND: "pagenotfound"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chalk/office/personal/MEAN7/remittance7/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map