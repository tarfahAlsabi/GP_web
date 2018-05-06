webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-quantity/add-quantity.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-quantity/add-quantity.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/add-quantity/add-quantity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddQuantityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddQuantityComponent = /** @class */ (function () {
    function AddQuantityComponent() {
    }
    AddQuantityComponent.prototype.ngOnInit = function () {
    };
    AddQuantityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-quantity',
            template: __webpack_require__("../../../../../src/app/add-quantity/add-quantity.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-quantity/add-quantity.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddQuantityComponent);
    return AddQuantityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routingComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empolyee_empolyee_component__ = __webpack_require__("../../../../../src/app/empolyee/empolyee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_Inv_component__ = __webpack_require__("../../../../../src/app/product/Inv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_form_my_form_component__ = __webpack_require__("../../../../../src/app/my-form/my-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__empolyee_add_emp_add_emp_component__ = __webpack_require__("../../../../../src/app/empolyee/add-emp/add-emp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__empolyee_view_emp_view_emp_component__ = __webpack_require__("../../../../../src/app/empolyee/view-emp/view-emp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_add_product_add_product_component__ = __webpack_require__("../../../../../src/app/product/add-product/add-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_view_product_view_product_component__ = __webpack_require__("../../../../../src/app/product/view-product/view-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tag_tag_component__ = __webpack_require__("../../../../../src/app/tag/tag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tag_add_tag_add_tag_component__ = __webpack_require__("../../../../../src/app/tag/add-tag/add-tag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tag_view_tag_view_tag_component__ = __webpack_require__("../../../../../src/app/tag/view-tag/view-tag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__charts_charts_component__ = __webpack_require__("../../../../../src/app/charts/charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__charts_sales_report_sales_report_component__ = __webpack_require__("../../../../../src/app/charts/sales-report/sales-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__control_no_found_page_no_found_page_component__ = __webpack_require__("../../../../../src/app/control/no-found-page/no-found-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__product_ivc_report_ivc_report_component__ = __webpack_require__("../../../../../src/app/product/ivc-report/ivc-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__manager_manager_component__ = __webpack_require__("../../../../../src/app/manager/manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__charts_product_report_product_report_component__ = __webpack_require__("../../../../../src/app/charts/product-report/product-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__charts_employee_sales_employee_sales_component__ = __webpack_require__("../../../../../src/app/charts/employee-sales/employee-sales.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__charts_employe_whs_employe_whs_component__ = __webpack_require__("../../../../../src/app/charts/employe-whs/employe-whs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__manager_edit_manager_edit_manager_component__ = __webpack_require__("../../../../../src/app/manager/edit-manager/edit-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__expenses_expenses_component__ = __webpack_require__("../../../../../src/app/expenses/expenses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__charts_income_statment_repor_income_statment_repor_component__ = __webpack_require__("../../../../../src/app/charts/income-statment-repor/income-statment-repor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__finance_finance_component__ = __webpack_require__("../../../../../src/app/finance/finance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__charts_finance_report_finance_report_component__ = __webpack_require__("../../../../../src/app/charts/finance-report/finance-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__home_page_main_home_main_home_component__ = __webpack_require__("../../../../../src/app/home-page/main-home/main-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__home_page_featurs_featurs_component__ = __webpack_require__("../../../../../src/app/home-page/featurs/featurs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__home_page_costumers_costumers_component__ = __webpack_require__("../../../../../src/app/home-page/costumers/costumers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__home_page_register_register_component__ = __webpack_require__("../../../../../src/app/home-page/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__home_page_log_in_log_in_component__ = __webpack_require__("../../../../../src/app/home-page/log-in/log-in.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_14__home_page_home_page_component__["a" /* HomePageComponent */], children: [
            { path: '', redirectTo: ' ', pathMatch: 'full' },
            { path: ' ', component: __WEBPACK_IMPORTED_MODULE_28__home_page_main_home_main_home_component__["a" /* MainHomeComponent */] },
            { path: 'features', component: __WEBPACK_IMPORTED_MODULE_29__home_page_featurs_featurs_component__["a" /* FeatursComponent */] },
            { path: 'LogIn', component: __WEBPACK_IMPORTED_MODULE_32__home_page_log_in_log_in_component__["a" /* LogInComponent */] },
            { path: 'register', component: __WEBPACK_IMPORTED_MODULE_31__home_page_register_register_component__["a" /* RegisterComponent */] },
            { path: 'customer', component: __WEBPACK_IMPORTED_MODULE_30__home_page_costumers_costumers_component__["a" /* CostumersComponent */] },
        ] },
    { path: 'mainPage', component: __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */], children: [
            { path: '', redirectTo: 'manager', pathMatch: 'full' },
            { path: 'productReport', component: __WEBPACK_IMPORTED_MODULE_20__charts_product_report_product_report_component__["a" /* ProductReportComponent */] },
            { path: 'productReport/:id', component: __WEBPACK_IMPORTED_MODULE_20__charts_product_report_product_report_component__["a" /* ProductReportComponent */] },
            { path: 'empolyee', component: __WEBPACK_IMPORTED_MODULE_2__empolyee_empolyee_component__["a" /* EmpolyeeComponent */] },
            { path: 'product', component: __WEBPACK_IMPORTED_MODULE_3__product_product_component__["a" /* ProductComponent */] },
            { path: 'Employee working report', component: __WEBPACK_IMPORTED_MODULE_22__charts_employe_whs_employe_whs_component__["a" /* EmployeWhsComponent */] },
            { path: 'Employee working report/:id', component: __WEBPACK_IMPORTED_MODULE_22__charts_employe_whs_employe_whs_component__["a" /* EmployeWhsComponent */] },
            { path: 'Employee sales', component: __WEBPACK_IMPORTED_MODULE_21__charts_employee_sales_employee_sales_component__["a" /* EmployeeSalesComponent */] },
            { path: 'Employee sales/:id', component: __WEBPACK_IMPORTED_MODULE_21__charts_employee_sales_employee_sales_component__["a" /* EmployeeSalesComponent */] },
            { path: 'tags', component: __WEBPACK_IMPORTED_MODULE_11__tag_tag_component__["a" /* TagComponent */] },
            { path: 'addQuantity', component: __WEBPACK_IMPORTED_MODULE_4__product_Inv_component__["a" /* ViewInv */] },
            { path: 'charts', component: __WEBPACK_IMPORTED_MODULE_15__charts_charts_component__["a" /* ChartsComponent */] },
            { path: 'Add_employee', component: __WEBPACK_IMPORTED_MODULE_7__empolyee_add_emp_add_emp_component__["a" /* AddEmpComponent */] },
            { path: 'Add_Tag', component: __WEBPACK_IMPORTED_MODULE_12__tag_add_tag_add_tag_component__["a" /* AddTagComponent */] },
            { path: 'Add_Product/:id', component: __WEBPACK_IMPORTED_MODULE_9__product_add_product_add_product_component__["a" /* AddProductComponent */] },
            { path: 'Add_Product', component: __WEBPACK_IMPORTED_MODULE_9__product_add_product_add_product_component__["a" /* AddProductComponent */] },
            { path: 'View_employee/:id', component: __WEBPACK_IMPORTED_MODULE_8__empolyee_view_emp_view_emp_component__["a" /* ViewEmpComponent */] },
            { path: 'View_Tag/:id', component: __WEBPACK_IMPORTED_MODULE_13__tag_view_tag_view_tag_component__["a" /* ViewTagComponent */] },
            { path: 'View_Producct/:id', component: __WEBPACK_IMPORTED_MODULE_10__product_view_product_view_product_component__["a" /* ViewProductComponent */] },
            { path: 'sales-report', component: __WEBPACK_IMPORTED_MODULE_16__charts_sales_report_sales_report_component__["a" /* SalesReportComponent */] },
            { path: 'Inventory report', component: __WEBPACK_IMPORTED_MODULE_18__product_ivc_report_ivc_report_component__["a" /* IvcReportComponent */] },
            { path: 'manager', component: __WEBPACK_IMPORTED_MODULE_19__manager_manager_component__["a" /* ManagerComponent */] },
            { path: 'edit-manager/:id', component: __WEBPACK_IMPORTED_MODULE_23__manager_edit_manager_edit_manager_component__["a" /* EditManagerComponent */] },
            { path: 'expenses', component: __WEBPACK_IMPORTED_MODULE_24__expenses_expenses_component__["a" /* ExpensesComponent */] },
            { path: 'finance', component: __WEBPACK_IMPORTED_MODULE_26__finance_finance_component__["a" /* FinanceComponent */] },
            { path: 'income_statment', component: __WEBPACK_IMPORTED_MODULE_25__charts_income_statment_repor_income_statment_repor_component__["a" /* IncomeStatmentReporComponent */] },
            { path: 'finance_report', component: __WEBPACK_IMPORTED_MODULE_27__charts_finance_report_finance_report_component__["a" /* FinanceReportComponent */] }
        ] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_17__control_no_found_page_no_found_page_component__["a" /* NoFoundPageComponent */] } //لازم تكون اخر شيء
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [__WEBPACK_IMPORTED_MODULE_28__home_page_main_home_main_home_component__["a" /* MainHomeComponent */], __WEBPACK_IMPORTED_MODULE_29__home_page_featurs_featurs_component__["a" /* FeatursComponent */], __WEBPACK_IMPORTED_MODULE_30__home_page_costumers_costumers_component__["a" /* CostumersComponent */], __WEBPACK_IMPORTED_MODULE_31__home_page_register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_32__home_page_log_in_log_in_component__["a" /* LogInComponent */], __WEBPACK_IMPORTED_MODULE_22__charts_employe_whs_employe_whs_component__["a" /* EmployeWhsComponent */], __WEBPACK_IMPORTED_MODULE_21__charts_employee_sales_employee_sales_component__["a" /* EmployeeSalesComponent */], __WEBPACK_IMPORTED_MODULE_4__product_Inv_component__["a" /* ViewInv */],
    __WEBPACK_IMPORTED_MODULE_20__charts_product_report_product_report_component__["a" /* ProductReportComponent */], __WEBPACK_IMPORTED_MODULE_14__home_page_home_page_component__["a" /* HomePageComponent */], __WEBPACK_IMPORTED_MODULE_10__product_view_product_view_product_component__["a" /* ViewProductComponent */], __WEBPACK_IMPORTED_MODULE_9__product_add_product_add_product_component__["a" /* AddProductComponent */],
    __WEBPACK_IMPORTED_MODULE_11__tag_tag_component__["a" /* TagComponent */], __WEBPACK_IMPORTED_MODULE_15__charts_charts_component__["a" /* ChartsComponent */], __WEBPACK_IMPORTED_MODULE_13__tag_view_tag_view_tag_component__["a" /* ViewTagComponent */], __WEBPACK_IMPORTED_MODULE_12__tag_add_tag_add_tag_component__["a" /* AddTagComponent */], __WEBPACK_IMPORTED_MODULE_3__product_product_component__["a" /* ProductComponent */],
    __WEBPACK_IMPORTED_MODULE_2__empolyee_empolyee_component__["a" /* EmpolyeeComponent */], __WEBPACK_IMPORTED_MODULE_17__control_no_found_page_no_found_page_component__["a" /* NoFoundPageComponent */], __WEBPACK_IMPORTED_MODULE_19__manager_manager_component__["a" /* ManagerComponent */], __WEBPACK_IMPORTED_MODULE_6__my_form_my_form_component__["a" /* MyFormComponent */], __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_8__empolyee_view_emp_view_emp_component__["a" /* ViewEmpComponent */], __WEBPACK_IMPORTED_MODULE_7__empolyee_add_emp_add_emp_component__["a" /* AddEmpComponent */], __WEBPACK_IMPORTED_MODULE_11__tag_tag_component__["a" /* TagComponent */], __WEBPACK_IMPORTED_MODULE_16__charts_sales_report_sales_report_component__["a" /* SalesReportComponent */], __WEBPACK_IMPORTED_MODULE_18__product_ivc_report_ivc_report_component__["a" /* IvcReportComponent */],
    __WEBPACK_IMPORTED_MODULE_23__manager_edit_manager_edit_manager_component__["a" /* EditManagerComponent */], __WEBPACK_IMPORTED_MODULE_24__expenses_expenses_component__["a" /* ExpensesComponent */], __WEBPACK_IMPORTED_MODULE_25__charts_income_statment_repor_income_statment_repor_component__["a" /* IncomeStatmentReporComponent */], __WEBPACK_IMPORTED_MODULE_26__finance_finance_component__["a" /* FinanceComponent */],
    __WEBPACK_IMPORTED_MODULE_27__charts_finance_report_finance_report_component__["a" /* FinanceReportComponent */]];


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".viewProduct\r\n{\r\n    width: 25%;\r\n    height: 25%;\r\n    max-height: 250px;\r\n    max-width: 250px;\r\n    min-height: 200px;\r\n    min-width: 200px;\r\n    text-align: center;\r\n    border: 25px;\r\n    margin: 12px 0px 7px 9px;\r\n    display: inline-table;\r\n}\r\n.ViewsContainer\r\n{\r\n    margin:15px; \r\n    -ms-flex-line-pack: center; \r\n        align-content: center;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.PageTitle\r\n{\r\n    margin: 15px;\r\n    height: 40px;\r\n}\r\n.PageTitle h2\r\n{\r\n    margin: 0px;\r\n}\r\n.Viewimg\r\n{\r\n    width: 75%;\r\n    height: 60%;\r\n    overflow-wrap: normal;\r\n    overflow: hidden;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center\r\n}\r\n.btn-Add\r\n{\r\n    float: left;\r\n}\r\n.toolbar-spacer {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n  }\r\n.OptionBtn\r\n  {\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    margin: 0px;\r\n    direction: rtl;\r\n    width: auto;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n  }\r\n.PageTitle\r\n  {\r\n      width: auto;\r\n      margin: 15px;\r\n      height: 40px;\r\n  }\r\n.PageTitle span h2\r\n  {\r\n      font-size: 22px;\r\n      margin: 0px;\r\n  }\r\nmat-toolbar mat-toolbar-row span mat-form-field\r\n  {\r\n      text-align: right;\r\n      font-size: 14px;\r\n      float: right;\r\n      line-height: 2;\r\n  }\r\nexample-headers-align\r\n  {\r\n      margin: 15px;\r\n      width: auto;\r\n      \r\n  }\r\n.boutonAlign\r\n{\r\n    margin-bottom: 8px;\r\n}\r\nmat-form-field\r\n  {\r\n  \r\n    text-align: right;\r\n    font-size: 18px;\r\n    line-height: 2;\r\n  }\r\n.dialogTitle , .DialogOptionBtn\r\n  {\r\n      display: -ms-inline-grid;;\r\n      direction: rtl;\r\n      -ms-flex-line-pack: center;\r\n          align-content: center;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<!--\r\n<app-home-page></app-home-page> \r\n\r\n<app-header></app-header> \r\n-->\r\n\r\n<flash-messages></flash-messages>\r\n<router-outlet> </router-outlet> "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__input_file_input_file_component__ = __webpack_require__("../../../../../src/app/input-file/input-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__add_quantity_add_quantity_component__ = __webpack_require__("../../../../../src/app/add-quantity/add-quantity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__empolyee_empolyee_component__ = __webpack_require__("../../../../../src/app/empolyee/empolyee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__empolyee_add_emp_add_emp_component__ = __webpack_require__("../../../../../src/app/empolyee/add-emp/add-emp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__empolyee_view_emp_view_emp_component__ = __webpack_require__("../../../../../src/app/empolyee/view-emp/view-emp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__tag_tag_component__ = __webpack_require__("../../../../../src/app/tag/tag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__product_add_product_add_product_component__ = __webpack_require__("../../../../../src/app/product/add-product/add-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__product_view_product_view_product_component__ = __webpack_require__("../../../../../src/app/product/view-product/view-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__manager_edit_manager_edit_manager_component__ = __webpack_require__("../../../../../src/app/manager/edit-manager/edit-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__manager_manager_component__ = __webpack_require__("../../../../../src/app/manager/manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__finance_show_finance_show_finance_component__ = __webpack_require__("../../../../../src/app/finance/show-finance/show-finance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__home_page_log_in_log_in_component__ = __webpack_require__("../../../../../src/app/home-page/log-in/log-in.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { MyErrorStateMatcher } from './empolyee/add-emp/add-emp.component';

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["b" /* routingComponents */],
                __WEBPACK_IMPORTED_MODULE_14__input_file_input_file_component__["a" /* InputFileComponent */],
                __WEBPACK_IMPORTED_MODULE_15__add_quantity_add_quantity_component__["a" /* AddQuantityComponent */],
                __WEBPACK_IMPORTED_MODULE_16__empolyee_empolyee_component__["a" /* EmpolyeeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__empolyee_add_emp_add_emp_component__["a" /* AddEmpComponent */],
                __WEBPACK_IMPORTED_MODULE_18__empolyee_view_emp_view_emp_component__["a" /* ViewEmpComponent */],
                __WEBPACK_IMPORTED_MODULE_19__tag_tag_component__["b" /* confirmDialog */],
                __WEBPACK_IMPORTED_MODULE_19__tag_tag_component__["c" /* viewTag */],
                __WEBPACK_IMPORTED_MODULE_23__product_product_component__["b" /* addQuantity */],
                __WEBPACK_IMPORTED_MODULE_18__empolyee_view_emp_view_emp_component__["c" /* updateSalary */],
                __WEBPACK_IMPORTED_MODULE_28__product_add_product_add_product_component__["b" /* addCategory */],
                __WEBPACK_IMPORTED_MODULE_29__product_view_product_view_product_component__["b" /* confirmMessage */],
                __WEBPACK_IMPORTED_MODULE_18__empolyee_view_emp_view_emp_component__["b" /* confirmMessageEmp */],
                __WEBPACK_IMPORTED_MODULE_17__empolyee_add_emp_add_emp_component__["b" /* confirmMessageancleEmp */],
                __WEBPACK_IMPORTED_MODULE_28__product_add_product_add_product_component__["c" /* confirmMessageanclePro */],
                __WEBPACK_IMPORTED_MODULE_30__manager_edit_manager_edit_manager_component__["b" /* confirmMessageCancleManag */],
                __WEBPACK_IMPORTED_MODULE_30__manager_edit_manager_edit_manager_component__["a" /* EditManagerComponent */],
                __WEBPACK_IMPORTED_MODULE_31__manager_manager_component__["c" /* confirmDelete */],
                __WEBPACK_IMPORTED_MODULE_32__finance_show_finance_show_finance_component__["a" /* ShowFinanceComponent */],
                __WEBPACK_IMPORTED_MODULE_31__manager_manager_component__["b" /* ResetPassword */],
                __WEBPACK_IMPORTED_MODULE_33__home_page_log_in_log_in_component__["b" /* ResetPassword2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["w" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["H" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["l" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["m" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["o" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["q" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["r" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["s" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["t" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["w" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["x" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["y" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["z" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["A" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["B" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["C" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["E" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["D" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["F" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["H" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["I" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["K" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["L" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["M" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["N" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["q" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["s" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["C" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["M" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_20_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_22__environments_environment__["a" /* environment */].firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_21_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_24__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_25_angular2_flash_messages__["FlashMessagesModule"]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_19__tag_tag_component__["b" /* confirmDialog */], __WEBPACK_IMPORTED_MODULE_19__tag_tag_component__["c" /* viewTag */], __WEBPACK_IMPORTED_MODULE_19__tag_tag_component__["a" /* TagComponent */], __WEBPACK_IMPORTED_MODULE_23__product_product_component__["b" /* addQuantity */], __WEBPACK_IMPORTED_MODULE_23__product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_18__empolyee_view_emp_view_emp_component__["c" /* updateSalary */], __WEBPACK_IMPORTED_MODULE_18__empolyee_view_emp_view_emp_component__["a" /* ViewEmpComponent */], __WEBPACK_IMPORTED_MODULE_28__product_add_product_add_product_component__["b" /* addCategory */], __WEBPACK_IMPORTED_MODULE_28__product_add_product_add_product_component__["a" /* AddProductComponent */], __WEBPACK_IMPORTED_MODULE_29__product_view_product_view_product_component__["a" /* ViewProductComponent */],
                __WEBPACK_IMPORTED_MODULE_29__product_view_product_view_product_component__["b" /* confirmMessage */], __WEBPACK_IMPORTED_MODULE_18__empolyee_view_emp_view_emp_component__["b" /* confirmMessageEmp */], __WEBPACK_IMPORTED_MODULE_18__empolyee_view_emp_view_emp_component__["a" /* ViewEmpComponent */], __WEBPACK_IMPORTED_MODULE_17__empolyee_add_emp_add_emp_component__["b" /* confirmMessageancleEmp */], __WEBPACK_IMPORTED_MODULE_17__empolyee_add_emp_add_emp_component__["a" /* AddEmpComponent */],
                __WEBPACK_IMPORTED_MODULE_28__product_add_product_add_product_component__["c" /* confirmMessageanclePro */], __WEBPACK_IMPORTED_MODULE_28__product_add_product_add_product_component__["a" /* AddProductComponent */], __WEBPACK_IMPORTED_MODULE_30__manager_edit_manager_edit_manager_component__["b" /* confirmMessageCancleManag */], __WEBPACK_IMPORTED_MODULE_30__manager_edit_manager_edit_manager_component__["a" /* EditManagerComponent */],
                __WEBPACK_IMPORTED_MODULE_31__manager_manager_component__["c" /* confirmDelete */], __WEBPACK_IMPORTED_MODULE_31__manager_manager_component__["a" /* ManagerComponent */], __WEBPACK_IMPORTED_MODULE_31__manager_manager_component__["b" /* ResetPassword */], __WEBPACK_IMPORTED_MODULE_33__home_page_log_in_log_in_component__["a" /* LogInComponent */], __WEBPACK_IMPORTED_MODULE_33__home_page_log_in_log_in_component__["b" /* ResetPassword2 */]],
            providers: [__WEBPACK_IMPORTED_MODULE_26__core_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_25_angular2_flash_messages__["FlashMessagesService"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

Object(__WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(AppModule);


/***/ }),

/***/ "../../../../../src/app/charts/charts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".viewProduct\r\n{\r\n    width: 25%;\r\n    height: 25%;\r\n    max-height: 250px;\r\n    max-width: 250px;\r\n    min-height: 200px;\r\n    min-width: 200px;\r\n    text-align: center;\r\n    border: 25px;\r\n    margin: 12px 0px 7px 9px;\r\n    display: inline-table;\r\n}\r\n.ViewsContainer\r\n{\r\n    margin-right:15px; \r\n    -ms-flex-line-pack: center; \r\n        align-content: center;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.PageTitle\r\n{\r\n    margin: 15px;\r\n    height: 40px;\r\n}\r\n.PageTitle h2\r\n{\r\n    margin: 0px;\r\n}\r\n.Viewimg\r\n{\r\n    margin-top: 0px !important ; \r\n    width: 75%;\r\n    height: 60%;\r\n    overflow-wrap: normal;\r\n    overflow: hidden;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center\r\n}\r\n.btn-Add\r\n{\r\n    float: left;\r\n}\r\n.toolbar-spacer {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n  }\r\n.OptionBtn\r\n  {\r\n      margin: 0px;\r\n      width: 100%;\r\n      -ms-flex-item-align: center;\r\n          -ms-grid-row-align: center;\r\n          align-self: center;\r\n      -webkit-box-align: center;\r\n          -ms-flex-align: center;\r\n              align-items: center;\r\n      -ms-flex-line-pack: center;\r\n          align-content: center;\r\n      width: 100%;\r\n      height: -webkit-fit-content;\r\n      height: -moz-fit-content;\r\n      height: fit-content;\r\n  }\r\n.reportsContainer\r\n  {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;  \r\n  }\r\n.reportImgs\r\n{\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n}\r\n.reportImgs :hover\r\n{\r\n    opacity: 0.5;\r\n}\r\n.reportImgsContainer\r\n{\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n.OptionBtn button\r\n  {\r\n      width: 100%;\r\n  }\r\n.PageTitle\r\n  {\r\n      width: auto;\r\n      margin: 15px;\r\n      height: 40px;\r\n  }\r\n.PageTitle span h2\r\n  {\r\n      font-size: 22px;\r\n      margin: 0px;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/charts.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar  class=\"PageTitle\">\r\n    <mat-toolbar-row>\r\n  \r\n                <span class=\"toolbar-spacer\"></span>\r\n\r\n        <span color=\"primary\">   <h2>  التقارير  </h2> </span>\r\n          \r\n        <span class=\"toolbar-spacer\"></span>\r\n\r\n\r\n    </mat-toolbar-row>\r\n   \r\n</mat-toolbar>\r\n\r\n    <mat-grid-list cols=\"4\" rowHeight=\"1:1\" dir=\"rtl \">\r\n        <mat-grid-tile  [colspan]=\"1\"   [rowspan]=\"1\">\r\n                <a routerLink=\"../sales-report\" >\r\n            <figure class=\"mat-figure effect-oscar reportImgsContainer fadeInUp \" >\r\n                <img src=\"assets/imgs/Icons/PNG/تقرير المبيعات-01.png\" class=\"reportImgs\" alt=\"\"/>\r\n            </figure>\r\n            </a>\r\n        </mat-grid-tile>\r\n\r\n        <mat-grid-tile  [colspan]=\"1\" [rowspan]=\"1\">\r\n                <a routerLink=\"../income_statment\">\r\n            <figure class=\"mat-figure effect-oscar reportImgsContainer fadeInUp\" >\r\n                <img src=\"assets/imgs/Icons/PNG/تقرير الإيرادات -01.png\" class=\"reportImgs\" alt=\"\"/>\r\n            </figure>\r\n            </a>\r\n        </mat-grid-tile>\r\n\r\n\r\n        <mat-grid-tile  [colspan]=\"1\"  [rowspan]=\"1\">\r\n                <a routerLink=\"../Inventory report\" >\r\n    <figure class=\"mat-figure effect-oscar reportImgsContainer fadeInUp\" >\r\n                <img src=\"assets/imgs/Icons/PNG/تقرير المخزون-01.png\" class=\"reportImgs\" alt=\"\"/>\r\n            </figure>\r\n            </a>\r\n        </mat-grid-tile>\r\n\r\n        <mat-grid-tile  [colspan]=\"1\"  [rowspan]=\"1\">\r\n            <a routerLink=\"../finance_report\">\r\n            <figure class=\"mat-figure effect-oscar reportImgsContainer fadeInUp\" >\r\n                <img src=\"assets/imgs/Icons/PNG/تقرير المركز المالي-01.png\" class=\"reportImgs\" alt=\"\"/> \r\n            </figure>\r\n        </a>\r\n        </mat-grid-tile>\r\n\r\n\r\n        <mat-grid-tile  [colspan]=\"1\"  [rowspan]=\"1\">\r\n                <a routerLink=\"../Employee working report\" >\r\n            <figure class=\"mat-figure effect-oscar reportImgsContainer fadeInUp\"  >\r\n                <img src=\"assets/imgs/Icons/PNG/تقرير ساعات الموظف-01.png\" class=\"reportImgs\" alt=\"\"/>\r\n            </figure>\r\n            </a>\r\n        </mat-grid-tile>\r\n\r\n\r\n        \r\n        <mat-grid-tile  [colspan]=\"1\"  [rowspan]=\"1\">\r\n                <a routerLink=\"../productReport\" >\r\n                <figure class=\"mat-figure effect-oscar reportImgsContainer fadeInUp\" >\r\n                    <img src=\"assets/imgs/Icons/PNG/تقرير مبيعات المنتج-01.png\" class=\"reportImgs\" alt=\"\"/>\r\n                </figure>\r\n                </a>\r\n            </mat-grid-tile>\r\n\r\n            \r\n        <mat-grid-tile  [colspan]=\"1\"  [rowspan]=\"1\">\r\n                <a routerLink=\"../Employee sales\" >\r\n                <figure class=\"mat-figure effect-oscar reportImgsContainer fadeInUp\"  >\r\n                    <img src=\"assets/imgs/Icons/PNG/تقرير مبيعات الموظف-01.png\" class=\"reportImgs\" alt=\"\"/>\r\n                </figure>\r\n                </a>\r\n            </mat-grid-tile>\r\n\r\n             \r\n    \r\n      </mat-grid-list>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/charts/charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartsComponent = /** @class */ (function () {
    function ChartsComponent(router) {
        this.router = router;
    }
    ChartsComponent.prototype.ngOnInit = function () {
    };
    ChartsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-charts',
            template: __webpack_require__("../../../../../src/app/charts/charts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/charts/charts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/charts/employe-whs/employe-whs.component.html":
/***/ (function(module, exports) {

module.exports = "    <mat-toolbar  class=\"PageTitle\" style=\"background-color:transparent\">\r\n        <span class=\"toolbar-spacer\"></span>\r\n    <span color=\"primary\">   <h2>  {{reportName}} </h2> </span>\r\n    <span class=\"toolbar-spacer\"></span>\r\n    </mat-toolbar>   \r\n    \r\n    \r\n    <div  class=\"PageTitl col-md-12 col-sm-12 right\">\r\n            <div   class=\" col-md-12 col-sm-12 contane\"  dir=\"rtl\"  >\r\n         \r\n                    <div  *ngIf=\"hasDate\" class=\" col-md-4 col-sm-6 right\" > \r\n                            <mat-form-field class=\"headerText\">\r\n                                <input   [value]='startDate' matInput [matDatepicker]=\"picker\" placeholder=\" من تاريخ \" (dateChange)=\"changeDate('from', $event) \" >\r\n                                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #picker disabled=\"false\" ></mat-datepicker>\r\n                            </mat-form-field>\r\n                        </div>\r\n            <!-- <span class=\"toolbar-spacer\"></span> -->\r\n      \r\n\r\n\r\n            <div  *ngIf=\"hasDate\" class=\" col-md-4 col-sm-6 right\" > \r\n            <mat-form-field class=\"headerText\">\r\n                <input matInput  [value]='endDate'  [matDatepicker]=\"ToDate\" placeholder=\" إلى تاريخ \" (dateChange)=\"changeDate('to', $event)\" >\r\n                <mat-datepicker-toggle matSuffix [for]=\"ToDate\"></mat-datepicker-toggle>\r\n                <mat-datepicker   #ToDate disabled=\"false\"  ></mat-datepicker>\r\n            </mat-form-field>\r\n            </div> \r\n\r\n            <div class=\"reportBar col-md-4 col-sm-12 right\" *ngIf=\"hasSelection\" >\r\n                    <mat-form-field class=\"headerText\" >\r\n                    <mat-select placeholder=\"اسم الموظف\" [(ngModel)]=\"selectedValue\" name=\"item\" (change)='changeProduct()' >\r\n                        <mat-option *ngFor=\"let item of items\" [value]=\" item.$key \">\r\n                            {{item.name}}\r\n                        </mat-option>        \r\n                    </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n          \r\n\r\n\r\n\r\n </div>\r\n </div>\r\n <div   class=\" col-md-12 col-sm-12 \"  >\r\n\r\n    <flash-messages></flash-messages>\r\n\r\n</div>\r\n    <div class=\"col-md-12 col-sm-12 right\">\r\n    <mat-tab-group class=\"tab-group\" (selectedTabChange)='selectChange($event)' >\r\n        <mat-tab label=\"التقرير\" >\r\n        <div class=\"tabContent\">\r\n\r\n            <mat-table #table  class=\"reportTable\" [dataSource]=\"dataSource\" matSort>\r\n\r\n                \r\n                \r\n                <ng-container matColumnDef=\"date\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header > التاريخ </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\"> {{row.date.toISOString().substring(0,10)}} </mat-cell>\r\n                    <mat-cell *matCellDef=\"let row\"> {{row.date.toISOString().substring(0,10)}} </mat-cell>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"checkIn\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> بداية الفترة </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let row\"> {{row.checkIn.toString().substring(11)}} </mat-cell>\r\n                    </ng-container>\r\n                        <ng-container matColumnDef=\"checkOut\">\r\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> نهاية الفترة  </mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let row\"> {{row.checkOut.toString().substring(11)}} </mat-cell>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"totalShiftTime\">\r\n                            <mat-header-cell *matHeaderCellDef mat-sort-header>  مدة الفترة</mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let row\"> {{row.totalShiftTime }} </mat-cell>\r\n                        </ng-container>\r\n                        \r\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n                </mat-table>\r\n                <mat-paginator dir=\"rtl\" [pageSizeOptions]=\"[5, 10, 15, 100]\" ></mat-paginator>          \r\n        </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"الرسم البياني\">\r\n            <div class=\"tabContent\"  *ngIf=\"chart\" >\r\n                <canvas id=\"pie\"  class=\"chart-pie\" style=\" width:fit-content ; height:fit-content;     overflow:hidden;\" ></canvas>\r\n            \r\n            </div>    \r\n        </mat-tab>\r\n    </mat-tab-group>\r\n    </div>\r\n    "

/***/ }),

/***/ "../../../../../src/app/charts/employe-whs/employe-whs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeWhsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_reports_service__ = __webpack_require__("../../../../../src/app/charts/shared/reports.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_receipt_model__ = __webpack_require__("../../../../../src/app/charts/shared/receipt.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EmployeWhsComponent = /** @class */ (function () {
    function EmployeWhsComponent(reportsService, firebase, flashMensaje, route) {
        this.reportsService = reportsService;
        this.firebase = firebase;
        this.flashMensaje = flashMensaje;
        this.route = route;
        this.chart = __WEBPACK_IMPORTED_MODULE_7_chart_js__["Chart"];
        this.hasDate = true;
        this.hasSelection = true;
        this.reportName = 'تقرير ساعات عمل موظف  ';
        this.displayedColumns = ['date', 'checkIn', 'checkOut', 'totalShiftTime'];
        this.error = false;
        this.x = [];
        this.y = [];
        //ngOnInit
        this.startDate = new Date();
        this.endDate = new Date();
        this.items = new Array();
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["J" /* MatTableDataSource */](new Array());
    }
    EmployeWhsComponent.prototype.ngOnInit = function () {
        var nn = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["v" /* MatPaginatorIntl */]();
        nn.itemsPerPageLabel = "عدد الصفوف في الصفحة ";
        nn.firstPageLabel = "الصفحة الأولى ";
        nn.lastPageLabel = "الصفحة الأخيرة ";
        nn.nextPageLabel = "الصفحة التالية";
        nn.previousPageLabel = "الصفحة السابقة";
        nn.getRangeLabel = function (page, pageSize, length) { if (length == 0 || pageSize == 0) {
            return "0 \u0645\u0646 " + length;
        } length = Math.max(length, 0); var startIndex = page * pageSize; var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize; return startIndex + 1 + " - " + endIndex + " \u0645\u0646 " + length; };
        this.paginator._intl = nn;
        this.startDate.setDate(this.startDate.getDate() - 7);
        this.items = (this.reportsService.getEmployeeList());
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        var emp;
        emp = this.route.snapshot.params.id;
        if (emp != null) {
            this.selectedValue = emp;
            this.changeProduct();
        }
    };
    EmployeWhsComponent.prototype.selectChange = function (evet) {
        if (evet.index == 0)
            this.changeProduct();
        else {
            this.changeProduct();
        }
    };
    EmployeWhsComponent.prototype.changeDate = function (type, event) {
        if (type == 'from')
            this.startDate = event.value;
        if (type == 'to') {
            var x = new Date(event.value);
            this.endDate = new Date(x.getTime() + (1000 * 60 * 60 * 24));
        }
        this.changeProduct();
        this.creatChart();
    };
    EmployeWhsComponent.prototype.creatChart = function () {
        if (this.chart.data)
            this.chart.destroy();
        // this.changeProduct()
        this.getValues();
        this.chart = new __WEBPACK_IMPORTED_MODULE_7_chart_js__["Chart"]('pie', {
            type: 'line',
            data: {
                labels: this.y,
                datasets: [{
                        data: this.x,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.4)',
                            'rgba(54, 162, 235, 0.4)',
                            'rgba(255, 206, 86, 0.4)',
                            'rgba(75, 192, 192, 0.4)',
                            'rgba(153, 102, 255, 0.4)',
                            'rgba(255, 159, 64, 0.4)',
                            'rgba(102, 153, 255,0.4)',
                            'rgba(255, 51, 153,0.4)',
                            'rgba(255, 102, 0, 0.4)',
                            'rgba(51, 102, 255,0.4)',
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(102, 153, 255, 1)',
                            'rgba(255, 51, 153, 1)',
                            'rgba(255, 102, 0, 1)',
                            'rgba(51, 102, 255, 1)',
                        ],
                    }]
            },
            options: {
                title: {
                    display: true,
                    text: 'ساعات عمل الموظف في الفترة المحددة'
                },
                responsive: true,
                legend: {
                    display: false,
                    position: 'right',
                },
                scales: {
                    xAxes: [{
                            scaleLabel: {
                                labelString: "التاريخ  ",
                                display: true,
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                    yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true
                            },
                            scaleLabel: {
                                labelString: "ساعات العمل",
                                display: true,
                            },
                        }],
                },
                tooltips: {
                    mode: 'point'
                },
            }
        });
    };
    EmployeWhsComponent.prototype.getValues = function () {
        var _this = this;
        this.x = [];
        this.y = [];
        var label = this.dataSource.data.map(function (p) { return p.date.toISOString().substring(0, 10); });
        var values = this.dataSource.data.map(function (p) { return p.ChartshiftTime; });
        label.forEach(function (i) {
            var sum = 0;
            for (var n in label) {
                if (label[n].localeCompare(i) == 0) {
                    sum = sum + values[n];
                    values[n] = 0;
                    label[n] = '';
                }
            }
            if (i != '') {
                _this.x.push(sum);
                _this.y.push(i);
                i = '';
            }
        });
    };
    EmployeWhsComponent.prototype.changeProduct = function () {
        this.dataSource.data = [];
        if (this.selectedValue != undefined) {
            if (this.startDate && this.endDate) {
                if (this.startDate <= this.endDate) {
                    this.dataSource.data = [];
                    this.getEmpShifts();
                    this.getValues();
                }
                else {
                    this.flashMensaje.show('يجب ان لا يسبق تاريخ  النهاية تاريخ البداية.', { cssClass: 'alert-danger', timeout: 100000,
                        closeOnClick: true, showCloseBtn: true });
                }
            }
            else {
                this.flashMensaje.show('يرجى إدخال الفترة الزمنية أولا.', { cssClass: 'alert-danger', timeout: 100000,
                    closeOnClick: true, showCloseBtn: true });
            }
        }
        else {
            this.flashMensaje.show('يرجى إختيار موظف', { cssClass: 'alert-danger', timeout: 5000 });
        }
    };
    EmployeWhsComponent.prototype.getEmpShifts = function () {
        var _this = this;
        this.error = true;
        this.dataSource.data = [];
        this.firebase.list(window.name + '/employees/' + this.selectedValue + '/workingTime').snapshotChanges().subscribe(function (list) {
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                var temp = list_1[_i];
                var year = parseInt(temp.key, 10);
                var mon = temp.payload.toJSON();
                for (var i in mon) {
                    var month = parseInt(i, 10);
                    var day = mon[i];
                    for (var n in day) {
                        var ymd = new Date(year, month - 1, parseInt(n, 10));
                        if (ymd <= _this.startDate && ymd >= _this.endDate)
                            continue;
                        var date = parseInt(n, 10);
                        if (ymd < _this.startDate || ymd > _this.endDate)
                            continue;
                        var shifts = day[n];
                        for (var s in shifts) {
                            var temp_1 = new __WEBPACK_IMPORTED_MODULE_2__shared_receipt_model__["g" /* shift */]();
                            temp_1.date = ymd;
                            temp_1.checkIn = shifts[s].checkIn;
                            temp_1.checkOut = shifts[s].checkOut;
                            var p = shifts[s].totalShiftTime.split(':');
                            temp_1.totalShiftTime = shifts[s].totalShiftTime;
                            temp_1.ChartshiftTime = (((p[0] / 1) + (p[1] / 100) + (p[2] / 10000)));
                            _this.error = false;
                            _this.dataSource.data.push(temp_1);
                            _this.dataSource._updateChangeSubscription();
                        }
                    }
                }
            }
            if (_this.error)
                _this.flashMensaje.show('لا يوجد ساعات عمل لهذا الموظف.', { cssClass: 'alert-danger', timeout: 5000 });
            _this.creatChart();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("pie", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], EmployeWhsComponent.prototype, "pie", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["G" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_material__["G" /* MatSort */])
    ], EmployeWhsComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["u" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_material__["u" /* MatPaginator */])
    ], EmployeWhsComponent.prototype, "paginator", void 0);
    EmployeWhsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employe-whs',
            template: __webpack_require__("../../../../../src/app/charts/employe-whs/employe-whs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/charts/sales-report/sales-report.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_reports_service__["a" /* ReportsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_reports_service__["a" /* ReportsService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */]])
    ], EmployeWhsComponent);
    return EmployeWhsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/charts/employee-sales/employee-sales.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar  class=\"PageTitle\" style=\"background-color:transparent\">\r\n    <span class=\"toolbar-spacer\"></span>\r\n<span color=\"primary\">   <h2>  {{reportName}} </h2> </span>\r\n<span class=\"toolbar-spacer\"></span>\r\n   </mat-toolbar>     \r\n\r\n   <div  class=\"PageTitl col-md-12 col-sm-12 right\" >\r\n        <div   class=\" col-md-12 col-sm-12 contane\" dir=\"rtl\" >\r\n     \r\n                <div  *ngIf=\"hasDate\" class=\" col-md-4 col-sm-6 right\" > \r\n                        <mat-form-field class=\"headerText\">\r\n                            <input   [value]='startDate' matInput [matDatepicker]=\"picker\" placeholder=\" من تاريخ \" (dateChange)=\"changeDate('from', $event) \" >\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #picker disabled=\"false\" ></mat-datepicker>\r\n                        </mat-form-field>\r\n                    </div>\r\n        <!-- <span class=\"toolbar-spacer\"></span> -->\r\n  \r\n\r\n\r\n        <div  *ngIf=\"hasDate\" class=\" col-md-4 col-sm-6 right\" > \r\n        <mat-form-field class=\"headerText\">\r\n            <input matInput  [value]='endDate'  [matDatepicker]=\"ToDate\" placeholder=\" إلى تاريخ \" (dateChange)=\"changeDate('to', $event)\" >\r\n            <mat-datepicker-toggle matSuffix [for]=\"ToDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker   #ToDate disabled=\"false\"  ></mat-datepicker>\r\n        </mat-form-field>\r\n        </div> \r\n\r\n        <div class=\"reportBar col-md-4 col-sm-12 right\" *ngIf=\"hasSelection\" >\r\n                <mat-form-field class=\"headerText\" >\r\n                <mat-select placeholder=\"اسم الموظف\" [(ngModel)]=\"selectedValue\" name=\"item\" (change)='changeProduct()' >\r\n                    <mat-option *ngFor=\"let item of items\" [value]=\" item.$key \">\r\n                        {{item.name}}\r\n                    </mat-option>        \r\n                </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n      \r\n\r\n\r\n\r\n</div>\r\n</div>\r\n<div   class=\" col-md-12 col-sm-12 \"  >\r\n\r\n<flash-messages></flash-messages>\r\n\r\n</div>\r\n<div class=\"col-md-12 col-sm-12 right\">\r\n<mat-tab-group class=\"tab-group\" (selectedTabChange)='selectChange($event)' >\r\n    <mat-tab label=\"التقرير\" >\r\n      <div class=\"tabContent\">\r\n\r\n          <mat-table #table [dataSource]=\"dataSource\"  matSort>\r\n\r\n              \r\n              \r\n              <ng-container matColumnDef=\"date\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header  > التاريخ </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.date}} </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"time\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> وقت عملية الشراء </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\"> {{row.time}} </mat-cell>\r\n                  </ng-container>\r\n                    <ng-container matColumnDef=\"quantity\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> الكمية المباعة </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let row\"> {{row.quantity}} </mat-cell>\r\n                      </ng-container>\r\n                    <ng-container matColumnDef=\"price\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> مجموع السعر </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let row\"> {{row.price}}  ريال </mat-cell>\r\n                      </ng-container>\r\n                      <ng-container matColumnDef=\"pay\">\r\n                          <mat-header-cell *matHeaderCellDef mat-sort-header>المدفوع </mat-header-cell>\r\n                          <mat-cell *matCellDef=\"let row\"> {{row.pay}} ريال </mat-cell>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"remains\">\r\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> الباقي  </mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let row\"> {{row.remains}} </mat-cell>\r\n                          </ng-container>\r\n                          <ng-container matColumnDef=\"Id\">\r\n                              <mat-header-cell *matHeaderCellDef mat-sort-header> رقم الفاتورة  </mat-header-cell>\r\n                              <mat-cell *matCellDef=\"let row\"> {{row.Id}} </mat-cell>\r\n                            </ng-container>\r\n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n              <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n            </mat-table>\r\n            <mat-paginator dir=\"rtl\" [pageSizeOptions]=\"[5, 10, 15, 100]\" ></mat-paginator>          \r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"الرسم البياني\">\r\n        <div class=\"tabContent\"  *ngIf=\"chart\" >\r\n            <canvas id=\"pie\"  class=\"chart-pie\" style=\" width:fit-content ; height:fit-content;    overflow:hidden;\" ></canvas>\r\n           \r\n           </div>    \r\n    </mat-tab>\r\n</mat-tab-group>\r\n</div>\r\n "

/***/ }),

/***/ "../../../../../src/app/charts/employee-sales/employee-sales.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeSalesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_reports_service__ = __webpack_require__("../../../../../src/app/charts/shared/reports.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_receipt_model__ = __webpack_require__("../../../../../src/app/charts/shared/receipt.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EmployeeSalesComponent = /** @class */ (function () {
    function EmployeeSalesComponent(reportsService, firebase, flashMensaje, route) {
        this.reportsService = reportsService;
        this.firebase = firebase;
        this.flashMensaje = flashMensaje;
        this.route = route;
        this.chart = __WEBPACK_IMPORTED_MODULE_7_chart_js__["Chart"];
        this.hasDate = true;
        this.hasSelection = true;
        this.error = false;
        this.reportName = 'تقرير مبيعات موظف  ';
        this.displayedColumns = ['Id', 'date', 'time', 'quantity', 'price', 'pay', 'remains'];
        //ngOnInit
        this.x = [];
        this.y = [];
        this.startDate = new Date();
        this.endDate = new Date();
        this.items = new Array();
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["J" /* MatTableDataSource */](new Array());
    }
    EmployeeSalesComponent.prototype.ngOnInit = function () {
        var nn = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["v" /* MatPaginatorIntl */]();
        nn.itemsPerPageLabel = "عدد الصفوف في الصفحة ";
        nn.firstPageLabel = "الصفحة الأولى ";
        nn.lastPageLabel = "الصفحة الأخيرة ";
        nn.nextPageLabel = "الصفحة التالية";
        nn.previousPageLabel = "الصفحة السابقة";
        nn.getRangeLabel = function (page, pageSize, length) { if (length == 0 || pageSize == 0) {
            return "0 \u0645\u0646 " + length;
        } length = Math.max(length, 0); var startIndex = page * pageSize; var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize; return startIndex + 1 + " - " + endIndex + " \u0645\u0646 " + length; };
        this.paginator._intl = nn;
        this.startDate.setDate(this.startDate.getDate() - 7);
        this.items = (this.reportsService.getEmployeeList());
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        var emp;
        emp = this.route.snapshot.params.id;
        if (emp != null) {
            this.selectedValue = emp;
            this.changeProduct();
        }
    };
    EmployeeSalesComponent.prototype.selectChange = function (evet) {
        this.changeProduct();
    };
    EmployeeSalesComponent.prototype.changeDate = function (type, event) {
        if (type == 'from')
            this.startDate = event.value;
        if (type == 'to') {
            var x = new Date(event.value);
            this.endDate = new Date(x.getTime());
        }
        this.changeProduct();
    };
    EmployeeSalesComponent.prototype.creatChart = function () {
        if (this.chart.data)
            this.chart.destroy();
        // this.changeProduct()
        this.getValues();
        this.chart = new __WEBPACK_IMPORTED_MODULE_7_chart_js__["Chart"]('pie', {
            type: 'line',
            data: {
                labels: this.y,
                datasets: [{
                        data: this.x,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.4)',
                            'rgba(54, 162, 235, 0.4)',
                            'rgba(255, 206, 86, 0.4)',
                            'rgba(75, 192, 192, 0.4)',
                            'rgba(153, 102, 255, 0.4)',
                            'rgba(255, 159, 64, 0.4)',
                            'rgba(102, 153, 255,0.4)',
                            'rgba(255, 51, 153,0.4)',
                            'rgba(255, 102, 0, 0.4)',
                            'rgba(51, 102, 255,0.4)',
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(102, 153, 255, 1)',
                            'rgba(255, 51, 153, 1)',
                            'rgba(255, 102, 0, 1)',
                            'rgba(51, 102, 255, 1)',
                        ],
                    }]
            },
            options: {
                title: {
                    display: true,
                    text: 'مجموع مبيعات الموظف في الفترة المحددة'
                },
                responsive: true,
                legend: {
                    display: false,
                    position: 'right',
                },
                scales: {
                    xAxes: [{
                            scaleLabel: {
                                labelString: "التاريخ  ",
                                display: true,
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                    yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true
                            },
                            scaleLabel: {
                                labelString: "مجموع المبيعات في اليوم  ",
                                display: true,
                            },
                        }],
                },
                tooltips: {
                    mode: 'point'
                },
            }
        });
    };
    EmployeeSalesComponent.prototype.changeProduct = function () {
        if (this.selectedValue != undefined) {
            if (this.startDate && this.endDate) {
                if (this.startDate <= this.endDate) {
                    this.getEmployeeSales();
                }
                else {
                    this.flashMensaje.show('يجب ان لا يسبق تاريخ النهاية تاريخ البداية.', { cssClass: 'alert-danger', timeout: 100000,
                        closeOnClick: true, showCloseBtn: true });
                }
            }
            else {
                this.flashMensaje.show('يرجى إدخال الفترة الزمنية أولا.', { cssClass: 'alert-danger', timeout: 100000,
                    closeOnClick: true, showCloseBtn: true });
            }
        }
        else {
            this.flashMensaje.show('يرجى إختيار موظف', { cssClass: 'alert-danger', timeout: 100000,
                closeOnClick: true, showCloseBtn: true });
        }
    };
    EmployeeSalesComponent.prototype.getEmployeeSales = function () {
        var _this = this;
        this.error = true;
        this.dataSource.data = [];
        var emplSales = [];
        var total = new Array();
        this.firebase.list(window.name + '/receipts', function (query) {
            var m;
            m = query.orderByChild('employeeID').equalTo(_this.selectedValue);
            return m;
        }).snapshotChanges().subscribe(function (list) {
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                var temp = list_1[_i];
                var receipt = void 0;
                receipt = temp.payload.toJSON();
                if (receipt.employeeID != _this.selectedValue)
                    continue;
                var date = receipt.date.split('-');
                //date[0] year , date[1] month , date[2] day
                var dd = new Date(date[0], date[1], date[2]);
                var strDate = new Date(_this.startDate.getFullYear(), _this.startDate.getUTCMonth() + 1, _this.startDate.getDate());
                var endDate = new Date(_this.endDate.getFullYear(), _this.endDate.getUTCMonth() + 1, _this.endDate.getDate());
                if (dd < strDate || dd > endDate)
                    continue;
                var q = 0;
                for (var prods in receipt.products) {
                    q += receipt.products[prods].quantity;
                }
                var info = new __WEBPACK_IMPORTED_MODULE_2__shared_receipt_model__["e" /* empsales */]();
                info.date = receipt.date;
                info.pay = receipt.ReceivedAmount;
                info.price = receipt.totalPrice;
                info.quantity = q;
                info.remains = receipt.RemainingAmount;
                info.time = receipt.time;
                info.Id = receipt.id;
                _this.dataSource.data.push(info);
                _this.error = false;
                _this.dataSource._updateChangeSubscription();
            }
            if (_this.error)
                _this.flashMensaje.show('لا يوجد للموظف مبيعات في الفترة المحددة.', { cssClass: 'alert-danger', timeout: 5000 });
            _this.creatChart();
        });
    };
    EmployeeSalesComponent.prototype.getValues = function () {
        var _this = this;
        this.x = [];
        this.y = [];
        var label = this.dataSource.data.map(function (p) { return p.date; });
        var values = this.dataSource.data.map(function (p) { return p.price; });
        label.forEach(function (i) {
            var sum = 0;
            for (var n in label) {
                if (label[n].localeCompare(i) == 0) {
                    sum = sum + values[n];
                    values[n] = 0;
                    label[n] = '';
                }
            }
            if (i != '') {
                _this.x.push(sum);
                _this.y.push(i);
                i = '';
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("pie", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], EmployeeSalesComponent.prototype, "pie", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["G" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_material__["G" /* MatSort */])
    ], EmployeeSalesComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["u" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_material__["u" /* MatPaginator */])
    ], EmployeeSalesComponent.prototype, "paginator", void 0);
    EmployeeSalesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employee-sales',
            template: __webpack_require__("../../../../../src/app/charts/employee-sales/employee-sales.component.html"),
            styles: [__webpack_require__("../../../../../src/app/charts/sales-report/sales-report.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_reports_service__["a" /* ReportsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_reports_service__["a" /* ReportsService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */]])
    ], EmployeeSalesComponent);
    return EmployeeSalesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/charts/finance-report/finance-report.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<mat-toolbar  class=\"PageTitle\" style=\"background-color:transparent\">\r\n    <span class=\"toolbar-spacer\"></span>\r\n<span color=\"primary\">   <h2>  {{reportName}} </h2> </span>\r\n<span class=\"toolbar-spacer\"></span>\r\n   </mat-toolbar>  \r\n\r\n   <div  class=\"PageTitl col-md-12 col-sm-12 right\">\r\n        <div   class=\" col-md-12 col-sm-12 contane\"  dir=\"rtl\"  >\r\n     \r\n                <div  *ngIf=\"hasDate\" class=\" col-md-4 col-sm-6 right\" > \r\n                        <mat-form-field class=\"headerText\">\r\n                            <input   [value]='startDate' matInput [matDatepicker]=\"picker\" placeholder=\" من تاريخ \" (dateChange)=\"changeDate('from', $event) \" >\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #picker disabled=\"false\" ></mat-datepicker>\r\n                        </mat-form-field>\r\n                    </div>\r\n        <!-- <span class=\"toolbar-spacer\"></span> -->\r\n  \r\n\r\n\r\n        <div  *ngIf=\"hasDate\" class=\" col-md-4 col-sm-6 right\" > \r\n        <mat-form-field class=\"headerText\">\r\n            <input matInput  [value]='endDate'  [matDatepicker]=\"ToDate\" placeholder=\" إلى تاريخ \" (dateChange)=\"changeDate('to', $event)\" >\r\n            <mat-datepicker-toggle matSuffix [for]=\"ToDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker   #ToDate disabled=\"false\"  ></mat-datepicker>\r\n        </mat-form-field>\r\n        </div> \r\n\r\n        <div class=\"reportBar col-md-4 col-sm-12 right\" *ngIf=\"hasSelection\" >\r\n                <mat-form-field class=\"headerText\" >\r\n                <mat-select placeholder=\"اسم الموظف\" [(ngModel)]=\"selectedValue\" name=\"item\" (change)='changeProduct()' >\r\n                    <mat-option *ngFor=\"let item of items\" [value]=\" item.$key \">\r\n                        {{item.name}}\r\n                    </mat-option>        \r\n                </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n      \r\n\r\n\r\n\r\n</div>\r\n</div>\r\n<div   class=\" col-md-12 col-sm-12 \"  >\r\n\r\n<flash-messages></flash-messages>\r\n\r\n</div>\r\n<div class=\"col-md-12 col-sm-12 right\">\r\n<mat-tab-group class=\"tab-group\" (selectedTabChange)='selectChange($event)' >\r\n    <mat-tab label=\"التقرير\" >\r\n    <div class=\"tabContent\">\r\n           \r\n             <mat-table #table  class=\"reportTable\" [dataSource]=\"dataSourceIncome\" matSort>\r\n     <!--   columnsIncome=['box','bank','Debtors','fixedAssets','capital','loans','creditors']; -->   \r\n                         <!-- <ng-container matColumnDef=\"fixedAssets\">\r\n                             <mat-header-cell *matHeaderCellDef mat-sort-header> الأصول الثابتة</mat-header-cell>\r\n                             <mat-cell *matCellDef=\"let row\"> {{row.fixedAssets }} </mat-cell>\r\n                         </ng-container> -->\r\n                         <ng-container matColumnDef=\"box\" >\r\n                                 <mat-header-cell *matHeaderCellDef mat-sort-header  class='assets' > الصندوق </mat-header-cell>\r\n                                 <mat-cell *matCellDef=\"let row\">     \r\n                                     {{row.box | number:'.0-3' }}  \r\n                                 </mat-cell>\r\n                                 </ng-container>\r\n                                 <ng-container matColumnDef=\"bank\" >\r\n                                     <mat-header-cell *matHeaderCellDef mat-sort-header  class='assets' > البنك </mat-header-cell>\r\n                                     <mat-cell *matCellDef=\"let row\"> {{row.bank | number:'.0-3'}} </mat-cell>\r\n                                 </ng-container>\r\n                                     <ng-container matColumnDef=\"Debtors\"  >\r\n                                         <mat-header-cell *matHeaderCellDef mat-sort-header  class='assets'> مدينون </mat-header-cell>\r\n                                         <mat-cell *matCellDef=\"let row\"> {{row.Debtors | number:'.0-3' }} </mat-cell>\r\n                                  </ng-container>\r\n     \r\n     \r\n                                  <ng-container matColumnDef=\"capital\" >\r\n                                        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"liabilities\"> رأس المال </mat-header-cell>\r\n                                        <mat-cell *matCellDef=\"let row\"> {{row.capital | number:'.0-3' }} </mat-cell>\r\n                                </ng-container>\r\n                                    \r\n                                <ng-container matColumnDef=\"loans\">\r\n                                            <mat-header-cell *matHeaderCellDef mat-sort-header class=\"liabilities\">القروض  </mat-header-cell>\r\n                                            <mat-cell *matCellDef=\"let row\"> {{row.loans | number:'.0-3' }} </mat-cell>\r\n                                </ng-container>\r\n                                <ng-container matColumnDef=\"creditors\">\r\n                                            <mat-header-cell *matHeaderCellDef mat-sort-header class=\"liabilities\">الدائنين   </mat-header-cell>\r\n                                            <mat-cell *matCellDef=\"let row\"> {{row.creditors | number:'.0-3' }} </mat-cell>\r\n                                </ng-container>\r\n            \r\n                                        \r\n                                <ng-container matColumnDef=\"fixedAssets\"  >\r\n                                        <mat-header-cell *matHeaderCellDef mat-sort-header class='assets'>الاصول الثابته   </mat-header-cell>\r\n                                        <mat-cell *matCellDef=\"let row\"> {{row.fixedAssets | number:'.0-3' }} </mat-cell>\r\n                            </ng-container>\r\n                 <ng-container *matHeaderRowDef=\"allcolumns\">\r\n                        <div class=\"mat-header-row header-group-row\">\r\n                          <div class=\"mat-header-cell  Theader assets \" role=\"columnheader\" >الأصول </div>\r\n                          <div class=\"mat-header-cell Theader liabilities \" role=\"columnheader\">الخصوم</div>\r\n                        </div>\r\n\r\n                        <mat-header-row></mat-header-row>\r\n                      </ng-container>\r\n\r\n                 <!-- <mat-header-cell matHeaderCellDef='fixed'>أصول ثابتة  </mat-header-cell>\r\n                 <mat-header-cell matHeaderCellDef='dynamic'>أصول متداولة  </mat-header-cell> -->\r\n         \r\n                 <mat-row *matRowDef=\"let row; columns: allcolumns;\"></mat-row>\r\n                 </mat-table>\r\n\r\n    </div>\r\n    </mat-tab>\r\n\r\n</mat-tab-group>\r\n</div>\r\n<!-- (matSortChange)=\"sortData($event)\" -->\r\n\r\n\r\n<!-- <mat-toolbar  class=\"PageTitle\" dir=\"rtl\" >\r\n    <mat-toolbar-row>\r\n\r\n\r\n          <span class=\"toolbar-spacer\"></span>\r\n\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<div class=\"col-md-4 col-sm-12\"></div>\r\n<div class=\"col-md-4 col-sm-12\">\r\n<flash-messages></flash-messages>\r\n</div>\r\n\r\n<div class=\"col-md-12 col-sm-12\">\r\n<button (click)=\"test()\">click</button>\r\n</div> -->\r\n<!-- (matSortChange)=\"sortData($event)\" -->\r\n "

/***/ }),

/***/ "../../../../../src/app/charts/finance-report/finance-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__finance_finance_model__ = __webpack_require__("../../../../../src/app/finance/finance.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_receipt_model__ = __webpack_require__("../../../../../src/app/charts/shared/receipt.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FinanceReportComponent = /** @class */ (function () {
    function FinanceReportComponent(firebase, flashMensaje) {
        this.firebase = firebase;
        this.flashMensaje = flashMensaje;
        this.reportName = 'تقرير قائمة الدخل';
        this.finance = new __WEBPACK_IMPORTED_MODULE_2__finance_finance_model__["a" /* Finance */];
        this.checkStartD_EndD = true;
        //date
        this.hasDate = true;
        this.startDate = new Date();
        this.endDate = new Date();
        //table
        this.allcolumns = ['box', 'bank', 'Debtors', 'fixedAssets', 'capital', 'loans', 'creditors'];
        this.dataSourceIncome = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["J" /* MatTableDataSource */](new Array());
    }
    FinanceReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startDate.setMonth(this.startDate.getMonth() - 1);
        this.firebase.object(window.name + '/manager/xFinance').snapshotChanges().subscribe(function (ob) {
            var x = ob.payload.toJSON();
            x["$key"] = ob.key;
            _this.finance = x;
        });
        this.receiptList = [];
        //this.products = [];
        this.firebase.list(window.name + '/receipts').snapshotChanges().subscribe(function (item) {
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                _this.firebase.list(window.name + '/receipts/' + element.key + '/products').snapshotChanges().subscribe(function (item) {
                    item.forEach(function (element) {
                        var i = element.payload.toJSON();
                        i["$key"] = element.key;
                        y["products"].push(i);
                    });
                });
                var mydate = new Date(y.date);
                y["date"] = mydate;
                _this.receiptList.push(y);
            });
            _this.incom();
        });
    };
    FinanceReportComponent.prototype.selectChange = function (evet) {
        if (evet.index == 0)
            this.incom();
    };
    //date
    FinanceReportComponent.prototype.changeDate = function (type, event) {
        if (type == 'from')
            this.startDate = event.value;
        if (type == 'to') {
            var x = new Date(event.value);
            this.endDate = new Date(x.getTime() + (1000 * 60 * 60 * 24));
        }
        this.incom();
    };
    FinanceReportComponent.prototype.incom = function () {
        var _this = this;
        var employeeID;
        var price = 0;
        var totalShiftTime = 0;
        var expens = 0;
        this.dataSourceIncome.data;
        var shift = new Array();
        var cost = 0;
        employeeID = [];
        shift = [];
        if (this.receiptList.length != 0) {
            if (this.startDate && this.endDate) {
                if (this.startDate <= this.endDate) {
                    for (var element in this.receiptList) {
                        var requireDate = this.receiptList[element].date;
                        if ((requireDate >= this.startDate) && (requireDate <= this.endDate)) {
                            price += this.receiptList[element].totalPrice;
                            employeeID.push(this.receiptList[element].employeeID);
                            for (var element2 in this.receiptList[element].products)
                                cost += (this.receiptList[element].products[element2].cost * this.receiptList[element].products[element2].quantity);
                        }
                    }
                    var netIncome_1 = new __WEBPACK_IMPORTED_MODULE_3__shared_receipt_model__["c" /* NetIncome */]();
                    netIncome_1.totalIncome = price - cost;
                    shift = [];
                    for (var _i = 0, employeeID_1 = employeeID; _i < employeeID_1.length; _i++) {
                        var emp = employeeID_1[_i];
                        this.firebase.list(window.name + '/employees/' + emp + '/workingTime').snapshotChanges().subscribe(function (list) {
                            totalShiftTime *= 0;
                            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                                var temp = list_1[_i];
                                var year = parseInt(temp.key, 10);
                                var mon = temp.payload.toJSON();
                                for (var i in mon) {
                                    var month = parseInt(i, 10);
                                    var day = mon[i];
                                    for (var n in day) {
                                        var ymd = new Date(year, month - 1, parseInt(n, 10));
                                        if (ymd >= _this.startDate && ymd <= _this.endDate) {
                                            var shifts = day[n];
                                            for (var s in shifts) {
                                                var p = shifts[s].totalShiftTime.split(':');
                                                var h = parseInt(p[0]) * 60;
                                                var m = parseInt(p[1]);
                                                totalShiftTime += (h + m);
                                            }
                                        }
                                    }
                                }
                            }
                            //i'm not sure if i can remove it
                            shift.push(totalShiftTime);
                        });
                        this.firebase.list(window.name + '/employees/' + emp).snapshotChanges().subscribe(function (res) {
                            var x = res[7].payload.toJSON();
                            var y = totalShiftTime; //if there a crash replace it withe shift[0]
                            netIncome_1.employeeSal = (parseInt(x.toString()) / 60) * y;
                        });
                    } //end for emp
                    if (this.startDate.getMonth() != this.endDate.getMonth())
                        this.checkStartD_EndD = false;
                    else
                        this.checkStartD_EndD = true;
                    this.dataSourceIncome.data = [];
                    this.firebase.list(window.name + '/manager/xExpenses').snapshotChanges().subscribe(function (res) {
                        for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                            var temp = res_1[_i];
                            var key = temp.key;
                            var exp = temp.payload.toJSON();
                            var array = key.split('-');
                            var year = parseInt(array[1]);
                            var month = parseInt(array[0]);
                            var sdate = new Date(year, month - 1, 1);
                            var x = new Date(sdate);
                            var edate = new Date(x.setMonth(x.getMonth() + 1));
                            edate = new Date(edate.setDate(edate.getDate() - 1));
                            for (var r in exp) {
                                //check if it was in the selected period
                                if (((sdate.getMonth() + 1) >= (_this.startDate.getMonth() + 1)) && ((sdate.getMonth() + 1) <= (_this.endDate.getMonth() + 1))) {
                                    //if it was in the same month  
                                    if (_this.checkStartD_EndD && ((sdate.getMonth() + 1) == (_this.startDate.getMonth() + 1))) {
                                        var x_1 = _this.endDate.getDate() - _this.startDate.getDate();
                                        expens += (x_1 * exp[r]);
                                        //  console.log('end: '+ (sdate.getMonth()+1))
                                    }
                                    //if the start date in this month
                                    if ((!(_this.checkStartD_EndD)) && ((_this.startDate.getMonth() + 1) == (sdate.getMonth() + 1))) {
                                        var x_2 = edate.getDate() - _this.startDate.getDate();
                                        expens += (x_2 * exp[r]);
                                        // console.log('month: '+(this.startDate.getMonth()+1)+' defrencese:'+x+' number:'+exp[r]+' sum:'+expens)
                                    }
                                    //if the end datein this month
                                    if ((!(_this.checkStartD_EndD)) && ((_this.endDate.getMonth() + 1) == (sdate.getMonth() + 1))) {
                                        var x_3 = _this.endDate.getDate();
                                        expens += (x_3 * exp[r]);
                                        //  console.log('month: '+(edate.getMonth()+1)+' defrencese:'+x+' number:'+exp[r]+' sum:'+expens)
                                    }
                                    //if the hole month is covered
                                    if ((!(_this.checkStartD_EndD)) && ((_this.endDate.getMonth() + 1) != (sdate.getMonth() + 1)) && ((_this.startDate.getMonth() + 1) != (sdate.getMonth() + 1))) {
                                        var x_4 = edate.getDate();
                                        expens += (x_4 * exp[r]);
                                        // console.log('month: '+(edate.getMonth()+1)+' defrencese:'+x+' number:'+exp[r]+' sum:'+expens)
                                    }
                                }
                            }
                        }
                        netIncome_1.expences = parseInt(Math.round(expens).toFixed(2));
                        netIncome_1.netIncome = netIncome_1.totalIncome - netIncome_1.employeeSal - netIncome_1.expences;
                        if (netIncome_1.netIncome > 0) {
                            netIncome_1.result = 'ربح';
                            _this.finance.capital += netIncome_1.netIncome;
                        }
                        if (netIncome_1.netIncome < 0) {
                            netIncome_1.result = 'خسارة';
                            _this.finance.capital = netIncome_1.netIncome - _this.finance.capital;
                        }
                        if (netIncome_1.netIncome == 0)
                            netIncome_1.result = 'تعادل';
                        _this.dataSourceIncome.data.push(_this.finance);
                        _this.dataSourceIncome._updateChangeSubscription();
                    });
                }
                else {
                    this.flashMensaje.show('يجب ان لا يسبق تاريخ  النهاية تاريخ البداية.', { cssClass: 'alert-danger', timeout: 100000,
                        closeOnClick: true, showCloseBtn: true });
                }
            }
            else {
                this.flashMensaje.show('يرجى إدخال الفترة الزمنية أولا.', { cssClass: 'alert-danger', timeout: 100000,
                    closeOnClick: true, showCloseBtn: true });
            }
        }
        else {
            this.flashMensaje.show('لا تملك عمليات بيع حاليا.', { cssClass: 'alert-danger', timeout: 100000,
                closeOnClick: true, showCloseBtn: true });
        }
    };
    FinanceReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-finance-report',
            template: __webpack_require__("../../../../../src/app/charts/finance-report/finance-report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/charts/sales-report/sales-report.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], FinanceReportComponent);
    return FinanceReportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/charts/income-statment-repor/income-statment-repor.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\" col-md-12 col-sm-12\">\r\n<mat-toolbar  class=\"PageTitle\" style=\"background-color:transparent\">\r\n    <span class=\"toolbar-spacer\"></span>\r\n<span color=\"primary\">   <h2>  {{reportName}} </h2> </span>\r\n<span class=\"toolbar-spacer\"></span>\r\n   </mat-toolbar>  \r\n</div>\r\n   <div  class=\"PageTitl col-md-12 col-sm-12 right\">\r\n   <div   class=\" col-md-12 col-sm-12 contane\" >\r\n\r\n       \r\n        <!-- <span class=\"toolbar-spacer\"></span> -->\r\n        <div class=\"reportBar col-md-4 col-sm-12 \" *ngIf=\"hasSelection\" >\r\n            <mat-form-field class=\"headerText\" >\r\n            <mat-select placeholder=\"اسم الموظف\" [(ngModel)]=\"selectedValue\" name=\"item\" (change)='changeProduct()' >\r\n                <mat-option *ngFor=\"let item of items\" [value]=\" item.$key \">\r\n                    {{item.name}}\r\n                </mat-option>        \r\n            </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n\r\n   \r\n\r\n\r\n        <div  *ngIf=\"hasDate\" class=\" col-md-4 col-sm-12 right \" > \r\n            <mat-form-field class=\"headerText\">\r\n                <input   [value]='startDate' matInput [matDatepicker]=\"picker\" placeholder=\" من تاريخ \" (dateChange)=\"changeDate('from', $event) \" >\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #picker disabled=\"false\" ></mat-datepicker>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div  *ngIf=\"hasDate\" class=\" col-md-4 col-sm-12 right  \" > \r\n            <mat-form-field class=\"headerText\">\r\n                <input matInput  [value]='endDate'  [matDatepicker]=\"ToDate\" placeholder=\" إلى تاريخ \" (dateChange)=\"changeDate('to', $event)\" >\r\n                <mat-datepicker-toggle matSuffix [for]=\"ToDate\"></mat-datepicker-toggle>\r\n                <mat-datepicker   #ToDate disabled=\"false\"  ></mat-datepicker>\r\n            </mat-form-field>\r\n        </div> \r\n\r\n</div>\r\n</div>\r\n\r\n<div class=\"col-md-4 col-sm-12 \"></div>\r\n\r\n<div class=\"col-md-12 col-sm-12 right \">\r\n<flash-messages></flash-messages>\r\n</div>\r\n\r\n<div class=\"col-md-12 col-sm-12 right\">\r\n<mat-tab-group class=\"tab-group\" (selectedTabChange)='selectChange($event)' >\r\n    <mat-tab label=\"التقرير\" >\r\n      <div class=\"tabContent\">\r\n\r\n          <mat-table #table [dataSource]=\"dataSourceIncome\"  matSort>\r\n\r\n              <ng-container matColumnDef=\"revenue\" >\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header > الاملاك </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.revenue }} </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"price\"  >\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header > الإيرادات </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\"> {{row.price | number:'.0-3' }} </mat-cell>\r\n                  </ng-container>\r\n                  <ng-container matColumnDef=\"cost\" >\r\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> المصاريف </mat-header-cell>\r\n                      <mat-cell *matCellDef=\"let row\"> {{row.cost | number:'.0-3' }} </mat-cell>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"totalIncome\"  >\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> إجمالي الربح </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let row\"> {{row.totalIncome | number:'.0-3' }} </mat-cell>\r\n                      </ng-container>\r\n                   \r\n              <mat-header-row *matHeaderRowDef=\"columnsIncome\"></mat-header-row>\r\n              <mat-row *matRowDef=\"let row; columns: columnsIncome;\"></mat-row>\r\n            </mat-table>\r\n          <!--  <mat-paginator dir=\"rtl\" [pageSizeOptions]=\"[5, 10, 15, 100]\" ></mat-paginator>-->\r\n<br>\r\n          <mat-table #table [dataSource]=\"dataSourceNetIncome\"  matSort>\r\n\r\n            <ng-container matColumnDef=\"totalIncome\" >\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header  > إجمالي الربح </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\"> {{row.totalIncome | number:'.0-3' }} </mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"employeeSal\"  >\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header > رواتب الموظفين </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.employeeSal | number:'.0-3' }} </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"expences\" >\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> مصاريف أخرى </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\"> {{row.expences | number:'.0-3' }} </mat-cell>\r\n                  </ng-container>\r\n                  <ng-container matColumnDef=\"netIncome\"  >\r\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> صافي الربح </mat-header-cell>\r\n                      <mat-cell *matCellDef=\"let row\"> {{row.netIncome | number:'.0-3' }} </mat-cell>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"result\"  >\r\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> النتيجة </mat-header-cell>\r\n                      <mat-cell *matCellDef=\"let row\"> {{row.result }} </mat-cell>\r\n                    </ng-container>\r\n            <mat-header-row *matHeaderRowDef=\"columnsNetIncome\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: columnsNetIncome;\"></mat-row>\r\n          </mat-table>\r\n          \r\n      </div>\r\n    </mat-tab>\r\n   \r\n</mat-tab-group>\r\n</div>\r\n<!-- (matSortChange)=\"sortData($event)\" -->\r\n "

/***/ }),

/***/ "../../../../../src/app/charts/income-statment-repor/income-statment-repor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncomeStatmentReporComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_reports_service__ = __webpack_require__("../../../../../src/app/charts/shared/reports.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_receipt_model__ = __webpack_require__("../../../../../src/app/charts/shared/receipt.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var IncomeStatmentReporComponent = /** @class */ (function () {
    function IncomeStatmentReporComponent(reportsService, firebase, flashMensaje) {
        this.reportsService = reportsService;
        this.firebase = firebase;
        this.flashMensaje = flashMensaje;
        //chart
        this.chart = __WEBPACK_IMPORTED_MODULE_6_chart_js__["Chart"];
        //date
        this.hasDate = true;
        this.startDate = new Date();
        this.endDate = new Date();
        //report
        this.reportName = 'تقرير الإرادات والمصاريف';
        //table
        this.columnsIncome = ['revenue', 'price', 'cost', 'totalIncome'];
        this.dataSourceIncome = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["J" /* MatTableDataSource */](new Array());
        this.columnsNetIncome = ['totalIncome', 'employeeSal', 'expences', 'netIncome', 'result'];
        this.dataSourceNetIncome = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["J" /* MatTableDataSource */](new Array());
        this.checkStartD_EndD = true;
    }
    IncomeStatmentReporComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startDate.setMonth(this.startDate.getMonth() - 1);
        var x = this.reportsService.getData();
        //table
        this.dataSourceIncome.paginator = this.paginator;
        this.dataSourceIncome.sort = this.sort;
        this.dataSourceNetIncome.paginator = this.paginator;
        this.dataSourceNetIncome.sort = this.sort;
        //end
        this.receiptList = [];
        //this.products = [];
        x.snapshotChanges().subscribe(function (item) {
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                _this.firebase.list(window.name + '/receipts/' + element.key + '/products').snapshotChanges().subscribe(function (item) {
                    item.forEach(function (element) {
                        var i = element.payload.toJSON();
                        i["$key"] = element.key;
                        y["products"].push(i);
                    });
                });
                var mydate = new Date(y.date);
                y["date"] = mydate;
                _this.receiptList.push(y);
            });
            _this.incom();
        });
    };
    //report or chart selections
    IncomeStatmentReporComponent.prototype.selectChange = function (evet) {
        if (evet.index == 0)
            this.incom();
    };
    //date
    IncomeStatmentReporComponent.prototype.changeDate = function (type, event) {
        if (type == 'from')
            this.startDate = event.value;
        if (type == 'to') {
            var x = new Date(event.value);
            this.endDate = new Date(x.getTime() + (1000 * 60 * 60 * 24));
        }
        this.incom();
    };
    IncomeStatmentReporComponent.prototype.incom = function () {
        var _this = this;
        this.dataSourceIncome.data = [];
        this.dataSourceNetIncome.data = [];
        // this.products = [];
        this.employeeID = [];
        this.price = 0;
        this.totalShiftTime = 0;
        this.expens = 0;
        var shift = new Array();
        var cost = 0;
        if (this.receiptList.length != 0) {
            if (this.startDate && this.endDate) {
                if (this.startDate <= this.endDate) {
                    //table
                    this.dataSourceIncome.data = [];
                    //end
                    for (var element in this.receiptList) {
                        var requireDate = this.receiptList[element].date;
                        if ((requireDate >= this.startDate) && (requireDate <= this.endDate)) {
                            this.price += this.receiptList[element].totalPrice;
                            this.employeeID.push(this.receiptList[element].employeeID);
                            for (var element2 in this.receiptList[element].products) {
                                cost += (this.receiptList[element].products[element2].cost * this.receiptList[element].products[element2].quantity);
                            }
                        }
                    }
                    var income = { revenue: 'جميع المنتجات', price: this.price, cost: cost,
                        totalIncome: this.price - cost };
                    var netIncome_1 = new __WEBPACK_IMPORTED_MODULE_2__shared_receipt_model__["c" /* NetIncome */]();
                    netIncome_1.totalIncome = this.price - cost;
                    this.dataSourceIncome.data.push(income);
                    this.dataSourceIncome._updateChangeSubscription();
                    this.dataSourceNetIncome.data = [];
                    shift = [];
                    for (var _i = 0, _a = this.employeeID; _i < _a.length; _i++) {
                        var emp = _a[_i];
                        this.firebase.list(window.name + '/employees/' + emp + '/workingTime').snapshotChanges().subscribe(function (list) {
                            _this.totalShiftTime *= 0;
                            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                                var temp = list_1[_i];
                                var year = parseInt(temp.key, 10);
                                var mon = temp.payload.toJSON();
                                for (var i in mon) {
                                    var month = parseInt(i, 10);
                                    var day = mon[i];
                                    for (var n in day) {
                                        // console.log(n)
                                        var ymd = new Date(year, month - 1, parseInt(n, 10));
                                        // console.log(ymd <= this.startDate)
                                        if (ymd >= _this.startDate && ymd <= _this.endDate) {
                                            var shifts = day[n];
                                            for (var s in shifts) {
                                                var p = shifts[s].totalShiftTime.split(':');
                                                var h = parseInt(p[0]) * 60;
                                                var m = parseInt(p[1]);
                                                _this.totalShiftTime += (h + m);
                                            }
                                        }
                                    }
                                }
                            }
                            //i'm not sure if i can remove it
                            shift.push(_this.totalShiftTime);
                        });
                        this.firebase.object(window.name + '/employees/' + emp).snapshotChanges().subscribe(function (res) {
                            var x = res.payload.toJSON();
                            x["$key"] = res.key;
                            _this.employee = x;
                            var y = _this.totalShiftTime; //if there a crash replace it withe shift[0]
                            netIncome_1.employeeSal = (parseInt(_this.employee.salary.toString()) / 60) * y;
                        });
                    } //end for emp
                    if (this.startDate.getMonth() != this.endDate.getMonth())
                        this.checkStartD_EndD = false;
                    else
                        this.checkStartD_EndD = true;
                    this.firebase.list(window.name + '/manager/xExpenses').snapshotChanges().subscribe(function (res) {
                        for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                            var temp = res_1[_i];
                            var key = temp.key;
                            var exp = temp.payload.toJSON();
                            var array = key.split('-');
                            var year = parseInt(array[1]);
                            var month = parseInt(array[0]);
                            var sdate = new Date(year, month - 1, 1);
                            var x = new Date(sdate);
                            var edate = new Date(x.setMonth(x.getMonth() + 1));
                            edate = new Date(edate.setDate(edate.getDate() - 1));
                            for (var r in exp) {
                                //check if it was in the selected period
                                if (((sdate.getMonth() + 1) >= (_this.startDate.getMonth() + 1)) && ((sdate.getMonth() + 1) <= (_this.endDate.getMonth() + 1))) {
                                    //if it was in the same month  
                                    if (_this.checkStartD_EndD && ((sdate.getMonth() + 1) == (_this.startDate.getMonth() + 1))) {
                                        var x_1 = _this.endDate.getDate() - _this.startDate.getDate();
                                        _this.expens += (x_1 * exp[r]);
                                        //  console.log('end: '+ (sdate.getMonth()+1))
                                    }
                                    //if the start date in this month
                                    if ((!(_this.checkStartD_EndD)) && ((_this.startDate.getMonth() + 1) == (sdate.getMonth() + 1))) {
                                        var x_2 = edate.getDate() - _this.startDate.getDate();
                                        _this.expens += (x_2 * exp[r]);
                                        // console.log('month: '+(this.startDate.getMonth()+1)+' defrencese:'+x+' number:'+exp[r]+' sum:'+this.expens)
                                    }
                                    //if the end datein this month
                                    if ((!(_this.checkStartD_EndD)) && ((_this.endDate.getMonth() + 1) == (sdate.getMonth() + 1))) {
                                        var x_3 = _this.endDate.getDate();
                                        _this.expens += (x_3 * exp[r]);
                                        //  console.log('month: '+(edate.getMonth()+1)+' defrencese:'+x+' number:'+exp[r]+' sum:'+this.expens)
                                    }
                                    //if the hole month is covered
                                    if ((!(_this.checkStartD_EndD)) && ((_this.endDate.getMonth() + 1) != (sdate.getMonth() + 1)) && ((_this.startDate.getMonth() + 1) != (sdate.getMonth() + 1))) {
                                        var x_4 = edate.getDate();
                                        _this.expens += (x_4 * exp[r]);
                                        // console.log('month: '+(edate.getMonth()+1)+' defrencese:'+x+' number:'+exp[r]+' sum:'+this.expens)
                                    }
                                }
                            }
                        }
                        netIncome_1.expences = parseInt(Math.round(_this.expens).toFixed(2));
                        netIncome_1.netIncome = netIncome_1.totalIncome - netIncome_1.employeeSal - netIncome_1.expences;
                        //netIncome.netIncome = parseInt(netIncome.netIncome.toPrecision(2));
                        if (netIncome_1.netIncome > 0)
                            netIncome_1.result = 'ربح';
                        if (netIncome_1.netIncome < 0)
                            netIncome_1.result = 'خسارة';
                        if (netIncome_1.netIncome == 0)
                            netIncome_1.result = 'تعادل';
                        _this.dataSourceNetIncome.data.push(netIncome_1);
                        _this.dataSourceNetIncome._updateChangeSubscription();
                    });
                }
                else {
                    this.flashMensaje.show('يجب ان لا يسبق تاريخ  النهاية تاريخ البداية.', { cssClass: 'alert-danger', timeout: 100000,
                        closeOnClick: true, showCloseBtn: true });
                }
            }
            else {
                this.flashMensaje.show('يرجى إدخال الفترة الزمنية أولا.', { cssClass: 'alert-danger', timeout: 100000,
                    closeOnClick: true, showCloseBtn: true });
            }
        }
        else {
            this.flashMensaje.show('لا تملك عمليات بيع حاليا.', { cssClass: 'alert-danger', timeout: 100000,
                closeOnClick: true, showCloseBtn: true });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["G" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_material__["G" /* MatSort */])
    ], IncomeStatmentReporComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["u" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_material__["u" /* MatPaginator */])
    ], IncomeStatmentReporComponent.prototype, "paginator", void 0);
    IncomeStatmentReporComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-income-statment-repor',
            template: __webpack_require__("../../../../../src/app/charts/income-statment-repor/income-statment-repor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/charts/sales-report/sales-report.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_reports_service__["a" /* ReportsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_reports_service__["a" /* ReportsService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], IncomeStatmentReporComponent);
    return IncomeStatmentReporComponent;
}());



/***/ }),

/***/ "../../../../../src/app/charts/product-report/product-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_reports_service__ = __webpack_require__("../../../../../src/app/charts/shared/reports.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_receipt_model__ = __webpack_require__("../../../../../src/app/charts/shared/receipt.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductReportComponent = /** @class */ (function () {
    function ProductReportComponent(reportsService, firebase, flashMensaje, route) {
        this.reportsService = reportsService;
        this.firebase = firebase;
        this.flashMensaje = flashMensaje;
        this.route = route;
        this.chart = __WEBPACK_IMPORTED_MODULE_7_chart_js__["Chart"];
        this.hasDate = true;
        this.hasSelection = true;
        this.x = [];
        this.y = [];
        this.error = false;
        this.reportName = 'تقرير مبيعات منتج  ';
        this.displayedColumns = ['date', 'time', 'cost', 'quantity', 'price', 'employeename'];
        //ngOnInit
        this.startDate = new Date();
        this.endDate = new Date();
        this.items = new Array();
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["J" /* MatTableDataSource */](new Array());
    }
    ProductReportComponent.prototype.ngOnInit = function () {
        var nn = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["v" /* MatPaginatorIntl */]();
        nn.itemsPerPageLabel = "عدد الصفوف في الصفحة ";
        nn.firstPageLabel = "الصفحة الأولى ";
        nn.lastPageLabel = "الصفحة الأخيرة ";
        nn.nextPageLabel = "الصفحة التالية";
        nn.previousPageLabel = "الصفحة السابقة";
        nn.getRangeLabel = function (page, pageSize, length) { if (length == 0 || pageSize == 0) {
            return "0 \u0645\u0646 " + length;
        } length = Math.max(length, 0); var startIndex = page * pageSize; var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize; return startIndex + 1 + " - " + endIndex + " \u0645\u0646 " + length; };
        this.paginator._intl = nn;
        this.startDate.setDate(this.startDate.getDate() - 7);
        this.items = (this.reportsService.getProductList());
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        var emp;
        emp = this.route.snapshot.params.id;
        if (emp != null) {
            this.selectedValue = emp;
            this.changeProduct();
        }
    };
    ProductReportComponent.prototype.selectChange = function (evet) {
        this.changeProduct();
    };
    ProductReportComponent.prototype.changeDate = function (type, event) {
        if (type == 'from')
            this.startDate = event.value;
        if (type == 'to') {
            var x = new Date(event.value);
            this.endDate = new Date(x.getTime());
        }
        this.changeProduct();
        // this.creatChart();
        /*  var mydate = new Date('2018-03-02');
          console.log(mydate.toDateString());*/
    };
    ProductReportComponent.prototype.creatChart = function () {
        if (this.chart.data)
            this.chart.destroy();
        // this.changeProduct()
        this.getValues();
        this.chart = new __WEBPACK_IMPORTED_MODULE_7_chart_js__["Chart"]('pie', {
            type: 'line',
            data: {
                labels: this.y,
                datasets: [{
                        data: this.x,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.4)',
                            'rgba(54, 162, 235, 0.4)',
                            'rgba(255, 206, 86, 0.4)',
                            'rgba(75, 192, 192, 0.4)',
                            'rgba(153, 102, 255, 0.4)',
                            'rgba(255, 159, 64, 0.4)',
                            'rgba(102, 153, 255,0.4)',
                            'rgba(255, 51, 153,0.4)',
                            'rgba(255, 102, 0, 0.4)',
                            'rgba(51, 102, 255,0.4)',
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(102, 153, 255, 1)',
                            'rgba(255, 51, 153, 1)',
                            'rgba(255, 102, 0, 1)',
                            'rgba(51, 102, 255, 1)',
                        ],
                    }]
            },
            options: {
                title: {
                    display: true,
                    text: 'مجموع مبيعات المنتج في الفترة المحددة'
                },
                responsive: true,
                legend: {
                    display: false,
                    position: 'right',
                },
                scales: {
                    xAxes: [{
                            scaleLabel: {
                                labelString: "التاريخ  ",
                                display: true,
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                    yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true
                            },
                            scaleLabel: {
                                labelString: "مجموع المبيعات في اليوم  ",
                                display: true,
                            },
                        }],
                },
                tooltips: {
                    mode: 'point'
                },
            }
        });
    };
    ProductReportComponent.prototype.changeProduct = function () {
        if (this.selectedValue != undefined) {
            if (this.startDate && this.endDate) {
                if (this.startDate <= this.endDate) {
                    this.getProductreceipts();
                    //   if(true){
                    // }else{
                    // this.flashMensaje.show('لم يتم بيع هذا المنتج في هذه الفترة الزمنية.',
                    // {cssClass: 'alert-danger', timeout: 5000});
                    //     this.dataSource.data=null;
                    // }
                    //if(this.products)
                }
                else {
                    this.flashMensaje.show('يجب ان لا يسبق تاريخ النهاية تاريخ البداية.', { cssClass: 'alert-danger', timeout: 100000,
                        closeOnClick: true, showCloseBtn: true });
                }
            }
            else {
                this.flashMensaje.show('يرجى إدخال الفترة الزمنية أولا.', { cssClass: 'alert-danger', timeout: 100000,
                    closeOnClick: true, showCloseBtn: true });
            }
        }
        else {
            this.flashMensaje.show('يرجى إختيار منتج', { cssClass: 'alert-danger', timeout: 100000,
                closeOnClick: true, showCloseBtn: true });
        }
    };
    ProductReportComponent.prototype.getProductreceipts = function () {
        var _this = this;
        this.error = true;
        this.dataSource.data = [];
        this.firebase.list(window.name + '/receipts').snapshotChanges().subscribe(function (list) {
            for (var m in list) {
                var receipt = void 0;
                receipt = list[m].payload.toJSON();
                var date = receipt.date.split('-'); //date[0] year , date[1] month , date[2] day
                var dd = new Date(date[0], date[1], date[2]);
                var strDate = new Date(_this.startDate.getFullYear(), _this.startDate.getUTCMonth() + 1, _this.startDate.getDate());
                var endDate = new Date(_this.endDate.getFullYear(), _this.endDate.getUTCMonth() + 1, _this.endDate.getDate());
                //   if(date[0]<this.startDate.getFullYear()||date[0]>this.endDate.getFullYear()||
                //   date[1]<this.startDate.getUTCMonth()+1||date[1]>this.endDate.getUTCMonth()+1||
                //   date[2]<this.startDate.getDate()||date[2]>this.endDate.getDate()
                // )
                if (dd < strDate || dd > endDate)
                    continue;
                console.log(receipt);
                for (var prods in receipt.products)
                    if (prods == _this.selectedValue) {
                        var info = new __WEBPACK_IMPORTED_MODULE_2__shared_receipt_model__["b" /* ItemInfo */]();
                        info.employeename = receipt.employeeName;
                        info.cost = receipt.products[prods].price;
                        info.date = receipt.date;
                        info.price = receipt.products[prods].price * receipt.products[prods].quantity;
                        info.quantity = receipt.products[prods].quantity;
                        info.time = receipt.time;
                        _this.dataSource.data.push(info);
                        _this.error = false;
                        _this.dataSource._updateChangeSubscription();
                    }
            }
            if (_this.error)
                _this.flashMensaje.show('لم يتم بيع هذا المنتج في هذه الفترة الزمنية.', { cssClass: 'alert-danger', timeout: 5000 });
            _this.creatChart();
        });
    };
    ProductReportComponent.prototype.getValues = function () {
        var _this = this;
        this.x = [];
        this.y = [];
        var label = this.dataSource.data.map(function (p) { return p.date; });
        var values = this.dataSource.data.map(function (p) { return p.price; });
        label.forEach(function (i) {
            var sum = 0;
            for (var n in label) {
                if (label[n].localeCompare(i) == 0) {
                    // console.log(label[n])
                    sum = sum + values[n];
                    // console.log(sum)
                    values[n] = 0;
                    label[n] = '';
                }
            }
            if (i != '') {
                _this.x.push(sum);
                _this.y.push(i);
                i = '';
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("pie", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProductReportComponent.prototype, "pie", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["G" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_material__["G" /* MatSort */])
    ], ProductReportComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["u" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_material__["u" /* MatPaginator */])
    ], ProductReportComponent.prototype, "paginator", void 0);
    ProductReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-report',
            template: __webpack_require__("../../../../../src/app/charts/product-report/sales-report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/charts/sales-report/sales-report.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_reports_service__["a" /* ReportsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_reports_service__["a" /* ReportsService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */]])
    ], ProductReportComponent);
    return ProductReportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/charts/product-report/sales-report.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar  class=\"PageTitle\" style=\"background-color:transparent\">\r\n    <span class=\"toolbar-spacer\"></span>\r\n<span color=\"primary\">   <h2>  {{reportName}} </h2> </span>\r\n<span class=\"toolbar-spacer\"></span>\r\n   </mat-toolbar>  \r\n      \r\n  \r\n   <div  class=\"PageTitl col-md-12 col-sm-12 right\">\r\n        <div   class=\" col-md-12 col-sm-12 contane\"  dir=\"rtl\"  >\r\n     \r\n                <div  *ngIf=\"hasDate\" class=\" col-md-4 col-sm-6 right\" > \r\n                        <mat-form-field class=\"headerText\">\r\n                            <input   [value]='startDate' matInput [matDatepicker]=\"picker\" placeholder=\" من تاريخ \" (dateChange)=\"changeDate('from', $event) \" >\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #picker disabled=\"false\" ></mat-datepicker>\r\n                        </mat-form-field>\r\n                    </div>\r\n        <!-- <span class=\"toolbar-spacer\"></span> -->\r\n  \r\n\r\n\r\n        <div  *ngIf=\"hasDate\" class=\" col-md-4 col-sm-6 right\" > \r\n        <mat-form-field class=\"headerText\">\r\n            <input matInput  [value]='endDate'  [matDatepicker]=\"ToDate\" placeholder=\" إلى تاريخ \" (dateChange)=\"changeDate('to', $event)\" >\r\n            <mat-datepicker-toggle matSuffix [for]=\"ToDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker   #ToDate disabled=\"false\"  ></mat-datepicker>\r\n        </mat-form-field>\r\n        </div> \r\n\r\n        <div class=\"reportBar col-md-4 col-sm-12 right\" *ngIf=\"hasSelection\" >\r\n                <mat-form-field class=\"headerText\" >\r\n                <mat-select placeholder=\"اسم المنتج\" [(ngModel)]=\"selectedValue\" name=\"item\" (change)='changeProduct()' >\r\n                    <mat-option *ngFor=\"let item of items\" [value]=\" item.$key \">\r\n                        {{item.name}}\r\n                    </mat-option>        \r\n                </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n      \r\n\r\n\r\n\r\n</div>\r\n</div>\r\n<div   class=\" col-md-12 col-sm-12 \"  >\r\n\r\n<flash-messages></flash-messages>\r\n\r\n</div>\r\n<div class=\"col-md-12 col-sm-12 right\">\r\n<mat-tab-group class=\"tab-group\" (selectedTabChange)='selectChange($event)' >\r\n    <mat-tab label=\"التقرير\" >\r\n      <div class=\"tabContent\">\r\n\r\n          <mat-table #table [dataSource]=\"dataSource\"  matSort>\r\n\r\n              <!-- Position Column -->\r\n<!--               \r\n              <ng-container [matColumnDef]=\"header\"  *ngFor='let header of displayedColumns' >\r\n                <mat-header-cell *matHeaderCellDef> {{info[header]}} </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element; \">  {{element.date}}    </mat-cell>\r\n              </ng-container>\r\n              ['date','time','cost','price','quantity','employeename'] -->\r\n              \r\n              <ng-container matColumnDef=\"date\" >\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header > التاريخ </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.date}} </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"time\"  >\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header > وقت عملية الشراء </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\"> {{row.time}} </mat-cell>\r\n                  </ng-container>\r\n                  <ng-container matColumnDef=\"cost\" >\r\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> سعر الحبة الواحدة </mat-header-cell>\r\n                      <mat-cell *matCellDef=\"let row\"> {{row.cost}} </mat-cell>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"quantity\"  >\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> الكمية المباعة </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let row\"> {{row.quantity}} </mat-cell>\r\n                      </ng-container>\r\n                    <ng-container matColumnDef=\"price\" >\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> مجموع السعر </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let row\"> {{row.price}} </mat-cell>\r\n                      </ng-container>\r\n\r\n                        <ng-container matColumnDef=\"employeename\" >\r\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> الموظف المسؤول </mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let row\"> {{row.employeename}} </mat-cell>\r\n                          </ng-container>\r\n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n              <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n            </mat-table>\r\n            <mat-paginator dir=\"rtl\" [pageSizeOptions]=\"[5, 10, 15, 100]\" ></mat-paginator>\r\n\r\n          <!-- <table matSort  class=\"reportContent\" >\r\n              <tr class=\"head\">\r\n                <th *ngFor=\"let header of tableheader\" [mat-sort-header]=\"header\" [id]=\"header\"  (click)=\"priceSortiong()\">{{header}} </th>\r\n\r\n              </tr>\r\n            \r\n              <tr *ngFor=\"let product of newProducts\">\r\n                <td color=\"primary\" >{{product.category}}</td>\r\n                <td color=\"primary\" >{{product.quantity}}</td>\r\n                <td>{{product.price}}</td>\r\n              </tr>\r\n          \r\n              <tr>\r\n                  <td class=\"head \" *ngIf=\"totalSales\"> مجموع الأرباح </td>\r\n                  <td>{{totalSales}}</td>\r\n              </tr>\r\n          \r\n            </table>\r\n\r\n             -->\r\n          \r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"الرسم البياني\">\r\n        <div class=\"tabContent\"  *ngIf=\"chart\" >\r\n            <canvas id=\"pie\"  class=\"chart-pie\" style=\" width:fit-content ; height:fit-content;     overflow:hidden;\" ></canvas>\r\n           \r\n           </div>    \r\n    </mat-tab>\r\n</mat-tab-group>\r\n</div>\r\n<!-- (matSortChange)=\"sortData($event)\" -->\r\n "

/***/ }),

/***/ "../../../../../src/app/charts/sales-report/sales-report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".viewProduct\r\n{\r\n    width: 25%;\r\n    height: 25%;\r\n    max-height: 250px;\r\n    max-width: 250px;\r\n    min-height: 200px;\r\n    min-width: 200px;\r\n    text-align: center;\r\n    border: 25px;\r\n    margin: 12px 0px 7px 9px;\r\n    display: inline-table;\r\n}\r\n.ViewsContainer\r\n{\r\n    margin-right:15px; \r\n    -ms-flex-line-pack: center; \r\n        align-content: center;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.tabContent\r\n{\r\n    padding-top:10px; \r\n    height: 100%;\r\n}\r\n.PageTitle\r\n{\r\n    margin: 15px;\r\n    height: 40px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n.PageTitle h2\r\n{\r\n    margin: 0px;\r\n}\r\n.reportBar\r\n{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: auto;\r\n            flex: auto;\r\n    /* margin-left:7%; */\r\n}\r\n.Viewimg\r\n{\r\n    margin-top: 0px !important ; \r\n    width: 75%;\r\n    height: 60%;\r\n    overflow-wrap: normal;\r\n    overflow: hidden;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center\r\n}\r\n.btn-Add\r\n{\r\n    float: left;\r\n}\r\n.toolbar-spacer {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n  }\r\n.OptionBtn\r\n  {\r\n      margin: 0px;\r\n      width: 100%;\r\n      -ms-flex-item-align: center;\r\n          -ms-grid-row-align: center;\r\n          align-self: center;\r\n      -webkit-box-align: center;\r\n          -ms-flex-align: center;\r\n              align-items: center;\r\n      -ms-flex-line-pack: center;\r\n          align-content: center;\r\n      width: 100%;\r\n      height: -webkit-fit-content;\r\n      height: -moz-fit-content;\r\n      height: fit-content;\r\n  }\r\n.OptionBtn button\r\n  {\r\n      width: 100%;\r\n  }\r\n.PageTitle\r\n  {\r\n      width: auto;\r\n      margin: 15px;\r\n      height: 40px;\r\n  }\r\n.PageTitle span h2\r\n  {\r\n      font-size: 22px;\r\n      margin: 0px;\r\n  }\r\ntable {\r\n\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\ntd {\r\n    border: 1px solid #dddddd;\r\n    text-align: rghit;\r\n    padding: 8px;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n}\r\ntr:nth-child(even) {\r\n    background-color: #dddddd;\r\n}\r\n.head {\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    background-color: #73bfe2;\r\n\r\n}\r\n.contaner\r\n{\r\n    background-color: whitesmoke;\r\n    border-radius: 1%;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    padding: 0 16px;\r\n    width: 100%;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    white-space: nowrap;\r\n}\r\n.headerText\r\n{\r\nfont-size: 1.5em;\r\n\r\n}\r\n.Theader {\r\npadding: 20px;\r\n    text-align: center !important;\r\n  }\r\n.header-group-row {\r\n    border: none;\r\n    -webkit-box-align: stretch;\r\n        -ms-flex-align: stretch;\r\n            align-items: stretch;\r\n  }\r\n.header-group {\r\n    -webkit-box-flex: 1.38;\r\n        -ms-flex: 1.38;\r\n            flex: 1.38;\r\n     -webkit-box-align: center;\r\n         -ms-flex-align: center;\r\n             align-items: center;\r\n      /* border-right: 1px solid rgba(0, 0, 0, 0.12); */\r\n      border-left: 1px solid rgba(0, 0, 0, 0.12);\r\n  }\r\n.righborder\r\n{\r\n    border-right: 1px solid rgba(0, 0, 0, 0.12);\r\n}\r\n.reportContent\r\n{\r\n    width: 90%;\r\n    margin: 0 5%;\r\n}\r\nmat-cell  , mat-header-cell , mat-paginator , .mat-header-cell\r\n{\r\nfont-size: 110%;\r\ntext-align: right;\r\ntext-indent: 1.5px;\r\nline-height: 2;\r\nfont-weight: 500;\r\n}\r\nmat-paginator , mat-paginator-container\r\n{\r\n    display: -webkit-box;\r\n}\r\n.right\r\n{\r\n    float: right !important;\r\n}\r\ntd,th\r\n{\r\n    -ms-flex-line-pack: right;\r\n        align-content: right;\r\n    -ms-flex-item-align: right;\r\n        -ms-grid-row-align: right;\r\n        align-self: right;\r\n    text-align: right;\r\n    padding: 10px;\r\n}\r\nTheader\r\n{\r\n    padding-right: 10px;\r\n    text-align: center !important;\r\n    color: blue;\r\n}\r\n.assets , .mat-header-cell , mat-header-cell\r\n{\r\n    color:  #4989A5;\r\n}\r\n.liabilities\r\n{\r\n    color: #6Dc4e2;\r\n}\r\n.contane\r\n{\r\n    background-color: whitesmoke;\r\n    border-radius: 1%;\r\n    /* height: 60px;\r\n    display: flex; */\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    padding: 0 16px;\r\n    width: 100%;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    white-space: nowrap;\r\n}\r\n.PageTitl\r\n{\r\n    min-height: 60px;\r\n    width: 99%;\r\n    margin: 2% 0.5%;\r\n\r\n}\r\n.contane div\r\n{\r\n    margin-top:2em ;\r\n    margin-bottom: 1em;\r\n}\r\n.onClick\r\n{\r\n    cursor: pointer;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/sales-report/sales-report.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<mat-toolbar  class=\"PageTitle\" style=\"background-color:transparent\">\r\n    <span class=\"toolbar-spacer\"></span>\r\n<span color=\"primary\">   <h2>  {{reportName}} </h2> </span>\r\n<span class=\"toolbar-spacer\"></span>\r\n   </mat-toolbar>  \r\n \r\n   <div  class=\"PageTitl col-md-12 col-sm-12 right\">\r\n        <div   class=\" col-md-12 col-sm-12 contane\"  dir=\"rtl\"  >\r\n     \r\n                <div  *ngIf=\"hasDate\" class=\" col-md-4 col-sm-6 right\" > \r\n                        <mat-form-field class=\"headerText\">\r\n                            <input   [value]='startDate' matInput [matDatepicker]=\"picker\" placeholder=\" من تاريخ \" (dateChange)=\"changeDate('from', $event) \" >\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #picker disabled=\"false\" ></mat-datepicker>\r\n                        </mat-form-field>\r\n                    </div>\r\n        <!-- <span class=\"toolbar-spacer\"></span> -->\r\n  \r\n\r\n\r\n        <div  *ngIf=\"hasDate\" class=\" col-md-4 col-sm-6 right\" > \r\n        <mat-form-field class=\"headerText\">\r\n            <input matInput  [value]='endDate'  [matDatepicker]=\"ToDate\" placeholder=\" إلى تاريخ \" (dateChange)=\"changeDate('to', $event)\" >\r\n            <mat-datepicker-toggle matSuffix [for]=\"ToDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker   #ToDate disabled=\"false\"  ></mat-datepicker>\r\n        </mat-form-field>\r\n        </div> \r\n\r\n        <div class=\"reportBar col-md-4 col-sm-12 right\" *ngIf=\"hasSelection\" >\r\n                <mat-form-field class=\"headerText\" >\r\n                <mat-select placeholder=\"اسم الموظف\" [(ngModel)]=\"selectedValue\" name=\"item\" (change)='changeProduct()' >\r\n                    <mat-option *ngFor=\"let item of items\" [value]=\" item.$key \">\r\n                        {{item.name}}\r\n                    </mat-option>        \r\n                </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n      \r\n\r\n\r\n\r\n</div>\r\n</div>\r\n<div   class=\" col-md-12 col-sm-12 \"  >\r\n\r\n<flash-messages></flash-messages>\r\n\r\n</div>\r\n<div class=\"col-md-12 col-sm-12 right\">\r\n<!--\r\n<div>\r\n<mat-tab-group class=\"tab-group\" (selectedTabChange)='selectChange($event)' >\r\n    <mat-tab label=\"التقرير\" >\r\n      <div class=\"tabContent\">\r\n\r\n\r\n          <table matSort  class=\"reportContent\" >\r\n              <tr class=\"head\">\r\n                <th *ngFor=\"let header of tableheader\" [mat-sort-header]=\"header\" [id]=\"header\"  \r\n                (click)=\"priceSortiong()\">{{header}} </th>\r\n\r\n              </tr>\r\n            \r\n              <tr *ngFor=\"let product of newProducts\">\r\n                <td color=\"primary\" >{{product.category}}</td>\r\n                <td color=\"primary\" >{{product.quantity}}</td>\r\n                <td>{{product.price}}</td>\r\n              </tr>\r\n          \r\n              <tr>\r\n                  <td class=\"head \" *ngIf=\"totalSales\"> مجموع الأرباح </td>\r\n                  <td>{{totalSales}}</td>\r\n              </tr>\r\n          \r\n            </table>\r\n\r\n            \r\n          \r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"الرسم البياني\">\r\n        <div class=\"tabContent\"  *ngIf=\"chart\" >\r\n            <canvas id=\"pie\"  class=\"chart-pie\" style=\"height:255px ; width:90% ;    overflow:hidden;\" ></canvas>\r\n           \r\n           </div>    \r\n    </mat-tab>\r\n</mat-tab-group>\r\n</div>-->\r\n\r\n        <mat-tab-group class=\"tab-group\" (selectedTabChange)='selectChange($event)' >\r\n            <mat-tab label=\"التقرير\" >\r\n              <div class=\"tabContent\">\r\n        \r\n                  <mat-table #table [dataSource]=\"dataSource\" class=\"reportTable\" matSort>\r\n        \r\n                      <!-- Position Column -->\r\n        <!--               \r\n                      <ng-container [matColumnDef]=\"header\"  *ngFor='let header of displayedColumns' >\r\n                        <mat-header-cell *matHeaderCellDef> {{info[header]}} </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let element; \">  {{element.date}}    </mat-cell>\r\n                      </ng-container>\r\n                      ['date','time','cost','price','quantity','employeename'] -->\r\n                      \r\n                      <ng-container matColumnDef=\"name\" >\r\n                          <mat-header-cell *matHeaderCellDef mat-sort-header > المنتج </mat-header-cell>\r\n                          <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\r\n                        </ng-container>\r\n                        \r\n                        <ng-container matColumnDef=\"quantity\"  >\r\n                            <mat-header-cell *matHeaderCellDef mat-sort-header > الكمية المباعة </mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let row\"> {{row.quantity}} </mat-cell>\r\n                          </ng-container>\r\n\r\n                          <ng-container matColumnDef=\"price\" >\r\n                                <mat-header-cell *matHeaderCellDef mat-sort-header> الربح </mat-header-cell>\r\n                                <mat-cell *matCellDef=\"let row\"> {{row.price}} </mat-cell>\r\n                              </ng-container>\r\n\r\n                          <ng-container matColumnDef=\"cost\" >\r\n                              <mat-header-cell *matHeaderCellDef mat-sort-header> التكلفة </mat-header-cell>\r\n                              <mat-cell *matCellDef=\"let row\"> {{row.cost}} </mat-cell>\r\n                            </ng-container>\r\n                                  \r\n                                <ng-container matColumnDef=\"totalIncome\" >\r\n                                    <mat-header-cell *matHeaderCellDef mat-sort-header> إجمالي الربح </mat-header-cell>\r\n                                    <mat-cell *matCellDef=\"let row\"> {{row.totalIncome}} </mat-cell>\r\n                                  </ng-container>\r\n\r\n                      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n                    </mat-table>\r\n                    <mat-paginator dir=\"rtl\" [pageSizeOptions]=\"[5, 10, 15, 100]\" ></mat-paginator>\r\n        \r\n                  <!-- <table matSort  class=\"reportContent\" >\r\n                      <tr class=\"head\">\r\n                        <th *ngFor=\"let header of tableheader\" [mat-sort-header]=\"header\" [id]=\"header\"  (click)=\"priceSortiong()\">{{header}} </th>\r\n        \r\n                      </tr>\r\n                    \r\n                      <tr *ngFor=\"let product of newProducts\">\r\n                        <td color=\"primary\" >{{product.category}}</td>\r\n                        <td color=\"primary\" >{{product.quantity}}</td>\r\n                        <td>{{product.price}}</td>\r\n                      </tr>\r\n                  \r\n                      <tr>\r\n                          <td class=\"head \" *ngIf=\"totalSales\"> مجموع الأرباح </td>\r\n                          <td>{{totalSales}}</td>\r\n                      </tr>\r\n                  \r\n                    </table>\r\n        \r\n                     -->\r\n                  \r\n              </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"الرسم البياني\">\r\n                <div class=\"tabContent col-md-12 col-sm-12\"  *ngIf=\"chart\" >\r\n                    <canvas id=\"pie\"  class=\"chart-pie\" style=\" width:fit-content ; height:fit-content;  overflow:hidden;\" ></canvas>\r\n                   \r\n                   </div>    \r\n            </mat-tab>\r\n        </mat-tab-group>\r\n        </div>\r\n        <!-- (matSortChange)=\"sortData($event)\" -->\r\n         \r\n<!-- (matSortChange)=\"sortData($event)\" -->\r\n "

/***/ }),

/***/ "../../../../../src/app/charts/sales-report/sales-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_reports_service__ = __webpack_require__("../../../../../src/app/charts/shared/reports.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_receipt_model__ = __webpack_require__("../../../../../src/app/charts/shared/receipt.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SalesReportComponent = /** @class */ (function () {
    function SalesReportComponent(reportsService, firebase, flashMensaje) {
        this.reportsService = reportsService;
        this.firebase = firebase;
        this.flashMensaje = flashMensaje;
        this.chart = __WEBPACK_IMPORTED_MODULE_6_chart_js__["Chart"];
        this.hasDate = true;
        this.hasSelection = false;
        this.reportName = 'تقرير المبيعات ';
        this.tableheader = ['التصنيف', 'الكمية المباعة', 'الربح'];
        this.temp = new __WEBPACK_IMPORTED_MODULE_3__shared_receipt_model__["a" /* InnerProduct */];
        this.startDate = new Date();
        this.endDate = new Date();
        this.displayedColumns = ['name', 'quantity', 'price', 'cost', 'totalIncome'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MatTableDataSource */](new Array());
    }
    SalesReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startDate.setMonth(this.startDate.getMonth() - 1);
        var x = this.reportsService.getData();
        var nn = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatPaginatorIntl */]();
        nn.itemsPerPageLabel = "عدد الصفوف في الصفحة ";
        nn.firstPageLabel = "الصفحة الأولى ";
        nn.lastPageLabel = "الصفحة الأخيرة ";
        nn.nextPageLabel = "الصفحة التالية";
        nn.previousPageLabel = "الصفحة السابقة";
        nn.getRangeLabel = function (page, pageSize, length) { if (length == 0 || pageSize == 0) {
            return "0 \u0645\u0646 " + length;
        } length = Math.max(length, 0); var startIndex = page * pageSize; var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize; return startIndex + 1 + " - " + endIndex + " \u0645\u0646 " + length; };
        this.paginator._intl = nn;
        //table
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        //end
        this.receiptList = [];
        this.products = [];
        this.totalSales = 0;
        x.snapshotChanges().subscribe(function (item) {
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                //  this.products = [];
                y["$key"] = element.key;
                _this.firebase.list(window.name + '/receipts/' + element.key + '/products').snapshotChanges().subscribe(function (item) {
                    item.forEach(function (element) {
                        var i = element.payload.toJSON();
                        i["$key"] = element.key;
                        //    this.products.push(i as InnerProduct);
                        //add the array of products
                        y["products"].push(i);
                    });
                });
                _this.totalSales += y["totalPrice"];
                //convert date to specific format (wen mar 07 2018)
                var mydate = new Date(y.date);
                // console.log(mydate);
                y["date"] = mydate;
                _this.receiptList.push(y);
                //console.log((y as Receipt).date);
            });
            _this.sales();
        });
    };
    SalesReportComponent.prototype.selectChange = function (evet) {
        if (evet.index == 0)
            this.sales();
        else
            this.creatChart();
    };
    SalesReportComponent.prototype.sales = function () {
        //console.log(this.receiptList[2].products);
        this.dataSource.data = [];
        this.products = [];
        if (this.receiptList.length != 0) {
            if (this.startDate && this.endDate) {
                if (this.startDate <= this.endDate) {
                    this.totalSales = 0;
                    this.newProducts = [];
                    //table
                    this.dataSource.data = [];
                    //end
                    for (var element_1 in this.receiptList) {
                        var requireDate = this.receiptList[element_1].date;
                        if ((requireDate >= this.startDate) && (requireDate <= this.endDate)) {
                            this.totalSales += this.receiptList[element_1].totalPrice;
                            for (var element2 in this.receiptList[element_1].products)
                                this.products.push(this.receiptList[element_1].products[element2]);
                        }
                    }
                    if (this.products.length != 0) {
                        this.products.sort(function (a, b) {
                            return a.name.localeCompare(b.name);
                        });
                        var name_1 = this.products[0].name;
                        var priceTemp = 0;
                        var quantityTemp = 0;
                        var costTemp = 0;
                        var x = 0;
                        this.newProducts = [];
                        //table
                        this.dataSource.data = [];
                        //end
                        // console.log(this.products[0]);
                        var r = this.products;
                        for (var element in this.products) {
                            if (!this.products.hasOwnProperty(element)) {
                                continue;
                            }
                            if (this.products[element].name == name_1) {
                                priceTemp += (this.products[element].price * this.products[element].quantity);
                                costTemp += (this.products[element].cost * this.products[element].quantity);
                                quantityTemp += this.products[element].quantity;
                            }
                            else {
                                this.temp = { $key: "1", name: name_1, price: priceTemp, cost: costTemp, quantity: quantityTemp,
                                    totalIncome: priceTemp - costTemp };
                                this.newProducts.push(this.temp);
                                //table
                                this.dataSource.data.push(this.temp);
                                this.dataSource._updateChangeSubscription();
                                //end
                                name_1 = this.products[element].name;
                                priceTemp = this.products[element].price;
                                costTemp = this.products[element].cost;
                                quantityTemp = this.products[element].quantity;
                            }
                        }
                        this.temp = { $key: "1", name: name_1, price: priceTemp, cost: costTemp, quantity: quantityTemp,
                            totalIncome: priceTemp - costTemp };
                        this.newProducts.push(this.temp);
                        //table
                        this.dataSource.data.push(this.temp);
                        this.dataSource._updateChangeSubscription();
                        //end
                        // console.log(x);
                        // console.log(this.newProducts);
                    }
                    else {
                        this.flashMensaje.show('لا يوجد فواتير في هذه الفترة الزمنية.', { cssClass: 'alert-danger', timeout: 100000,
                            closeOnClick: true, showCloseBtn: true });
                    }
                    //if(this.products)
                }
                else {
                    this.flashMensaje.show('يجب ان لا يسبق تاريخ النهاية تاريخ البداية.', { cssClass: 'alert-danger', timeout: 100000,
                        closeOnClick: true, showCloseBtn: true });
                }
            }
            else {
                this.flashMensaje.show('يرجى إدخال الفترة الزمنية أولا.', { cssClass: 'alert-danger', timeout: 100000,
                    closeOnClick: true, showCloseBtn: true });
            }
        }
        else {
            this.flashMensaje.show('لا تملك عمليات بيع حاليا.', { cssClass: 'alert-danger', timeout: 100000,
                closeOnClick: true, showCloseBtn: true });
        }
    };
    SalesReportComponent.prototype.changeDate = function (type, event) {
        if (type == 'from')
            this.startDate = event.value;
        if (type == 'to') {
            var x = new Date(event.value);
            this.endDate = new Date(x.getTime() + (1000 * 60 * 60 * 24));
        }
        this.sales();
        this.creatChart();
        /*  var mydate = new Date('2018-03-02');
          console.log(mydate.toDateString());*/
    };
    SalesReportComponent.prototype.creatChart = function () {
        if (this.chart.data)
            this.chart.destroy();
        var label = this.newProducts.map(function (product) { return product.name; });
        var values = this.newProducts.map(function (product) { return product.quantity; });
        this.chart = new __WEBPACK_IMPORTED_MODULE_6_chart_js__["Chart"]('pie', {
            type: 'bar',
            data: {
                labels: label,
                datasets: [{
                        data: values,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.4)',
                            'rgba(54, 162, 235, 0.4)',
                            'rgba(255, 206, 86, 0.4)',
                            'rgba(75, 192, 192, 0.4)',
                            'rgba(153, 102, 255, 0.4)',
                            'rgba(255, 159, 64, 0.4)',
                            'rgba(102, 153, 255,0.4)',
                            'rgba(255, 51, 153,0.4)',
                            'rgba(255, 102, 0, 0.4)',
                            'rgba(51, 102, 255,0.4)',
                            'rgba(255, 99, 132, 0.4)',
                            'rgba(54, 162, 235, 0.4)',
                            'rgba(255, 206, 86, 0.4)',
                            'rgba(75, 192, 192, 0.4)',
                            'rgba(153, 102, 255, 0.4)',
                            'rgba(255, 159, 64, 0.4)',
                            'rgba(102, 153, 255,0.4)',
                            'rgba(255, 51, 153,0.4)',
                            'rgba(255, 102, 0, 0.4)',
                            'rgba(51, 102, 255,0.4)',
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(102, 153, 255, 1)',
                            'rgba(255, 51, 153, 1)',
                            'rgba(255, 102, 0, 1)',
                            'rgba(51, 102, 255, 1)',
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(102, 153, 255, 1)',
                            'rgba(255, 51, 153, 1)',
                            'rgba(255, 102, 0, 1)',
                            'rgba(51, 102, 255, 1)',
                        ],
                    }]
            },
            options: {
                responsive: true,
                legend: {
                    display: false,
                    position: 'right',
                },
                scales: {
                    xAxes: [{
                            scaleLabel: {
                                labelString: "المنتجات",
                                display: true,
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                    yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true
                            },
                            scaleLabel: {
                                labelString: "الكمية المبيعة ",
                                display: true,
                            },
                        }],
                },
                tooltips: {
                    mode: 'point'
                },
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("pie", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SalesReportComponent.prototype, "pie", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatSort */])
    ], SalesReportComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatPaginator */])
    ], SalesReportComponent.prototype, "paginator", void 0);
    SalesReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sales-report',
            template: __webpack_require__("../../../../../src/app/charts/sales-report/sales-report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/charts/sales-report/sales-report.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_reports_service__["a" /* ReportsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_reports_service__["a" /* ReportsService */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]])
    ], SalesReportComponent);
    return SalesReportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/charts/shared/receipt.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Receipt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InnerProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NetIncome; });
/* unused harmony export Income */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return productInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return empsales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ItemInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return shift; });
/* unused harmony export FBReceipt */
/* unused harmony export ReceiptProduct */
/* unused harmony export empInf */
/* unused harmony export Assets */
/* unused harmony export Liabilities */
var Receipt = /** @class */ (function () {
    function Receipt() {
    }
    return Receipt;
}());

var InnerProduct = /** @class */ (function () {
    function InnerProduct() {
    }
    return InnerProduct;
}());

var NetIncome = /** @class */ (function () {
    function NetIncome() {
    }
    return NetIncome;
}());

var Income = /** @class */ (function () {
    function Income() {
    }
    return Income;
}());

var productInfo = /** @class */ (function () {
    function productInfo() {
    }
    return productInfo;
}());

var empsales = /** @class */ (function () {
    function empsales() {
    }
    return empsales;
}());

var ItemInfo = /** @class */ (function () {
    function ItemInfo() {
    }
    return ItemInfo;
}());

// displayedColumns=['date','checkIn','checkOut','totalShiftTime']
var shift = /** @class */ (function () {
    function shift() {
    }
    return shift;
}());

var FBReceipt = /** @class */ (function () {
    function FBReceipt() {
    }
    return FBReceipt;
}());

var ReceiptProduct = /** @class */ (function () {
    function ReceiptProduct() {
    }
    return ReceiptProduct;
}());

var empInf = /** @class */ (function () {
    function empInf() {
    }
    return empInf;
}());

var Assets = /** @class */ (function () {
    function Assets() {
    }
    return Assets;
}());

var Liabilities = /** @class */ (function () {
    function Liabilities() {
    }
    return Liabilities;
}());



/***/ }),

/***/ "../../../../../src/app/charts/shared/reports.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__receipt_model__ = __webpack_require__("../../../../../src/app/charts/shared/receipt.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import * as firebase from 'firebase';


var ReportsService = /** @class */ (function () {
    function ReportsService(firebase) {
        this.firebase = firebase;
        this.receipt = new __WEBPACK_IMPORTED_MODULE_2__receipt_model__["d" /* Receipt */];
        this.emplSales = new Array();
        this.checkStartD_EndD = true;
    }
    ReportsService.prototype.getData = function () {
        this.allReceipts = this.firebase.list(window.name + '/receipts');
        return this.allReceipts;
    };
    ReportsService.prototype.getProductList = function () {
        var _this = this;
        var temp = new __WEBPACK_IMPORTED_MODULE_2__receipt_model__["f" /* productInfo */]();
        var product;
        this.ProductList = new Array();
        this.firebase.list(window.name + '/products').valueChanges().subscribe(function (list) {
            list.forEach(function (category) {
                for (product in category) {
                    temp = new __WEBPACK_IMPORTED_MODULE_2__receipt_model__["f" /* productInfo */]();
                    temp.name = category[product].name;
                    temp.$key = product;
                    // console.log(temp);
                    _this.ProductList.push(temp);
                }
                ;
            });
        });
        return this.ProductList;
    };
    ReportsService.prototype.getEmployeeList = function () {
        var _this = this;
        var temp = new __WEBPACK_IMPORTED_MODULE_2__receipt_model__["f" /* productInfo */]();
        var product;
        this.ProductList = new Array();
        var x = this.firebase.list(window.name + '/employees').snapshotChanges().subscribe(function (item) {
            item.forEach(function (tem) {
                var x = tem.payload.toJSON();
                temp = new __WEBPACK_IMPORTED_MODULE_2__receipt_model__["f" /* productInfo */]();
                temp.name = x.firstName + " " + x.lastName;
                temp.$key = tem.key;
                _this.ProductList.push(temp);
            });
        });
        return this.ProductList;
    };
    ReportsService.prototype.getProductreceipts = function (key, startDate, EndDate) {
        var _this = this;
        var total = new Array();
        this.firebase.list(window.name + '/receipts').snapshotChanges().subscribe(function (list) {
            for (var m in list) {
                var receipt = void 0;
                receipt = list[m].payload.toJSON();
                var date = receipt.date.split('-'); //date[0] year , date[1] month , date[2] day
                if (date[0] < startDate.getFullYear() || date[0] > EndDate.getFullYear() ||
                    date[1] < startDate.getUTCMonth() + 1 || date[1] > EndDate.getUTCMonth() + 1 ||
                    date[2] < startDate.getDate() || date[2] > EndDate.getDate())
                    continue;
                var _loop_1 = function () {
                    if (prods == key) {
                        var info_1 = new __WEBPACK_IMPORTED_MODULE_2__receipt_model__["b" /* ItemInfo */]();
                        _this.firebase.list(window.name + '/employees/' + receipt.employeeID).valueChanges().subscribe(function (emps) {
                            info_1.employeename = emps[1] + ' ' + emps[2];
                        });
                        info_1.cost = receipt.products[prods].price;
                        info_1.date = receipt.date;
                        info_1.price = receipt.products[prods].price * receipt.products[prods].quantity;
                        info_1.quantity = receipt.products[prods].quantity;
                        info_1.time = receipt.time;
                        total.push(info_1);
                    }
                };
                for (var prods in receipt.products) {
                    _loop_1();
                }
            }
        });
        this.productInfos = total;
        return this.productInfos;
    };
    ReportsService.prototype.getEmployeeSales = function (key, startDate, EndDate) {
        var _this = this;
        this.emplSales = [];
        var total = new Array();
        this.firebase.list(window.name + '/receipts', function (query) {
            var m;
            m = query.orderByChild('employeeID').equalTo(key);
            return m;
        }).snapshotChanges().subscribe(function (list) {
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                var temp = list_1[_i];
                var receipt = void 0;
                receipt = temp.payload.toJSON();
                if (receipt.employeeID != key)
                    continue;
                var date = receipt.date.split('-');
                //date[0] year , date[1] month , date[2] day
                if (date[0] < startDate.getFullYear() || date[0] > EndDate.getFullYear() ||
                    date[1] < startDate.getUTCMonth() + 1 || date[1] > EndDate.getUTCMonth() + 1 ||
                    date[2] < startDate.getDate() || date[2] > EndDate.getDate()) {
                    continue;
                }
                var q = 0;
                for (var prods in receipt.products) {
                    q += receipt.products[prods].quantity;
                }
                var info = new __WEBPACK_IMPORTED_MODULE_2__receipt_model__["e" /* empsales */]();
                info.date = receipt.date;
                info.pay = receipt.ReceivedAmount;
                info.price = receipt.totalPrice;
                info.quantity = q;
                info.remains = receipt.RemainingAmount;
                info.time = receipt.time;
                info.Id = receipt.id;
                _this.emplSales.push(info);
            }
        });
        // displayedColumns=['date','time','quantity','price','pay','remains'];     
        return this.emplSales;
    };
    ReportsService.prototype.getEmpShifts = function (key, startDate, EndDate, source) {
        source.data = [];
        this.firebase.list(window.name + '/employees/' + key + '/workingTime').snapshotChanges().subscribe(function (list) {
            for (var _i = 0, list_2 = list; _i < list_2.length; _i++) {
                var temp = list_2[_i];
                var year = parseInt(temp.key, 10);
                var mon = temp.payload.toJSON();
                // console.log(mon)
                // console.log(mon.valueOf())
                for (var i in mon) {
                    var month = parseInt(i, 10);
                    var day = mon[i];
                    for (var n in day) {
                        var ymd = new Date(year, month - 1, parseInt(n, 10) + 1);
                        if (ymd <= startDate && ymd >= EndDate)
                            continue;
                        var date = parseInt(n, 10);
                        if (ymd < startDate || ymd > EndDate)
                            continue;
                        var shifts = day[n];
                        for (var s in shifts) {
                            var temp_1 = new __WEBPACK_IMPORTED_MODULE_2__receipt_model__["g" /* shift */]();
                            temp_1.date = ymd;
                            temp_1.checkIn = shifts[s].checkIn;
                            temp_1.checkOut = shifts[s].checkOut;
                            temp_1.totalShiftTime = shifts[s].totalShiftTime;
                            source.data.push(temp_1);
                        }
                    }
                }
            }
        });
    };
    ReportsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ReportsService);
    return ReportsService;
}());



/***/ }),

/***/ "../../../../../src/app/control/no-found-page/no-found-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/control/no-found-page/no-found-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-3\">\r\n  <div class=\"col-md-6 mx-auto text-center\">\r\n    <div class=\"card\">\r\n      <h1>Oops!</h1>\r\n      <h2>هذه الصفحة غير موجودة </h2>\r\n      <div class=\"card-body\">\r\n        <a href=\"\" class=\"btn btn-primary btn-lg\"><i class=\"fa fa-home\"></i> العودة إلى الصفحة الرئيسية</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/control/no-found-page/no-found-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoFoundPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoFoundPageComponent = /** @class */ (function () {
    function NoFoundPageComponent() {
    }
    NoFoundPageComponent.prototype.ngOnInit = function () {
    };
    NoFoundPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-no-found-page',
            template: __webpack_require__("../../../../../src/app/control/no-found-page/no-found-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/control/no-found-page/no-found-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NoFoundPageComponent);
    return NoFoundPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
    function AuthService(afAuth, db) {
        this.afAuth = afAuth;
        this.db = db;
    }
    AuthService.prototype.register = function (email, password, firstName, lastName, phone, salary, picPATH, picName) {
        try {
            var secondaryApp = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["initializeApp"](__WEBPACK_IMPORTED_MODULE_6__environments_environment_prod__["a" /* environment */].firebaseConfig, "Secondary");
            secondaryApp.auth().createUserWithEmailAndPassword(email, password).then(function (firebaseUser) {
                var x = firebaseUser.uid;
                __WEBPACK_IMPORTED_MODULE_1_firebase_app__["database"]().ref(window.name + '/employees').child(x).set({
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    password: password,
                    phone: phone,
                    salary: salary,
                    picPATH: picPATH,
                    picName: picName
                });
                secondaryApp.auth().signOut();
                return x;
            });
        }
        catch (e) {
            return 'fail';
        }
    };
    AuthService.prototype.registerUser = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(function (userData) {
                resolve(userData);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.registerManager = function (ReceiptID, email, password, fname, lname, phone, businessname, picName, picPath, uid) {
        __WEBPACK_IMPORTED_MODULE_1_firebase_app__["database"]().ref(businessname + '/manager').set({
            ReceiptID: ReceiptID,
            email: email,
            fname: fname,
            lname: lname,
            password: password,
            phone: phone,
            businessname: businessname,
            picPath: picPath,
            picName: picName,
            uid: uid
        });
        __WEBPACK_IMPORTED_MODULE_1_firebase_app__["database"]().ref(window.name + '/employees').child(uid).set({
            email: email,
            firstName: fname,
            lastName: lname,
            password: password,
            phone: phone,
            salary: 0,
            picPATH: picPath,
            picName: picName
        });
    };
    AuthService.prototype.loginTestFirst = function (email, pass) {
        var ref = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["database"]().ref();
        ref.orderByChild("email").equalTo(email).once("value", function (snapshot) {
        });
    };
    AuthService.prototype.loginEmail = function (email, pass) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, pass)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.resetPass = function (emailAddress) {
        __WEBPACK_IMPORTED_MODULE_1_firebase_app__["auth"]().sendPasswordResetEmail(emailAddress).then(function () {
            return true;
        }).catch(function (error) {
            return false;
        });
        return true;
    };
    AuthService.prototype.getAuth = function () {
        return this.afAuth.authState.map(function (auth) { return auth; });
    };
    AuthService.prototype.logout = function () {
        window.name = '';
        return this.afAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [],
            providers: [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/manager.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Manager; });
var Manager = /** @class */ (function () {
    function Manager() {
    }
    return Manager;
}());



/***/ }),

/***/ "../../../../../src/app/empolyee/add-emp/add-emp.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\r\n    min-width: 150px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  \r\n  .formContainer\r\n  {\r\n    font-family: 'Amiri' !important;\r\n      margin: 1% 2%;\r\n      -ms-flex-item-align: center;\r\n          -ms-grid-row-align: center;\r\n          align-self: center; \r\n      \r\n  }\r\n  \r\n  td mat-form-field\r\n  {\r\n  \r\n    text-align: right;\r\n    font-size: 18px;\r\n    float: right;\r\n    line-height: 2;\r\n  }\r\n  \r\n  input[type=\"number\"]::-webkit-outer-spin-button,\r\ninput[type=\"number\"]::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n  \r\n  input[type=\"number\"] {\r\n    -moz-appearance: textfield;\r\n}\r\n  \r\n  .blueBtn\r\n{\r\n\r\n    background-color: #6Dc4e2; \r\n\r\n}\r\n  \r\n  .greyBtn\r\n{\r\n    background-color:#A8A8A8;\r\n\r\n}\r\n  \r\n  .Btns\r\n{\r\n    color:white;\r\n    height: 3em;\r\n   \r\n    width: 12em;\r\n    margin: 1em !important;\r\n}\r\n  \r\n  table\r\n {\r\n\r\n     width: 100%;\r\n }\r\n  \r\n  td button\r\n {\r\n   width: 100%;\r\n   height: 100%;\r\n }\r\n  \r\n  td mat-form-field app-input-file\r\n  {\r\n    float: right;\r\n    text-indent: 1.5px;\r\n    text-align: right;\r\n    font-size: 18px;\r\n  }\r\n  \r\n  div {\r\n    text-align: right;\r\n  }\r\n  \r\n  .red{\r\n    color: red;\r\n  }\r\n  \r\n  .dialogTitle , .DialogOptionBtn\r\n  {\r\n    display: -ms-inline-grid;;\r\n    direction: rtl;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/empolyee/add-emp/add-emp.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar   style=\"background-color:transparent\">\r\n    <span class=\"primary\">\r\n         <a  (click)=\"gobacktoProducts()\" > <h6>العودة إلى عرض الموظفين </h6></a> \r\n\r\n    </span>\r\n    <span class=\"toolbar-spacer\"></span>\r\n</mat-toolbar>\r\n\r\n\r\n<div *ngIf=\"firstName.errors && (firstName.dirty || firstName.touched)\"  class=\"alert alert-danger\">\r\n  <div [hidden]=\"!firstName.errors.minlength\">   *يجب ان يكون الأسم الأول على الاقل متكون من حرفين</div>\r\n\r\n  <div [hidden]=\"!firstName.errors.required\">*يرجى إدخال الأسم الأول</div>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"phone.errors && (phone.dirty || phone.touched)\"  class=\"alert alert-danger\">\r\n  <div [hidden]=\"!phone.errors.pattern\">*رقم الجوال يجب ان يحتوي على أرقام فقط</div>\r\n  <div [hidden]=\"!phone.errors.minlength\">   *رقم الجوال يجب أن لا يقل عن 10 أرقام </div>\r\n</div>\r\n\r\n          \r\n<div *ngIf=\"lastName.errors && (lastName.dirty || lastName.touched)\"  class=\"alert alert-danger\">\r\n  <div [hidden]=\"!lastName.errors.minlength\">\r\n    *يجب ان يكون أسم العائلة على الاقل متكون من  ثلاثة أحرف</div>\r\n\r\n  <div [hidden]=\"!lastName.errors.required\">*يرجى إدخال إسم العائلة</div>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"email.errors && (email.dirty || email.touched)\"  class=\"alert alert-danger\">\r\n  <div [hidden]=\"!email.errors.required\">*يرجى إدخال البريد الإلكتروني</div>\r\n  <div [hidden]=\"!email.errors.pattern\">*يرجى كتابة البريد الإلكتروني بشكل صحيح</div>\r\n</div>\r\n\r\n<mat-card class=\"formContainer\" >\r\n    <mat-card-title>\t\r\n      <h2> إضافة موظف </h2>\r\n    </mat-card-title>\r\n    <flash-messages></flash-messages>\r\n<mat-card-content>\r\n    <form #employeeForm=\"ngForm\" (ngSubmit)=\"onSubmit(employeeForm)\" dir=\"rtl\">\r\n        <input type=\"hidden\" name=\"$key\" #$key=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.$key\">\r\n        <input type=\"hidden\" name=\"picPATH\" #picPATH=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.picPATH\">\r\n        <input type=\"hidden\" name=\"picName\" #picName=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.picName\">       \r\n        <input type=\"hidden\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.password\" >\r\n       \r\n        \r\n\r\n      <div class=\"form-group col-md-6 col-sm-12\">\r\n          <label > <h4> الاسم الأول  <span class=\"red\">* </span> </h4> </label>\r\n           \r\n   \r\n          <input matInput   name=\"firstName\" #firstName=\"ngModel\"   \r\n          [(ngModel)]=\"employeeService.selectedEmployee.firstName\"    minlength=\"2\" required type=\"email\" class=\"form-control\"  aria-describedby=\"emailHelp\" placeholder=\"مثال: منى\">\r\n      \r\n   \r\n      </div>\r\n        \r\n\r\n\r\n        <div class=\"form-group col-md-6 col-sm-12\">\r\n            <label > <h4>    العائلة  <span class=\"red\">* </span> </h4> </label>\r\n           \r\n            <input matInput  minlength=\"3\" name=\"lastName\" #lastName=\"ngModel\" \r\n            [(ngModel)]=\"employeeService.selectedEmployee.lastName\"   class=\"form-control\"\r\n            placeholder=\"مثال: السحيم\" required>\r\n\r\n      </div>\r\n  \r\n\r\n        <div class=\"form-group col-md-6 col-sm-12\">\r\n            <label > <h4>   البريد الإلكتروني <span class=\"red\">* </span></h4> </label>\r\n            <input matInput   type=\"email\" name=\"email\" #email=\"ngModel\" \r\n            [(ngModel)]=\"employeeService.selectedEmployee.email\" \r\n            placeholder=\"مثال: me@gmail.com\"   class=\"form-control\"\r\n            pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>\r\n          \r\n\r\n\r\n \r\n      </div>\r\n\r\n\r\n        <div class=\"form-group col-md-6 col-sm-12\">\r\n            <label > <h4>   الجوال </h4> </label>\r\n\r\n            <input matInput type=\"tel\"   name=\"phone\" #phone=\"ngModel\" \r\n            [(ngModel)]=\"employeeService.selectedEmployee.phone\"  class=\"form-control\"\r\n            minlength=\"10\" pattern=\"[0-9]*\" placeholder=\"مثال: 0512345678\">\r\n    \r\n\r\n  \r\n   \r\n    </div>\r\n \r\n\r\n      <div class=\"form-group col-md-6 col-sm-12\">\r\n          <label > <h4>    الراتب  بالساعة</h4> </label>\r\n            <input  matInput type=\"number\"   name=\"salary\" #salary=\"ngModel\" \r\n            [(ngModel)]=\"employeeService.selectedEmployee.salary\" class=\"form-control\"\r\n            placeholder=\"مثال: 10\">\r\n         </div>\r\n\r\n\r\n            \r\n      <div class=\"form-group custom-file col-md-6 col-sm-12 \">\r\n        <label   >\r\n           <h4>صورة الموظف:</h4></label> \r\n          <input  type=\"file\" (change)=\"detectFiles($event)\"  class=\"form-control custom-file-input\" accept=\"image/gif, image/jpeg, image/png\" >\r\n        \r\n        <p>\r\n        <small > الصيغ المسموح بها gif , jpeg ,png</small> </p>      \r\n        </div>\r\n       \r\n\r\n      <div *ngIf=\"num\" >\r\n        <div class=\"progress\">\r\n          <div class=\"progress-bar progress-bar-animated\" [ngStyle]=\"{ 'width': num + '%' }\"></div>\r\n        </div>\r\n        التحميل: | : {{num}}% اكتمل\r\n      </div>\r\n   \r\n      \r\n\r\n      \r\n        <button  mat-raised-button class=\"Btns  blueBtn\"  type=\"submit\"  [disabled]=\"!employeeForm.valid\">\r\n            إضافة</button>\r\n\r\n           <button mat-raised-button  type=\"button\"  class=\"Btns greyBtn \"  (click)=\"openDialog()\">\r\n          إلغاء</button>\r\n\r\n\r\n        \r\n          </form>\r\n          </mat-card-content>\r\n  </mat-card>"

/***/ }),

/***/ "../../../../../src/app/empolyee/add-emp/add-emp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEmpComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return confirmMessageancleEmp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_employee_service__ = __webpack_require__("../../../../../src/app/empolyee/shared/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var AddEmpComponent = /** @class */ (function () {
    function AddEmpComponent(fb, employeeService, router, flashMensaje, dialog, HttpHeader) {
        this.fb = fb;
        this.employeeService = employeeService;
        this.router = router;
        this.flashMensaje = flashMensaje;
        this.dialog = dialog;
        this.HttpHeader = HttpHeader;
    }
    AddEmpComponent.prototype.ngOnInit = function () {
        this.employeeService.getData();
        this.resetForm();
        // var config = {headers: {'api-key':'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'}};
        // var options:Request=new Request('');
        // options.method=RequestMethod.Get;
        // options.url='https://api.sendinblue.com/v3/smtp/statistics/reports';  
        // options.headers.append('api-key','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')
    };
    AddEmpComponent.prototype.detectFiles = function (event) {
        this.selectedFiles = event.target.files;
    };
    AddEmpComponent.prototype.onSubmit = function (employeeForm) {
        var _this = this;
        if (this.selectedFiles) {
            var file_1 = this.selectedFiles.item(0);
            var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref(file_1.name);
            var uploadTask_1 = storageRef.put(file_1);
            uploadTask_1.on(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                // upload in progress
                _this.num = (uploadTask_1.snapshot.bytesTransferred / uploadTask_1.snapshot.totalBytes) * 100;
            }, function (error) {
                // upload failed
            }, function () {
                // upload success
                var r = _this.employeeService.insert(employeeForm.value, uploadTask_1.snapshot.downloadURL, file_1.name);
                // if(r == '1'){
                _this.resetForm(employeeForm);
                _this.router.navigate(['mainPage/empolyee']).then(function (res) {
                    _this.flashMensaje.show('تم إضافة الموظف بنجاح.', { cssClass: 'alert-success', timeout: 100000,
                        closeOnClick: true, showCloseBtn: true });
                }); //}
                // this.tostr.success('Submitted Succcessfully', 'Employee Register');
            });
        }
        else {
            var x = this.employeeService.insert(employeeForm.value, 'none', 'none');
            this.resetForm(employeeForm);
            this.router.navigate(['mainPage/empolyee']).then(function (res) {
                _this.flashMensaje.show('تم إضافة الموظف بنجاح.', { cssClass: 'alert-success', timeout: 100000,
                    closeOnClick: true, showCloseBtn: true });
            });
            // }
            // this.tostr.success('Submitted Succcessfully', 'Employee Register');
        }
    };
    AddEmpComponent.prototype.resetForm = function (employeeForm) {
        if (employeeForm != null) {
            employeeForm.reset();
            this.num = null;
            this.selectedFiles = null;
        }
        this.employeeService.selectedEmployee = {
            $key: null,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            salary: null,
            password: '',
            picPATH: '',
            picName: '',
        };
    };
    AddEmpComponent.prototype.gobacktoProducts = function () {
        this.router.navigate(['mainPage/empolyee']);
    };
    AddEmpComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(confirmMessageancleEmp, {
            data: { message: '' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.resetForm();
                _this.router.navigate(['mainPage/empolyee']);
            }
        });
    };
    AddEmpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-emp',
            template: __webpack_require__("../../../../../src/app/empolyee/add-emp/add-emp.component.html"),
            styles: [__webpack_require__("../../../../../src/app/empolyee/add-emp/add-emp.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_employee_service__["a" /* EmployeeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__shared_employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */]])
    ], AddEmpComponent);
    return AddEmpComponent;
}());

var confirmMessageancleEmp = /** @class */ (function () {
    function confirmMessageancleEmp(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    confirmMessageancleEmp.prototype.confirm = function () {
        return true;
    };
    confirmMessageancleEmp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'confirm-message-cancle-emp',
            template: __webpack_require__("../../../../../src/app/empolyee/add-emp/confirm-Message-cancle-emp.html"),
            styles: [__webpack_require__("../../../../../src/app/empolyee/add-emp/add-emp.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_material__["k" /* MatDialogRef */], Object])
    ], confirmMessageancleEmp);
    return confirmMessageancleEmp;
}());



/***/ }),

/***/ "../../../../../src/app/empolyee/add-emp/confirm-Message-cancle-emp.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ViewsContainer\">\r\n        <div class=\"dialogTitle\">\r\n        <h1 mat-dialog-title> تأكيد</h1>\r\n        <h4> هل أنت متأكد من إلغاء عملية الإضافة؟ </h4>\r\n      </div>\r\n        <div mat-dialog-actions class=\"DialogOptionBtn\">\r\n          \r\n          <button mat-button [mat-dialog-close]=\"confirm()\" cdkFocusInitial>نعم متأكد </button>\r\n          <button mat-button [mat-dialog-close]=\"\"  >إلغاء الأمر </button>\r\n        </div>\r\n        \r\n        </div>"

/***/ }),

/***/ "../../../../../src/app/empolyee/empolyee.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".viewProduct\r\n{\r\n    width: 25%;\r\n    height: 25%;\r\n    max-height: 250px;\r\n    max-width: 250px;\r\n    min-height: 200px;\r\n    min-width: 200px;\r\n    text-align: center;\r\n    border: 25px;\r\n    margin: 12px 0px 7px 9px;\r\n    display: inline-block;\r\n}\r\n.ViewsContainer\r\n{\r\n    margin-right: 15px;\r\n    -ms-flex-line-pack: right;\r\n    align-content: right;\r\n    -ms-flex-item-align: right;\r\n    -ms-grid-row-align: right;\r\n    align-self: right;\r\n    -webkit-box-align: right;\r\n    -ms-flex-align: right;\r\n    align-items: right;\r\n}\r\n.toolbar-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n.name\r\n{\r\n    font-size: 20px;\r\n}\r\n.OptionBtn\r\n{\r\n    margin: 0px;\r\n    width: 100%;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n}\r\nmat-toolbar mat-toolbar-row span mat-form-field\r\n{\r\n    text-align: right;\r\n    font-size: 14px;\r\n    float: right;\r\n    line-height: 2;\r\n}\r\n.Viewimg\r\n{\r\n    width: 100px;\r\n    height: 100px;\r\n    overflow-wrap: normal;\r\n    overflow: hidden;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center\r\n}\r\n.btn-Add\r\n{\r\n    float: left;\r\n}\r\n.contaner\r\n{\r\n    background-color: whitesmoke;\r\n    border-radius: 1%;\r\n    /* height: 60px;\r\n    display: flex; */\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    padding: 0 16px;\r\n    width: 100%;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    white-space: nowrap;\r\n}\r\n.PageTitle\r\n{\r\n    min-height: 60px;\r\n    width: 99%;\r\n    margin: 2% 0.5%;\r\n\r\n}\r\n.contaner div\r\n{\r\n    margin-top:2em ;\r\n    margin-bottom: 1em;\r\n}\r\n.onClick\r\n{\r\n    cursor: pointer;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/empolyee/empolyee.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <mat-card class=PageTitle>\r\n        <h2> {{ title }} </h2>\r\n\r\n        <button  mat-raised-button color=\"primary\" class=\"btn-Add\" > \r\n            <mat-icon>person_add</mat-icon>\r\n         {{AddBtn}}\r\n       \r\n        </button>\r\n      \r\n\r\n      <input  matInput type=\"search\" placeholder=\"search emp\">\r\n\r\n  </mat-card> \r\n   -->\r\n\r\n   <div  class=\"PageTitle col-md-12 col-sm-12\">\r\n        <div class=\" col-md-12 col-sm-12 contaner\" dir=\"rtl\">\r\n       \r\n        <!-- <span class=\"toolbar-spacer\"></span> -->\r\n        <div  class=\" col-md-4 col-sm-12\" > \r\n                <button mat-button (click)=\"add()\"color=\"primary\" class='BtnPos'> <mat-icon>person_add</mat-icon>\r\n                    {{AddBtn}}</button> \r\n        </div>\r\n\r\n\r\n\r\n        <div   class=\" col-md-4 col-sm-12\" > \r\n                <span color=\"primary\">   <h2  class='title'> {{ title }} </h2> </span>\r\n             \r\n        </div> \r\n\r\n        <div class=\"col-md-4 col-sm-12\"  >\r\n            \r\n        </div>\r\n   \r\n        </div>\r\n        </div>\r\n<div class=\" col-md-12 col-sm-12\">\r\n    <flash-messages></flash-messages>\r\n</div>\r\n  <section class=\"ViewsContainer\"  >\r\n  \r\n  <mat-card class=\"viewProduct\"  *ngFor=\"let employee of employeeList\" >\r\n       <button  mat-button (click)=\"viewEmployee(employee)\" class=\"Viewimg\" >\r\n         <img (click)=\"viewemployee(employee)\" mat-card-image  src={{employee.picPATH}} \r\n         alt={{employee.firstName}} > </button> \r\n      <mat-card-content (click)=\"viewemployee(employee)\" role=\"group\" >\r\n       <h3 class=\"name\">{{employee.firstName }} {{employee.lastName}}</h3> \r\n      </mat-card-content> \r\n      <div>\r\n      <button mat-button (click)=\"viewemployee(employee)\" class=\"OptionBtn\"> <mat-icon> description </mat-icon> عرض البيانات</button>\r\n     \r\n      </div>\t\r\n  </mat-card>\r\n  \r\n  </section>\r\n  \r\n  "

/***/ }),

/***/ "../../../../../src/app/empolyee/empolyee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpolyeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_employee_service__ = __webpack_require__("../../../../../src/app/empolyee/shared/employee.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmpolyeeComponent = /** @class */ (function () {
    function EmpolyeeComponent(router, employeeService) {
        this.router = router;
        this.employeeService = employeeService;
        this.title = "الموظفين";
        this.AddBtn = "إضافة موظف  ";
    }
    EmpolyeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = this.employeeService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.employeeList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                _this.employeeList.push(y);
                _this.num++;
            });
        });
    };
    EmpolyeeComponent.prototype.viewemployee = function (employee) {
        var id = employee.$key;
        this.router.navigate(['mainPage/View_employee/', id]);
    };
    EmpolyeeComponent.prototype.add = function () {
        this.router.navigate(['mainPage/Add_employee']);
    };
    EmpolyeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-empolyee',
            template: __webpack_require__("../../../../../src/app/empolyee/empolyee.component.html"),
            styles: [__webpack_require__("../../../../../src/app/empolyee/empolyee.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_employee_service__["a" /* EmployeeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__shared_employee_service__["a" /* EmployeeService */]])
    ], EmpolyeeComponent);
    return EmpolyeeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/empolyee/shared/employee.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());



/***/ }),

/***/ "../../../../../src/app/empolyee/shared/employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_model__ = __webpack_require__("../../../../../src/app/empolyee/shared/employee.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EmployeeService = /** @class */ (function () {
    function EmployeeService(authService, afAuth, firebase, router, db) {
        this.authService = authService;
        this.afAuth = afAuth;
        this.firebase = firebase;
        this.router = router;
        this.db = db;
        this.selectedEmployee = new __WEBPACK_IMPORTED_MODULE_2__employee_model__["a" /* Employee */]();
    }
    EmployeeService.prototype.getData = function () {
        this.employeeList = this.firebase.list(window.name + '/employees');
        return this.employeeList;
    };
    EmployeeService.prototype.insert = function (employee, path, fileName) {
        /* */
        //start genrat password
        var passArray = [];
        var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var specialCharacters = ['!', '#', '$', '&', '/', '?'];
        var conecter = lower;
        conecter = conecter.concat(upper);
        conecter = conecter.concat(num);
        conecter = conecter.concat(specialCharacters);
        for (var i = 1; i < 9; i++) {
            passArray.push(conecter[Math.floor(Math.random() * conecter.length)]);
        }
        ;
        employee.password = passArray.join("");
        //end genrat password
        if (path == 'none') {
            employee.picPATH = 'https://firebasestorage.googleapis.com/v0/b/erad-system.appspot.com/o/defaultEmployee.jpg?alt=media&token=ddf714e2-bf10-43ac-a575-75a52fde307e';
            employee.picName = 'defaultEmployee.jpg';
        }
        else {
            employee.picPATH = path;
            employee.picName = fileName;
        }
        if (employee.phone == '') {
            employee.phone = 'لا يوجد رقم';
        }
        if (employee.salary == null) {
            employee.salary = 0;
        }
        var x = this.authService.register(employee.email, employee.password, employee.firstName, employee.lastName, employee.phone, employee.salary, employee.picPATH, employee.picName);
        this.sendMail(employee);
    };
    EmployeeService.prototype.sendMail = function (employee) {
        var request = __webpack_require__("../../../../request/index.js");
        var name = employee.firstName + " " + employee.lastName;
        var q = {
            method: 'POST',
            url: 'https://api.sendinblue.com/v3/smtp/templates/4/send',
            body: {
                sender: { email: 'eradsystem2018@gmail.com' },
                emailTo: [employee.email],
                attributes: { 'NAME': name, 'COMPANY': window.name, 'USERNAME': employee.email, 'PASSWORD': employee.password },
            },
            json: true,
            headers: { 'api-key': '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' }
        };
        request(q, function (error, response, body) {
            if (error)
                throw new Error(error);
        });
    };
    EmployeeService.prototype.delete = function (employee) {
        if (confirm("هل انت متأكد من تسريح الموظف")) {
            this.employeeList.remove(employee.$key);
            if (employee.picName != 'defaultEmployee.jpg') {
                var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
                storageRef.child(employee.picName).delete();
            }
            this.router.navigate(['mainPage/empolyee']);
        }
    };
    EmployeeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__core_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "../../../../../src/app/empolyee/view-emp/confirm-Message-emp.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ViewsContainer\">\r\n        <div class=\"dialogTitle\">\r\n        <h1 mat-dialog-title> تسرح موظف</h1>\r\n        <h4> هل أنت متأكد من تسرح هذا الموظف؟ </h4>\r\n      </div>\r\n        <div mat-dialog-actions class=\"DialogOptionBtn\">\r\n          \r\n          <button mat-button [mat-dialog-close]=\"confirm()\" cdkFocusInitial>تسريح </button>\r\n          <button mat-button [mat-dialog-close]=\"\"  >إلغاء الأمر </button>\r\n        </div>\r\n        \r\n        </div>"

/***/ }),

/***/ "../../../../../src/app/empolyee/view-emp/update-Salary.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ViewsContainer\">\r\n    <div class=\"dialogTitle\">\r\n    <h1 mat-dialog-title> تعديل راتب الموظف {{data.name}}</h1>\r\n    <h2>  الراتب الحالي للموظف {{data.salary}} ريال</h2>\r\n    <div mat-dialog-content>\r\n      <mat-form-field>\r\n        <input matInput  type=\"number\" [(ngModel)]=\"newSalary\" min=\"0\">\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n    <div mat-dialog-actions class=\"DialogOptionBtn\">\r\n      \r\n      <button mat-button [mat-dialog-close]=\"addquantity(newSalary,data.salary)\" cdkFocusInitial>تعديل </button>\r\n      <button mat-button [mat-dialog-close]=\"data.salary\"  >إلغاء الأمر </button>\r\n    </div>\r\n    \r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/empolyee/view-emp/view-emp.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-card {\r\n    max-width: 90%;\r\n    margin-right: 5%;\r\n    margin-top: 5%;\r\n    margin-left: 5%;\r\n    margin-bottom: 20%\r\n\r\n  }\r\n  \r\n  .example-header-image {\r\n    /* background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg'); */\r\n    background-size: cover;\r\n\r\n  }\r\n  \r\n  .greenBtn\r\n  { \r\n      \r\n      background-color: #4989A5;\r\n    \r\n  }\r\n  \r\n  .blueBtn\r\n  {\r\n  \r\n      background-color: #6Dc4e2; \r\n  \r\n  }\r\n  \r\n  .greyBtn\r\n  {\r\n      background-color:#A8A8A8;\r\n  \r\n  }\r\n  \r\n  .lightBlueBtn\r\n  {\r\n    background-color:#9DE4F4\r\n  }\r\n  \r\n  .goBack\r\n  {\r\n    color: #4989A5;\r\n    font-size: 0.8em;\r\n    margin: 0;\r\n  }\r\n  \r\n  .title\r\n  {\r\n    font-size: 2.4em;\r\n    margin: 0;\r\n  }\r\n  \r\n  .Btns\r\n  {\r\n      color:white;\r\n      height: 3em;\r\n     \r\n      width: 12em;\r\n      margin: 1em !important;\r\n  }\r\n  \r\n  .info\r\n  {\r\n     \r\n    color: #6Dc4e2;\r\n    font-size: 1em;\r\n  }\r\n  \r\n  .header{\r\n      float: right;\r\n      font-size: 1.5em;\r\n }\r\n  \r\n  .Imgheader\r\n    {\r\n\r\n    font-size: 1.5em;  \r\n    }\r\n  \r\n  img\r\n  {\r\n      width: 100% !important;\r\n      height: 100% !important;\r\n  }\r\n  \r\n  table\r\n  {\r\n      text-align: right;\r\n      width: 100%;\r\n  }\r\n  \r\n  .dialogTitle , .DialogOptionBtn\r\n  {\r\n    display: -ms-inline-grid;;\r\n    direction: rtl;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n}\r\n  \r\n  .ViewsContainer\r\n{\r\n    margin-right:15px; \r\n    -ms-flex-line-pack: center; \r\n        align-content: center;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n  \r\n  .PageTitle\r\n{\r\n    width: auto;\r\n    margin: 15px;\r\n    height: 40px;\r\n}\r\n  \r\n  .PageTitle span h2\r\n{\r\n    font-size: 22px;\r\n    margin: 0px;\r\n}\r\n  \r\n  mat-card-title {\r\n    font-size: 30px;\r\n}\r\n  \r\n  mat-toolbar mat-toolbar-row span mat-form-field\r\n{\r\n    text-align: right;\r\n    font-size: 14px;\r\n    float: right;\r\n    line-height: 2;\r\n}\r\n  \r\n  .toolbar-spacer {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n  }\r\n  \r\n  b{\r\n     font-size: 22px;\r\n }\r\n  \r\n  h5 {\r\n      margin-right: 20px;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/empolyee/view-emp/view-emp.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar   style=\"background-color:transparent\">\r\n        <mat-toolbar-row>\r\n    <span class=\"primary\">\r\n        <a  (click)=\"gobacktoProducts()\">  <p class='goBack' >الذهاب إلى عرض الموظفين </p></a> \r\n    </span>\r\n    </mat-toolbar-row>\r\n    <mat-toolbar-row>\r\n    <span class=\"toolbar-spacer\"></span>\r\n     <h2 class=\"title\"> {{ title }} {{employee.firstName}} {{employee.lastName}}</h2> \r\n    <span class=\"toolbar-spacer\"></span>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<flash-messages></flash-messages>\r\n\r\n<mat-card class=\"example-card\" >\r\n    <mat-card-content>\r\n        <div class=\"col-md-12\" dir=\"rtl\" >\r\n        <div class='col-md-9   col-sm-8 '>\r\n                \r\n       \r\n        <div class='col-md-12 '> \r\n              <h5 class='header'> البريد الألكتروني:   <span class='info'> {{employee.email}} </span>  </h5> \r\n        </div> \r\n        \r\n        <div class='col-md-12'> \r\n                <h5 class='header'> الجوال:    <span class='info'>  {{employee.phone}}  </span> </h5>\r\n         </div>\r\n       \r\n         <div class='col-md-12'> \r\n                <h5 class='header'> الراتب بالساعة : <span class='info' > {{employee.salary}}ر.س   </span>  </h5>\r\n         </div>\r\n        </div>\r\n        <div class='col-md-3  col-sm-4' >\r\n            \r\n                <div  class=\"example-header-image\"><img src={{employee.picPATH}}></div>\r\n                <br>\r\n                <h5 class=\"Imgheader\">{{employee.firstName}} {{employee.lastName}}</h5>\r\n                <br>\r\n                          \r\n              </div>\r\n    </div>\r\n                \r\n        </mat-card-content>\r\n<div>\r\n        <button mat-raised-button class= \"Btns blueBtn\" (click)= \"empSales()\"> تقرير مبيعات الموظف  </button> \r\n        <button mat-raised-button class= \"Btns lightBlueBtn\" (click)= \"empHours()\">   تقرير ساعات العمل  </button> \r\n        <button mat-raised-button  class='Btns greenBtn' (click)=\"openDialog(true)\" > تعديل راتب الموظف </button>  \r\n        <button mat-raised-button  class='Btns greyBtn' (click)=\"openDialog(false)\" >تسريح الموظف  </button> \r\n    </div>\r\n\r\n  </mat-card>\r\n  "

/***/ }),

/***/ "../../../../../src/app/empolyee/view-emp/view-emp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewEmpComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updateSalary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return confirmMessageEmp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


//import 'rxjs/add/operator/switchMap';
//import { Observable } from 'rxjs/Observable';




var ViewEmpComponent = /** @class */ (function () {
    function ViewEmpComponent(route, router, flashMensaje, dialog, firebase) {
        this.route = route;
        this.router = router;
        this.flashMensaje = flashMensaje;
        this.dialog = dialog;
        this.firebase = firebase;
        //employeeList: Employee[];
        this.title = 'بيانات ';
    }
    /*name:String="أحمد الصالح ";
    Id:String="MyID!";
    Email:string="aa@aa.a";
    phone:any=7474;
    img:any='https://material.angular.io/assets/img/examples/shiba1.jpg';
    salary:number=5000;*/
    ViewEmpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.temp = this.route.snapshot.params.id;
        this.firebase.object(window.name + '/employees/' + this.temp).snapshotChanges().subscribe(function (ob) {
            var x = ob.payload.toJSON();
            x["$key"] = ob.key;
            _this.employee = x;
        });
    };
    ViewEmpComponent.prototype.delete = function () {
        var _this = this;
        var s = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(window.name + '/employees');
        s.child(this.temp).remove().then(function (res) {
            if (_this.employee.picName != 'defaultEmployee.jpg') {
                var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
                storageRef.child(_this.employee.picName).delete();
            }
            _this.router.navigate(['mainPage/empolyee']).then(function (res) {
                _this.flashMensaje.show('تم تسريح الموظف بنجاح.', { cssClass: 'alert-success', timeout: 100000,
                    closeOnClick: true, showCloseBtn: true });
            });
        });
    };
    ViewEmpComponent.prototype.openDialog = function (check) {
        var _this = this;
        if (check) {
            var dialogRef = this.dialog.open(updateSalary, {
                data: { name: this.employee.firstName, salary: this.employee.salary }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result) {
                    var s = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(window.name + '/employees');
                    s.child(_this.temp).update({ salary: result });
                    if (result > _this.salary) {
                        _this.salary = result;
                        _this.flashMensaje.show('تم تعديل راتب الموظف بنجاح.', { cssClass: 'alert-success', timeout: 100000,
                            closeOnClick: true, showCloseBtn: true });
                    }
                }
            });
        }
        else {
            var dialogRef = this.dialog.open(confirmMessageEmp, {
                data: { message: this.employee.firstName }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result == true) {
                    _this.delete();
                }
            });
        }
    };
    ViewEmpComponent.prototype.gobacktoProducts = function () {
        this.router.navigate(['mainPage/empolyee']);
    };
    ViewEmpComponent.prototype.empSales = function () {
        var id = this.temp;
        this.router.navigate(['mainPage/Employee sales/', id]);
    };
    ViewEmpComponent.prototype.empHours = function () {
        var id = this.temp;
        this.router.navigate(['mainPage/Employee working report/', id]);
    };
    ViewEmpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-emp',
            template: __webpack_require__("../../../../../src/app/empolyee/view-emp/view-emp.component.html"),
            styles: [__webpack_require__("../../../../../src/app/empolyee/view-emp/view-emp.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ViewEmpComponent);
    return ViewEmpComponent;
}());

var updateSalary = /** @class */ (function () {
    function updateSalary(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    updateSalary.prototype.addquantity = function (newSalary, salary) {
        return newSalary;
    };
    updateSalary = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'update-salary',
            template: __webpack_require__("../../../../../src/app/empolyee/view-emp/update-Salary.html"),
            styles: [__webpack_require__("../../../../../src/app/empolyee/view-emp/view-emp.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialogRef */], Object])
    ], updateSalary);
    return updateSalary;
}());

var confirmMessageEmp = /** @class */ (function () {
    function confirmMessageEmp(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    confirmMessageEmp.prototype.confirm = function () {
        return true;
    };
    confirmMessageEmp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'confirm-message-emp',
            template: __webpack_require__("../../../../../src/app/empolyee/view-emp/confirm-Message-emp.html"),
            styles: [__webpack_require__("../../../../../src/app/empolyee/view-emp/view-emp.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialogRef */], Object])
    ], confirmMessageEmp);
    return confirmMessageEmp;
}());



/***/ }),

/***/ "../../../../../src/app/expenses/expenses.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\r\n    min-width: 150px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  \r\n  .formContainer\r\n  {\r\n    font-family: 'Amiri' !important;\r\n      margin: 1% 2%;\r\n      -ms-flex-item-align: center;\r\n          -ms-grid-row-align: center;\r\n          align-self: center; \r\n      \r\n  }\r\n  \r\n  td mat-form-field\r\n  {\r\n  \r\n    text-align: right;\r\n    font-size: 18px;\r\n    float: right;\r\n    line-height: 2;\r\n  }\r\n  \r\n  input[type=\"number\"]::-webkit-outer-spin-button,\r\ninput[type=\"number\"]::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n  \r\n  input[type=\"number\"] {\r\n    -moz-appearance: textfield;\r\n}\r\n  \r\n  .blueBtn\r\n{\r\n\r\n    background-color: #6Dc4e2; \r\n\r\n}\r\n  \r\n  .greyBtn\r\n{\r\n    background-color:#A8A8A8;\r\n\r\n}\r\n  \r\n  .Btns\r\n{\r\n    color:white;\r\n    height: 3em;\r\n   \r\n    width: 12em;\r\n    margin: 1em !important;\r\n}\r\n  \r\n  table\r\n {\r\n\r\n     width: 100%;\r\n }\r\n  \r\n  td button\r\n {\r\n   width: 100%;\r\n   height: 100%;\r\n   float: centre;\r\n }\r\n  \r\n  td mat-form-field app-input-file\r\n  {\r\n    float: right;\r\n    text-indent: 1.5px;\r\n    text-align: right;\r\n    font-size: 18px;\r\n  }\r\n  \r\n  div {\r\n    text-align: right;\r\n  }\r\n  \r\n  .red{\r\n    color: red;\r\n  }\r\n  \r\n  span {\r\n    font-size: 15px !important;\r\n  }\r\n  \r\n  .PageTitle\r\n  {\r\n      margin: 15px;\r\n      height: 40px;\r\n  }\r\n  \r\n  .PageTitle h2\r\n  {\r\n      margin: 0px;\r\n  }\r\n  \r\n  .toolbar-spacer {\r\n      -webkit-box-flex: 1;\r\n          -ms-flex: 1 1 auto;\r\n              flex: 1 1 auto;\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/expenses/expenses.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar  class=\"PageTitle\">\r\n\r\n    <mat-toolbar-row>\r\n      \r\n          <span class=\"toolbar-spacer\"></span>\r\n    \r\n    <span color=\"primary\">   <h2>  {{title}}  </h2> </span>\r\n    \r\n    <span class=\"toolbar-spacer\"></span>\r\n    \r\n    \r\n    </mat-toolbar-row>\r\n    </mat-toolbar>\r\n    \r\n<mat-card class=\"formContainer\" >\r\n  <flash-messages></flash-messages>\r\n<mat-card-content>\r\n\r\n  <form  #expensesForm=\"ngForm\" (ngSubmit)=\"onSubmit(expensesForm)\" dir=\"rtl\">\r\n\r\n   <input type=\"hidden\" name=\"$key\" #$key=\"ngModel\" [(ngModel)]=\"expenses.$key\">\r\n   \r\n\r\n   \r\n   <div class=\"row\">\r\n   <div class=\"form-group col-md-3 col-sm-12\">\r\n    <mat-form-field>\r\n      <mat-select  name=\"month\" #month=\"ngModel\"         \r\n        placeholder=\"الشهر\"\r\n        [(ngModel)]='expenses.month'\r\n        >\r\n        <mat-option *ngFor=\"let month of months\" [value]=\" month \">\r\n          {{month}}\r\n        </mat-option>\r\n        </mat-select>\r\n</mat-form-field>\r\n\r\n<mat-form-field>\r\n  <mat-select  name=\"year\" #year=\"ngModel\"         \r\n    placeholder=\"السنة\"\r\n    [(ngModel)]='expenses.year'\r\n    >\r\n    <mat-option *ngFor=\"let year of years\" [value]=\" year \">\r\n      {{year}}\r\n    </mat-option>\r\n    </mat-select>\r\n</mat-form-field>\r\n</div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n    <div class=\"form-group col-md-6 col-sm-12\">\r\n      <label > <h4> مجموع المصروفات الشهرية \r\n        <span>(إجار المحل, فاتورة الكهرب, فاتورة الماء,...)</span> </h4> </label>\r\n         \r\n \r\n        <input matInput type=\"number\" name=\"expenses\" #expenses=\"ngModel\" placeholder=\"مثال: 2000\"\r\n        [(ngModel)]=\"expenses.expenses\" class=\"form-control\" pattern=\"[0-9]*\" required>\r\n  \r\n\r\n\r\n      <div *ngIf=\"expenses.errors && (expenses.dirty || expenses.touched)\"  class=\"alert alert-danger\">\r\n        <div [hidden]=\"!expenses.errors.required\">*يرجى إدخال المصروفات الشهرية</div>  \r\n        <div [hidden]=\"!expenses.errors.pattern\">*يرجى إدخال أرقام صحيحة فقط</div>\r\n    </div>\r\n    </div>    \r\n    </div>\r\n    \r\n    <div class=\"row\">\r\n      <button  mat-raised-button class=\"Btns  blueBtn\"  type=\"submit\"\r\n      [disabled]=\"!expensesForm.valid\">\r\n          إضافة</button>\r\n        </div>\r\n        </form>\r\n\r\n      \r\n        </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/expenses/expenses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpensesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expenses_model__ = __webpack_require__("../../../../../src/app/expenses/expenses.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExpensesComponent = /** @class */ (function () {
    function ExpensesComponent(fb, flashMensaje) {
        this.fb = fb;
        this.flashMensaje = flashMensaje;
        this.expenses = new __WEBPACK_IMPORTED_MODULE_2__expenses_model__["a" /* Expenses */];
        this.months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        this.years = [(new Date).getFullYear()];
        this.exp = false;
        this.title = 'مصروفات أخرى';
    }
    ExpensesComponent.prototype.ngOnInit = function () {
    };
    ExpensesComponent.prototype.onSubmit = function (expensesForm) {
        var _this = this;
        this.expenses = expensesForm.value;
        var d1 = new Date(this.expenses.year, this.expenses.month, 1);
        d1.setDate(d1.getDate() - 1);
        var date = this.expenses.month + '-' + this.expenses.year;
        __WEBPACK_IMPORTED_MODULE_3_firebase_app__["database"]().ref(window.name + '/manager').child('xExpenses').child(date).set({
            expenses: (this.expenses.expenses / (d1.getDate()))
        }).then(function (res) {
            _this.resetForm(expensesForm);
            _this.flashMensaje.show('تم إضافة المصاريف بنجاح.', { cssClass: 'alert-success', timeout: 100000,
                closeOnClick: true, showCloseBtn: true });
        });
    };
    ExpensesComponent.prototype.resetForm = function (expensesForm) {
        if (expensesForm != null) {
            expensesForm.reset();
        }
        this.expenses = {
            $key: null,
            month: '',
            year: '',
            expenses: 0
        };
    };
    ExpensesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-expenses',
            template: __webpack_require__("../../../../../src/app/expenses/expenses.component.html"),
            styles: [__webpack_require__("../../../../../src/app/expenses/expenses.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], ExpensesComponent);
    return ExpensesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/expenses/expenses.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Expenses; });
var Expenses = /** @class */ (function () {
    function Expenses() {
    }
    return Expenses;
}());



/***/ }),

/***/ "../../../../../src/app/finance/finance.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\r\n    min-width: 150px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  \r\n  .formContainer\r\n  {\r\n    font-family: 'Amiri' !important;\r\n      margin: 1% 2%;\r\n      -ms-flex-item-align: center;\r\n          -ms-grid-row-align: center;\r\n          align-self: center; \r\n      \r\n  }\r\n  \r\n  .PageTitle\r\n{\r\n    margin: 15px;\r\n    height: 40px;\r\n}\r\n  \r\n  .PageTitle h2\r\n{\r\n    margin: 0px;\r\n}\r\n  \r\n  .toolbar-spacer {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n  }\r\n  \r\n  td mat-form-field\r\n  {\r\n  \r\n    text-align: right;\r\n    font-size: 18px;\r\n    float: right;\r\n    line-height: 2;\r\n  }\r\n  \r\n  input[type=\"number\"]::-webkit-outer-spin-button,\r\ninput[type=\"number\"]::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n  \r\n  input[type=\"number\"] {\r\n    -moz-appearance: textfield;\r\n}\r\n  \r\n  .blueBtn\r\n{\r\n\r\n    background-color: #6Dc4e2; \r\n\r\n}\r\n  \r\n  .greyBtn\r\n{\r\n    background-color:#A8A8A8;\r\n\r\n}\r\n  \r\n  .Btns\r\n{\r\n    color:white;\r\n    height: 3em;\r\n   \r\n    width: 12em;\r\n    margin: 1em !important;\r\n}\r\n  \r\n  table\r\n {\r\n\r\n     width: 100%;\r\n }\r\n  \r\n  td button\r\n {\r\n   width: 100%;\r\n   height: 100%;\r\n   float: centre;\r\n }\r\n  \r\n  td mat-form-field app-input-file\r\n  {\r\n    float: right;\r\n    text-indent: 1.5px;\r\n    text-align: right;\r\n    font-size: 18px;\r\n  }\r\n  \r\n  div {\r\n    text-align: right;\r\n  }\r\n  \r\n  .red{\r\n    color: red;\r\n  }\r\n  \r\n  span {\r\n    font-size: 15px !important;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/finance/finance.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar  class=\"PageTitle\">\r\n\r\n<mat-toolbar-row>\r\n  \r\n      <span class=\"toolbar-spacer\"></span>\r\n\r\n<span color=\"primary\">   <h2>  {{title}}  </h2> </span>\r\n\r\n<span class=\"toolbar-spacer\"></span>\r\n\r\n\r\n</mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n  \r\n  <mat-card class=\"formContainer\" >\r\n  <mat-card-content>\r\n  \r\n    <flash-messages></flash-messages>\r\n\r\n    <form  #financeForm=\"ngForm\" (ngSubmit)=\"onSubmit(financeForm)\" dir=\"rtl\">\r\n  \r\n     <input type=\"hidden\" name=\"$key\" #$key=\"ngModel\" [(ngModel)]=\"finance.$key\">\r\n\r\n     <div class=\"row\">\r\n        <h3>الأصول</h3>\r\n      </div>\r\n    <br>\r\n     <div class=\"row\">\r\n       <h4><b>الأصول المتداولة:</b> <span class=\"red\">* (يرجى تعبأة أحد الأصول المتداول على الأقل (الصندوق,البنك))</span> </h4> \r\n     </div>\r\n     <br>\r\n  <div class=\"row\">\r\n      <div class=\"form-group col-md-6 col-sm-12\">\r\n        <label > <h4> الصندوق \r\n          <span>(الأموال المتوفرة في اليد إن وجدت)</span> </h4> </label>\r\n           \r\n   \r\n          <input matInput type=\"number\" name=\"box\" #box=\"ngModel\" placeholder=\"مثال: 2000\"\r\n          [(ngModel)]=\"finance.box\" class=\"form-control\" pattern=\"[0-9]*\" >\r\n    \r\n  \r\n  \r\n        <div *ngIf=\"box.errors && (box.dirty || box.touched)\"  class=\"alert alert-danger\">\r\n            <!--  <div [hidden]=\"!box.errors.required\">*يرجى إدخال المصروفات الشهرية</div>  -->\r\n            <div [hidden]=\"!box.errors.pattern\">*يرجى إدخال أرقام صحيحة فقط</div>\r\n      </div>\r\n      </div>    \r\n      </div>\r\n\r\n      <div class=\"row\">\r\n          <div class=\"form-group col-md-6 col-sm-12\">\r\n            <label > <h4> البنك \r\n              <span>(الأموال المتوفرة في البنك إن وجدت)</span> </h4> </label>\r\n               \r\n       \r\n              <input matInput type=\"number\" name=\"bank\" #bank=\"ngModel\" placeholder=\"مثال: 2000\"\r\n              [(ngModel)]=\"finance.bank\" class=\"form-control\" pattern=\"[0-9]*\" >\r\n        \r\n      \r\n      \r\n            <div *ngIf=\"bank.errors && (bank.dirty || bank.touched)\"  class=\"alert alert-danger\">\r\n            <!--  <div [hidden]=\"!bank.errors.required\">*يرجى إدخال المصروفات الشهرية</div>  -->\r\n              <div [hidden]=\"!bank.errors.pattern\">*يرجى إدخال أرقام صحيحة فقط</div>\r\n          </div>\r\n          </div>    \r\n          </div>\r\n\r\n          <div class=\"row\">\r\n              <div class=\"form-group col-md-6 col-sm-12\">\r\n                <label > <h4> مدينون \r\n                  <span>(الذمم المستحقة على الغير نتيجة عمليات البيع الآجل (على الحساب) إن وجد)</span> </h4> </label>\r\n                   \r\n           \r\n                  <input matInput type=\"number\" name=\"Debtors\" #Debtors=\"ngModel\" placeholder=\"مثال: 2000\"\r\n                  [(ngModel)]=\"finance.Debtors\" class=\"form-control\" pattern=\"[0-9]*\" >\r\n            \r\n          \r\n          \r\n                <div *ngIf=\"Debtors.errors && (Debtors.dirty || Debtors.touched)\"  class=\"alert alert-danger\">\r\n                <!--  <div [hidden]=\"!Debtors.errors.required\">*يرجى إدخال المصروفات الشهرية</div>  -->\r\n                  <div [hidden]=\"!Debtors.errors.pattern\">*يرجى إدخال أرقام صحيحة فقط</div>\r\n              </div>\r\n              </div>    \r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                  <h4><b>الأصول الثابتة:</b></h4>\r\n                </div> \r\n                <br>\r\n              <div class=\"row\">\r\n                  <div class=\"form-group col-md-6 col-sm-12\">\r\n                    <label > <h4> الأصول الثابتة \r\n                      <span>(السيارات,الأثاث والمعدات...)</span> </h4> </label>\r\n                       \r\n               \r\n                      <input matInput type=\"number\" name=\"fixedAssets\" #fixedAssets=\"ngModel\" placeholder=\"مثال: 2000\"\r\n                      [(ngModel)]=\"finance.fixedAssets\" class=\"form-control\" pattern=\"[0-9]*\" >\r\n                \r\n              \r\n              \r\n                    <div *ngIf=\"fixedAssets.errors && (fixedAssets.dirty || fixedAssets.touched)\"  class=\"alert alert-danger\">\r\n                    <!--  <div [hidden]=\"!fixedAssets.errors.required\">*يرجى إدخال المصروفات الشهرية</div>  -->\r\n                      <div [hidden]=\"!fixedAssets.errors.pattern\">*يرجى إدخال أرقام صحيحة فقط</div>\r\n                  </div>\r\n                  </div>    \r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                      <h3>الخصوم</h3>\r\n                    </div>\r\n                    <br>\r\n\r\n                  <div class=\"row\">\r\n                      <div class=\"form-group col-md-6 col-sm-12\">\r\n                        <label > <h4> رأس المال <span class=\"red\">* </span></h4> </label>\r\n                           \r\n                   \r\n                          <input matInput type=\"number\" name=\"capital\" #capital=\"ngModel\" placeholder=\"مثال: 2000\"\r\n                          [(ngModel)]=\"finance.capital\" class=\"form-control\" pattern=\"[0-9]*\" required>\r\n                    \r\n                  \r\n                  \r\n                        <div *ngIf=\"capital.errors && (capital.dirty || capital.touched)\"  class=\"alert alert-danger\">\r\n                          <div [hidden]=\"!fixedAssets.errors.required\">*يرجى إدخال المصروفات الشهرية</div> \r\n                          <div [hidden]=\"!capital.errors.pattern\">*يرجى إدخال أرقام صحيحة فقط</div>\r\n                      </div>\r\n                      </div>    \r\n                      </div>\r\n\r\n                    \r\n                      <div class=\"row\">\r\n                          <div class=\"form-group col-md-6 col-sm-12\">\r\n                            <label > <h4>القروض طويلة الأجل </h4> </label>\r\n                               \r\n                       \r\n                              <input matInput type=\"number\" name=\"Loans\" #Loans=\"ngModel\" placeholder=\"مثال: 2000\"\r\n                              [(ngModel)]=\"finance.Loans\" class=\"form-control\" pattern=\"[0-9]*\" >\r\n                        \r\n                      \r\n                      \r\n                            <div *ngIf=\"Loans.errors && (Loans.dirty || Loans.touched)\"  class=\"alert alert-danger\">\r\n                            <!--  <div [hidden]=\"!Loans.errors.required\">*يرجى إدخال المصروفات الشهرية</div>  -->\r\n                              <div [hidden]=\"!Loans.errors.pattern\">*يرجى إدخال أرقام صحيحة فقط</div>\r\n                          </div>\r\n                          </div>    \r\n                          </div>\r\n\r\n                          <div class=\"row\">\r\n                              <div class=\"form-group col-md-6 col-sm-12\">\r\n                                <label > <h4> مدينون \r\n                                  <span>(الذمم المستحقة على الغير نتيجة عمليات اخرى غير البيع الآجل وتقديم الخدمات, كمنح السلف للموظفين, والذمم المستحقة على الدولة من ضرائب مرتجعة... إن وجد)</span> </h4> </label>\r\n                                   \r\n                           \r\n                                  <input matInput type=\"number\" name=\"creditors\" #creditors=\"ngModel\" placeholder=\"مثال: 2000\"\r\n                                  [(ngModel)]=\"finance.creditors\" class=\"form-control\" pattern=\"[0-9]*\" >\r\n                            \r\n                          \r\n                          \r\n                                <div *ngIf=\"creditors.errors && (creditors.dirty || creditors.touched)\"  class=\"alert alert-danger\">\r\n                                <!--  <div [hidden]=\"!creditors.errors.required\">*يرجى إدخال المصروفات الشهرية</div>  -->\r\n                                  <div [hidden]=\"!creditors.errors.pattern\">*يرجى إدخال أرقام صحيحة فقط</div>\r\n                              </div>\r\n                              </div>    \r\n                              </div>\r\n\r\n                          \r\n      \r\n      <div class=\"row\">\r\n        <button  mat-raised-button class=\"Btns  blueBtn\"  type=\"submit\"\r\n        [disabled]=\"!financeForm.valid\">\r\n            إضافة</button>\r\n          </div>\r\n          </form>\r\n  \r\n        \r\n          </mat-card-content>\r\n  </mat-card>"

/***/ }),

/***/ "../../../../../src/app/finance/finance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__finance_model__ = __webpack_require__("../../../../../src/app/finance/finance.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FinanceComponent = /** @class */ (function () {
    function FinanceComponent(fb, flashMensaje, firebase) {
        this.fb = fb;
        this.flashMensaje = flashMensaje;
        this.firebase = firebase;
        this.title = 'الأصول والخصوم';
        this.finance = new __WEBPACK_IMPORTED_MODULE_4__finance_model__["a" /* Finance */];
    }
    FinanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebase.object(window.name + '/manager/xFinance').snapshotChanges().subscribe(function (ob) {
            var x = ob.payload.toJSON();
            x["$key"] = ob.key;
            _this.finance = x;
        });
    };
    FinanceComponent.prototype.onSubmit = function (financeForm) {
        var _this = this;
        this.finance = financeForm.value;
        if (!this.finance.bank && !this.finance.box) {
            this.flashMensaje.show('(يرجى إدخال أحد الأصول المتداول على الأقل (الصندوق,البنك.', { cssClass: 'alert-danger', timeout: 100000,
                closeOnClick: true, showCloseBtn: true });
        }
        else {
            if (!this.finance.Debtors) {
                this.finance.Debtors = 0;
            }
            if (!this.finance.fixedAssets) {
                this.finance.fixedAssets = 0;
            }
            if (!this.finance.loans) {
                this.finance.loans = 0;
            }
            if (!this.finance.creditors) {
                this.finance.creditors = 0;
            }
            if (!this.finance.bank) {
                this.finance.bank = 0;
            }
            if (!this.finance.box) {
                this.finance.box = 0;
            }
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]().ref(window.name + '/manager').child('xFinance').set({
                box: this.finance.box,
                bank: this.finance.bank,
                Debtors: this.finance.Debtors,
                fixedAssets: this.finance.fixedAssets,
                capital: this.finance.capital,
                Loans: this.finance.loans,
                creditors: this.finance.creditors
            }).then(function (res) {
                _this.flashMensaje.show('تمت العملية بنجاح.', { cssClass: 'alert-success', timeout: 100000,
                    closeOnClick: true, showCloseBtn: true });
            });
        }
    };
    FinanceComponent.prototype.resetForm = function (financeForm) {
        if (financeForm != null) {
            financeForm.reset();
        }
        this.finance = {
            $key: null,
            box: 0,
            bank: 0,
            Debtors: 0,
            fixedAssets: 0,
            capital: 0,
            loans: 0,
            creditors: 0
        };
    };
    FinanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-finance',
            template: __webpack_require__("../../../../../src/app/finance/finance.component.html"),
            styles: [__webpack_require__("../../../../../src/app/finance/finance.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FinanceComponent);
    return FinanceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/finance/finance.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Finance; });
var Finance = /** @class */ (function () {
    function Finance() {
    }
    return Finance;
}());



/***/ }),

/***/ "../../../../../src/app/finance/show-finance/show-finance.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/finance/show-finance/show-finance.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  show-finance works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/finance/show-finance/show-finance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowFinanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowFinanceComponent = /** @class */ (function () {
    function ShowFinanceComponent() {
    }
    ShowFinanceComponent.prototype.ngOnInit = function () {
    };
    ShowFinanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-show-finance',
            template: __webpack_require__("../../../../../src/app/finance/show-finance/show-finance.component.html"),
            styles: [__webpack_require__("../../../../../src/app/finance/show-finance/show-finance.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShowFinanceComponent);
    return ShowFinanceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, afAuth, authService) {
        this.router = router;
        this.afAuth = afAuth;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.afAuth.authState
            .take(1)
            .map(function (authState) { return !!authState; })
            .do(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['']);
            }
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.example-container {\r\n  width: 100%;\r\n  height:  -webkit-fill-available;\r\n  height:  -moz-available;\r\n  height:  stretch;\r\n  height: 45px;\r\n    min-height: 25px;\r\n\r\n}\r\nmat-expansion-panel\r\n{\r\ntext-indent: 2px;\r\npadding:0px;\r\nmargin: 0px;\r\n}\r\nmat-expansion-panel-header\r\n{\r\npadding-right: 0px;\r\nmargin-right: 0px;\r\nfont-weight: 500;\r\n}\r\nbody \r\n{\r\ndirection: rtl;\r\nfloat: right;\r\nfont-family:'Amiri', serif;\r\n}\r\n.rightcontiner\r\n{\r\nmargin-right: 3\r\n}\r\n.sideNItemav\r\n{\r\n  \r\nline-height: 2;\r\n}\r\n.example-header-image\r\n{\r\ndisplay: block;\r\n-ms-flex-line-pack: center;\r\n    align-content: center;\r\n-ms-flex-item-align: center;\r\n    -ms-grid-row-align: center;\r\n    align-self: center;\r\ntext-align: center;\r\nheight: 45px;\r\n}\r\n.img-logo\r\n{\r\ndisplay: block;\r\n-ms-flex-line-pack: center;\r\n    align-content: center;\r\n-ms-flex-item-align: center;\r\n    -ms-grid-row-align: center;\r\n    align-self: center;\r\ntext-align: center;\r\n/* margin-top: 1em;\r\nborder-top: 0.2em solid #a8a8a8; */\r\n/* border-top: 0.2em solid #6dc4e2; */\r\npadding: 20px 0px;\r\n\r\n}\r\n.hello\r\n{\r\n  font-weight: 600;\r\n  margin-bottom: 0em;\r\n  margin-top: 1em;\r\n  font-size: 1em;\r\n  color:#A8A8A8;\r\n \r\n}\r\n.example-header-image img\r\n{\r\n  width: 45px;\r\n  height: 45px;\r\n}\r\n.example-sidenav-content {\r\n  display: block;\r\n  height: -webkit-fill-available;\r\n  /* width:90%;  */\r\n  -webkit-box-align: right;\r\n      -ms-flex-align: right;\r\n          align-items: right;\r\n  -webkit-box-pack: right;\r\n      -ms-flex-pack: right;\r\n          justify-content: right;\r\n  /* margin-right:240px; */\r\n}\r\n.mat-sidenav\r\n{\r\n\r\n    -webkit-transform: translate3d(+100,0,0);\r\n\r\n            transform: translate3d(+100,0,0);\r\n}\r\n.primary\r\n{\r\n\r\n  background-color:#484848    ;\r\n  /* #90caf9; */\r\n}\r\nmat-sidenav mat-nav-list mat-accordion  mat-expansion-panel  mat-expansion-panel-header mat-panel-title , \r\nmat-sidenav mat-nav-list mat-accordion  mat-expansion-panel a \r\n{\r\n  color: #A8A8A8;\r\n  font-weight: 800;\r\n  font-size: 16px;\r\n}\r\nmat-sidenav mat-nav-list mat-accordion  mat-expansion-panel  mat-expansion-panel-header mat-panel-title mat-icon ,\r\nmat-sidenav mat-nav-list mat-accordion  mat-expansion-panel a mat-icon ,\r\nmat-icon \r\n{\r\n  color: #6dc4e2 !important;\r\n}\r\n.mat-drawer-transition .mat-drawer-content\r\n{\r\n  margin-right: 190px;\r\n  margin-left: 0px;\r\n}\r\n.logoImg\r\n{\r\n  border-radius: 45%;\r\n}\r\n.example-sidenav {\r\n  /* width: 100%; */\r\n  height: 750px;\r\n  padding: 0px;\r\n  -webkit-box-align: right;\r\n      -ms-flex-align: right;\r\n          align-items: right;\r\n  -webkit-box-pack: right;\r\n      -ms-flex-pack: right;\r\n          justify-content: right;\r\n}\r\n.demo-panel {\r\n  margin: 10px 0px;\r\n}\r\n.demo-panel {\r\n  margin: 10px 0px;\r\n}\r\n.toolbar-icon {\r\n  padding: 0px 30px;\r\n}\r\n.toolbar-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n.example-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n.example-is-mobile .example-toolbar {\r\n  position: fixed;\r\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n  z-index: 2;\r\n}\r\nh1.example-app-name {\r\n  margin-left: 8px;\r\n}\r\n.example-sidenav-container {\r\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n.example-is-mobile .example-sidenav-container {\r\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n     `<body>` to be our scrolling element for mobile layouts. */\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 0 auto;\r\n          flex: 1 0 auto;\r\n}\r\nimg.rounded-circle{\r\n  width: 45px;\r\n  height: 45px;\r\n}\r\nsize1 {\r\n  color: #6dc4e2;\r\n  font-size: 9px;\r\n  \r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <mat-sidenav-container color=\"accent\" class=\"example-sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 0 : 0\">\r\n     \r\n    <mat-sidenav  color=\"accent\" class=\"mat-sidenav primary\"  #snav [mode]=\"mobileQuery.matches ? 'push' : 'side'\" [opened]=\"mobileQuery.matches ? 'false':'true'\"\r\n  [fixedInViewport]=\"mobileQuery.matches\" >\r\n  <!-- fixedTopGap=\"56\"> -->\r\n    <mat-nav-list  >\r\n\r\n        <span>\r\n            <div class=\"example-header-image\">\r\n              <img src='assets/imgs/EradLogo++2.png'> \r\n              <img src='assets/imgs/EradLogo++1.png'></div> \r\n        </span>\r\n\r\n\r\n\r\n        <div class=\"img-logo\">\r\n            <div >\r\n              <img src=\"{{manager[8]}}\" class=\"rounded-circle logoImg\">\r\n            </div> \r\n            <div>\r\n            <a routerLink=\"manager\" ><p class=\"hello\"> مرحبا بك {{manager[3]}} {{manager[4]}}</p> </a>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- <div class=\"example-header-image\"><img src='assets/imgs/EradLogo++1.png'></div> -->\r\n      <mat-accordion color=\"accent\" >\r\n          <mat-expansion-panel  [hideToggle]='true' class=\"primary\" [style.border-right]=\"EmpState ?  '5px solid   #6dc4e2': '' \" \r\n          (opened)=\"EmpState = true\"\r\n          (closed)=\"EmpState = false\"\r\n          [style.box-shadow]=\"true ? '0 0 0 ':'0 0 0 ' \"          >\r\n            <mat-expansion-panel-header >\r\n              <mat-panel-title>\r\n                  <mat-icon>supervisor_account </mat-icon> <span>الموظفين </span>\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <a mat-list-item routerLink=\"empolyee\" >  <mat-icon>supervisor_account </mat-icon> <span>عرض الموظفين   </span></a>\r\n            <a mat-list-item routerLink=\"Add_employee\" >  <mat-icon>add </mat-icon> <span>إضافة موظف جديد  </span></a>\r\n          </mat-expansion-panel>\r\n\r\n      \r\n        <mat-expansion-panel \r\n        [hideToggle]='true'\r\n        class=\"primary\" [style.border-right]=\"ProdState ?  '5px solid   #6dc4e2': '' \" \r\n        (opened)=\"ProdState = true\"\r\n        (closed)=\"ProdState = false\"\r\n        [style.box-shadow]=\"true ? '0 0 0 ':'0 0 0 ' \">\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                  <mat-icon> shopping_basket </mat-icon> <span>المنتجات  </span>\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n              <a mat-list-item routerLink=\"product\" >  <mat-icon>shopping_basket </mat-icon> <span>عرض المنتجات    </span></a>\r\n              <a mat-list-item routerLink=\"Add_Product/:id\" >  <mat-icon>add </mat-icon> <span>إضافة منتج جديد   </span></a>               \r\n              <a  *ngIf=\"false\" mat-list-item routerLink=\"Add_Tag\" >  <mat-icon>add</mat-icon> <span>إضافة تصنيف جديد   </span></a>\r\n            </mat-expansion-panel>\r\n          \r\n            <mat-expansion-panel \r\n            [hideToggle]='true'\r\n            [disabled]='true'\r\n            class=\"primary\" [style.border-right]=\"CatsState ?  '5px solid   #6Dc4e2': '' \" \r\n            (mouseenter)=\"CatsState = true\"\r\n            (mouseleave)=\"CatsState = false\"\r\n            [style.box-shadow]=\"true ? '0 0 0 ':'0 0 0 ' \">\r\n                <mat-expansion-panel-header>\r\n                  <mat-panel-title>\r\n                      <a  class=\"sideNItemav\" routerLink=\"tags\" >  <mat-icon>work </mat-icon> <span>إدارة التصنيفات     </span></a>\r\n                  </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                </mat-expansion-panel>\r\n\r\n                <mat-expansion-panel \r\n                [hideToggle]='true'\r\n                [disabled]='true'\r\n                class=\"primary\" [style.border-right]=\"expenState ?  '5px solid   #6Dc4e2': '' \" \r\n                (mouseenter)=\"expenState = true\"\r\n                (mouseleave)=\"expenState = false\"\r\n                [style.box-shadow]=\"true ? '0 0 0 ':'0 0 0 ' \">\r\n                    <mat-expansion-panel-header>\r\n                      <mat-panel-title>\r\n                          <a class=\"sideNItemav\" routerLink=\"expenses\" >  <mat-icon>note_add </mat-icon> <span>مصروفات أخرى     </span></a>\r\n                      </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                    </mat-expansion-panel>\r\n\r\n                    <mat-expansion-panel \r\n                [hideToggle]='true'\r\n                [disabled]='true'\r\n                class=\"primary\" [style.border-right]=\"finanState ?  '5px solid   #6Dc4e2': '' \" \r\n                (mouseenter)=\"finanState = true\"\r\n                (mouseleave)=\"finanState = false\"\r\n                [style.box-shadow]=\"true ? '0 0 0 ':'0 0 0 ' \">\r\n                    <mat-expansion-panel-header>\r\n                      <mat-panel-title>\r\n                          <a  class=\"sideNItemav\" routerLink=\"finance\" >  <mat-icon> description  </mat-icon> <span>الأصول والخصوم     </span></a>\r\n                      </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                    </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel \r\n        [hideToggle]='true'\r\n        [disabled]='true'\r\n        class=\"primary\" [style.border-right]=\"ChartsState ?  '5px solid   #6Dc4e2': '' \" \r\n        (mouseenter)=\"ChartsState = true\"\r\n        (mouseleave)=\"ChartsState = false\"\r\n        [style.box-shadow]=\"true ? '0 0 0 ':'0 0 0 ' \">\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n               <a class=\"sideNItemav\" routerLink=\"charts\"><mat-icon> show_chart </mat-icon> <span>التقارير والرسوم البيانية  </span> </a> \r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            </mat-expansion-panel>  \r\n        </mat-accordion>\r\n    </mat-nav-list>\r\n\r\n  </mat-sidenav>\r\n\r\n\r\n     \r\n\r\n  <mat-sidenav-content class=\"example-sidenav-content\" >\r\n  <!-- [style.margin-right.px]=\"((!(mobileQuery.matches)) && (snav.opened) )? 240 : 0\" -->\r\n   \r\n  \r\n<mat-toolbar  class=\"example-is-mobile example-toolbar\"   style='height: 45px !important;\r\nmin-height: 25px;'>\r\n    <mat-toolbar-row>\r\n\r\n  \r\n    \r\n      <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\r\n      <span class=\"toolbar-spacer\"></span>\r\n     \r\n    \r\n      <ul class=\"navbar-nav mx-auto\">\r\n        <li class=\"nav-item\" *ngIf=\"!isLogin\">\r\n          <a class=\"nav-link\" href=\"#\" routerLink=\"\">Login</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"!isLogin\">\r\n          <a class=\"nav-link\" href=\"#\" routerLink=\"\">Registrarse</a>\r\n        </li>\r\n      <!--  <li class=\"nav-item\">\r\n          <a class=\"nav-link\">{{nombreUsuario}}</a>\r\n        </li>-->\r\n\r\n      </ul>\r\n\r\n      <span class=\"toolbar-spacer\"></span>\r\n      <span class=\"toolbar-spacer\"></span>\r\n    \r\n      <span class=\"toolbar-spacer\"></span>\r\n      <span class=\"toolbar-spacer\"></span>\r\n      <span class=\"toolbar-spacer\"></span>\r\n      <span class=\"toolbar-spacer\"></span>\r\n  \r\n      <button mat-icon-button  [matMenuTriggerFor]=\"menu\">\r\n          <mat-icon>account_balance</mat-icon>\r\n        </button>\r\n        \r\n    </mat-toolbar-row>\r\n  \r\n  </mat-toolbar>\r\n\r\n\r\n\r\n\r\n<mat-menu #menu>\r\n\r\n<button mat-menu-item (click)=\"profile()\">\r\n\r\n  <mat-icon> account_box </mat-icon>\r\n  <span> الحساب الشخصي </span>\r\n</button>\r\n\r\n<!-- <button mat-menu-item>\r\n    <mat-icon> build </mat-icon>\r\n    <span> الإعدادات  </span>\r\n  </button>\r\n\r\n  <button mat-menu-item >\r\n      <mat-icon> help </mat-icon>\r\n      <span> المساعدة  </span>\r\n    </button> -->\r\n\r\n    <button mat-menu-item (click)='onClickLogout()'>\r\n        <mat-icon> exit_to_app </mat-icon>\r\n        <span> تسجيل الخروج  </span>\r\n      </button>\r\n</mat-menu>\r\n                <!-- comment   -->\r\n\r\n  <router-outlet> </router-outlet>\r\n\r\n  </mat-sidenav-content>  \r\n  \r\n  \r\n</mat-sidenav-container>\r\n\r\n\r\n\r\n\r\n \r\n\r\n<!-- Copyright 2018 Google Inc. All Rights Reserved.\r\n    Use of this source code is governed by an MIT-style license that\r\n    can be found in the LICENSE file at http://angular.io/license -->\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(changeDetectorRef, media, authService, router, flashMensaje, firebase, db) {
        this.authService = authService;
        this.router = router;
        this.flashMensaje = flashMensaje;
        this.firebase = firebase;
        this.db = db;
        this.TagState = false;
        this.ProdState = false;
        this.EmpState = false;
        this.ChartsState = false;
        this.InvState = false;
        this.CatsState = false;
        this.expenState = false;
        this.finanState = false;
        this.shouldRun = true;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLogin = true;
                _this.username = auth.displayName;
                _this.emailUser = auth.email;
                //this.fotoUsuario = auth.photoURL;
            }
            else {
                _this.isLogin = false;
                _this.router.navigate(['']);
            }
        });
        this.manager = [];
        this.firebase.list(window.name).snapshotChanges().subscribe(function (item) {
            item.forEach(function (element) {
                for (var element2 in item) {
                    var y = item[element2].payload.key;
                    if (y == 'manager') {
                        _this.db.list(window.name + '/' + y).snapshotChanges().subscribe(function (element) {
                            element.forEach(function (element2) {
                                var y = element2.payload.toJSON();
                                //  y["$key"] = element2.key;
                                _this.manager.push(y);
                            });
                        });
                    }
                }
                _this.manager = [];
            });
        });
    };
    HeaderComponent.prototype.onClickLogout = function () {
        var _this = this;
        this.authService.logout().then(function (res) {
            _this.flashMensaje.show('تم تسجيل الخروج بنجاح.', { cssClass: 'alert-success', timeout: 4000 });
            _this.router.navigate(['']);
        }).catch(function (err) {
            _this.flashMensaje.show('حدثت مشكلة اثناء عملية تسجيل الخروج, يرجى المحاولة مرة أخرى.', { cssClass: 'alert-danger', timeout: 5000 });
            _this.router.navigate(['']);
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    HeaderComponent.prototype.profile = function () {
        this.router.navigate(['mainPage/manager']);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_0__angular_cdk_layout__["d" /* MediaMatcher */],
            __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home-page/costumers/costumers.component.html":
/***/ (function(module, exports) {

module.exports = "<div   class=\" Mycontainer\"> \n    <h1 class=\"title\">  المستفيدون </h1>\n<div class=\"\">\n<div  class=\" clearfix grid\"> \n    <div class='col-md-3 col-sm-6  col-xs-12 col-lg-3'>\n  <figure class=\"effect-oscar  figureSize\">\n      <img src=\"../images/portfolio/1.jpg\" alt=\"img01\"/>\n      <figcaption>\n          <h2>القطاع الخدمي</h2>\n          <p>المقاهي،المطاعم<br>\n      </figcaption>\n  </figure>\n</div>\n    <div class='col-md-3 col-sm-6  col-xs-12 col-lg-3'>\n   <figure class=\"effect-oscar figureSize\">\n      <img src=\"../images/portfolio/2.jpg\" alt=\"img01\"/>\n      <figcaption>\n          <h2>قطاع التجزئة</h2>\n          <p>المتاجر<br>              \n      </figcaption>\n  </figure>\n  </div>\n      <div class='col-md-3 col-sm-6  col-xs-12 col-lg-3'>\n   <figure class=\"effect-oscar  figureSize\">\n      <img src=\"../images/portfolio/3.jpg\" alt=\"img01\"/>\n      <figcaption>\n          <h2>التموينات</h2>\n          <p>بقالة<br>\n                     \n      </figcaption>\n  </figure>\n  </div>\n      <div class='col-md-3 col-sm-6  col-xs-12 col-lg-3'>\n   <figure class=\"effect-oscar figureSize\">\n      <img src=\"../images/portfolio/جمعية-خيرية.jpg\" alt=\"img01\"/>\n      <figcaption>\n          <h2>جمعيات خيرية</h2>\n          <p><br>\n          </p>            \n      </figcaption>\n    </figure>\n    </div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home-page/costumers/costumers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CostumersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CostumersComponent = /** @class */ (function () {
    function CostumersComponent() {
    }
    CostumersComponent.prototype.ngOnInit = function () {
    };
    CostumersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-costumers',
            template: __webpack_require__("../../../../../src/app/home-page/costumers/costumers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CostumersComponent);
    return CostumersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home-page/featurs/featurs.component.html":
/***/ (function(module, exports) {

module.exports = "<div   class=\" Mycontainer \"> \n                <h1 class=\"title\">  المميزات </h1>\n  <div class=\"clearfix grid center \">\n\n                <div class='col-md-1 col-sm-0  col-xs-0 col-lg-1'> </div>\n      <div class='col-md-2 col-sm-4  col-xs-6 col-lg-2'>\n        <img class=\"featuresImg\" src=\"assets/imgs/features/Inv.png\" alt=\"إدار المخزون\"/>\n</div>\n<div class='col-md-2 col-sm-4  col-xs-6 col-lg-2'>\n\n        <img class=\"featuresImg\" src=\"assets/imgs/features/Cloud.png\" alt=\"تخزين سحابي\"/>\n\n</div>\n\n<div class='col-md-2 col-sm-4  col-xs-6 col-lg-2'>\n\n        <img class=\"featuresImg\" src=\"assets/imgs/features/Reports.png\" alt=\"تقارير و رسوم بيانية\"/>\n\n</div>\n<div class='col-md-2 col-sm-4  col-xs-6 col-lg-2'>\n\n\n        <img class=\"featuresImg\" src=\"assets/imgs/features/accounting.png\" alt=\"محاسبة سهلة\"/>\n\n\n</div>\n<div class='col-md-2 col-sm-4  col-xs-6 col-lg-2'>\n\n        <img class=\"featuresImg\" src=\"assets/imgs/features/Portable.png\" alt=\"نقاط بيع متعددة\"/>\n        </div>\n\n        <div class='col-md-1 col-sm-0 col-xs-0 col-lg-1'> </div>\n    </div>\n </div>"

/***/ }),

/***/ "../../../../../src/app/home-page/featurs/featurs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeatursComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeatursComponent = /** @class */ (function () {
    function FeatursComponent() {
    }
    FeatursComponent.prototype.ngOnInit = function () {
    };
    FeatursComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-featurs',
            template: __webpack_require__("../../../../../src/app/home-page/featurs/featurs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeatursComponent);
    return FeatursComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".boutonAlign\r\n{\r\n    margin-bottom: 8px;\r\n}\r\n  mat-form-field\r\n  {\r\n  \r\n    text-align: right;\r\n    font-size: 18px;\r\n    line-height: 2;\r\n  }\r\n  .featuresImg \r\n  {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  figcaption h2\r\n  {\r\n    color: white;\r\n  }\r\n  .footertext\r\n  {\r\n    padding: 0px;\r\n    margin: 0px;\r\n  }\r\n  .Mycontainer\r\n  {\r\n    padding: 0px;\r\n    margin: 0px;\r\n    width: 100%;\r\n    display: inline-block;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n  }\r\n  .figureSize img\r\n  {\r\n    width: inherit;\r\n    height: 250px;\r\n}\r\n  .title\r\n{\r\n  -ms-flex-item-align: center;\r\n      -ms-grid-row-align: center;\r\n      align-self: center;\r\n  text-align: center;\r\n  font-size: 3em;\r\n}\r\n  .imgcontainer\r\n  {\r\n    margin-top: 10%;\r\n    text-align: center;\r\n  }\r\n  .figureSize\r\n  {   \r\n     width: 100%;\r\n    height: 100%;\r\n  }\r\n  footer \r\n{\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  text-align: center;\r\n    background-color: #111;\r\n    color: #6Dc4e2;\r\n    font-size: 1em;\r\n    width: 100%;\r\n    height: 10%;\r\n}\r\n  figcaption\r\n{\r\n  cursor: auto;\r\n}\r\n  .RouterContainer\r\n{\r\n  padding: 7.5em 0 7.5em 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  /* position: fixed;\r\n  overflow: scroll;\r\n  bottom: 7em; */\r\n\r\n}\r\n  .footerContainer\r\n{\r\n  text-align: center !important;\r\n  padding-top: 1%;\r\n  width: 100%;\r\n}\r\n  .Mainlogo\r\n  {\r\n    float: right;\r\n    width: 50px;\r\n    height: 50px;\r\n    margin: 20px 20px 0px 20px;\r\n  }\r\n  .dialogTitle , .DialogOptionBtn\r\n  {\r\n      display: -ms-inline-grid;;\r\n      direction: rtl;\r\n      -ms-flex-line-pack: center;\r\n          align-content: center;\r\n  }\r\n  .alert.flash-message{\r\n    margin-top:8px;\r\n}\r\n  .example-form {\r\n    min-width: 150px;\r\n    width: 100%;\r\n  }\r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  .formContainer\r\n  {\r\n    font-family: 'Amiri' !important;\r\n      margin: 1% 2%;\r\n      -ms-flex-item-align: center;\r\n          -ms-grid-row-align: center;\r\n          align-self: center; \r\n      \r\n  }\r\n  td mat-form-field\r\n  {\r\n  \r\n    text-align: right;\r\n    font-size: 18px;\r\n    float: right;\r\n    line-height: 2;\r\n  }\r\n  input[type=\"number\"]::-webkit-outer-spin-button,\r\ninput[type=\"number\"]::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n  input[type=\"number\"] {\r\n    -moz-appearance: textfield;\r\n}\r\n  .ok\r\n  {\r\n    background-color: #6dc4e2;\r\n  }\r\n  .cancle\r\n  {\r\n    background-color: #a8a8a8;\r\n  }\r\n  table\r\n {\r\n\r\n     width: 100%;\r\n }\r\n  td button\r\n {\r\n   width: 100%;\r\n   height: 100%;\r\n }\r\n  td mat-form-field app-input-file\r\n  {\r\n    float: right;\r\n    text-indent: 1.5px;\r\n    text-align: right;\r\n    font-size: 18px;\r\n  }\r\n  div {\r\n    text-align: right;\r\n  }\r\n  .red{\r\n    color: red;\r\n  }\r\n  .blueBtn\r\n  {\r\n  \r\n      background-color: #6Dc4e2; \r\n  \r\n  }\r\n  .lightBlueBtn\r\n  {\r\n    color:#9DE4F4\r\n  }\r\n  .greyBtn\r\n  {\r\n      background-color:#A8A8A8;\r\n  \r\n  }\r\n  .Btns\r\n  {\r\n      color:white;\r\n      height: 3em;\r\n     \r\n      width: 12em;\r\n      margin: 1em !important;\r\n  }\r\n  .center{\r\n    text-align: center;\r\n  }\r\n  .right\r\n  {\r\n    text-align: right;\r\n    float: right;\r\n  }\r\n  .mainText\r\n  {\r\n    font-size: 150%;\r\n  }\r\n  .ViewsContainer\r\n{\r\n    margin-right:15px; \r\n    -ms-flex-line-pack: center; \r\n        align-content: center;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div >\r\n<header>\r\n<div class=\"topbar animated fadeInLeftBig\"></div>\r\n\r\n<!-- Header Starts -->\r\n\r\n<div class=\"navbar-wrapper\">\r\n      <div class=\"container\">\r\n        <div class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\" id=\"top-nav\">\r\n <img src='assets/imgs/EradLogo++2.png' class=\"Mainlogo\"> \r\n\r\n            <div class=\"navbar-header\">\r\n              <!-- Logo Starts -->\r\n             <!-- <a class=\"navbar-brand\" href=\"#home\"><img src=\"images/logo.png\" alt=\"logo\"></a> شعار اللوقو-->\r\n              <!-- #Logo Ends -->\r\n\r\n             \r\n              <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"toggleCollapse()\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n              </button>\r\n\r\n            </div>\r\n\r\n\r\n            <!-- Nav Starts -->\r\n            <div class=\"navbar-collapse  collapse\" [class.show]=\"show\">\r\n              <ul class=\"nav navbar-nav navbar-left scroll\">\r\n              <li [routerLinkActive]=\"['active']\"><a routerLink='/LogIn' > تسجيل الدخول</a></li> \r\n              <li [routerLinkActive]=\"['active']\"><a routerLink='/register'>اشترك الآن</a></li> \r\n               <li [routerLinkActive]=\"['active']\"><a routerLink='/customer'>المستفيدون</a></li>\r\n               <li [routerLinkActive]=\"['active']\"><a routerLink='/features' >المميزات</a></li>\r\n              <li [routerLinkActive]=\"['active']\"><a routerLink='/ ' >الصفحة الرئيسة</a></li>\r\n              </ul>\r\n            </div>\r\n\r\n\r\n            <!-- #Nav Ends -->\r\n\r\n          </div>\r\n     \r\n      </div>\r\n    </div>\r\n  </header>\r\n  <main role=\"main\" class=\"container RouterContainer\">\r\n<div class=\"col-md-12 col-sm-12 container content  \">\r\n    <flash-messages></flash-messages>\r\n\r\n<router-outlet> </router-outlet>\r\n\r\n</div>\r\n\r\n\r\n</main>\r\n<div>\r\n\r\n\r\n<footer>\r\n  <!-- Footer Starts -->\r\n  <div class=\"footerContainer \">\r\n  <p class=\"wowload flipInX footertext\">\r\n  <a href=\"https://twitter.com/Erad_System\"> <i class=\"fa fa-twitter fa-2x\"></i></a>\r\n  <a href=\"https://www.youtube.com/channel/UC_ZZTu0-NN5nQzjdgzJ3wcg\"><i class=\"fa fa-youtube fa-2x\"></i></a> </p> <p class=\"footertext\">\r\n  جميع الحقوق محفوظة لإيراد @2018  </p>\r\n  </div>\r\n  <!-- # Footer Ends -->\r\n  </footer>\r\n</div>\r\n\r\n</div>\r\n<!-- jquery -->\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n<script src=\"assets/jquery.js\"></script>\r\n\r\n<!-- wow script -->\r\n<script src=\"assets/wow/wow.min.js\"></script>\r\n\r\n\r\n<!-- boostrap -->\r\n<script src=\"assets/bootstrap/js/bootstrap.js\" type=\"text/javascript\" ></script>\r\n\r\n<!-- jquery mobile -->\r\n<script src=\"assets/mobile/touchSwipe.min.js\"></script>\r\n<script src=\"assets/respond/respond.js\"></script>\r\n\r\n<!-- gallery -->\r\n<script src=\"assets/gallery/jquery.blueimp-gallery.min.js\"></script>\r\n\r\n<!-- custom script -->\r\n<script src=\"assets/script.js\"></script>\r\n"

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // <-- do not forget to import




var HomePageComponent = /** @class */ (function () {
    //login
    function HomePageComponent(route, router, dialog, authService, flashMensaje) {
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.authService = authService;
        this.flashMensaje = flashMensaje;
        this.show = false;
    }
    HomePageComponent.prototype.toggleCollapse = function () {
        this.show = !this.show;
    };
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.fragment.subscribe(function (fragment) { _this.fragment = fragment; });
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLogin = true;
                _this.nombreUsuario = auth.displayName;
                _this.emailUsuario = auth.email;
                _this.fotoUsuario = auth.photoURL;
            }
            else {
                _this.isLogin = false;
            }
        });
    };
    HomePageComponent.prototype.onClickLogout = function () {
        var _this = this;
        this.authService.logout().then(function (res) {
            _this.flashMensaje.show('تم تسجيل الخروج بنجاح.', { cssClass: 'alert-success', timeout: 4000 });
            _this.router.navigate(['mainPage']);
        }).catch(function (err) {
            _this.flashMensaje.show('حدثت مشكلة اثناء عملية تسجيل الخروج, أرجوا المحاولة مرة أخرى.', { cssClass: 'alert-danger', timeout: 5000 });
            _this.router.navigate(['']);
        });
    };
    HomePageComponent.prototype.ngAfterViewInit = function () {
        try {
            document.querySelector('#' + this.fragment).scrollIntoView();
        }
        catch (e) { }
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__("../../../../../src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home-page/log-in/log-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"Mycontainer\">\r\n        <h1 class=\"title\">   تسجيل الدخول </h1>\r\n<div class=\"spacer\">\r\n  \r\n  <div class=\"container contactform center\">\r\n  <!-- <h2 class=\"text-center  wowload fadeInUp\"> تسجيل الدخول</h2> -->\r\n    <div class=\"row wowload fadeInLeftBig\">      \r\n        <div class=\"col-sm-6 col-sm-offset-3 col-xs-12\">  \r\n            <flash-messages></flash-messages>\r\n          <form #loginForm=\"ngForm\" (ngSubmit)=\"loginTestFirst()\" dir=\"rtl\">\r\n              <div *ngIf=\"email.errors && (email.dirty || email.touched)\"  class=\"alert alert-danger\">\r\n                  <div [hidden]=\"!email.errors.required\">*يرجى إدخال البريد الإلكتروني</div>\r\n                  <div [hidden]=\"!email.errors.pattern\">*يرجى كتابة البريد الإلكتروني بشكل صحيح</div>\r\n            </div>\r\n            <div *ngIf=\"password.errors && (password.dirty || password.touched)\"  class=\"alert alert-danger\">\r\n                <div [hidden]=\"!password.errors.required\">*يرجى إدخال الرقم السري</div>\r\n                <div [hidden]=\"!password.errors.minlength\">*يجب أن لا يقل الرقم السري عن 8 خانات</div>\r\n            </div>\r\n\r\n              <div class=\"form-group col-md-6 col-sm-12\">\r\n                  <label > <h4>   البريد الإلكتروني <span class=\"red\">* </span></h4> </label>\r\n                  <input matInput   type=\"email\" name=\"email\" #email=\"ngModel\"\r\n                  [(ngModel)]=\"login.email\" placeholder=\"مثال: me@gmail.com\" class=\"form-control\"\r\n                  pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>     \r\n               \r\n              </div>\r\n              \r\n              <div class=\"form-group col-md-6 col-sm-12\">\r\n                <label > <h4>   الرقم السري <span class=\"red\">* </span></h4> </label>\r\n                <input matInput   type=\"password\" name=\"password\" #password=\"ngModel\"\r\n                [(ngModel)]=\"login.password\"  class=\"form-control\"\r\n                minlength=\"8\" required>\r\n\r\n              </div>\r\n         \r\n              <div class=\"form-group custom-file col-md-12 col-sm-12 center\">\r\n                <button  mat-raised-button class=\"Btns  blueBtn\"  type=\"submit\" (click)=\"onSubmitLogin()\" [disabled]=\"!loginForm.valid\">\r\n                    تسجيل الدخول</button>\r\n                    <a (click)=\"resetPassword()\" ><p class=\"lightBlueBtn\"> نسييت كلمة المرور؟</p> </a>\r\n              </div>\r\n\r\n\r\n                  </form>\r\n     \r\n              \r\n        </div>\r\n    </div></div></div>\r\n\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/home-page/log-in/log-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogInComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ResetPassword2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_model__ = __webpack_require__("../../../../../src/app/home-page/log-in/login.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

 // <-- do not forget to import






var LogInComponent = /** @class */ (function () {
    function LogInComponent(route, router, dialog, authService, flashMensaje) {
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.authService = authService;
        this.flashMensaje = flashMensaje;
        this.emailLog = [];
        this.passwordLog = [];
        this.login = new __WEBPACK_IMPORTED_MODULE_6__login_model__["a" /* Login */];
    }
    LogInComponent.prototype.ngOnInit = function () {
        this.emailLog.errors = false;
        this.passwordLog.errors = false;
    };
    LogInComponent.prototype.loginTestFirst = function () {
        var _this = this;
        var flag;
        __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref().on('value', function (snap) {
            var result = snap.val();
            for (var k in result) {
                if (result[k].manager.email == _this.login.email) {
                    window.name = result[k].manager.businessname;
                    flag = true;
                }
            }
        });
        if (flag == true)
            this.onSubmitLogin();
        else
            this.flashMensaje.show('حصل خطأ يرجى المحاولة مره اخرى', { cssClass: 'alert-danger', timeout: 5000 });
    };
    LogInComponent.prototype.onSubmitLogin = function () {
        var _this = this;
        this.authService.loginEmail(this.login.email, this.login.password)
            .then(function (res) {
            __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref().on('value', function (snap) {
                var result = snap.val();
                for (var k in result) {
                    if (result[k].manager.email == _this.login.email) {
                        window.name = result[k].manager.businessname;
                    }
                }
            });
        }).then(function (rse) {
            _this.flashMensaje.show('عملية تسجيل دخول ناجحة مرحبا بك', { cssClass: 'alert-success', timeout: 5000 });
            _this.router.navigate(['mainPage']);
        }).catch(function (err) {
            _this.flashMensaje.show('عملية تسجيل الدخول غير صحيحة, يرجى التأكد من البيانات.', { cssClass: 'alert-danger', timeout: 5000 });
        });
    };
    LogInComponent.prototype.isEmail = function (search) {
        var serchfind;
        var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        serchfind = regexp.test(search);
        return serchfind;
    };
    LogInComponent.prototype.resetPassword = function () {
        var _this = this;
        var dialogRef = this.dialog.open(ResetPassword2);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != null) {
                if (_this.isEmail(result)) {
                    var x = _this.authService.resetPass(result);
                    if (x) {
                        _this.flashMensaje.show('تم ارسال طلب تغيير الرقم السري على بريدك الإلكتروني.', { cssClass: 'alert-success', timeout: 100000,
                            closeOnClick: true, showCloseBtn: true });
                    }
                    else {
                        _this.flashMensaje.show('حدثت مشكلة أثناء عملية ارسال طلب تغيير الرقم السري يرجى المحاولة مرة أخرى.', { cssClass: 'alert-danger', timeout: 100000,
                            closeOnClick: true, showCloseBtn: true });
                    }
                }
                else {
                    _this.flashMensaje.show('يرجى كتابة البريد الإلكتروني بشكل صحيح.', { cssClass: 'alert-danger', timeout: 100000,
                        closeOnClick: true, showCloseBtn: true });
                }
            }
        });
    };
    LogInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-in',
            template: __webpack_require__("../../../../../src/app/home-page/log-in/log-in.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], LogInComponent);
    return LogInComponent;
}());

var ResetPassword2 = /** @class */ (function () {
    function ResetPassword2(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.yes = 'yes';
    }
    ResetPassword2.prototype.resetPassword = function (email) {
        return email;
    };
    ResetPassword2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'reset-password2',
            template: __webpack_require__("../../../../../src/app/home-page/log-in/reset-password.html"),
            styles: [__webpack_require__("../../../../../src/app/home-page/home-page.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatDialogRef */], Object])
    ], ResetPassword2);
    return ResetPassword2;
}());



/***/ }),

/***/ "../../../../../src/app/home-page/log-in/login.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());



/***/ }),

/***/ "../../../../../src/app/home-page/log-in/reset-password.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ViewsContainer\">\r\n    <div class=\"dialogTitle\">\r\n    <h1 mat-dialog-title> تغيير الرقم السري</h1>\r\n    <h4> يرجى إدخال البريد الإلكتروني  </h4>\r\n\r\n    <div mat-dialog-content>\r\n        <mat-form-field>\r\n          <input matInput  name=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" [(ngModel)]=\"email\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n  </div>\r\n    <div mat-dialog-actions class=\"DialogOptionBtn\">\r\n      \r\n      <button mat-button [mat-dialog-close]=\"resetPassword(email)\"  cdkFocusInitial>إرسال </button>\r\n      <button mat-button [mat-dialog-close]=\"\"  >إلغاء الأمر </button>\r\n    </div>\r\n    \r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/home-page/main-home/main-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"Mycontainer\">  \r\n    <div class=\"carousel-inner\">\r\n        <div class=\"col-md-6 col-sm-12 right\">\r\n<h3>\r\n    تبحث عن نظام لإدارة مشروعك محاسبيا؟\r\n</h3>\r\n<p class='mainText'>\r\n    إيراد، نظام محاسبي بسيط وذكي يسهل عملية نقاط البيع المتعددة، وعملية الفوترة، وكذاك أوامر الشراء وتحويلها إلى فاتورة بضغطة واحدة! \r\n    كما يقوم بعملياتك المحاسبية تلقائيا لتتمكن من استعراض التقارير والرسوم البيانية لمتابعة حالة مشروعك\r\n</p>\r\n\r\n        </div>\r\n<div class=\"col-md-6 col-sm-12 right\">\r\n\r\n      <div class=\"item active\">\r\n        <!-- <img src=\"assets/imgs/PC.png\" alt=\"banner\">           -->\r\n        <iframe width=\"100%\" height=\"450em\" src=\"https://www.youtube.com/embed/2xVRn7gqyBo\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n      </div>\r\n      </div>\r\n      <!-- #Item 1 -->\r\n\r\n</div>\r\n\r\n<!-- #Slider Ends -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home-page/main-home/main-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainHomeComponent = /** @class */ (function () {
    function MainHomeComponent() {
    }
    MainHomeComponent.prototype.ngOnInit = function () {
    };
    MainHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-home',
            template: __webpack_require__("../../../../../src/app/home-page/main-home/main-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainHomeComponent);
    return MainHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home-page/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"Mycontainer\">\r\n    <h1 class=\"title\">  إنشاء حساب في نظام إيراد </h1>\r\n  <div class=\"container contactform center\">\r\n  <!-- <h2 class=\"text-center  wowload fadeInUp\">انشأ حسابك الآن</h2> -->\r\n    <div class=\"row wowload fadeInLeftBig\">      \r\n        <div class=\"col-sm-6 col-sm-offset-3 col-xs-12\">   \r\n          <!--   \r\n          <input type=\"text\" [(ngModel)]=\"fname\" placeholder=\"الإسم الاول\" required>\r\n          <input type=\"text\" [(ngModel)]=\"lname\" placeholder=\"العائلة\"  required>\r\n          <input type=\"text\" [(ngModel)]=\"email\" placeholder=\"البريد الإلكتروني\" required>\r\n          <input type=\"password\" [(ngModel)]=\"password\" placeholder=\"الرقم السري\" required>\r\n          <input type=\"text\" [(ngModel)]=\"phone\" placeholder=\"رقم الجوال\"  required>\r\n          <input type=\"text\" [(ngModel)]=\"businessname\" placeholder=\"اسم المشروع\"  required>\r\n          <div class=\"form-group\" >\r\n              <label>\r\n                <input  type=\"file\" (change)=\"detectFiles($event)\">\r\n              </label>        \r\n          </div>\r\n          <div *ngIf=\"num\" >\r\n              <div class=\"progress\">\r\n                <div class=\"progress-bar progress-bar-animated\" [ngStyle]=\"{ 'width': num + '%' }\"></div>\r\n              </div>\r\n              التحميل: | : {{num}}% اكتمل\r\n          </div>\r\n          <button id=\"contact2\" class=\"btn btn-primary\"  (click)=\"onSubmitAddUser()\"> تأكيد</button>\r\n        -->\r\n       \r\n\r\n\r\n\r\n            <form #employeeForm=\"ngForm\" (ngSubmit)=\"onSubmitAddUser()\" dir=\"rtl\">\r\n\r\n                <input type=\"hidden\" name=\"$key\" #$key=\"ngModel\" [(ngModel)]=\"manager.$key\">\r\n                <input type=\"hidden\" name=\"picPath\" #picPath=\"ngModel\" [(ngModel)]=\"manager.picPath\">\r\n                <input type=\"hidden\" name=\"picName\" #picName=\"ngModel\" [(ngModel)]=\"manager.picName\">       \r\n                <input type=\"hidden\" name=\"ReceiptID\" #ReceiptID=\"ngModel\" [(ngModel)]=\"manager.ReceiptID\">\r\n                <input type=\"hidden\" name=\"uid\" #uid=\"ngModel\" [(ngModel)]=\"manager.uid\">       \r\n        \r\n                <div *ngIf=\"fname.errors && (fname.dirty || fname.touched)\"  \r\n                class=\"alert alert-danger\">\r\n                  <div [hidden]=\"!fname.errors.minlength\">   \r\n                    *يجب ان يكون الأسم الأول على الاقل متكون من حرفين\r\n                  </div>\r\n                  <div [hidden]=\"!fname.errors.required\">*ارجوإدخال الأسم الأول</div>\r\n                </div> \r\n        \r\n                  <div *ngIf=\"lname.errors && (lname.dirty || lname.touched)\"  class=\"alert alert-danger\">\r\n                      <div [hidden]=\"!lname.errors.minlength\">\r\n                        *يجب ان يكون أسم العائلة على الاقل متكون من  ثلاثة أحرف</div>\r\n              \r\n                      <div [hidden]=\"!lname.errors.required\">*يرجى إدخال إسم العائلة</div>\r\n                  </div>\r\n                                        \r\n                    \r\n                <div *ngIf=\"email.errors && (email.dirty || email.touched)\"  class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!email.errors.required\">*يرجى إدخال البريد الإلكتروني</div>\r\n                    <div [hidden]=\"!email.errors.pattern\">*يرجى كتابة البريد الإلكتروني بشكل صحيح</div>\r\n              </div>                    \r\n                       \r\n              <div *ngIf=\"password.errors && (password.dirty || password.touched)\"  class=\"alert alert-danger\">\r\n                  <div [hidden]=\"!password.errors.required\">*يرجى إدخال الرقم السري</div>\r\n                  <div [hidden]=\"!password.errors.minlength\">*يجب أن لا يقل الرقم السري عن 8 خانات</div>\r\n            </div>  \r\n                               \r\n              <div *ngIf=\"businessname.errors && (businessname.dirty || businessname.touched)\"  class=\"alert alert-danger\">\r\n                  <div [hidden]=\"!phone.errors.required\">\r\n                    *يرجى إدخال اسم المشروع </div>\r\n              </div>                       \r\n                    \r\n              <div *ngIf=\"phone.errors && (phone.dirty || phone.touched)\"  class=\"alert alert-danger\">\r\n                  <div [hidden]=\"!phone.errors.pattern\">*رقم الجوال يجب ان يحتوي على أرقام فقط</div>\r\n                  <div [hidden]=\"!phone.errors.minlength\">\r\n                    *رقم الجوال يجب أن لا يقل عن 10 أرقام </div>\r\n                    <div [hidden]=\"!phone.errors.maxlength\">\r\n                      *ورقم الجوال يجب أن لا يقل عن 10 أرقام </div>\r\n            </div>\r\n        \r\n        \r\n              <div class=\"form-group col-md-6 col-sm-12\">\r\n                  <label > <h4> الاسم الأول  <span class=\"red\">* </span> </h4> </label>\r\n                  \r\n                  <input matInput   name=\"fname\" #fname=\"ngModel\" [(ngModel)]=\"manager.fname\"        \r\n                  minlength=\"2\" class=\"form-control\"  \r\n                  aria-describedby=\"emailHelp\" placeholder=\"مثال: منى\" required>\r\n                     \r\n              </div>\r\n                \r\n            \r\n            \r\n                <div class=\"form-group col-md-6 col-sm-12\">\r\n                    <label > <h4>    العائلة  <span class=\"red\">* </span> </h4> </label>\r\n                   \r\n                    <input matInput  minlength=\"3\" name=\"lname\" #lname=\"ngModel\" [(ngModel)]=\"manager.lname\"\r\n                     class=\"form-control\" placeholder=\"مثال: السحيم\" required>\r\n                  \r\n                \r\n              </div>\r\n            \r\n            \r\n                <div class=\"form-group col-md-6 col-sm-12\">\r\n                    <label > <h4>   البريد الإلكتروني <span class=\"red\">* </span></h4> </label>\r\n                    <input matInput   type=\"email\" name=\"email\" #email=\"ngModel\"\r\n                    [(ngModel)]=\"manager.email\" placeholder=\"مثال: me@gmail.com\" class=\"form-control\"\r\n                    pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>\r\n      \r\n              </div>\r\n            \r\n              <div class=\"form-group col-md-6 col-sm-12\">\r\n                  <label > <h4>   الرقم السري <span class=\"red\">* </span></h4> </label>\r\n                  <input matInput   type=\"password\" name=\"password\" #password=\"ngModel\"\r\n                  [(ngModel)]=\"manager.password\"  class=\"form-control\"\r\n                  minlength=\"8\" required>\r\n \r\n            </div>\r\n            \r\n            <div class=\"form-group col-md-6 col-sm-12\">\r\n                <label > <h4>   أسم المشروع <span class=\"red\">* </span> </h4> </label>\r\n            \r\n                <input matInput   name=\"businessname\" #businessname=\"ngModel\"\r\n                [(ngModel)]=\"manager.businessname\"  class=\"form-control\"\r\n                required >\r\n     \r\n            </div>  \r\n            \r\n                <div class=\"form-group col-md-6 col-sm-12\">\r\n                    <label > <h4>   الجوال </h4> </label>\r\n            \r\n                    <input matInput type=\"tel\"   name=\"phone\" #phone=\"ngModel\"\r\n                    [(ngModel)]=\"manager.phone\"  class=\"form-control\"\r\n                    minlength=\"10\" maxlength=\"10\" pattern=\"[0-9]*\" placeholder=\"مثال: 05********\">\r\n \r\n            </div>  \r\n            \r\n              <div class=\"form-group custom-file col-md-6 col-sm-12 \">\r\n                <label   >\r\n                   <h4>صورة شعار المشروع:</h4></label> \r\n                  <input  type=\"file\" (change)=\"detectFiles($event)\"  class=\"form-control custom-file-input\" accept=\"image/gif, image/jpeg, image/png\" >\r\n                \r\n                <p>\r\n                <small > الصيغ المسموح بها gif , jpeg ,png</small> </p>      \r\n                </div>\r\n               \r\n            \r\n              <div *ngIf=\"num\" >\r\n                <div class=\"progress\">\r\n                  <div class=\"progress-bar progress-bar-animated\" [ngStyle]=\"{ 'width': num + '%' }\"></div>\r\n                </div>\r\n                التحميل: | : {{num}}% اكتمل\r\n              </div>\r\n            \r\n              \r\n            \r\n               \r\n              <div class=\"form-group custom-file col-md-12 col-sm-12 center\">\r\n                <button  mat-raised-button class=\"Btns  blueBtn\"  type=\"submit\" (click)=\"onSubmitAddUser()\" \r\n                [disabled]=\"!employeeForm.valid\">إنشاء الحساب</button>\r\n              </div>\r\n                  </form>\r\n            \r\n\r\n                  \r\n        </div>\r\n    </div>\r\n    \r\n  \r\n  </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/home-page/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_manager_model__ = __webpack_require__("../../../../../src/app/core/manager.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // <-- do not forget to import







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, route, router, dialog, authService, flashMensaje) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.authService = authService;
        this.flashMensaje = flashMensaje;
        this.manager = new __WEBPACK_IMPORTED_MODULE_5__core_manager_model__["a" /* Manager */];
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.detectFiles = function (event) {
        this.selectedFiles = event.target.files;
    };
    RegisterComponent.prototype.onSubmitAddUser = function () {
        var _this = this;
        this.authService.registerUser(this.manager.email, this.manager.password)
            .then(function (res) {
            window.name = _this.manager.businessname;
            var ReceiptID = 0;
            if (!_this.manager.phone)
                _this.manager.phone = 'لا يوجد رقم هاتف';
            if (_this.selectedFiles) {
                //start genrat password
                var passArray = [];
                var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
                var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
                var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
                var specialCharacters = ['!', '#', '$', '&', '@', '}', '%', '^', '(', ')', '-', '_', '+', '=', ':', '{', ';', '[', ']'];
                var conecter = lower;
                conecter = conecter.concat(upper);
                conecter = conecter.concat(num);
                conecter = conecter.concat(specialCharacters);
                for (var i = 1; i < 15; i++) {
                    passArray.push(conecter[Math.floor(Math.random() * conecter.length)]);
                }
                ;
                _this.manager.picName = passArray.join("");
                //end genrat password
                var file = _this.selectedFiles.item(0);
                var storageRef = __WEBPACK_IMPORTED_MODULE_6_firebase__["storage"]().ref(_this.manager.picName);
                var uploadTask_1 = storageRef.put(file);
                uploadTask_1.then(function (r) {
                    _this.manager.picPath = uploadTask_1.snapshot.downloadURL;
                    // this.manager.picName = file.name;
                    _this.authService.registerManager(ReceiptID, _this.manager.email, _this.manager.password, _this.manager.fname, _this.manager.lname, _this.manager.phone, _this.manager.businessname, _this.manager.picName, _this.manager.picPath, res.uid);
                    _this.router.navigate(['mainPage']);
                }).catch(function (erorr) {
                });
            }
            else {
                _this.manager.picPath = 'https://firebasestorage.googleapis.com/v0/b/erad-system.appspot.com/o/defaultEmployee.jpg?alt=media&token=ddf714e2-bf10-43ac-a575-75a52fde307e';
                _this.manager.picName = 'defaultEmployee.jpg';
                _this.authService.registerManager(ReceiptID, _this.manager.email, _this.manager.password, _this.manager.fname, _this.manager.lname, _this.manager.phone, _this.manager.businessname, _this.manager.picName, _this.manager.picPath, res.uid);
                _this.router.navigate(['mainPage']);
            }
        }).catch(function (err) {
            _this.flashMensaje.show('عملية تسجيل الدخول غير صحيحة, يرجى التأكد من ادخال جميع البيانات.', { cssClass: 'alert-danger', timeout: 5000 });
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/home-page/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/input-file/file-input.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileInput; });
var FileInput = /** @class */ (function () {
    function FileInput(_files, delimiter) {
        if (delimiter === void 0) { delimiter = ', '; }
        this._files = _files;
        this.delimiter = delimiter;
        this._fileNames = this._files.map(function (f) { return f.name; }).join(delimiter);
    }
    Object.defineProperty(FileInput.prototype, "files", {
        get: function () {
            return this._files || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileInput.prototype, "fileNames", {
        get: function () {
            return this._fileNames;
        },
        enumerable: true,
        configurable: true
    });
    return FileInput;
}());



/***/ }),

/***/ "../../../../../src/app/input-file/input-file.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host:not(.file-input-disabled) {\r\n    cursor: pointer;\r\n}\r\n\r\ninput {\r\n    width: 0px;\r\n    height: 0px;\r\n    opacity: 0;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    z-index: -1;\r\n}\r\n\r\n.filename {\r\n    display: inline-block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/input-file/input-file.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <input #input id=\"md-input-file\" type=\"file\" [attr.multiple]=\"multiple? '' : null\">\n    <span class=\"filename\">{{fileNames}}</span>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/input-file/input-file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputFileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_coercion__ = __webpack_require__("../../../cdk/esm5/coercion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__file_input_module__ = __webpack_require__("../../../../../src/app/input-file/file-input.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InputFileComponent = /** @class */ (function () {
    /**
     * @see https://angular.io/api/forms/ControlValueAccessor
     */
    function InputFileComponent(ngControl, fm, _elementRef, _renderer) {
        var _this = this;
        this.ngControl = ngControl;
        this.fm = fm;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.stateChanges = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
        this.focused = false;
        this.controlType = 'file-input';
        this._required = false;
        this.id = "app-input-file-" + InputFileComponent_1.nextId++;
        this.describedBy = '';
        this._onChange = function (_) { };
        this._onTouched = function () { };
        ngControl.valueAccessor = this;
        fm.monitor(_elementRef.nativeElement, _renderer, true).subscribe(function (origin) {
            _this.focused = !!origin;
            _this.stateChanges.next();
        });
    }
    InputFileComponent_1 = InputFileComponent;
    Object.defineProperty(InputFileComponent.prototype, "value", {
        get: function () {
            return this.empty ? null : new __WEBPACK_IMPORTED_MODULE_6__file_input_module__["a" /* FileInput */](this._elementRef.nativeElement.value || []);
        },
        set: function (fileInput) {
            this.writeValue(fileInput.files);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputFileComponent.prototype, "placeholder", {
        get: function () {
            return this._placeholder;
        },
        set: function (plh) {
            this._placeholder = plh;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputFileComponent.prototype, "empty", {
        get: function () {
            return !this._elementRef.nativeElement.value || this._elementRef.nativeElement.value.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputFileComponent.prototype, "shouldPlaceholderFloat", {
        get: function () {
            return this.focused || !this.empty || this.valuePlaceholder !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputFileComponent.prototype, "required", {
        get: function () {
            return this._required;
        },
        set: function (req) {
            this._required = Object(__WEBPACK_IMPORTED_MODULE_5__angular_cdk_coercion__["c" /* coerceBooleanProperty */])(req);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputFileComponent.prototype, "isDisabled", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputFileComponent.prototype, "disabled", {
        get: function () {
            return this._elementRef.nativeElement.disabled;
        },
        set: function (dis) {
            this.setDisabledState(Object(__WEBPACK_IMPORTED_MODULE_5__angular_cdk_coercion__["c" /* coerceBooleanProperty */])(dis));
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputFileComponent.prototype, "errorState", {
        get: function () {
            return this.ngControl.errors !== null && this.ngControl.touched;
        },
        enumerable: true,
        configurable: true
    });
    InputFileComponent.prototype.setDescribedByIds = function (ids) {
        this.describedBy = ids.join(' ');
    };
    InputFileComponent.prototype.onContainerClick = function (event) {
        if (event.target.tagName.toLowerCase() !== 'input' && !this.disabled) {
            this._elementRef.nativeElement.querySelector('input').focus();
            this.focused = true;
            this.open();
        }
    };
    InputFileComponent.prototype.writeValue = function (obj) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', obj);
    };
    InputFileComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    InputFileComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    InputFileComponent.prototype.change = function (event) {
        var fileList = event.target.files;
        var fileArray = [];
        if (fileList) {
            for (var i = 0; i < fileList.length; i++) {
                fileArray.push(fileList[i]);
            }
        }
        this.value = new __WEBPACK_IMPORTED_MODULE_6__file_input_module__["a" /* FileInput */](fileArray);
        this._onChange(this.value);
    };
    InputFileComponent.prototype.blur = function () {
        this.focused = false;
        this._onTouched();
    };
    InputFileComponent.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    InputFileComponent.prototype.ngOnInit = function () {
        this.multiple = Object(__WEBPACK_IMPORTED_MODULE_5__angular_cdk_coercion__["c" /* coerceBooleanProperty */])(this.multiple);
    };
    InputFileComponent.prototype.open = function () {
        if (!this.disabled) {
            this._elementRef.nativeElement.querySelector('input').click();
        }
    };
    Object.defineProperty(InputFileComponent.prototype, "fileNames", {
        get: function () {
            return this.value ? this.value.fileNames : this.valuePlaceholder;
        },
        enumerable: true,
        configurable: true
    });
    InputFileComponent.prototype.ngOnDestroy = function () {
        this.stateChanges.complete();
        this.fm.stopMonitoring(this._elementRef.nativeElement);
    };
    InputFileComponent.nextId = 0;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InputFileComponent.prototype, "valuePlaceholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], InputFileComponent.prototype, "multiple", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostBinding"])(),
        __metadata("design:type", Object)
    ], InputFileComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostBinding"])('attr.aria-describedby'),
        __metadata("design:type", Object)
    ], InputFileComponent.prototype, "describedBy", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InputFileComponent.prototype, "value", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InputFileComponent.prototype, "placeholder", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostBinding"])('class.mat-form-field-should-float'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], InputFileComponent.prototype, "shouldPlaceholderFloat", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Boolean])
    ], InputFileComponent.prototype, "required", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostBinding"])('class.file-input-disabled'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], InputFileComponent.prototype, "isDisabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Boolean])
    ], InputFileComponent.prototype, "disabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], InputFileComponent.prototype, "errorState", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])('change', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], InputFileComponent.prototype, "change", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])('focusout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InputFileComponent.prototype, "blur", null);
    InputFileComponent = InputFileComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-input-file',
            template: __webpack_require__("../../../../../src/app/input-file/input-file.component.html"),
            styles: [__webpack_require__("../../../../../src/app/input-file/input-file.component.css")],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatFormFieldControl */], useExisting: InputFileComponent_1 }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* NgControl */],
            __WEBPACK_IMPORTED_MODULE_4__angular_cdk_a11y__["f" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"]])
    ], InputFileComponent);
    return InputFileComponent;
    var InputFileComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/manager/confirm-Message-emp.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ViewsContainer\">\r\n    <div class=\"dialogTitle\">\r\n    <h1 mat-dialog-title> حذف الحساب</h1>\r\n    <h4> هل أنت متأكد من حذف حسابك سيتم حذف جميع بياناتك؟ </h4>\r\n  </div>\r\n    <div mat-dialog-actions class=\"DialogOptionBtn\">\r\n      \r\n      <button mat-button [mat-dialog-close]=\"yes\" cdkFocusInitial>حذف </button>\r\n      <button mat-button [mat-dialog-close]=\"\"  >إلغاء الأمر </button>\r\n    </div>\r\n    \r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/manager/edit-manager/confirm-Message-cancle-manag.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ViewsContainer\">\r\n        <div class=\"dialogTitle\">\r\n        <h1 mat-dialog-title> تأكيد</h1>\r\n        <h4> هل أنت متأكد من إلغاء عملية تحديث البيانات؟ </h4>\r\n      </div>\r\n        <div mat-dialog-actions class=\"DialogOptionBtn\">\r\n          \r\n          <button mat-button [mat-dialog-close]=\"confirm()\" cdkFocusInitial>نعم متأكد </button>\r\n          <button mat-button [mat-dialog-close]=\"\"  >إلغاء الأمر </button>\r\n        </div>\r\n        \r\n        </div>"

/***/ }),

/***/ "../../../../../src/app/manager/edit-manager/edit-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\r\n    min-width: 150px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  \r\n  .formContainer\r\n  {\r\n    font-family: 'Amiri' !important;\r\n      margin: 1% 2%;\r\n      -ms-flex-item-align: center;\r\n          -ms-grid-row-align: center;\r\n          align-self: center; \r\n      \r\n  }\r\n  \r\n  td mat-form-field\r\n  {\r\n  \r\n    text-align: right;\r\n    font-size: 18px;\r\n    float: right;\r\n    line-height: 2;\r\n  }\r\n  \r\n  .blueBtn\r\n{\r\n\r\n    background-color: #6Dc4e2; \r\n\r\n}\r\n  \r\n  .greyBtn\r\n{\r\n    background-color:#A8A8A8;\r\n\r\n}\r\n  \r\n  .Btns\r\n{\r\n    color:white;\r\n    height: 3em;\r\n   \r\n    width: 12em;\r\n    margin: 1em !important;\r\n}\r\n  \r\n  .ok\r\n  {\r\n    background-color: #6dc4e2;\r\n  }\r\n  \r\n  .cancle\r\n  {\r\n    background-color: #a8a8a8;\r\n  }\r\n  \r\n  table\r\n {\r\n\r\n     width: 100%;\r\n }\r\n  \r\n  td button\r\n {\r\n   width: 100%;\r\n   height: 100%;\r\n }\r\n  \r\n  td mat-form-field app-input-file\r\n  {\r\n    float: right;\r\n    text-indent: 1.5px;\r\n    text-align: right;\r\n    font-size: 18px;\r\n  }\r\n  \r\n  div {\r\n    text-align: right;\r\n  }\r\n  \r\n  .red{\r\n    color: red;\r\n  }\r\n  \r\n  .dialogTitle , .DialogOptionBtn\r\n  {\r\n    display: -ms-inline-grid;;\r\n    direction: rtl;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n}\r\n  \r\n  input[type=\"number\"]::-webkit-outer-spin-button,\r\ninput[type=\"number\"]::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n  \r\n  input[type=\"number\"] {\r\n    -moz-appearance: textfield;\r\n}\r\n  \r\n  .ok\r\n  {\r\n    background-color: #6dc4e2;\r\n  }\r\n  \r\n  .cancle\r\n  {\r\n    background-color: #a8a8a8;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manager/edit-manager/edit-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar   style=\"background-color:transparent\">\r\n  <span class=\"primary\">\r\n      <a  (click)=\"gobacktoProducts()\" > <span>العودة إلى عرض بيانات المدير  </span></a> \r\n  </span>\r\n  <span class=\"toolbar-spacer\"></span>\r\n</mat-toolbar>\r\n\r\n\r\n<mat-card class=\"formContainer\" >\r\n  <mat-card-title>\t\r\n    <h2> تعديل بيانات المدير  </h2>\r\n  </mat-card-title>\r\n  <flash-messages></flash-messages>\r\n  <div *ngIf=\"fname.errors && (fname.dirty || fname.touched)\"  class=\"alert alert-danger\">\r\n    <div [hidden]=\"!fname.errors.minlength\">   *يجب ان يكون الأسم الأول على الاقل متكون من حرفين</div>\r\n\r\n    <div [hidden]=\"!fname.errors.required\">*ارجوإدخال الأسم الأول</div>\r\n  </div>\r\n\r\n<div *ngIf=\"lname.errors && (lname.dirty || lname.touched)\"  class=\"alert alert-danger\">\r\n  <div [hidden]=\"!lname.errors.minlength\">\r\n    *يجب ان يكون أسم العائلة على الاقل متكون من  ثلاثة أحرف</div>\r\n\r\n  <div [hidden]=\"!lname.errors.required\">*ارجو إدخال إسم العائلة</div>\r\n</div>\r\n\r\n<div *ngIf=\"phone.errors && (phone.dirty || phone.touched)\"  class=\"alert alert-danger\">\r\n  <div [hidden]=\"!phone.errors.pattern\">*رقم الجوال يجب ان يحتوي على أرقام فقط</div>\r\n  <div [hidden]=\"!phone.errors.minlength\">\r\n    *رقم الجوال يجب أن لا يقل عن 10 أرقام </div>\r\n</div>\r\n<mat-card-content>\r\n  <form #managerForm=\"ngForm\" (ngSubmit)=\"onSubmit(managerForm)\" dir=\"rtl\">\r\n\r\n      <input type=\"hidden\" name=\"$key\" #$key=\"ngModel\" \r\n      [(ngModel)]=\"manager.$key\">\r\n      <input type=\"hidden\" name=\"uid\" #$key=\"ngModel\" \r\n      [(ngModel)]=\"manager.uid\">\r\n\r\n      <input type=\"hidden\" name=\"picPath\" #picPath=\"ngModel\" \r\n      [(ngModel)]=\"manager.picPath\">\r\n\r\n      <input type=\"hidden\" name=\"picName\" #picName=\"ngModel\" \r\n      [(ngModel)]=\"manager.picName\">\r\n\r\n      <input type=\"hidden\" name=\"ReceiptID\" #ReceiptID=\"ngModel\" \r\n      [(ngModel)]=\"manager.ReceiptID\">\r\n\r\n      <input type=\"hidden\" name=\"businessname\" #businessname=\"ngModel\" \r\n      [(ngModel)]=\"manager.businessname\">\r\n\r\n      <input type=\"hidden\" name=\"email\" #email=\"ngModel\" \r\n      [(ngModel)]=\"manager.email\">\r\n\r\n      <input type=\"hidden\" name=\"password\" #password=\"ngModel\" \r\n      [(ngModel)]=\"manager.password\">\r\n\r\n\r\n\r\n    <div class=\"form-group col-md-6 col-sm-12\">\r\n        <label > <h4>  الاسم الأول </h4> </label>\r\n         \r\n \r\n        <input matInput   name=\"fname\" #fname=\"ngModel\" [(ngModel)]=\"manager.fname\"        \r\n        minlength=\"2\" required  class=\"form-control\"  \r\n        aria-describedby=\"emailHelp\" placeholder=\"مثال: منى\">\r\n      </div>\r\n\r\n \r\n      \r\n\r\n\r\n      <div class=\"form-group col-md-6 col-sm-12\">\r\n          <label > <h4>   العائلة </h4> </label>\r\n         \r\n          <input matInput  minlength=\"3\" name=\"lname\" \r\n          #lname=\"ngModel\" [(ngModel)]=\"manager.lname\"\r\n           class=\"form-control\" placeholder=\"العائلة\" required>\r\n        \r\n\r\n    </div>\r\n\r\n\r\n      <div class=\"form-group col-md-6 col-sm-12\">\r\n          <label > <h4>   الجوال </h4> </label>\r\n\r\n          <input matInput type=\"tel\" name=\"phone\" \r\n           class=\"form-control\" #phone=\"ngModel\" [(ngModel)]=\"manager.phone\"\r\n          minlength=\"10\" pattern=\"[0-9]*\" >\r\n  \r\n\r\n\r\n\r\n  </div>\r\n\r\n          \r\n    <div class=\"form-group custom-file col-md-6 col-sm-12 \">\r\n      <label   >\r\n         <h4>صورة المشروع:</h4></label> \r\n        <input  type=\"file\" (change)=\"detectFiles($event)\"  class=\"form-control custom-file-input\" accept=\"image/gif, image/jpeg, image/png\" >\r\n      \r\n      <p>\r\n      <small > الصيغ المسموح بها gif , jpeg ,png</small> </p>      \r\n      </div>\r\n     \r\n\r\n    <div *ngIf=\"num\" >\r\n      <div class=\"progress\">\r\n        <div class=\"progress-bar progress-bar-animated\" [ngStyle]=\"{ 'width': num + '%' }\"></div>\r\n      </div> \r\n      التحميل: | : {{num}}% اكتمل\r\n    </div>\r\n \r\n    \r\n\r\n    <button  mat-raised-button class=\"Btns  blueBtn\"  type=\"submit\"  [disabled]=\"!managerForm.valid\">\r\n      تعديل</button>\r\n\r\n     <button mat-raised-button  type=\"button\"  class=\"Btns greyBtn \"  (click)=\"openDialog()\">\r\n    إلغاء</button>\r\n\r\n     \r\n\r\n\r\n\r\n      \r\n        </form>\r\n        </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/manager/edit-manager/edit-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditManagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return confirmMessageCancleManag; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var EditManagerComponent = /** @class */ (function () {
    function EditManagerComponent(route, router, flashMensaje, dialog, firebase) {
        this.route = route;
        this.router = router;
        this.flashMensaje = flashMensaje;
        this.dialog = dialog;
        this.firebase = firebase;
    }
    EditManagerComponent.prototype.gobacktoProducts = function () {
        this.router.navigate(['mainPage/manager']);
    };
    EditManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uid = this.route.snapshot.params.id;
        this.resetForm();
        if ((this.uid != '') && (this.uid != ':id')) {
        }
        this.firebase.object(window.name + '/manager').snapshotChanges().subscribe(function (ob) {
            var x = ob.payload.toJSON();
            x["$key"] = ob.key;
            _this.manager = x;
        });
    };
    EditManagerComponent.prototype.detectFiles = function (event) {
        this.selectedFiles = event.target.files;
    };
    EditManagerComponent.prototype.onSubmit = function (managerForm) {
        var _this = this;
        if (this.selectedFiles) {
            var file_1 = this.selectedFiles.item(0);
            var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["storage"]().ref(file_1.name);
            var uploadTask_1 = storageRef.put(file_1);
            uploadTask_1.on(__WEBPACK_IMPORTED_MODULE_1_firebase_app__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                // upload in progress
                _this.num = (uploadTask_1.snapshot.bytesTransferred / uploadTask_1.snapshot.totalBytes) * 100;
            }, function (error) {
                // upload failed
            }, function () {
                // upload success
                __WEBPACK_IMPORTED_MODULE_1_firebase_app__["database"]().ref(window.name + '/manager').update({
                    fname: managerForm.value.fname,
                    lname: managerForm.value.lname,
                    phone: managerForm.value.phone,
                    picPath: uploadTask_1.snapshot.downloadURL,
                    picName: file_1.name
                });
                __WEBPACK_IMPORTED_MODULE_1_firebase_app__["database"]().ref(window.name + '/employees').child(_this.uid).update({
                    firstName: managerForm.value.fname,
                    lastName: managerForm.value.lname,
                    phone: managerForm.value.phone,
                    picPath: uploadTask_1.snapshot.downloadURL,
                    picName: file_1.name
                });
                _this.resetForm(managerForm);
                _this.router.navigate(['mainPage/manager']).then(function (res) {
                    _this.flashMensaje.show('تم تحديث بياناتك بنجاح.', { cssClass: 'alert-success', timeout: 10000,
                        closeOnClick: true, showCloseBtn: true });
                });
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_firebase_app__["database"]().ref(window.name + '/manager').update({
                fname: managerForm.value.fname,
                lname: managerForm.value.lname,
                phone: managerForm.value.phone
            });
            __WEBPACK_IMPORTED_MODULE_1_firebase_app__["database"]().ref(window.name + '/employees').child(this.uid).update({
                firstName: managerForm.value.fname,
                lastName: managerForm.value.lname,
                phone: managerForm.value.phone
            });
            this.resetForm(managerForm);
            this.router.navigate(['mainPage/manager']).then(function (res) {
                _this.flashMensaje.show('تم تحديث بياناتك بنجاح.', { cssClass: 'alert-success', timeout: 10000,
                    closeOnClick: true, showCloseBtn: true });
            });
        }
    };
    EditManagerComponent.prototype.resetForm = function (managerForm) {
        if (managerForm != null) {
            managerForm.reset();
            this.num = null;
            this.selectedFiles = null;
        }
        this.manager = {
            $key: null,
            fname: '',
            lname: '',
            email: '',
            password: '',
            businessname: '',
            ReceiptID: '',
            picPath: '',
            picName: '',
            phone: '',
            uid: ''
        };
    };
    EditManagerComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(confirmMessageCancleManag, {
            data: { message: '' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.resetForm();
                _this.router.navigate(['mainPage/manager']);
            }
        });
    };
    EditManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-manager',
            template: __webpack_require__("../../../../../src/app/manager/edit-manager/edit-manager.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manager/edit-manager/edit-manager.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], EditManagerComponent);
    return EditManagerComponent;
}());

var confirmMessageCancleManag = /** @class */ (function () {
    function confirmMessageCancleManag(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    confirmMessageCancleManag.prototype.confirm = function () {
        return true;
    };
    confirmMessageCancleManag = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'confirm-message-cancle-manag',
            template: __webpack_require__("../../../../../src/app/manager/edit-manager/confirm-Message-cancle-manag.html"),
            styles: [__webpack_require__("../../../../../src/app/manager/edit-manager/edit-manager.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialogRef */], Object])
    ], confirmMessageCancleManag);
    return confirmMessageCancleManag;
}());



/***/ }),

/***/ "../../../../../src/app/manager/manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-card {\r\n    max-width: 90%;\r\n    margin-right: 5%;\r\n    margin-top: 5%;\r\n    margin-left: 5%;\r\n    margin-bottom: 20%\r\n\r\n  }\r\n  \r\n  .example-header-image {\r\n    /* background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg'); */\r\n    background-size: cover;\r\n\r\n  }\r\n  \r\n  .greenBtn\r\n  { \r\n      \r\n      background-color: #4989A5;\r\n    \r\n  }\r\n  \r\n  .blueBtn\r\n  {\r\n  \r\n      background-color: #6Dc4e2; \r\n  \r\n  }\r\n  \r\n  .greyBtn\r\n  {\r\n      background-color:#A8A8A8;\r\n  \r\n  }\r\n  \r\n  .lightBlueBtn\r\n  {\r\n    background-color:#9DE4F4\r\n  }\r\n  \r\n  .goBack\r\n  {\r\n    color: #4989A5;\r\n    font-size: 0.8em;\r\n    margin: 0;\r\n  }\r\n  \r\n  .title\r\n  {\r\n    font-size: 2.4em;\r\n    margin: 0;\r\n  }\r\n  \r\n  .Btns\r\n  {\r\n      color:white;\r\n      height: 3em;\r\n     \r\n      width: 12em;\r\n      margin: 1em !important;\r\n  }\r\n  \r\n  .info\r\n  {\r\n     \r\n    color: #6Dc4e2;\r\n    font-size: 1em;\r\n  }\r\n  \r\n  .header{\r\n      float: right;\r\n      font-size: 1.5em;\r\n }\r\n  \r\n  .Imgheader\r\n    {\r\n\r\n    font-size: 1.5em;  \r\n    }\r\n  \r\n  img\r\n  {\r\n      width: 100% !important;\r\n      height: 100% !important;\r\n  }\r\n  \r\n  table\r\n  {\r\n      text-align: right;\r\n      width: 100%;\r\n  }\r\n  \r\n  .dialogTitle , .DialogOptionBtn\r\n  {\r\n    display: -ms-inline-grid;;\r\n    direction: rtl;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n}\r\n  \r\n  .ViewsContainer\r\n{\r\n    margin-right:15px; \r\n    -ms-flex-line-pack: center; \r\n        align-content: center;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n  \r\n  .PageTitle\r\n{\r\n    width: auto;\r\n    margin: 15px;\r\n    height: 40px;\r\n}\r\n  \r\n  .PageTitle span h2\r\n{\r\n    font-size: 22px;\r\n    margin: 0px;\r\n}\r\n  \r\n  mat-card-title {\r\n    font-size: 30px;\r\n}\r\n  \r\n  mat-toolbar mat-toolbar-row span mat-form-field\r\n{\r\n    text-align: right;\r\n    font-size: 14px;\r\n    float: right;\r\n    line-height: 2;\r\n}\r\n  \r\n  .toolbar-spacer {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n  }\r\n  \r\n  b{\r\n     font-size: 22px;\r\n }\r\n  \r\n  h5 {\r\n      margin-right: 20px;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manager/manager.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar  style=\"background-color:transparent\" >\r\n        <mat-toolbar-row>\r\n                   \r\n                    <span class=\"toolbar-spacer\"></span>\r\n\r\n            <span color=\"primary\">   <h2 class=\"title\" > {{ title }} </h2> </span>\r\n              \r\n            <span class=\"toolbar-spacer\"></span>\r\n    \r\n        </mat-toolbar-row>\r\n      \r\n    </mat-toolbar>\r\n\r\n    <flash-messages></flash-messages>\r\n\r\n    \r\n<mat-card class=\"example-card\">\r\n\r\n    <mat-card-content>\r\n            <div class=\"col-md-12\" dir=\"rtl\" >\r\n            <div class='col-md-9   col-sm-8 '>\r\n                    \r\n            <div class='col-md-12 '> \r\n                    <h5 class='header'> الاسم :   <span class='info'>  {{manager.fname}} {{manager.lname}}</span>  </h5> \r\n            </div> \r\n                \r\n            <div class='col-md-12 '> \r\n                  <h5 class='header'> البريد الألكتروني:   <span class='info'>  {{manager.email}} </span>  </h5> \r\n            </div> \r\n\r\n           \r\n             <div class='col-md-12'> \r\n                    <h5 class='header'> الجوال: <span class='info' >  {{manager.phone}}  </span>  </h5>\r\n             </div>\r\n            </div>\r\n            <div class='col-md-3  col-sm-4' >\r\n                \r\n                    <div  class=\"example-header-image\"><img src={{manager.picPath}} ></div>\r\n                    <br>\r\n                    <h5 class=\"Imgheader\"> {{manager.businessname}} </h5>\r\n                    <br>\r\n                              \r\n                  </div>\r\n        </div>\r\n                    \r\n            </mat-card-content>\r\n        <div>\r\n            <button mat-raised-button class= \"Btns blueBtn\" (click)=\"onEdite()\" > تعديل البيانات الشخصية  </button> \r\n            <button mat-raised-button  class='Btns greenBtn' (click)=\"resetPassword()\" > تغيير كلمة سر الحساب </button>  \r\n            <button mat-raised-button  class='Btns greyBtn' (click)=\"deleteAccount()\" > حذف المشروع  </button> \r\n        </div>\r\n    \r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/manager/manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return confirmDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ResetPassword; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ManagerComponent = /** @class */ (function () {
    function ManagerComponent(firebase, db, router, flashMensaje, dialog, authService) {
        this.firebase = firebase;
        this.db = db;
        this.router = router;
        this.flashMensaje = flashMensaje;
        this.dialog = dialog;
        this.authService = authService;
        this.title = "حسابك الشخصي";
    }
    ManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebase.object(window.name + '/manager').snapshotChanges().subscribe(function (ob) {
            var x = ob.payload.toJSON();
            x["$key"] = ob.key;
            _this.manager = x;
        });
    };
    ManagerComponent.prototype.onEdite = function () {
        var id = this.manager.uid;
        this.router.navigate(['mainPage/edit-manager/', id]);
    };
    ManagerComponent.prototype.deleteAccount = function () {
        var _this = this;
        var dialogRef = this.dialog.open(confirmDelete);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != null) {
                _this.db.list(window.name + '/products/').snapshotChanges().subscribe(function (categories) {
                    if (categories != null)
                        categories.forEach(function (cat) {
                            _this.db.list(window.name + '/products/' + cat.key).snapshotChanges().subscribe(function (prods) {
                                prods.forEach(function (prod) {
                                    var product = prod.payload.toJSON();
                                    _this.deletephoto(product.picName);
                                });
                            });
                        });
                });
                _this.db.list(window.name + '/employees/').snapshotChanges().subscribe(function (emps) {
                    if (emps != null)
                        emps.forEach(function (emp) {
                            var employee = emp.payload.toJSON();
                            _this.deletephoto(employee.picName);
                        });
                });
                var user = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
                _this.db.list(window.name).remove().then(function (res) {
                    user.delete().then(function (result) {
                        // User deleted.
                        _this.router.navigate(['']).then(function (n) {
                            _this.flashMensaje.show('تم حذف المشروع بنجاح ', { cssClass: 'alert-success', timeout: 100000,
                                closeOnClick: true, showCloseBtn: true });
                        });
                    }).catch(function (error) {
                        // An error happened.
                        _this.flashMensaje.show('حدثت مشكلة أثناء عملية الحذف يرجى المحاولة مرة أخرى.', { cssClass: 'alert-danger', timeout: 100000,
                            closeOnClick: true, showCloseBtn: true });
                    });
                }).catch(function (err) {
                    _this.flashMensaje.show('حدثت مشكلة أثناء عملية الحذف يرجى المحاولة مرة أخرى.', { cssClass: 'alert-danger', timeout: 100000,
                        closeOnClick: true, showCloseBtn: true });
                });
            }
        });
    };
    ManagerComponent.prototype.deletephoto = function (picName) {
        if (picName != 'defaultproduct.png' && picName != 'defaultEmployee.jpg') {
            var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
            storageRef.child(picName).delete();
        }
    };
    ManagerComponent.prototype.isEmail = function (search) {
        var serchfind;
        var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        serchfind = regexp.test(search);
        return serchfind;
    };
    ManagerComponent.prototype.resetPassword = function () {
        var _this = this;
        var dialogRef = this.dialog.open(ResetPassword);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != null) {
                if (_this.isEmail(result)) {
                    var x = _this.authService.resetPass(result);
                    if (x) {
                        _this.flashMensaje.show('تم ارسال طلب تغيير الرقم السري على بريدك الإلكتروني.', { cssClass: 'alert-success', timeout: 100000,
                            closeOnClick: true, showCloseBtn: true });
                    }
                    else {
                        _this.flashMensaje.show('حدثت مشكلة أثناء عملية ارسال طلب تغيير الرقم السري يرجى المحاولة مرة أخرى.', { cssClass: 'alert-danger', timeout: 100000,
                            closeOnClick: true, showCloseBtn: true });
                    }
                }
                else {
                    _this.flashMensaje.show('يرجى كتابة البريد الإلكتروني بشكل صحيح.', { cssClass: 'alert-danger', timeout: 100000,
                        closeOnClick: true, showCloseBtn: true });
                }
            }
        });
    };
    ManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manager',
            template: __webpack_require__("../../../../../src/app/manager/manager.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manager/manager.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_6__core_auth_service__["a" /* AuthService */]])
    ], ManagerComponent);
    return ManagerComponent;
}());

var confirmDelete = /** @class */ (function () {
    function confirmDelete(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.yes = 'yes';
    }
    confirmDelete = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'confirm-delete',
            template: __webpack_require__("../../../../../src/app/manager/confirm-Message-emp.html"),
            styles: [__webpack_require__("../../../../../src/app/manager/manager.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialogRef */], Object])
    ], confirmDelete);
    return confirmDelete;
}());

var ResetPassword = /** @class */ (function () {
    function ResetPassword(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.yes = 'yes';
    }
    ResetPassword.prototype.resetPassword = function (email) {
        return email;
    };
    ResetPassword = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'reset-password',
            template: __webpack_require__("../../../../../src/app/manager/reset-password.html"),
            styles: [__webpack_require__("../../../../../src/app/manager/manager.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialogRef */], Object])
    ], ResetPassword);
    return ResetPassword;
}());



/***/ }),

/***/ "../../../../../src/app/manager/reset-password.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ViewsContainer\">\r\n    <div class=\"dialogTitle\">\r\n    <h1 mat-dialog-title> تغيير الرقم السري</h1>\r\n    <h4> يرجى إدخال البريد الإلكتروني  </h4>\r\n\r\n    <div mat-dialog-content>\r\n        <mat-form-field>\r\n          <input matInput  name=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" [(ngModel)]=\"email\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n  </div>\r\n    <div mat-dialog-actions class=\"DialogOptionBtn\">\r\n      \r\n      <button mat-button [mat-dialog-close]=\"resetPassword(email)\"  cdkFocusInitial>إرسال </button>\r\n      <button mat-button [mat-dialog-close]=\"\"  >إلغاء الأمر </button>\r\n    </div>\r\n    \r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/my-form/my-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\r\n    min-width: 150px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  \r\n  .formContainer\r\n  {\r\n    font-family: 'Amiri' !important;\r\n      margin: 10% 20%;\r\n      -ms-flex-item-align: center;\r\n          -ms-grid-row-align: center;\r\n          align-self: center;\r\n      \r\n  }\r\n  \r\n  p mat-form-field\r\n  {\r\n    text-align: right;\r\n    font-size: 18px;\r\n    float: right;\r\n    text-indent: 1.5px; \r\n  }\r\n  \r\n  p mat-form-field app-input-file\r\n  {\r\n    width: 100%;\r\n    float: right;\r\n    text-indent: 1.5px;\r\n    text-align: right;\r\n    font-size: 18px;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-form/my-form.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<mat-card class=\"formContainer\" >\r\n  <mat-card-title>\t\r\n    <h2> إضافة تصنيف </h2>\r\n  </mat-card-title>\r\n\r\n  <form class=\"example-form\">\r\n\r\n  \r\n    <p>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"الأسم \">\r\n      </mat-form-field>\r\n    </p>\r\n  \r\n    <p>\r\n    <mat-form-field class=\"example-full-width \">\r\n       <!-- <app-input-file formControlName=\"basicfile\" placeholder=\" إضافة صورة \" ></app-input-file>-->\r\n        <mat-icon matSuffix>folder</mat-icon>\r\n      </mat-form-field>\r\n    </p>\r\n<p>\r\n    <button type=\"submit\" mat-raised-button>إضافة </button>\r\n    <button type=\"cancel\" mat-raised-button>إلغاء  </button>\r\n  </p> \r\n   <!-- <p>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input  type=\"\" >\r\n    </mat-form-field>\r\n   </p>  -->\r\n\r\n  </form>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/my-form/my-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MyFormComponent = /** @class */ (function () {
    function MyFormComponent() {
        this.discription = "";
        this.name = "";
    }
    MyFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-form',
            template: __webpack_require__("../../../../../src/app/my-form/my-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/my-form/my-form.component.css")]
        })
    ], MyFormComponent);
    return MyFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product/Inv.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewInv; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewInv = /** @class */ (function () {
    function ViewInv(router) {
        this.router = router;
        this.title = "المخزون ";
        this.AddBtn = "إضافة كمية للمخزون ";
        this.items = [
            { 'name': 'product!', 'id': '1', 'img': 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg' },
            { 'name': 'product2', 'id': '2', 'img': 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg' },
            { 'name': 'product3', 'id': '3', 'img': 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg' },
            { 'name': 'product4', 'id': '4', 'img': 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg' },
            { 'name': 'product5', 'id': '5', 'img': 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg' },
            { 'name': 'product6', 'id': '6', 'img': 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg' },
            { 'name': 'product7', 'id': '7', 'img': 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg' },
            { 'name': 'product8', 'id': '8', 'img': 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg' },
            { 'name': 'product9', 'id': '9', 'img': 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg' },
            { 'name': 'product10', 'id': '10', 'img': 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg' },
            { 'name': 'product11', 'id': '11', 'img': 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg' },
            { 'name': 'product12', 'id': '12', 'img': 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg' }
        ];
    }
    ViewInv.prototype.ngOnInit = function () {
    };
    ViewInv.prototype.viewProduct = function (item) {
        confirm('inside the method' + item.id);
        this.router.navigate(['View_Producct', item.id]);
    };
    ViewInv.prototype.deletItem = function (item) {
        confirm('inside the method' + item.id);
    };
    ViewInv.prototype.Add = function () {
        this.router.navigate(['/Add_Product']);
    };
    ViewInv = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'view-Inv',
            template: __webpack_require__("../../../../../src/app/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ViewInv);
    return ViewInv;
}());



/***/ }),

/***/ "../../../../../src/app/product/add-Quantity.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ViewsContainer\">\r\n  <div class=\"dialogTitle\">\r\n  <h1 mat-dialog-title> إضافة كمية لـ{{data.name}}</h1>\r\n  <h2> الكمية المتوفرة {{data.inventory}}</h2>\r\n  <div mat-dialog-content>\r\n    <mat-form-field>\r\n      <input matInput  type=\"number\" [(ngModel)]=\"newQuantity\" min=\"0\">\r\n    </mat-form-field>\r\n  </div>\r\n</div>\r\n  <div mat-dialog-actions class=\"DialogOptionBtn\">\r\n    \r\n    <button mat-button [mat-dialog-close]=\"addquantity(newQuantity,data.inventory)\" cdkFocusInitial>إضافة </button>\r\n    <button mat-button [mat-dialog-close]=\"\"  >إلغاء الأمر </button>\r\n  </div>\r\n  \r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/product/add-product/add-Category.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"ViewsContainer\">\n      <div class=\"dialogTitle\">\n      <h1 mat-dialog-title> إضافة تصنيف جديد</h1>\n      <div mat-dialog-content>\n        <mat-form-field>\n          <input matInput  type=\"text\" [(ngModel)]=\"data.newCategory\" >\n        </mat-form-field>\n      </div>\n    </div>\n      <div mat-dialog-actions class=\"DialogOptionBtn\">\n        \n        <button mat-button [mat-dialog-close]=\"data.newCategory\" cdkFocusInitial>إضافة </button>\n        <button mat-button [mat-dialog-close]=\"\">إلغاء الأمر </button>\n      </div>\n      \n      </div>"

/***/ }),

/***/ "../../../../../src/app/product/add-product/add-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\r\n  min-width: 150px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.formContainer\r\n{\r\n  display: inline-table;\r\n  font-family: 'Amiri' !important;\r\n    margin: 1% 2%;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center; \r\n    \r\n}\r\n\r\n.selectOption\r\n{\r\n  width: 100%;\r\n  font-size: 1em;\r\n}\r\n\r\n.center\r\n{\r\n  text-align: center;\r\n}\r\n\r\n.blueBtn\r\n{\r\n\r\n    background-color: #6Dc4e2; \r\n\r\n}\r\n\r\n.greyBtn\r\n{\r\n    background-color:#A8A8A8;\r\n\r\n}\r\n\r\n.Btns\r\n{\r\n    color:white;\r\n    height: 3em;\r\n   \r\n    width: 12em;\r\n    margin: 1em !important;\r\n}\r\n\r\ntd mat-form-field\r\n{\r\n\r\n  text-align: right;\r\n  font-size: 18px;\r\n  float: right;\r\n  line-height: 2;\r\n}\r\n\r\ninput[type=\"number\"]::-webkit-outer-spin-button,\r\ninput[type=\"number\"]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\ninput[type=\"number\"] {\r\n  -moz-appearance: textfield;\r\n}\r\n\r\n.ok\r\n{\r\n  background-color: #6dc4e2;\r\n}\r\n\r\n.cancle\r\n{\r\n  background-color: #a8a8a8;\r\n}\r\n\r\ntable\r\n{\r\n\r\n   width: 100%;\r\n}\r\n\r\ntd button\r\n{\r\n width: 100%;\r\n height: 100%;\r\n}\r\n\r\ntd mat-form-field app-input-file\r\n{\r\n  float: right;\r\n  text-indent: 1.5px;\r\n  text-align: right;\r\n  font-size: 18px;\r\n}\r\n\r\ndiv {\r\n  text-align: right;\r\n}\r\n\r\n.red{\r\n  color: red;\r\n}\r\n\r\n.dialogTitle , .DialogOptionBtn\r\n{\r\n  display: -ms-inline-grid;;\r\n  direction: rtl;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/add-product/add-product.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar   style=\"background-color:transparent\">\r\n    <span class=\"primary\">\r\n        <a  (click)=\"gobacktoProducts()\" > <h6>العودة إلى عرض المنتجات </h6></a> \r\n    </span>\r\n    <span class=\"toolbar-spacer\"></span>\r\n   </mat-toolbar>\r\n\r\n             \r\n   <div *ngIf=\"inventory.errors && (inventory.dirty || inventory.touched)\" class=\"alert alert-danger\">\r\n    <mat-error [hidden]=\"!inventory.errors.required\" >   *يرجى إدخال الكمية المتوفرة من المنتج</mat-error >\r\n</div>\r\n<div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"alert alert-danger\">\r\n  <mat-error [hidden]=\"!name.errors.required\" >*يرجى ادخال اسم المنتج</mat-error>\r\n</div>\r\n          \r\n<div *ngIf=\"price.errors && (price.dirty || price.touched)\" class=\"alert alert-danger\">\r\n  <mat-error [hidden]=\"!price.errors.required\" >   *يرجى إدخال السعر المرغوب به لبيع المنتج</mat-error>\r\n</div>\r\n\r\n<div *ngIf=\"cost.errors && (cost.dirty || cost.touched)\" class=\"alert alert-danger\">\r\n  <mat-error [hidden]=\"!cost.errors.required\" >*يرجى إدخال تكلفة شرائك للمنتج</mat-error>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"category.errors && (category.dirty || category.touched)\" class=\"alert alert-danger\">\r\n  <mat-error >*يرجى أن تختار تصنيف للمنتج</mat-error>\r\n</div>\r\n<mat-card class=\"formContainer\" >\r\n\r\n    <mat-card-title>\t  <h2> إضافة منتج </h2>  </mat-card-title>\r\n\r\n    <mat-card-content>\r\n    <form #productForm=\"ngForm\" (ngSubmit)=\"onSubmit(productForm)\" dir=\"rtl\">\r\n      <input type=\"hidden\" name=\"$key\" #$key=\"ngModel\"  [(ngModel)]=\"productService.selectedProduct.$key\">\r\n      <input type=\"hidden\" name=\"picPath\" #picPath=\"ngModel\"   [(ngModel)]=\"productService.selectedProduct.picPath\">\r\n      <input type=\"hidden\" name=\"picName\" #picName=\"ngModel\"  [(ngModel)]=\"productService.selectedProduct.picName\">\r\n\r\n    <div class=\"form-group col-md-6 col-sm-12\">\r\n          <label > <h4> اسم المنتج  <span class=\"red\">* </span> </h4> </label>\r\n          <input matInput    name=\"name\" #name=\"ngModel\" \r\n          [(ngModel)]=\"productService.selectedProduct.name\" class=\"form-control\"\r\n          placeholder=\"مثال: قلم أحمر \" required>\r\n          <!-- <mat-error *ngIf=\"ID.invalid\">خانة مطلوبة </mat-error> -->\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group col-md-6 col-sm-12\">\r\n          <label > <h4> وصف المنتج </h4> </label>\r\n          <input matInput    name=\"description\" #description=\"ngModel\" \r\n          [(ngModel)]=\"productService.selectedProduct.description\" class=\"form-control\"\r\n          placeholder=\"مثال: قلم أحمر للكتابة \">       \r\n    </div>\r\n    <div class=\"form-group col-md-6 col-sm-12\">\r\n           <label > <h4> سعر البيع المنتج  <span class=\"red\">* </span> </h4> </label>\r\n            <input matInput type=\"number\"  name=\"price\" #price=\"ngModel\" \r\n            [(ngModel)]=\"productService.selectedProduct.price\" class=\"form-control\"\r\n            placeholder=\"مثال: 2.5\" required>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-group col-md-6 col-sm-12\">\r\n          <label > <h4> سعر تكلفة المنتج  <span class=\"red\">* </span> </h4> </label>\r\n           <input matInput type=\"number\"    name=\"cost\" #cost=\"ngModel\" class=\"form-control\"\r\n           [(ngModel)]=\"productService.selectedProduct.cost\" \r\n           placeholder=\"مثال: 1\" required>\r\n          \r\n    \r\n    </div>\r\n \r\n\r\n    <div class=\"form-group col-md-6 col-sm-12\">\r\n          <label > <h4> الكمية المتوفرة من المنتج  <span class=\"red\">* </span> </h4> </label>\r\n          <input matInput type=\"number\"    name=\"inventory\" #inventory=\"ngModel\" \r\n          [(ngModel)]=\"productService.selectedProduct.inventory\"   class=\"form-control\"\r\n          placeholder=\"مثال: 6\" required>\r\n\r\n    </div>\r\n <!-- [(ngModel)]=\"productService.selectedProduct.category\" -->\r\n            \r\n    <div class=\"form-group col-md-6 col-sm-12\">\r\n        <mat-form-field class=\"selectOption\" >\r\n          <mat-select  name=\"category\" #category=\"ngModel\"         \r\n            placeholder=\"التصنيف\"  \r\n            [(ngModel)]='selectvalue'\r\n            >\r\n            <mat-option *ngFor=\"let category of cat\" [value]=\" category.$key \">\r\n              {{category.$key}}\r\n            </mat-option>\r\n            <mat-option  *ngIf=\"exist\" value=\"غير ذلك\">\r\n                غير ذلك\r\n              </mat-option>\r\n              <mat-option  [value]=\"New\" (click)='addNewCategory()'>\r\n                {{New}}\r\n              </mat-option>\r\n            </mat-select>\r\n    </mat-form-field>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group custom-file col-md-6 col-sm-12\">\r\n         <label> <h4>صورة المنتج:</h4>  </label>\r\n           <input type=\"file\" (change)=\"detectFiles($event)\" class=\"form-control custom-file-input\" accept=\"image/gif, image/jpeg, image/png\" >\r\n                \r\n           <p>\r\n              <small > الصيغ المسموح بها gif , jpeg ,png</small> </p>  \r\n      </div>\r\n \r\n    <div class=\"col-md-6 col-sm-12\">\r\n    <div *ngIf=\"num\" >\r\n      <div class=\"progress\">\r\n        <div class=\"progress-bar progress-bar-animated\" [ngStyle]=\"{ 'width': num + '%' }\"></div>\r\n      </div>\r\n      التحميل: | {{num}}% اكنمل\r\n    </div>\r\n    </div>\r\n\r\n    <!--\r\n    <div class=\"form-group\">\r\n      <label>Salary</label>\r\n      <div class=\"input-group\">\r\n          <div class=\"input-group-addon\">\r\n            <i class=\"fa fa-dollar\"></i>\r\n          </div>\r\n          <input    name=\"salary\" #salary=\"ngModel\" [(ngModel)]=\"productService.selectedProduct.salary\" placeholder=\"0\">\r\n      </div>\r\n    </div>\r\n    -->\r\n    <div class=\"form-group col-md-12 col-sm-12 center\">\r\n    <button  mat-raised-button class=\"Btns  blueBtn\"  type=\"submit\"  [disabled]=\"!productForm.valid\">\r\n      إضافة</button>\r\n\r\n     <button mat-raised-button  type=\"button\"  class=\"Btns greyBtn \"  (click)=\"openDialog()\">\r\n    إلغاء</button>\r\n  </div>\r\n\r\n   \r\n      <!-- <button class=\"btn ok\" color=\"primary\"  type=\"submit\" [disabled]=\"!productForm.valid\">\r\n        <i class=\"fa fa-floppy-o\"></i>\r\n         إضافة</button>\r\n       \r\n         <button class=\"btn cancle\" color=\"accent\" type=\"button\" (click)=\"openDialog()\">\r\n        <i class=\"fa fa-repeat\"></i>\r\n         إالغاء</button> -->\r\n      \r\n    </form>\r\n  </mat-card-content>\r\n  </mat-card>"

/***/ }),

/***/ "../../../../../src/app/product/add-product/add-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return confirmMessageanclePro; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_service__ = __webpack_require__("../../../../../src/app/product/shared/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(productService, route, dialog, router, flashMensaje, db) {
        this.productService = productService;
        this.route = route;
        this.dialog = dialog;
        this.router = router;
        this.flashMensaje = flashMensaje;
        this.db = db;
        this.category = [];
        this.exist = true;
        this.New = "إضافة تصنيف جديد";
    }
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getData();
        this.resetForm();
        this.temp = this.route.snapshot.params.id;
        if ((this.temp != '') && (this.temp != ':id')) {
            this.onEdit();
        }
        this.category = [];
        this.db.list(window.name + '/products', function (query) { var m = query.orderByChild('category'); return m; }).snapshotChanges().subscribe(function (item) {
            for (var element2 in item) {
                var y = item[element2].payload.toJSON();
                y["$key"] = item[element2].key;
                if (y["$key"] == "غير ذلك")
                    _this.exist = false;
                _this.category.unshift(y);
            }
            _this.cat = Array.from(_this.category);
        });
    };
    AddProductComponent.prototype.detectFiles = function (event) {
        this.selectedFiles = event.target.files;
    };
    AddProductComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.productService.selectedProduct.category = this.selectvalue;
        if (this.selectedFiles) {
            var file_1 = this.selectedFiles.item(0);
            var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref(file_1.name);
            var uploadTask_1 = storageRef.put(file_1);
            uploadTask_1.on(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                // upload in progress
                _this.num = (uploadTask_1.snapshot.bytesTransferred / uploadTask_1.snapshot.totalBytes) * 100;
            }, function (error) {
                // upload failed
            }, function () {
                // upload success
                if (productForm.value.$key == null) {
                    _this.productService.insertProduct(productForm.value, uploadTask_1.snapshot.downloadURL, file_1.name);
                    _this.resetForm(productForm);
                    _this.router.navigate(['mainPage/product']).then(function (res) {
                        _this.flashMensaje.show('تم تحديث المنتج بنجاح.', { cssClass: 'alert-success', timeout: 100000,
                            closeOnClick: true, showCloseBtn: true });
                    });
                    //  this.tostr.success('Submitted Succcessfully', 'product is added');
                }
                else {
                    _this.productService.updateProduct(productForm.value, uploadTask_1.snapshot.downloadURL, file_1.name);
                    _this.resetForm(productForm);
                    _this.router.navigate(['mainPage/product']).then(function (res) {
                        _this.flashMensaje.show('تم تحديث المنتج بنجاح.', { cssClass: 'alert-success', timeout: 100000,
                            closeOnClick: true, showCloseBtn: true });
                    });
                    //  this.tostr.success('Submitted Succcessfully', 'product is updated');
                }
            });
        }
        else {
            if (productForm.value.$key == null) {
                this.productService.insertProduct(productForm.value, 'none', 'none');
                this.resetForm(productForm);
                this.router.navigate(['mainPage/product']).then(function (res) {
                    _this.flashMensaje.show('تم إضافة المنتج بنجاح.', { cssClass: 'alert-success', timeout: 100000,
                        closeOnClick: true, showCloseBtn: true });
                });
                //   this.tostr.success('Submitted Succcessfully', 'product is added');
            }
            else {
                this.productService.updateProduct(productForm.value, 'none', 'none');
                this.resetForm(productForm);
                this.router.navigate(['mainPage/product']).then(function (res) {
                    _this.flashMensaje.show('تم تحديث بيانات المنتج بنجاح.', { cssClass: 'alert-success', timeout: 100000,
                        closeOnClick: true, showCloseBtn: true });
                });
                //   this.tostr.success('Submitted Succcessfully', 'product is updated');
            }
        }
    };
    AddProductComponent.prototype.onEdit = function () {
        var tempArray = this.temp.split(",");
        var $key = tempArray[0];
        var name = tempArray[1];
        var category = tempArray[2];
        var cost = Number(tempArray[3]);
        var description = tempArray[4];
        var inventory = Number(tempArray[5]);
        var picName = tempArray[6];
        var picPath = tempArray[7];
        var price = Number(tempArray[8]);
        var pp = { $key: $key, name: name, category: category, cost: cost, price: price, picPath: picPath, inventory: inventory, picName: picName, description: description };
        this.productService.selectedProduct = Object.assign({}, pp);
        //this.router.navigate(["Add_Product"]);
    };
    AddProductComponent.prototype.resetForm = function (productForm) {
        if (productForm != null) {
            productForm.reset();
            this.num = null;
            this.selectedFiles = null;
        }
        this.productService.selectedProduct = {
            $key: null,
            name: '',
            price: null,
            cost: null,
            inventory: null,
            description: '',
            category: '',
            picPath: '',
            picName: '',
        };
    };
    AddProductComponent.prototype.addNewCategory = function () {
        var _this = this;
        if (this.selectvalue != this.New)
            return;
        var dialogRef = this.dialog.open(addCategory, {
            data: { newCategory: '' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != null) {
                _this.New = result;
                _this.selectvalue = result;
            }
            else {
                _this.selectvalue = '';
                _this.New = 'إضافة تصنيف جديد';
            }
        });
    };
    AddProductComponent.prototype.gobacktoProducts = function () {
        this.router.navigate(['mainPage/product']);
    };
    AddProductComponent.prototype.openDialog = function (item) {
        var _this = this;
        var dialogRef = this.dialog.open(confirmMessageanclePro, {
            data: { message: '' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.resetForm();
                _this.router.navigate(['mainPage/product']);
            }
        });
    };
    AddProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__("../../../../../src/app/product/add-product/add-product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/add-product/add-product.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_product_service__["a" /* ProductService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AddProductComponent);
    return AddProductComponent;
}());

var addCategory = /** @class */ (function () {
    function addCategory(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    addCategory.prototype.addCategory = function (newCategory) {
        return newCategory;
    };
    addCategory = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-quantity',
            template: __webpack_require__("../../../../../src/app/product/add-product/add-Category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/inv.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatDialogRef */], Object])
    ], addCategory);
    return addCategory;
}());

var confirmMessageanclePro = /** @class */ (function () {
    function confirmMessageanclePro(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    confirmMessageanclePro.prototype.confirm = function () {
        return true;
    };
    confirmMessageanclePro = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'confirm-message-cancle-pro',
            template: __webpack_require__("../../../../../src/app/product/add-product/confirm-Message-cancle-pro.html"),
            styles: [__webpack_require__("../../../../../src/app/product/add-product/add-product.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatDialogRef */], Object])
    ], confirmMessageanclePro);
    return confirmMessageanclePro;
}());



/***/ }),

/***/ "../../../../../src/app/product/add-product/confirm-Message-cancle-pro.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ViewsContainer\">\r\n        <div class=\"dialogTitle\">\r\n        <h1 mat-dialog-title> تأكيد</h1>\r\n        <h4> هل أنت متأكد من إلغاء عملية الإضافة؟ </h4>\r\n      </div>\r\n        <div mat-dialog-actions class=\"DialogOptionBtn\">\r\n          \r\n          <button mat-button [mat-dialog-close]=\"confirm()\" cdkFocusInitial>نعم متأكد </button>\r\n          <button mat-button [mat-dialog-close]=\"\"  >إلغاء الأمر </button>\r\n        </div>\r\n        \r\n        </div>"

/***/ }),

/***/ "../../../../../src/app/product/inv.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".viewProduct\r\n{\r\n    width: 25%;\r\n    height: 25%;\r\n    max-height: 250px;\r\n    max-width: 250px;\r\n    min-height: 200px;\r\n    min-width: 200px;\r\n    text-align: center;\r\n    border: 25px;\r\n    margin: 12px 0px 7px 9px;\r\n    display: inline-table;\r\n}\r\n.ViewsContainer\r\n{\r\n    margin-right:15px; \r\n    -ms-flex-line-pack: center; \r\n        align-content: center;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.OptionBtn\r\n{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n}\r\n.PageTitle\r\n{\r\n    margin: 15px;\r\n    height: 40px;\r\n}\r\n.PageTitle h2\r\n{\r\n    margin: 0px;\r\n}\r\n.Viewimg\r\n{\r\n    margin-top: 0px !important ; \r\n    width: 150px;\r\n    height: 150px;\r\n    overflow-wrap: normal;\r\n    overflow: hidden;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center\r\n}\r\n.btn-Add\r\n{\r\n    float: left;\r\n}\r\n.toolbar-spacer {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n  }\r\n.OptionBtn\r\n  {\r\n      margin: 0px;\r\n      width: 100%;\r\n      -ms-flex-line-pack: center;\r\n          align-content: center;\r\n      width: -webkit-fit-content;\r\n      width: -moz-fit-content;\r\n      width: fit-content;\r\n      height: -webkit-fit-content;\r\n      height: -moz-fit-content;\r\n      height: fit-content;\r\n  }\r\n.PageTitle\r\n  {\r\n      width: auto;\r\n      margin: 15px;\r\n      height: 40px;\r\n  }\r\n.PageTitle span h2\r\n  {\r\n      font-size: 22px;\r\n      margin: 0px;\r\n  }\r\nmat-toolbar mat-toolbar-row span mat-form-field\r\n  {\r\n      text-align: right;\r\n      font-size: 14px;\r\n      float: right;\r\n      line-height: 2;\r\n  }\r\n.dialogTitle , .DialogOptionBtn\r\n  {\r\n    display: -ms-inline-grid;;\r\n    direction: rtl;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n}\r\n\r\n\r\n ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/ivc-report/ivc-report.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar  class=\"PageTitle\" style=\"background-color:transparent\">\r\n    <span class=\"toolbar-spacer\"></span>\r\n<span color=\"primary\">   <h2>  تقرير المخزون  </h2> </span>\r\n<span class=\"toolbar-spacer\"></span>\r\n   </mat-toolbar>     \r\n\r\n<mat-tab-group class=\"tab-group\" (selectedTabChange)='selectChange($event)'>\r\n    <mat-tab label=\"التقرير\" >\r\n      <div class=\"tabContent\">\r\n          <mat-table #table [dataSource]=\"dataSource\"  matSort>\r\n\r\n              <!-- Position Column -->\r\n<!--               \r\n              <ng-container [matColumnDef]=\"header\"  *ngFor='let header of displayedColumns' >\r\n                <mat-header-cell *matHeaderCellDef> {{info[header]}} </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element; \">  {{element.date}}    </mat-cell>\r\n              </ng-container>\r\n                displayedColumns=['name','inventory','cost','price','category']; -->\r\n              \r\n              <ng-container matColumnDef=\"name\" >\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header  > اسم المنتج  </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"inventory\"  >\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header > الكمية المتوفرة </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\"> {{row.inventory}} </mat-cell>\r\n                  </ng-container>\r\n                  <ng-container matColumnDef=\"cost\" >\r\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> تكلفة المنتج  </mat-header-cell>\r\n                      <mat-cell *matCellDef=\"let row\"> {{row.cost}} </mat-cell>\r\n                    </ng-container>\r\n\r\n                    <ng-container matColumnDef=\"price\" >\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> سعر المنتج  </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let row\"> {{row.price}} </mat-cell>\r\n                      </ng-container>\r\n                      <ng-container matColumnDef=\"category\"  >\r\n                          <mat-header-cell *matHeaderCellDef mat-sort-header > تصنيف المنتج </mat-header-cell>\r\n                          <mat-cell *matCellDef=\"let row\"> {{row.category}} </mat-cell>\r\n                        </ng-container>\r\n\r\n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n              <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n\r\n            </mat-table>\r\n\r\n            \r\n\r\n            <mat-paginator dir=\"rtl\" [pageSizeOptions]=\"[5, 10, 15, 100]\" ></mat-paginator>\r\n\r\n          \r\n      </div>\r\n    </mat-tab>\r\n\r\n         \r\n    <mat-tab label=\"الرسم البياني\"  >\r\n        <div class=\"tabContent\"  *ngIf=\"chart\" >\r\n            <canvas id=\"pie\"  class=\"chart-bar\" style=\" width:fit-content ; height:fit-content;     overflow:hidden;\" ></canvas>\r\n           \r\n           </div>     \r\n    </mat-tab>\r\n</mat-tab-group>\r\n<!-- (matSortChange)=\"sortData($event)\" -->\r\n "

/***/ }),

/***/ "../../../../../src/app/product/ivc-report/ivc-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IvcReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_service__ = __webpack_require__("../../../../../src/app/product/shared/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IvcReportComponent = /** @class */ (function () {
    function IvcReportComponent(db, productService) {
        this.db = db;
        this.productService = productService;
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["J" /* MatTableDataSource */](new Array());
        this.totalS = 0;
        this.reportName = 'تقرير مبيعات موظف  ';
        this.displayedColumns = ['category', 'name', 'inventory', 'cost', 'price'];
        //ngOnInit
        this.x = [];
        this.y = [];
        this.startDate = new Date();
        this.endDate = new Date();
    }
    IvcReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        var nn = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MatPaginatorIntl */]();
        nn.itemsPerPageLabel = "عدد الصفوف في الصفحة ";
        nn.firstPageLabel = "الصفحة الأولى ";
        nn.lastPageLabel = "الصفحة الأخيرة ";
        nn.nextPageLabel = "الصفحة التالية";
        nn.previousPageLabel = "الصفحة السابقة";
        nn.getRangeLabel = function (page, pageSize, length) { if (length == 0 || pageSize == 0) {
            return "0 \u0645\u0646 " + length;
        } length = Math.max(length, 0); var startIndex = page * pageSize; var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize; return startIndex + 1 + " - " + endIndex + " \u0645\u0646 " + length; };
        this.paginator._intl = nn;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.data = [];
        var x = this.productService.getData();
        x.snapshotChanges().subscribe(function (item) {
            for (var element2 in item) {
                var y = item[element2].payload.key;
                _this.db.list(window.name + '/products/' + y).snapshotChanges().subscribe(function (element) {
                    element.forEach(function (element2) {
                        var y = element2.payload.toJSON();
                        y["$key"] = element2.key;
                        _this.dataSource.data.push(y);
                        _this.dataSource._updateChangeSubscription();
                    });
                });
            }
        });
        this.totalInv();
        this.creatChart();
    };
    IvcReportComponent.prototype.totalInv = function () {
        var _this = this;
        this.totalS = 0;
        var product;
        this.dataSource.data.forEach(function (product) {
            _this.totalS += product.inventory;
        });
        return this.totalS;
    };
    IvcReportComponent.prototype.selectChange = function (evet) {
        if (evet.index != 0)
            this.creatChart();
    };
    IvcReportComponent.prototype.creatChart = function () {
        var label = this.dataSource.data.map(function (product) { return product.name; });
        var values = this.dataSource.data.map(function (product) { return product.inventory; });
        if (this.chart != null)
            if (this.chart.data)
                this.chart.destroy();
        this.chart = new __WEBPACK_IMPORTED_MODULE_4_chart_js__["Chart"]('pie', {
            type: 'bar',
            data: {
                labels: label,
                datasets: [{
                        data: values,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.4)',
                            'rgba(54, 162, 235, 0.4)',
                            'rgba(255, 206, 86, 0.4)',
                            'rgba(75, 192, 192, 0.4)',
                            'rgba(153, 102, 255, 0.4)',
                            'rgba(255, 159, 64, 0.4)',
                            'rgba(102, 153, 255,0.4)',
                            'rgba(255, 51, 153,0.4)',
                            'rgba(255, 102, 0, 0.4)',
                            'rgba(51, 102, 255,0.4)',
                            'rgba(255, 99, 132, 0.4)',
                            'rgba(54, 162, 235, 0.4)',
                            'rgba(255, 206, 86, 0.4)',
                            'rgba(75, 192, 192, 0.4)',
                            'rgba(153, 102, 255, 0.4)',
                            'rgba(255, 159, 64, 0.4)',
                            'rgba(102, 153, 255,0.4)',
                            'rgba(255, 51, 153,0.4)',
                            'rgba(255, 102, 0, 0.4)',
                            'rgba(51, 102, 255,0.4)',
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(102, 153, 255, 1)',
                            'rgba(255, 51, 153, 1)',
                            'rgba(255, 102, 0, 1)',
                            'rgba(51, 102, 255, 1)',
                            'rgba(255, 99, 132, 0.4)',
                            'rgba(54, 162, 235, 0.4)',
                            'rgba(255, 206, 86, 0.4)',
                            'rgba(75, 192, 192, 0.4)',
                            'rgba(153, 102, 255, 0.4)',
                            'rgba(255, 159, 64, 0.4)',
                            'rgba(102, 153, 255,0.4)',
                            'rgba(255, 51, 153,0.4)',
                            'rgba(255, 102, 0, 0.4)',
                            'rgba(51, 102, 255,0.4)',
                        ],
                    }]
            },
            options: {
                responsive: true,
                legend: {
                    display: false,
                    position: 'right',
                },
                scales: {
                    xAxes: [{
                            scaleLabel: {
                                labelString: "المنتجات",
                                display: true,
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                    yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true
                            },
                            scaleLabel: {
                                labelString: "الكمية المتوفرة ",
                                display: true,
                            },
                        }],
                },
                tooltips: {
                    mode: 'point'
                },
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("pie", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], IvcReportComponent.prototype, "pie", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatSort */])
    ], IvcReportComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["u" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["u" /* MatPaginator */])
    ], IvcReportComponent.prototype, "paginator", void 0);
    IvcReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ivc-report',
            template: __webpack_require__("../../../../../src/app/product/ivc-report/ivc-report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/charts/sales-report/sales-report.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_product_service__["a" /* ProductService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1__shared_product_service__["a" /* ProductService */]])
    ], IvcReportComponent);
    return IvcReportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".viewProduct\r\n{\r\n    width: 25%;\r\n    height: 25%;\r\n    max-height: 250px;\r\n    max-width: 250px;\r\n    min-height: 200px;\r\n    min-width: 200px;\r\n    text-align: center;\r\n    border: 25px;\r\n    margin: 12px 0px 7px 9px;\r\n    display: inline-table;\r\n}\r\n.ViewsContainer\r\n{\r\n    margin-right:15px; \r\n    -ms-flex-line-pack: right; \r\n        align-content: right;\r\n    -ms-flex-item-align: right;\r\n        -ms-grid-row-align: right;\r\n        align-self: right;\r\n    -webkit-box-align: right;\r\n        -ms-flex-align: right;\r\n            align-items: right;\r\n}\r\n.OptionBtn\r\n{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n}\r\n.Viewimg\r\n{\r\n    margin-top: 5px;\r\n    width: 150px;\r\n    height: 150px;\r\n    overflow-wrap: normal;\r\n    overflow: hidden;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center\r\n}\r\n.btn-Add\r\n{\r\n    float: left;\r\n}\r\n.toolbar-spacer {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n  }\r\n.OptionBtn\r\n  {\r\n      margin: 0px;\r\n      width: 100%;\r\n      -ms-flex-line-pack: center;\r\n          align-content: center;\r\n      width: -webkit-fit-content;\r\n      width: -moz-fit-content;\r\n      width: fit-content;\r\n      height: -webkit-fit-content;\r\n      height: -moz-fit-content;\r\n      height: fit-content;\r\n  }\r\nmat-toolbar mat-toolbar-row span mat-form-field mat-select , mat-toolbar mat-toolbar-row span mat-form-field\r\n  , mat-toolbar mat-toolbar-row span mat-form-field mat-select mat-option \r\n  {\r\n      text-align: right !important;\r\n      font-size: 16px;\r\n      float: right !important;\r\n      line-height: 2;\r\n      width: 100%;\r\n  }\r\n.contaner\r\n{\r\n    background-color: whitesmoke;\r\n    border-radius: 1%;\r\n    /* height: 60px;\r\n    display: flex; */\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    padding: 0 16px;\r\n    width: 100%;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    white-space: nowrap;\r\n}\r\n.PageTitle\r\n{\r\n    min-height: 60px;\r\n    width: 99%;\r\n    margin: 2% 0.5%;\r\n\r\n}\r\n.contaner div\r\n{\r\n    margin-top:2em \r\n}\r\n.onClick\r\n{\r\n    cursor: pointer;\r\n\r\n}\r\n/* .title\r\n{\r\n    font-size: 2em;\r\n    margin: 0px;\r\n} */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n      \r\n      \r\n   <div  class=\"PageTitle col-md-12 col-sm-12\">\r\n      <div class=\" col-md-12 col-sm-12 contaner\" dir=\"rtl\">\r\n     \r\n      <!-- <span class=\"toolbar-spacer\"></span> -->\r\n      <div  class=\" col-md-4 col-sm-12\" > \r\n          <button mat-button (click)=\"AddProd()\" color=\"primary\"  class='BtnPos' > <mat-icon>add</mat-icon>  {{AddProds}}</button> \r\n      </div>\r\n\r\n\r\n\r\n      <div   class=\" col-md-4 col-sm-12\" > \r\n              <span color=\"primary\">   <h2  class='title BtnPos'> {{ title }} </h2> </span>\r\n           \r\n      </div> \r\n\r\n      <div class=\"col-md-4 col-sm-12\"  >\r\n          <mat-form-field class=\"example-full-width\" class='BtnPos'>\r\n              <mat-label>عرض بحسب التصنيف</mat-label>            \r\n                  <mat-select  name=\"category\"  \r\n                   [(value)]=\"selected\"\r\n                   (change)=\"productToggle(selected)\">\r\n                    <mat-option  value=\"ALLCAT\"  >\r\n                      عرض الجميع \r\n                    </mat-option>\r\n      \r\n                    <mat-option *ngFor=\"let category of category\" [value]=\" category.$key \">\r\n                      {{category.$key}}\r\n                    </mat-option>\r\n      \r\n                  </mat-select>\r\n                </mat-form-field>\r\n      </div>\r\n \r\n      </div>\r\n      </div>\r\n      <div class=\"col-md-12 col-sm-12\"  >\r\n      \r\n<flash-messages></flash-messages>\r\n</div>\r\n<section class=\"ViewsContainer\"  > \r\n\r\n<mat-card class=\"viewProduct\"  *ngFor=\"let product of tempProducts\" >\r\n   <a class=\"onClick\" (click)=\"viewProduct(product)\"  > <img mat-card-image class=\"Viewimg\" src={{product.picPath}}> </a>\r\n    <mat-card-content  role=\"group\" >\r\n     <h3 class=\"onClick\" (click)=\"viewProduct(product )\" >{{product.name }}</h3> \r\n     <h6> الكمية المتوفرة :\r\n            <span> {{product.inventory }}</span>\r\n     </h6>\r\n     <h6> التصنيف :\r\n            <span> {{product.category }}</span>\r\n     </h6>\r\n    </mat-card-content>\r\n    <mat-card-actions role=\"group\" class=\"OptionBtn\">\t\r\n    <button mat-button (click)=\"viewProduct(product )\"> <mat-icon> description </mat-icon> عرض البيانات</button>\r\n    <button mat-button (click)=\"openDialog(product )\"> <mat-icon> add </mat-icon> إضافة كمية  </button>\r\n    </mat-card-actions>\t\r\n</mat-card>\r\n\r\n</section>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addQuantity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_product_service__ = __webpack_require__("../../../../../src/app/product/shared/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ProductComponent = /** @class */ (function () {
    function ProductComponent(router, db, productService, dialog, flashMensaje) {
        this.router = router;
        this.db = db;
        this.productService = productService;
        this.dialog = dialog;
        this.flashMensaje = flashMensaje;
        this.title = "المنتجات";
        this.AddProds = "إضافة منتج";
        this.selected = "ALLCAT";
        this.search = "";
    }
    ProductComponent.prototype.searchProduct = function (st) {
    };
    ProductComponent.prototype.delete = function (category) {
        var _this = this;
        if (confirm(' عند حذفك للتصنيف سوف تحذف جميع المنتجات هذا التصنيف هل أنت متأكد من الحذف؟ ')) {
            this.db.list('products').remove(category.$key).then(function (res) {
                _this.flashMensaje.show('.تم حذ التصنيف وجميع منتجاته بنجاح', { cssClass: 'alert-success', timeout: 100000,
                    closeOnClick: true, showCloseBtn: true });
                _this.router.navigate(['mainPage']);
            }).catch(function (err) {
                _this.flashMensaje.show('حدثت مشكلة أثناء عملية الحذف أرجو المحاولة مرة أخرى.', { cssClass: 'alert-danger', timeout: 100000,
                    closeOnClick: true, showCloseBtn: true });
                _this.router.navigate(['']);
            });
            this.category = [];
        }
    };
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productList = [];
        this.category = [];
        this.db.list(window.name + '/products').snapshotChanges().subscribe(function (item) {
            for (var element2 in item) {
                var y = item[element2].payload.toJSON();
                y["$key"] = item[element2].key;
                _this.category.unshift(y);
                _this.db.list(window.name + '/products/' + item[element2].key).snapshotChanges().subscribe(function (element) {
                    element.forEach(function (element2) {
                        var y = element2.payload.toJSON();
                        y["$key"] = element2.key;
                        // y["picPath"] = this.getImg(y["picPath"]);
                        _this.productList.push(y);
                    });
                });
            }
            _this.productList = [];
            _this.productToggle(_this.selected);
        });
        //this.category.reverse();
    };
    ProductComponent.prototype.productToggle = function (category) {
        var _this = this;
        this.tempProducts = [];
        if (category == "ALLCAT")
            this.tempProducts = this.productList;
        else {
            this.productList.forEach(function (item) {
                if (item.category == category)
                    _this.tempProducts.unshift(item);
            });
        }
    };
    ProductComponent.prototype.viewProduct = function (product) {
        var id = product.$key + "," + product.name + "," + product.category + "," + product.cost + "," + product.description + "," + product.inventory + "," + product.picName + "," + product.picPath + "," + product.price;
        this.router.navigate(['mainPage/View_Producct', id]);
    };
    ProductComponent.prototype.AddCat = function () {
        this.router.navigate(['mainPage/Add_Tag']);
    };
    /*getImg(url: String){
      return url.substring(0,url.indexOf(','));
    }*/
    ProductComponent.prototype.AddProd = function () {
        var id = '';
        this.router.navigate(['mainPage/Add_Product/', id]);
    };
    ProductComponent.prototype.openDialog = function (item) {
        var _this = this;
        var dialogRef = this.dialog.open(addQuantity, {
            data: { name: item.name, inventory: item.inventory }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                var x = _this.productService.updateProductInv(item, result);
                if (result > item.inventory) {
                    _this.flashMensaje.show('تم تحديث كمية المنتج بنجاح.', { cssClass: 'alert-success', timeout: 100000,
                        closeOnClick: true, showCloseBtn: true });
                }
            }
        });
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/product.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_product_service__["a" /* ProductService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__shared_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], ProductComponent);
    return ProductComponent;
}());

var addQuantity = /** @class */ (function () {
    function addQuantity(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    addQuantity.prototype.addquantity = function (newQuantity, inventory) {
        return newQuantity + inventory;
    };
    addQuantity = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-quantity',
            template: __webpack_require__("../../../../../src/app/product/add-Quantity.html"),
            styles: [__webpack_require__("../../../../../src/app/product/inv.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatDialogRef */], Object])
    ], addQuantity);
    return addQuantity;
}());



/***/ }),

/***/ "../../../../../src/app/product/shared/product.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "../../../../../src/app/product/shared/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_model__ = __webpack_require__("../../../../../src/app/product/shared/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = /** @class */ (function () {
    function ProductService(db, firebase) {
        this.db = db;
        this.firebase = firebase;
        this.selectedProduct = new __WEBPACK_IMPORTED_MODULE_2__product_model__["a" /* Product */]();
    }
    ProductService.prototype.getData = function () {
        this.productList = this.db.list(window.name + '/products');
        return this.productList;
    };
    ProductService.prototype.insertProduct = function (product, path, fileName) {
        if (path == 'none') {
            product.picPath = 'https://firebasestorage.googleapis.com/v0/b/erad-system.appspot.com/o/defaultproduct.png?alt=media&token=cea248b8-83e4-4090-8a0f-872f68fc1b1e';
            product.picName = 'defaultproduct.png';
        }
        else {
            product.picPath = path;
            product.picName = fileName;
        }
        if (product.description == '') {
            product.description = "لايوجد وصف";
        }
        if (product.category == '') {
            product.category = "أخرى";
        }
        this.firebase.list(window.name + '/products/' + product.category).push({
            name: product.name,
            price: product.price,
            cost: product.cost,
            inventory: product.inventory,
            description: product.description,
            category: product.category,
            picPath: product.picPath,
            picName: product.picName
        });
    };
    ProductService.prototype.updateProduct = function (product, path, fileName) {
        if (path != 'none') {
            this.deletePicFromStorage(product.picPath);
            product.picPath = path;
            product.picName = fileName;
        }
        this.firebase.list(window.name + '/products/' + product.category).update(product.$key, {
            name: product.name,
            price: product.price,
            cost: product.cost,
            inventory: product.inventory,
            description: product.description,
            category: product.category,
            picPath: product.picPath,
            picName: product.picName
        });
    };
    ProductService.prototype.deleteProduct = function (product) {
        this.firebase.list(window.name + '/products/' + product.category).remove(product.$key);
        this.deletePicFromStorage(product.picName);
    };
    ProductService.prototype.deletePicFromStorage = function (picName) {
        //let fileName = picPath.substring(picPath.indexOf(',')+1);
        if (picName != 'defaultproduct.png') {
            var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
            storageRef.child(picName).delete();
        }
    };
    ProductService.prototype.updateProductInv = function (product, newInv) {
        this.firebase.list(window.name + '/products/' + product.category).update(product.$key, {
            inventory: newInv,
        });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/product/view-product/confirm-Message.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ViewsContainer\">\r\n        <div class=\"dialogTitle\">\r\n        <h1 mat-dialog-title> حذف منتج</h1>\r\n        <h4> هل أنت متأكد من حذف هذا المنتج؟ </h4>\r\n      </div>\r\n        <div mat-dialog-actions class=\"DialogOptionBtn\">\r\n          \r\n          <button mat-button [mat-dialog-close]=\"confirm()\" cdkFocusInitial>حذف </button>\r\n          <button mat-button [mat-dialog-close]=\"\"  >إلغاء الأمر </button>\r\n        </div>\r\n        \r\n        </div>"

/***/ }),

/***/ "../../../../../src/app/product/view-product/view-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-card {\r\n    max-width: 90%;\r\n    margin-right: 5%;\r\n    margin-top: 5%;\r\n    margin-left: 5%;\r\n    margin-bottom: 20%\r\n\r\n  }\r\n  \r\n  .example-header-image {\r\n    /* background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg'); */\r\n    background-size: cover;\r\n\r\n  }\r\n  \r\n  .greenBtn\r\n  { \r\n      \r\n      background-color: #4989A5;\r\n    \r\n  }\r\n  \r\n  .blueBtn\r\n  {\r\n  \r\n      background-color: #6Dc4e2; \r\n  \r\n  }\r\n  \r\n  .greyBtn\r\n  {\r\n      background-color:#A8A8A8;\r\n  \r\n  }\r\n  \r\n  .lightBlueBtn\r\n  {\r\n    background-color:#9DE4F4\r\n  }\r\n  \r\n  .goBack\r\n  {\r\n    color: #4989A5;\r\n    font-size: 0.8em;\r\n    margin: 0;\r\n  }\r\n  \r\n  .title\r\n  {\r\n    font-size: 2.4em;\r\n    margin: 0;\r\n  }\r\n  \r\n  .Btns\r\n  {\r\n      color:white;\r\n      height: 3em;\r\n     \r\n      width: 12em;\r\n      margin: 1em !important;\r\n  }\r\n  \r\n  .info\r\n  {\r\n     \r\n    color: #6Dc4e2;\r\n    font-size: 1em;\r\n  }\r\n  \r\n  .header{\r\n      float: right;\r\n      font-size: 1.5em;\r\n }\r\n  \r\n  .Imgheader\r\n    {\r\n\r\n    font-size: 1.5em;  \r\n    }\r\n  \r\n  img\r\n  {\r\n      width: 100% !important;\r\n      height: 100% !important;\r\n  }\r\n  \r\n  table\r\n  {\r\n      text-align: right;\r\n      width: 100%;\r\n  }\r\n  \r\n  .dialogTitle , .DialogOptionBtn\r\n  {\r\n    display: -ms-inline-grid;;\r\n    direction: rtl;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n}\r\n  \r\n  .ViewsContainer\r\n{\r\n    margin-right:15px; \r\n    -ms-flex-line-pack: center; \r\n        align-content: center;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n  \r\n  .PageTitle\r\n{\r\n    width: auto;\r\n    margin: 15px;\r\n    height: 40px;\r\n}\r\n  \r\n  .PageTitle span h2\r\n{\r\n    font-size: 22px;\r\n    margin: 0px;\r\n}\r\n  \r\n  mat-card-title {\r\n    font-size: 30px;\r\n}\r\n  \r\n  mat-toolbar mat-toolbar-row span mat-form-field\r\n{\r\n    text-align: right;\r\n    font-size: 14px;\r\n    float: right;\r\n    line-height: 2;\r\n}\r\n  \r\n  .toolbar-spacer {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n  }\r\n  \r\n  b{\r\n     font-size: 22px;\r\n }\r\n  \r\n  h5 {\r\n      margin-right: 20px;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/view-product/view-product.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar   style=\"background-color:transparent\">\r\n        <mat-toolbar-row>\r\n    <span class=\"primary\">\r\n        <a  (click)=\"gobacktoProducts()\">  <p class='goBack' >الذهاب إلى عرض  المنتجات  </p></a> \r\n    </span>\r\n    </mat-toolbar-row>\r\n    <mat-toolbar-row>\r\n    <span class=\"toolbar-spacer\"></span>\r\n     <h2 class=\"title\"> {{ title }} {{name}} </h2> \r\n    <span class=\"toolbar-spacer\"></span>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n    \r\n<mat-card class=\"example-card\">\r\n<mat-card-content>\r\n        <div class=\"col-md-12\" dir=\"rtl\" >\r\n        <div class='col-md-9   col-sm-8 '>\r\n                \r\n       \r\n        <div class='col-md-12 '> \r\n              <h5 class='header'> الوصف:   <span class='info'> {{description}} </span>  </h5> \r\n        </div> \r\n        \r\n        <div class='col-md-12'> \r\n                <h5 class='header'>  التصنيف:    <span class='info'>   {{Tag}}  </span> </h5>\r\n         </div>\r\n       \r\n         <div class='col-md-12'> \r\n                <h5 class='header'>  سعر التكلفة : <span class='info' >  {{cost}} ر.س   </span>  </h5>\r\n         </div>\r\n\r\n         <div class='col-md-12'> \r\n                <h5 class='header'>  سعر البيع  : <span class='info' >  {{price}} ر.س   </span>  </h5>\r\n         </div>\r\n\r\n         <div class='col-md-12 '> \r\n                <h5 class='header'>  الكمية المتوفرة :   <span class='info'> {{quantity}} </span>  </h5> \r\n          </div>\r\n\r\n\r\n\r\n        </div>\r\n        <div class='col-md-3  col-sm-4' >\r\n            \r\n                <div  class=\"example-header-image\"><img src={{img}}></div>\r\n                <br>\r\n                <h5 class=\"Imgheader\">{{name}} </h5>\r\n                <br>\r\n                          \r\n              </div>\r\n    </div>\r\n                \r\n        </mat-card-content>\r\n   \r\n        <div>\r\n     <button mat-raised-button class= \" Btns blueBtn\" (click)=\"  prodSales()\" >عرض مبيعات المنتج   </button> \r\n      <button mat-raised-button  class='Btns greenBtn' (click)=\"onEdit()\" > تعديل بيانات المنتج  </button>  \r\n      <button mat-raised-button  class='Btns greyBtn' (click)=\"openDialog()\" >حذف المنتج  </button> \r\n    \r\n    </div>\r\n\r\n  </mat-card>\r\n  "

/***/ }),

/***/ "../../../../../src/app/product/view-product/view-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProductComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return confirmMessage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


//import { AngularFireDatabase } from 'angularfire2/database';



var ViewProductComponent = /** @class */ (function () {
    function ViewProductComponent(router, route, flashMensaje, dialog) {
        this.router = router;
        this.route = route;
        this.flashMensaje = flashMensaje;
        this.dialog = dialog;
        //productList: Product[];
        this.title = 'عرض بيانات ';
    }
    ViewProductComponent.prototype.ngOnInit = function () {
        this.temp = this.route.snapshot.params.id;
        this.tempArray = this.temp.split(",");
        this.key = this.tempArray[0];
        this.name = this.tempArray[1];
        this.Tag = this.tempArray[2];
        this.cost = Number(this.tempArray[3]);
        this.description = this.tempArray[4];
        this.quantity = Number(this.tempArray[5]);
        this.imgName = this.tempArray[6];
        this.img = this.tempArray[7];
        this.price = Number(this.tempArray[8]);
    };
    ViewProductComponent.prototype.onEdit = function () {
        var id = this.key + "," + this.name + "," + this.Tag + "," + this.cost + "," + this.description + "," + this.quantity + "," + this.imgName + "," + this.img + "," + this.price;
        this.router.navigate(["mainPage/Add_Product/", id]);
    };
    ViewProductComponent.prototype.delete = function () {
        var _this = this;
        var s = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(window.name + '/products/' + this.Tag).child(this.key).remove();
        if (this.imgName != 'defaultproduct.png') {
            var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
            storageRef.child(this.imgName).delete();
        }
        this.router.navigate(['mainPage/product']).then(function (res) {
            _this.flashMensaje.show('تم حذف المنتج بنجاح.', { cssClass: 'alert-success', timeout: 100000,
                closeOnClick: true, showCloseBtn: true });
        });
    };
    ViewProductComponent.prototype.gobacktoProducts = function () {
        this.router.navigate(['mainPage/product']);
    };
    ViewProductComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(confirmMessage, {
            data: { message: this.name }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.delete();
            }
        });
    };
    ViewProductComponent.prototype.prodSales = function () {
        var id = this.key;
        this.router.navigate(['mainPage/productReport/', id]);
    };
    ViewProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-product',
            template: __webpack_require__("../../../../../src/app/product/view-product/view-product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/view-product/view-product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatDialog */]])
    ], ViewProductComponent);
    return ViewProductComponent;
}());

var confirmMessage = /** @class */ (function () {
    function confirmMessage(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    confirmMessage.prototype.confirm = function () {
        return true;
    };
    confirmMessage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'confirm-message',
            template: __webpack_require__("../../../../../src/app/product/view-product/confirm-Message.html"),
            styles: [__webpack_require__("../../../../../src/app/product/view-product/view-product.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialogRef */], Object])
    ], confirmMessage);
    return confirmMessage;
}());



/***/ }),

/***/ "../../../../../src/app/tag/add-tag/add-tag.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\r\n    min-width: 150px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  \r\n  .formContainer\r\n  {\r\n    font-family: 'Amiri' !important;\r\n      margin: 10% 20%;\r\n      -ms-flex-item-align: center;\r\n          -ms-grid-row-align: center;\r\n          align-self: center;\r\n      \r\n  }\r\n  \r\n  table\r\n  {\r\n      width: 100%;\r\n  }\r\n  \r\n  td mat-form-field\r\n  {\r\n    width: 100%;\r\n    text-align: right;\r\n    font-size: 18px;\r\n    float: right;\r\n    text-indent: 1.5px; \r\n    line-height: 2;\r\n  }\r\n  \r\n  td button\r\n  {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  \r\n  td mat-form-field app-input-file\r\n   {\r\n     width: 100%;\r\n     float: right;\r\n     text-indent: 1.5px;\r\n     text-align: right;\r\n     font-size: 18px;\r\n   }\r\n \r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tag/add-tag/add-tag.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-card class=\"formContainer\" >\n    <mat-card-title>\t\n      <h2> إضافة تصنيف </h2>\n    </mat-card-title>\n  \n    <form class=\"example-form\">\n  <table>\n    <tr>\n      <td>\n          <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"اسم التصنيف \">\n            </mat-form-field>\n      </td>\n    </tr>\n   \n        <tr>\n            <td>\n                <button type=\"submit\" color=\"primary\" mat-button>إضافة </button>\n            </td>\n            <td>\n                <button type=\"cancel\" color=\"accent\" mat-button>إلغاء  </button>\n              </td>\n          </tr>\n  </table>\n\n\n     <!-- <p>\n      <mat-form-field class=\"example-full-width\">\n        <input  type=\"\" >\n      </mat-form-field>\n     </p>  -->\n  \n    </form>\n  </mat-card>"

/***/ }),

/***/ "../../../../../src/app/tag/add-tag/add-tag.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTagComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddTagComponent = /** @class */ (function () {
    function AddTagComponent() {
        this.discription = "";
        this.name = "";
    }
    AddTagComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-tag',
            template: __webpack_require__("../../../../../src/app/tag/add-tag/add-tag.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tag/add-tag/add-tag.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddTagComponent);
    return AddTagComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tag/confirmDialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ViewsContainer\">\r\n    <div class=\"dialogTitle\">\r\n    <h1 mat-dialog-title> تأكيد</h1>\r\n    <h4> هل أنت متأكد من حذف تصنيف  <span>  '{{data.name}} '</span> ؟ </h4>\r\n    <h5>   سيتم حذف جميع المنتجات التابعة للتصنيف عنده حذفه</h5>\r\n  </div>\r\n    <div mat-dialog-actions class=\"DialogOptionBtn\">\r\n      \r\n      <button mat-button [mat-dialog-close]=\"data.name\" cdkFocusInitial>نعم متأكد </button>\r\n      <button mat-button [mat-dialog-close]=\"\"  >إلغاء الأمر </button>\r\n    </div>\r\n    \r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/tag/tag.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".viewProduct\r\n{\r\n    width: 25%;\r\n    height: 25%;\r\n    max-height: 250px;\r\n    max-width: 250px;\r\n    min-height: 200px;\r\n    min-width: 200px;\r\n    text-align: center;\r\n    border: 25px;\r\n    margin: 12px 0px 7px 9px;\r\n    display: inline-table;\r\n}\r\n.ViewsContainer\r\n{\r\n    margin:15px; \r\n    -ms-flex-line-pack: center; \r\n        align-content: center;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.Viewimg\r\n{\r\n    width: 75%;\r\n    height: 60%;\r\n    overflow-wrap: normal;\r\n    overflow: hidden;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center\r\n}\r\n.btn-Add\r\n{\r\n    float: left;\r\n}\r\n.toolbar-spacer {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n  }\r\n.OptionBtn\r\n  {\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    margin: 0px;\r\n    direction: rtl;\r\n    width: auto;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n  }\r\nmat-toolbar mat-toolbar-row span mat-form-field\r\n  {\r\n      text-align: right;\r\n      font-size: 14px;\r\n      float: right;\r\n      line-height: 2;\r\n  }\r\nexample-headers-align\r\n  {\r\n      margin: 15px;\r\n      width: auto;\r\n      \r\n  }\r\n.boutonAlign\r\n{\r\n    margin-bottom: 8px;\r\n}\r\nmat-form-field\r\n  {\r\n  \r\n    text-align: right;\r\n    font-size: 18px;\r\n    line-height: 2;\r\n  }\r\n.dialogTitle , .DialogOptionBtn\r\n  {\r\n      display: -ms-inline-grid;;\r\n      direction: rtl;\r\n      -ms-flex-line-pack: center;\r\n          align-content: center;\r\n  }\r\n.contaner\r\n{\r\n    background-color: whitesmoke;\r\n    border-radius: 1%;\r\n    /* height: 60px;\r\n    display: flex; */\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    padding: 0 16px;\r\n    width: 100%;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    white-space: nowrap;\r\n}\r\n.PageTitle\r\n{\r\n    min-height: 60px;\r\n    width: 99%;\r\n    margin: 2% 0.5%;\r\n\r\n}\r\n.contaner div\r\n{\r\n    margin-top:2em ;\r\n    margin-bottom: 1em;\r\n}\r\n.onClick\r\n{\r\n    cursor: pointer;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tag/tag.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n   <div  class=\"PageTitl col-md-12 col-sm-12\">\r\n      <div class=\" col-md-12 col-sm-12 contane\" dir=\"rtl\">\r\n     \r\n      <!-- <span class=\"toolbar-spacer\"></span> -->\r\n      <div  class=\" col-md-4 col-sm-4\" > </div>\r\n\r\n\r\n\r\n      <div   class=\" col-md-4 col-sm-4\" > \r\n              <span color=\"primary\">   <h2  class='title'> {{ title }} </h2> </span>           \r\n      </div> \r\n\r\n      <div class=\"col-md-4 col-sm-4\"  >\r\n          \r\n      </div>\r\n \r\n      </div>\r\n      </div>\r\n<div class=\" col-md-12 col-sm-12\">\r\n  <flash-messages></flash-messages>\r\n</div>\r\n<section class=\"ViewsContainer  col-md-12 col-sm-12\"  >\r\n  \r\n  <mat-table #table [dataSource]=\"dataSource\"  matSort>\r\n\r\n    <!-- Position Column -->\r\n<!--               \r\n    <ng-container [matColumnDef]=\"header\"  *ngFor='let header of displayedColumns' >\r\n      <mat-header-cell *matHeaderCellDef> {{info[header]}} </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element; \">  {{element.date}}    </mat-cell>\r\n    </ng-container>\r\n      displayedColumns=['name','edit','delete'];; -->\r\n    \r\n    <ng-container matColumnDef=\"name\" >\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header  > التصنيف  </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.$key}} </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"edit\"  >\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header > تعديل التصنيف  </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let row\"> <button mat-icon-button (click)=edit(row)><mat-icon>mode_edit </mat-icon></button></mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"delete\" >\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> حذف التصنيف </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\"> <button mat-icon-button  (click)=delete(row)> <mat-icon>delete </mat-icon></button></mat-cell>\r\n          </ng-container>\r\n\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n  </mat-table>\r\n\r\n    \r\n\r\n    </section>\r\n    "

/***/ }),

/***/ "../../../../../src/app/tag/tag.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return viewTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return confirmDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var TagComponent = /** @class */ (function () {
    function TagComponent(router, db, dialog, flashMensaje) {
        this.router = router;
        this.db = db;
        this.dialog = dialog;
        this.flashMensaje = flashMensaje;
        this.title = "إدارة التصنيفات";
        this.displayedColumns = ['name', 'edit', 'delete'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["J" /* MatTableDataSource */](new Array());
    }
    TagComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource.data = [];
        this.db.list(window.name + '/products').snapshotChanges().subscribe(function (item) {
            _this.dataSource.data = [];
            for (var element2 in item) {
                var y = item[element2].payload.toJSON();
                y["$key"] = item[element2].key;
                _this.dataSource.data.unshift(y);
                _this.dataSource._updateChangeSubscription();
            }
        });
        //this.category.reverse();
    };
    TagComponent.prototype.delete = function (category) {
        var _this = this;
        var dialogRef = this.dialog.open(confirmDialog, {
            data: { name: category.$key }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != null) {
                {
                    _this.db.list(window.name + '/products').remove(category.$key).then(function (res) {
                        _this.flashMensaje.show('.تم حذ التصنيف وجميع منتجاته بنجاح', { cssClass: 'alert-success', timeout: 40000 });
                    }).catch(function (err) {
                        _this.flashMensaje.show('حدثت مشكلة أثناء عملية الحذف أرجو المحاولة مرة أخرى.', { cssClass: 'alert-danger', timeout: 40000 });
                    });
                    _this.category = [];
                }
            }
            else {
            }
        });
    };
    TagComponent.prototype.edit = function (category) {
        var _this = this;
        var dialogRef = this.dialog.open(viewTag, { data: { name: category.$key } });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != null) {
                _this.db.list(window.name + '/products/' + category.$key).snapshotChanges().subscribe(function (prods) {
                    prods.forEach(function (prod) {
                        var product = (prod.payload.toJSON());
                        _this.db.list(window.name + '/products/' + result).push({
                            name: product.name,
                            price: product.price,
                            cost: product.cost,
                            inventory: product.inventory,
                            description: product.description,
                            category: result,
                            picPath: product.picPath,
                            picName: product.picName
                        });
                    });
                    {
                        _this.db.list(window.name + '/products').remove(category.$key).then(function (res) {
                            _this.flashMensaje.show('تم تحديث التصنيف بنجاح', { cssClass: 'alert-success', timeout: 40000 });
                        }).catch(function (err) {
                            _this.flashMensaje.show('حدثت مشكلة أثناء عملية الحذف أرجو المحاولة مرة أخرى.', { cssClass: 'alert-danger', timeout: 40000 });
                        });
                        _this.category = [];
                    }
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatSort */])
    ], TagComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatPaginator */])
    ], TagComponent.prototype, "paginator", void 0);
    TagComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tag',
            template: __webpack_require__("../../../../../src/app/tag/tag.component.html"),
            styles: [__webpack_require__("../../../../../src/app/charts/sales-report/sales-report.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], TagComponent);
    return TagComponent;
}());

//what is this ?????????????????????????
var viewTag = /** @class */ (function () {
    function viewTag(dialogRef, data, db) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.db = db;
    }
    viewTag = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'view-tag',
            template: __webpack_require__("../../../../../src/app/tag/view-tag.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tag/tag.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], viewTag);
    return viewTag;
}());

var confirmDialog = /** @class */ (function () {
    function confirmDialog(dialogRef, data, db) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.db = db;
    }
    confirmDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: ' confirmDialog',
            template: __webpack_require__("../../../../../src/app/tag/confirmDialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tag/tag.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], confirmDialog);
    return confirmDialog;
}());



/***/ }),

/***/ "../../../../../src/app/tag/view-tag.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ViewsContainer\">\n  <div class=\"dialogTitle\">\n<h1 mat-dialog-title> تعديل {{data.name}}</h1>\n<div mat-dialog-content>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"newname\">\n  </mat-form-field>\n</div>\n</div>\n\n<div mat-dialog-actions class=\"DialogOptionBtn\"> \n  <button mat-button [mat-dialog-close]=\"newname\" cdkFocusInitial>تعديل </button>\n  <button mat-button [mat-dialog-close]=\"\"  >إلغاء الأمر </button>\n</div>\n\n</div>\n<!-- Copyright 2018 Google Inc. All Rights Reserved.\n    Use of this source code is governed by an MIT-style license that\n    can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "../../../../../src/app/tag/view-tag/view-tag.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-card {\r\n    max-width: 60%;\r\n    margin-right: 20%;\r\n    margin-top: 5%;\r\n    margin-left: 20%;\r\n  }\r\n  \r\n  .example-header-image {\r\n    /* background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg'); */\r\n    background-size: cover;\r\n  }\r\n  \r\n  .example-header-image img\r\n  {\r\n      width: 100%;\r\n      height: 100%;\r\n  }\r\n  \r\n  table\r\n  {\r\n      text-align: right;\r\n      width: 100%;\r\n  }\r\n  \r\n  .viewProduct\r\n{\r\n    width: 35%;\r\n    height: 35%;\r\n    max-height: 150px;\r\n    max-width: 150px;\r\n    min-height: 100px;  \r\n    min-width: 100px;\r\n    text-align: center;\r\n    border: 25px;\r\n    margin: 12px 0px 7px 9px;\r\n    display: inline-table;\r\n}\r\n  \r\n  .ViewsContainer\r\n{\r\n    margin-right:15px; \r\n    -ms-flex-line-pack: center; \r\n        align-content: center;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n  \r\n  .OptionBtn\r\n{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n}\r\n  \r\n  .Viewimg\r\n{\r\n    width: 75%;\r\n    height: 60%;\r\n    overflow-wrap: normal;\r\n    overflow: hidden;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tag/view-tag/view-tag.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTagComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewTagComponent = /** @class */ (function () {
    function ViewTagComponent(router) {
        this.router = router;
        this.name = "أقلام  ";
        this.descriptioin = "aa@aa.a";
        this.img = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
        this.items = [
            { 'name': 'tag!', 'id': '1', 'img': 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg' },
            { 'name': 'tag2', 'id': '2', 'img': 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg' },
            { 'name': 'tag3', 'id': '3', 'img': 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg' },
            { 'name': 'tag4', 'id': '4', 'img': 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg' },
            { 'name': 'product5', 'id': '5', 'img': 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg' },
            { 'name': 'product6', 'id': '6', 'img': 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg' },
            { 'name': 'product7', 'id': '7', 'img': 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg' },
            { 'name': 'product8', 'id': '8', 'img': 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg' }
        ];
    }
    ViewTagComponent.prototype.ngOnInit = function () {
    };
    ViewTagComponent.prototype.viewProduct = function (item) {
        confirm('inside the method' + item.id);
        this.router.navigate(['View_Tag', item.id]);
    };
    ViewTagComponent.prototype.deletItem = function () {
        if (confirm(' عند حذفك للتصنيف سوف تحذف جميع المنتجات هذا التصنيف هل أنت متأكد من الحذف؟ '))
            console.log('deleted');
        else
            console.log('not deleted');
    };
    ViewTagComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-tag',
            template: __webpack_require__("../../../../../src/app/tag/view-tag.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tag/view-tag/view-tag.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ViewTagComponent);
    return ViewTagComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    firebaseConfig: {
        apiKey: "AIzaSyDa6UD4w0FaSpnz6LVD310_DTIwWDwp_qU",
        authDomain: "erad-system.firebaseapp.com",
        databaseURL: "https://erad-system.firebaseio.com",
        projectId: "erad-system",
        storageBucket: "erad-system.appspot.com",
        messagingSenderId: "451648956206"
    }
};


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDa6UD4w0FaSpnz6LVD310_DTIwWDwp_qU",
        authDomain: "erad-system.firebaseapp.com",
        databaseURL: "https://erad-system.firebaseio.com",
        projectId: "erad-system",
        storageBucket: "erad-system.appspot.com",
        messagingSenderId: "451648956206"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__polyfills__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);






if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ "../../../../har-validator/node_modules/ajv/lib recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../har-validator/node_modules/ajv/lib recursive";

/***/ }),

/***/ "../../../../har-validator/node_modules/ajv/lib/compile recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../har-validator/node_modules/ajv/lib/compile recursive";

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map