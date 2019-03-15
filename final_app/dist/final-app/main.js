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

/***/ "./src/app/add-device/add-device.component.html":
/*!******************************************************!*\
  !*** ./src/app/add-device/add-device.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-2 sidebar\">\n      <app-sider></app-sider>\n    </div>\n    <div class=\"col-xs-6 col-md-10 main\">\n      <h1 class=\"page-header\">Add Device</h1>\n      <div class=\"row\">\n        <div class=\"col-md-4\">.</div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"inputDefault\">Id</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Id\" id=\"inputId\" [(ngModel)]=\"inputId\">\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"inputDefault\">Name</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" id=\"inputName\" [(ngModel)]=\"inputName\">\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"inputDefault\">Location</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Location\" id=\"inputLocation\" [(ngModel)]=\"inputLocation\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"exampleSelect1\">Device Type</label>\n            <select class=\"form-control\" id=\"exampleSelect1\"[(ngModel)]='formSelect'>\n              <option></option>\n              <option>Server</option>\n              <option>Cloud Storage</option>\n              <option>3</option>\n              <option>4</option>\n              <option>5</option>\n            </select>\n          </div>\n          <button type=\"button\" class=\"btn btn-success navbar-right\" (click)=\"submit()\">Submit</button>\n        </div>\n\n        <div class=\"col-md-4\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/add-device/add-device.component.scss":
/*!******************************************************!*\
  !*** ./src/app/add-device/add-device.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1kZXZpY2UvYWRkLWRldmljZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/add-device/add-device.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-device/add-device.component.ts ***!
  \****************************************************/
/*! exports provided: AddDeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDeviceComponent", function() { return AddDeviceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddDeviceComponent = /** @class */ (function () {
    // formSelect;
    // @Select() formSelect='';
    function AddDeviceComponent() {
        this.inputId = '';
        this.inputName = '';
        this.inputLocation = '';
    }
    AddDeviceComponent.prototype.ngOnInit = function () {
    };
    AddDeviceComponent.prototype.submit = function () {
        if (this.inputId === '') {
            alert('inputId can not be empty');
        }
        if (this.inputName === '') {
            alert('inputName can not be empty');
        }
        if (this.inputLocation === '') {
            alert('inputLocation can not be empty');
        }
        this.inputId = '';
        this.inputName = '';
        this.inputLocation = '';
        // this.formSelect='';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddDeviceComponent.prototype, "inputId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddDeviceComponent.prototype, "inputName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddDeviceComponent.prototype, "inputLocation", void 0);
    AddDeviceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-device',
            template: __webpack_require__(/*! ./add-device.component.html */ "./src/app/add-device/add-device.component.html"),
            styles: [__webpack_require__(/*! ./add-device.component.scss */ "./src/app/add-device/add-device.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddDeviceComponent);
    return AddDeviceComponent;
}());



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
/* harmony import */ var _add_device_add_device_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-device/add-device.component */ "./src/app/add-device/add-device.component.ts");
/* harmony import */ var _change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-pass/change-pass.component */ "./src/app/change-pass/change-pass.component.ts");
/* harmony import */ var _status_table_status_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status-table/status-table.component */ "./src/app/status-table/status-table.component.ts");
/* harmony import */ var _device_table_device_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-table/device-table.component */ "./src/app/device-table/device-table.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _register_section_register_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register-section/register-section.component */ "./src/app/register-section/register-section.component.ts");
/* harmony import */ var _login_section_login_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login-section/login-section.component */ "./src/app/login-section/login-section.component.ts");
/* harmony import */ var _status_visualization_status_visualization_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./status-visualization/status-visualization.component */ "./src/app/status-visualization/status-visualization.component.ts");
/* harmony import */ var _location_visualization_location_visualization_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./location-visualization/location-visualization.component */ "./src/app/location-visualization/location-visualization.component.ts");












var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'index', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"] },
    { path: 'add', component: _add_device_add_device_component__WEBPACK_IMPORTED_MODULE_3__["AddDeviceComponent"] },
    { path: 'change', component: _change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_4__["ChangePassComponent"] },
    { path: 'status_table', component: _status_table_status_table_component__WEBPACK_IMPORTED_MODULE_5__["StatusTableComponent"] },
    { path: 'device_table', component: _device_table_device_table_component__WEBPACK_IMPORTED_MODULE_6__["DeviceTableComponent"] },
    { path: 'login', component: _login_section_login_section_component__WEBPACK_IMPORTED_MODULE_9__["LoginSectionComponent"] },
    { path: 'register', component: _register_section_register_section_component__WEBPACK_IMPORTED_MODULE_8__["RegisterSectionComponent"] },
    { path: 'status_view', component: _status_visualization_status_visualization_component__WEBPACK_IMPORTED_MODULE_10__["StatusVisualizationComponent"] },
    { path: 'location_visualization', component: _location_visualization_location_visualization_component__WEBPACK_IMPORTED_MODULE_11__["LocationVisualizationComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'Remote Device Management System';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _sider_sider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sider/sider.component */ "./src/app/sider/sider.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _add_device_add_device_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-device/add-device.component */ "./src/app/add-device/add-device.component.ts");
/* harmony import */ var _change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./change-pass/change-pass.component */ "./src/app/change-pass/change-pass.component.ts");
/* harmony import */ var _status_table_status_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./status-table/status-table.component */ "./src/app/status-table/status-table.component.ts");
/* harmony import */ var _device_table_device_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./device-table/device-table.component */ "./src/app/device-table/device-table.component.ts");
/* harmony import */ var _login_section_login_section_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login-section/login-section.component */ "./src/app/login-section/login-section.component.ts");
/* harmony import */ var _register_section_register_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register-section/register-section.component */ "./src/app/register-section/register-section.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _status_visualization_status_visualization_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./status-visualization/status-visualization.component */ "./src/app/status-visualization/status-visualization.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _location_visualization_location_visualization_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./location-visualization/location-visualization.component */ "./src/app/location-visualization/location-visualization.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _sider_sider_component__WEBPACK_IMPORTED_MODULE_8__["SiderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _add_device_add_device_component__WEBPACK_IMPORTED_MODULE_10__["AddDeviceComponent"],
                _change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_11__["ChangePassComponent"],
                _status_table_status_table_component__WEBPACK_IMPORTED_MODULE_12__["StatusTableComponent"],
                _device_table_device_table_component__WEBPACK_IMPORTED_MODULE_13__["DeviceTableComponent"],
                _login_section_login_section_component__WEBPACK_IMPORTED_MODULE_14__["LoginSectionComponent"],
                _register_section_register_section_component__WEBPACK_IMPORTED_MODULE_15__["RegisterSectionComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_16__["HomepageComponent"],
                _status_visualization_status_visualization_component__WEBPACK_IMPORTED_MODULE_17__["StatusVisualizationComponent"],
                _location_visualization_location_visualization_component__WEBPACK_IMPORTED_MODULE_21__["LocationVisualizationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_5__["NgxEchartsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_19__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_20__["InMemoryDataService"], { dataEncapsulation: false }),
                _agm_core__WEBPACK_IMPORTED_MODULE_22__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDay8dDQw6qmsJ2zMGmVZYHhA0xaQ-au_k'
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/change-pass/change-pass.component.html":
/*!********************************************************!*\
  !*** ./src/app/change-pass/change-pass.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-2 sidebar\">\n      <app-sider></app-sider>\n    </div>\n    <div class=\"col-xs-6 col-md-10 main\">\n      <h1 class=\"page-header\">Change Password</h1>\n      <div class=\"row\">\n        <div class=\"col-md-4\"></div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group row\">\n            <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Email</label>\n            <div class=\"col-sm-10\">\n              <input type=\"text\" readonly=\"\" class=\"form-control-plaintext\" id=\"staticEmail\" value=\"email@example.com\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"Password1\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"Password1\" [(ngModel)] = \"Password1\" placeholder=\"Enter Password\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"Password2\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"Password2\" [(ngModel)] = \"Password2\" placeholder=\"Enter Password Again\">\n          </div>\n          <button type=\"button\" class=\"btn btn-success navbar-right\" (click) = \"checkpwdmatch()\">Submit</button>\n        </div>\n        <div class=\"col-md-4\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/change-pass/change-pass.component.scss":
/*!********************************************************!*\
  !*** ./src/app/change-pass/change-pass.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS1wYXNzL2NoYW5nZS1wYXNzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/change-pass/change-pass.component.ts":
/*!******************************************************!*\
  !*** ./src/app/change-pass/change-pass.component.ts ***!
  \******************************************************/
/*! exports provided: ChangePassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePassComponent", function() { return ChangePassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChangePassComponent = /** @class */ (function () {
    function ChangePassComponent() {
        this.Password1 = '';
        this.Password2 = '';
    }
    ChangePassComponent.prototype.ngOnInit = function () {
    };
    ChangePassComponent.prototype.checkpwdmatch = function () {
        if (this.Password1 === this.Password2) {
            alert('correct');
        }
        else {
            alert('wrong');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChangePassComponent.prototype, "Password1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChangePassComponent.prototype, "Password2", void 0);
    ChangePassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-pass',
            template: __webpack_require__(/*! ./change-pass.component.html */ "./src/app/change-pass/change-pass.component.html"),
            styles: [__webpack_require__(/*! ./change-pass.component.scss */ "./src/app/change-pass/change-pass.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChangePassComponent);
    return ChangePassComponent;
}());



/***/ }),

/***/ "./src/app/device-table/device-table.component.html":
/*!**********************************************************!*\
  !*** ./src/app/device-table/device-table.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<app-header></app-header>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-2 sidebar\">\n      <app-sider></app-sider>\n    </div>\n    <div class=\"col-xs-6 col-md-10 main\">\n      <h1 class=\"page-header\">Device Table</h1>\n      <div class=\"table-responsive\">\n        <table class=\"table table-striped\">\n          <thead>\n          <tr>\n            <th>Id</th>\n            <th>Name</th>\n            <th>Type</th>\n            <th>Location</th>\n            <th>Operation</th>\n          </tr>\n          </thead>\n          <tbody>\n          <!--<tr>-->\n            <!--<td>1,001</td>-->\n            <!--<td>Lorem</td>-->\n            <!--<td>ipsum</td>-->\n            <!--<td>dolor</td>-->\n            <!--<button type=\"button\" class=\"btn btn-info\">Details</button>-->\n            <!--<button type=\"button\" class=\"btn btn-secondary\">Delete</button>-->\n          <!--</tr>-->\n          <!--<tr>-->\n            <!--<td>1,001</td>-->\n            <!--<td>Lorem</td>-->\n            <!--<td>ipsum</td>-->\n            <!--<td>dolor</td>-->\n            <!--<button type=\"button\" class=\"btn btn-info\">Details</button>-->\n            <!--<button type=\"button\" class=\"btn btn-secondary\">Delete</button>-->\n          <!--</tr>-->\n          <tr *ngFor=\"let devices of devicesArr\">\n            <td>{{devices.id}}</td>\n            <td>{{devices.name}}</td>\n            <td>{{devices.type}}</td>\n            <td>{{devices.location}}</td>\n            <button type=\"button\" class=\"btn btn-info\">Details</button>\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"delete(devices)\">Delete</button>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/device-table/device-table.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/device-table/device-table.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldmljZS10YWJsZS9kZXZpY2UtdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/device-table/device-table.component.ts":
/*!********************************************************!*\
  !*** ./src/app/device-table/device-table.component.ts ***!
  \********************************************************/
/*! exports provided: DeviceTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceTableComponent", function() { return DeviceTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../status.service */ "./src/app/status.service.ts");



var DeviceTableComponent = /** @class */ (function () {
    function DeviceTableComponent(statusService) {
        this.statusService = statusService;
    }
    DeviceTableComponent.prototype.ngOnInit = function () {
        this.getDevices();
    };
    DeviceTableComponent.prototype.getDevices = function () {
        var _this = this;
        this.statusService.getDevices().subscribe(function (devices) { return _this.devicesArr = devices; });
    };
    DeviceTableComponent.prototype.delete = function (devices) {
        this.devicesArr = this.devicesArr.filter(function (d) { return d !== devices; });
        this.statusService.deleteDevices(devices).subscribe();
    };
    DeviceTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-table',
            template: __webpack_require__(/*! ./device-table.component.html */ "./src/app/device-table/device-table.component.html"),
            styles: [__webpack_require__(/*! ./device-table.component.scss */ "./src/app/device-table/device-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"]])
    ], DeviceTableComponent);
    return DeviceTableComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr >\n<footer class=\"clear\" style = \"text-align: center\">\n  <p>© 2018 WebSkr: Created By<a href=\"#\"> Webskr team </a>for 6150 final proj</p>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

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
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-expand-xl navbar-dark\">\n  <div class=\"navbar-header d-flex col\">\n    <a class=\"navbar-brand\" routerLink=\"/index\"><i class=\"fa fa-cube\"></i>Remote IOT <b>System</b></a >\n    <button type=\"button\" data-target=\"#navbarCollapse\" data-toggle=\"collapse\" class=\"navbar-toggle navbar-toggler ml-auto\">\n      <span class=\"navbar-toggler-icon\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n    </button>\n  </div>\n  <!-- Collection of nav links, forms, and other content for toggling -->\n  <div id=\"navbarCollapse\" class=\"collapse navbar-collapse justify-content-start\">\n    <form class=\"navbar-form form-inline\">\n      <div class=\"input-group search-box\">\n        <input type=\"text\" id=\"search\" class=\"form-control\" placeholder=\"Search here...\">\n        <span class=\"input-group-addon\"><i class=\"material-icons\">&#xE8B6;</i></span>\n      </div>\n    </form>\n    <ul class=\"nav navbar-nav navbar-right ml-auto\">\n      <li class=\"nav-item dropdown\">\n        <a href=\"#\" data-toggle=\"dropdown\" class=\"nav-link dropdown-toggle user-action\">\n          <img src=\"https://www.tutorialrepublic.com/examples/images/avatar/3.jpg\" class=\"avatar\" alt=\"Avatar\">Leonard</a >\n        <ul class=\"dropdown-menu\">\n          <!--<li><a href=\"#\" class=\"dropdown-item\"><i class=\"fa fa-user-o\"></i> Profile</a ></li>-->\n          <!--<li><a href=\"#\" class=\"dropdown-item\"><i class=\"fa fa-calendar-o\"></i> Calendar</a ></li>-->\n          <li><a href=\"#\" class=\"dropdown-item\" routerLink=\"/change\"><i class=\"fa fa-sliders\"></i> Settings</a ></li>\n          <!-- <li class=\"divider dropdown-divider\"></li> -->\n          <li><a href=\"#\" class=\"dropdown-item\" routerLink=\"/login\"><i class=\"material-icons\">&#xE8AC;</i> Logout</a ></li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<!-- <a class=\"navbar-brand\" href=\"/\">IOT Management System</a >\n<button type=\"button\" class=\"btn btn-secondary text-right\" routerLink=\"/login\" role=\"button\">Logout</button> -->\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #eeeeee;\n  font-family: 'Varela Round', sans-serif; }\n\n#navbarCollapse {\n  height: 100px; }\n\n.form-inline {\n  display: inline-block; }\n\n.navbar-header.col {\n  padding: 0 !important; }\n\n.navbar {\n  color: #fff;\n  background: #0f0f0f;\n  padding: 5px 16px;\n  border-radius: 0;\n  border: none;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1); }\n\n.navbar img {\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  margin-right: 10px; }\n\n.navbar .navbar-brand {\n  color: #fff;\n  padding-left: 0;\n  padding-right: 50px;\n  font-size: 24px; }\n\n.navbar .navbar-brand:hover, .navbar .navbar-brand:focus {\n  color: #fff; }\n\n.navbar .navbar-brand i {\n  font-size: 25px;\n  margin-right: 5px; }\n\n.search-box {\n  position: relative;\n  padding-top: 4px; }\n\n.search-box input {\n  padding-right: 35px;\n  min-height: 38px;\n  border: none;\n  background: #fff;\n  border-radius: 3px !important; }\n\n.search-box input:focus {\n  background: #fff;\n  box-shadow: none; }\n\n.search-box .input-group-addon {\n  min-width: 35px;\n  border: none;\n  background: transparent;\n  position: absolute;\n  right: 0;\n  z-index: 9;\n  padding: 10px 7px;\n  height: 100%; }\n\n.search-box i {\n  color: #a0a5b1;\n  font-size: 19px; }\n\n.navbar .nav-item i {\n  font-size: 18px; }\n\n.navbar .nav-item span {\n  position: relative;\n  top: 3px; }\n\n.navbar .nav > li a {\n  color: #fff;\n  padding: 8px 15px;\n  font-size: 14px; }\n\n.navbar .nav > li a:hover, .navbar .nav > li a:focus {\n  color: #fff;\n  text-shadow: 0 0 4px rgba(255, 255, 255, 0.3); }\n\n.navbar .nav > li > a > i {\n  display: block;\n  text-align: center; }\n\n.navbar .dropdown-item i {\n  font-size: 16px;\n  min-width: 22px; }\n\n.navbar .dropdown-item .material-icons {\n  font-size: 21px;\n  line-height: 16px;\n  vertical-align: middle;\n  margin-top: -2px; }\n\n.navbar .nav-item.open > a, .navbar .nav-item.open > a:hover, .navbar .nav-item.open > a:focus {\n  color: #fff;\n  background: none !important; }\n\n.navbar .dropdown-menu {\n  border-radius: 1px;\n  border-color: #e5e5e5;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); }\n\n.navbar .dropdown-menu li a {\n  color: #777 !important;\n  padding: 8px 20px;\n  line-height: normal; }\n\n.navbar .dropdown-menu li a:hover, .navbar .dropdown-menu li a:focus {\n  color: #333 !important;\n  background: transparent !important; }\n\n.navbar .nav .active a, .navbar .nav .active a:hover, .navbar .nav .active a:focus {\n  color: #fff;\n  text-shadow: 0 0 4px rgba(255, 255, 255, 0.2);\n  background: transparent !important; }\n\n.navbar .nav .user-action {\n  padding: 9px 15px; }\n\n.navbar .navbar-toggle {\n  border-color: #fff; }\n\n.navbar .navbar-toggle .icon-bar {\n  background: #fff; }\n\n.navbar .navbar-toggle:focus, .navbar .navbar-toggle:hover {\n  background: transparent; }\n\n.navbar .navbar-nav .open .dropdown-menu {\n  background: #fff;\n  border-radius: 1px;\n  border-color: #fff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); }\n\n.navbar .divider {\n  background-color: #e9ecef !important; }\n\n@media (min-width: 1200px) {\n  .form-inline .input-group {\n    width: 350px;\n    margin-left: 30px; } }\n\n@media (max-width: 1199px) {\n  .navbar .nav > li > a > i {\n    display: inline-block;\n    text-align: left;\n    min-width: 30px;\n    position: relative;\n    top: 4px; }\n  .navbar .navbar-collapse {\n    border: none;\n    box-shadow: none;\n    padding: 0; }\n  .navbar .navbar-form {\n    border: none;\n    display: block;\n    margin: 10px 0;\n    padding: 0; }\n  .navbar .navbar-nav {\n    margin: 8px 0; }\n  .navbar .navbar-toggle {\n    margin-right: 0; }\n  .input-group {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9uYXJkeXVhbi9EZXNrdG9wL3dlYl9maW5hbC9maW5hbF9hcHAvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW1CO0VBQ25CLHdDQUF1QyxFQUN4Qzs7QUFDRDtFQUNFLGNBQVksRUFDYjs7QUFDRDtFQUNFLHNCQUFxQixFQUN0Qjs7QUFDRDtFQUNFLHNCQUFxQixFQUN0Qjs7QUFDRDtFQUNFLFlBQVc7RUFDWCxvQkFBbUI7RUFDbkIsa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixhQUFZO0VBQ1osdUNBQWtDLEVBQ25DOztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsWUFBVztFQUNYLGdCQUFlO0VBQ2Ysb0JBQW1CO0VBQ25CLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0UsWUFBVyxFQUNaOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZixrQkFBaUIsRUFDbEI7O0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsaUJBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsOEJBQTZCLEVBQzlCOztBQUNEO0VBQ0UsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLHdCQUF1QjtFQUN2QixtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLFdBQVU7RUFDVixrQkFBaUI7RUFDakIsYUFBWSxFQUNiOztBQUNEO0VBQ0UsZUFBYztFQUNkLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsU0FBUSxFQUNUOztBQUNEO0VBQ0UsWUFBVztFQUNYLGtCQUFpQjtFQUNqQixnQkFBZSxFQUNoQjs7QUFDRDtFQUNFLFlBQVc7RUFDWCw4Q0FBMEMsRUFDM0M7O0FBQ0Q7RUFDRSxlQUFjO0VBQ2QsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsZ0JBQWU7RUFDZixnQkFBZSxFQUNoQjs7QUFDRDtFQUNFLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLHVCQUFzQjtFQUN0QixpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsNEJBQTJCLEVBQzVCOztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQiwwQ0FBcUMsRUFDdEM7O0FBQ0Q7RUFDRSx1QkFBc0I7RUFDdEIsa0JBQWlCO0VBQ2pCLG9CQUFtQixFQUNwQjs7QUFDRDtFQUNFLHVCQUFzQjtFQUN0QixtQ0FBa0MsRUFDbkM7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsOENBQTBDO0VBQzFDLG1DQUFrQyxFQUNuQzs7QUFDRDtFQUNFLGtCQUFpQixFQUNsQjs7QUFDRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLHdCQUF1QixFQUN4Qjs7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLDBDQUFxQyxFQUN0Qzs7QUFDRDtFQUNFLHFDQUFvQyxFQUNyQzs7QUFDRDtFQUNFO0lBQ0UsYUFBWTtJQUNaLGtCQUFpQixFQUNsQixFQUFBOztBQUVIO0VBQ0U7SUFDRSxzQkFBcUI7SUFDckIsaUJBQWdCO0lBQ2hCLGdCQUFlO0lBQ2YsbUJBQWtCO0lBQ2xCLFNBQVEsRUFDVDtFQUNEO0lBQ0UsYUFBWTtJQUNaLGlCQUFnQjtJQUNoQixXQUFVLEVBQ1g7RUFDRDtJQUNFLGFBQVk7SUFDWixlQUFjO0lBQ2QsZUFBYztJQUNkLFdBQVUsRUFDWDtFQUNEO0lBQ0UsY0FBYSxFQUNkO0VBQ0Q7SUFDRSxnQkFBZSxFQUNoQjtFQUNEO0lBQ0UsWUFBVyxFQUNaLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcbiAgZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnLCBzYW5zLXNlcmlmO1xufVxuI25hdmJhckNvbGxhcHNle1xuICBoZWlnaHQ6MTAwcHg7XG59XG4uZm9ybS1pbmxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ubmF2YmFyLWhlYWRlci5jb2wge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG4ubmF2YmFyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwZjBmMGY7XG4gIHBhZGRpbmc6IDVweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLDAsMCwuMSk7XG59XG4ubmF2YmFyIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm5hdmJhciAubmF2YmFyLWJyYW5kIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLm5hdmJhciAubmF2YmFyLWJyYW5kOmhvdmVyLCAubmF2YmFyIC5uYXZiYXItYnJhbmQ6Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5uYXZiYXIgLm5hdmJhci1icmFuZCBpIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5zZWFyY2gtYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDo0cHg7XG59XG4uc2VhcmNoLWJveCBpbnB1dCB7XG4gIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gIG1pbi1oZWlnaHQ6IDM4cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG59XG4uc2VhcmNoLWJveCBpbnB1dDpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uc2VhcmNoLWJveCAuaW5wdXQtZ3JvdXAtYWRkb24ge1xuICBtaW4td2lkdGg6IDM1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk7XG4gIHBhZGRpbmc6IDEwcHggN3B4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uc2VhcmNoLWJveCBpIHtcbiAgY29sb3I6ICNhMGE1YjE7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cbi5uYXZiYXIgLm5hdi1pdGVtIGkge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ubmF2YmFyIC5uYXYtaXRlbSBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbn1cbi5uYXZiYXIgLm5hdiA+IGxpIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5uYXZiYXIgLm5hdiA+IGxpIGE6aG92ZXIsIC5uYXZiYXIgLm5hdiA+IGxpIGE6Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDAgMCA0cHggcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xufVxuLm5hdmJhciAubmF2ID4gbGkgPiBhID4gaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubmF2YmFyIC5kcm9wZG93bi1pdGVtIGkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1pbi13aWR0aDogMjJweDtcbn1cbi5uYXZiYXIgLmRyb3Bkb3duLWl0ZW0gLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cbi5uYXZiYXIgLm5hdi1pdGVtLm9wZW4gPiBhLCAubmF2YmFyIC5uYXYtaXRlbS5vcGVuID4gYTpob3ZlciwgLm5hdmJhciAubmF2LWl0ZW0ub3BlbiA+IGE6Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuLm5hdmJhciAuZHJvcGRvd24tbWVudSB7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiAjZTVlNWU1O1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwuMDUpO1xufVxuLm5hdmJhciAuZHJvcGRvd24tbWVudSBsaSBhIHtcbiAgY29sb3I6ICM3NzcgIWltcG9ydGFudDtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG4ubmF2YmFyIC5kcm9wZG93bi1tZW51IGxpIGE6aG92ZXIsIC5uYXZiYXIgLmRyb3Bkb3duLW1lbnUgbGkgYTpmb2N1cyB7XG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4ubmF2YmFyIC5uYXYgLmFjdGl2ZSBhLCAubmF2YmFyIC5uYXYgLmFjdGl2ZSBhOmhvdmVyLCAubmF2YmFyIC5uYXYgLmFjdGl2ZSBhOmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAwIDAgNHB4IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5uYXZiYXIgLm5hdiAudXNlci1hY3Rpb24ge1xuICBwYWRkaW5nOiA5cHggMTVweDtcbn1cbi5uYXZiYXIgLm5hdmJhci10b2dnbGUge1xuICBib3JkZXItY29sb3I6ICNmZmY7XG59XG4ubmF2YmFyIC5uYXZiYXItdG9nZ2xlIC5pY29uLWJhciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4ubmF2YmFyIC5uYXZiYXItdG9nZ2xlOmZvY3VzLCAubmF2YmFyIC5uYXZiYXItdG9nZ2xlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ubmF2YmFyIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBib3JkZXItY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLC4wNSk7XG59XG4ubmF2YmFyIC5kaXZpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZiAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7XG4gIC5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXAge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCl7XG4gIC5uYXZiYXIgLm5hdiA+IGxpID4gYSA+IGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1pbi13aWR0aDogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA0cHg7XG4gIH1cbiAgLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC5uYXZiYXIgLm5hdmJhci1mb3JtIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAubmF2YmFyIC5uYXZiYXItbmF2IHtcbiAgICBtYXJnaW46IDhweCAwO1xuICB9XG4gIC5uYXZiYXIgLm5hdmJhci10b2dnbGUge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuICAuaW5wdXQtZ3JvdXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iXX0= */"

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
        this.name = "hello, this is just a test word.";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-2 sidebar\">\n      <app-sider></app-sider>\n    </div>\n    <div class=\"col-xs-6 col-md-10 main\">\n      <h1 class=\"page-header\">Dashboard</h1>\n      <div class=\"jumbotron\">\n        <h1 class=\"display-3\">Hello, {{username}}!</h1>\n        <p class=\"lead\">Welcome to the remote device management system, we are happy to serve you for your devices.</p>\n        <hr class=\"my-4\">\n        <p>Users are gods.</p>\n        <p class=\"lead\">\n          <a class=\"btn btn-primary btn-lg\" routerLink=\"/device_table\" role=\"button\">Device Page</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.scss":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
        this.username = 'Leonard';
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.scss */ "./src/app/homepage/homepage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var status = [
            { id: 1, Name: 'iphone1', Time: '1', Location: 'Beijing', Temperature: '30', Memory: '20GB', Speed: '20' },
            { id: 2, Name: 'iphone2', Time: '1', Location: 'Boston', Temperature: '10', Memory: '20GB', Speed: '20' },
            { id: 3, Name: 'iphone3', Time: '1', Location: 'NewYork', Temperature: '20', Memory: '20GB', Speed: '20' },
            { id: 4, Name: 'iphone4', Time: '1', Location: 'Tianjin', Temperature: '30', Memory: '20GB', Speed: '20' },
            { id: 5, Name: 'iphone5', Time: '1', Location: 'Cali', Temperature: '25', Memory: '20GB', Speed: '20' },
            { id: 6, Name: 'iphone6', Time: '1', Location: 'LA', Temperature: '24', Memory: '20GB', Speed: '20' },
            { id: 7, Name: 'iphone7', Time: '1', Location: 'SF', Temperature: '23', Memory: '20GB', Speed: '20' },
            { id: 8, Name: 'iphone8', Time: '1', Location: 'shanghai', Temperature: '22', Memory: '20GB', Speed: '20' },
            { id: 9, Name: 'iphonexs', Time: '1', Location: 'Wuhan', Temperature: '21', Memory: '20GB', Speed: '20' },
            { id: 10, Name: 'iphonexr', Time: '1', Location: 'Beijing', Temperature: '19', Memory: '20GB', Speed: '20' },
        ];
        var devices = [
            { id: 11, name: 'Mr. Nice', type: '1', location: '2' },
            { id: 12, name: 'Narco', type: '1', location: '2' },
            { id: 13, name: 'Bombasto', type: '1', location: '2' },
            { id: 14, name: 'Celeritas', type: '1', location: '2' },
            { id: 15, name: 'Magneta', type: '1', location: '2' },
            { id: 16, name: 'RubberMan', type: '1', location: '2' },
            { id: 17, name: 'Dynama', type: '1', location: '2' },
            { id: 18, name: 'Dr IQ', type: '1', location: '2' },
            { id: 19, name: 'Magma', type: '1', location: '2' },
            { id: 20, name: 'Tornado', type: '1', location: '2' }
        ];
        return { status: status, devices: devices };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/location-visualization/location-visualization.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/location-visualization/location-visualization.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-2 sidebar\">\n      <app-sider></app-sider>\n    </div>\n    <div class=\"col-xs-6 col-md-10 main\">\n      <h1 class=\"page-header\">Location-Visualization</h1>\n      <div class=\"row\">\n        <!--<div class=\"col-xs-2\"></div>-->\n        <div class=\"col-xs-8\">\n        <!--<agm-map [latitude]=\"lat\" [longitude]=\"lng\">-->\n        <!--<agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>-->\n        <!--</agm-map>-->\n        <!--</div>-->\n      <div class=\"mapouter\">\n        <div class=\"gmap_canvas\">\n          <iframe width=\"1000\" height=\"500\" id=\"gmap_canvas\" src=\"https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\">\n\n          </iframe>\n          <a href=\"https://www.pureblack.de/webdesign-mainz/\">\n\n          </a>\n        </div>\n      </div>\n        <div class=\"col-xs-2\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/location-visualization/location-visualization.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/location-visualization/location-visualization.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mapouter {\n  text-align: right;\n  height: 500px;\n  width: 1000px; }\n\n.gmap_canvas {\n  overflow: hidden;\n  background: none !important;\n  height: 500px;\n  width: 1000px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9uYXJkeXVhbi9EZXNrdG9wL3dlYl9maW5hbC9maW5hbF9hcHAvc3JjL2FwcC9sb2NhdGlvbi12aXN1YWxpemF0aW9uL2xvY2F0aW9uLXZpc3VhbGl6YXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxrQkFBZ0I7RUFDaEIsY0FBWTtFQUNaLGNBQVksRUFDYjs7QUFFRDtFQUNFLGlCQUFlO0VBQ2YsNEJBQXlCO0VBQ3pCLGNBQVk7RUFDWixjQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9sb2NhdGlvbi12aXN1YWxpemF0aW9uL2xvY2F0aW9uLXZpc3VhbGl6YXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2FnbS1tYXAge1xuLy8gIGhlaWdodDogNTAwcHg7XG4vL31cblxuLm1hcG91dGVye1xuICB0ZXh0LWFsaWduOnJpZ2h0O1xuICBoZWlnaHQ6NTAwcHg7XG4gIHdpZHRoOjEwMDBweDtcbn1cblxuLmdtYXBfY2FudmFzIHtcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICBiYWNrZ3JvdW5kOm5vbmUhaW1wb3J0YW50O1xuICBoZWlnaHQ6NTAwcHg7XG4gIHdpZHRoOjEwMDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/location-visualization/location-visualization.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/location-visualization/location-visualization.component.ts ***!
  \****************************************************************************/
/*! exports provided: LocationVisualizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationVisualizationComponent", function() { return LocationVisualizationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocationVisualizationComponent = /** @class */ (function () {
    function LocationVisualizationComponent() {
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    LocationVisualizationComponent.prototype.ngOnInit = function () {
    };
    LocationVisualizationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location-visualization',
            template: __webpack_require__(/*! ./location-visualization.component.html */ "./src/app/location-visualization/location-visualization.component.html"),
            styles: [__webpack_require__(/*! ./location-visualization.component.scss */ "./src/app/location-visualization/location-visualization.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocationVisualizationComponent);
    return LocationVisualizationComponent;
}());



/***/ }),

/***/ "./src/app/login-section/login-section.component.html":
/*!************************************************************!*\
  !*** ./src/app/login-section/login-section.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"backgroundset\">\n  <div class = \"form\">\n    <ul class = \"tab-group\">\n      <li class = \"tab active\">\n        <a routerLink = \"/login\">Login</a>\n      </li>\n\n      <li class = \"tab\">\n        <a routerLink = \"/register\" style=\"background-color: #a0b3b0\">Register</a>\n      </li>\n    </ul>\n\n    <div class = \"tab-content\">\n      <form action = \"/login/\" method = \"post\">\n        <div class = \"field-wrap\">\n          <label>\n            <span class = \"req\"></span>\n          </label>\n          <input type = \"text\" id = \"username\" name = \"username\" placeholder = \"Name\" [(ngModel)] = \"inputusername\" required autocomplete = \"off\"/>\n        </div>\n\n        <div class = \"field-wrap\">\n          <label>\n            <span class = \"req\"></span>\n          </label>\n          <input type = \"password\" id = \"password\" name = \"password\" placeholder = \"Password\" [(ngModel)] = \"inputpassword\" required autocomplete = \"off\"/>\n        </div>\n        <button id = \"but1\" class = \"button button-block\" (click) = \"checklogin()\" routerLink=\"/index\">Login</button>\n      </form>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/login-section/login-section.component.scss":
/*!************************************************************!*\
  !*** ./src/app/login-section/login-section.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n  *:before, *:after {\n    box-sizing: border-box; }\n  html {\n  overflow-y: scroll; }\n  body {\n  background: #c1bdba;\n  font-family: 'Titillium Web', sans-serif; }\n  a {\n  text-decoration: none;\n  color: #1ab188;\n  transition: .5s ease; }\n  a:hover {\n    color: #179b77; }\n  .form {\n  background: rgba(19, 35, 47, 0.9);\n  padding: 40px;\n  max-width: 600px;\n  border-radius: 4px;\n  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);\n  width: 400px;\n  margin: 120px auto; }\n  .tab-group {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 40px 0; }\n  .tab-group:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .tab-group li a {\n    display: block;\n    text-decoration: none;\n    padding: 15px;\n    background: #1ab188;\n    color: #ffffff;\n    font-size: 20px;\n    float: left;\n    width: 50%;\n    text-align: center;\n    cursor: pointer;\n    transition: .5s ease; }\n  .tab-group li a:hover {\n      background: #179b77;\n      color: #ffffff; }\n  .tab-group .active a {\n    background: #1ab188;\n    color: #ffffff; }\n  .tab-content > div:last-child {\n  display: none; }\n  h1 {\n  text-align: center;\n  color: #ffffff;\n  font-weight: 300;\n  margin: 0 0 40px; }\n  label {\n  position: absolute;\n  -webkit-transform: translateY(6px);\n  transform: translateY(6px);\n  left: 13px;\n  color: rgba(255, 255, 255, 0.5);\n  transition: all 0.25s ease;\n  -webkit-backface-visibility: hidden;\n  pointer-events: none;\n  font-size: 22px; }\n  label .req {\n    margin: 2px;\n    color: #1ab188; }\n  label.active {\n    -webkit-transform: translateY(50px);\n    transform: translateY(50px);\n    left: 2px;\n    font-size: 14px; }\n  label.active .req {\n      opacity: 0; }\n  label.highlight {\n    color: #ffffff; }\n  input, textarea {\n  font-size: 22px;\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 5px 10px;\n  background: none;\n  background-image: none;\n  border: 1px solid #a0b3b0;\n  color: #ffffff;\n  border-radius: 0;\n  transition: border-color .25s ease, box-shadow .25s ease; }\n  input:focus {\n  outline: 0;\n  border-color: #1ab188; }\n  textarea {\n  border: 2px solid #a0b3b0;\n  resize: vertical; }\n  textarea:focus {\n    outline: 0;\n    border-color: #1ab188; }\n  .field-wrap {\n  position: relative;\n  margin-bottom: 40px; }\n  .top-row:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n  .top-row > div {\n  float: left;\n  width: 48%;\n  margin-right: 4%; }\n  .top-row > div:last-child {\n    margin: 0; }\n  .button {\n  border: 0;\n  outline: none;\n  border-radius: 0;\n  padding: 15px 0;\n  font-size: 2rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .1em;\n  background: #1ab188;\n  color: #ffffff;\n  transition: all 0.5s ease;\n  -webkit-appearance: none; }\n  .button:hover, .button:focus {\n    background: #179b77; }\n  .button-block {\n  display: block;\n  width: 100%; }\n  .forgot {\n  margin-top: -20px;\n  text-align: right; }\n  /* body\n{\n  background: url(\"1.jpg\");\n  animation-name:myfirst;\n  animation-duration:12s;\n  animation-delay:2s;\n  animation-iteration-count:infinite;\n  animation-play-state:running;\n} */\n  @-webkit-keyframes myfirst {\n  0% {\n    background: url('1.jpg'); }\n  34% {\n    background: url('2.jpg'); }\n  67% {\n    background: url('3.jpg'); }\n  100% {\n    background: url('4.jpg'); } }\n  @keyframes myfirst {\n  0% {\n    background: url('1.jpg'); }\n  34% {\n    background: url('2.jpg'); }\n  67% {\n    background: url('3.jpg'); }\n  100% {\n    background: url('4.jpg'); } }\n  .fa {\n  display: inline-block;\n  top: 27px;\n  left: 6px;\n  position: relative;\n  color: #ccc; }\n  input[type=\"text\"], input[type=\"password\"] {\n  padding-left: 26px; }\n  .checkbox {\n  padding-left: 21px; }\n  .backgroundset {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: url('1.jpg');\n  -webkit-animation-name: myfirst;\n          animation-name: myfirst;\n  -webkit-animation-duration: 12s;\n          animation-duration: 12s;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: running;\n          animation-play-state: running; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9uYXJkeXVhbi9EZXNrdG9wL3dlYl9maW5hbC9maW5hbF9hcHAvc3JjL2FwcC9sb2dpbi1zZWN0aW9uL2xvZ2luLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBc0IsRUFJdkI7RUFMRDtJQUdJLHVCQUFzQixFQUN2QjtFQUdIO0VBQ0UsbUJBQWtCLEVBQ25CO0VBRUQ7RUFDRSxvQkFBbUI7RUFDbkIseUNBQXdDLEVBQ3pDO0VBRUQ7RUFDRSxzQkFBcUI7RUFDckIsZUFBYztFQUVkLHFCQUFvQixFQUlyQjtFQVJEO0lBTUksZUFBYyxFQUNmO0VBR0g7RUFDRSxrQ0FBaUM7RUFDakMsY0FBYTtFQUNiLGlCQUFnQjtFQUVoQixtQkFBa0I7RUFDbEIsaURBQWdEO0VBQ2hELGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7RUFRRDtFQUNFLGlCQUFnQjtFQUNoQixXQUFVO0VBQ1YsbUJBQWtCLEVBNEJuQjtFQS9CRDtJQUtJLFlBQVc7SUFDWCxlQUFjO0lBQ2QsWUFBVyxFQUNaO0VBUkg7SUFVSSxlQUFjO0lBQ2Qsc0JBQXFCO0lBQ3JCLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsZUFBYztJQUNkLGdCQUFlO0lBQ2YsWUFBVztJQUNYLFdBQVU7SUFDVixtQkFBa0I7SUFDbEIsZ0JBQWU7SUFFZixxQkFBb0IsRUFLckI7RUExQkg7TUF1Qk0sb0JBQW1CO01BQ25CLGVBQWMsRUFDZjtFQXpCTDtJQTRCSSxvQkFBbUI7SUFDbkIsZUFBYyxFQUNmO0VBR0g7RUFDRSxjQUFhLEVBQ2Q7RUFFRDtFQUNFLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNqQjtFQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLG1DQUFrQztFQUNsQywyQkFBMEI7RUFDMUIsV0FBVTtFQUNWLGdDQUErQjtFQUUvQiwyQkFBMEI7RUFDMUIsb0NBQW1DO0VBQ25DLHFCQUFvQjtFQUNwQixnQkFBZSxFQWlCaEI7RUEzQkQ7SUFZSSxZQUFXO0lBQ1gsZUFBYyxFQUNmO0VBZEg7SUFnQkksb0NBQW1DO0lBQ25DLDRCQUEyQjtJQUMzQixVQUFTO0lBQ1QsZ0JBQWUsRUFJaEI7RUF2Qkg7TUFxQk0sV0FBVSxFQUNYO0VBdEJMO0lBeUJJLGVBQWMsRUFDZjtFQUdIO0VBQ0UsZ0JBQWU7RUFDZixlQUFjO0VBQ2QsWUFBVztFQUNYLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLHVCQUFzQjtFQUN0QiwwQkFBeUI7RUFDekIsZUFBYztFQUNkLGlCQUFnQjtFQUVoQix5REFBd0QsRUFDekQ7RUFFRDtFQUNFLFdBQVU7RUFDVixzQkFBcUIsRUFDdEI7RUFFRDtFQUtFLDBCQUF5QjtFQUN6QixpQkFBZ0IsRUFDakI7RUFQRDtJQUVJLFdBQVU7SUFDVixzQkFBcUIsRUFDdEI7RUFLSDtFQUNFLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDcEI7RUFFRDtFQUVJLFlBQVc7RUFDWCxlQUFjO0VBQ2QsWUFBVyxFQUNaO0VBTEg7RUFPSSxZQUFXO0VBQ1gsV0FBVTtFQUNWLGlCQUFnQixFQUlqQjtFQWJIO0lBV00sVUFBUyxFQUNWO0VBSUw7RUFDRSxVQUFTO0VBQ1QsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLDBCQUF5QjtFQUN6QixxQkFBb0I7RUFDcEIsb0JBQW1CO0VBQ25CLGVBQWM7RUFFZCwwQkFBeUI7RUFDekIseUJBQXdCLEVBSXpCO0VBakJEO0lBZUksb0JBQW1CLEVBQ3BCO0VBR0g7RUFDRSxlQUFjO0VBQ2QsWUFBVyxFQUNaO0VBRUQ7RUFDRSxrQkFBaUI7RUFDakIsa0JBQWlCLEVBQ2xCO0VBRUQ7Ozs7Ozs7O0lBUUk7RUFFSjtFQUNFO0lBQ0UseUJBQXFDLEVBQUE7RUFHdkM7SUFDRSx5QkFBcUMsRUFBQTtFQUd2QztJQUNFLHlCQUFxQyxFQUFBO0VBR3ZDO0lBQ0UseUJBQXFDLEVBQUEsRUFBQTtFQWR6QztFQUNFO0lBQ0UseUJBQXFDLEVBQUE7RUFHdkM7SUFDRSx5QkFBcUMsRUFBQTtFQUd2QztJQUNFLHlCQUFxQyxFQUFBO0VBR3ZDO0lBQ0UseUJBQXFDLEVBQUEsRUFBQTtFQUl6QztFQUNFLHNCQUFxQjtFQUNyQixVQUFTO0VBQ1QsVUFBUztFQUNULG1CQUFrQjtFQUNsQixZQUFXLEVBQ1o7RUFFRDtFQUVJLG1CQUFrQixFQUNuQjtFQUdIO0VBQ0UsbUJBQWtCLEVBQ25CO0VBRUQ7RUFFRSxZQUFVO0VBQ1YsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQix5QkFBcUM7RUFDckMsZ0NBQXNCO1VBQXRCLHdCQUFzQjtFQUN0QixnQ0FBc0I7VUFBdEIsd0JBQXNCO0VBQ3RCLDRCQUFrQjtVQUFsQixvQkFBa0I7RUFDbEIsNENBQWtDO1VBQWxDLG9DQUFrQztFQUNsQyxzQ0FBNEI7VUFBNUIsOEJBQTRCLEVBQzdCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tc2VjdGlvbi9sb2dpbi1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICY6YmVmb3JlLCAmOmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG59XG5cbmh0bWwge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjYzFiZGJhO1xuICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzFhYjE4ODtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjMTc5Yjc3O1xuICB9XG59XG5cbi5mb3JtIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxOSwgMzUsIDQ3LCAwLjkpO1xuICBwYWRkaW5nOiA0MHB4O1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICAvL21hcmdpbjogNDBweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggNHB4IHJnYmEoMTksIDM1LCA0NywgMC4zKTtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDEyMHB4IGF1dG87XG59XG4vL1xuLy8uZm9ybSB7XG4vLyAgLy9iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4vL1xuLy99XG5cblxuLnRhYi1ncm91cCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAwIDQwcHggMDtcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxuICBsaSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjMWFiMTg4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICMxNzliNzc7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB9XG4gIH1cbiAgLmFjdGl2ZSBhIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWFiMTg4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG59XG5cbi50YWItY29udGVudCA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW46IDAgMCA0MHB4O1xufVxuXG5sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDZweCk7XG4gIGxlZnQ6IDEzcHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgLnJlcSB7XG4gICAgbWFyZ2luOiAycHg7XG4gICAgY29sb3I6ICMxYWIxODg7XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcbiAgICBsZWZ0OiAycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC5yZXEge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgJi5oaWdobGlnaHQge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG59XG5cbmlucHV0LCB0ZXh0YXJlYSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTBiM2IwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjI1cyBlYXNlLCBib3gtc2hhZG93IC4yNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4yNXMgZWFzZSwgYm94LXNoYWRvdyAuMjVzIGVhc2U7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbiAgYm9yZGVyLWNvbG9yOiAjMWFiMTg4O1xufVxuXG50ZXh0YXJlYSB7XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm9yZGVyLWNvbG9yOiAjMWFiMTg4O1xuICB9XG4gIGJvcmRlcjogMnB4IHNvbGlkICNhMGIzYjA7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi5maWVsZC13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4udG9wLXJvdyB7XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbiAgPiBkaXYge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA0OCU7XG4gICAgbWFyZ2luLXJpZ2h0OiA0JTtcbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuXG4uYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IC4xZW07XG4gIGJhY2tncm91bmQ6ICMxYWIxODg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZDogIzE3OWI3NztcbiAgfVxufVxuXG4uYnV0dG9uLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9yZ290IHtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4vKiBib2R5XG57XG4gIGJhY2tncm91bmQ6IHVybChcIjEuanBnXCIpO1xuICBhbmltYXRpb24tbmFtZTpteWZpcnN0O1xuICBhbmltYXRpb24tZHVyYXRpb246MTJzO1xuICBhbmltYXRpb24tZGVsYXk6MnM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOnJ1bm5pbmc7XG59ICovXG5cbkBrZXlmcmFtZXMgbXlmaXJzdCB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvMS5qcGdcIik7XG4gIH1cblxuICAzNCUge1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy8yLmpwZ1wiKTtcbiAgfVxuXG4gIDY3JSB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzLzMuanBnXCIpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzLzQuanBnXCIpO1xuICB9XG59XG5cbi5mYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdG9wOiAyN3B4O1xuICBsZWZ0OiA2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNjY2M7XG59XG5cbmlucHV0IHtcbiAgJlt0eXBlPVwidGV4dFwiXSwgJlt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICAgIHBhZGRpbmctbGVmdDogMjZweDtcbiAgfVxufVxuXG4uY2hlY2tib3gge1xuICBwYWRkaW5nLWxlZnQ6IDIxcHg7XG59XG5cbi5iYWNrZ3JvdW5kc2V0XG57XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvMS5qcGdcIik7XG4gIGFuaW1hdGlvbi1uYW1lOm15Zmlyc3Q7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjoxMnM7XG4gIGFuaW1hdGlvbi1kZWxheToycztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6cnVubmluZztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login-section/login-section.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/login-section/login-section.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSectionComponent", function() { return LoginSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");



var LoginSectionComponent = /** @class */ (function () {
    function LoginSectionComponent() {
        this.inputusername = '';
        this.inputpassword = '';
    }
    LoginSectionComponent.prototype.ngOnInit = function () {
    };
    LoginSectionComponent.prototype.checklogin = function () {
        var useraccount = new _user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        useraccount.username = 'abc';
        useraccount.password = '123';
        if (this.inputusername === useraccount.username && this.inputpassword === useraccount.password) {
            alert('correct');
        }
        else {
            alert('wrong');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginSectionComponent.prototype, "inputusername", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginSectionComponent.prototype, "inputpassword", void 0);
    LoginSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-section',
            template: __webpack_require__(/*! ./login-section.component.html */ "./src/app/login-section/login-section.component.html"),
            styles: [__webpack_require__(/*! ./login-section.component.scss */ "./src/app/login-section/login-section.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginSectionComponent);
    return LoginSectionComponent;
}());



/***/ }),

/***/ "./src/app/register-section/register-section.component.html":
/*!******************************************************************!*\
  !*** ./src/app/register-section/register-section.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"backgroundset\">\n    <div class = \"form\">\n      <ul class = \"tab-group\">\n        <li class = \"tab\">\n          <a routerLink = \"/login\" style=\"background-color: #a0b3b0\">Login</a>\n        </li>\n\n        <li class = \"tab\">\n          <a routerLink = \"/register\" >Register</a>\n        </li>\n      </ul>\n\n      <div class = \"tab-content\">\n        <form action = \"/register/\" method = \"post\">\n          <div class = \"field-wrap\">\n            <label>\n              <span class = \"req\"></span>\n            </label>\n            <input type = \"text\" id = \"username\" name = \"username\" placeholder = \"Name\" [(ngModel)] = \"inputusername\" required autocomplete = \"off\"/>\n          </div>\n\n          <div class = \"field-wrap\">\n            <label>\n              <span class = \"req\"></span>\n            </label>\n            <input type = \"text\" id = \"email\" name = \"email\" placeholder = \"E-mail\" [(ngModel)] = \"inputemail\" required autocomplete = \"off\"/>\n          </div>\n\n          <div class = \"field-wrap\">\n            <label>\n              <span class = \"req\"></span>\n            </label>\n            <input type = \"password\" name = \"password\" placeholder = \"Password\" [(ngModel)] = \"inputpassword\" required autocomplete = \"off\"/>\n          </div>\n\n          <div class = \"field-wrap\">\n            <label>\n              <span class = \"req\"></span>\n            </label>\n            <input type = \"password\" id = \"password\" name = \"password\" placeholder = \"Confirm Password\" [(ngModel)] = \"inputrepassword\" required autocomplete = \"off\"/>\n          </div>\n\n          <button type = \"submit\" class = \"button button-block\"  (click) = \"registersave()\" (click) = \"checkemail(inputemail)\">Register</button>\n        </form>\n      </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/register-section/register-section.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/register-section/register-section.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n  *:before, *:after {\n    box-sizing: border-box; }\n  html {\n  overflow-y: scroll; }\n  body {\n  background: #c1bdba;\n  font-family: 'Titillium Web', sans-serif; }\n  a {\n  text-decoration: none;\n  color: #1ab188;\n  transition: .5s ease; }\n  a:hover {\n    color: #179b77; }\n  .form {\n  background: rgba(19, 35, 47, 0.9);\n  padding: 40px;\n  max-width: 600px;\n  border-radius: 4px;\n  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);\n  width: 400px;\n  margin: 120px auto; }\n  .tab-group {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 40px 0; }\n  .tab-group:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .tab-group li a {\n    display: block;\n    text-decoration: none;\n    padding: 15px;\n    background: #1ab188;\n    color: #ffffff;\n    font-size: 20px;\n    float: left;\n    width: 50%;\n    text-align: center;\n    cursor: pointer;\n    transition: .5s ease; }\n  .tab-group li a:hover {\n      background: #179b77;\n      color: #ffffff; }\n  .tab-group .active a {\n    background: #1ab188;\n    color: #ffffff; }\n  .tab-content > div:last-child {\n  display: none; }\n  h1 {\n  text-align: center;\n  color: #ffffff;\n  font-weight: 300;\n  margin: 0 0 40px; }\n  label {\n  position: absolute;\n  -webkit-transform: translateY(6px);\n  transform: translateY(6px);\n  left: 13px;\n  color: rgba(255, 255, 255, 0.5);\n  transition: all 0.25s ease;\n  -webkit-backface-visibility: hidden;\n  pointer-events: none;\n  font-size: 22px; }\n  label .req {\n    margin: 2px;\n    color: #1ab188; }\n  label.active {\n    -webkit-transform: translateY(50px);\n    transform: translateY(50px);\n    left: 2px;\n    font-size: 14px; }\n  label.active .req {\n      opacity: 0; }\n  label.highlight {\n    color: #ffffff; }\n  input, textarea {\n  font-size: 22px;\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 5px 10px;\n  background: none;\n  background-image: none;\n  border: 1px solid #a0b3b0;\n  color: #ffffff;\n  border-radius: 0;\n  transition: border-color .25s ease, box-shadow .25s ease; }\n  input:focus {\n  outline: 0;\n  border-color: #1ab188; }\n  textarea {\n  border: 2px solid #a0b3b0;\n  resize: vertical; }\n  textarea:focus {\n    outline: 0;\n    border-color: #1ab188; }\n  .field-wrap {\n  position: relative;\n  margin-bottom: 40px; }\n  .top-row:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n  .top-row > div {\n  float: left;\n  width: 48%;\n  margin-right: 4%; }\n  .top-row > div:last-child {\n    margin: 0; }\n  .button {\n  border: 0;\n  outline: none;\n  border-radius: 0;\n  padding: 15px 0;\n  font-size: 2rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .1em;\n  background: #1ab188;\n  color: #ffffff;\n  transition: all 0.5s ease;\n  -webkit-appearance: none; }\n  .button:hover, .button:focus {\n    background: #179b77; }\n  .button-block {\n  display: block;\n  width: 100%; }\n  .forgot {\n  margin-top: -20px;\n  text-align: right; }\n  /* body\n{\n  background: url(\"1.jpg\");\n  animation-name:myfirst;\n  animation-duration:12s;\n  animation-delay:2s;\n  animation-iteration-count:infinite;\n  animation-play-state:running;\n} */\n  @-webkit-keyframes myfirst {\n  0% {\n    background: url('1.jpg'); }\n  34% {\n    background: url('2.jpg'); }\n  67% {\n    background: url('3.jpg'); }\n  100% {\n    background: url('4.jpg'); } }\n  @keyframes myfirst {\n  0% {\n    background: url('1.jpg'); }\n  34% {\n    background: url('2.jpg'); }\n  67% {\n    background: url('3.jpg'); }\n  100% {\n    background: url('4.jpg'); } }\n  .fa {\n  display: inline-block;\n  top: 27px;\n  left: 6px;\n  position: relative;\n  color: #ccc; }\n  input[type=\"text\"], input[type=\"password\"] {\n  padding-left: 26px; }\n  .checkbox {\n  padding-left: 21px; }\n  .backgroundset {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: url('1.jpg');\n  -webkit-animation-name: myfirst;\n          animation-name: myfirst;\n  -webkit-animation-duration: 12s;\n          animation-duration: 12s;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: running;\n          animation-play-state: running; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9uYXJkeXVhbi9EZXNrdG9wL3dlYl9maW5hbC9maW5hbF9hcHAvc3JjL2FwcC9yZWdpc3Rlci1zZWN0aW9uL3JlZ2lzdGVyLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBc0IsRUFJdkI7RUFMRDtJQUdJLHVCQUFzQixFQUN2QjtFQUdIO0VBQ0UsbUJBQWtCLEVBQ25CO0VBRUQ7RUFDRSxvQkFBbUI7RUFDbkIseUNBQXdDLEVBQ3pDO0VBRUQ7RUFDRSxzQkFBcUI7RUFDckIsZUFBYztFQUVkLHFCQUFvQixFQUlyQjtFQVJEO0lBTUksZUFBYyxFQUNmO0VBR0g7RUFDRSxrQ0FBaUM7RUFDakMsY0FBYTtFQUNiLGlCQUFnQjtFQUVoQixtQkFBa0I7RUFDbEIsaURBQWdEO0VBQ2hELGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7RUFPRDtFQUNFLGlCQUFnQjtFQUNoQixXQUFVO0VBQ1YsbUJBQWtCLEVBNEJuQjtFQS9CRDtJQUtJLFlBQVc7SUFDWCxlQUFjO0lBQ2QsWUFBVyxFQUNaO0VBUkg7SUFVSSxlQUFjO0lBQ2Qsc0JBQXFCO0lBQ3JCLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsZUFBYztJQUNkLGdCQUFlO0lBQ2YsWUFBVztJQUNYLFdBQVU7SUFDVixtQkFBa0I7SUFDbEIsZ0JBQWU7SUFFZixxQkFBb0IsRUFLckI7RUExQkg7TUF1Qk0sb0JBQW1CO01BQ25CLGVBQWMsRUFDZjtFQXpCTDtJQTRCSSxvQkFBbUI7SUFDbkIsZUFBYyxFQUNmO0VBR0g7RUFDRSxjQUFhLEVBQ2Q7RUFFRDtFQUNFLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNqQjtFQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLG1DQUFrQztFQUNsQywyQkFBMEI7RUFDMUIsV0FBVTtFQUNWLGdDQUErQjtFQUUvQiwyQkFBMEI7RUFDMUIsb0NBQW1DO0VBQ25DLHFCQUFvQjtFQUNwQixnQkFBZSxFQWlCaEI7RUEzQkQ7SUFZSSxZQUFXO0lBQ1gsZUFBYyxFQUNmO0VBZEg7SUFnQkksb0NBQW1DO0lBQ25DLDRCQUEyQjtJQUMzQixVQUFTO0lBQ1QsZ0JBQWUsRUFJaEI7RUF2Qkg7TUFxQk0sV0FBVSxFQUNYO0VBdEJMO0lBeUJJLGVBQWMsRUFDZjtFQUdIO0VBQ0UsZ0JBQWU7RUFDZixlQUFjO0VBQ2QsWUFBVztFQUNYLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLHVCQUFzQjtFQUN0QiwwQkFBeUI7RUFDekIsZUFBYztFQUNkLGlCQUFnQjtFQUVoQix5REFBd0QsRUFDekQ7RUFFRDtFQUNFLFdBQVU7RUFDVixzQkFBcUIsRUFDdEI7RUFFRDtFQUtFLDBCQUF5QjtFQUN6QixpQkFBZ0IsRUFDakI7RUFQRDtJQUVJLFdBQVU7SUFDVixzQkFBcUIsRUFDdEI7RUFLSDtFQUNFLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDcEI7RUFFRDtFQUVJLFlBQVc7RUFDWCxlQUFjO0VBQ2QsWUFBVyxFQUNaO0VBTEg7RUFPSSxZQUFXO0VBQ1gsV0FBVTtFQUNWLGlCQUFnQixFQUlqQjtFQWJIO0lBV00sVUFBUyxFQUNWO0VBSUw7RUFDRSxVQUFTO0VBQ1QsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLDBCQUF5QjtFQUN6QixxQkFBb0I7RUFDcEIsb0JBQW1CO0VBQ25CLGVBQWM7RUFFZCwwQkFBeUI7RUFDekIseUJBQXdCLEVBSXpCO0VBakJEO0lBZUksb0JBQW1CLEVBQ3BCO0VBR0g7RUFDRSxlQUFjO0VBQ2QsWUFBVyxFQUNaO0VBRUQ7RUFDRSxrQkFBaUI7RUFDakIsa0JBQWlCLEVBQ2xCO0VBRUQ7Ozs7Ozs7O0lBUUk7RUFFSjtFQUNFO0lBQ0UseUJBQXFDLEVBQUE7RUFHdkM7SUFDRSx5QkFBcUMsRUFBQTtFQUd2QztJQUNFLHlCQUFxQyxFQUFBO0VBR3ZDO0lBQ0UseUJBQXFDLEVBQUEsRUFBQTtFQWR6QztFQUNFO0lBQ0UseUJBQXFDLEVBQUE7RUFHdkM7SUFDRSx5QkFBcUMsRUFBQTtFQUd2QztJQUNFLHlCQUFxQyxFQUFBO0VBR3ZDO0lBQ0UseUJBQXFDLEVBQUEsRUFBQTtFQUl6QztFQUNFLHNCQUFxQjtFQUNyQixVQUFTO0VBQ1QsVUFBUztFQUNULG1CQUFrQjtFQUNsQixZQUFXLEVBQ1o7RUFFRDtFQUVJLG1CQUFrQixFQUNuQjtFQUdIO0VBQ0UsbUJBQWtCLEVBQ25CO0VBRUQ7RUFFRSxZQUFVO0VBQ1YsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQix5QkFBcUM7RUFDckMsZ0NBQXNCO1VBQXRCLHdCQUFzQjtFQUN0QixnQ0FBc0I7VUFBdEIsd0JBQXNCO0VBQ3RCLDRCQUFrQjtVQUFsQixvQkFBa0I7RUFDbEIsNENBQWtDO1VBQWxDLG9DQUFrQztFQUNsQyxzQ0FBNEI7VUFBNUIsOEJBQTRCLEVBQzdCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXItc2VjdGlvbi9yZWdpc3Rlci1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICY6YmVmb3JlLCAmOmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG59XG5cbmh0bWwge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjYzFiZGJhO1xuICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzFhYjE4ODtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjMTc5Yjc3O1xuICB9XG59XG5cbi5mb3JtIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxOSwgMzUsIDQ3LCAwLjkpO1xuICBwYWRkaW5nOiA0MHB4O1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICAvL21hcmdpbjogNDBweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggNHB4IHJnYmEoMTksIDM1LCA0NywgMC4zKTtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDEyMHB4IGF1dG87XG59XG5cbi8vLmZvcm0ge1xuLy8gIC8vYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuLy9cbi8vfVxuXG4udGFiLWdyb3VwIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDAgNDBweCAwO1xuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG4gIGxpIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICMxYWIxODg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC41cyBlYXNlO1xuICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogIzE3OWI3NztcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbiAgfVxuICAuYWN0aXZlIGEge1xuICAgIGJhY2tncm91bmQ6ICMxYWIxODg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cbn1cblxuLnRhYi1jb250ZW50ID4gZGl2Omxhc3QtY2hpbGQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbjogMCAwIDQwcHg7XG59XG5cbmxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg2cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNnB4KTtcbiAgbGVmdDogMTNweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICAucmVxIHtcbiAgICBtYXJnaW46IDJweDtcbiAgICBjb2xvcjogIzFhYjE4ODtcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xuICAgIGxlZnQ6IDJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLnJlcSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICAmLmhpZ2hsaWdodCB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cbn1cblxuaW5wdXQsIHRleHRhcmVhIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhMGIzYjA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMjVzIGVhc2UsIGJveC1zaGFkb3cgLjI1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjI1cyBlYXNlLCBib3gtc2hhZG93IC4yNXMgZWFzZTtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xuICBib3JkZXItY29sb3I6ICMxYWIxODg7XG59XG5cbnRleHRhcmVhIHtcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3JkZXItY29sb3I6ICMxYWIxODg7XG4gIH1cbiAgYm9yZGVyOiAycHggc29saWQgI2EwYjNiMDtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuLmZpZWxkLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi50b3Atcm93IHtcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxuICA+IGRpdiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDQ4JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG5cbi5idXR0b24ge1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogLjFlbTtcbiAgYmFja2dyb3VuZDogIzFhYjE4ODtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTc5Yjc3O1xuICB9XG59XG5cbi5idXR0b24tYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3Jnb3Qge1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi8qIGJvZHlcbntcbiAgYmFja2dyb3VuZDogdXJsKFwiMS5qcGdcIik7XG4gIGFuaW1hdGlvbi1uYW1lOm15Zmlyc3Q7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjoxMnM7XG4gIGFuaW1hdGlvbi1kZWxheToycztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6cnVubmluZztcbn0gKi9cblxuQGtleWZyYW1lcyBteWZpcnN0IHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy8xLmpwZ1wiKTtcbiAgfVxuXG4gIDM0JSB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzLzIuanBnXCIpO1xuICB9XG5cbiAgNjclIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvMy5qcGdcIik7XG4gIH1cblxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvNC5qcGdcIik7XG4gIH1cbn1cblxuLmZhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0b3A6IDI3cHg7XG4gIGxlZnQ6IDZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI2NjYztcbn1cblxuaW5wdXQge1xuICAmW3R5cGU9XCJ0ZXh0XCJdLCAmW3R5cGU9XCJwYXNzd29yZFwiXSB7XG4gICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xuICB9XG59XG5cbi5jaGVja2JveCB7XG4gIHBhZGRpbmctbGVmdDogMjFweDtcbn1cblxuLmJhY2tncm91bmRzZXRcbntcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy8xLmpwZ1wiKTtcbiAgYW5pbWF0aW9uLW5hbWU6bXlmaXJzdDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjEycztcbiAgYW5pbWF0aW9uLWRlbGF5OjJzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlO1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTpydW5uaW5nO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/register-section/register-section.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/register-section/register-section.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterSectionComponent", function() { return RegisterSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");



var RegisterSectionComponent = /** @class */ (function () {
    function RegisterSectionComponent() {
    }
    RegisterSectionComponent.prototype.ngOnInit = function () {
    };
    RegisterSectionComponent.prototype.checkemail = function (str) {
        var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        if (re.test(str)) {
            alert('Correct E-mail address');
        }
        else {
            alert('Wrong E-mail address');
        }
    };
    RegisterSectionComponent.prototype.registersave = function () {
        var useraccount = new _user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        if (this.inputusername === undefined || this.inputemail === undefined || this.inputpassword === undefined || this.inputrepassword === undefined) {
            alert('please confirm your input is complete!');
            return;
        }
        else {
            if (this.inputpassword === this.inputrepassword) {
                alert('Successful!');
                useraccount.username = this.inputusername;
                useraccount.email = this.inputemail;
                useraccount.password = this.inputpassword;
            }
            else {
                alert('Please confirm your password & repassword!');
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RegisterSectionComponent.prototype, "inputusername", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RegisterSectionComponent.prototype, "inputemail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RegisterSectionComponent.prototype, "inputpassword", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RegisterSectionComponent.prototype, "inputrepassword", void 0);
    RegisterSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-section',
            template: __webpack_require__(/*! ./register-section.component.html */ "./src/app/register-section/register-section.component.html"),
            styles: [__webpack_require__(/*! ./register-section.component.scss */ "./src/app/register-section/register-section.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterSectionComponent);
    return RegisterSectionComponent;
}());



/***/ }),

/***/ "./src/app/sider/sider.component.html":
/*!********************************************!*\
  !*** ./src/app/sider/sider.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\n  <div class=\"text-center\">\n    <img [src]=\"url\" width=\"150\" height=\"150\" class=\"img-circle\" alt=\"Generic placeholder thumbnail\">\n    <input type='file' (change)=\"readUrl($event)\">\n    <h4>Leonard</h4>\n  </div>\n  <!-- <div class=\"formCenter\" >\n  < img [src]=\"{{imgUrl}}\" alt=\"图片\" width=\"150\" height=\"150\" title=\"图片\" class=\"form-control\">\n  <input type=\"file\" accept=\"image/.jpg, image/.png\" (change)=\"fileChange($event)\" class=\"fileInput\">\n  </div> -->\n\n  <a routerLink=\"/index\" class=\"list-group-item list-group-item-action\"><li class=\"glyphicon glyphicon-th-list\">&nbsp;</li>Dashboard</a>\n    <a routerLink=\"/device_table\" class=\"list-group-item list-group-item-action\"><li class=\"glyphicon glyphicon-list-alt\">&nbsp;</li>Devices Table</a>\n    <a routerLink=\"/add\" class=\"list-group-item list-group-item-action\"><li class=\"glyphicon glyphicon-plus\">&nbsp;</li>Add Devices</a>\n    <a routerLink=\"/change\" class=\"list-group-item list-group-item-action\"><li class=\"glyphicon glyphicon-open\">&nbsp;</li>Change Passoword</a>\n    <a routerLink=\"/status_view\" class=\"list-group-item list-group-item-action\"><li class=\"glyphicon glyphicon-eye-open\">&nbsp;</li>Status Monitor</a>\n    <a routerLink=\"/location_visualization\" class=\"list-group-item list-group-item-action\"><li class=\"glyphicon glyphicon-map-marker\">&nbsp;</li>Location Visualization</a>\n    <a routerLink=\"/status_table\" class=\"list-group-item list-group-item-action\"><li class=\"glyphicon glyphicon-signal\">&nbsp;</li>Status Table</a>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/sider/sider.component.scss":
/*!********************************************!*\
  !*** ./src/app/sider/sider.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes myfirst {\n  0% {\n    background: url('1.jpg'); }\n  34% {\n    background: url('2.jpg'); }\n  67% {\n    background: url('3.jpg'); }\n  100% {\n    background: url('4.jpg'); } }\n\n@keyframes myfirst {\n  0% {\n    background: url('1.jpg'); }\n  34% {\n    background: url('2.jpg'); }\n  67% {\n    background: url('3.jpg'); }\n  100% {\n    background: url('4.jpg'); } }\n\n.main {\n  background: url('1.jpg');\n  -webkit-animation-name: myfirst;\n          animation-name: myfirst;\n  -webkit-animation-duration: 12s;\n          animation-duration: 12s;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: running;\n          animation-play-state: running; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9uYXJkeXVhbi9EZXNrdG9wL3dlYl9maW5hbC9maW5hbF9hcHAvc3JjL2FwcC9zaWRlci9zaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UseUJBQXFDLEVBQUE7RUFHdkM7SUFDRSx5QkFBcUMsRUFBQTtFQUd2QztJQUNFLHlCQUFxQyxFQUFBO0VBR3ZDO0lBQ0UseUJBQXFDLEVBQUEsRUFBQTs7QUFkekM7RUFDRTtJQUNFLHlCQUFxQyxFQUFBO0VBR3ZDO0lBQ0UseUJBQXFDLEVBQUE7RUFHdkM7SUFDRSx5QkFBcUMsRUFBQTtFQUd2QztJQUNFLHlCQUFxQyxFQUFBLEVBQUE7O0FBSXpDO0VBQ0UseUJBQXFDO0VBQ3JDLGdDQUFzQjtVQUF0Qix3QkFBc0I7RUFDdEIsZ0NBQXNCO1VBQXRCLHdCQUFzQjtFQUN0Qiw0QkFBa0I7VUFBbEIsb0JBQWtCO0VBQ2xCLDRDQUFrQztVQUFsQyxvQ0FBa0M7RUFDbEMsc0NBQTRCO1VBQTVCLDhCQUE0QixFQUM3QiIsImZpbGUiOiJzcmMvYXBwL3NpZGVyL3NpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBteWZpcnN0IHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy8xLmpwZ1wiKTtcbiAgfVxuXG4gIDM0JSB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzLzIuanBnXCIpO1xuICB9XG5cbiAgNjclIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvMy5qcGdcIik7XG4gIH1cblxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvNC5qcGdcIik7XG4gIH1cbn1cblxuLm1haW57XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy8xLmpwZ1wiKTtcbiAgYW5pbWF0aW9uLW5hbWU6bXlmaXJzdDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjEycztcbiAgYW5pbWF0aW9uLWRlbGF5OjJzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlO1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTpydW5uaW5nO1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/sider/sider.component.ts":
/*!******************************************!*\
  !*** ./src/app/sider/sider.component.ts ***!
  \******************************************/
/*! exports provided: SiderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiderComponent", function() { return SiderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import { DomSanitizer } from '@angular/platform-browser';
var SiderComponent = /** @class */ (function () {
    // url:string;
    function SiderComponent() {
        this.url = 'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';
    }
    SiderComponent.prototype.ngOnInit = function () {
        // this.url = 'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';
    };
    SiderComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    SiderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sider',
            template: __webpack_require__(/*! ./sider.component.html */ "./src/app/sider/sider.component.html"),
            styles: [__webpack_require__(/*! ./sider.component.scss */ "./src/app/sider/sider.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SiderComponent);
    return SiderComponent;
}());



/***/ }),

/***/ "./src/app/status-table/status-table.component.html":
/*!**********************************************************!*\
  !*** ./src/app/status-table/status-table.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-2 sidebar\">\n      <app-sider></app-sider>\n    </div>\n    <div class=\"col-xs-6 col-md-10 main\">\n      <h1 class=\"page-header\">Status Table</h1>\n      <div class=\"row\">\n        <div class=\"col-xs-2\"></div>\n        <div class=\"col-xs-8\">\n          <table class=\"table table-hover\">\n            <tr>\n              <th>#Id</th>\n              <th>#Name</th>\n              <th>#Time</th>\n              <th>#Location</th>\n              <th>#Temperature</th>\n              <th>#Memory</th>\n              <th>#Speed</th>\n            </tr>\n            <tr *ngFor=\"let status of statusArr\">\n              <td>{{status.id}}</td>\n              <td>{{status.Name}}</td>\n              <td>{{status.Time}}</td>\n              <td>{{status.Location}}</td>\n              <td>{{status.Temperature}}</td>\n              <td>{{status.Memory}}</td>\n              <td>{{status.Speed}}</td>\n            </tr>\n            <!--<tr>-->\n              <!--<td>2</td>-->\n              <!--<td>2</td>-->\n              <!--<td>2</td>-->\n              <!--<td>2</td>-->\n              <!--<td>2</td>-->\n              <!--<td>2</td>-->\n              <!--<td>2</td>-->\n            <!--</tr>-->\n            <!--<tr>-->\n              <!--<td>3</td>-->\n              <!--<td>3</td>-->\n              <!--<td>3</td>-->\n              <!--<td>3</td>-->\n              <!--<td>3</td>-->\n              <!--<td>3</td>-->\n              <!--<td>3</td>-->\n            <!--</tr>-->\n            <!--<tr>-->\n              <!--<td>4</td>-->\n              <!--<td>4</td>-->\n              <!--<td>4</td>-->\n              <!--<td>4</td>-->\n              <!--<td>4</td>-->\n              <!--<td>4</td>-->\n              <!--<td>4</td>-->\n            <!--</tr>-->\n          </table>\n        </div>\n        <div class=\"col-xs-2\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./src/app/status-table/status-table.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/status-table/status-table.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXR1cy10YWJsZS9zdGF0dXMtdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/status-table/status-table.component.ts":
/*!********************************************************!*\
  !*** ./src/app/status-table/status-table.component.ts ***!
  \********************************************************/
/*! exports provided: StatusTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusTableComponent", function() { return StatusTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../status.service */ "./src/app/status.service.ts");



var StatusTableComponent = /** @class */ (function () {
    function StatusTableComponent(statusService) {
        this.statusService = statusService;
    }
    StatusTableComponent.prototype.ngOnInit = function () {
        this.getStatus();
    };
    StatusTableComponent.prototype.getStatus = function () {
        var _this = this;
        this.statusService.getStatus().subscribe(function (status) { return _this.statusArr = status; });
        console.log('ok, finish!');
        console.log(this.statusArr);
    };
    StatusTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-status-table',
            template: __webpack_require__(/*! ./status-table.component.html */ "./src/app/status-table/status-table.component.html"),
            styles: [__webpack_require__(/*! ./status-table.component.scss */ "./src/app/status-table/status-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"]])
    ], StatusTableComponent);
    return StatusTableComponent;
}());



/***/ }),

/***/ "./src/app/status-visualization/status-visualization.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/status-visualization/status-visualization.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-2 sidebar\">\n      <app-sider></app-sider>\n    </div>\n    <div class=\"col-xs-6 col-md-10 main\">\n      <div echarts [options] = \"option\" [loading]=\"showloading\" class=\"demo-chart\"></div>\n      <div echarts [options] = \"option2\" [loading]=\"showloading\" class=\"demo-chart\"></div>\n      <div echarts [options] = \"option3\" [loading]=\"showloading\" class=\"demo-chart\"></div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/status-visualization/status-visualization.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/status-visualization/status-visualization.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXR1cy12aXN1YWxpemF0aW9uL3N0YXR1cy12aXN1YWxpemF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/status-visualization/status-visualization.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/status-visualization/status-visualization.component.ts ***!
  \************************************************************************/
/*! exports provided: StatusVisualizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusVisualizationComponent", function() { return StatusVisualizationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatusVisualizationComponent = /** @class */ (function () {
    // onTimeOut() {
    //   this.ApiCall().then(
    //     success => {
    //       if(success ['ok'] == 0){
    //         this.navCtrl.push(myPage);
    //       }
    //     },
    //     error => { console.log(error); });
    // }
    function StatusVisualizationComponent() {
        this.showloading = true;
        this.option = {
            title: {
                text: 'Temperature Monitor',
                subtext: 'Example in MetricsGraphics.js',
                left: 'center'
            },
            xAxis: {
                type: 'category',
                data: ['Time1', 'Time2', 'Time3', 'Time4', 'Time5', 'Time6', 'Time7', 'Time8', 'Time9', 'Time10']
            },
            yAxis: {
                type: 'value',
                max: 100
            },
            series: [{
                    data: [12, 34, 45, 45, 66, 23, 54, 67, 98, 32, 30, 60, 70, 40, 20],
                    type: 'line'
                }]
        };
        this.option2 = {
            title: {
                text: 'Memory Monitor',
                subtext: 'Example in MetricsGraphics.js',
                left: 'center'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value',
                max: 100,
            },
            series: [{
                    data: [15, 24, 22, 45, 5, 67, 88, 10, 30, 50, 60, 35, 42, 48, 76, 28, 90, 38, 75],
                    type: 'line',
                    areaStyle: {}
                }]
        };
        this.option3 = {
            title: {
                text: '雨量流量关系图',
                subtext: '数据来自西安兰特水电测控技术有限公司',
                x: 'center',
                align: 'right'
            },
            grid: {
                bottom: 80
            },
            toolbox: {
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    animation: false,
                    label: {
                        backgroundColor: '#505765'
                    }
                }
            },
            legend: {
                data: ['流量', '降雨量'],
                x: 'left'
            },
            dataZoom: [
                {
                    show: true,
                    realtime: true,
                    start: 65,
                    end: 85
                },
                {
                    type: 'inside',
                    realtime: true,
                    start: 65,
                    end: 85
                }
            ],
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    axisLine: { onZero: false },
                    data: [
                        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
                    ].map(function (str) {
                        return str.replace(' ', '\n');
                    })
                }
            ],
            yAxis: [
                {
                    name: 'Temperature(Clecisus)',
                    type: 'value',
                    max: 200
                },
                {
                    name: 'Network Speed(mb/s)',
                    nameLocation: 'start',
                    max: 2000,
                    type: 'value',
                    inverse: true
                }
            ],
            series: [
                {
                    name: 'Temperature',
                    type: 'line',
                    animation: false,
                    areaStyle: {},
                    lineStyle: {
                        width: 1
                    },
                    markArea: {
                        silent: true,
                    },
                    data: [
                        34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22, 22, 34, 56, 32, 87, 21, 98, 56, 12, 76, 22
                    ]
                },
                {
                    name: 'Netowrk Speed',
                    type: 'line',
                    yAxisIndex: 1,
                    animation: false,
                    areaStyle: {},
                    lineStyle: {
                        width: 1
                    },
                    markArea: {
                        silent: true,
                    },
                    data: [
                        234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456, 456, 234, 75, 343, 977, 132, 75, 754, 861, 344, 456
                    ]
                }
            ]
        };
    }
    StatusVisualizationComponent.prototype.ngOnInit = function () {
    };
    StatusVisualizationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-status-visualization',
            template: __webpack_require__(/*! ./status-visualization.component.html */ "./src/app/status-visualization/status-visualization.component.html"),
            styles: [__webpack_require__(/*! ./status-visualization.component.scss */ "./src/app/status-visualization/status-visualization.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatusVisualizationComponent);
    return StatusVisualizationComponent;
}());



/***/ }),

/***/ "./src/app/status.service.ts":
/*!***********************************!*\
  !*** ./src/app/status.service.ts ***!
  \***********************************/
/*! exports provided: StatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusService", function() { return StatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var StatusService = /** @class */ (function () {
    function StatusService(http) {
        this.http = http;
        //
        // private extractData(res: Response) {
        //     let body = res;
        //     return body || { };
        // }
        this.statusUrl = 'api/status'; // URL to web api
        this.deviceUrl = 'api/devices';
    }
    StatusService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    StatusService.prototype.getStatus = function () {
        return this.http.get("http://localhost:3000/status").pipe(
        // map(this.extractData)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getStatus', [])));
        //   return this.http.get('http://localhost:3000/status').pipe(
        //       map(response => {
        //           const ss = response;
        //           return map( response => new Status(status));
        //           })
        //   );
        // .map(response => {
        //     const ss = response.json();
        //     return ss.map((status) => new Status(status));
        // })
        // .catch(this.handleError);
    };
    StatusService.prototype.getDevices = function () {
        return this.http.get(this.deviceUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getDevices', [])));
    };
    StatusService.prototype.deleteDevices = function (devices) {
        var id = typeof devices === 'number' ? devices : devices.id;
        var url = this.deviceUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteDevices')));
    };
    StatusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StatusService);
    return StatusService;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/leonardyuan/Desktop/web_final/final_app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map