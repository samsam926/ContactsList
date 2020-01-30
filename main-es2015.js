(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <app-contacts-list></app-contacts-list>\n    </div>\n  </div>\n</div>\n\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts-list/contacts-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts-list/contacts-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Start of Search Wrapper -->\n<div class=\"search\">\n  <div class=\"row\">\n    <div class=\"col-md-12 p-0\">\n      <div class=\"input-group mb-3\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"search\"\n          [(ngModel)]=\"searchText\"\n          autocomplete=\"off\"\n          placeholder=\"Search for a contact\"\n        />\n        <div class=\"input-group-append\">\n          <button\n            class=\"btn btn-outline-secondary search\"\n            type=\"button\"\n            id=\"button-addon2\"\n          >\n            <img src=\"../../assets/search.png\" alt=\"\" />\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- End of Search Wrapper -->\n\n<!-- Start of Employee Add -->\n<div class=\"employee-add\">\n  <p class=\"addNew\">Add New Contact</p>\n  <button\n    class=\"btn btn-outline-secondary\"\n    type=\"button\"\n    id=\"button-addon2\"\n    data-toggle=\"modal\"\n    data-target=\"#addModal\"\n  >\n    <img src=\"../../assets/add.png\" alt=\"\" />\n  </button>\n</div>\n<!-- End of Employee Add -->\n\n<!-- Bootstrap-Divider -->\n<div class=\"dropdown-divider\"></div>\n\n<!-- Start Employees List -->\n<div class=\"employee-list\">\n<!-- StartLatest Contacts -->\n  <div class=\"latesContacts\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"latest\">\n          <h5>Latest Contacts</h5>\n          <div class=\"each-contact\" *ngFor=\"let last of latest; let i = index\">\n            <div class=\"pImage\"><img [src]=\"last.image\" alt=\"\" /></div>\n            <a href=\"#\">\n              <p class=\"name\" [innerHTML]=\"last.name\"></p>\n              <p class=\"number\" [innerHTML]=\"last.number\"></p>\n            </a>\n            <div class=\"dropdown-divider\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n<!-- End Latest Contacts -->\n\n  <!-- Start List of Contacts -->\n  <div class=\"chractContacts\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n          <!-- Contacts *ngfor -->\n        <div class=\"letters\" *ngFor=\"let contact of contacts; let i = index\">\n          <h5 class=\"letter\">{{ checkLetter(contact, i) }}</h5>\n          <div class=\"each-contact\">\n              <!-- Binding Data -->\n            <div class=\"pImage\"><img [src]=\"contact.image\" alt=\"\" /></div>\n            <a href=\"#\">\n              <p class=\"name\" [innerHTML]=\"contact.name\"></p>\n              <p class=\"number\" [innerHTML]=\"contact.number\"></p>\n            </a>\n          </div>\n          <!-- Bootstrap-Divider -->\n          <div class=\"dropdown-divider\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- End List of Contacts -->\n  \n</div>\n<!-- End Employees List -->\n\n\n<!-- Start Modal of Add New Contacts -->\n\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"addModal\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n        <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Add a New Contact</h5>\n        <button\n          type=\"button\"\n          class=\"close\"\n          data-dismiss=\"modal\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <!-- Modal Body -->\n      <div class=\"modal-body\">\n        <div class=\"newContact\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"addPhoto my-2\">\n                <div class=\"pImage\">\n                  <img src=\"../../../assets/user.png\" alt=\"\" />\n                </div>\n                <!-- <input type=\"text\" aria-label=\"image name\" #name class=\"form-control\" placeholder=\"Enter Your image name\" name=\"name\" [(ngModel)]=\"latest.image\">  -->\n                <label for=\"exampleFormControlSelect2\">Select an Image</label>\n                <select\n                  class=\"form-control\"\n                  id=\"exampleFormControlSelect2\"\n                  [(ngModel)]=\"latest.image\"\n                >\n                  <option>user</option>\n                  <option>users</option>\n                </select>\n              </div>\n              <div class=\"addName my-2\">\n                <input\n                  type=\"text\"\n                  aria-label=\"First name\"\n                  #name\n                  class=\"form-control\"\n                  placeholder=\"Enter Your Name\"\n                  name=\"name\"\n                  [(ngModel)]=\"latest.name\"\n                />\n              </div>\n              <div class=\"addNumb my-2\">\n                <input\n                  type=\"text\"\n                  aria-label=\"Your Number\"\n                  #number\n                  class=\"form-control\"\n                  placeholder=\"Enter Your Number\"\n                  name=\"number\"\n                  [(ngModel)]=\"latest.number\"\n                />\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- Modal Footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n          Close\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-primary\"\n          (click)=\"onAdd(latest)\"\n          data-dismiss=\"modal\"\n        >\n          Save changes\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- End Modal of Add New Contacts -->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search\">\n    <div class=\"input-group mb-3\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Search Contacts\" aria-label=\"Search Contacts\" aria-describedby=\"button-addon2\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-outline-secondary\" type=\"button\" id=\"button-addon2\"> <i class=\"fas fa-search\"></i> </button>\n      </div>\n    </div>\n        </div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ContactsApp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contacts_list_contacts_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contacts-list/contacts-list.component */ "./src/app/contacts-list/contacts-list.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _contacts_list_contacts_list_component__WEBPACK_IMPORTED_MODULE_8__["ContactsListComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contacts-list/contacts-list.component.sass":
/*!************************************************************!*\
  !*** ./src/app/contacts-list/contacts-list.component.sass ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".employee-add .addNew {\n  display: inline-block;\n  margin-bottom: 1px;\n}\n.employee-add button {\n  float: right;\n  margin: -10px auto;\n}\n.newContact .pImage {\n  width: 48px;\n  height: 48px;\n  margin: auto;\n  border: 1px solid #878787;\n  border-radius: 50%;\n}\n.newContact .pImage img {\n  width: 100%;\n  border-radius: 50%;\n}\n.newContact a {\n  text-align: center;\n  display: inherit;\n}\n.newContact .cancelButton button {\n  background-color: #d34040;\n  color: #fff;\n}\n.addButton button {\n  background-color: #255acb;\n  color: #fff;\n}\n.employee-list .latestContacts h5 {\n  text-transform: capitalize;\n}\n.employee-list .each-contact {\n  margin: 20px auto;\n}\n.employee-list .each-contact a {\n  text-decoration: none;\n}\n.employee-list .each-contact a:hover {\n  text-decoration: none;\n}\n.employee-list .each-contact .pImage {\n  width: 48px;\n  height: 48px;\n  float: left;\n  margin-right: 10px;\n  border: 1px solid #878787;\n  border-radius: 50%;\n}\n.employee-list .each-contact .pImage img {\n  width: 100%;\n  border-radius: 50%;\n}\n.employee-list .each-contact .name, .employee-list .each-contact .number {\n  margin-bottom: 1px;\n  color: #6c6c6c;\n}\n.employee-list .each-contact .dropdown-divider {\n  border-top: 2px solid #e9ecef;\n}\n.search img {\n  width: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMtbGlzdC9DOlxcVXNlcnNcXGhhaXRoYW0ubWFnZHlcXERlc2t0b3BcXEFuZ3VsYXItUHJvamVjdHNcXENvbnRhY3RzQXBwL3NyY1xcYXBwXFxjb250YWN0cy1saXN0XFxjb250YWN0cy1saXN0LmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9jb250YWN0cy1saXN0L2NvbnRhY3RzLWxpc3QuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FDRFI7QURFSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0FSO0FESUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDRFI7QURFUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0FaO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDQ1I7QURFUTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ0FaO0FERUk7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUNDUjtBRElRO0VBQ0ksMEJBQUE7QUNEWjtBREVJO0VBQ0ksaUJBQUE7QUNBUjtBRENRO0VBQ0kscUJBQUE7QUNDWjtBREFZO0VBQ0kscUJBQUE7QUNFaEI7QUREUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0daO0FERlk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNJaEI7QURIUTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0taO0FESlE7RUFDSSw2QkFBQTtBQ01aO0FESEE7RUFDSSxXQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0cy1saXN0L2NvbnRhY3RzLWxpc3QuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBZGQgTmV3IENvbnRhY3QgV3JhcHBlclxyXG4uZW1wbG95ZWUtYWRkXHJcbiAgICAuYWRkTmV3XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICAgIFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFweFxyXG4gICAgYnV0dG9uIFxyXG4gICAgICAgIGZsb2F0OiByaWdodFxyXG4gICAgICAgIG1hcmdpbjogLTEwcHggYXV0b1xyXG5cclxuLy8gQWRkIG5ldyBDb250YWN0IFBvcHVwXHJcbi5uZXdDb250YWN0XHJcbiAgICAucEltYWdlXHJcbiAgICAgICAgd2lkdGg6IDQ4cHhcclxuICAgICAgICBoZWlnaHQ6IDQ4cHhcclxuICAgICAgICBtYXJnaW46IGF1dG9cclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjODc4Nzg3XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlXHJcbiAgICAgICAgaW1nXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSAgICAgICAgXHJcbiAgICBhIFxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAgICBcclxuICAgICAgICBkaXNwbGF5OiBpbmhlcml0XHJcblxyXG4gICAgLmNhbmNlbEJ1dHRvbiBcclxuICAgICAgICBidXR0b24gICAgICBcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QzNDA0MFxyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZlxyXG4uYWRkQnV0dG9uXHJcbiAgICBidXR0b25cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU1YWNiXHJcbiAgICAgICAgY29sb3I6ICNmZmZcclxuXHJcbi8vRW1wbG95ZWVzIExpc3QgXHJcbi5lbXBsb3llZS1saXN0XHJcbiAgICAubGF0ZXN0Q29udGFjdHNcclxuICAgICAgICBoNSBcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemVcclxuICAgIC5lYWNoLWNvbnRhY3RcclxuICAgICAgICBtYXJnaW46IDIwcHggYXV0b1xyXG4gICAgICAgIGFcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXHJcbiAgICAgICAgICAgICY6aG92ZXIgXHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcclxuICAgICAgICAucEltYWdlXHJcbiAgICAgICAgICAgIHdpZHRoOiA0OHB4XHJcbiAgICAgICAgICAgIGhlaWdodDogNDhweFxyXG4gICAgICAgICAgICBmbG9hdDogbGVmdFxyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHhcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg3ODc4N1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCVcclxuICAgICAgICAgICAgaW1nXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlXHJcbiAgICAgICAgLm5hbWUsIC5udW1iZXJcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXB4XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNmM2YzZjXHJcbiAgICAgICAgLmRyb3Bkb3duLWRpdmlkZXJcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlOWVjZWZcclxuXHJcbi8vIFNlYXJjaGluZyBJY29uXHJcbi5zZWFyY2ggaW1nXHJcbiAgICB3aWR0aDogMjBweCIsIi5lbXBsb3llZS1hZGQgLmFkZE5ldyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuLmVtcGxveWVlLWFkZCBidXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogLTEwcHggYXV0bztcbn1cblxuLm5ld0NvbnRhY3QgLnBJbWFnZSB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgIzg3ODc4NztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm5ld0NvbnRhY3QgLnBJbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm5ld0NvbnRhY3QgYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5oZXJpdDtcbn1cbi5uZXdDb250YWN0IC5jYW5jZWxCdXR0b24gYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzNDA0MDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5hZGRCdXR0b24gYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1NWFjYjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5lbXBsb3llZS1saXN0IC5sYXRlc3RDb250YWN0cyBoNSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLmVtcGxveWVlLWxpc3QgLmVhY2gtY29udGFjdCB7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuLmVtcGxveWVlLWxpc3QgLmVhY2gtY29udGFjdCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmVtcGxveWVlLWxpc3QgLmVhY2gtY29udGFjdCBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmVtcGxveWVlLWxpc3QgLmVhY2gtY29udGFjdCAucEltYWdlIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg3ODc4NztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmVtcGxveWVlLWxpc3QgLmVhY2gtY29udGFjdCAucEltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uZW1wbG95ZWUtbGlzdCAuZWFjaC1jb250YWN0IC5uYW1lLCAuZW1wbG95ZWUtbGlzdCAuZWFjaC1jb250YWN0IC5udW1iZXIge1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gIGNvbG9yOiAjNmM2YzZjO1xufVxuLmVtcGxveWVlLWxpc3QgLmVhY2gtY29udGFjdCAuZHJvcGRvd24tZGl2aWRlciB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZTllY2VmO1xufVxuXG4uc2VhcmNoIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/contacts-list/contacts-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/contacts-list/contacts-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ContactsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsListComponent", function() { return ContactsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_MOCK_DATA_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/MOCK_DATA.json */ "./src/assets/MOCK_DATA.json");
var _assets_MOCK_DATA_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/MOCK_DATA.json */ "./src/assets/MOCK_DATA.json", 1);


 // JSON File Importing
let ContactsListComponent = class ContactsListComponent {
    constructor() {
        this.search = '';
        this.contacts = _assets_MOCK_DATA_json__WEBPACK_IMPORTED_MODULE_2__;
        this.latest = [
            { image: '../../../assets/users.png', name: 'Ahmed', number: '0123456' },
            { image: '../../../assets/user.png', name: 'Badr', number: '123456' },
            { image: '../../../assets/users.png', name: 'Chahen', number: '234567' },
            { image: '../../../assets/user.png', name: 'Dolan', number: '345678' },
            { image: '../../../assets/users.png', name: 'Egypt', number: '456789' }
        ];
    }
    // Function of Adding New Contacts
    onAdd(contacts) {
        this.contacts.push({
            image: '../../../assets/' + contacts.image + '.png',
            name: contacts.name,
            number: contacts.number
        });
    }
    // Function of Captilizing and Sorting by letters
    checkLetter(contact, i) {
        let Initial = '';
        if (i === 0) {
            Initial = this.contacts[0].name.charAt(0);
        }
        else {
            if (this.contacts[i].name.charAt(0) === this.contacts[i - 1].name.charAt(0)) {
                Initial = '';
            }
            else {
                Initial = this.contacts[i].name.charAt(0);
            }
        }
        return Initial.toUpperCase();
    }
    ngOnInit() {
        console.log(_assets_MOCK_DATA_json__WEBPACK_IMPORTED_MODULE_2___namespace);
    }
};
ContactsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contacts-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contacts-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts-list/contacts-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contacts-list.component.sass */ "./src/app/contacts-list/contacts-list.component.sass")).default]
    })
], ContactsListComponent);



/***/ }),

/***/ "./src/app/search/search.component.sass":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.sass ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchComponent = class SearchComponent {
    constructor() { }
    ngOnInit() {
    }
};
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.sass */ "./src/app/search/search.component.sass")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/assets/MOCK_DATA.json":
/*!***********************************!*\
  !*** ./src/assets/MOCK_DATA.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"name\":\"Haywood\",\"number\":21,\"image\":\"http://dummyimage.com/50x50.bmp/ff4444/ffffff\"},{\"id\":2,\"name\":\"Dedie\",\"number\":67,\"image\":\"http://dummyimage.com/50x50.png/5fa2dd/ffffff\"},{\"id\":3,\"name\":\"Margalo\",\"number\":1,\"image\":\"http://dummyimage.com/50x50.bmp/cc0000/ffffff\"},{\"id\":4,\"name\":\"Lura\",\"number\":3,\"image\":\"http://dummyimage.com/50x50.png/5fa2dd/ffffff\"},{\"id\":5,\"name\":\"Dalenna\",\"number\":62,\"image\":\"http://dummyimage.com/50x50.jpg/5fa2dd/ffffff\"},{\"id\":6,\"name\":\"Beaufort\",\"number\":96,\"image\":\"http://dummyimage.com/50x50.jpg/cc0000/ffffff\"},{\"id\":7,\"name\":\"Kristien\",\"number\":94,\"image\":\"http://dummyimage.com/50x50.jpg/ff4444/ffffff\"},{\"id\":8,\"name\":\"Oran\",\"number\":94,\"image\":\"http://dummyimage.com/50x50.bmp/cc0000/ffffff\"},{\"id\":9,\"name\":\"Berti\",\"number\":70,\"image\":\"http://dummyimage.com/50x50.bmp/dddddd/000000\"},{\"id\":10,\"name\":\"Zebulen\",\"number\":80,\"image\":\"http://dummyimage.com/50x50.png/ff4444/ffffff\"},{\"id\":11,\"name\":\"Patrice\",\"number\":13,\"image\":\"http://dummyimage.com/50x50.png/dddddd/000000\"},{\"id\":12,\"name\":\"Stefan\",\"number\":3,\"image\":\"http://dummyimage.com/50x50.jpg/dddddd/000000\"},{\"id\":13,\"name\":\"Athena\",\"number\":72,\"image\":\"http://dummyimage.com/50x50.png/ff4444/ffffff\"},{\"id\":14,\"name\":\"Quinn\",\"number\":27,\"image\":\"http://dummyimage.com/50x50.bmp/cc0000/ffffff\"},{\"id\":15,\"name\":\"Cathyleen\",\"number\":28,\"image\":\"http://dummyimage.com/50x50.bmp/5fa2dd/ffffff\"},{\"id\":16,\"name\":\"Shantee\",\"number\":81,\"image\":\"http://dummyimage.com/50x50.bmp/cc0000/ffffff\"},{\"id\":17,\"name\":\"Deb\",\"number\":74,\"image\":\"http://dummyimage.com/50x50.png/cc0000/ffffff\"},{\"id\":18,\"name\":\"Ellie\",\"number\":26,\"image\":\"http://dummyimage.com/50x50.bmp/5fa2dd/ffffff\"},{\"id\":19,\"name\":\"Evelyn\",\"number\":18,\"image\":\"http://dummyimage.com/50x50.bmp/cc0000/ffffff\"},{\"id\":20,\"name\":\"Carleton\",\"number\":6,\"image\":\"http://dummyimage.com/50x50.jpg/ff4444/ffffff\"}]");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\haitham.magdy\Desktop\Angular-Projects\ContactsApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map