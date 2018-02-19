webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'myapp',
        template: '<router-outlet></router-outlet>',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_comparison_comparison_module__ = __webpack_require__("./src/app/components/comparison/comparison.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_uc_reducers__ = __webpack_require__("./src/app/redux/uc.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_comparison_comparison_component__ = __webpack_require__("./src/app/components/comparison/comparison.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_router_store__ = __webpack_require__("./node_modules/@ngrx/router-store/@ngrx/router-store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__redux_custom_router_state_serializer__ = __webpack_require__("./src/app/redux/custom-router-state-serializer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_3__components_comparison_comparison_module__["a" /* ComparisonModule */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* StoreModule */].forRoot({
                state: __WEBPACK_IMPORTED_MODULE_5__redux_uc_reducers__["f" /* masterReducer */]
            }),
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["d" /* RouterModule */].forRoot([{
                    path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_comparison_comparison_component__["a" /* ComparisonComponent */]
                }], { useHash: false }),
            __WEBPACK_IMPORTED_MODULE_8__ngrx_router_store__["b" /* StoreRouterConnectingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_9__angular_common__["APP_BASE_HREF"], useValue: window['_app_base'] || '/' },
            { provide: __WEBPACK_IMPORTED_MODULE_8__ngrx_router_store__["a" /* RouterStateSerializer */], useClass: __WEBPACK_IMPORTED_MODULE_10__redux_custom_router_state_serializer__["a" /* CustomRouterStateSerializer */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/comparison/comparison.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Roboto:400,300,300italic,400italic,500,500italic,700,700italic\");\n@import url(\"https://fonts.googleapis.com/css?family=Roboto+Mono:400,700\");\n:host {\n    font-family: 'Roboto', 'Noto', sans-serif;\n}\npdialog {\n    z-index: 5000;\n    display: grid;\n}\n.floatThead-container {\n    z-index: 3000;\n}\n.ltable {\n    display: none;\n}\n/* github corner */\n.github-corner {\n    z-index: 1000;\n}\n.github-corner svg {\n    z-index: 999;\n}\n.github-corner:hover .octo-arm {\n    -webkit-animation: octocat-wave 560ms ease-in-out;\n            animation: octocat-wave 560ms ease-in-out;\n}\n@-webkit-keyframes octocat-wave {\n    0%,\n    100% {\n        -webkit-transform: rotate(0);\n                transform: rotate(0);\n    }\n    20%,\n    60% {\n        -webkit-transform: rotate(-25deg);\n                transform: rotate(-25deg);\n    }\n    40%,\n    80% {\n        -webkit-transform: rotate(10deg);\n                transform: rotate(10deg);\n    }\n}\n@keyframes octocat-wave {\n    0%,\n    100% {\n        -webkit-transform: rotate(0);\n                transform: rotate(0);\n    }\n    20%,\n    60% {\n        -webkit-transform: rotate(-25deg);\n                transform: rotate(-25deg);\n    }\n    40%,\n    80% {\n        -webkit-transform: rotate(10deg);\n                transform: rotate(10deg);\n    }\n}\n@media (max-width: 500px) {\n    .github-corner:hover .octo-arm {\n        -webkit-animation: none;\n                animation: none;\n    }\n\n    .github-corner .octo-arm {\n        -webkit-animation: octocat-wave 560ms ease-in-out;\n                animation: octocat-wave 560ms ease-in-out;\n    }\n}\n.search-indicator {\n    color: rgba(255, 0, 0, 0.52);\n    font-size: 8pt;\n    opacity: 80;\n}\n.grid-container {\n    display: grid;\n    grid-column-gap: 10px;\n    grid-row-gap: 15px;\n    grid-template-columns: 80px auto 1fr 80px;\n    grid-template-rows: 60px auto;\n    grid-template-areas: \"corner header . .\" \". content . .\" \". large large .\" \". content-end . .\" \". latex . .\" \"footer footer footer .\"\n\n}\n.grid-header {\n    grid-area: header;\n    -webkit-font-smoothing: antialiased;\n    white-space: nowrap;\n    overflow: visible;\n    text-overflow: ellipsis;\n    line-height: 28px;\n    border-bottom: 1px solid #eee;\n}\n.grid-corner {\n    grid-area: corner;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n}\n.grid-content {\n    grid-area: content;\n    display: grid;\n    grid-auto-flow: row;\n    grid-row-gap: 15px;\n}\n.grid-large-content {\n    padding: 0 10px 0 0;\n    grid-area: large;\n    display: grid;\n    margin-right: auto;\n}\n.grid-content-latex {\n    grid-area: latex;\n}\n.grid-content-end {\n    grid-area: content-end;\n    display: grid;\n    grid-auto-flow: row;\n    grid-row-gap: 15px;\n}\n.grid-footer {\n    grid-area: footer;\n    background-color: #f5f5f5;\n}\n.grid-text {\n    padding: 16px 16px 16px 16px;\n    position: relative;\n}\n.select-grid {\n    display: grid;\n    grid-auto-flow: row;\n    grid-column-gap: 15px;\n}\n@media only screen and (min-width: 400px) {\n    .select-grid {\n        grid-template-columns: 1fr 1fr;\n    }\n}\n@media only screen and (min-width: 800px) {\n    .grid-container {\n        grid-template-columns: 82px 840px 1fr 78px;\n    }\n}\n@media only screen and (min-width: 1160px) {\n    .grid-container {\n        grid-template-columns: 82px 980px 1fr 80px;\n    }\n}\n.shrink-expand {\n    justify-self: right;\n    -webkit-transform: translate(0, -50px);\n    transform: translate(0, -50px);\n}\n.description > :first-child {\n    margin-top: 0;\n}\n.description > :last-child {\n    margin-bottom: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/comparison/comparison.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComparisonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_VersionInformation__ = __webpack_require__("./src/assets/VersionInformation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__polymer_paper_card_paper_card_component__ = __webpack_require__("./src/app/components/polymer/paper-card/paper-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__output_latex_table_latex_table_component__ = __webpack_require__("./src/app/components/output/latex-table/latex-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__configuration_configuration_service__ = __webpack_require__("./src/app/components/comparison/configuration/configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_data_service__ = __webpack_require__("./src/app/components/comparison/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_data__ = __webpack_require__("./src/app/components/comparison/data/data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__redux_uc_action__ = __webpack_require__("./src/app/redux/uc.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_file_saver__ = __webpack_require__("./node_modules/file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_file_saver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











let ComparisonComponent = class ComparisonComponent {
    constructor(configurationService, cd, store) {
        this.configurationService = configurationService;
        this.cd = cd;
        this.store = store;
        this.activeRow = new __WEBPACK_IMPORTED_MODULE_7__data_data__["a" /* Data */].Builder().build();
        this.detailsOpen = false;
        this.settingsOpen = false;
        this.changed = 0;
        this.versionInformation = new __WEBPACK_IMPORTED_MODULE_1__assets_VersionInformation__["a" /* VersionInformation */]();
        this.configurationService.loadComparison(this.cd);
    }
    getVersionInformation() {
        return this.versionInformation;
    }
    criteriaChanged(value, crit) {
        const map = new Map();
        map.set(crit.name, value || null);
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__redux_uc_action__["c" /* UCSearchUpdateAction */](map));
        this.cd.markForCheck();
    }
    getActive(state, crit) {
        if (Object(__WEBPACK_IMPORTED_MODULE_9_util__["isNullOrUndefined"])(state)) {
            return [];
        }
        const active = state.state.currentSearch.get(crit.name);
        if (!Object(__WEBPACK_IMPORTED_MODULE_9_util__["isNullOrUndefined"])(active)) {
            return active.map(name => {
                return {
                    id: name,
                    text: name
                };
            });
        }
        return [];
    }
    showDetails(index) {
        this.activeRow = __WEBPACK_IMPORTED_MODULE_6__data_data_service__["a" /* DataService */].data[index];
        this.detailsOpen = true;
    }
    deferredUpdate() {
        setTimeout(() => {
            this.changed > 0 ? (this.changed = this.changed - 100) : (this.changed = this.changed + 100);
        }, 100);
    }
    latexDownload() {
        let content = this.latexTable.element.nativeElement.textContent;
        content = content.substr(content.indexOf('%'), content.length);
        const blob = new Blob([content], { type: 'plain/text' });
        Object(__WEBPACK_IMPORTED_MODULE_10_file_saver__["saveAs"])(blob, 'latextable.tex');
        return window.URL.createObjectURL(blob);
    }
    /**
     * Callback functions dispatching to redux store
     */
    changeOrder(change) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_9_util__["isNullOrUndefined"])(change)) {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__redux_uc_action__["d" /* UCTableOrderAction */](change.index, change.ctrl));
        }
    }
    criteriaClicked(val) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__redux_uc_action__["a" /* UCClickAction */](val.key.name, val.index));
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__output_latex_table_latex_table_component__["a" /* LatexTableComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__output_latex_table_latex_table_component__["a" /* LatexTableComponent */])
], ComparisonComponent.prototype, "latexTable", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('genericTableHeader'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__polymer_paper_card_paper_card_component__["a" /* PaperCardComponent */])
], ComparisonComponent.prototype, "genericTableHeader", void 0);
ComparisonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'comparison',
        template: __webpack_require__("./src/app/components/comparison/comparison.template.html"),
        styles: [__webpack_require__("./src/app/components/comparison/comparison.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__configuration_configuration_service__["a" /* ConfigurationService */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
        __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* Store */]])
], ComparisonComponent);



/***/ }),

/***/ "./src/app/components/comparison/comparison.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComparisonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_comparison_details_component__ = __webpack_require__("./src/app/components/comparison/details/comparison.details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comparison_component__ = __webpack_require__("./src/app/components/comparison/comparison.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__("./src/app/components/pipes/pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__input_input_module__ = __webpack_require__("./src/app/components/input/input.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__output_output_module__ = __webpack_require__("./src/app/components/output/output.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__configuration_configuration_service__ = __webpack_require__("./src/app/components/comparison/configuration/configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__data_data_service__ = __webpack_require__("./src/app/components/comparison/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__settings_comparison_settings_component__ = __webpack_require__("./src/app/components/comparison/settings/comparison.settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Provider imports










let ComparisonModule = class ComparisonModule {
};
ComparisonModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_6__input_input_module__["a" /* InputModule */],
            __WEBPACK_IMPORTED_MODULE_7__output_output_module__["a" /* OutputModule */],
            __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* PipesModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__comparison_component__["a" /* ComparisonComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__comparison_component__["a" /* ComparisonComponent */],
            __WEBPACK_IMPORTED_MODULE_3__details_comparison_details_component__["a" /* ComparisonDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__settings_comparison_settings_component__["a" /* ComparisonSettingsComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__configuration_configuration_service__["a" /* ConfigurationService */],
            __WEBPACK_IMPORTED_MODULE_9__data_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]
        ]
    })
], ComparisonModule);



/***/ }),

/***/ "./src/app/components/comparison/comparison.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n    <div class=\"grid-corner\">\n        <a href=\"{{configurationService.configuration?.repository}}\" class=\"github-corner\">\n            <svg width=\"80\" height=\"80\" viewBox=\"0 0 250 250\"\n                 style=\"cursor:pointer; fill:#151513; color:#fff; position: sticky; left: 0; transform: scale(-1, 1);\">\n                <path d=\"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z\"></path>\n                <path\n                    d=\"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2\"\n                    fill=\"currentColor\" style=\"transform-origin: 130px 106px;\" class=\"octo-arm\"></path>\n                <path\n                    d=\"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z\"\n                    fill=\"currentColor\" class=\"octo-body\"></path>\n            </svg>\n        </a>\n    </div>\n\n    <div class=\"grid-header\">\n        <h1>{{configurationService.configuration?.title}}\n            <small>{{configurationService.configuration?.subtitle}}</small>\n        </h1>\n    </div>\n    <div class=\"grid-content\">\n        <pcard>\n            <div [innerHTML]=\"configurationService.description | sanitizeHtml\" class=\"description\"></div>\n        </pcard>\n\n        <pcard [heading]=\"configurationService.configuration?.selecttitle\">\n            <div class=\"select-grid\">\n                <ng-template ngFor let-crit [ngForOf]=\"configurationService.criteria\">\n                    <div>\n                        <div class=\"form-group\">\n                            <ptooltip [tooltip]=\"crit.description\">\n                                <label>\n                                    {{crit.name}}\n                                    <span class=\"search-indicator\">({{crit.getSearchIndicator()}})</span>\n                                </label>\n                            </ptooltip>\n                            <br>\n                            <select2 [options]=\"crit.items\" [placeholder]=\"crit.placeholder\" [name]=\"crit.name\"\n                                     [tag]=\"crit.tag\"\n                                     [active]=\"getActive(store | async, crit)\"\n                                     (result)=\"criteriaChanged($event, crit)\" *ngIf=\"!crit.rangeSearch\"></select2>\n                            <number-input *ngIf=\"crit.rangeSearch\" [comparisonComponent]=\"this\" [name]=\"crit.name\"\n                                          [active]=\"getActive(store | async, crit)\"\n                                          (result)=\"criteriaChanged($event, crit)\"\n                                          [criteria]=\"crit\" [tag]=\"crit.tag\"></number-input>\n                        </div>\n                    </div>\n                </ng-template>\n            </div>\n        </pcard>\n    </div>\n\n    <div class=\"grid-large-content\">\n        <pcard [heading]=\"configurationService.configuration.tableTitle\"\n               [symbol]=\"true\"\n               [expand]=\"(store | async).state.tableExpand\"\n               (expandChange)=\"store.dispatch({type: 'UPDATE_SETTINGS', enable: $event, operation: 'TableExpand'}); deferredUpdate()\">\n            <generictable [items]=\"(store | async).state.currentElements\"\n                          [columns]=\"(store | async).state.currentColumnNames\"\n                          [types]=\"(store | async).state.columnTypes\"\n                          [index]=\"(store | async).state.rowIndexes\"\n                          [order]=\"(store | async).state.columnOrder\"\n                          [changeNum]=\"configurationService.tableColumns.length + (store | async).state.currentColumnNames.length + (settingsOpen? 0: 1) + changed\"\n                          (settingsCallback)=\"settingsOpen = true\"\n                          (showDetails)=\"showDetails($event)\"\n                          (orderChange)=\"changeOrder($event)\"\n                          (searchFor)=\"criteriaClicked($event, key, index)\"></generictable>\n        </pcard>\n    </div>\n    <div class=\"grid-content-end\">\n        <pcard heading=\"References\" *ngIf=\"configurationService.configuration.citation.size != 0\">\n            <referencestable [changeNum]=\"configurationService.configuration.citation.length\"\n                             [citationMap]=\"configurationService.configuration.citation\"></referencestable>\n        </pcard>\n    </div>\n\n    <latextable class=\"grid-content-latex\" *ngIf=\"(store|async).state.latexDisplayTable || settingsOpen\"\n                [items]=\"(store | async).state.currentElements\"\n                [columns]=\"(store | async).state.currentColumnNames\"\n                [types]=\"(store | async).state.columnTypes\"\n                [index]=\"(store | async).state.rowIndexes\"\n                [changeNum]=\"configurationService.tableColumns.length + (store | async).state.currentColumnNames.length\"\n                [showTableTooltips]=\"(store | async).state.latexEnableTooltips\"\n                [tableTooltipsAsFootnotes]=\"(store | async).state.latexTooltipsAsFootnotes\"\n                #latexTable></latextable>\n\n    <pdialog [(opened)]=\"detailsOpen\" *ngIf=\"detailsOpen\">\n        <comparison-details [data]=\"activeRow\"\n                            [tooltipAsText]=\"(store | async).state.detailsDisplayTooltips\"></comparison-details>\n    </pdialog>\n\n    <pdialog *ngIf=\"settingsOpen\"\n             [opened]=\"settingsOpen\"\n             (openedChange)=\"store.dispatch({type: 'UPDATE_SETTINGS', enable: $event, operation: 'SettingsOpenChange'}); settingsOpen = !settingsOpen\"\n             [heading]=\"'Table Settings'\">\n        <comparison-settings\n            [columnDisplayAll]=\"(store | async).state.columnDisplayAll\"\n            [columnNames]=\"(store | async).state.columnNames\"\n            [columnsEnabled]=\"(store | async).state.columnsEnabled\"\n            [elementDisplayAll]=\"(store | async).state.elementDisplayAll\"\n            [elementNames]=\"(store | async).state.elementNames\"\n            [elementsEnabled]=\"(store | async).state.elementsEnabled\"\n            [latexDisplayTable]=\"(store | async).state.latexDisplayTable\"\n            [latexEnableTooltips]=\"(store | async).state.latexEnableTooltips\"\n            [latexTooltipsAsFootnotes]=\"(store | async).state.latexTooltipsAsFootnotes\"\n            [detailsDisplayTooltips]=\"(store | async).state.detailsDisplayTooltips\"\n            (columnsDisplayAllChange)=\"store.dispatch({type: 'UPDATE_SETTINGS', enable: $event, operation: 'ColumnDisplayAll'})\"\n            (columnChange)=\"store.dispatch({type: 'UPDATE_SETTINGS', value: $event, operation: 'ColumnChange'})\"\n            (elementsDisplayAllChange)=\"store.dispatch({type: 'UPDATE_SETTINGS', enable: $event, operation: 'ElementDisplayAll'})\"\n            (elementChange)=\"store.dispatch({type: 'UPDATE_SETTINGS', value: $event, operation: 'ElementChange'})\"\n            (latexDisplayTableChange)=\"store.dispatch({type: 'UPDATE_SETTINGS', enable: $event, operation: 'LatexDisplayTable'})\"\n            (latexEnableTooltipsChange)=\"store.dispatch({type: 'UPDATE_SETTINGS', enable: $event, operation: 'LatexEnableTooltips'})\"\n            (latexTooltipsAsFootnotesChange)=\"store.dispatch({type: 'UPDATE_SETTINGS', enable: $event, operation: 'LatexTooltipsAsFootnotes'})\"\n            (detailsDisplayTooltipsChange)=\"store.dispatch({type: 'UPDATE_SETTINGS', enable: $event, operation: 'DetailsDisplayTooltips'})\"\n            (latexDownload)=\"latexDownload()\"\n        ></comparison-settings>\n    </pdialog>\n\n\n    <div class=\"grid-footer\">\n        <div class=\"container\">\n            This is an <a href=\"http://ultimate-comparisons.github.io/\">Ultimate Comparison</a> | content licensed under\n            <a\n                rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/4.0/\"><img\n                alt=\"Creative Commons License CC-BY-SA 4.0\" style=\"border-width:0\"\n                src=\"https://i.creativecommons.org/l/by-sa/4.0/88x31.png\"/></a> | <a\n            [href]=\"getVersionInformation()?.link\">{{getVersionInformation()?.commit?.substr(0,\n            8) + \" (\" + (getVersionInformation()?.date | date: (\"yyyy-MM-dd\")) + \")\"}}</a>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/comparison/configuration/configuration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_js_yaml__ = __webpack_require__("./node_modules/js-yaml/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_js_yaml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_js_yaml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration__ = __webpack_require__("./src/app/components/comparison/configuration/configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_showdown__ = __webpack_require__("./node_modules/showdown/dist/showdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_showdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_showdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_data_service__ = __webpack_require__("./src/app/components/comparison/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let ConfigurationService = ConfigurationService_1 = class ConfigurationService {
    constructor(title, http, dataService) {
        this.title = title;
        this.http = http;
        this.dataService = dataService;
        this.configuration = new __WEBPACK_IMPORTED_MODULE_4__configuration__["c" /* Configuration */].Builder().build();
        this.description = '';
        this.criteria = [];
        // TODO move to redux
        this.tableColumns = [];
        this.initializeData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.converter = new __WEBPACK_IMPORTED_MODULE_5_showdown__["Converter"]();
        this.dataService.setSubscriber(this);
    }
    static getHtml(converter, citation, markdown) {
        if (Object(__WEBPACK_IMPORTED_MODULE_7_util__["isNullOrUndefined"])(markdown))
            return null;
        return converter.makeHtml(markdown.toString()).replace(/(?:\[@)([^\]]*)(?:\])/g, (match, dec) => {
            return '<a class="cite-link" href="#' + dec + '">[' + citation.get(dec).index + ']</a>';
        });
    }
    static getLatex(converter, text) {
        return converter.makeHtml(text).replace(/(?:\[@)([^\]]*)(?:\])/g, (match, dec) => {
            return '\\cite{' + dec + '}';
        });
    }
    loadComparison(cd) {
        this.http.get('comparison.yml', { responseType: 'text' })
            .subscribe(res => {
            const comparisonObject = __WEBPACK_IMPORTED_MODULE_3_js_yaml__["safeLoad"](res) || {};
            const detailsObject = comparisonObject.details || {};
            const headerObject = detailsObject.header || {};
            const bodyObject = detailsObject.body || {};
            const criteriaArray = comparisonObject.criteria || [];
            const citationObject = comparisonObject.autoCitation || {};
            const autoCriteria = comparisonObject.autoCriteria || {};
            const autoColor = comparisonObject.autoColor || {};
            const detailsHeader = new __WEBPACK_IMPORTED_MODULE_4__configuration__["h" /* Header */].Builder()
                .setNameRef(headerObject.nameRef)
                .setLabelRef(headerObject.labelRef)
                .setUrlRef(headerObject.urlRef)
                .build();
            const detailsBody = new __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Body */].Builder()
                .setTitle(bodyObject.title)
                .setBodyRef(bodyObject.bodyRef)
                .setTooltipAsText(bodyObject.tooltipAsText)
                .build();
            const details = new __WEBPACK_IMPORTED_MODULE_4__configuration__["g" /* Details */].Builder()
                .setHeader(detailsHeader)
                .setBody(detailsBody)
                .build();
            const citation = new Map();
            Object.keys(citationObject).forEach(citationKey => {
                const value = citationObject[citationKey];
                citation.set(citationKey, new __WEBPACK_IMPORTED_MODULE_4__configuration__["b" /* Citation */].Builder()
                    .setIndex(value.index)
                    .setKey(citationKey)
                    .setText(value.value)
                    .build());
            });
            /**
             * Construct map of criteria from 'comparison.yml'.criteria
             */
            const criteria = new Map();
            criteriaArray.forEach((obj) => Object.keys(obj).forEach((key) => {
                const value = obj[key];
                if (Object(__WEBPACK_IMPORTED_MODULE_7_util__["isNullOrUndefined"])(value)) {
                    criteria.set(key, new __WEBPACK_IMPORTED_MODULE_4__configuration__["d" /* Criteria */].Builder().build());
                    return;
                }
                const autoColorCriteria = Object(__WEBPACK_IMPORTED_MODULE_7_util__["isNullOrUndefined"])(autoColor[key]) ? {} : autoColor[key];
                const valuesObject = Object(__WEBPACK_IMPORTED_MODULE_7_util__["isNullOrUndefined"])(value.values) ? {} : value.values;
                /**
                 * Construct map of criteria values
                 * If criteria value is undefined use autoColorCriteria information
                 */
                const values = new Map();
                Object.keys(valuesObject).forEach(objKey => {
                    const value = valuesObject[objKey];
                    const autoColorValue = Object(__WEBPACK_IMPORTED_MODULE_7_util__["isNullOrUndefined"])(autoColorCriteria[objKey]) ? {} : autoColorCriteria[objKey];
                    // Value defined as 'key': null
                    if (Object(__WEBPACK_IMPORTED_MODULE_7_util__["isNullOrUndefined"])(value)) {
                        values.set(objKey, new __WEBPACK_IMPORTED_MODULE_4__configuration__["f" /* CriteriaValue */].Builder()
                            .setCriteria(key)
                            .setName(objKey)
                            .setColor(autoColorValue.color)
                            .setBackgroundColor(autoColorValue.backgroundColor)
                            .build());
                        return;
                    }
                    values.set(objKey, new __WEBPACK_IMPORTED_MODULE_4__configuration__["f" /* CriteriaValue */].Builder()
                        .setCriteria(key)
                        .setName(objKey)
                        .setDescription(ConfigurationService_1.getHtml(this.converter, citation, value.description))
                        .setClazz(value.class)
                        .setColor(Object(__WEBPACK_IMPORTED_MODULE_7_util__["isNullOrUndefined"])(value.class) ? (Object(__WEBPACK_IMPORTED_MODULE_7_util__["isNullOrUndefined"])(value.color) ? autoColorValue.color : value.color) : null)
                        .setBackgroundColor(Object(__WEBPACK_IMPORTED_MODULE_7_util__["isNullOrUndefined"])(value.class) ? (Object(__WEBPACK_IMPORTED_MODULE_7_util__["isNullOrUndefined"])(value.backgroundColor) ? autoColorValue.backgroundColor : value.backgroundColor) : null)
                        .setWeight(value.weight)
                        .setMinAge(value.minAge)
                        .setMaxAge(value.maxAge)
                        .setMinAgeUnit(value.minAgeUnit)
                        .setMaxAgeUnit(value.maxAgeUnit)
                        .build());
                });
                criteria.set(key, new __WEBPACK_IMPORTED_MODULE_4__configuration__["d" /* Criteria */].Builder()
                    .setName(value.name || key)
                    .setSearch(value.search)
                    .setTable(value.table)
                    .setDetail(value.detail)
                    .setType(Object(__WEBPACK_IMPORTED_MODULE_4__configuration__["i" /* getCriteriaType */])(value.type))
                    .setDescription(value.description)
                    .setPlaceholder(value.placeholder)
                    .setAndSearch(value.andSearch)
                    .setRangeSearch(value.rangeSearch)
                    .setValues(values)
                    .build());
            }));
            /**
             * Complete map of criteria with 'comparison.yml'.autoCriteria
             */
            Object.keys(autoCriteria).forEach((key) => {
                const autoCriteriaObject = autoCriteria[key];
                const valuesObject = autoCriteriaObject.values || {};
                const autoColorCriteria = Object(__WEBPACK_IMPORTED_MODULE_7_util__["isNullOrUndefined"])(autoColor[key]) ? {} : autoColor[key];
                /**
                 * If criteria is already defined by 'comparison.yml'.criteria
                 * complete criteria fields
                 */
                if (criteria.get(key)) {
                    let old = criteria.get(key);
                    let values = old.values;
                    /**
                     * Check each element CriteriaValue
                     * oldValue from 'comparison.yml'.criteria
                     * value from 'comparison.yml'.autoCriteria
                     * color information from 'comparison.yml'.autoColorCriteria
                     */
                    Object.keys(valuesObject).forEach(valueKey => {
                        const oldValue = old.values.get(valueKey);
                        const autoColorValue = Object(__WEBPACK_IMPORTED_MODULE_7_util__["isNullOrUndefined"])(autoColorCriteria[valueKey]) ? {} : autoColorCriteria[valueKey];
                        const value = valuesObject[valueKey];
                        // 1) old value undefined
                        if (!Object(__WEBPACK_IMPORTED_MODULE_7_util__["isNullOrUndefined"])(oldValue)) {
                            values.set(valueKey, old.values.get(valueKey));
                            // 2) auto value defined but null
                        }
                        else if (Object(__WEBPACK_IMPORTED_MODULE_7_util__["isNullOrUndefined"])(value)) {
                            values.set(valueKey, new __WEBPACK_IMPORTED_MODULE_4__configuration__["f" /* CriteriaValue */].Builder()
                                .setCriteria(key)
                                .setName(valueKey)
                                .setColor(autoColorValue.color)
                                .setBackgroundColor(autoColorValue.backgroundColor)
                                .build());
                            // 3) old and auto value defined
                        }
                        else if (!Object(__WEBPACK_IMPORTED_MODULE_7_util__["isNullOrUndefined"])(value)) {
                            values.set(valueKey, new __WEBPACK_IMPORTED_MODULE_4__configuration__["f" /* CriteriaValue */].Builder()
                                .setCriteria(key)
                                .setName(valueKey)
                                .setDescription(ConfigurationService_1.getHtml(this.converter, citation, value.description))
                                .setClazz(value.class)
                                .setWeight(value.weight)
                                .setMinAge(value.minAge)
                                .setMaxAge(value.maxAge)
                                .setColor(Object(__WEBPACK_IMPORTED_MODULE_7_util__["isNullOrUndefined"])(value.class) ? (Object(__WEBPACK_IMPORTED_MODULE_7_util__["isNullOrUndefined"])(value.color) ? autoColorValue.color : value.color) : null)
                                .setBackgroundColor(Object(__WEBPACK_IMPORTED_MODULE_7_util__["isNullOrUndefined"])(value.class) ? (Object(__WEBPACK_IMPORTED_MODULE_7_util__["isNullOrUndefined"])(value.backgroundColor) ? autoColorValue.backgroundColor : value.backgroundColor) : null)
                                .setMinAgeUnit(value.minAgeUnit)
                                .setMaxAgeUnit(value.maxAgeUnit)
                                .build());
                        }
                    });
                    criteria.set(key, new __WEBPACK_IMPORTED_MODULE_4__configuration__["d" /* Criteria */].Builder()
                        .setName(old.name)
                        .setSearch(old.search)
                        .setTable(old.table)
                        .setDetail(old.detail)
                        .setType(old.type)
                        .setDescription(old.description)
                        .setPlaceholder(old.placeholder)
                        .setAndSearch(old.andSearch)
                        .setRangeSearch(old.rangeSearch)
                        .setValues(values)
                        .build());
                    /**
                     * If criteria is not defined by 'comparison.yml'.criteria use 'comparison.yml'.autoCriteria
                     */
                }
                else {
                    let values = new Map();
                    Object.keys(valuesObject).forEach(valueKey => {
                        const value = valuesObject[valueKey];
                        const autoColorValue = Object(__WEBPACK_IMPORTED_MODULE_7_util__["isNullOrUndefined"])(autoColorCriteria[valueKey]) ? {} : autoColorCriteria[valueKey];
                        if (Object(__WEBPACK_IMPORTED_MODULE_7_util__["isNullOrUndefined"])(value)) {
                            values.set(valueKey, new __WEBPACK_IMPORTED_MODULE_4__configuration__["f" /* CriteriaValue */].Builder().setCriteria(key).setName(valueKey).build());
                        }
                        else {
                            values.set(valueKey, new __WEBPACK_IMPORTED_MODULE_4__configuration__["f" /* CriteriaValue */].Builder()
                                .setCriteria(key)
                                .setName(valueKey)
                                .setDescription(ConfigurationService_1.getHtml(this.converter, citation, value.description))
                                .setClazz(value.class)
                                .setWeight(value.weight)
                                .setMinAge(value.minAge)
                                .setMaxAge(value.maxAge)
                                .setMinAgeUnit(value.minAgeUnit)
                                .setMaxAgeUnit(value.maxAgeUnit)
                                .setColor(autoColorValue.color)
                                .setBackgroundColor(autoColorValue.backgroundColor)
                                .build());
                        }
                    });
                    criteria.set(key, new __WEBPACK_IMPORTED_MODULE_4__configuration__["d" /* Criteria */].Builder()
                        .setName(Object(__WEBPACK_IMPORTED_MODULE_7_util__["isNullOrUndefined"])(autoCriteriaObject.name) ? key : autoCriteriaObject.name)
                        .setSearch(autoCriteriaObject.search)
                        .setTable(autoCriteriaObject.table)
                        .setDetail(autoCriteriaObject.detail)
                        .setType(Object(__WEBPACK_IMPORTED_MODULE_4__configuration__["i" /* getCriteriaType */])(autoCriteriaObject.type))
                        .setDescription(autoCriteriaObject.description)
                        .setPlaceholder(autoCriteriaObject.placeholder)
                        .setAndSearch(autoCriteriaObject.andSearch)
                        .setRangeSearch(autoCriteriaObject.rangeSearch)
                        .setValues(values)
                        .build());
                }
            });
            this.configuration = new __WEBPACK_IMPORTED_MODULE_4__configuration__["c" /* Configuration */].Builder()
                .setTitle(comparisonObject.title)
                .setSubtitle(comparisonObject.subtitle)
                .setSelectTitle(comparisonObject.selectTitle)
                .setTableTitle(comparisonObject.tableTitle)
                .setRepository(comparisonObject.repository)
                .setDetails(details)
                .setCriteria(criteria)
                .setCitation(citation)
                .build();
            this.initializeData.emit({ configuration: this.configuration, dataService: this.dataService, cd: cd });
            this.title.setTitle(this.configuration.title);
            this.loadDescription(citation);
            criteria.forEach((value, key) => {
                if (value.search) {
                    this.criteria.push(value);
                }
                if (value.table) {
                    this.tableColumns.push(key);
                }
            });
            cd.markForCheck();
        });
    }
    loadDescription(citation) {
        this.http.get('configuration/description.md', { responseType: 'text' })
            .subscribe(res => {
            this.description = ConfigurationService_1.getHtml(this.converter, citation, res);
        });
    }
};
ConfigurationService = ConfigurationService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"],
        __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_6__data_data_service__["a" /* DataService */]])
], ConfigurationService);

var ConfigurationService_1;


/***/ }),

/***/ "./src/app/components/comparison/configuration/configuration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CriteriaType; });
/* harmony export (immutable) */ __webpack_exports__["i"] = getCriteriaType;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);

class Configuration {
    constructor(builder) {
        this.title = builder.title || "Ultimate-X-Comparison";
        this.subtitle = builder.subtitle || "Ultimate X configuration framework";
        this.selectTitle = builder.selectTitle || "Criteria";
        this.tableTitle = builder.tableTitle || "Comparison of ...";
        this.repository = builder.repository || "";
        this.details = builder.details || new Details.Builder().build();
        this.criteria = builder.criteria || new Map();
        this.citation = builder.citation || new Map();
    }
    static get Builder() {
        class Builder {
            setTitle(title) {
                this.title = title;
                return this;
            }
            setSubtitle(subtitle) {
                this.subtitle = subtitle;
                return this;
            }
            setSelectTitle(selectTitle) {
                this.selectTitle = selectTitle;
                return this;
            }
            setTableTitle(tableTitle) {
                this.tableTitle = tableTitle;
                return this;
            }
            setRepository(repository) {
                this.repository = repository;
                return this;
            }
            setDetails(details) {
                this.details = details;
                return this;
            }
            setCriteria(criteria) {
                this.criteria = criteria;
                return this;
            }
            setCitation(citation) {
                this.citation = citation;
                return this;
            }
            build() {
                return new Configuration(this);
            }
        }
        return Builder;
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = Configuration;

class Details {
    constructor(builder) {
        this.header = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.header) ? new Header.Builder().build() : builder.header;
        this.body = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.body) ? new Body.Builder().build() : builder.body;
    }
    static get Builder() {
        class Builder {
            setHeader(header) {
                this.header = header;
                return this;
            }
            setBody(body) {
                this.body = body;
                return this;
            }
            build() {
                return new Details(this);
            }
        }
        return Builder;
    }
}
/* harmony export (immutable) */ __webpack_exports__["g"] = Details;

class Header {
    constructor(builder) {
        this.nameRef = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.nameRef) ? "id" : builder.nameRef;
        this.labelRef = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.labelRef) ? "" : builder.labelRef;
        this.urlRef = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.urlRef) ? "inline" : builder.urlRef;
    }
    static get Builder() {
        class Builder {
            setNameRef(nameRef) {
                this.nameRef = nameRef;
                return this;
            }
            setLabelRef(labelRef) {
                this.labelRef = labelRef;
                return this;
            }
            setUrlRef(urlRef) {
                this.urlRef = urlRef;
                return this;
            }
            build() {
                return new Header(this);
            }
        }
        return Builder;
    }
}
/* harmony export (immutable) */ __webpack_exports__["h"] = Header;

class Body {
    constructor(builder) {
        this.title = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.title) ? "Description" : builder.title;
        this.bodyRef = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.bodyRef) ? "Description" : builder.bodyRef;
        this.tooltipAsText = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.tooltipAsText) ? true : false;
    }
    static get Builder() {
        class Builder {
            setTitle(title) {
                this.title = title;
                return this;
            }
            setBodyRef(bodyRef) {
                this.bodyRef = bodyRef;
                return this;
            }
            setTooltipAsText(tooltipAsText) {
                this.tooltipAsText = tooltipAsText;
                return this;
            }
            build() {
                return new Body(this);
            }
        }
        return Builder;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Body;

class Criteria {
    constructor(builder) {
        let name = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.name) ? "" : builder.name;
        this.name = name;
        this.search = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.search) ? true : builder.search;
        this.table = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.table) ? true : builder.table;
        this.detail = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.detail) ? true : builder.detail;
        this.type = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.type) ? CriteriaType.label : builder.type;
        this.description = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.description) ? (name.length === 0 ? "" :
            name.charAt(0).toUpperCase().concat(name.slice(1), " of entry.")) : builder.description;
        this.placeholder = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.placeholder) ? (name.length === 0 ? "" :
            "Select ".concat(name.charAt(0), name.slice(1), " of ...")) : builder.placeholder;
        this.andSearch = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.andSearch) ? true : builder.andSearch;
        this.rangeSearch = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.rangeSearch) ? false : builder.rangeSearch;
        let values = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.values) ? new Map() : builder.values;
        this.values = values;
        this.items = [];
        values.forEach((value) => {
            this.items.push(value.name);
        });
    }
    static get Builder() {
        class Builder {
            setSearch(search) {
                this.search = search;
                return this;
            }
            setAndSearch(andSearch) {
                this.andSearch = andSearch;
                return this;
            }
            setName(name) {
                this.name = name;
                return this;
            }
            setTable(table) {
                this.table = table;
                return this;
            }
            setDetail(detail) {
                this.detail = detail;
                return this;
            }
            setType(type) {
                this.type = type;
                return this;
            }
            setDescription(description) {
                this.description = description;
                return this;
            }
            setPlaceholder(placeholder) {
                this.placeholder = placeholder;
                return this;
            }
            setRangeSearch(rangeSearch) {
                this.rangeSearch = rangeSearch;
                return this;
            }
            setValues(values) {
                this.values = values;
                return this;
            }
            build() {
                return new Criteria(this);
            }
        }
        return Builder;
    }
    getSearchIndicator() {
        if (this.andSearch) {
            return 'match all';
        }
        if (this.rangeSearch) {
            return 'match range';
        }
        return 'match one';
    }
}
/* harmony export (immutable) */ __webpack_exports__["d"] = Criteria;

var CriteriaType;
(function (CriteriaType) {
    CriteriaType["url"] = "url";
    CriteriaType["label"] = "label";
    CriteriaType["text"] = "text";
    CriteriaType["markdown"] = "markdown";
    CriteriaType["rating"] = "rating";
    CriteriaType["repository"] = "repository";
})(CriteriaType || (CriteriaType = {}));
function getCriteriaType(value) {
    switch (value) {
        case "url":
            return CriteriaType.url;
        case "text":
            return CriteriaType.text;
        case "markdown":
            return CriteriaType.markdown;
        case "rating":
            return CriteriaType.rating;
        case "repository":
            return CriteriaType.repository;
        case "label":
            return CriteriaType.label;
        default:
            return null;
    }
}
class CriteriaValue {
    constructor(builder) {
        let criteria = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.criteria) ? "" : builder.criteria;
        let name = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.name) ? "" : builder.name;
        this.criteria = criteria;
        this.name = name;
        this.description = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.description) ? ((criteria.length === 0 || name.length === 0) ? "" :
            criteria.charAt(0).toUpperCase().concat(criteria.slice(1), " is ", name)) : builder.description;
        this.clazz = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.clazz) ? "" : builder.clazz;
        this.color = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.color) ? "" : builder.color;
        this.backgroundColor = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.backgroundColor) ? "" : builder.backgroundColor;
        this.weight = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.weight) ? 1 : builder.weight;
        this.minAge = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.minAge) ? -1 : builder.minAge;
        this.maxAge = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.maxAge) ? -1 : builder.maxAge;
        this.minAgeUnit = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.minAgeUnit) ? "months" : builder.minAgeUnit;
        this.maxAgeUnit = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.maxAgeUnit) ? "months" : builder.maxAgeUnit;
        if (Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.clazz) && Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.color) && Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.backgroundColor)) {
            this.backgroundColor = "#777";
        }
    }
    static get Builder() {
        class Builder {
            setCriteria(criteria) {
                this.criteria = criteria;
                return this;
            }
            setName(name) {
                this.name = name;
                return this;
            }
            setDescription(value) {
                this.description = value;
                return this;
            }
            setClazz(value) {
                this.clazz = value;
                return this;
            }
            setColor(value) {
                this.color = value;
                return this;
            }
            setBackgroundColor(value) {
                this.backgroundColor = value;
                return this;
            }
            setWeight(value) {
                this.weight = value;
                return this;
            }
            setMinAge(value) {
                this.minAge = value;
                return this;
            }
            setMaxAge(value) {
                this.maxAge = value;
                return this;
            }
            setMinAgeUnit(value) {
                this.minAgeUnit = value;
                return this;
            }
            setMaxAgeUnit(value) {
                this.maxAgeUnit = value;
                return this;
            }
            build() {
                return new CriteriaValue(this);
            }
        }
        return Builder;
    }
}
/* harmony export (immutable) */ __webpack_exports__["f"] = CriteriaValue;

class Citation {
    constructor(builder) {
        this.index = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.index) ? -1 : builder.index;
        if (Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.key)) {
            console.error("No key given for '".concat(JSON.stringify(builder), "'"));
            this.key = "undefined";
        }
        else {
            this.key = builder.key;
        }
        ;
        this.text = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.text) ? "" : builder.text;
    }
    static get Builder() {
        class Builder {
            setIndex(index) {
                this.index = index;
                return this;
            }
            setKey(value) {
                this.key = value;
                return this;
            }
            setText(value) {
                this.text = value;
                return this;
            }
            build() {
                return new Citation(this);
            }
        }
        return Builder;
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = Citation;



/***/ }),

/***/ "./src/app/components/comparison/data/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_showdown__ = __webpack_require__("./node_modules/showdown/dist/showdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_showdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_showdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data__ = __webpack_require__("./src/app/components/comparison/data/data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration_configuration__ = __webpack_require__("./src/app/components/comparison/configuration/configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__configuration_configuration_service__ = __webpack_require__("./src/app/components/comparison/configuration/configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__redux_uc_action__ = __webpack_require__("./src/app/redux/uc.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let DataService = DataService_1 = class DataService {
    constructor(http, store) {
        this.http = http;
        this.store = store;
        this.converter = new __WEBPACK_IMPORTED_MODULE_2_showdown__["Converter"]();
    }
    setSubscriber(configurationService) {
        configurationService.initializeData.subscribe(this.loadData);
    }
    loadData(value) {
        const configuration = value.configuration;
        const dataService = value.dataService;
        const cd = value.cd;
        dataService.http.get('data.json')
            .subscribe(res => {
            const dataArrayObject = res || [];
            const data = [];
            dataArrayObject.forEach(dataObject => {
                // Split markdown first level header (e.g. Default 1 - www.example.com) into 'name' and 'url'
                const regArray = /^((?:(?:\w+\s*)(?:-?\s*\w+.)*)+)\s*-?\s*((?:(?:http|ftp|https)(?::\/\/)(?:[\w_-]+(?:(?:\.[\w_-]+)+))|(?:www.))(?:[\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?)$/gi
                    .exec(dataObject.tag);
                const name = ((regArray && regArray.length > 1) ? regArray[1] : dataObject.tag || "").trim();
                let url = ((regArray && regArray.length > 2) ? regArray[2] : dataObject.tag || "").trim();
                if (/^(www)/.test(url)) {
                    url = 'http://'.concat(url);
                }
                let averageRating = 0;
                // Iterate over second level header and automatically generated ('tag' and 'description')
                const criteria = new Map();
                Object.keys(dataObject).forEach(criteriaKey => {
                    const criteriaObject = dataObject[criteriaKey];
                    if (Object(__WEBPACK_IMPORTED_MODULE_6_util__["isNullOrUndefined"])(criteriaObject)) {
                        return;
                    }
                    // tag is the name of first level header key in json => build column based on Configuration 'id'
                    if (criteriaKey === "tag") {
                        const critConf = configuration.criteria.get("id");
                        const type = critConf ? critConf.type : __WEBPACK_IMPORTED_MODULE_4__configuration_configuration__["e" /* CriteriaType */].url;
                        switch (type) {
                            case __WEBPACK_IMPORTED_MODULE_4__configuration_configuration__["e" /* CriteriaType */].text:
                                criteria.set('id', new __WEBPACK_IMPORTED_MODULE_3__data__["e" /* Text */](name));
                                break;
                            case __WEBPACK_IMPORTED_MODULE_4__configuration_configuration__["e" /* CriteriaType */].markdown:
                                criteria.set("id", new __WEBPACK_IMPORTED_MODULE_3__data__["c" /* Markdown */](name, __WEBPACK_IMPORTED_MODULE_5__configuration_configuration_service__["a" /* ConfigurationService */].getHtml(dataService.converter, configuration.citation, name), __WEBPACK_IMPORTED_MODULE_5__configuration_configuration_service__["a" /* ConfigurationService */].getLatex(dataService.converter, name)));
                                break;
                            case __WEBPACK_IMPORTED_MODULE_4__configuration_configuration__["e" /* CriteriaType */].label:
                                const labels = new Map();
                                labels.set(name, new __WEBPACK_IMPORTED_MODULE_3__data__["b" /* Label */].Builder().setName(name).build());
                                criteria.set('id', labels);
                                break;
                            case __WEBPACK_IMPORTED_MODULE_4__configuration_configuration__["e" /* CriteriaType */].url:
                                criteria.set("id", new __WEBPACK_IMPORTED_MODULE_3__data__["g" /* Url */](name, url));
                                break;
                            default:
                                return;
                        }
                        return;
                    }
                    // key is the name of first level header content key in json =>
                    // build column based on Configuration 'description'
                    if (criteriaKey === "descr") {
                        const critConf = configuration.criteria.get("description");
                        const type = critConf ? critConf.type : __WEBPACK_IMPORTED_MODULE_4__configuration_configuration__["e" /* CriteriaType */].url;
                        switch (type) {
                            case __WEBPACK_IMPORTED_MODULE_4__configuration_configuration__["e" /* CriteriaType */].text:
                                criteria.set('description', new __WEBPACK_IMPORTED_MODULE_3__data__["e" /* Text */](criteriaObject));
                                break;
                            case __WEBPACK_IMPORTED_MODULE_4__configuration_configuration__["e" /* CriteriaType */].markdown:
                                criteria.set('description', new __WEBPACK_IMPORTED_MODULE_3__data__["c" /* Markdown */](criteriaObject, __WEBPACK_IMPORTED_MODULE_5__configuration_configuration_service__["a" /* ConfigurationService */]
                                    .getHtml(dataService.converter, configuration.citation, criteriaObject), __WEBPACK_IMPORTED_MODULE_5__configuration_configuration_service__["a" /* ConfigurationService */].getLatex(dataService.converter, criteriaObject)));
                                break;
                            case __WEBPACK_IMPORTED_MODULE_4__configuration_configuration__["e" /* CriteriaType */].label:
                                const labels = new Map();
                                labels.set(criteriaObject, new __WEBPACK_IMPORTED_MODULE_3__data__["b" /* Label */].Builder().setName(criteriaObject).build());
                                criteria.set('description', labels);
                                break;
                            case __WEBPACK_IMPORTED_MODULE_4__configuration_configuration__["e" /* CriteriaType */].url:
                                criteria.set("description", new __WEBPACK_IMPORTED_MODULE_3__data__["g" /* Url */](criteriaObject, url));
                                break;
                            default:
                                criteria.set("description", new __WEBPACK_IMPORTED_MODULE_3__data__["e" /* Text */](""));
                        }
                        return;
                    }
                    // Handle all other second level headers
                    const criteriaConf = configuration.criteria.get(criteriaKey) || new __WEBPACK_IMPORTED_MODULE_4__configuration_configuration__["d" /* Criteria */].Builder().build();
                    const childs = criteriaObject.childs || {};
                    const childsArrayLvl1 = childs['0'] || [];
                    const childsArray = childsArrayLvl1.length > 0 ? childsArrayLvl1[0] : [];
                    switch (criteriaConf.type) {
                        case __WEBPACK_IMPORTED_MODULE_4__configuration_configuration__["e" /* CriteriaType */].text:
                            criteria.set(criteriaKey, new __WEBPACK_IMPORTED_MODULE_3__data__["e" /* Text */](criteriaObject.plain));
                            break;
                        case __WEBPACK_IMPORTED_MODULE_4__configuration_configuration__["e" /* CriteriaType */].markdown:
                            criteria.set(criteriaKey, new __WEBPACK_IMPORTED_MODULE_3__data__["c" /* Markdown */](criteriaObject.plain, __WEBPACK_IMPORTED_MODULE_5__configuration_configuration_service__["a" /* ConfigurationService */].getHtml(dataService.converter, configuration.citation, criteriaObject.plain), __WEBPACK_IMPORTED_MODULE_5__configuration_configuration_service__["a" /* ConfigurationService */].getLatex(dataService.converter, criteriaObject.plain)));
                            break;
                        case __WEBPACK_IMPORTED_MODULE_4__configuration_configuration__["e" /* CriteriaType */].url:
                            criteria.set(criteriaObject.plain, new __WEBPACK_IMPORTED_MODULE_3__data__["g" /* Url */](criteriaObject.plain, criteriaObject.plain));
                            break;
                        case __WEBPACK_IMPORTED_MODULE_4__configuration_configuration__["e" /* CriteriaType */].rating:
                            const ratings = [];
                            let sum = 0;
                            if (typeof childsArray !== 'string') {
                                childsArray.forEach(ratingObject => {
                                    const starsString = /\[(\d*)]/gm.exec(ratingObject.content)[1];
                                    const stars = parseInt(starsString, 10);
                                    sum += stars;
                                    const comment = /(?:\[\d*])((?:.|\n)*)/gm.exec(ratingObject.content)[1];
                                    ratings.push(new __WEBPACK_IMPORTED_MODULE_3__data__["d" /* Rating */](stars, comment));
                                });
                            }
                            if (ratings.length !== 0) {
                                averageRating = sum / ratings.length;
                            }
                            criteria.set(criteriaKey, ratings);
                            break;
                        case __WEBPACK_IMPORTED_MODULE_4__configuration_configuration__["e" /* CriteriaType */].label:
                            let labels = new Map();
                            if (typeof childsArray !== 'string') {
                                childsArray.forEach(labelObject => {
                                    let criteriaValueConf;
                                    if (Object(__WEBPACK_IMPORTED_MODULE_6_util__["isNullOrUndefined"])(criteriaConf.values.get(labelObject.content))) {
                                        console.error("Could not resolve CriteriaValue with name '"
                                            .concat(labelObject.content, "'"));
                                        criteriaValueConf = new __WEBPACK_IMPORTED_MODULE_4__configuration_configuration__["f" /* CriteriaValue */].Builder().build();
                                    }
                                    else {
                                        criteriaValueConf = criteriaConf.values.get(labelObject.content);
                                    }
                                    let tooltipArray = Object(__WEBPACK_IMPORTED_MODULE_6_util__["isNullOrUndefined"])(labelObject.childs) ? [] : labelObject.childs;
                                    let htmlTooltip = "";
                                    let latexTooltip = "";
                                    if (tooltipArray.length == 1) {
                                        htmlTooltip = Object(__WEBPACK_IMPORTED_MODULE_6_util__["isNullOrUndefined"])(tooltipArray[0].plain) ? "" : tooltipArray[0].plain.trim();
                                        latexTooltip = htmlTooltip.trim();
                                        if (latexTooltip.startsWith('-') || latexTooltip.startsWith('*')) {
                                            latexTooltip = latexTooltip.substring(1).trim();
                                        }
                                    }
                                    else {
                                        htmlTooltip = labelObject.plainChilds.replace(/^[\s]{3}/gm, '');
                                        if (htmlTooltip) {
                                            latexTooltip = htmlTooltip.replace(/[\s]{2}/gm, ' ');
                                            latexTooltip = latexTooltip.replace(/[\s]/gm, ' ');
                                        }
                                    }
                                    htmlTooltip = __WEBPACK_IMPORTED_MODULE_5__configuration_configuration_service__["a" /* ConfigurationService */].getHtml(dataService.converter, configuration.citation, htmlTooltip);
                                    latexTooltip = (latexTooltip.replace(/(?:\[@)([^\]]*)(?:\])/g, (match, dec) => {
                                        return '\\cite{' + dec + '}';
                                    }) || "").trim();
                                    const tooltip = new __WEBPACK_IMPORTED_MODULE_3__data__["f" /* Tooltip */](criteriaValueConf.description, htmlTooltip, latexTooltip);
                                    labels.set(labelObject.content, new __WEBPACK_IMPORTED_MODULE_3__data__["b" /* Label */].Builder()
                                        .setName(labelObject.content)
                                        .setTooltip(tooltip)
                                        .setClazz(criteriaValueConf.clazz)
                                        .setColor(criteriaValueConf.color)
                                        .setBackgroundColor(criteriaValueConf.backgroundColor)
                                        .build());
                                });
                            }
                            criteria.set(criteriaKey, labels);
                            break;
                        case __WEBPACK_IMPORTED_MODULE_4__configuration_configuration__["e" /* CriteriaType */].repository:
                            break;
                        default:
                            console.error("Could not resolve second level header CriteriaType: '".concat(criteriaKey, "'!"));
                    }
                });
                data.push(new __WEBPACK_IMPORTED_MODULE_3__data__["a" /* Data */].Builder().setName(name)
                    .setUrl(url)
                    .setCriteria(criteria)
                    .setAverageRating(averageRating)
                    .build());
            });
            DataService_1.data = data;
            dataService.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__redux_uc_action__["b" /* UCDataUpdateAction */](configuration.criteria));
            dataService.store.dispatch({
                type: 'UPDATE_SETTINGS',
                enable: configuration.details.body.tooltipAsText,
                operation: 'DetailsDisplayTooltips'
            });
            cd.markForCheck();
        });
    }
};
DataService.data = [];
DataService = DataService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["a" /* Store */]])
], DataService);

var DataService_1;


/***/ }),

/***/ "./src/app/components/comparison/data/data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);

class Data {
    constructor(builder) {
        this.name = builder.name;
        this.url = builder.url;
        this.criteria = builder.criteria;
        this.averageRating = builder.averageRating || 0;
    }
    static get Builder() {
        class Builder {
            setName(value) {
                this.name = value;
                return this;
            }
            setUrl(value) {
                this.url = value;
                return this;
            }
            setCriteria(value) {
                this.criteria = value;
                return this;
            }
            setAverageRating(value) {
                this.averageRating = value;
                return this;
            }
            build() {
                return new Data(this);
            }
        }
        return Builder;
    }
    sort(other, criteria) {
        const me = this.criteria.get(criteria);
        const ot = other.criteria.get(criteria);
        if (me.constructor.name === 'Map') {
            let key1 = null;
            let key2 = null;
            for (const key of me.keys()) {
                if (key1 === null) {
                    key1 = key;
                    continue;
                }
                if (key1.localeCompare(key) > 0) {
                    key1 = key;
                }
            }
            for (const key of ot.keys()) {
                if (key2 === null) {
                    key2 = key;
                    continue;
                }
                if (key2.localeCompare(key) > 0) {
                    key2 = key;
                }
            }
            if (key1 === null && key2 !== null) {
                return 1;
            }
            else if (key2 === null && key1 !== null) {
                return -1;
            }
            return key1.localeCompare(key2);
        }
        else if (me.constructor.name === 'Text') {
            return me.content.localeCompare(ot.content);
        }
        else if (me.constructor.name === 'Url') {
            return me.link.localeCompare(ot.link);
        }
        else if (me.constructor.name === 'Markdown') {
            return me.content.localeCompare(ot.content);
        }
        else if (me.constructor.name === 'Array') {
            const mer = me;
            const otr = ot;
            if (mer.length === 0 && otr.length > 0) {
                return 1;
            }
            else if (otr.length === 0 && mer.length > 0) {
                return -1;
            }
            else if (mer.length === 0) {
                return 0;
            }
            else {
                return me[0].stars - ot[0].stars;
            }
        }
        return 0;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Data;

class Label {
    constructor(builder) {
        this.name = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.name) ? "" : builder.name;
        this.tooltip = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.tooltip) ? new Tooltip(null, null, null) : builder.tooltip;
        this.clazz = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.clazz) ? "" : builder.clazz;
        this.color = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.color) ? "" : builder.color;
        this.backgroundColor = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(builder.backgroundColor) ? "" : builder.backgroundColor;
    }
    static get Builder() {
        class Builder {
            setName(value) {
                this.name = value;
                return this;
            }
            setTooltip(value) {
                this.tooltip = value;
                return this;
            }
            setClazz(value) {
                this.clazz = value;
                return this;
            }
            setColor(value) {
                this.color = value;
                return this;
            }
            setBackgroundColor(value) {
                this.backgroundColor = value;
                return this;
            }
            build() {
                return new Label(this);
            }
        }
        return Builder;
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = Label;

class Text {
    constructor(content) {
        this.content = content || "";
    }
}
/* harmony export (immutable) */ __webpack_exports__["e"] = Text;

class Url {
    constructor(text, link) {
        this.text = !Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(text) ? text : (!Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(link) ? link : "");
        this.link = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(link) ? "" : link;
    }
}
/* harmony export (immutable) */ __webpack_exports__["g"] = Url;

class Markdown {
    constructor(content, htmlContent, latex) {
        this.content = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(content) ? "" : content;
        this.htmlContent = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(htmlContent) ? "" : htmlContent;
        this.latex = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(latex) ? "" : latex;
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = Markdown;

class Rating {
    constructor(stars, comment) {
        this.stars = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(stars) ? 0 : stars;
        this.comment = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(comment) ? "" : comment;
    }
}
/* harmony export (immutable) */ __webpack_exports__["d"] = Rating;

class Tooltip {
    constructor(text, html, latex) {
        this.text = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(text) ? "" : text;
        this.html = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(html) ? "" : html;
        this.latex = Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(latex) ? "" : latex;
    }
}
/* harmony export (immutable) */ __webpack_exports__["f"] = Tooltip;



/***/ }),

/***/ "./src/app/components/comparison/details/comparison.details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    display: grid;\n    padding: 0;\n}\n\n:host h2 ptooltip {\n    font-family: Roboto, Noto, sans-serif;\n    font-size: 14px;\n    font-weight: 400;\n}\n\n.mylabel {\n    margin: 2px;\n    display: inline-block !important;\n    cursor: pointer;\n    font-size: 14px !important;\n    white-space: inherit;\n}\n\n.card-content {\n    position: relative;\n}\n\n.tooltip-text {\n    display: inline-table;\n}\n\n.tooltip-text ::ng-deep ul {\n    padding-left: 15px;\n}\n\n.pheader h2 {\n    margin-top: 0;\n}\n\n.description {\n    grid-column: span 1;\n}\n\n.grid-content {\n    display: grid;\n    grid-template-columns: auto;\n    grid-column-gap: 10px;\n    grid-row-gap: 10px;\n    grid-auto-flow: row;\n}\n\n@media only screen and (min-width: 400px) {\n    .description {\n        grid-column: span 2;\n    }\n\n    .grid-content {\n        grid-template-columns: 1fr 1fr;\n    }\n}\n\n.tt-container {\n    display: grid;\n    grid-template-columns: auto 1fr;\n}\n\n.tt-label {\n    grid-column: 1;\n    margin: 1px 2px auto 2px;\n}\n\ntt-tooltip {\n    grid-column: 2;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/comparison/details/comparison.details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComparisonDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configuration_configuration_service__ = __webpack_require__("./src/app/components/comparison/configuration/configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data__ = __webpack_require__("./src/app/components/comparison/data/data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ComparisonDetailsComponent = class ComparisonDetailsComponent {
    constructor(configurationService) {
        this.configurationService = configurationService;
        this.data = new __WEBPACK_IMPORTED_MODULE_2__data_data__["a" /* Data */].Builder().build();
        this.headerLabels = [];
        this.description = "";
        this.displayDescription = true;
        this.bodyTitle = "";
        this.tags = [];
        this.headers = [];
        this.ratings = [];
        this.tooltipAsText = true;
    }
    ngOnChanges(changes) {
        if (changes.data && this.data && this.data.criteria) {
            let headerLabels = [];
            let cS = this.configurationService.configuration;
            let cD = this.data.criteria;
            const criteria = cD.get(cS.details.header.labelRef);
            if (criteria instanceof Map) {
                criteria.forEach(label => headerLabels.push(label));
            }
            this.headerLabels = headerLabels;
            this.bodyTitle = this.configurationService.configuration.details.body.title || "";
            let description = this.data.criteria.get(this.configurationService.configuration.details.body.bodyRef);
            const descriptionCriteria = this.configurationService.configuration.criteria.get(this.configurationService.configuration.details.body.bodyRef);
            if (!Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(descriptionCriteria) && descriptionCriteria.detail) {
                this.displayDescription = true;
                if (descriptionCriteria.type === 'markdown') {
                    this.description = description.htmlContent;
                }
                else if (descriptionCriteria.type === 'text') {
                    this.description = description.content;
                }
                else {
                    this.displayDescription = false;
                }
            }
            else {
                this.displayDescription = false;
            }
            let tags = [];
            let types = [];
            let headers = [];
            let ratings = [];
            const criteriaMap = this.configurationService.configuration.criteria;
            this.data.criteria.forEach((criteria, key) => {
                const criteriaConf = criteriaMap.get(key);
                if (criteriaConf.detail && this.configurationService.configuration.details.body.bodyRef !== key) {
                    if (criteria instanceof Map) {
                        let labels = [];
                        criteria.forEach(c => labels.push(c));
                        tags.push(labels);
                        types.push(criteriaConf.type);
                        headers.push(criteriaConf.name);
                    }
                    else if (criteria instanceof Array) {
                        let labels = [];
                        criteria.forEach(item => {
                            if (item instanceof __WEBPACK_IMPORTED_MODULE_2__data_data__["b" /* Label */])
                                labels.push(item);
                            if (item instanceof __WEBPACK_IMPORTED_MODULE_2__data_data__["d" /* Rating */])
                                ratings.push(item);
                        });
                        if (labels.length > 0) {
                            this.tags.push(labels);
                            types.push(criteriaConf.type);
                            headers.push(criteriaConf.name);
                        }
                    }
                    else {
                        tags.push(criteria);
                        types.push(criteriaConf.type);
                        headers.push(criteriaConf.name);
                    }
                }
            });
            this.tags = tags;
            this.types = types;
            this.headers = headers;
            this.ratings = ratings;
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__data_data__["a" /* Data */])
], ComparisonDetailsComponent.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ComparisonDetailsComponent.prototype, "headerLabels", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ComparisonDetailsComponent.prototype, "description", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ComparisonDetailsComponent.prototype, "displayDescription", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ComparisonDetailsComponent.prototype, "bodyTitle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ComparisonDetailsComponent.prototype, "tags", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ComparisonDetailsComponent.prototype, "types", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ComparisonDetailsComponent.prototype, "headers", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ComparisonDetailsComponent.prototype, "ratings", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ComparisonDetailsComponent.prototype, "tooltipAsText", void 0);
ComparisonDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'comparison-details',
        template: __webpack_require__("./src/app/components/comparison/details/comparison.details.template.html"),
        styles: [__webpack_require__("./src/app/components/comparison/details/comparison.details.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__configuration_configuration_service__["a" /* ConfigurationService */]])
], ComparisonDetailsComponent);



/***/ }),

/***/ "./src/app/components/comparison/details/comparison.details.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pheader\">\n    <h2>{{data.name}}\n        <ng-template ngFor let-label [ngForOf]=\"headerLabels\">\n            <ptooltip [tooltip]=\"label.tooltip.text\"\n                      [tooltipHtml]=\"label.tooltip.html\" [position]=\"'s'\">\n                <div class=\"label mylabel {{label.clazz}}\" [style.color]=\"label.color\"\n                     [style.background-color]=\"label.backgroundColor\">\n                    {{label.name}}\n                </div>\n            </ptooltip>\n        </ng-template>\n        <small><a href=\"{{data.url}}\" target=\"_blank\">{{data.url}}</a></small>\n    </h2>\n</div>\n<div class=\"grid-content\">\n    <pcard *ngIf=\"displayDescription\" heading=\"{{bodyTitle}}\" class=\"description\">\n        <div [innerHTML]=\"description | sanitizeHtml\" class=\"description\"></div>\n    </pcard>\n\n    <ng-template ngFor let-entry [ngForOf]=\"tags\" let-i=\"index\">\n        <pcard heading=\"{{headers[i]}}\">\n            <p class=\"card-content\">\n                <a *ngIf=\"types[i] === 'url'\" class=\"anchored\"\n                   href=\"{{entry.link}}\"\n                   target=\"_blank\">{{entry.text}}</a>\n                <ng-template *ngIf=\"types[i] === 'label'\" ngFor let-label [ngForOf]=\"entry\">\n                    <ptooltip *ngIf=\"!tooltipAsText\"\n                              [tooltip]=\"label.tooltip.text\"\n                              [tooltipHtml]=\"label.tooltip.html\" [position]=\"'n'\">\n                        <div class=\"label mylabel {{label.clazz}}\" [style.color]=\"label.color\"\n                             [style.background-color]=\"label.backgroundColor\"\n                             (click)=\"labelClick(label, i)\">\n                            {{label.name}}\n                        </div>\n                    </ptooltip>\n                    <div *ngIf=\"tooltipAsText\" class=\"tt-container\">\n                        <span class=\"label mylabel {{label.clazz}} tt-label\" [style.color]=\"label.color\"\n                              [style.background-color]=\"label.backgroundColor\"\n                              (click)=\"labelClick(label, i)\">\n                        {{label.name}}\n                        </span>\n                        <span class=\"tooltip-text tt-tooltip\" [innerHtml]=\"label.tooltip.text|sanitizeHtml\"></span>\n                        <br *ngIf=\"label.tooltip.text && label.tooltip.html\">\n                        <span class=\"tooltip-text tt-tooltip\" [innerHtml]=\"label.tooltip.html|sanitizeHtml\"></span>\n                    </div>\n                </ng-template>\n\n                <span *ngIf=\"types[i] === 'text'\">{{entry.content}}</span>\n\n                <span *ngIf=\"types[i] === 'markdown'\" [innerHtml]=\"entry?.htmlContent | sanitizeHtml\"></span>\n            </p>\n        </pcard>\n    </ng-template>\n\n    <pcard heading=\"Ratings\" *ngIf=\"ratings.length > 0\" style=\"display:block\">\n        <div class=\"card-content\">\n            <ng-template ngFor let-rating [ngForOf]=\"ratings\">\n                <dl>\n                    <dt>\n                        <iicon icon=\"star\">{{rating.stars}}</iicon>\n                    </dt>\n                    <dd>\n                        {{rating.comment}}\n                    </dd>\n                </dl>\n            </ng-template>\n        </div>\n    </pcard>\n\n    <pcard heading=\"References\" *ngIf=\"configurationService.configuration.citation.size != 0\" class=\"description\">\n        <referencestable [changeNum]=\"configurationService.configuration.citation.length\"\n                         [citationMap]=\"configurationService.configuration.citation\"></referencestable>\n    </pcard>\n</div>\n"

/***/ }),

/***/ "./src/app/components/comparison/settings/comparison.settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    display: grid;\n    padding: 0;\n}\n\n.grid-content {\n    display: grid;\n    grid-template-columns: auto;\n    grid-column-gap: 10px;\n    grid-row-gap: 10px;\n    grid-auto-flow: row;\n    margin-bottom: 10px;\n}\n\n.pcard {\n    display: grid;\n    grid-template-columns: auto;\n    grid-auto-flow: row;\n}\n\n@media only screen and (min-width: 400px) {\n    .pcard {\n        grid-template-columns: auto auto;\n    }\n}\n\n@media only screen and (min-width: 800px) {\n    .pcard {\n        grid-template-columns: auto auto auto;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/comparison/settings/comparison.settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComparisonSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ComparisonSettingsComponent = class ComparisonSettingsComponent {
    constructor() {
        this.columnDisplayAll = false;
        this.columnNames = [];
        this.columnsEnabled = [];
        this.elementDisplayAll = true;
        this.elementNames = [];
        this.elementsEnabled = [];
        this.latexDisplayTable = false;
        this.latexEnableTooltips = false;
        this.latexTooltipsAsFootnotes = false;
        this.detailsDisplayTooltips = false;
        this.columnsDisplayAllChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.columnChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.elementsDisplayAllChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.elementChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.latexDisplayTableChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.latexEnableTooltipsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.latexTooltipsAsFootnotesChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.latexDownload = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.detailsDisplayTooltipsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ComparisonSettingsComponent.prototype, "columnDisplayAll", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ComparisonSettingsComponent.prototype, "columnNames", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ComparisonSettingsComponent.prototype, "columnsEnabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ComparisonSettingsComponent.prototype, "elementDisplayAll", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ComparisonSettingsComponent.prototype, "elementNames", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ComparisonSettingsComponent.prototype, "elementsEnabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ComparisonSettingsComponent.prototype, "latexDisplayTable", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ComparisonSettingsComponent.prototype, "latexEnableTooltips", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ComparisonSettingsComponent.prototype, "latexTooltipsAsFootnotes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ComparisonSettingsComponent.prototype, "detailsDisplayTooltips", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], ComparisonSettingsComponent.prototype, "columnsDisplayAllChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], ComparisonSettingsComponent.prototype, "columnChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], ComparisonSettingsComponent.prototype, "elementsDisplayAllChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], ComparisonSettingsComponent.prototype, "elementChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], ComparisonSettingsComponent.prototype, "latexDisplayTableChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], ComparisonSettingsComponent.prototype, "latexEnableTooltipsChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], ComparisonSettingsComponent.prototype, "latexTooltipsAsFootnotesChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], ComparisonSettingsComponent.prototype, "latexDownload", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], ComparisonSettingsComponent.prototype, "detailsDisplayTooltipsChange", void 0);
ComparisonSettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'comparison-settings',
        template: __webpack_require__("./src/app/components/comparison/settings/comparison.settings.template.html"),
        styles: [__webpack_require__("./src/app/components/comparison/settings/comparison.settings.component.css")]
    })
], ComparisonSettingsComponent);



/***/ }),

/***/ "./src/app/components/comparison/settings/comparison.settings.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-content\">\n    <pcard [heading]=\"'Columns'\">\n        <div class=\"pcard\">\n            <pitem>\n                <pcheckbox [checked]=\"columnDisplayAll\"\n                           (checkedChange)=\"columnsDisplayAllChange.emit($event)\"\n                           [label]=\"'All'\"></pcheckbox>\n            </pitem>\n            <ng-template ngFor let-name [ngForOf]=\"columnNames\" let-i=\"index\">\n                <pitem>\n                    <pcheckbox [checked]=\"columnsEnabled[i]\"\n                               (checkedChange)=\"columnChange.emit(i)\"\n                               [label]=\"name\"></pcheckbox>\n                </pitem>\n            </ng-template>\n        </div>\n    </pcard>\n\n    <pcard [heading]=\"'Elements'\">\n        <div class=\"pcard\">\n            <pitem>\n                <pcheckbox [checked]=\"elementDisplayAll\"\n                           (checkedChange)=\"elementsDisplayAllChange.emit($event)\"\n                           [label]=\"'All'\"></pcheckbox>\n            </pitem>\n            <ng-template ngFor let-name [ngForOf]=\"elementNames\" let-i=\"index\">\n                <pitem>\n                    <pcheckbox [checked]=\"elementsEnabled[i]\"\n                               (checkedChange)=\"elementChange.emit(i)\"\n                               [label]=\"name\"></pcheckbox>\n                </pitem>\n            </ng-template>\n        </div>\n    </pcard>\n\n    <pcard [heading]=\"'Other'\">\n        <h5>Latex</h5>\n        <pitem>\n            <pbutton (click)=\"latexDownload.emit($event)\">\n                <div class=\"icon\">\n                    <svg viewBox=\"0 0 433.5 433.5\" width=\"11\" height=\"11\">\n                        <path fill=\"#fff\" xmlns=\"http://www.w3.org/2000/svg\"\n                              d=\"M395.25,153h-102V0h-153v153h-102l178.5,178.5L395.25,153z M38.25,382.5v51h357v-51H38.25z\"/>\n                    </svg>\n                </div>\n                <span>Download latex table</span>\n            </pbutton>\n        </pitem>\n        <pitem>\n            <pcheckbox [checked]=\"latexDisplayTable\"\n                       (checkedChange)=\"latexDisplayTableChange.emit($event)\"\n                       [label]=\"'Display Latex table'\"></pcheckbox>\n        </pitem>\n        <pitem>\n            <pcheckbox [checked]=\"latexEnableTooltips\"\n                       (checkedChange)=\"latexEnableTooltipsChange.emit($event)\"\n                       [label]=\"'Enable tooltips for Latex table'\"></pcheckbox>\n        </pitem>\n        <pitem *ngIf=\"latexEnableTooltips\">\n            <pcheckbox [checked]=\"latexTooltipsAsFootnotes\"\n                       (checkedChange)=\"latexTooltipsAsFootnotesChange.emit($event)\"\n                       [label]=\"'Display tooltips as footnotes'\"></pcheckbox>\n        </pitem>\n\n        <h5>Details</h5>\n        <pitem>\n            <pcheckbox [checked]=\"detailsDisplayTooltips\"\n                       (checkedChange)=\"detailsDisplayTooltipsChange.emit($event)\"\n                       [label]=\"'Display tooltips next to labels'\"></pcheckbox>\n        </pitem>\n    </pcard>\n</div>\n"

/***/ }),

/***/ "./src/app/components/input/input.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_select__ = __webpack_require__("./node_modules/ng2-select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select2_select2_component__ = __webpack_require__("./src/app/components/input/select2/select2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number_input_number_input_component__ = __webpack_require__("./src/app/components/input/number-input/number-input.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let InputModule = class InputModule {
};
InputModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2_ng2_select__["SelectModule"]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__select2_select2_component__["a" /* Select2Component */],
            __WEBPACK_IMPORTED_MODULE_4__number_input_number_input_component__["a" /* NumberInputComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__select2_select2_component__["a" /* Select2Component */],
            __WEBPACK_IMPORTED_MODULE_4__number_input_number_input_component__["a" /* NumberInputComponent */]
        ],
        providers: [],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], InputModule);



/***/ }),

/***/ "./src/app/components/input/number-input/number-input.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n    width: 100%;\n    border: 0 !important;\n    border-bottom: 1px solid #aaa !important;\n    border-radius: 0 !important;\n    margin-top: 8px;\n}\n\ninput:focus {\n    outline-width: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/input/number-input/number-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comparison_comparison_component__ = __webpack_require__("./src/app/components/comparison/comparison.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comparison_configuration_configuration__ = __webpack_require__("./src/app/components/comparison/configuration/configuration.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let NumberInputComponent = NumberInputComponent_1 = class NumberInputComponent {
    constructor() {
        this.active = [];
        this.result = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        NumberInputComponent_1.components.push(this);
    }
    criteriaChanged() {
        this.result.emit(this.content.nativeElement.value);
    }
    getActive(state, crit) {
        return state.currentSearch.get(crit.name);
    }
    addToGui(item) {
        if (Object(__WEBPACK_IMPORTED_MODULE_2_util__["isNullOrUndefined"])(this.content)) {
            return;
        }
        // regex for finding out if the item is already in the list.
        // tests "^ *item *$", "^ *item *,", ", *item *$", and ", *item *,"
        // these represent following patterns:
        // 1. arbitrary number of spaces, item, arbitrary number of spaces, complete field
        // 2. arbitrary number of spaces, item, arbitrary number of spaces, comma, start of field
        // 3. comma, arbitrary number of spaces, item, arbitrary number of spaces, end of field
        // 4. comma, arbitrary number of spaces, item, arbitrary number of spaces, comma, in the middle of the field
        // The commas are needed to make sure that it matches the complete number instead of partly, because else
        // "13" would match the pattern "3$".
        const regex = '(^ *' + item + ' *$|^ *' + item + ' *,|, *' + item + ' *,|, *' + item + ' *$)';
        if (new RegExp(regex).test(this.content.nativeElement.value)) {
            return;
        }
        if (this.content.nativeElement.value !== '') {
            item = ', ' + item;
        }
        this.content.nativeElement.value += item;
        this.criteriaChanged();
    }
    getValue() {
        if (!Object(__WEBPACK_IMPORTED_MODULE_2_util__["isNullOrUndefined"])(this.active) && this.active.length > 0) {
            return this.active[0].text;
        }
        return '';
    }
};
NumberInputComponent.components = [];
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__comparison_comparison_component__["a" /* ComparisonComponent */])
], NumberInputComponent.prototype, "comparisonComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__comparison_configuration_configuration__["d" /* Criteria */])
], NumberInputComponent.prototype, "criteria", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], NumberInputComponent.prototype, "tag", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], NumberInputComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], NumberInputComponent.prototype, "active", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], NumberInputComponent.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], NumberInputComponent.prototype, "result", void 0);
NumberInputComponent = NumberInputComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/app/components/input/number-input/number-input.template.html"),
        selector: 'number-input',
        styles: [__webpack_require__("./src/app/components/input/number-input/number-input.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NumberInputComponent);

var NumberInputComponent_1;


/***/ }),

/***/ "./src/app/components/input/number-input/number-input.template.html":
/***/ (function(module, exports) {

module.exports = "<input #content\n       type=\"text\" [placeholder]=\"criteria.placeholder\"\n       (keyup)=\"criteriaChanged($event, crit)\"\n       [value]=\"getValue()\">\n"

/***/ }),

/***/ "./src/app/components/input/select2/select2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ ng-select {\n    display: table !important;\n    table-layout: fixed !important;\n    width: 100% !important;\n}\n\n:host /deep/ div {\n    z-index: 3001;\n}\n\n:host /deep/ input {\n    width: 100%;\n}\n\n:host /deep/ .below {\n    border: 0;\n    border-bottom: 1px solid #aaa;\n    border-radius: 0;\n}\n\n:host /deep/ .option {\n    background-color: #777;\n    color: #fff;\n    font-weight: bold;\n    border-radius: 4px;\n}\n\n:host /deep/ .deselect-option {\n    color: #fff;\n}\n\n:host /deep/ li[role=\"menuitem\"] {\n    z-index: 5000;\n}\n\n:host /deep/ .ui-select-container.ui-select-multiple.dropdown.form-control.open {\n    z-index: initial;\n    line-height: 20px;\n    margin: 0;\n    border: 0;\n    border-bottom: 1px solid rgb(170, 170, 170);\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    -webkit-box-shadow: initial;\n    box-shadow: initial;\n}\n\n:host /deep/ span.ui-select-match-item.btn.btn-default.btn-secondary.btn-xs {\n    background-color: rgb(119, 119, 119);\n    color: white;\n    border-radius: 4px;\n    border: 1px solid rgb(170, 170, 170);\n    font-size: 14px;\n    font-weight: bold;\n    margin: 0 5px 3px 0;\n}\n\n:host /deep/ span.ui-select-match-item.btn.btn-default.btn-secondary.btn-xs a.close {\n    color: white;\n    margin-top: 1px;\n    float: left;\n    margin-left: -1px !important;\n    margin-right: 5px;\n    opacity: 1;\n    font-weight: initial;\n}\n\n:host /deep/ span.ui-select-match-item.btn.btn-default.btn-secondary.btn-xs a.close:hover {\n    opacity: 0.5;\n}\n\n:host ::ng-deep .criteriaLabel {\n    opacity: 1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/input/select2/select2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Select2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let Select2Component = Select2Component_1 = class Select2Component {
    constructor(cd) {
        this.cd = cd;
        this.options = [];
        this.maximumSelectionLength = 0;
        this.result = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        Select2Component_1.components.push(this);
    }
    select(item) {
        this.result.emit(item.text);
    }
    deSelect(item) {
        this.result.emit(item.text);
    }
    addToGui(item) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(this.ngSelect.active)) {
            this.ngSelect.active = [];
        }
        let value;
        for (const elem of this.ngSelect.itemObjects) {
            if (elem.text === item) {
                value = elem;
                break;
            }
        }
        // JS (and thus TS) has no contains method for arrays.
        // A workaround is checking if the index of an element is -1 (indicating not present)
        if (this.ngSelect.active.indexOf(value) !== -1) {
            return;
        }
        this.ngSelect.active.push(value);
        this.cd.markForCheck();
    }
};
Select2Component.components = [];
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], Select2Component.prototype, "options", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Select2Component.prototype, "maximumSelectionLength", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Select2Component.prototype, "placeholder", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Select2Component.prototype, "tag", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Select2Component.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], Select2Component.prototype, "active", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Select2Component.prototype, "change", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('selector'),
    __metadata("design:type", Object)
], Select2Component.prototype, "ngSelect", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], Select2Component.prototype, "result", void 0);
Select2Component = Select2Component_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'select2',
        template: __webpack_require__("./src/app/components/input/select2/select2.template.html"),
        styles: [__webpack_require__("./src/app/components/input/select2/select2.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
], Select2Component);

var Select2Component_1;


/***/ }),

/***/ "./src/app/components/input/select2/select2.template.html":
/***/ (function(module, exports) {

module.exports = "<ng-select #selector\n           [items]=\"options\"\n           [multiple]=true\n           (selected)=\"select($event)\"\n           (removed)=\"deSelect($event)\"\n           [placeholder]=\"placeholder\"\n           [active]=\"active\">\n</ng-select>\n"

/***/ }),

/***/ "./src/app/components/output/footnote/footnote.component.html":
/***/ (function(module, exports) {

module.exports = "<span [innerHtml]=\"(refPrefix + ref + refSuffix)|sanitizeHtml\"></span>"

/***/ }),

/***/ "./src/app/components/output/footnote/footnote.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootnoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let FootnoteComponent = class FootnoteComponent {
    constructor() {
        this.footnotes = new Map();
        this.footnotesChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.ref = '';
        this.refPrefix = '\\footref&#123';
        this.refSuffix = '&#125';
    }
    ngOnChanges(changes) {
        if (changes.footnote) {
            if (this.footnotes.has(this.footnote)) {
                this.footnotes.set(this.footnote, {
                    ref: this.footnotes.get(this.footnote).ref,
                    count: this.footnotes.get(this.footnote).count + 1
                });
                this.ref = this.footnotes.get(this.footnote).ref;
            }
            else {
                const ref = ('uc' + this.footnotes.size + Math.random() * 100000).toString().substr(0, 7);
                this.footnotes.set(this.footnote, {
                    ref: ref,
                    count: 1
                });
                this.ref = ref;
            }
            this.footnotesChange.emit(this.footnotes);
        }
    }
    ngOnDestroy() {
        if (this.footnote) {
            if (this.footnotes.has(this.footnote)) {
                let footnote = this.footnotes.get(this.footnote);
                if (footnote.count == 1) {
                    this.footnotes.delete(this.footnote);
                }
                else {
                    this.footnotes.set(this.footnote, {
                        ref: footnote.ref,
                        count: footnote.count - 1
                    });
                }
            }
        }
        this.footnotesChange.emit(this.footnotes);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FootnoteComponent.prototype, "footnote", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Map)
], FootnoteComponent.prototype, "footnotes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], FootnoteComponent.prototype, "footnotesChange", void 0);
FootnoteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'footnote',
        template: __webpack_require__("./src/app/components/output/footnote/footnote.component.html"),
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    })
], FootnoteComponent);



/***/ }),

/***/ "./src/app/components/output/generic-table/generic-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    display: block;\n}\n\n.grid-table {\n    display: grid;\n    grid-template-columns: auto;\n    grid-column-gap: 10px;\n    grid-row-gap: 10px;\n    grid-auto-flow: column;\n\n}\n\n.mylabel {\n    margin: 2px;\n    display: inline-block !important;\n    cursor: pointer;\n    font-size: 14px !important;\n    white-space: inherit;\n}\n\n.label-unknown {\n    color: black;\n    border: solid black 1px;\n}\n\nth {\n    padding: 0 2px 2px 4px;\n    vertical-align: bottom;\n}\n\ntd {\n    padding: 2px 2px 0 4px;\n    vertical-align: top;\n    border-top: 1px solid #ddd;\n}\n\nth > button {\n    border: none;\n    padding: 0;\n    outline: none;\n    background-color: white;\n    position: sticky;\n    position: -webkit-sticky;\n    top: 0; /* required */\n\n}\n\ntable tr {\n    white-space: normal;\n    line-height: 1em;\n}\n\ntable {\n    width: auto;\n}\n\n.anchored::before {\n    content: '';\n    display: block;\n    height: 48px;\n    margin: -48px 0 0;\n}\n\n.unknown {\n    background-color: lightgray;\n    color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/output/generic-table/generic-table.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table-hover\">\n    <thead style=\"background-color: white;\">\n    <tr>\n        <ng-template ngFor let-column [ngForOf]=\"columns\" let-i=\"index\">\n            <th>\n                <button (click)=\"orderClick($event, i)\">\n                    <iicon icon=\"keyboard-arrow-up\" *ngIf=\"order[i]===-1; else elseif1\">{{column}}</iicon>\n                    <ng-template #elseif1>\n                        <iicon icon=\"keyboard-arrow-down\" *ngIf=\"order[i]===1; else elseif2\">{{column}}</iicon>\n                    </ng-template>\n                    <ng-template #elseif2>\n                        <iicon>{{column}}</iicon>\n                    </ng-template>\n                </button>\n            </th>\n        </ng-template>\n        <th name=\"details\" width=\"30px\">\n            <picon-button icon=\"settings\" [showTooltip]=\"false\" title=\"Settings\"\n                          (click)=\"settingsCallback.emit()\"></picon-button>\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n    <ng-template ngFor let-item [ngForOf]=\"items\" let-i=\"index\"><!-- Do not remove this index here! -->\n        <tr>\n            <ng-template ngFor let-entry [ngForOf]=\"item\" let-i=\"index\">\n                <td *ngIf=\"types[i] === 'url'\"><a class=\"anchored\"\n                                                  href=\"{{entry.link}}\"\n                                                  target=\"_blank\">{{entry.text}}</a>\n                </td>\n                <td *ngIf=\"types[i] ===  'label'\">\n                    <ng-template ngFor let-label [ngForOf]=\"entry\">\n                        <ptooltip [tooltip]=\"label.tooltip.text\"\n                                  [tooltipHtml]=\"label.tooltip.html\" [position]=\"'n'\">\n                            <div class=\"label mylabel {{label.clazz}}\" [style.color]=\"label.color\"\n                                 [style.background-color]=\"label.backgroundColor\"\n                                 (click)=\"labelClick($event, label, i)\">\n                                {{label.name}}\n                            </div>\n                        </ptooltip>\n                        <ptooltip *ngIf=\"label == null\"\n                                  [tooltipHtml]=\"'There was no value for this field. Please submit one via pull request.'\">\n                            <div class=\"label mylabel unknown\">unknown</div>\n                        </ptooltip>\n                    </ng-template>\n                </td>\n                <td *ngIf=\"types[i] === 'text'\">\n                    {{entry.content}}\n                </td>\n                <td *ngIf=\"types[i] === 'markdown'\">\n                    <div [innerHtml]=\"entry?.htmlContent | sanitizeHtml\"></div>\n                </td>\n                <td *ngIf=\"types[i] === 'rating'\">\n                    <iicon icon=\"star\" *ngIf=\"entry\">{{entry}}\n                    </iicon>\n                </td>\n                <td *ngIf=\"types[i] === 'repository'\">\n                    <!-- TODO -->\n                </td>\n            </ng-template>\n            <td>\n                <picon-button icon=\"info\" [showTooltip]=\"false\" title=\"Details\"\n                              (click)=\"showDetails.emit(index[i])\"></picon-button>\n            </td>\n        </tr>\n    </ng-template>\n    </tbody>\n</table>\n\n"

/***/ }),

/***/ "./src/app/components/output/generic-table/generic-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let GenericTableComponent = class GenericTableComponent {
    constructor() {
        this.changeNum = 0;
        this.settingsCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showDetails = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.searchFor = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.orderChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // TODO new inputs: (move to redux store)
        this.columns = [];
        this.types = [];
        this.items = [];
        this.index = [];
        this.order = [];
    }
    labelClick(event, key, index) {
        this.searchFor.emit({ event, key, index });
    }
    orderClick(e, value) {
        this.orderChange.emit({ index: value, ctrl: e.ctrlKey });
    }
    ngAfterViewChecked() {
        this.table = $('table.table-hover');
        this.table.floatThead();
        anchors.options = {
            placement: 'right'
        };
        anchors.add('.anchored');
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        if (this.table != null) {
            this.table.trigger('reflow');
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GenericTableComponent.prototype, "changeNum", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], GenericTableComponent.prototype, "settingsCallback", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], GenericTableComponent.prototype, "showDetails", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], GenericTableComponent.prototype, "searchFor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], GenericTableComponent.prototype, "orderChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], GenericTableComponent.prototype, "columns", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], GenericTableComponent.prototype, "types", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], GenericTableComponent.prototype, "items", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], GenericTableComponent.prototype, "index", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], GenericTableComponent.prototype, "order", void 0);
GenericTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'generictable',
        template: __webpack_require__("./src/app/components/output/generic-table/generic-table.component.html"),
        styles: [__webpack_require__("./src/app/components/output/generic-table/generic-table.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    })
], GenericTableComponent);


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("jquery")))

/***/ }),

/***/ "./src/app/components/output/latex-table/latex-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hidden {\n    display: none;\n}\n\n.ltInline ::ng-deep p {\n    display: inline;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/output/latex-table/latex-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-content-latex\">\n    <pcard heading=\"Latex Table\" class=\"large-paper-card\">\n        <div class=\"card-content\" style=\"overflow: auto;\"><!--\n@formatter:off\n-->%\\usepackage&#123;calc&#125;<br/>\n%\\usepackage&#123;booktabs&#125;<br/>\n%\\usepackage&#123;url&#125;<br/>\n%\\usepackage&#123;hyperref&#125;<br/>\n%\\usepackage&#123;footnote&#125;<br/>\n%\\usepackage&#123;scrextend&#125;<br/>\n%\\usepackage&#123;amssymb&#125;<br/>\n%\\makesavenoteenv&#123;tabular&#125;<br/>\n%\\makesavenoteenv&#123;tabule&#125;<br/>\n\\begin&#123;tabular&#125;&#123;&#64;&#123;&#125;<!--\n--><ng-template ngFor let-column [ngForOf]=\"columns\">p&#123;\\linewidth/{{columns.length}}&#125;<!--\n--></ng-template>&#64;&#123;&#125;&#125;<br/>\n\\toprule<br/>\n<!--\n--><ng-template ngFor let-column [ngForOf]=\"columns\" let-last=\"last\" let-i=\"index\">{{columns[i]}} <!--\n    --><ng-template [ngIf]=\"!last\">&#38; </ng-template><!--\n    --><ng-template [ngIf]=\"last\">\\\\<br/></ng-template><!--\n--></ng-template>\n\\midrule<br/>\n<!-- iterate over data rows\n--><ng-template ngFor let-item [ngForOf]=\"items\"><!--\n    iterate over data columns\n    --><ng-template ngFor let-entry [ngForOf]=\"item\" let-last=\"last\" let-i=\"index\"><!--\n        print url (only print the text and not the link)\n        --><ng-template [ngIf]=\"types[i] === 'url' && entry\">{{entry.text}}</ng-template><!--\n\n        print labels\n        --><ng-template [ngIf]=\"types[i] === 'label' && entry\"><!--\n            iterate over labels\n            --><ng-template ngFor let-label [ngForOf]=\"entry\" let-lastItem=\"last\"><!--\n                print label\n                -->{{label.name}}<!--\n                    tooltip\n                    --><ng-template [ngIf]=\"label.tooltip\"><!--\n                        print tooltips?\n                        --><ng-template [ngIf]=\"showTableTooltips\"><!--\n                            print tooltips in footnotes\n                            --><footnote *ngIf=\"tableTooltipsAsFootnotes&&label.tooltip.latex\" [footnote]=\"label.tooltip.latex\" [(footnotes)]=\"footnotes\"></footnote><!--\n                            print tooltips after labels\n                            --><div *ngIf=\"!tableTooltipsAsFootnotes\" [innerHtml]=\"label.tooltip.latex|sanitizeHtml\"></div><!--\n                        --></ng-template><!--\n                    --></ng-template><!--\n                    label seperator --><ng-template [ngIf]=\"!lastItem\">, </ng-template><!--\n            --></ng-template><!--\n        --></ng-template><!--\n\n        print text\n        --><ng-template [ngIf]=\"types[i] === 'text' && entry\">{{entry.content}}</ng-template><!--\n\n        print rating\n        --><ng-template [ngIf]=\"types[i] === 'rating' && entry\">{{'$' + entry+'\\\\bigstar$'}}</ng-template><!--\n\n        print markdown\n        --><ng-template [ngIf]=\"types[i] === 'markdown' && entry\"><!--\n            --><span class=\"ltInline\" [innerHtml]=\"entry.latex|sanitizeHtml\"></span><!--\n        --></ng-template><!--\n       --><ng-template [ngIf]=\"!last\"> &#38; </ng-template><!--\n       --><ng-template [ngIf]=\"last\">\\\\<br/>\n<!--   --></ng-template><!--\n    --></ng-template><!--\n--></ng-template>\\bottomrule<br/><!--\n\n-->\n\\end&#123;tabular&#125;<br/><!--\n\nfootnotes\n--><ng-template [ngIf]=\"tableTooltipsAsFootnotes\"><!--\n    --><br/>\\newcommand\\snum&#123;0&#125;<!--\n    --><ng-template ngFor let-item [ngForOf]=\"getFootnotes()\" let-i=\"index\"><!--\n        --><br/>\\footnotetext&#91;\\numexpr\\snum+{{i}}&#93;&#123;<!--\n            --><span class=\"ltInline\" [innerHtml]=\"item.text|sanitizeHtml\"></span><!--\n            -->\\label{{('{'+item.ref+'}')}}<!--\n        -->&#125;<!--\n    --></ng-template><!--\n--></ng-template>\n    <!-- @formatter:on -->\n        </div>\n    </pcard>\n</div>\n"

/***/ }),

/***/ "./src/app/components/output/latex-table/latex-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatexTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let LatexTableComponent = class LatexTableComponent {
    constructor(element) {
        this.element = element;
        this.showTableTooltips = true;
        this.tableTooltipsAsFootnotes = true;
        this.columns = [];
        this.types = [];
        this.items = [];
        this.index = [];
        this.footnotes = new Map();
    }
    getFootnotes() {
        let footnoteItems = [];
        this.footnotes.forEach((value, key) => {
            footnoteItems.push({ ref: value.ref, count: value.count, text: key });
        });
        return footnoteItems;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], LatexTableComponent.prototype, "changeNum", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], LatexTableComponent.prototype, "showTableTooltips", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], LatexTableComponent.prototype, "tableTooltipsAsFootnotes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], LatexTableComponent.prototype, "columns", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], LatexTableComponent.prototype, "types", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], LatexTableComponent.prototype, "items", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], LatexTableComponent.prototype, "index", void 0);
LatexTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'latextable',
        template: __webpack_require__("./src/app/components/output/latex-table/latex-table.component.html"),
        styles: [__webpack_require__("./src/app/components/output/latex-table/latex-table.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], LatexTableComponent);



/***/ }),

/***/ "./src/app/components/output/output.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutputModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__ = __webpack_require__("./src/app/components/pipes/pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__polymer_polymer_module__ = __webpack_require__("./src/app/components/polymer/polymer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__generic_table_generic_table_component__ = __webpack_require__("./src/app/components/output/generic-table/generic-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__references_table_references_table_component__ = __webpack_require__("./src/app/components/output/references-table/references-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__latex_table_latex_table_component__ = __webpack_require__("./src/app/components/output/latex-table/latex-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footnote_footnote_component__ = __webpack_require__("./src/app/components/output/footnote/footnote.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let OutputModule = class OutputModule {
};
OutputModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_3__polymer_polymer_module__["a" /* PolymerModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__generic_table_generic_table_component__["a" /* GenericTableComponent */],
            __WEBPACK_IMPORTED_MODULE_5__references_table_references_table_component__["a" /* ReferencesTableComponent */],
            __WEBPACK_IMPORTED_MODULE_3__polymer_polymer_module__["a" /* PolymerModule */],
            __WEBPACK_IMPORTED_MODULE_6__latex_table_latex_table_component__["a" /* LatexTableComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__footnote_footnote_component__["a" /* FootnoteComponent */],
            __WEBPACK_IMPORTED_MODULE_4__generic_table_generic_table_component__["a" /* GenericTableComponent */],
            __WEBPACK_IMPORTED_MODULE_5__references_table_references_table_component__["a" /* ReferencesTableComponent */],
            __WEBPACK_IMPORTED_MODULE_6__latex_table_latex_table_component__["a" /* LatexTableComponent */]
        ],
        providers: []
    })
], OutputModule);



/***/ }),

/***/ "./src/app/components/output/references-table/references-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reference-container {\n    display: grid;\n    grid-template-columns: -webkit-min-content auto;\n    grid-template-columns: min-content auto;\n    grid-column-gap: 10px;\n    grid-auto-flow: row;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/output/references-table/references-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"reference-container\">\n    <ng-template ngFor let-entry [ngForOf]=\"citations\">\n        <div>{{'[' + entry.index + ']'}}:</div>\n        <div [id]=\"entry.key\" [innerHtml]=\"entry.text|sanitizeHtml\"></div>\n    </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/components/output/references-table/references-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferencesTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ReferencesTableComponent = class ReferencesTableComponent {
    constructor() {
        this.changeNum = 0;
        this.citationMap = new Map;
        this.citations = [];
    }
    ngOnChanges(changes) {
        let citations = [];
        this.citationMap.forEach((citation) => citations.push(citation));
        citations.sort((a, b) => a.index - b.index);
        this.citations = citations;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], ReferencesTableComponent.prototype, "changeNum", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Map)
], ReferencesTableComponent.prototype, "citationMap", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ReferencesTableComponent.prototype, "citations", void 0);
ReferencesTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'referencestable',
        template: __webpack_require__("./src/app/components/output/references-table/references-table.component.html"),
        styles: [__webpack_require__("./src/app/components/output/references-table/references-table.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    })
], ReferencesTableComponent);



/***/ }),

/***/ "./src/app/components/pipes/pipes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sanitizer_pipe_sanitizer_pipe__ = __webpack_require__("./src/app/components/pipes/sanitizer-pipe/sanitizer.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let PipesModule = class PipesModule {
};
PipesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__sanitizer_pipe_sanitizer_pipe__["a" /* SanitizerPipe */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__sanitizer_pipe_sanitizer_pipe__["a" /* SanitizerPipe */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__sanitizer_pipe_sanitizer_pipe__["a" /* SanitizerPipe */]
        ]
    })
], PipesModule);



/***/ }),

/***/ "./src/app/components/pipes/sanitizer-pipe/sanitizer.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanitizerPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let SanitizerPipe = class SanitizerPipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(v) {
        const html = this._sanitizer.bypassSecurityTrustHtml(v);
        if (html.hasOwnProperty('changingThisBreaksApplicationSecurity') &&
            /^<p>\d+\./.test(html['changingThisBreaksApplicationSecurity'])) {
            html['changingThisBreaksApplicationSecurity'] =
                '<p>' + html['changingThisBreaksApplicationSecurity']
                    .substr(html['changingThisBreaksApplicationSecurity'].indexOf('.') + 1);
        }
        return html;
    }
};
SanitizerPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'sanitizeHtml',
        pure: false
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]])
], SanitizerPipe);



/***/ }),

/***/ "./src/app/components/polymer/iron-icon/iron-icon.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    display: -ms-inline-flexbox;\n    display: -webkit-inline-box;\n    display: inline-flex;\n\n    -ms-flex-align: center;\n    -webkit-box-align: center;\n            align-items: center;\n    -ms-flex-pack: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n\n    position: relative;\n\n    vertical-align: middle;\n\n    fill: currentcolor;\n    stroke: none;\n}\n\nsvg {\n    pointer-events: none;\n    display: block;\n    width: 24px;\n    height: 24px;\n}\n\nsvg-parent {\n    width: 24px;\n    height: 24px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/polymer/iron-icon/iron-icon.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <ng-content></ng-content>\n</div>\n<div class=\".svg-parent\">\n    <svg viewBox=\"0 0 24 24\">\n        <defs>\n            <g id=\"keyboard-arrow-down\">\n                <path d=\"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z\"/>\n            </g>\n            <g id=\"keyboard-arrow-up\">\n                <path d=\"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z\"/>\n            </g>\n            <g id=\"settings\">\n                <path\n                    d=\"M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z\"/>\n            </g>\n            <g id=\"info\">\n                <path\n                    d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z\"/>\n            </g>\n            <g id=\"star\">\n                <path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/>\n            </g>\n            <g id=\"resize-small\" transform=\"translate(0.000000,24.000000) scale(0.0800000,-0.0800000)\"\n               fill=\"#000000\" stroke=\"none\">\n                <path\n                    d=\"M187 223 c-13 -13 -19 -14 -29 -5 -20 20 -25 14 -30 -38 -3 -28 -7 -53 -10 -56 -3 -2 -28 -7 -57 -11 -53 -6 -59 -11 -39 -31 9 -9 7 -16 -6 -31 -19 -21 -16 -51 5 -51 7 0 21 8 31 17 14 13 21 14 30 5 20 -20 25 -14 30 38 3 28 7 53 10 56 3 2 28 7 57 11 53 6 59 11 39 31 -9 9 -7 16 6 31 34 38 -1 69 -37 34z\"/>\n            </g>\n            <g id=\"resize-full\" transform=\"translate(0.000000,24.000000) scale(0.0800000,-0.0800000)\"\n               fill=\"#000000\" stroke=\"none\">\n                <path\n                    d=\"M158 233 c-20 -5 -23 -18 -7 -28 7 -5 3 -15 -10 -29 -21 -22 -21 -23 -3 -39 18 -16 20 -16 37 3 14 16 21 17 32 8 20 -16 33 6 33 55 0 35 -1 37 -32 36 -18 -1 -41 -3 -50 -6z\"/>\n                <path\n                    d=\"M65 100 c-14 -16 -21 -17 -32 -8 -20 16 -33 -6 -33 -56 l0 -39 45 6 c53 5 64 12 47 29 -9 9 -7 17 8 33 20 21 20 22 2 38 -18 16 -20 16 -37 -3z\"/>\n            </g>\n        </defs>\n        <use [attr.xlink:href]=\"'#'+icon\"/>\n    </svg>\n</div>\n"

/***/ }),

/***/ "./src/app/components/polymer/iron-icon/iron-icon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IronIconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let IronIconComponent = class IronIconComponent {
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], IronIconComponent.prototype, "icon", void 0);
IronIconComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'iicon',
        template: __webpack_require__("./src/app/components/polymer/iron-icon/iron-icon.component.html"),
        styles: [__webpack_require__("./src/app/components/polymer/iron-icon/iron-icon.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    })
], IronIconComponent);



/***/ }),

/***/ "./src/app/components/polymer/paper-button/paper-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    color: #3f51b5;\n    display: inline-block;\n    position: relative;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    min-width: 5.14em;\n    margin: 0 0.29em;\n    background: transparent;\n    text-align: center;\n    font: inherit;\n    text-transform: uppercase;\n    outline-width: 0;\n    border-radius: 3px;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -webkit-user-select: none;\n    cursor: pointer;\n    z-index: 0;\n    padding: 0.7em 0.57em;\n\n    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12),\n    0 3px 1px -2px rgba(0, 0, 0, 0.2);\n\n            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12),\n    0 3px 1px -2px rgba(0, 0, 0, 0.2);\n\n    -webkit-transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n\n    transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n:host:active {\n    -webkit-box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12),\n    0 5px 5px -3px rgba(0, 0, 0, 0.4);\n            box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12),\n    0 5px 5px -3px rgba(0, 0, 0, 0.4);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/polymer/paper-button/paper-button.component.html":
/***/ (function(module, exports) {

module.exports = "{{text}}\n<ng-content></ng-content>"

/***/ }),

/***/ "./src/app/components/polymer/paper-button/paper-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaperButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let PaperButtonComponent = class PaperButtonComponent {
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PaperButtonComponent.prototype, "text", void 0);
PaperButtonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'pbutton',
        template: __webpack_require__("./src/app/components/polymer/paper-button/paper-button.component.html"),
        styles: [__webpack_require__("./src/app/components/polymer/paper-button/paper-button.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    })
], PaperButtonComponent);



/***/ }),

/***/ "./src/app/components/polymer/paper-card/paper-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    display: grid;\n    grid-template-columns: auto 25px;\n    grid-template-rows: auto 1fr;\n    grid-template-areas: \"header symbol\" \"content content\";\n    padding: 16px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border-radius: 2px;\n    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12),\n    0 3px 1px -2px rgba(0, 0, 0, 0.2);\n            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12),\n    0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n\n.paper-header {\n    grid-area: header;\n    font-size: 24px;\n    font-weight: 400;\n    padding: 0 0 10px 0;\n}\n\n.paper-symbol {\n    grid-area: symbol;\n}\n\n.paper-content {\n    grid-area: content;\n    display: grid;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/polymer/paper-card/paper-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"paper-header\" *ngIf=\"heading\">{{heading}}</div>\n<div class=\"paper-symbol\" *ngIf=\"symbol\">\n    <iicon *ngIf=\"!expand\" icon=\"resize-full\" class=\"shrink-expand\" (click)=\"expandChange.emit(true)\"></iicon>\n    <iicon *ngIf=\"expand\" icon=\"resize-small\" class=\"shrink-expand\" (click)=\"expandChange.emit(false)\"></iicon>\n</div>\n\n<div class=\"paper-content\">\n    <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/components/polymer/paper-card/paper-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaperCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let PaperCardComponent = class PaperCardComponent {
    constructor() {
        this.symbol = false;
        this.expand = false;
        this.expandChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PaperCardComponent.prototype, "heading", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PaperCardComponent.prototype, "symbol", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PaperCardComponent.prototype, "expand", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], PaperCardComponent.prototype, "expandChange", void 0);
PaperCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'pcard',
        template: __webpack_require__("./src/app/components/polymer/paper-card/paper-card.component.html"),
        styles: [__webpack_require__("./src/app/components/polymer/paper-card/paper-card.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    })
], PaperCardComponent);



/***/ }),

/***/ "./src/app/components/polymer/paper-checkbox/paper-checkbox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    display: inline-block;\n    white-space: nowrap;\n    cursor: pointer;\n\n    position: relative;\n}\n\n:host:focus {\n    outline: none;\n}\n\n.pcheckbox {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    height: 18px;\n    width: 18px;\n    border: solid 2px;\n    border-radius: 2px;\n    pointer-events: none;\n    -webkit-transition: background-color 140ms, border-color 140ms;\n    transition: background-color 140ms, border-color 140ms;\n    display: inline-block;\n    position: relative;\n    vertical-align: middle;\n}\n\n.pcheckmark {\n    position: absolute;\n    width: 36%;\n    height: 70%;\n    transform-origin: 97% 86%;\n    -webkit-transform-origin: 97% 86%;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    border: none white;\n    border-right: calc(2 / 15 * 18px) solid;\n    border-bottom: calc(2 / 15 * 18px) solid;\n    margin-left: 1px;\n    margin-top: 1px;\n    color: white;\n}\n\n.plabel {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n    white-space: normal;\n    pointer-events: none;\n    padding-left: 8px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/polymer/paper-checkbox/paper-checkbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pcheckbox\">\n    <div class=\"pcheckmark\" *ngIf=\"checked\"></div>\n</div>\n<div class=\"plabel\">{{label}}</div>"

/***/ }),

/***/ "./src/app/components/polymer/paper-checkbox/paper-checkbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaperCheckboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let PaperCheckboxComponent = class PaperCheckboxComponent {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.checkedChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ngOnChanges() {
        if (this.checked) {
            this.renderer.setElementStyle(this.el.nativeElement.children[0], 'background-color', '#3f51b5');
            this.renderer.setElementStyle(this.el.nativeElement.children[0], 'border-color', '#3f51b5');
        }
        else {
            this.renderer.setElementStyle(this.el.nativeElement.children[0], 'background-color', '#fff');
            this.renderer.setElementStyle(this.el.nativeElement.children[0], 'border-color', '#000');
        }
        this.el.nativeElement.checked = this.checked;
    }
    onChange(e) {
        this.checked = !this.checked;
        if (this.checked) {
            this.renderer.setElementStyle(this.el.nativeElement.children[0], 'background-color', '#3f51b5');
            this.renderer.setElementStyle(this.el.nativeElement.children[0], 'border-color', '#3f51b5');
        }
        else {
            this.renderer.setElementStyle(this.el.nativeElement.children[0], 'background-color', '#fff');
            this.renderer.setElementStyle(this.el.nativeElement.children[0], 'border-color', '#000');
        }
        this.el.nativeElement.checked = this.checked;
        this.checkedChange.emit(this.checked);
    }
    toogleCheck() {
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PaperCheckboxComponent.prototype, "label", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PaperCheckboxComponent.prototype, "checked", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], PaperCheckboxComponent.prototype, "checkedChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaperCheckboxComponent.prototype, "onChange", null);
PaperCheckboxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'pcheckbox',
        template: __webpack_require__("./src/app/components/polymer/paper-checkbox/paper-checkbox.component.html"),
        styles: [__webpack_require__("./src/app/components/polymer/paper-checkbox/paper-checkbox.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], PaperCheckboxComponent);



/***/ }),

/***/ "./src/app/components/polymer/paper-dialog/paper-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    position: fixed;\n    overflow-x: hidden;\n    overflow-y: auto;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    display: none;\n    z-index: 2000;\n    background: rgba(0, 0, 0, 0.5);\n    grid-template-columns: minmax(10px, 1fr) auto minmax(10px, 1fr);\n    grid-template-rows: 15px -webkit-min-content minmax(10px, auto);\n    grid-template-rows: 15px min-content minmax(10px, auto);\n    grid-template-areas: \". . .\" \". dialog .\" \". . .\";\n}\n\n.dialog {\n    grid-area: dialog;\n    display: grid;\n    padding: 16px;\n    border-radius: 5px;\n    -webkit-box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4);\n            box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4);\n    grid-template-areas: \"header\" \"content\" \"buttons\";\n    background-color: #fff;\n    max-width: 1000px;\n    margin: auto;\n}\n\n.buttons {\n    grid-area: buttons;\n    display: grid;\n    color: #3f51b5;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n\n.paper-header {\n    grid-area: header;\n    font-size: 24px;\n    font-weight: 400;\n    padding: 0 0 10px 0;\n}\n\n.paper-content {\n    grid-area: content;\n    display: grid;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/polymer/paper-dialog/paper-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog\" *ngIf=\"opened\">\n    <div class=\"paper-header\" *ngIf=\"heading\">{{heading}}</div>\n    <div class=\"paper-content\">\n        <ng-content></ng-content>\n    </div>\n    <div class=\"buttons\">\n        <pbutton (click)=\"close()\">Close</pbutton>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/polymer/paper-dialog/paper-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaperDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let PaperDialogComponent = class PaperDialogComponent {
    constructor() {
        this.opened = false;
        this.openedChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    onClick(target) {
        if (target.localName === 'pdialog') {
            this.close();
        }
    }
    close() {
        this.opened = false;
        this.openedChange.emit(false);
    }
    onKeydown(event) {
        if (this.opened && event.key.toLowerCase() === 'escape') {
            this.close();
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PaperDialogComponent.prototype, "opened", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PaperDialogComponent.prototype, "heading", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], PaperDialogComponent.prototype, "openedChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event.target']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaperDialogComponent.prototype, "onClick", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaperDialogComponent.prototype, "onKeydown", null);
PaperDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'pdialog',
        template: __webpack_require__("./src/app/components/polymer/paper-dialog/paper-dialog.component.html"),
        styles: [__webpack_require__("./src/app/components/polymer/paper-dialog/paper-dialog.component.css")]
    })
], PaperDialogComponent);



/***/ }),

/***/ "./src/app/components/polymer/paper-icon-button/paper-icon-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    display: inline-block;\n    position: relative;\n    padding: 1px;\n    outline: none;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    cursor: pointer;\n    z-index: 0;\n    line-height: 1;\n\n    width: 26px;\n    height: 26px;\n\n    -webkit-box-sizing: border-box !important;\n\n            box-sizing: border-box !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/polymer/paper-icon-button/paper-icon-button.component.html":
/***/ (function(module, exports) {

module.exports = "<ptooltip *ngIf=\"showTooltip\" [tooltip]=\"title\" [position]=\"'w'\">\n    <iicon [icon]=\"icon\"></iicon>\n</ptooltip>\n\n<iicon *ngIf=\"!showTooltip\" [icon]=\"icon\"></iicon>\n"

/***/ }),

/***/ "./src/app/components/polymer/paper-icon-button/paper-icon-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaperIconButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let PaperIconButtonComponent = class PaperIconButtonComponent {
    constructor() {
        this.showTooltip = true;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PaperIconButtonComponent.prototype, "icon", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PaperIconButtonComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PaperIconButtonComponent.prototype, "showTooltip", void 0);
PaperIconButtonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'picon-button',
        template: __webpack_require__("./src/app/components/polymer/paper-icon-button/paper-icon-button.component.html"),
        styles: [__webpack_require__("./src/app/components/polymer/paper-icon-button/paper-icon-button.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    })
], PaperIconButtonComponent);



/***/ }),

/***/ "./src/app/components/polymer/paper-item/paper-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    display: block;\n    position: relative;\n    padding: 0px 16px;\n}\n\n:host(.item-selected) {\n    font-weight: bold;\n}\n\n:host ::ng-deep pbutton {\n    display: inline-block;\n    padding: 0;\n    font-size: 1em;\n    text-transform: none;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    margin: 0;\n}\n\n:host ::ng-deep pbutton:active {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n}\n\n:host ::ng-deep .icon {\n    display: inline-block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    height: 18px;\n    width: 18px;\n    border-radius: 2px;\n    border: 2px solid rgb(63, 81, 181);\n    margin-right: 8px;\n    background-color: rgb(63, 81, 181);\n}\n\n:host ::ng-deep .icon > svg {\n    margin: 1px auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/polymer/paper-item/paper-item.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "./src/app/components/polymer/paper-item/paper-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaperItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let PaperItemComponent = class PaperItemComponent {
};
PaperItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'pitem',
        template: __webpack_require__("./src/app/components/polymer/paper-item/paper-item.component.html"),
        styles: [__webpack_require__("./src/app/components/polymer/paper-item/paper-item.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    })
], PaperItemComponent);



/***/ }),

/***/ "./src/app/components/polymer/polymer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolymerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paper_card_paper_card_component__ = __webpack_require__("./src/app/components/polymer/paper-card/paper-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__iron_icon_iron_icon_component__ = __webpack_require__("./src/app/components/polymer/iron-icon/iron-icon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tooltip_tooltip_component__ = __webpack_require__("./src/app/components/polymer/tooltip/tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__paper_icon_button_paper_icon_button_component__ = __webpack_require__("./src/app/components/polymer/paper-icon-button/paper-icon-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__paper_button_paper_button_component__ = __webpack_require__("./src/app/components/polymer/paper-button/paper-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__paper_dialog_paper_dialog_component__ = __webpack_require__("./src/app/components/polymer/paper-dialog/paper-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__paper_item_paper_item_component__ = __webpack_require__("./src/app/components/polymer/paper-item/paper-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__paper_checkbox_paper_checkbox_component__ = __webpack_require__("./src/app/components/polymer/paper-checkbox/paper-checkbox.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let PolymerModule = class PolymerModule {
};
PolymerModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__paper_card_paper_card_component__["a" /* PaperCardComponent */],
            __WEBPACK_IMPORTED_MODULE_3__iron_icon_iron_icon_component__["a" /* IronIconComponent */],
            __WEBPACK_IMPORTED_MODULE_4__tooltip_tooltip_component__["a" /* TooltipComponent */],
            __WEBPACK_IMPORTED_MODULE_5__paper_icon_button_paper_icon_button_component__["a" /* PaperIconButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_6__paper_button_paper_button_component__["a" /* PaperButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_7__paper_dialog_paper_dialog_component__["a" /* PaperDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_8__paper_item_paper_item_component__["a" /* PaperItemComponent */],
            __WEBPACK_IMPORTED_MODULE_9__paper_checkbox_paper_checkbox_component__["a" /* PaperCheckboxComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__paper_card_paper_card_component__["a" /* PaperCardComponent */],
            __WEBPACK_IMPORTED_MODULE_3__iron_icon_iron_icon_component__["a" /* IronIconComponent */],
            __WEBPACK_IMPORTED_MODULE_4__tooltip_tooltip_component__["a" /* TooltipComponent */],
            __WEBPACK_IMPORTED_MODULE_5__paper_icon_button_paper_icon_button_component__["a" /* PaperIconButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_6__paper_button_paper_button_component__["a" /* PaperButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_7__paper_dialog_paper_dialog_component__["a" /* PaperDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_8__paper_item_paper_item_component__["a" /* PaperItemComponent */],
            __WEBPACK_IMPORTED_MODULE_9__paper_checkbox_paper_checkbox_component__["a" /* PaperCheckboxComponent */]
        ]
    })
], PolymerModule);



/***/ }),

/***/ "./src/app/components/polymer/tooltip/tooltip.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    position: relative;\n    display: inline-block;\n}\n\n:host .ptooltiptext {\n    visibility: hidden;\n    min-width: 60px;\n    background-color: black;\n    color: #fff;\n    padding: 10px;\n    border-radius: 6px;\n\n    position: absolute;\n    z-index: 4999;\n    -webkit-transition-property: visibility;\n    transition-property: visibility;\n    -webkit-transition-duration: 0.1s;\n            transition-duration: 0.1s;\n    display: grid;\n    grid-template-columns: auto;\n    grid-column-gap: 10px;\n    grid-auto-flow: row;\n    width: 180px;\n\n    word-break: break-word; /* works for chromium and google chrome*/\n}\n\n:host .ptooltiptext /deep/ a {\n    color: lightgray;\n}\n\n:host .ptooltiptext /deep/ ul, :host .ptooltiptext /deep/ ol {\n    text-align: left;\n    padding-left: 20px;\n}\n\n:host:hover .ptooltiptext {\n    visibility: visible;\n}\n\n:host .ptooltiptext::after {\n    content: \" \";\n    position: absolute;\n    border-width: 5px;\n    border-style: solid;\n}\n\n/* north */\n\n:host.n .ptooltiptext {\n    bottom: 115%;\n    left: -25px;\n    margin-left: 1em;\n    margin-top: 0;\n}\n\n:host.n .ptooltiptext::after {\n    top: 100%;\n    left: 1em;\n    margin-left: -5px;\n    border-color: black transparent transparent transparent;\n}\n\n/* south */\n\n:host.s .ptooltiptext {\n    top: 115%;\n    left: -25%;\n    margin-left: 1em;\n}\n\n:host.s .ptooltiptext::after {\n    bottom: 100%;\n    left: 1em;\n    margin-left: -5px;\n    border-color: transparent transparent black transparent;\n}\n\n/* east */\n\n:host.e .ptooltiptext {\n    top: 0;\n    left: 100%;\n    margin-left: 5px;\n}\n\n:host.e .ptooltiptext::after {\n    top: 1em;\n    right: 100%; /* To the left of the tooltip */\n    margin-top: -5px;\n    border-color: transparent black transparent transparent;\n}\n\n/* west */\n\n:host.w .ptooltiptext {\n    top: 0;\n    right: 100%;\n    margin-right: 5px;\n}\n\n:host.w .ptooltiptext::after {\n    top: 1em;\n    left: 100%;\n    margin-top: -5px;\n    border-color: transparent transparent transparent black;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/polymer/tooltip/tooltip.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n<div class=\"ptooltiptext\" *ngIf=\"tooltip&&tooltip!=''||tooltipHtml&&tooltipHtml!=''\">\n    <div [innerHtml]=\"_sanitizer.bypassSecurityTrustHtml(tooltip)\"></div>\n    <div [innerHtml]=\"_sanitizer.bypassSecurityTrustHtml(tooltipHtml)\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/polymer/tooltip/tooltip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let TooltipComponent = class TooltipComponent {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
        this.tooltip = '';
        this.tooltipHtml = '';
        this.positionClass = 'n';
    }
    set position(p) {
        this.positionClass = p;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TooltipComponent.prototype, "tooltip", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TooltipComponent.prototype, "tooltipHtml", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
    __metadata("design:type", Object)
], TooltipComponent.prototype, "positionClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TooltipComponent.prototype, "position", null);
TooltipComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ptooltip',
        template: __webpack_require__("./src/app/components/polymer/tooltip/tooltip.component.html"),
        styles: [__webpack_require__("./src/app/components/polymer/tooltip/tooltip.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]])
], TooltipComponent);



/***/ }),

/***/ "./src/app/redux/custom-router-state-serializer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class CustomRouterStateSerializer {
    serialize(routerState) {
        let { url } = routerState;
        const queryParams = {};
        let route = routerState.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        if (url.startsWith('/')) {
            url = url.substr(1);
        }
        if (url.startsWith('#')) {
            url = url.substr(1);
        }
        for (const u of url.split('&')) {
            const regex = /(.+)=(.*)/.exec(u);
            if (regex === null) {
                continue;
            }
            queryParams[regex[1]] = regex[2];
        }
        return { url, queryParams };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CustomRouterStateSerializer;



/***/ }),

/***/ "./src/app/redux/uc.action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uc_reducers__ = __webpack_require__("./src/app/redux/uc.reducers.ts");

class UCAction {
}
/* unused harmony export UCAction */

class UCRouterAction extends UCAction {
}
/* unused harmony export UCRouterAction */

class UCDataUpdateAction extends UCAction {
    constructor(criterias) {
        super();
        this.criterias = criterias;
        this.type = __WEBPACK_IMPORTED_MODULE_0__uc_reducers__["b" /* UPDATE_DATA */];
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = UCDataUpdateAction;

class UCSearchUpdateAction extends UCAction {
    constructor(criterias) {
        super();
        this.criterias = criterias;
        this.type = __WEBPACK_IMPORTED_MODULE_0__uc_reducers__["d" /* UPDATE_SEARCH */];
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = UCSearchUpdateAction;

class UCTableOrderAction extends UCAction {
    constructor(index, ctrl) {
        super();
        this.index = index;
        this.ctrl = ctrl;
        this.type = __WEBPACK_IMPORTED_MODULE_0__uc_reducers__["c" /* UPDATE_ORDER */];
    }
}
/* harmony export (immutable) */ __webpack_exports__["d"] = UCTableOrderAction;

class UCSettingsUpdateAction extends UCAction {
    constructor(enable, operation) {
        super();
        this.enable = enable;
        this.operation = operation;
        this.type = __WEBPACK_IMPORTED_MODULE_0__uc_reducers__["e" /* UPDATE_SETTINGS */];
    }
}
/* unused harmony export UCSettingsUpdateAction */

class UCClickAction extends UCAction {
    constructor(val, index) {
        super();
        this.val = val;
        this.index = index;
        this.type = __WEBPACK_IMPORTED_MODULE_0__uc_reducers__["a" /* CLICK_ACTION */];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UCClickAction;



/***/ }),

/***/ "./src/app/redux/uc.app-state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class UcAppState {
    constructor() {
        this.elementNames = [];
        this.elementsEnabled = [];
        this.elementDisplayAll = false;
        this.columnKeys = [];
        this.columnNames = [];
        this.columnsEnabled = [];
        this.columnsEnabledCache = [];
        this.columnDisplayAll = false;
        this.latexDisplayTable = false;
        this.latexEnableTooltips = false;
        this.latexTooltipsAsFootnotes = false;
        this.detailsDisplayTooltips = false;
        this.tableExpand = false;
        this.currentSearch = new Map();
        this.currentDetails = -1;
        this.currentFilter = [];
        this.currentColumns = [];
        this.currentlyMaximized = false;
        this.currentOrder = ['+id'];
        this.criterias = null;
        this.currentColumnNames = [];
        this.columnTypes = [];
        this.columnOrder = [];
        this.rowIndexes = [];
        this.currentElements = [];
        this.currentChanged = false;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UcAppState;



/***/ }),

/***/ "./src/app/redux/uc.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = masterReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uc_app_state__ = __webpack_require__("./src/app/redux/uc.app-state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_comparison_data_data_service__ = __webpack_require__("./src/app/components/comparison/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_comparison_configuration_configuration__ = __webpack_require__("./src/app/components/comparison/configuration/configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);




const UPDATE_SEARCH = 'UPDATE_SEARCH';
/* harmony export (immutable) */ __webpack_exports__["d"] = UPDATE_SEARCH;

const UPDATE_MODAL = 'UPDATE_MODAL';
/* unused harmony export UPDATE_MODAL */

const UPDATE_FILTER = 'UPDATE_FILTER';
/* unused harmony export UPDATE_FILTER */

const UPDATE_DATA = 'UPDATE_DATA';
/* harmony export (immutable) */ __webpack_exports__["b"] = UPDATE_DATA;

const UPDATE_ORDER = 'UPDATE_ORDER';
/* harmony export (immutable) */ __webpack_exports__["c"] = UPDATE_ORDER;

const UPDATE_SETTINGS = 'UPDATE_SETTINGS';
/* harmony export (immutable) */ __webpack_exports__["e"] = UPDATE_SETTINGS;

const UPDATE_ROUTE = 'ROUTER_NAVIGATION';
const CLICK_ACTION = 'CLICK_ACTION';
/* harmony export (immutable) */ __webpack_exports__["a"] = CLICK_ACTION;

function masterReducer(state = new __WEBPACK_IMPORTED_MODULE_0__uc_app_state__["a" /* UcAppState */](), action) {
    if (action.type === UPDATE_ROUTE) {
        state.currentElements = [];
        state.currentSearch = new Map();
        state.currentFilter = [];
        state.currentDetails = -1;
    }
    switch (action.type) {
        case CLICK_ACTION:
            state = clickReducer(state, action);
            break;
        case UPDATE_SEARCH:
            state = searchReducer(state, action);
            break;
        case UPDATE_MODAL:
            state = detailsReducer(state, action);
            break;
        case UPDATE_FILTER:
            state = filterReducer(state, action);
            break;
        case UPDATE_ROUTE:
            state = routeReducer(state, action);
            break;
        case UPDATE_DATA:
            state.criterias = action.criterias;
            state = initSettings(state);
            state = filterColumns(state);
            break;
        case UPDATE_ORDER:
            state = changeOrder(state, action);
            state = sortElements(state);
            break;
        case UPDATE_SETTINGS:
            const act = action;
            switch (act.operation) {
                case 'ColumnDisplayAll':
                    state = columnDisplayAll(state, act.enable);
                    state = filterColumns(state);
                    break;
                case 'ColumnChange':
                    state = columnDisplayChange(state, act.value);
                    state = filterColumns(state);
                    break;
                case 'ElementDisplayAll':
                    state.elementsEnabled = state.elementsEnabled.map(() => act.enable);
                    state.elementDisplayAll = act.enable;
                    break;
                case 'ElementChange':
                    state.elementsEnabled[act.value] = !state.elementsEnabled[act.value];
                    state.elementDisplayAll = state.elementsEnabled.filter(value => value).length === state.elementNames.length;
                    break;
                case 'TableExpand':
                    if (act.enable) {
                        state = columnDisplayAll(state, act.enable);
                    }
                    else {
                        state.columnsEnabled = state.columnsEnabledCache;
                        state.columnDisplayAll = act.enable;
                    }
                    state = filterColumns(state);
                    state.tableExpand = act.enable;
                    break;
            }
            switch (act.operation) {
                case 'LatexDisplayTable':
                    state.latexDisplayTable = act.enable;
                    break;
                case 'LatexEnableTooltips':
                    state.latexEnableTooltips = act.enable;
                    break;
                case 'LatexTooltipsAsFootnotes':
                    state.latexTooltipsAsFootnotes = act.enable;
                    break;
                case 'SettingsOpenChange':
                    if (!act.enable && !state.columnDisplayAll) {
                        state.columnsEnabledCache = state.columnsEnabled;
                    }
                    break;
                case 'DetailsDisplayTooltips':
                    state.detailsDisplayTooltips = act.enable;
                    break;
            }
    }
    state = filterElements(state);
    state = sortElements(state);
    return state;
}
function clickReducer(state, action) {
    const column = state.currentColumns[action.index];
    const map = new Map();
    const criteria = state.criterias.get(column);
    map.set(criteria.name, [action.val]);
    const search = state.currentSearch.get(criteria.name);
    if (criteria.rangeSearch) {
        if (search === undefined) {
            state.currentSearch.set(criteria.name, [action.val]);
        }
        else {
            state.currentSearch.set(criteria.name, [search[0] + ',' + action.val]);
        }
    }
    else {
        if (search === undefined) {
            state.currentSearch.set(criteria.name, [action.val]);
        }
        else {
            search.push(action.val);
            state.currentSearch.set(criteria.name, search);
        }
    }
    return state;
}
function columnDisplayChange(state, index) {
    state.columnsEnabled[index] = !state.columnsEnabled[index];
    state.columnDisplayAll = state.columnsEnabled.filter(value => value).length === state.columnNames.length;
    state.tableExpand = state.columnDisplayAll;
    return state;
}
function columnDisplayAll(state, enable) {
    state.columnsEnabled = state.columnsEnabled.map(() => enable);
    state.columnDisplayAll = enable;
    state.tableExpand = enable;
    return state;
}
function changeOrder(state, action) {
    const key = state.currentColumns[action.index];
    const prefix = state.currentOrder.indexOf('+'.concat(key)) === -1 ? '+' : '-';
    if (action.ctrl) {
        const index = state.currentOrder.indexOf((prefix === '-' ? '+' : '-').concat(key));
        if (index !== -1) {
            state.currentOrder[index] = prefix.concat(key);
        }
        else {
            state.currentOrder.push(prefix.concat(key));
        }
    }
    else {
        state.columnOrder = [];
        state.currentOrder = [prefix + key];
    }
    state.columnOrder[action.index] = prefix === '+' ? 1 : -1;
    return state;
}
function updateElements(state) {
    state.currentChanged = false;
    state = filterElements(state, state.criterias);
    state = sortElements(state);
    if (!state.currentChanged) {
        return state;
    }
    putStateIntoURL(state);
    return state;
}
function initSettings(state) {
    // Set elements settings
    const elementNames = [];
    const elementsEnabled = [];
    __WEBPACK_IMPORTED_MODULE_1__components_comparison_data_data_service__["a" /* DataService */].data.forEach(value => {
        elementNames.push(value.name);
        if (value.name === "Template") {
            elementsEnabled.push(false);
        }
        else {
            elementsEnabled.push(true);
        }
    });
    state.elementNames = elementNames;
    state.elementsEnabled = elementsEnabled;
    state.elementDisplayAll = false;
    // Set column settings
    state = initColumn(state);
    // Set latex settings
    state.latexDisplayTable = false;
    state.latexEnableTooltips = false;
    state.latexTooltipsAsFootnotes = false;
    return state;
}
function initColumn(state) {
    const columnKeys = [];
    const columnNames = [];
    const columnsEnabled = [];
    const columnsEnabledCache = [];
    state.criterias.forEach((value, key) => {
        const name = value.name.length === 0 ? key : value.name;
        columnKeys.push(key);
        columnNames.push(name);
        columnsEnabled.push(value.table);
        columnsEnabledCache.push(value.table);
    });
    state.columnKeys = columnKeys;
    state.columnNames = columnNames;
    state.columnsEnabled = columnsEnabled;
    state.columnsEnabledCache = columnsEnabledCache;
    state.columnDisplayAll = columnsEnabled.filter(value => value).length === columnNames.length;
    return state;
}
function putStateIntoURL(state) {
    let query = '';
    if (state.currentSearch.size > 0) {
        query = 'search=';
        for (const [key, value] of state.currentSearch) {
            let crit = key;
            for (const val of value) {
                crit += `:${val}`;
            }
            query += `${encodeURIComponent(crit)};`;
        }
        query = query.substr(0, query.length - 1);
    }
    if (state.currentFilter.length > 0) {
        if (query.length > 0) {
            query += '&';
        }
        query += 'filter=';
        for (const filter of state.currentFilter) {
            query += `${filter},`;
        }
        query = query.substr(0, query.length - 1);
    }
    if (state.currentColumns.length > 0) {
        if (query.length > 0) {
            query += '&';
        }
        query += 'columns=';
        for (const column of state.currentColumns) {
            query += `${encodeURIComponent(column)},`;
        }
        query = query.substr(0, query.length - 1);
    }
    if (state.currentlyMaximized) {
        if (query.length > 0) {
            query += '&';
        }
        query += 'maximized=';
    }
    if (state.currentOrder.length > 0) {
        if (query.length > 0) {
            query += '&';
        }
        query += 'order=';
        for (const order of state.currentOrder) {
            query += `${encodeURIComponent(order)},`;
        }
        query = query.substr(0, query.length - 1);
    }
    if (query.length > 0) {
        window.history.pushState(state, '', '?' + query);
    }
}
function filterColumns(state, columns = new Map()) {
    if (state.criterias === null) {
        return state;
    }
    const currentColumns = [];
    state.columnKeys.forEach((value, index) => {
        if (state.columnsEnabled[index]) {
            currentColumns.push(value);
        }
    });
    state.currentColumns = currentColumns;
    const columnNames = [];
    const columnTypes = [];
    state.currentColumns.forEach(key => {
        const criteria = state.criterias.get(key);
        columnNames.push(criteria.name);
        columnTypes.push(criteria.type);
    });
    state.currentColumnNames = columnNames;
    state.columnTypes = columnTypes;
    const columnOrder = [];
    state.currentOrder.forEach(pk => {
        let index;
        if (pk.startsWith('-') && (index = state.currentColumns.indexOf(pk.substring(1))) !== -1) {
            columnOrder[index] = -1;
        }
        else if (pk.startsWith('+') && (index = state.currentColumns.indexOf(pk.substring(1))) !== -1) {
            columnOrder[index] = 1;
        }
        else if ((index = state.currentColumns.indexOf(pk)) !== -1) {
            columnOrder[index] = 1;
        }
    });
    state.columnOrder = columnOrder;
    return state;
}
function filterElements(state, criterias = null) {
    if (state.criterias === null && criterias !== null) {
        state.criterias = criterias;
        state.currentChanged = true;
    }
    if (state.criterias === null) {
        return state;
    }
    const data = __WEBPACK_IMPORTED_MODULE_1__components_comparison_data_data_service__["a" /* DataService */].data;
    const elements = [];
    const indexes = [];
    __WEBPACK_IMPORTED_MODULE_1__components_comparison_data_data_service__["a" /* DataService */].data.forEach((value, i) => {
        if (state.currentFilter.indexOf(i) !== -1 || !state.elementsEnabled[i]) {
            return;
        }
        let includeData = true;
        for (const field of state.currentSearch.keys()) {
            const columnIndex = state.columnNames.indexOf(field);
            const columnName = state.columnKeys[columnIndex];
            const criteria = state.criterias.get(columnName);
            if (criteria.rangeSearch) {
                if (state.currentSearch.get(field).length > 0) {
                    const queries = (state.currentSearch.get(field)[0] || '').trim().replace(' ', '')
                        .replace(/,.*[a-zA-Z].*|.*[a-zA-Z].*,|.*[a-zA-Z].*/g, '').split(',');
                    if (queries.length === 0 || queries.map(y => y.length === 0).reduce((p, c) => p && c)) {
                        continue;
                    }
                    let includeElement = false;
                    for (const query of queries) {
                        const splits = query.split('-');
                        let a = Number.MAX_VALUE;
                        let b = Number.MIN_VALUE;
                        if (splits.length === 1) {
                            a = b = Number.parseInt(splits[0]);
                            // only one number in the query
                        }
                        else if (splits.length === 2 && splits[0].length === 0) {
                            // only one number in the query and it is negative
                            a = b = -1 * Number.parseInt(splits[1]);
                        }
                        else if (splits.length === 2 && splits[0].length > 0 && splits[1].length > 0) {
                            // range search with two positive numbers
                            a = Number.parseInt(splits[0]);
                            b = Number.parseInt(splits[1]);
                            if (a > b) {
                                const c = b;
                                b = a;
                                a = c;
                            }
                        }
                        else if (splits.length === 2 && splits[0].length > 0 && splits[1].length === 0) {
                            // intermittent range search, something like `250-` inbetween entering valid states
                            a = b = Number.parseInt(splits[0]);
                        }
                        else if (splits.length === 3 && splits[0].length === 0 && splits[2].length === 0) {
                            // intermittent range search, something like `-250-` inbetween entering valid states
                            a = b = -1 * Number.parseInt(splits[1]);
                        }
                        else if (splits.length === 3 && splits[0].length === 0 && splits[2].length > 0) {
                            // range search with first number negative
                            a = -1 * Number.parseInt(splits[1]);
                            b = Number.parseInt(splits[2]);
                        }
                        else if (splits.length === 3 && splits[1].length === 0) {
                            // range search with second number negative
                            a = -1 * Number.parseInt(splits[2]);
                            b = Number.parseInt(splits[0]);
                        }
                        else if (splits.length === 4 && splits[0].length === 0 && splits[2].length === 0) {
                            // range search with both numbers negative
                            a = -1 * Number.parseInt(splits[0]);
                            b = -1 * Number.parseInt(splits[1]);
                            if (a > b) {
                                const c = b;
                                b = a;
                                a = c;
                            }
                        }
                        const labelMap = value.criteria.get(columnName);
                        for (const val of labelMap.keys()) {
                            const numberVal = Number.parseInt(val);
                            if (a <= numberVal && numberVal <= b) {
                                includeElement = true;
                                break;
                            }
                        }
                    }
                    includeData = includeData && includeElement;
                }
            }
            else {
                let fulfillsField = criteria.andSearch;
                for (const query of state.currentSearch.get(columnName)) {
                    let fulfillsQuery = false;
                    for (const key of data[i].criteria.get(criteria.name).keys()) {
                        fulfillsQuery = fulfillsQuery || (key === query);
                    }
                    if (criteria.andSearch) {
                        fulfillsField = fulfillsField && fulfillsQuery;
                    }
                    else {
                        fulfillsField = fulfillsField || fulfillsQuery;
                    }
                }
                includeData = includeData && fulfillsField;
            }
        }
        if (includeData) {
            const dataElement = data[i];
            const item = [];
            state.currentColumns.forEach((key, index) => {
                const obj = dataElement.criteria.get(key);
                if (state.columnTypes[index] === __WEBPACK_IMPORTED_MODULE_2__components_comparison_configuration_configuration__["e" /* CriteriaType */].label) {
                    const labelMap = obj || new Map;
                    const labels = [];
                    labelMap.forEach(label => labels.push(label));
                    item.push(labels);
                }
                else if (state.columnTypes[index] === __WEBPACK_IMPORTED_MODULE_2__components_comparison_configuration_configuration__["e" /* CriteriaType */].rating) {
                    item.push(dataElement.averageRating);
                }
                else if (state.columnTypes[index] === __WEBPACK_IMPORTED_MODULE_2__components_comparison_configuration_configuration__["e" /* CriteriaType */].repository) {
                    item.push(obj);
                }
                else {
                    item.push(obj);
                }
            });
            elements.push(item);
            indexes.push(i);
        }
    });
    if (state.rowIndexes.length !== indexes.length) {
        state.currentChanged = true;
    }
    else {
        for (let i = 0; i < indexes.length; i++) {
            state.currentChanged = state.currentChanged || indexes[i] === state.rowIndexes[i];
        }
    }
    state.rowIndexes = indexes;
    if (state.currentElements.length !== elements.length) {
        state.currentChanged = true;
    }
    else {
        for (let i = 0; i < elements.length; i++) {
            state.currentChanged = state.currentChanged || elements[i] === state.currentElements[i];
        }
    }
    state.currentElements = elements;
    return state;
}
function sortElements(state) {
    if (state.currentOrder === null) {
        return state;
    }
    const keys = state.currentOrder.map(value => {
        const key = value.substring(1);
        if (state.currentColumns.indexOf(key) !== -1) {
            return state.currentColumns.indexOf(key);
        }
        else {
            return 0;
        }
    });
    const direction = state.currentOrder.map(key => {
        if (key.startsWith('+')) {
            return 1;
        }
        else if (key.startsWith('-')) {
            return -1;
        }
        else {
            // Default is positive (ascending)
            return 1;
        }
    });
    const combined = [];
    state.currentElements.forEach((value, index) => combined.push({
        currentElements: value,
        indexes: state.rowIndexes[index]
    }));
    combined.sort((a, b) => sort(a.currentElements, b.currentElements, state.columnTypes, keys, direction));
    if (state.currentElements.length !== combined.length) {
        state.currentChanged = true;
    }
    else {
        for (let i = 0; i < combined.length; i++) {
            state.currentChanged = state.currentChanged ||
                state.currentElements[i] === combined[i].currentElements ||
                state.rowIndexes[i] === combined[i].indexes;
        }
    }
    state.currentElements = combined.map(element => element.currentElements);
    state.rowIndexes = combined.map(element => element.indexes);
    return state;
}
function sort(first, second, types, keys, directions) {
    const stringCompare = (s1, s2) => {
        if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(s1) && Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(s2)) {
            return 0;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(s1)) {
            return 1;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(s2)) {
            return -1;
        }
        return s1.toLowerCase() > s2.toLowerCase() ? 1 : s1.toLowerCase() < s2.toLowerCase() ? -1 : 0;
    };
    const numberCompare = (n1, n2) => n1 > n2 ? 1 : n1 < n2 ? -1 : 0;
    if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(first) && Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(second) || first.length === 0 && second.length === 0) {
        return 0;
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(first) || first.length === 0 && second.length > 0) {
        return -1;
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(first) || first.length > 0 && second.length === 0) {
        return 1;
    }
    let result = 0;
    let index = 0;
    while (result === 0 && index < keys.length) {
        const a = first[keys[index]];
        const b = second[keys[index]];
        if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(a) && Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(b)) {
            result = 0;
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(a)) {
            result = 1;
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(b)) {
            result = -1;
        }
        else {
            switch (types[keys[index]]) {
                case 'repository':
                    const s1 = a;
                    const s2 = b;
                    result = stringCompare(s1, s2);
                    break;
                case 'url':
                    const u1 = a;
                    const u2 = b;
                    result = stringCompare(u1.text, u2.text);
                    break;
                case 'text':
                    const t1 = a;
                    const t2 = b;
                    result = stringCompare(t1.content, t2.content);
                    break;
                case 'markdown':
                    const md1 = a;
                    const md2 = b;
                    result = stringCompare(md1.content, md2.content);
                    break;
                case 'rating':
                    const r1 = a;
                    const r2 = b;
                    result = numberCompare(r1, r2);
                    break;
                case 'label':
                    const la1 = a;
                    const la2 = b;
                    // TODO improve label sorting (label weighting...)
                    const l1 = la1[0];
                    const l2 = la2[0];
                    if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(l1) && Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(l2)) {
                        result = 0;
                    }
                    else if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(l1)) {
                        result = 1;
                    }
                    else if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(l2)) {
                        result = -1;
                    }
                    else {
                        result = stringCompare(l1.name, l2.name);
                    }
                    break;
                default:
                    result = 0;
            }
        }
        if (result === 0) {
            index++;
        }
    }
    return directions[index] * result;
}
function routeReducer(state = new __WEBPACK_IMPORTED_MODULE_0__uc_app_state__["a" /* UcAppState */](), action) {
    if (action.type !== UPDATE_ROUTE) {
        return state;
    }
    const params = action.payload.routerState.queryParams;
    const search = decodeURIComponent(params.search || params['?search'] || '');
    const filter = params.filter || params['?filter'] || '';
    const detailsDialog = Number.parseInt(params.details || params['?details'] || -1);
    const optionsDialog = params.hasOwnProperty('options') || params.hasOwnProperty('?options');
    const columns = params.columns || params['?columns'] || '';
    const maximized = params.hasOwnProperty('maximized') || params.hasOwnProperty('?maximized');
    const order = params.order || params['?order'] || '+id';
    search.split(';').map(x => x.trim()).forEach(x => {
        const splits = x.split(':');
        if (splits.length > 1) {
            // at least one filter is active
            const key = splits.splice(0, 1);
            state.currentSearch.set(key[0], splits);
        }
    });
    state.currentFilter = filter.split(',')
        .filter(x => x.trim().length > 0)
        .filter(x => Number.isInteger(x.trim()))
        .map(x => Number.parseInt(x.trim()));
    state.currentColumns = columns.split(',')
        .filter(x => x.trim().length > 0)
        .filter(x => Number.isInteger(x.trim()))
        .map(x => Number.parseInt(x.trim()));
    if (state.currentColumns.length === 0 && state.criterias) {
        const values = state.criterias.values();
        let crit;
        while ((crit = values.next()) !== null) {
            state.currentColumns.push(crit.name);
        }
    }
    state.currentlyMaximized = maximized;
    state.currentOrder = order.split(',').map(x => decodeURIComponent(x));
    return state;
}
function filterReducer(state = new __WEBPACK_IMPORTED_MODULE_0__uc_app_state__["a" /* UcAppState */](), action) {
    return state;
}
function detailsReducer(state = new __WEBPACK_IMPORTED_MODULE_0__uc_app_state__["a" /* UcAppState */](), action) {
    return state;
}
function searchReducer(state = new __WEBPACK_IMPORTED_MODULE_0__uc_app_state__["a" /* UcAppState */](), action) {
    for (const [key, value] of action.criterias) {
        const elements = state.currentSearch.get(key) || [];
        const index = elements.indexOf(value);
        const columnKeyIndex = state.columnNames.indexOf(key);
        const columnKey = state.columnKeys[columnKeyIndex];
        if (state.criterias.get(columnKey).rangeSearch) {
            state.currentSearch.set(key, [value]);
        }
        else {
            if (value !== null && index > -1) {
                if (index > -1) {
                    elements.splice(index, 1);
                }
            }
            else if (value !== null) {
                const elements = state.currentSearch.get(key);
                if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(elements)) {
                    state.currentSearch.set(key, [value]);
                }
                else {
                    elements.push(value);
                }
            }
        }
    }
    return state;
}


/***/ }),

/***/ "./src/assets/VersionInformation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class VersionInformation {
    constructor() {
        this.date = "2017-08-10";
        this.commit = "1.0.0";
        this.link = "https://github.com/ultimate-comparisons/ultimate-comparison-BASE/releases/tag/v1.0.0";
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VersionInformation;



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;



/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ "jquery":
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

},[0]);
//# sourceMappingURL=main.b4ce7cc62af9b04872df.bundle.js.map