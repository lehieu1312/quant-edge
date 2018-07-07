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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n}\r\n\r\ntd {\r\n    border-bottom-color: rgba(0, 0, 0, .12);\r\n}\r\n\r\n#body-content {\r\n    width: 690px;\r\n    height: auto;\r\n    margin: 0 auto;\r\n    border-right: 8px solid #3a38381f;\r\n    border-left: 8px solid #3a38381f;\r\n    font-size: 13px;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.color-header {\r\n    color: #cbcbcb;\r\n    font-weight: 500;\r\n    font-size: 13px;\r\n    border-bottom-color: rgba(0, 0, 0, .12);\r\n}\r\n\r\n.code-transaction {\r\n    color: #0971d8;\r\n}\r\n\r\n.company-transaction {\r\n    color: #a1a1a1;\r\n}\r\n\r\n.value-transaction {\r\n    color: #141414;\r\n}\r\n\r\n.font-color-green {\r\n    color: #6ae5a2;\r\n}\r\n\r\n.font-color-red {\r\n    color: #ff6687;\r\n}\r\n\r\n.text-right {\r\n    text-align: right;\r\n}\r\n\r\n.text-left {\r\n    text-align: left;\r\n}\r\n\r\napp-tabs {\r\n    width: 300px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"body-content\">\r\n    <mat-tab-group>\r\n        <!-- Tab Top 20 bản ghi có value lớn nhất -->\r\n        <mat-tab label=\"TOP GAINERS\">\r\n            <table mat-table [dataSource]=\"dataSourceGainer\" class=\"mat-elevation-z8\">\r\n                <ng-container matColumnDef=\"code\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"color-header text-left\" width=\"13%\"> Code</th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"code-transaction text-left\"> {{element.code}} </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"company\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"color-header text-left\" width=\"18%\"> Company </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"company-transaction text-left\"> {{element.company | uppercase}} </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"price\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"color-header text-right\" width=\"15%\"> Price </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"value-transaction text-right\"> {{element.price |number:'1.2-2'}} </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"value\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"color-header text-right\" width=\"15%\"> Value </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"value-transaction text-right\"> {{element.price*element.volume |number:'1.0-0' }} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"change\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"color-header text-right\" width=\"15%\"> Change </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-right\" [ngClass]=\"element.statusUp>0 ? 'font-color-green' : element.statusUp<0 ?'font-color-red':''\"> {{element.change==0?'--':element.change |number:'1.2-2' }} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"%change\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"color-header text-right\" width=\"15%\"> %Change </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-right\" [ngClass]=\"element.statusUp>0 ? 'font-color-green' : element.statusUp<0 ?'font-color-red':''\"> {{ element.perChange==0?'0': element.perChange |number:'1.2-2' }} {{element.perChange==0?'':'%'}}</td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n        </mat-tab>\r\n        <!-- Close tab Gainers -->\r\n\r\n        <!-- Tab Top 20 bản ghi có value nhỏ nhất -->\r\n        <mat-tab label=\"TOP LOSERS\">\r\n            <table mat-table [dataSource]=\"dataSourceLoser\" class=\"mat-elevation-z8\">\r\n                <ng-container matColumnDef=\"code\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"color-header text-left\" width=\"13%\"> Code</th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"code-transaction text-left\"> {{element.code}} </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"company\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"color-header text-left\" width=\"18%\"> Company </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"company-transaction text-left\"> {{element.company | uppercase}} </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"price\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"color-header text-right\" width=\"15%\"> Price </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"value-transaction text-right\"> {{element.price |number:'1.2-2'}} </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"value\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"color-header text-right\" width=\"15%\"> Value </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"value-transaction text-right\"> {{element.price*element.volume |number:'1.0-0' }} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"change\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"color-header text-right\" width=\"15%\"> Change </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-right\" [ngClass]=\"element.statusUp>0 ? 'font-color-green' : element.statusUp<0 ?'font-color-red':''\"> {{element.change==0?'--':element.change |number:'1.2-2' }} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"%change\">\r\n                    <th mat-header-cell *matHeaderCellDef class=\"color-header text-right\" width=\"15%\"> %Change </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-right\" [ngClass]=\"element.statusUp>0 ? 'font-color-green' : element.statusUp<0 ?'font-color-red':''\"> {{ element.perChange==0?'0': element.perChange |number:'1.2-2' }} {{element.perChange==0?'':'%'}}</td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n        </mat-tab>\r\n        <!-- Close tab Losers -->\r\n    </mat-tab-group>\r\n\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(api) {
        var _this = this;
        this.api = api;
        this.title = 'App demo';
        // Định danh các cột cho table
        this.displayedColumns = ['code', 'company', 'price', 'value', 'change', '%change'];
        // Lấy dữ liệu và xử lý dữ liệu từ api trả về
        this.api.getData().subscribe(function (res) {
            _this.data = res.dataTransaction;
            // Sắp xếp ghi có value = price*volume lớn nhất
            _this.dataSourceGainer = _this.data.sort(function (a, b) { return a.price * a.volume > b.price * b.volume ? -1 : 1; });
            // Lấy 20 bản ghi có value lớn nhất
            _this.dataSourceGainer = _this.dataSourceGainer.slice(0, 20);
            // Sắp xếp  bản ghi có value = price*volume nhỏ nhất
            _this.dataSourceLoser = _this.data.sort(function (a, b) { return a.price * a.volume > b.price * b.volume ? 1 : -1; });
            // Lấy 20 bản ghi có value nhỏ nhất
            _this.dataSourceLoser = _this.dataSourceLoser.slice(0, 20);
            // Hàm set thời gian sau 5s sẽ tự động thay đổi giá và volume để hiện thị lên table
            setInterval(function () {
                _this.mathData();
            }, 5000);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    // Hàm lấy ngẫu nhiên giá trong khoảng từ -5% -> +5% của giá hiện tại
    AppComponent.prototype.randomPrice = function (fPrice) {
        var fivePercent = 5 * fPrice / 100;
        var vValue = Math.random() * (fivePercent - (-fivePercent)) + (-fivePercent);
        return vValue;
    };
    // Hàm thay đổi giá và khối lượng, sau đó sẽ tính lại giá thay đổi và % giá đã thay đổi cũng như value của các bản ghi
    AppComponent.prototype.mathData = function () {
        for (var i = 0; i < this.data.length; i++) {
            // Tăng volume ngẫu nhiên trong khoảng từ 10->30
            this.data[i].volume = this.data[i].volume + Math.random() * (30 - 10) + 10;
            // Thay đổi giá từ hàm cho trước
            var priceChange = this.randomPrice(this.data[i].price);
            this.data[i].price = this.data[i].price + priceChange;
            // Tính giá thay đổi so với giá tham chiếu ban đầu
            var differencePrice = this.data[i].price - this.data[i].referPrice;
            this.data[i].change = differencePrice;
            // Tính phần trăm giá thay đổi so với giá tham chiếu ban đầu
            this.data[i].perChange = differencePrice * 100 / this.data[i].referPrice;
            // Check trạng thái của bản ghi thay đổi theo chiều tăng, giảm hoặc không
            if (differencePrice < 0) {
                this.data[i].statusUp = -1;
            }
            else if (differencePrice > 0) {
                this.data[i].statusUp = 1;
            }
            else {
                this.data[i].statusUp = 0;
            }
        }
        // Sắp xếp các bản ghi giảm dần sau khi dữ liệu thay đổi
        this.dataSourceGainer = this.data.sort(function (a, b) { return a.price * a.volume > b.price * b.volume ? -1 : 1; });
        // Lấy top 20 bản ghi có value cao nhất
        this.dataSourceGainer = this.dataSourceGainer.slice(0, 20);
        // Sắp xếp các bản ghi tăng dần sau khi dữ liệu thay đổi
        this.dataSourceLoser = this.data.sort(function (a, b) { return a.price * a.volume > b.price * b.volume ? 1 : -1; });
        // Lấy top 20 bản ghi có value nhỏ nhất
        this.dataSourceLoser = this.dataSourceLoser.slice(0, 20);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"]
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' })
};
var apiUrl = '/api';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getData = function () {
        var _this = this;
        return this.http.get(apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return _this.result = result.json(); }));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DataService);
    return DataService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\LearnData\Nodejs\MeanJS\quant-edge\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map