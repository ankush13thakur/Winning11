require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!./platform.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".sidedrawer-icon {\n    padding-top: 5;\n}", ""]);



/***/ }),

/***/ "./app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./profile/profile.component.ts");
/* harmony import */ var _points_points_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./points/points.component.ts");
/* harmony import */ var _referral_referral_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./referral/referral.component.ts");
/* harmony import */ var _offers_offers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./offers/offers.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./settings/settings.component.ts");
/* harmony import */ var _contest_contest_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./contest/contest.component.ts");
/* harmony import */ var _mycontest_mycontest_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./mycontest/mycontest.component.ts");










var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: 'points', component: _points_points_component__WEBPACK_IMPORTED_MODULE_4__["PointsComponent"] },
    { path: 'referral', component: _referral_referral_component__WEBPACK_IMPORTED_MODULE_5__["ReferralComponent"] },
    { path: 'offers', component: _offers_offers_component__WEBPACK_IMPORTED_MODULE_6__["OffersComponent"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"] },
    { path: 'contest', component: _contest_contest_component__WEBPACK_IMPORTED_MODULE_8__["ContestComponent"] },
    { path: 'mycontests', component: _mycontest_mycontest_component__WEBPACK_IMPORTED_MODULE_9__["MyContestComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app.component.html":
/***/ (function(module, exports) {

module.exports = "<RadSideDrawer drawerTransition=\"PushTransition\">\n\n    <GridLayout tkDrawerContent rows=\"auto, *\" class=\"sidedrawer sidedrawer-left\">\n        <StackLayout class=\"sidedrawer\">\n            <Label class=\"sidedrawer-header-text var\" text=\"Ankush Thakur\"></Label>\n        </StackLayout>\n\n        <ScrollView row=\"1\">\n            <StackLayout>\n                <StackLayout class=\"hr-light\"></StackLayout>\n                <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\"\n                    nsRouterLink=\"/home\" (tap)=\"closeDrawer()\" clearHistory=\"true\">\n                    <Label row=\"0\" col=\"0\" text=\"&#xf015;\" class=\"fa sidedrawer-icon\"></Label>\n                    <Label row=\"0\" col=\"1\" text=\"Home\" class=\"m-l-20 sidedrawer-item\"></Label>\n                </GridLayout>\n                <StackLayout class=\"hr-light\"></StackLayout>\n                <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\"\n                    nsRouterLink=\"/profile\" (tap)=\"closeDrawer()\" clearHistory=\"true\">\n                    <Label row=\"0\" col=\"0\" text=\"&#xf2c0;\" class=\"fa sidedrawer-icon\"></Label>\n                    <Label row=\"0\" col=\"1\" text=\"My Profile\" class=\"m-l-20 sidedrawer-item\"></Label>\n                </GridLayout>\n                <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\"\n                    nsRouterLink=\"/mycontests\" (tap)=\"closeDrawer()\" clearHistory=\"true\">\n                    <Label row=\"0\" col=\"0\" text=\"&#xf2c0;\" class=\"fa sidedrawer-icon\"></Label>\n                    <Label row=\"0\" col=\"1\" text=\"My Contests\" class=\"m-l-20 sidedrawer-item\"></Label>\n                </GridLayout>\n                <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\"\n                    nsRouterLink=\"/points\" (tap)=\"closeDrawer()\" clearHistory=\"true\">\n                    <Label row=\"0\" col=\"0\" text=\"&#xf1ce;\" class=\"fa sidedrawer-icon\"></Label>\n                    <Label row=\"0\" col=\"1\" text=\"Points Calculations\" class=\"m-l-20 sidedrawer-item\"></Label>\n                </GridLayout>\n                <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\"\n                    nsRouterLink=\"/referral\" (tap)=\"closeDrawer()\" clearHistory=\"true\">\n                    <Label row=\"0\" col=\"0\" text=\"&#xf234;\" class=\"fa sidedrawer-icon\"></Label>\n                    <Label row=\"0\" col=\"1\" text=\"Refer & Earn\" class=\"m-l-20 sidedrawer-item\"></Label>\n                </GridLayout>\n                <StackLayout class=\"hr-light\"></StackLayout>\n                <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\"\n                    nsRouterLink=\"/offers\" (tap)=\"closeDrawer()\" clearHistory=\"true\">\n                    <Label row=\"0\" col=\"0\" text=\"&#xf06b;\" class=\"fa sidedrawer-icon\"></Label>\n                    <Label row=\"0\" col=\"1\" text=\"Offers\" class=\"m-l-20 sidedrawer-item\"></Label>\n                </GridLayout>\n                <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\"\n                    nsRouterLink=\"/settings\" (tap)=\"closeDrawer()\" clearHistory=\"true\">\n                    <Label row=\"0\" col=\"0\" text=\"&#xf0ad;\" class=\"fa sidedrawer-icon\"></Label>\n                    <Label row=\"0\" col=\"1\" text=\"Settings\" class=\"m-l-20 sidedrawer-item\"></Label>\n                </GridLayout>\n                <StackLayout class=\"hr-light\"></StackLayout>\n                <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\"\n                    (tap)=\"closeDrawer()\" clearHistory=\"true\">\n                    <Label row=\"0\" col=\"0\" text=\"&#xf08b;\" class=\"fa sidedrawer-icon\"></Label>\n                    <Label row=\"0\" col=\"1\" text=\"Logout\" class=\"m-l-20 sidedrawer-item\"></Label>\n                </GridLayout>\n            </StackLayout>\n        </ScrollView>\n    </GridLayout>\n\n    <page-router-outlet tkMainContent class=\"page page-content\"></page-router-outlet>\n</RadSideDrawer>"

/***/ }),

/***/ "./app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/application");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__);


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.closeDrawer = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.closeDrawer();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-app",
            template: __importDefault(__webpack_require__("./app.component.html")).default
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__("../node_modules/css-loader/dist/cjs.js?!../node_modules/nativescript-theme-core/css/core.light.css"), "");
exports.i(__webpack_require__("../node_modules/css-loader/dist/cjs.js?!./platform.css"), "");

// Module
exports.push([module.i, ".fa {\n    font-family: \"FontAwesome\";\n}\n\n.action-bar-label {\n    color: white;\n    font-weight: bold;\n    font-family: fantasy;\n    padding-left: 120;\n    padding-top: 5;\n}\n\n.action-bar {\n    background-color: #032436;\n}\n\n.page-content .page-placeholder {\n    color: #030b0f;\n    font-size: 20;\n    vertical-align: center;\n    horizontal-align: center;\n}\n.page-content .page-icon {\n    font-size: 72;\n    vertical-align: top;\n    horizontal-align: center;\n    color: #032436;\n    margin-top: 20%;\n}\n\n.page-content {\n    background-color: white;\n}\n\n.hr-light {\n    background-color: white;\n}\n\n.sidedrawer {\n    background-color: #032436;\n    padding-bottom: 10;\n}\n\n.sidedrawer-header-text {\n    color: white;\n    font-size: 30;\n    /* font-weight: bold; */\n    margin-top: 10;\n    text-align: center;\n}\n\n.sidedrawer-icon {\n    font-size: 18;\n    width: 40;\n    height: 30;\n    vertical-align: middle;\n    color: white;\n    text-align: center;\n}\n\n.sidedrawer-list-item {\n    color: white;\n    padding-left: 20;\n    font-size: 18;\n    height: 60;\n}\n\n.sidedrawer-item {\n    vertical-align: center;\n}", ""]);

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/nativescript.module");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-ui-sidedrawer/angular");
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app.component.ts");
/* harmony import */ var nativescript_ui_listview_angular_listview_directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nativescript-ui-listview/angular/listview-directives");
/* harmony import */ var nativescript_ui_listview_angular_listview_directives__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular_listview_directives__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nativescript_ui_calendar_angular_calendar_directives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("nativescript-ui-calendar/angular/calendar-directives");
/* harmony import */ var nativescript_ui_calendar_angular_calendar_directives__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_calendar_angular_calendar_directives__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nativescript_ui_chart_angular_chart_directives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("nativescript-ui-chart/angular/chart-directives");
/* harmony import */ var nativescript_ui_chart_angular_chart_directives__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_chart_angular_chart_directives__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nativescript_ui_dataform_angular_dataform_directives__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("nativescript-ui-dataform/angular/dataform-directives");
/* harmony import */ var nativescript_ui_dataform_angular_dataform_directives__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_dataform_angular_dataform_directives__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nativescript_ui_autocomplete_angular_autocomplete_directives__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("nativescript-ui-autocomplete/angular/autocomplete-directives");
/* harmony import */ var nativescript_ui_autocomplete_angular_autocomplete_directives__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_autocomplete_angular_autocomplete_directives__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var nativescript_ui_gauge_angular_gauges_directives__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("nativescript-ui-gauge/angular/gauges-directives");
/* harmony import */ var nativescript_ui_gauge_angular_gauges_directives__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_gauge_angular_gauges_directives__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("nativescript-angular/forms");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./home/home.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./menu/menu.component.ts");
/* harmony import */ var _offers_offers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./offers/offers.component.ts");
/* harmony import */ var _points_points_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./points/points.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./profile/profile.component.ts");
/* harmony import */ var _referral_referral_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./referral/referral.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./settings/settings.component.ts");
/* harmony import */ var _cricket_cricket_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./cricket/cricket.component.ts");
/* harmony import */ var _contest_contest_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./contest/contest.component.ts");
/* harmony import */ var _mycontest_mycontest_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./mycontest/mycontest.component.ts");
























var nsNgCoreImport_Generated = __webpack_require__("@angular/core");
var NSLazyModulesLoader_Generated = /** @class */ (function () {
    function NSLazyModulesLoader_Generated(_compiler, config) {
        this._compiler = _compiler;
        this._config = config || {
            factoryPathPrefix: '',
            factoryPathSuffix: '.ngfactory',
        };
    }
    NSLazyModulesLoader_Generated.prototype.load = function (path) {
        var offlineMode = this._compiler instanceof nsNgCoreImport_Generated.Compiler;
        return offlineMode ? this.loadFactory(path) : this.loadAndCompile(path);
    };
    NSLazyModulesLoader_Generated.prototype.loadAndCompile = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        if (exportName === undefined) {
            exportName = 'default';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(module)
            .then(function (module) { return module[exportName]; })
            .then(function (type) { return _this.checkNotEmpty(type, module, exportName); })
            .then(function (type) { return _this._compiler.compileModuleAsync(type); });
    };
    NSLazyModulesLoader_Generated.prototype.loadFactory = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        var factoryClassSuffix = 'NgFactory';
        if (exportName === undefined) {
            exportName = 'default';
            factoryClassSuffix = '';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(this._config.factoryPathPrefix + module + this._config.factoryPathSuffix)
            .then(function (module) { return module[exportName + factoryClassSuffix]; })
            .then(function (factory) { return _this.checkNotEmpty(factory, module, exportName); });
    };
    NSLazyModulesLoader_Generated.prototype.checkNotEmpty = function (value, modulePath, exportName) {
        if (!value) {
            throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
        }
        return value;
    };
    NSLazyModulesLoader_Generated = __decorate([
        nsNgCoreImport_Generated.Injectable(),
        __param(1, nsNgCoreImport_Generated.Optional()),
        __metadata("design:paramtypes", [nsNgCoreImport_Generated.Compiler, nsNgCoreImport_Generated.SystemJsNgModuleLoaderConfig])
    ], NSLazyModulesLoader_Generated);
    return NSLazyModulesLoader_Generated;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptUISideDrawerModule"],
                nativescript_ui_listview_angular_listview_directives__WEBPACK_IMPORTED_MODULE_5__["NativeScriptUIListViewModule"],
                nativescript_ui_calendar_angular_calendar_directives__WEBPACK_IMPORTED_MODULE_6__["NativeScriptUICalendarModule"],
                nativescript_ui_chart_angular_chart_directives__WEBPACK_IMPORTED_MODULE_7__["NativeScriptUIChartModule"],
                nativescript_ui_dataform_angular_dataform_directives__WEBPACK_IMPORTED_MODULE_8__["NativeScriptUIDataFormModule"],
                nativescript_ui_autocomplete_angular_autocomplete_directives__WEBPACK_IMPORTED_MODULE_9__["NativeScriptUIAutoCompleteTextViewModule"],
                nativescript_ui_gauge_angular_gauges_directives__WEBPACK_IMPORTED_MODULE_10__["NativeScriptUIGaugeModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_11__["NativeScriptCommonModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NativeScriptFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"],
                _offers_offers_component__WEBPACK_IMPORTED_MODULE_15__["OffersComponent"],
                _points_points_component__WEBPACK_IMPORTED_MODULE_16__["PointsComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"],
                _referral_referral_component__WEBPACK_IMPORTED_MODULE_18__["ReferralComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_19__["SettingsComponent"],
                _cricket_cricket_component__WEBPACK_IMPORTED_MODULE_20__["CricketComponent"],
                _contest_contest_component__WEBPACK_IMPORTED_MODULE_21__["ContestComponent"],
                _mycontest_mycontest_component__WEBPACK_IMPORTED_MODULE_22__["MyContestComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ],
            providers: [{ provide: nsNgCoreImport_Generated.NgModuleFactoryLoader, useClass: NSLazyModulesLoader_Generated }]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./contest/contest.component.css":
/***/ (function(module, exports) {

module.exports = "SegmentedBar {\r\n    font-family: fantasy;\r\n    height: 40;\r\n}\r\n\r\n.home-panel{\r\n    vertical-align: center; \r\n    font-size: 20;\r\n    margin: 15;\r\n}\r\n\r\n.description-label{\r\n    margin-bottom: 15;\r\n}\r\n\r\n.action-bar {\r\n    background: #8f91de;\r\n    color: #fff;\r\n}\r\n\r\n.contest-information {\r\n    padding-left: 25;\r\n    padding-top: 5;\r\n    color: #032436;\r\n    font-size: 10;\r\n}\r\n\r\n.sidedrawer-list-item-text {\r\n    color: #fff\r\n}\r\n\r\nhtml {\r\n    background-color: #f7f7f7;\r\n}\r\n\r\n.profile-container {\r\n    background-color: #8f91de;\r\n    padding: 30 20 60 0;\r\n}\r\n\r\n.profile-photo-container {\r\n    border-width: 1.5;\r\n    border-color: #fff;\r\n    border-radius: 50%;\r\n    padding: 5;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.profile__photo {\r\n    width: 70;\r\n    height: 70;\r\n}\r\n\r\n.profile-information-container {\r\n    color: #fff;\r\n    padding: 0 20;\r\n}\r\n\r\n.profile__name {\r\n    margin-bottom: 5;\r\n    font-size: 18;\r\n}\r\n\r\n.profile__email {\r\n    font-size: 14;\r\n}\r\n\r\n.drawer-icon {\r\n    width: 24;\r\n    margin: -45 30 15 15;\r\n}\r\n\r\n.owe-dashboard {\r\n    padding: 0 10;\r\n    margin-top: -35;\r\n}\r\n\r\n.owe-dashboard-item {\r\n    background: #fff;\r\n    padding: 10 10 15;\r\n    margin: 0 6;\r\n    border-width: 1;\r\n    border-color: #fff;\r\n    border-radius: 3;\r\n}\r\n\r\n.owe-dashboard-item.active {\r\n    border-color: #bf97df;\r\n}\r\n\r\n.dashboard__indicator {\r\n    width: 10;\r\n    margin-right: 2;\r\n}\r\n\r\n.dashboard-title__text {\r\n    font-size: 14;\r\n}\r\n\r\n.dasboard-value {\r\n    font-weight: bold;\r\n    margin-top: 10;\r\n    font-size: 14;\r\n}\r\n\r\n.dasboard-value.total {\r\n    color: #8f91de;\r\n}\r\n\r\n.dasboard-value.owe {\r\n    color: #f67979;\r\n}\r\n\r\n.dasboard-value.owed {\r\n    color: #78d49a;\r\n}\r\n\r\n.owe-list {\r\n    margin: 0 15 15;\r\n}\r\n\r\n.owe-list-item {\r\n    background-color: #fff;\r\n}\r\n\r\n.owe-main-info {\r\n    padding: 10 15;\r\n}\r\n\r\n.owe-category-icon {\r\n    width: 45;\r\n    height: 45;\r\n    margin-right: 15;\r\n}\r\n\r\n.owe-info-container {\r\n    color: #acacac;\r\n    font-size: 13;\r\n}\r\n\r\n.owe-title {\r\n    font-weight: 600;\r\n    margin-bottom: 5;\r\n    color: #000;\r\n    font-size: 15;\r\n}\r\n\r\n.lender-name,\r\n.debtor-name {\r\n    font-weight: 600;\r\n    color: #8f91de;\r\n}\r\n\r\n.owe-ammount {\r\n    font-weight: 600;\r\n    color: #f67979;\r\n}\r\n\r\n.owed-ammount {\r\n    color: #78d49a;\r\n    font-weight: 600;\r\n}\r\n\r\n.pay-amount {\r\n    color: #8f91de;\r\n    font-size: 15;\r\n}\r\n\r\n.owe-secondary-info {\r\n    padding: 5 15;\r\n    color: #acacac;\r\n    font-size: 14;\r\n    border-top-width: 1;\r\n    border-top-color: #e9e9e9;\r\n}\r\n\r\n.debtor-list {\r\n    margin-left: 5;\r\n    margin-right: 10;\r\n}\r\n\r\n.debtor-list-item {\r\n    margin-right: -10;\r\n}\r\n\r\n.debtor-list-item-image {\r\n    width: 30;\r\n    border-radius: 50%;\r\n    background-color: #fff;\r\n    border-width: 2;\r\n    border-color: #fff;\r\n}\r\n\r\n.settle-up-icon {\r\n    width: 12;\r\n    margin-left: 2;\r\n}\r\n\r\n.divider {\r\n    height: 15;\r\n    background-color: #e8e7e7;\r\n}\r\n\r\n.add-button {\r\n    background-color: #8f91de;\r\n    width: 70;\r\n    height: 70;\r\n    font-size: 50;\r\n    padding: 0 0 8;\r\n    border-radius: 50%;\r\n    color: #fff;\r\n    margin-right: 15;\r\n}\r\n\r\n.owe-list-filter {\r\n    margin: 25 15 15;\r\n}\r\n\r\n.owe-list-filter-item {\r\n    margin-left: 25;\r\n}\r\n\r\n.owe-list-filter__icon {\r\n    width: 14;\r\n    height: 14;\r\n    margin-right: 10;\r\n}\r\n\r\n.owe-list-filter__text {\r\n    font-size: 15;\r\n}\r\n\r\n.hide {\r\n    visibility: collapsed;\r\n}\r\n\r\n.hide-opacity {\r\n    opacity: .2;\r\n}\r\n\r\n.not-active {\r\n    opacity: .5;\r\n}\r\n\r\n.default-container {\r\n    padding: 20;\r\n}\r\n\r\n.category-icon-detail {\r\n    width: 40;\r\n    margin-right: 20;\r\n}\r\n\r\n.price-detail {\r\n    font-size: 25;\r\n    color: #8f91de;\r\n}\r\n\r\n.description-text {\r\n    font-size: 14;\r\n    margin: 15 0;\r\n}\r\n\r\n.detail-section {\r\n    margin: 20 0;\r\n}\r\n\r\n.detail-section__title {\r\n    font-size: 20;\r\n    font-weight: 600;\r\n    margin-bottom: 20;\r\n}\r\n\r\n.detail-photo {\r\n    width: 45;\r\n    margin-right: 15;\r\n}\r\n\r\n.paid-price {\r\n    font-size: 20;\r\n}\r\n\r\n.no-margin {\r\n    margin: 0;\r\n}\r\n\r\n.owe-arrow {\r\n    width: 30;\r\n    margin: 10 5;\r\n}\r\n\r\n.owe-name {\r\n    font-size: 14;\r\n    margin: 5 0;\r\n}\r\n\r\n.detail-owe-ammount {\r\n    font-size: 16;\r\n    margin: 15;\r\n}\r\n\r\n.detail-owe-ammount.owe {\r\n    color: #f67979;\r\n}\r\n\r\n.detail-owe-ammount .settle {\r\n    color: #b8b8b8;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.default-button {    \r\n    background-color: #8f91de;\r\n    color: #fff;\r\n    padding: 14 10;\r\n    border-radius: 5;\r\n    text-transform: uppercase;\r\n    font-size: 13;\r\n    font-weight: 600;\r\n}\r\n\r\n.settled-up-text {\r\n    color: #b8b8b8;\r\n    font-size: 13;\r\n    margin-top: 5;\r\n}\r\n\r\n.has-paid-text {\r\n    font-size: 14;\r\n    margin: 15;\r\n}\r\n\r\n.history-date {\r\n    color: #b8b8b8;\r\n    font-size: 16;\r\n    margin: -5 0 15;\r\n    font-weight: 800;\r\n}\r\n\r\n.form-control {\r\n    margin-left: 20;\r\n    border-bottom-width: 1;\r\n    border-bottom-color: #acacac;\r\n    font-size: 22;\r\n    padding: 10 5;\r\n}\r\n\r\n.hr-light {\r\n    border-bottom-width: 1;\r\n    border-bottom-color: #acacac;\r\n}\r\n\r\n.form-control.price {\r\n    color: #8f91de;\r\n}\r\n\r\n.form-control.split-price {\r\n    width: 120;\r\n}\r\n\r\n.form-icon {\r\n    width: 20;\r\n    margin-right: 5;\r\n    margin-left: 5;\r\n}\r\n\r\n.form-icon.category {\r\n    width: 30;\r\n    margin: 0;\r\n}\r\n\r\n.form-row {\r\n    margin: 0 0 15;\r\n}\r\n\r\n.bottom-drawer-content {\r\n    background-color: #fff;\r\n    padding: 0 20 20;\r\n}\r\n\r\n.category-drawer-item {\r\n    margin: 8 0;\r\n}\r\n\r\n.category-drawer__title {\r\n    font-size: 18;\r\n    font-weight: 700;\r\n    margin-bottom: 10;\r\n}\r\n\r\n.suggestion-item {\r\n    border-width: 1;\r\n    border-color: #b8b8b8; \r\n    padding: 10;\r\n}\r\n\r\n#imagePickerResult {\r\n    width: 100;\r\n    margin-left: 50;\r\n    border-width: 1;\r\n    border-color: #bf97df;\r\n}\r\n\r\n.sidedrawer-left {\r\n    background-color: #fff;\r\n}\r\n\r\n.sidedrawer-content {\r\n    margin-top: 40;\r\n}\r\n\r\n.sidedrawer-list-item-text {\r\n    padding: 20;\r\n    color: #000;\r\n    border-width: 1;\r\n    border-color: #bf97df;\r\n    margin-bottom: -1;\r\n}"

/***/ }),

/***/ "./contest/contest.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"auto, *\">\r\n    <Menu></Menu>\r\n    <Label class=\"action-bar-label\" text=\"Contest details\"></Label>\r\n</GridLayout>\r\n\r\n<StackLayout row=\"1\" style=\"padding-top: 20\">\r\n    <SegmentedBar [items]=\"items\" (selectedIndexChange)=\"onSelectedIndexChange($event)\"></SegmentedBar>\r\n    <GridLayout [visibility]=\"selectedIndex === 0 ? 'visible' : 'collapsed'\">\r\n        <GridLayout>\r\n            <ScrollView backgroundColor=\"#e8e7e7\">\r\n                <FlexboxLayout flexDirection=\"column\" class=\"owe-list\" backgroundColor=\"#e8e7e7\">\r\n                    <StackLayout style=\"height: 15\"></StackLayout>\r\n                    <StackLayout id=\"item1\" orientation=\"vertical\" class=\"owe-list-item\" width=\"100%\">\r\n                        <GridLayout columns=\"auto, *, auto\" rows=\"auto\" width=\"100%\" height=\"auto\" class=\"owe-main-info\"\r\n                            verticalAlignment=\"top\" (tap)=\"toggleLeaderBoard()\">\r\n                            <Image row=\"0\" col=\"0\" src=\"~/Assets/australia.jpg\" class=\"owe-category-icon\"></Image>\r\n                            <StackLayout row=\"0\" col=\"1\" orientation=\"vertical\" class=\"owe-info-container\">\r\n                                <GridLayout columns=\"auto\" rows=\"auto\" width=\"100%\">\r\n                                    <Label text=\"Contest Id: 41698\" class=\"lender-name\" class=\"contest-information\"\r\n                                        row=\"0\" col=\"0\"></Label>\r\n                                </GridLayout>\r\n                            </StackLayout>\r\n                            <Image row=\"0\" col=\"2\" src=\"~/Assets/sri-lanka.jpg\" class=\"owe-category-icon\"></Image>\r\n                        </GridLayout>\r\n                        <Label class=\"divider\" text=\"\"></Label>\r\n                    </StackLayout>\r\n                </FlexboxLayout>\r\n            </ScrollView>\r\n            <StackLayout style=\"padding-top: 120\" *ngIf=\"toShowLeaderBoard\">\r\n                <Label text=\"Leader board here\" class=\"m-15 h3 p-5 text-center\"></Label>\r\n            </StackLayout>\r\n        </GridLayout>\r\n    </GridLayout>\r\n    <GridLayout [visibility]=\"selectedIndex === 1 ? 'visible' : 'collapsed'\">\r\n        <Label text=\"My team here\" class=\"m-15 h3 p-5 text-center\"></Label>\r\n    </GridLayout>\r\n</StackLayout>"

/***/ }),

/***/ "./contest/contest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContestComponent", function() { return ContestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/ui/page");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_segmented_bar_segmented_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tns-core-modules/ui/segmented-bar/segmented-bar");
/* harmony import */ var tns_core_modules_ui_segmented_bar_segmented_bar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_segmented_bar_segmented_bar__WEBPACK_IMPORTED_MODULE_2__);



var ContestComponent = /** @class */ (function () {
    function ContestComponent(page) {
        this.page = page;
        this.selectedIndex = 0;
        this.toShowLeaderBoard = false;
    }
    ContestComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.items = [];
        var segmentedBarItem = new tns_core_modules_ui_segmented_bar_segmented_bar__WEBPACK_IMPORTED_MODULE_2__["SegmentedBarItem"]();
        segmentedBarItem.title = "Contest";
        this.items.push(segmentedBarItem);
        segmentedBarItem = new tns_core_modules_ui_segmented_bar_segmented_bar__WEBPACK_IMPORTED_MODULE_2__["SegmentedBarItem"]();
        segmentedBarItem.title = "My Team";
        this.items.push(segmentedBarItem);
    };
    ContestComponent.prototype.onSelectedIndexChange = function (args) {
        var segmentedBar = args.object;
        this.selectedIndex = segmentedBar.selectedIndex;
    };
    ContestComponent.prototype.toggleLeaderBoard = function () {
        this.toShowLeaderBoard = !this.toShowLeaderBoard;
    };
    ContestComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"] }
    ]; };
    ContestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Contest",
            template: __importDefault(__webpack_require__("./contest/contest.component.html")).default,
            styles: [__importDefault(__webpack_require__("./contest/contest.component.css")).default]
        }),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"]])
    ], ContestComponent);
    return ContestComponent;
}());



/***/ }),

/***/ "./cricket/cricket.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\r\n    vertical-align: center; \r\n    font-size: 20;\r\n    margin: 15;\r\n}\r\n\r\n.description-label{\r\n    margin-bottom: 15;\r\n}\r\n\r\n.action-bar {\r\n    background: #8f91de;\r\n    color: #fff;\r\n}\r\n\r\n.time-information {\r\n    padding-left: 40;\r\n    padding-top: 15;\r\n    color: red;\r\n    font-size: 10;\r\n}\r\n\r\n.sidedrawer-list-item-text {\r\n    color: #fff\r\n}\r\n\r\nhtml {\r\n    background-color: #f7f7f7;\r\n}\r\n\r\n.profile-container {\r\n    background-color: #8f91de;\r\n    padding: 30 20 60 0;\r\n}\r\n\r\n.profile-photo-container {\r\n    border-width: 1.5;\r\n    border-color: #fff;\r\n    border-radius: 50%;\r\n    padding: 5;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.profile__photo {\r\n    width: 70;\r\n    height: 70;\r\n}\r\n\r\n.profile-information-container {\r\n    color: #fff;\r\n    padding: 0 20;\r\n}\r\n\r\n.profile__name {\r\n    margin-bottom: 5;\r\n    font-size: 18;\r\n}\r\n\r\n.profile__email {\r\n    font-size: 14;\r\n}\r\n\r\n.drawer-icon {\r\n    width: 24;\r\n    margin: -45 30 15 15;\r\n}\r\n\r\n.owe-dashboard {\r\n    padding: 0 10;\r\n    margin-top: -35;\r\n}\r\n\r\n.owe-dashboard-item {\r\n    background: #fff;\r\n    padding: 10 10 15;\r\n    margin: 0 6;\r\n    border-width: 1;\r\n    border-color: #fff;\r\n    border-radius: 3;\r\n}\r\n\r\n.owe-dashboard-item.active {\r\n    border-color: #bf97df;\r\n}\r\n\r\n.dashboard__indicator {\r\n    width: 10;\r\n    margin-right: 2;\r\n}\r\n\r\n.dashboard-title__text {\r\n    font-size: 14;\r\n}\r\n\r\n.dasboard-value {\r\n    font-weight: bold;\r\n    margin-top: 10;\r\n    font-size: 14;\r\n}\r\n\r\n.dasboard-value.total {\r\n    color: #8f91de;\r\n}\r\n\r\n.dasboard-value.owe {\r\n    color: #f67979;\r\n}\r\n\r\n.dasboard-value.owed {\r\n    color: #78d49a;\r\n}\r\n\r\n.owe-list {\r\n    margin: 0 15 15;\r\n}\r\n\r\n.owe-list-item {\r\n    background-color: #fff;\r\n}\r\n\r\n.owe-main-info {\r\n    padding: 10 15;\r\n}\r\n\r\n.owe-category-icon {\r\n    width: 45;\r\n    height: 45;\r\n    margin-right: 15;\r\n}\r\n\r\n.owe-info-container {\r\n    color: #acacac;\r\n    font-size: 13;\r\n}\r\n\r\n.owe-title {\r\n    font-weight: 600;\r\n    margin-bottom: 5;\r\n    color: #000;\r\n    font-size: 15;\r\n}\r\n\r\n.lender-name,\r\n.debtor-name {\r\n    font-weight: 600;\r\n    color: #8f91de;\r\n}\r\n\r\n.owe-ammount {\r\n    font-weight: 600;\r\n    color: #f67979;\r\n}\r\n\r\n.owed-ammount {\r\n    color: #78d49a;\r\n    font-weight: 600;\r\n}\r\n\r\n.pay-amount {\r\n    color: #8f91de;\r\n    font-size: 15;\r\n}\r\n\r\n.owe-secondary-info {\r\n    padding: 5 15;\r\n    color: #acacac;\r\n    font-size: 14;\r\n    border-top-width: 1;\r\n    border-top-color: #e9e9e9;\r\n}\r\n\r\n.debtor-list {\r\n    margin-left: 5;\r\n    margin-right: 10;\r\n}\r\n\r\n.debtor-list-item {\r\n    margin-right: -10;\r\n}\r\n\r\n.debtor-list-item-image {\r\n    width: 30;\r\n    border-radius: 50%;\r\n    background-color: #fff;\r\n    border-width: 2;\r\n    border-color: #fff;\r\n}\r\n\r\n.settle-up-icon {\r\n    width: 12;\r\n    margin-left: 2;\r\n}\r\n\r\n.divider {\r\n    height: 15;\r\n    background-color: #e8e7e7;\r\n}\r\n\r\n.add-button {\r\n    background-color: #8f91de;\r\n    width: 70;\r\n    height: 70;\r\n    font-size: 50;\r\n    padding: 0 0 8;\r\n    border-radius: 50%;\r\n    color: #fff;\r\n    margin-right: 15;\r\n}\r\n\r\n.owe-list-filter {\r\n    margin: 25 15 15;\r\n}\r\n\r\n.owe-list-filter-item {\r\n    margin-left: 25;\r\n}\r\n\r\n.owe-list-filter__icon {\r\n    width: 14;\r\n    height: 14;\r\n    margin-right: 10;\r\n}\r\n\r\n.owe-list-filter__text {\r\n    font-size: 15;\r\n}\r\n\r\n.hide {\r\n    visibility: collapsed;\r\n}\r\n\r\n.hide-opacity {\r\n    opacity: .2;\r\n}\r\n\r\n.not-active {\r\n    opacity: .5;\r\n}\r\n\r\n.default-container {\r\n    padding: 20;\r\n}\r\n\r\n.category-icon-detail {\r\n    width: 40;\r\n    margin-right: 20;\r\n}\r\n\r\n.price-detail {\r\n    font-size: 25;\r\n    color: #8f91de;\r\n}\r\n\r\n.description-text {\r\n    font-size: 14;\r\n    margin: 15 0;\r\n}\r\n\r\n.detail-section {\r\n    margin: 20 0;\r\n}\r\n\r\n.detail-section__title {\r\n    font-size: 20;\r\n    font-weight: 600;\r\n    margin-bottom: 20;\r\n}\r\n\r\n.detail-photo {\r\n    width: 45;\r\n    margin-right: 15;\r\n}\r\n\r\n.paid-price {\r\n    font-size: 20;\r\n}\r\n\r\n.no-margin {\r\n    margin: 0;\r\n}\r\n\r\n.owe-arrow {\r\n    width: 30;\r\n    margin: 10 5;\r\n}\r\n\r\n.owe-name {\r\n    font-size: 14;\r\n    margin: 5 0;\r\n}\r\n\r\n.detail-owe-ammount {\r\n    font-size: 16;\r\n    margin: 15;\r\n}\r\n\r\n.detail-owe-ammount.owe {\r\n    color: #f67979;\r\n}\r\n\r\n.detail-owe-ammount .settle {\r\n    color: #b8b8b8;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.default-button {    \r\n    background-color: #8f91de;\r\n    color: #fff;\r\n    padding: 14 10;\r\n    border-radius: 5;\r\n    text-transform: uppercase;\r\n    font-size: 13;\r\n    font-weight: 600;\r\n}\r\n\r\n.settled-up-text {\r\n    color: #b8b8b8;\r\n    font-size: 13;\r\n    margin-top: 5;\r\n}\r\n\r\n.has-paid-text {\r\n    font-size: 14;\r\n    margin: 15;\r\n}\r\n\r\n.history-date {\r\n    color: #b8b8b8;\r\n    font-size: 16;\r\n    margin: -5 0 15;\r\n    font-weight: 800;\r\n}\r\n\r\n.form-control {\r\n    margin-left: 20;\r\n    border-bottom-width: 1;\r\n    border-bottom-color: #acacac;\r\n    font-size: 22;\r\n    padding: 10 5;\r\n}\r\n\r\n.hr-light {\r\n    border-bottom-width: 1;\r\n    border-bottom-color: #acacac;\r\n}\r\n\r\n.form-control.price {\r\n    color: #8f91de;\r\n}\r\n\r\n.form-control.split-price {\r\n    width: 120;\r\n}\r\n\r\n.form-icon {\r\n    width: 20;\r\n    margin-right: 5;\r\n    margin-left: 5;\r\n}\r\n\r\n.form-icon.category {\r\n    width: 30;\r\n    margin: 0;\r\n}\r\n\r\n.form-row {\r\n    margin: 0 0 15;\r\n}\r\n\r\n.bottom-drawer-content {\r\n    background-color: #fff;\r\n    padding: 0 20 20;\r\n}\r\n\r\n.category-drawer-item {\r\n    margin: 8 0;\r\n}\r\n\r\n.category-drawer__title {\r\n    font-size: 18;\r\n    font-weight: 700;\r\n    margin-bottom: 10;\r\n}\r\n\r\n.suggestion-item {\r\n    border-width: 1;\r\n    border-color: #b8b8b8; \r\n    padding: 10;\r\n}\r\n\r\n#imagePickerResult {\r\n    width: 100;\r\n    margin-left: 50;\r\n    border-width: 1;\r\n    border-color: #bf97df;\r\n}\r\n\r\n.sidedrawer-left {\r\n    background-color: #fff;\r\n}\r\n\r\n.sidedrawer-content {\r\n    margin-top: 40;\r\n}\r\n\r\n.sidedrawer-list-item-text {\r\n    padding: 20;\r\n    color: #000;\r\n    border-width: 1;\r\n    border-color: #bf97df;\r\n    margin-bottom: -1;\r\n}"

/***/ }),

/***/ "./cricket/cricket.component.html":
/***/ (function(module, exports) {

module.exports = "<ScrollView backgroundColor=\"#e8e7e7\">\r\n    <FlexboxLayout flexDirection=\"column\" class=\"owe-list\" backgroundColor=\"#e8e7e7\">\r\n        <StackLayout style=\"height: 15\"></StackLayout>\r\n        <StackLayout id=\"item1\" orientation=\"vertical\" class=\"owe-list-item\" width=\"100%\">\r\n            <GridLayout nsRouterLink=\"/contest\" columns=\"auto, *, auto\" rows=\"auto\" width=\"100%\" height=\"auto\"\r\n                class=\"owe-main-info\" verticalAlignment=\"top\">\r\n                <Image row=\"0\" col=\"0\" src=\"~/Assets/south-africa.jpg\" class=\"owe-category-icon\"></Image>\r\n                <StackLayout row=\"0\" col=\"1\" orientation=\"vertical\" class=\"owe-info-container\">\r\n                    <GridLayout columns=\"auto\" rows=\"auto\" width=\"100%\">\r\n                        <Label text=\"3h 25m left\" class=\"lender-name\" class=\"time-information\" row=\"0\" col=\"0\"></Label>\r\n                    </GridLayout>\r\n                </StackLayout>\r\n                <Image row=\"0\" col=\"2\" src=\"~/Assets/australia.jpg\" class=\"owe-category-icon\"></Image>\r\n            </GridLayout>\r\n            <Label class=\"divider\" text=\"\"></Label>\r\n        </StackLayout>\r\n        <StackLayout id=\"item2\" orientation=\"vertical\" class=\"owe-list-item\" width=\"100%\">\r\n            <GridLayout nsRouterLink=\"/contest\" columns=\"auto, *, auto\" rows=\"auto\" width=\"100%\" height=\"auto\"\r\n                class=\"owe-main-info\" verticalAlignment=\"top\">\r\n                <Image row=\"0\" col=\"0\" src=\"~/Assets/england.jpg\" class=\"owe-category-icon\"></Image>\r\n                <StackLayout row=\"0\" col=\"1\" orientation=\"vertical\" class=\"owe-info-container\">\r\n                    <GridLayout columns=\"auto\" rows=\"auto\" width=\"100%\">\r\n                        <Label text=\"2d 5h 2m left\" class=\"lender-name\" class=\"time-information\" row=\"0\"\r\n                            col=\"0\"></Label>\r\n                    </GridLayout>\r\n                </StackLayout>\r\n                <Image row=\"0\" col=\"2\" src=\"~/Assets/sri-lanka.jpg\" class=\"owe-category-icon\"></Image>\r\n            </GridLayout>\r\n            <Label class=\"divider\" text=\"\"></Label>\r\n        </StackLayout>\r\n        <StackLayout id=\"item3\" orientation=\"vertical\" class=\"owe-list-item\" width=\"100%\">\r\n            <GridLayout nsRouterLink=\"/contest\" columns=\"auto, *, auto\" rows=\"auto\" width=\"100%\" height=\"auto\"\r\n                class=\"owe-main-info\" verticalAlignment=\"top\">\r\n                <Image row=\"0\" col=\"0\" src=\"~/Assets/australia.jpg\" class=\"owe-category-icon\"></Image>\r\n                <StackLayout row=\"0\" col=\"1\" orientation=\"vertical\" class=\"owe-info-container\">\r\n                    <GridLayout columns=\"auto\" rows=\"auto\" width=\"100%\">\r\n                        <Label text=\"3d 25m left\" class=\"lender-name\" class=\"time-information\" row=\"0\" col=\"0\"></Label>\r\n                    </GridLayout>\r\n                </StackLayout>\r\n                <Image row=\"0\" col=\"2\" src=\"~/Assets/sri-lanka.jpg\" class=\"owe-category-icon\"></Image>\r\n            </GridLayout>\r\n            <Label class=\"divider\" text=\"\"></Label>\r\n        </StackLayout>\r\n        <StackLayout id=\"item4\" orientation=\"vertical\" class=\"owe-list-item\" width=\"100%\">\r\n            <GridLayout nsRouterLink=\"/contest\" columns=\"auto, *, auto\" rows=\"auto\" width=\"100%\" height=\"auto\"\r\n                class=\"owe-main-info\" verticalAlignment=\"top\">\r\n                <Image row=\"0\" col=\"0\" src=\"~/Assets/bangladesh.jpg\" class=\"owe-category-icon\"></Image>\r\n                <StackLayout row=\"0\" col=\"1\" orientation=\"vertical\" class=\"owe-info-container\">\r\n                    <GridLayout columns=\"auto\" rows=\"auto\" width=\"100%\">\r\n                        <Label text=\"1w 29m left\" class=\"lender-name\" class=\"time-information\" row=\"0\" col=\"0\"></Label>\r\n                    </GridLayout>\r\n                </StackLayout>\r\n                <Image row=\"0\" col=\"2\" src=\"~/Assets/south-africa.jpg\" class=\"owe-category-icon\"></Image>\r\n            </GridLayout>\r\n            <Label class=\"divider\" text=\"\"></Label>\r\n        </StackLayout>\r\n        <StackLayout id=\"item5\" orientation=\"vertical\" class=\"owe-list-item\" width=\"100%\">\r\n            <GridLayout nsRouterLink=\"/contest\" columns=\"auto, *, auto\" rows=\"auto\" width=\"100%\" height=\"auto\"\r\n                class=\"owe-main-info\" verticalAlignment=\"top\">\r\n                <Image row=\"0\" col=\"0\" src=\"~/Assets/australia.jpg\" class=\"owe-category-icon\"></Image>\r\n                <StackLayout row=\"0\" col=\"1\" orientation=\"vertical\" class=\"owe-info-container\">\r\n                    <GridLayout columns=\"auto\" rows=\"auto\" width=\"100%\">\r\n                        <Label text=\"2w 3h 25m left\" class=\"lender-name\" class=\"time-information\" row=\"0\"\r\n                            col=\"0\"></Label>\r\n                    </GridLayout>\r\n                </StackLayout>\r\n                <Image row=\"0\" col=\"2\" src=\"~/Assets/bangladesh.jpg\" class=\"owe-category-icon\"></Image>\r\n            </GridLayout>\r\n            <Label class=\"divider\" text=\"\"></Label>\r\n        </StackLayout>\r\n    </FlexboxLayout>\r\n</ScrollView>"

/***/ }),

/***/ "./cricket/cricket.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CricketComponent", function() { return CricketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/ui/page");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__);


var CricketComponent = /** @class */ (function () {
    function CricketComponent(page) {
        this.page = page;
    }
    CricketComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    CricketComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CricketComponent.prototype, "toShowSingleContest", void 0);
    CricketComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Cricket",
            template: __importDefault(__webpack_require__("./cricket/cricket.component.html")).default,
            styles: [__importDefault(__webpack_require__("./cricket/cricket.component.css")).default]
        }),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"]])
    ], CricketComponent);
    return CricketComponent;
}());



/***/ }),

/***/ "./home/home.component.css":
/***/ (function(module, exports) {

module.exports = "SegmentedBar {\r\n    font-family: fantasy;\r\n    font-size: 9;\r\n    height: 40;\r\n}"

/***/ }),

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"30, *\">\n    <Menu></Menu>\n    <Label text=\"Ongoing contests\" class=\"action-bar-label\"></Label>\n</GridLayout>\n\n<StackLayout row=\"1\" style=\"padding-top: 30\">\n    <SegmentedBar [items]=\"items\" (selectedIndexChange)=\"onSelectedIndexChange($event)\"></SegmentedBar>\n    <GridLayout [visibility]=\"selectedIndex === 0 ? 'visible' : 'collapsed'\">\n        <Cricket></Cricket>\n    </GridLayout>\n    <GridLayout [visibility]=\"selectedIndex === 1 ? 'visible' : 'collapsed'\">\n        <Label text=\"Football matches here\" class=\"m-15 h3 p-5 text-center\"></Label>\n    </GridLayout>\n    <GridLayout [visibility]=\"selectedIndex === 2 ? 'visible' : 'collapsed'\">\n        <Label text=\"Kabaddi matches here\" class=\"m-15 h3 p-5 text-center\"></Label>\n    </GridLayout>\n    <GridLayout [visibility]=\"selectedIndex === 3 ? 'visible' : 'collapsed'\">\n        <Label text=\"Quizes here\" class=\"m-15 h3 p-5 text-center\"></Label>\n    </GridLayout>\n</StackLayout>"

/***/ }),

/***/ "./home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/ui/page");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_segmented_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tns-core-modules/ui/segmented-bar");
/* harmony import */ var tns_core_modules_ui_segmented_bar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_segmented_bar__WEBPACK_IMPORTED_MODULE_2__);



var HomeComponent = /** @class */ (function () {
    function HomeComponent(page) {
        this.page = page;
        this.selectedIndex = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.items = [];
        var segmentedBarItem = new tns_core_modules_ui_segmented_bar__WEBPACK_IMPORTED_MODULE_2__["SegmentedBarItem"]();
        segmentedBarItem.title = "Cricket";
        this.items.push(segmentedBarItem);
        segmentedBarItem = new tns_core_modules_ui_segmented_bar__WEBPACK_IMPORTED_MODULE_2__["SegmentedBarItem"]();
        segmentedBarItem.title = "Football";
        this.items.push(segmentedBarItem);
        segmentedBarItem = new tns_core_modules_ui_segmented_bar__WEBPACK_IMPORTED_MODULE_2__["SegmentedBarItem"]();
        segmentedBarItem.title = "Kabaddi";
        this.items.push(segmentedBarItem);
        segmentedBarItem = new tns_core_modules_ui_segmented_bar__WEBPACK_IMPORTED_MODULE_2__["SegmentedBarItem"]();
        segmentedBarItem.title = "Quizes";
        this.items.push(segmentedBarItem);
    };
    HomeComponent.prototype.onSelectedIndexChange = function (args) {
        var segmentedBar = args.object;
        this.selectedIndex = segmentedBar.selectedIndex;
    };
    HomeComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __importDefault(__webpack_require__("./home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__("./home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-angular/platform");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");

        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        


var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./menu/menu.component.css":
/***/ (function(module, exports) {

module.exports = ".menu-icon {\n    font-size: 26;\n    color: white;\n    padding-left: 13;\n    vertical-align: center;\n} "

/***/ }),

/***/ "./menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout row=\"0\" columns=\"auto, *\" class=\"action-bar\">\n    <Label col=\"0\" text=\"&#xf0c9;\" class=\"fa menu-icon\" (tap)=\"onDrawerButtonTap($event)\"></Label>\n</GridLayout>"

/***/ }),

/***/ "./menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/application");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__);


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.toggleDrawerState();
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Menu",
            template: __importDefault(__webpack_require__("./menu/menu.component.html")).default,
            styles: [__importDefault(__webpack_require__("./menu/menu.component.css")).default]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./mycontest/mycontest.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\r\n    vertical-align: center; \r\n    font-size: 20;\r\n    margin: 15;\r\n}\r\n\r\n.description-label{\r\n    margin-bottom: 15;\r\n}\r\n\r\n.action-bar {\r\n    background: #8f91de;\r\n    color: #fff;\r\n}\r\n\r\n.contest-information {\r\n    padding-left: 25;\r\n    padding-top: 5;\r\n    color: #032436;\r\n    font-size: 10;\r\n}\r\n\r\n.sidedrawer-list-item-text {\r\n    color: #fff\r\n}\r\n\r\nhtml {\r\n    background-color: #f7f7f7;\r\n}\r\n\r\n.profile-container {\r\n    background-color: #8f91de;\r\n    padding: 30 20 60 0;\r\n}\r\n\r\n.profile-photo-container {\r\n    border-width: 1.5;\r\n    border-color: #fff;\r\n    border-radius: 50%;\r\n    padding: 5;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.profile__photo {\r\n    width: 70;\r\n    height: 70;\r\n}\r\n\r\n.profile-information-container {\r\n    color: #fff;\r\n    padding: 0 20;\r\n}\r\n\r\n.profile__name {\r\n    margin-bottom: 5;\r\n    font-size: 18;\r\n}\r\n\r\n.profile__email {\r\n    font-size: 14;\r\n}\r\n\r\n.drawer-icon {\r\n    width: 24;\r\n    margin: -45 30 15 15;\r\n}\r\n\r\n.owe-dashboard {\r\n    padding: 0 10;\r\n    margin-top: -35;\r\n}\r\n\r\n.owe-dashboard-item {\r\n    background: #fff;\r\n    padding: 10 10 15;\r\n    margin: 0 6;\r\n    border-width: 1;\r\n    border-color: #fff;\r\n    border-radius: 3;\r\n}\r\n\r\n.owe-dashboard-item.active {\r\n    border-color: #bf97df;\r\n}\r\n\r\n.dashboard__indicator {\r\n    width: 10;\r\n    margin-right: 2;\r\n}\r\n\r\n.dashboard-title__text {\r\n    font-size: 14;\r\n}\r\n\r\n.dasboard-value {\r\n    font-weight: bold;\r\n    margin-top: 10;\r\n    font-size: 14;\r\n}\r\n\r\n.dasboard-value.total {\r\n    color: #8f91de;\r\n}\r\n\r\n.dasboard-value.owe {\r\n    color: #f67979;\r\n}\r\n\r\n.dasboard-value.owed {\r\n    color: #78d49a;\r\n}\r\n\r\n.owe-list {\r\n    margin: 0 15 15;\r\n}\r\n\r\n.owe-list-item {\r\n    background-color: #fff;\r\n}\r\n\r\n.owe-main-info {\r\n    padding: 10 15;\r\n}\r\n\r\n.owe-category-icon {\r\n    width: 45;\r\n    height: 45;\r\n    margin-right: 15;\r\n}\r\n\r\n.owe-info-container {\r\n    color: #acacac;\r\n    font-size: 13;\r\n}\r\n\r\n.owe-title {\r\n    font-weight: 600;\r\n    margin-bottom: 5;\r\n    color: #000;\r\n    font-size: 15;\r\n}\r\n\r\n.lender-name,\r\n.debtor-name {\r\n    font-weight: 600;\r\n    color: #8f91de;\r\n}\r\n\r\n.owe-ammount {\r\n    font-weight: 600;\r\n    color: #f67979;\r\n}\r\n\r\n.owed-ammount {\r\n    color: #78d49a;\r\n    font-weight: 600;\r\n}\r\n\r\n.pay-amount {\r\n    color: #8f91de;\r\n    font-size: 15;\r\n}\r\n\r\n.owe-secondary-info {\r\n    padding: 5 15;\r\n    color: #acacac;\r\n    font-size: 14;\r\n    border-top-width: 1;\r\n    border-top-color: #e9e9e9;\r\n}\r\n\r\n.debtor-list {\r\n    margin-left: 5;\r\n    margin-right: 10;\r\n}\r\n\r\n.debtor-list-item {\r\n    margin-right: -10;\r\n}\r\n\r\n.debtor-list-item-image {\r\n    width: 30;\r\n    border-radius: 50%;\r\n    background-color: #fff;\r\n    border-width: 2;\r\n    border-color: #fff;\r\n}\r\n\r\n.settle-up-icon {\r\n    width: 12;\r\n    margin-left: 2;\r\n}\r\n\r\n.divider {\r\n    height: 15;\r\n    background-color: #e8e7e7;\r\n}\r\n\r\n.add-button {\r\n    background-color: #8f91de;\r\n    width: 70;\r\n    height: 70;\r\n    font-size: 50;\r\n    padding: 0 0 8;\r\n    border-radius: 50%;\r\n    color: #fff;\r\n    margin-right: 15;\r\n}\r\n\r\n.owe-list-filter {\r\n    margin: 25 15 15;\r\n}\r\n\r\n.owe-list-filter-item {\r\n    margin-left: 25;\r\n}\r\n\r\n.owe-list-filter__icon {\r\n    width: 14;\r\n    height: 14;\r\n    margin-right: 10;\r\n}\r\n\r\n.owe-list-filter__text {\r\n    font-size: 15;\r\n}\r\n\r\n.hide {\r\n    visibility: collapsed;\r\n}\r\n\r\n.hide-opacity {\r\n    opacity: .2;\r\n}\r\n\r\n.not-active {\r\n    opacity: .5;\r\n}\r\n\r\n.default-container {\r\n    padding: 20;\r\n}\r\n\r\n.category-icon-detail {\r\n    width: 40;\r\n    margin-right: 20;\r\n}\r\n\r\n.price-detail {\r\n    font-size: 25;\r\n    color: #8f91de;\r\n}\r\n\r\n.description-text {\r\n    font-size: 14;\r\n    margin: 15 0;\r\n}\r\n\r\n.detail-section {\r\n    margin: 20 0;\r\n}\r\n\r\n.detail-section__title {\r\n    font-size: 20;\r\n    font-weight: 600;\r\n    margin-bottom: 20;\r\n}\r\n\r\n.detail-photo {\r\n    width: 45;\r\n    margin-right: 15;\r\n}\r\n\r\n.paid-price {\r\n    font-size: 20;\r\n}\r\n\r\n.no-margin {\r\n    margin: 0;\r\n}\r\n\r\n.owe-arrow {\r\n    width: 30;\r\n    margin: 10 5;\r\n}\r\n\r\n.owe-name {\r\n    font-size: 14;\r\n    margin: 5 0;\r\n}\r\n\r\n.detail-owe-ammount {\r\n    font-size: 16;\r\n    margin: 15;\r\n}\r\n\r\n.detail-owe-ammount.owe {\r\n    color: #f67979;\r\n}\r\n\r\n.detail-owe-ammount .settle {\r\n    color: #b8b8b8;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.default-button {    \r\n    background-color: #8f91de;\r\n    color: #fff;\r\n    padding: 14 10;\r\n    border-radius: 5;\r\n    text-transform: uppercase;\r\n    font-size: 13;\r\n    font-weight: 600;\r\n}\r\n\r\n.settled-up-text {\r\n    color: #b8b8b8;\r\n    font-size: 13;\r\n    margin-top: 5;\r\n}\r\n\r\n.has-paid-text {\r\n    font-size: 14;\r\n    margin: 15;\r\n}\r\n\r\n.history-date {\r\n    color: #b8b8b8;\r\n    font-size: 16;\r\n    margin: -5 0 15;\r\n    font-weight: 800;\r\n}\r\n\r\n.form-control {\r\n    margin-left: 20;\r\n    border-bottom-width: 1;\r\n    border-bottom-color: #acacac;\r\n    font-size: 22;\r\n    padding: 10 5;\r\n}\r\n\r\n.hr-light {\r\n    border-bottom-width: 1;\r\n    border-bottom-color: #acacac;\r\n}\r\n\r\n.form-control.price {\r\n    color: #8f91de;\r\n}\r\n\r\n.form-control.split-price {\r\n    width: 120;\r\n}\r\n\r\n.form-icon {\r\n    width: 20;\r\n    margin-right: 5;\r\n    margin-left: 5;\r\n}\r\n\r\n.form-icon.category {\r\n    width: 30;\r\n    margin: 0;\r\n}\r\n\r\n.form-row {\r\n    margin: 0 0 15;\r\n}\r\n\r\n.bottom-drawer-content {\r\n    background-color: #fff;\r\n    padding: 0 20 20;\r\n}\r\n\r\n.category-drawer-item {\r\n    margin: 8 0;\r\n}\r\n\r\n.category-drawer__title {\r\n    font-size: 18;\r\n    font-weight: 700;\r\n    margin-bottom: 10;\r\n}\r\n\r\n.suggestion-item {\r\n    border-width: 1;\r\n    border-color: #b8b8b8; \r\n    padding: 10;\r\n}\r\n\r\n#imagePickerResult {\r\n    width: 100;\r\n    margin-left: 50;\r\n    border-width: 1;\r\n    border-color: #bf97df;\r\n}\r\n\r\n.sidedrawer-left {\r\n    background-color: #fff;\r\n}\r\n\r\n.sidedrawer-content {\r\n    margin-top: 40;\r\n}\r\n\r\n.sidedrawer-list-item-text {\r\n    padding: 20;\r\n    color: #000;\r\n    border-width: 1;\r\n    border-color: #bf97df;\r\n    margin-bottom: -1;\r\n}"

/***/ }),

/***/ "./mycontest/mycontest.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"30, *\">\r\n    <Menu></Menu>\r\n    <Label text=\"My active contests\" class=\"action-bar-label\"></Label>\r\n</GridLayout>\r\n\r\n<StackLayout row=\"1\" style=\"padding-top: 30\">\r\n    <GridLayout>\r\n        <ScrollView backgroundColor=\"#e8e7e7\">\r\n            <FlexboxLayout flexDirection=\"column\" class=\"owe-list\" backgroundColor=\"#e8e7e7\">\r\n                <StackLayout style=\"height: 15\"></StackLayout>\r\n                <StackLayout id=\"item1\" orientation=\"vertical\" class=\"owe-list-item\" width=\"100%\">\r\n                    <GridLayout nsRouterLink=\"/contest\" columns=\"auto, *, auto\" rows=\"auto\" width=\"100%\" height=\"auto\" class=\"owe-main-info\"\r\n                        verticalAlignment=\"top\">\r\n                        <Image row=\"0\" col=\"0\" src=\"~/Assets/real-madrid.jpg\" class=\"owe-category-icon\"></Image>\r\n                        <StackLayout row=\"0\" col=\"1\" orientation=\"vertical\" class=\"owe-info-container\">\r\n                            <GridLayout columns=\"auto\" rows=\"auto\" width=\"100%\">\r\n                                <Label text=\"Contest Id: 61878\" class=\"lender-name\" class=\"contest-information\" row=\"0\"\r\n                                    col=\"0\"></Label>\r\n                            </GridLayout>\r\n                        </StackLayout>\r\n                        <Image row=\"0\" col=\"2\" src=\"~/Assets/barcelona.jpg\" class=\"owe-category-icon\"></Image>\r\n                    </GridLayout>\r\n                    <Label class=\"divider\" text=\"\"></Label>\r\n                </StackLayout>\r\n                <StackLayout id=\"item2\" orientation=\"vertical\" class=\"owe-list-item\" width=\"100%\">\r\n                    <GridLayout nsRouterLink=\"/contest\" columns=\"auto, *, auto\" rows=\"auto\" width=\"100%\" height=\"auto\" class=\"owe-main-info\"\r\n                        verticalAlignment=\"top\">\r\n                        <Image row=\"0\" col=\"0\" src=\"~/Assets/south-africa.jpg\" class=\"owe-category-icon\"></Image>\r\n                        <StackLayout row=\"0\" col=\"1\" orientation=\"vertical\" class=\"owe-info-container\">\r\n                            <GridLayout columns=\"auto\" rows=\"auto\" width=\"100%\">\r\n                                <Label text=\"Contest Id: 31288\" class=\"lender-name\" class=\"contest-information\" row=\"0\"\r\n                                    col=\"0\"></Label>\r\n                            </GridLayout>\r\n                        </StackLayout>\r\n                        <Image row=\"0\" col=\"2\" src=\"~/Assets/australia.jpg\" class=\"owe-category-icon\"></Image>\r\n                    </GridLayout>\r\n                    <Label class=\"divider\" text=\"\"></Label>\r\n                </StackLayout>\r\n            </FlexboxLayout>\r\n        </ScrollView>\r\n    </GridLayout>\r\n</StackLayout>"

/***/ }),

/***/ "./mycontest/mycontest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyContestComponent", function() { return MyContestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/ui/page");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__);


var MyContestComponent = /** @class */ (function () {
    function MyContestComponent(page) {
        this.page = page;
    }
    MyContestComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    MyContestComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"] }
    ]; };
    MyContestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "MyContest",
            template: __importDefault(__webpack_require__("./mycontest/mycontest.component.html")).default,
            styles: [__importDefault(__webpack_require__("./mycontest/mycontest.component.css")).default]
        }),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"]])
    ], MyContestComponent);
    return MyContestComponent;
}());



/***/ }),

/***/ "./offers/offers.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"30, *\">\n    <Menu></Menu>\n    <Label text=\"Offers zone\" class=\"action-bar-label\"></Label>\n</GridLayout>\n\n<StackLayout row=\"1\" style=\"padding-top: 30\">\n    <GridLayout tkExampleTitle tkToggleNavButton>\n        <RadListView [items]=\"items\" marginRight=\"-2\" backgroundColor=\"#e6e6e6\">\n            <ListViewStaggeredLayout tkListViewLayout scrollDirection=\"Vertical\"\n                spanCount=\"2\"></ListViewStaggeredLayout>\n            <ng-template tkListItemTemplate let-item=\"item\">\n                <StackLayout margin=\"15\" borderRadius=\"10\">\n                    <Image src=\"{{ item.imageSrc }}\" width=\"200\" height=\"120\"\n                        stretch=\"aspectFill\"></Image>\n                </StackLayout>\n            </ng-template>\n        </RadListView>\n    </GridLayout>\n</StackLayout>"

/***/ }),

/***/ "./offers/offers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersComponent", function() { return OffersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/ui/page");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__);


var OffersComponent = /** @class */ (function () {
    function OffersComponent(page) {
        this.page = page;
        this.items = [
            { imageSrc: "~/Assets/mc-donalds.jpg" },
            { imageSrc: "~/Assets/kfc.jpg" },
            { imageSrc: "~/Assets/dominos.jpg" },
            { imageSrc: "~/Assets/subway.jpg" },
            { imageSrc: "~/Assets/star-bucks.jpg" },
            { imageSrc: "~/Assets/baskin-robbins.jpg" },
            { imageSrc: "~/Assets/bookmyshow.jpg" },
            { imageSrc: "~/Assets/burger-king.jpg" },
            { imageSrc: "~/Assets/life-style.jpg" },
            { imageSrc: "~/Assets/pantaloons.jpg" },
            { imageSrc: "~/Assets/pizza-hut.jpg" }
        ];
    }
    OffersComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    OffersComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"] }
    ]; };
    OffersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Offers",
            template: __importDefault(__webpack_require__("./offers/offers.component.html")).default,
        }),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"]])
    ], OffersComponent);
    return OffersComponent;
}());



/***/ }),

/***/ "./points/points.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"30, *\">\n    <Menu></Menu>\n    <Label text=\"Points calculation\" class=\"action-bar-label\"></Label>\n</GridLayout>\n\n<GridLayout row=\"1\">\n    <Label class=\"page-placeholder\" text=\"Points Page\"></Label>\n</GridLayout>"

/***/ }),

/***/ "./points/points.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointsComponent", function() { return PointsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/ui/page");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__);


var PointsComponent = /** @class */ (function () {
    function PointsComponent(page) {
        this.page = page;
    }
    PointsComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    PointsComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"] }
    ]; };
    PointsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Points",
            template: __importDefault(__webpack_require__("./points/points.component.html")).default,
        }),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"]])
    ], PointsComponent);
    return PointsComponent;
}());



/***/ }),

/***/ "./profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"30, *\">\n    <Menu></Menu>\n    <Label text=\"Manage profile\" class=\"action-bar-label\"></Label>\n</GridLayout>\n\n<GridLayout row=\"1\">\n    <Label class=\"page-placeholder\" text=\"Profile Page\"></Label>\n</GridLayout>"

/***/ }),

/***/ "./profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/ui/page");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__);


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(page) {
        this.page = page;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"] }
    ]; };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Profile",
            template: __importDefault(__webpack_require__("./profile/profile.component.html")).default,
        }),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./referral/referral.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"30, *\">\n    <Menu></Menu>\n    <Label text=\"Refer & Earn\" class=\"action-bar-label\"></Label>\n</GridLayout>\n\n<GridLayout row=\"1\">\n    <Label class=\"page-placeholder\" text=\"Referral Page\"></Label>\n</GridLayout>"

/***/ }),

/***/ "./referral/referral.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralComponent", function() { return ReferralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/ui/page");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__);


var ReferralComponent = /** @class */ (function () {
    function ReferralComponent(page) {
        this.page = page;
    }
    ReferralComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    ReferralComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"] }
    ]; };
    ReferralComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Referral",
            template: __importDefault(__webpack_require__("./referral/referral.component.html")).default,
        }),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"]])
    ], ReferralComponent);
    return ReferralComponent;
}());



/***/ }),

/***/ "./settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"30, *\">\n    <Menu></Menu>\n    <Label text=\"Manage settings\" class=\"action-bar-label\"></Label>\n</GridLayout>\n\n<GridLayout row=\"1\">\n    <Label class=\"page-placeholder\" text=\"Settings Page\"></Label>\n</GridLayout>"

/***/ }),

/***/ "./settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/ui/page");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__);


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(page) {
        this.page = page;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    SettingsComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"] }
    ]; };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Settings",
            template: __importDefault(__webpack_require__("./settings/settings.component.html")).default,
        }),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "nativescript-angular/common":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/common");

/***/ }),

/***/ "nativescript-angular/forms":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/forms");

/***/ }),

/***/ "nativescript-angular/nativescript.module":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/nativescript.module");

/***/ }),

/***/ "nativescript-angular/platform":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/platform");

/***/ }),

/***/ "nativescript-angular/router":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/router");

/***/ }),

/***/ "nativescript-ui-autocomplete/angular/autocomplete-directives":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-autocomplete/angular/autocomplete-directives");

/***/ }),

/***/ "nativescript-ui-calendar/angular/calendar-directives":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-calendar/angular/calendar-directives");

/***/ }),

/***/ "nativescript-ui-chart/angular/chart-directives":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-chart/angular/chart-directives");

/***/ }),

/***/ "nativescript-ui-dataform/angular/dataform-directives":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-dataform/angular/dataform-directives");

/***/ }),

/***/ "nativescript-ui-gauge/angular/gauges-directives":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-gauge/angular/gauges-directives");

/***/ }),

/***/ "nativescript-ui-listview/angular/listview-directives":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-listview/angular/listview-directives");

/***/ }),

/***/ "nativescript-ui-sidedrawer/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-sidedrawer/angular");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/frame/activity":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/activity");

/***/ }),

/***/ "tns-core-modules/ui/page":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/page");

/***/ }),

/***/ "tns-core-modules/ui/segmented-bar":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/segmented-bar");

/***/ }),

/***/ "tns-core-modules/ui/segmented-bar/segmented-bar":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/segmented-bar/segmented-bar");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9wbGF0Zm9ybS5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9jb250ZXN0L2NvbnRlc3QuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9jb250ZXN0L2NvbnRlc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY29udGVzdC9jb250ZXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jcmlja2V0L2NyaWNrZXQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9jcmlja2V0L2NyaWNrZXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY3JpY2tldC9jcmlja2V0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy8uL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL21lbnUvbWVudS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9tZW51L21lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL215Y29udGVzdC9teWNvbnRlc3QuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9teWNvbnRlc3QvbXljb250ZXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL215Y29udGVzdC9teWNvbnRlc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL29mZmVycy9vZmZlcnMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vb2ZmZXJzL29mZmVycy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcG9pbnRzL3BvaW50cy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9wb2ludHMvcG9pbnRzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9yZWZlcnJhbC9yZWZlcnJhbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9yZWZlcnJhbC9yZWZlcnJhbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1hdXRvY29tcGxldGUvYW5ndWxhci9hdXRvY29tcGxldGUtZGlyZWN0aXZlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1jYWxlbmRhci9hbmd1bGFyL2NhbGVuZGFyLWRpcmVjdGl2ZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhci9jaGFydC1kaXJlY3RpdmVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXIvZGF0YWZvcm0tZGlyZWN0aXZlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyL2dhdWdlcy1kaXJlY3RpdmVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXIvbGlzdHZpZXctZGlyZWN0aXZlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2FjdGl2aXR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWdtZW50ZWQtYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWdtZW50ZWQtYmFyL3NlZ21lbnRlZC1iYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLDRDQUE0QyxXQUFXO0FBQ3ZEO0FBQ0E7QUFDQSx5RTs7Ozs7OztBQ1pBLDJCQUEyQixtQkFBTyxDQUFDLGdEQUFnRDtBQUNuRjtBQUNBLGNBQWMsUUFBUyxxQkFBcUIscUJBQXFCLEdBQUc7Ozs7Ozs7Ozs7QUNGcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUNqQjtBQUNTO0FBQ0g7QUFDTTtBQUNOO0FBQ007QUFDSDtBQUNNO0FBRXJFLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDcEQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxrRUFBYSxFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsMkVBQWdCLEVBQUU7SUFDaEQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSx3RUFBZSxFQUFFO0lBQzlDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsOEVBQWlCLEVBQUU7SUFDbEQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSx3RUFBZSxFQUFFO0lBQzlDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsOEVBQWlCLEVBQUU7SUFDbEQsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSwyRUFBZ0IsRUFBRTtJQUNoRCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUs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OztnQkFKeUIsNkRBQUk7O0lBRnJCLGlCQUFpQjtRQUw3QiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFFcEIsNEZBQXdDO1NBQzNDLENBQUM7eUNBRzRCLDZEQUFJO09BRnJCLGlCQUFpQixDQU83QjtJQUFELHdCQUFDO0NBQUE7QUFQNkI7Ozs7Ozs7O0FDUjlCLHlROzs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNGO0FBT2hEO0lBRUksMkJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUVsQyxvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ3JDLENBQUM7O2dCQUp5Qiw2REFBSTs7SUFGckIsaUJBQWlCO1FBTDdCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUVwQiw0RkFBd0M7U0FDM0MsQ0FBQzt5Q0FHNEIsNkRBQUk7T0FGckIsaUJBQWlCLENBTzdCO0lBQUQsd0JBQUM7Q0FBQTtBQVA2Qjs7Ozs7Ozs7QUNSOUIsMEM7Ozs7Ozs7QUNBQSx3RDs7Ozs7OztBQ0FBLHVEOzs7Ozs7O0FDQUEscUU7Ozs7Ozs7QUNBQSwwRDs7Ozs7OztBQ0FBLHdEOzs7Ozs7O0FDQUEseUY7Ozs7Ozs7QUNBQSxpRjs7Ozs7OztBQ0FBLDJFOzs7Ozs7O0FDQUEsaUY7Ozs7Ozs7QUNBQSw0RTs7Ozs7OztBQ0FBLGlGOzs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLGlFOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLCtEOzs7Ozs7O0FDQUEscUQ7Ozs7Ozs7QUNBQSw4RDs7Ozs7OztBQ0FBLDRFOzs7Ozs7O0FDQUEsb0UiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2lkZWRyYXdlci1pY29uIHtcXG4gICAgcGFkZGluZy10b3A6IDU7XFxufVwiLCBcIlwiXSk7XG5cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb2ludHNDb21wb25lbnQgfSBmcm9tICcuL3BvaW50cy9wb2ludHMuY29tcG9uZW50JztcbmltcG9ydCB7IFJlZmVycmFsQ29tcG9uZW50IH0gZnJvbSAnLi9yZWZlcnJhbC9yZWZlcnJhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgT2ZmZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9vZmZlcnMvb2ZmZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gJy4vc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRlc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlc3QvY29udGVzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXlDb250ZXN0Q29tcG9uZW50IH0gZnJvbSAnLi9teWNvbnRlc3QvbXljb250ZXN0LmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvaG9tZVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJ3Byb2ZpbGUnLCBjb21wb25lbnQ6IFByb2ZpbGVDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICdwb2ludHMnLCBjb21wb25lbnQ6IFBvaW50c0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJ3JlZmVycmFsJywgY29tcG9uZW50OiBSZWZlcnJhbENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJ29mZmVycycsIGNvbXBvbmVudDogT2ZmZXJzQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnc2V0dGluZ3MnLCBjb21wb25lbnQ6IFNldHRpbmdzQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnY29udGVzdCcsIGNvbXBvbmVudDogQ29udGVzdENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJ215Y29udGVzdHMnLCBjb21wb25lbnQ6IE15Q29udGVzdENvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxSYWRTaWRlRHJhd2VyIGRyYXdlclRyYW5zaXRpb249XFxcIlB1c2hUcmFuc2l0aW9uXFxcIj5cXG5cXG4gICAgPEdyaWRMYXlvdXQgdGtEcmF3ZXJDb250ZW50IHJvd3M9XFxcImF1dG8sICpcXFwiIGNsYXNzPVxcXCJzaWRlZHJhd2VyIHNpZGVkcmF3ZXItbGVmdFxcXCI+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInNpZGVkcmF3ZXJcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwic2lkZWRyYXdlci1oZWFkZXItdGV4dCB2YXJcXFwiIHRleHQ9XFxcIkFua3VzaCBUaGFrdXJcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgPFNjcm9sbFZpZXcgcm93PVxcXCIxXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICpcXFwiIGNsYXNzPVxcXCJzaWRlZHJhd2VyLWxpc3QtaXRlbVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIG5zUm91dGVyTGluaz1cXFwiL2hvbWVcXFwiICh0YXApPVxcXCJjbG9zZURyYXdlcigpXFxcIiBjbGVhckhpc3Rvcnk9XFxcInRydWVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCImI3hmMDE1O1xcXCIgY2xhc3M9XFxcImZhIHNpZGVkcmF3ZXItaWNvblxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiSG9tZVxcXCIgY2xhc3M9XFxcIm0tbC0yMCBzaWRlZHJhd2VyLWl0ZW1cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKlxcXCIgY2xhc3M9XFxcInNpZGVkcmF3ZXItbGlzdC1pdGVtXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgbnNSb3V0ZXJMaW5rPVxcXCIvcHJvZmlsZVxcXCIgKHRhcCk9XFxcImNsb3NlRHJhd2VyKClcXFwiIGNsZWFySGlzdG9yeT1cXFwidHJ1ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIiYjeGYyYzA7XFxcIiBjbGFzcz1cXFwiZmEgc2lkZWRyYXdlci1pY29uXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJNeSBQcm9maWxlXFxcIiBjbGFzcz1cXFwibS1sLTIwIHNpZGVkcmF3ZXItaXRlbVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqXFxcIiBjbGFzcz1cXFwic2lkZWRyYXdlci1saXN0LWl0ZW1cXFwiXFxuICAgICAgICAgICAgICAgICAgICBuc1JvdXRlckxpbms9XFxcIi9teWNvbnRlc3RzXFxcIiAodGFwKT1cXFwiY2xvc2VEcmF3ZXIoKVxcXCIgY2xlYXJIaXN0b3J5PVxcXCJ0cnVlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiJiN4ZjJjMDtcXFwiIGNsYXNzPVxcXCJmYSBzaWRlZHJhd2VyLWljb25cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIk15IENvbnRlc3RzXFxcIiBjbGFzcz1cXFwibS1sLTIwIHNpZGVkcmF3ZXItaXRlbVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqXFxcIiBjbGFzcz1cXFwic2lkZWRyYXdlci1saXN0LWl0ZW1cXFwiXFxuICAgICAgICAgICAgICAgICAgICBuc1JvdXRlckxpbms9XFxcIi9wb2ludHNcXFwiICh0YXApPVxcXCJjbG9zZURyYXdlcigpXFxcIiBjbGVhckhpc3Rvcnk9XFxcInRydWVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCImI3hmMWNlO1xcXCIgY2xhc3M9XFxcImZhIHNpZGVkcmF3ZXItaWNvblxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiUG9pbnRzIENhbGN1bGF0aW9uc1xcXCIgY2xhc3M9XFxcIm0tbC0yMCBzaWRlZHJhd2VyLWl0ZW1cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKlxcXCIgY2xhc3M9XFxcInNpZGVkcmF3ZXItbGlzdC1pdGVtXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgbnNSb3V0ZXJMaW5rPVxcXCIvcmVmZXJyYWxcXFwiICh0YXApPVxcXCJjbG9zZURyYXdlcigpXFxcIiBjbGVhckhpc3Rvcnk9XFxcInRydWVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCImI3hmMjM0O1xcXCIgY2xhc3M9XFxcImZhIHNpZGVkcmF3ZXItaWNvblxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiUmVmZXIgJiBFYXJuXFxcIiBjbGFzcz1cXFwibS1sLTIwIHNpZGVkcmF3ZXItaXRlbVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqXFxcIiBjbGFzcz1cXFwic2lkZWRyYXdlci1saXN0LWl0ZW1cXFwiXFxuICAgICAgICAgICAgICAgICAgICBuc1JvdXRlckxpbms9XFxcIi9vZmZlcnNcXFwiICh0YXApPVxcXCJjbG9zZURyYXdlcigpXFxcIiBjbGVhckhpc3Rvcnk9XFxcInRydWVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCImI3hmMDZiO1xcXCIgY2xhc3M9XFxcImZhIHNpZGVkcmF3ZXItaWNvblxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiT2ZmZXJzXFxcIiBjbGFzcz1cXFwibS1sLTIwIHNpZGVkcmF3ZXItaXRlbVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqXFxcIiBjbGFzcz1cXFwic2lkZWRyYXdlci1saXN0LWl0ZW1cXFwiXFxuICAgICAgICAgICAgICAgICAgICBuc1JvdXRlckxpbms9XFxcIi9zZXR0aW5nc1xcXCIgKHRhcCk9XFxcImNsb3NlRHJhd2VyKClcXFwiIGNsZWFySGlzdG9yeT1cXFwidHJ1ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIiYjeGYwYWQ7XFxcIiBjbGFzcz1cXFwiZmEgc2lkZWRyYXdlci1pY29uXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJTZXR0aW5nc1xcXCIgY2xhc3M9XFxcIm0tbC0yMCBzaWRlZHJhd2VyLWl0ZW1cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKlxcXCIgY2xhc3M9XFxcInNpZGVkcmF3ZXItbGlzdC1pdGVtXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgKHRhcCk9XFxcImNsb3NlRHJhd2VyKClcXFwiIGNsZWFySGlzdG9yeT1cXFwidHJ1ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIiYjeGYwOGI7XFxcIiBjbGFzcz1cXFwiZmEgc2lkZWRyYXdlci1pY29uXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJMb2dvdXRcXFwiIGNsYXNzPVxcXCJtLWwtMjAgc2lkZWRyYXdlci1pdGVtXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cXG4gICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICA8cGFnZS1yb3V0ZXItb3V0bGV0IHRrTWFpbkNvbnRlbnQgY2xhc3M9XFxcInBhZ2UgcGFnZS1jb250ZW50XFxcIj48L3BhZ2Utcm91dGVyLW91dGxldD5cXG48L1JhZFNpZGVEcmF3ZXI+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIGNsb3NlRHJhd2VyKCkge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICB9XG59XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSwgXCJcIik7XG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4vcGxhdGZvcm0uY3NzXCIpLCBcIlwiKTtcblxuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZmEge1xcbiAgICBmb250LWZhbWlseTogXFxcIkZvbnRBd2Vzb21lXFxcIjtcXG59XFxuXFxuLmFjdGlvbi1iYXItbGFiZWwge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LWZhbWlseTogZmFudGFzeTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMjA7XFxuICAgIHBhZGRpbmctdG9wOiA1O1xcbn1cXG5cXG4uYWN0aW9uLWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzI0MzY7XFxufVxcblxcbi5wYWdlLWNvbnRlbnQgLnBhZ2UtcGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogIzAzMGIwZjtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbn1cXG4ucGFnZS1jb250ZW50IC5wYWdlLWljb24ge1xcbiAgICBmb250LXNpemU6IDcyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjMDMyNDM2O1xcbiAgICBtYXJnaW4tdG9wOiAyMCU7XFxufVxcblxcbi5wYWdlLWNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhyLWxpZ2h0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaWRlZHJhd2VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzMjQzNjtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwO1xcbn1cXG5cXG4uc2lkZWRyYXdlci1oZWFkZXItdGV4dCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAzMDtcXG4gICAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXFxuICAgIG1hcmdpbi10b3A6IDEwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlZHJhd2VyLWljb24ge1xcbiAgICBmb250LXNpemU6IDE4O1xcbiAgICB3aWR0aDogNDA7XFxuICAgIGhlaWdodDogMzA7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmctbGVmdDogMjA7XFxuICAgIGZvbnQtc2l6ZTogMTg7XFxuICAgIGhlaWdodDogNjA7XFxufVxcblxcbi5zaWRlZHJhd2VyLWl0ZW0ge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbn1cIiwgXCJcIl0pO1xuXG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyL2xpc3R2aWV3LWRpcmVjdGl2ZXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL2FuZ3VsYXIvY2FsZW5kYXItZGlyZWN0aXZlc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhci9jaGFydC1kaXJlY3RpdmVzXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyL2RhdGFmb3JtLWRpcmVjdGl2ZXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZS9hbmd1bGFyL2F1dG9jb21wbGV0ZS1kaXJlY3RpdmVzXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyL2dhdWdlcy1kaXJlY3RpdmVzXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9tZW51L21lbnUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBPZmZlcnNDb21wb25lbnQgfSBmcm9tIFwiLi9vZmZlcnMvb2ZmZXJzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUG9pbnRzQ29tcG9uZW50IH0gZnJvbSBcIi4vcG9pbnRzL3BvaW50cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZWZlcnJhbENvbXBvbmVudCB9IGZyb20gXCIuL3JlZmVycmFsL3JlZmVycmFsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tIFwiLi9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnRcIjtcbmltcG9ydCB7IENyaWNrZXRDb21wb25lbnQgfSBmcm9tIFwiLi9jcmlja2V0L2NyaWNrZXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb250ZXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29udGVzdC9jb250ZXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTXlDb250ZXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vbXljb250ZXN0L215Y29udGVzdC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBNZW51Q29tcG9uZW50LFxuICAgICAgICBPZmZlcnNDb21wb25lbnQsXG4gICAgICAgIFBvaW50c0NvbXBvbmVudCxcbiAgICAgICAgUHJvZmlsZUNvbXBvbmVudCxcbiAgICAgICAgUmVmZXJyYWxDb21wb25lbnQsXG4gICAgICAgIFNldHRpbmdzQ29tcG9uZW50LFxuICAgICAgICBDcmlja2V0Q29tcG9uZW50LFxuICAgICAgICBDb250ZXN0Q29tcG9uZW50LFxuICAgICAgICBNeUNvbnRlc3RDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIlNlZ21lbnRlZEJhciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xcclxcbiAgICBoZWlnaHQ6IDQwO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1wYW5lbHtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgXFxyXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxyXFxuICAgIG1hcmdpbjogMTU7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbi1sYWJlbHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24tYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzhmOTFkZTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jb250ZXN0LWluZm9ybWF0aW9uIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyNTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDU7XFxyXFxuICAgIGNvbG9yOiAjMDMyNDM2O1xcclxcbiAgICBmb250LXNpemU6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0tdGV4dCB7XFxyXFxuICAgIGNvbG9yOiAjZmZmXFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGY5MWRlO1xcclxcbiAgICBwYWRkaW5nOiAzMCAyMCA2MCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1waG90by1jb250YWluZXIge1xcclxcbiAgICBib3JkZXItd2lkdGg6IDEuNTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHBhZGRpbmc6IDU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5wcm9maWxlX19waG90byB7XFxyXFxuICAgIHdpZHRoOiA3MDtcXHJcXG4gICAgaGVpZ2h0OiA3MDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGUtaW5mb3JtYXRpb24tY29udGFpbmVyIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDAgMjA7XFxyXFxufVxcclxcblxcclxcbi5wcm9maWxlX19uYW1lIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNTtcXHJcXG4gICAgZm9udC1zaXplOiAxODtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGVfX2VtYWlsIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYXdlci1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDI0O1xcclxcbiAgICBtYXJnaW46IC00NSAzMCAxNSAxNTtcXHJcXG59XFxyXFxuXFxyXFxuLm93ZS1kYXNoYm9hcmQge1xcclxcbiAgICBwYWRkaW5nOiAwIDEwO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMzU7XFxyXFxufVxcclxcblxcclxcbi5vd2UtZGFzaGJvYXJkLWl0ZW0ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAxMCAxMCAxNTtcXHJcXG4gICAgbWFyZ2luOiAwIDY7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzO1xcclxcbn1cXHJcXG5cXHJcXG4ub3dlLWRhc2hib2FyZC1pdGVtLmFjdGl2ZSB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2JmOTdkZjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhc2hib2FyZF9faW5kaWNhdG9yIHtcXHJcXG4gICAgd2lkdGg6IDEwO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDI7XFxyXFxufVxcclxcblxcclxcbi5kYXNoYm9hcmQtdGl0bGVfX3RleHQge1xcclxcbiAgICBmb250LXNpemU6IDE0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGFzYm9hcmQtdmFsdWUge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxyXFxufVxcclxcblxcclxcbi5kYXNib2FyZC12YWx1ZS50b3RhbCB7XFxyXFxuICAgIGNvbG9yOiAjOGY5MWRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFzYm9hcmQtdmFsdWUub3dlIHtcXHJcXG4gICAgY29sb3I6ICNmNjc5Nzk7XFxyXFxufVxcclxcblxcclxcbi5kYXNib2FyZC12YWx1ZS5vd2VkIHtcXHJcXG4gICAgY29sb3I6ICM3OGQ0OWE7XFxyXFxufVxcclxcblxcclxcbi5vd2UtbGlzdCB7XFxyXFxuICAgIG1hcmdpbjogMCAxNSAxNTtcXHJcXG59XFxyXFxuXFxyXFxuLm93ZS1saXN0LWl0ZW0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ub3dlLW1haW4taW5mbyB7XFxyXFxuICAgIHBhZGRpbmc6IDEwIDE1O1xcclxcbn1cXHJcXG5cXHJcXG4ub3dlLWNhdGVnb3J5LWljb24ge1xcclxcbiAgICB3aWR0aDogNDU7XFxyXFxuICAgIGhlaWdodDogNDU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTU7XFxyXFxufVxcclxcblxcclxcbi5vd2UtaW5mby1jb250YWluZXIge1xcclxcbiAgICBjb2xvcjogI2FjYWNhYztcXHJcXG4gICAgZm9udC1zaXplOiAxMztcXHJcXG59XFxyXFxuXFxyXFxuLm93ZS10aXRsZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDU7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBmb250LXNpemU6IDE1O1xcclxcbn1cXHJcXG5cXHJcXG4ubGVuZGVyLW5hbWUsXFxyXFxuLmRlYnRvci1uYW1lIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY29sb3I6ICM4ZjkxZGU7XFxyXFxufVxcclxcblxcclxcbi5vd2UtYW1tb3VudCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiAjZjY3OTc5O1xcclxcbn1cXHJcXG5cXHJcXG4ub3dlZC1hbW1vdW50IHtcXHJcXG4gICAgY29sb3I6ICM3OGQ0OWE7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5wYXktYW1vdW50IHtcXHJcXG4gICAgY29sb3I6ICM4ZjkxZGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTU7XFxyXFxufVxcclxcblxcclxcbi5vd2Utc2Vjb25kYXJ5LWluZm8ge1xcclxcbiAgICBwYWRkaW5nOiA1IDE1O1xcclxcbiAgICBjb2xvcjogI2FjYWNhYztcXHJcXG4gICAgZm9udC1zaXplOiAxNDtcXHJcXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMTtcXHJcXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2U5ZTllOTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlYnRvci1saXN0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTA7XFxyXFxufVxcclxcblxcclxcbi5kZWJ0b3ItbGlzdC1pdGVtIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTA7XFxyXFxufVxcclxcblxcclxcbi5kZWJ0b3ItbGlzdC1pdGVtLWltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDMwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMjtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uc2V0dGxlLXVwLWljb24ge1xcclxcbiAgICB3aWR0aDogMTI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGl2aWRlciB7XFxyXFxuICAgIGhlaWdodDogMTU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU3ZTc7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhmOTFkZTtcXHJcXG4gICAgd2lkdGg6IDcwO1xcclxcbiAgICBoZWlnaHQ6IDcwO1xcclxcbiAgICBmb250LXNpemU6IDUwO1xcclxcbiAgICBwYWRkaW5nOiAwIDAgODtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNTtcXHJcXG59XFxyXFxuXFxyXFxuLm93ZS1saXN0LWZpbHRlciB7XFxyXFxuICAgIG1hcmdpbjogMjUgMTUgMTU7XFxyXFxufVxcclxcblxcclxcbi5vd2UtbGlzdC1maWx0ZXItaXRlbSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyNTtcXHJcXG59XFxyXFxuXFxyXFxuLm93ZS1saXN0LWZpbHRlcl9faWNvbiB7XFxyXFxuICAgIHdpZHRoOiAxNDtcXHJcXG4gICAgaGVpZ2h0OiAxNDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuLm93ZS1saXN0LWZpbHRlcl9fdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTU7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogY29sbGFwc2VkO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZS1vcGFjaXR5IHtcXHJcXG4gICAgb3BhY2l0eTogLjI7XFxyXFxufVxcclxcblxcclxcbi5ub3QtYWN0aXZlIHtcXHJcXG4gICAgb3BhY2l0eTogLjU7XFxyXFxufVxcclxcblxcclxcbi5kZWZhdWx0LWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnktaWNvbi1kZXRhaWwge1xcclxcbiAgICB3aWR0aDogNDA7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjA7XFxyXFxufVxcclxcblxcclxcbi5wcmljZS1kZXRhaWwge1xcclxcbiAgICBmb250LXNpemU6IDI1O1xcclxcbiAgICBjb2xvcjogIzhmOTFkZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDE0O1xcclxcbiAgICBtYXJnaW46IDE1IDA7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWwtc2VjdGlvbiB7XFxyXFxuICAgIG1hcmdpbjogMjAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbC1zZWN0aW9uX190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsLXBob3RvIHtcXHJcXG4gICAgd2lkdGg6IDQ1O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFpZC1wcmljZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxyXFxufVxcclxcblxcclxcbi5uby1tYXJnaW4ge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5vd2UtYXJyb3cge1xcclxcbiAgICB3aWR0aDogMzA7XFxyXFxuICAgIG1hcmdpbjogMTAgNTtcXHJcXG59XFxyXFxuXFxyXFxuLm93ZS1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNDtcXHJcXG4gICAgbWFyZ2luOiA1IDA7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWwtb3dlLWFtbW91bnQge1xcclxcbiAgICBmb250LXNpemU6IDE2O1xcclxcbiAgICBtYXJnaW46IDE1O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsLW93ZS1hbW1vdW50Lm93ZSB7XFxyXFxuICAgIGNvbG9yOiAjZjY3OTc5O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsLW93ZS1hbW1vdW50IC5zZXR0bGUge1xcclxcbiAgICBjb2xvcjogI2I4YjhiODtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi5kZWZhdWx0LWJ1dHRvbiB7ICAgIFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGY5MWRlO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogMTQgMTA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5zZXR0bGVkLXVwLXRleHQge1xcclxcbiAgICBjb2xvcjogI2I4YjhiODtcXHJcXG4gICAgZm9udC1zaXplOiAxMztcXHJcXG4gICAgbWFyZ2luLXRvcDogNTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhcy1wYWlkLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDE0O1xcclxcbiAgICBtYXJnaW46IDE1O1xcclxcbn1cXHJcXG5cXHJcXG4uaGlzdG9yeS1kYXRlIHtcXHJcXG4gICAgY29sb3I6ICNiOGI4Yjg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTY7XFxyXFxuICAgIG1hcmdpbjogLTUgMCAxNTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udHJvbCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2FjYWNhYztcXHJcXG4gICAgZm9udC1zaXplOiAyMjtcXHJcXG4gICAgcGFkZGluZzogMTAgNTtcXHJcXG59XFxyXFxuXFxyXFxuLmhyLWxpZ2h0IHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2FjYWNhYztcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udHJvbC5wcmljZSB7XFxyXFxuICAgIGNvbG9yOiAjOGY5MWRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb250cm9sLnNwbGl0LXByaWNlIHtcXHJcXG4gICAgd2lkdGg6IDEyMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0taWNvbiB7XFxyXFxuICAgIHdpZHRoOiAyMDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0taWNvbi5jYXRlZ29yeSB7XFxyXFxuICAgIHdpZHRoOiAzMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1yb3cge1xcclxcbiAgICBtYXJnaW46IDAgMCAxNTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbS1kcmF3ZXItY29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDAgMjAgMjA7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeS1kcmF3ZXItaXRlbSB7XFxyXFxuICAgIG1hcmdpbjogOCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnktZHJhd2VyX190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VnZ2VzdGlvbi1pdGVtIHtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcclxcbiAgICBib3JkZXItY29sb3I6ICNiOGI4Yjg7IFxcclxcbiAgICBwYWRkaW5nOiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuI2ltYWdlUGlja2VyUmVzdWx0IHtcXHJcXG4gICAgd2lkdGg6IDEwMDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUwO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDE7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2JmOTdkZjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGVkcmF3ZXItbGVmdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5zaWRlZHJhd2VyLWNvbnRlbnQge1xcclxcbiAgICBtYXJnaW4tdG9wOiA0MDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGVkcmF3ZXItbGlzdC1pdGVtLXRleHQge1xcclxcbiAgICBwYWRkaW5nOiAyMDtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjYmY5N2RmO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtMTtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0bywgKlxcXCI+XFxyXFxuICAgIDxNZW51PjwvTWVudT5cXHJcXG4gICAgPExhYmVsIGNsYXNzPVxcXCJhY3Rpb24tYmFyLWxhYmVsXFxcIiB0ZXh0PVxcXCJDb250ZXN0IGRldGFpbHNcXFwiPjwvTGFiZWw+XFxyXFxuPC9HcmlkTGF5b3V0PlxcclxcblxcclxcbjxTdGFja0xheW91dCByb3c9XFxcIjFcXFwiIHN0eWxlPVxcXCJwYWRkaW5nLXRvcDogMjBcXFwiPlxcclxcbiAgICA8U2VnbWVudGVkQmFyIFtpdGVtc109XFxcIml0ZW1zXFxcIiAoc2VsZWN0ZWRJbmRleENoYW5nZSk9XFxcIm9uU2VsZWN0ZWRJbmRleENoYW5nZSgkZXZlbnQpXFxcIj48L1NlZ21lbnRlZEJhcj5cXHJcXG4gICAgPEdyaWRMYXlvdXQgW3Zpc2liaWxpdHldPVxcXCJzZWxlY3RlZEluZGV4ID09PSAwID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlZCdcXFwiPlxcclxcbiAgICAgICAgPEdyaWRMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgPFNjcm9sbFZpZXcgYmFja2dyb3VuZENvbG9yPVxcXCIjZThlN2U3XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cXFwiY29sdW1uXFxcIiBjbGFzcz1cXFwib3dlLWxpc3RcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiI2U4ZTdlN1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgc3R5bGU9XFxcImhlaWdodDogMTVcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgaWQ9XFxcIml0ZW0xXFxcIiBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIGNsYXNzPVxcXCJvd2UtbGlzdC1pdGVtXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0b1xcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIGhlaWdodD1cXFwiYXV0b1xcXCIgY2xhc3M9XFxcIm93ZS1tYWluLWluZm9cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJ0b3BcXFwiICh0YXApPVxcXCJ0b2dnbGVMZWFkZXJCb2FyZCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiBzcmM9XFxcIn4vQXNzZXRzL2F1c3RyYWxpYS5qcGdcXFwiIGNsYXNzPVxcXCJvd2UtY2F0ZWdvcnktaWNvblxcXCI+PC9JbWFnZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIGNsYXNzPVxcXCJvd2UtaW5mby1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0b1xcXCIgcm93cz1cXFwiYXV0b1xcXCIgd2lkdGg9XFxcIjEwMCVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJDb250ZXN0IElkOiA0MTY5OFxcXCIgY2xhc3M9XFxcImxlbmRlci1uYW1lXFxcIiBjbGFzcz1cXFwiY29udGVzdC1pbmZvcm1hdGlvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMlxcXCIgc3JjPVxcXCJ+L0Fzc2V0cy9zcmktbGFua2EuanBnXFxcIiBjbGFzcz1cXFwib3dlLWNhdGVnb3J5LWljb25cXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiZGl2aWRlclxcXCIgdGV4dD1cXFwiXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcclxcbiAgICAgICAgICAgIDwvU2Nyb2xsVmlldz5cXHJcXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgc3R5bGU9XFxcInBhZGRpbmctdG9wOiAxMjBcXFwiICpuZ0lmPVxcXCJ0b1Nob3dMZWFkZXJCb2FyZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJMZWFkZXIgYm9hcmQgaGVyZVxcXCIgY2xhc3M9XFxcIm0tMTUgaDMgcC01IHRleHQtY2VudGVyXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgPEdyaWRMYXlvdXQgW3Zpc2liaWxpdHldPVxcXCJzZWxlY3RlZEluZGV4ID09PSAxID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlZCdcXFwiPlxcclxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIk15IHRlYW0gaGVyZVxcXCIgY2xhc3M9XFxcIm0tMTUgaDMgcC01IHRleHQtY2VudGVyXFxcIj48L0xhYmVsPlxcclxcbiAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuPC9TdGFja0xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBTZWdtZW50ZWRCYXJJdGVtLCBTZWdtZW50ZWRCYXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWdtZW50ZWQtYmFyL3NlZ21lbnRlZC1iYXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiQ29udGVzdFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb250ZXN0LmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vY29udGVzdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29udGVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbXM6IEFycmF5PFNlZ21lbnRlZEJhckl0ZW0+O1xuICAgIHNlbGVjdGVkSW5kZXggPSAwO1xuICAgIHRvU2hvd0xlYWRlckJvYXJkID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgbGV0IHNlZ21lbnRlZEJhckl0ZW0gPSA8U2VnbWVudGVkQmFySXRlbT5uZXcgU2VnbWVudGVkQmFySXRlbSgpO1xuICAgICAgICBzZWdtZW50ZWRCYXJJdGVtLnRpdGxlID0gXCJDb250ZXN0XCI7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChzZWdtZW50ZWRCYXJJdGVtKTtcbiAgICAgICAgc2VnbWVudGVkQmFySXRlbSA9IDxTZWdtZW50ZWRCYXJJdGVtPm5ldyBTZWdtZW50ZWRCYXJJdGVtKCk7XG4gICAgICAgIHNlZ21lbnRlZEJhckl0ZW0udGl0bGUgPSBcIk15IFRlYW1cIjtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHNlZ21lbnRlZEJhckl0ZW0pO1xuICAgIH1cblxuICAgIG9uU2VsZWN0ZWRJbmRleENoYW5nZShhcmdzKSB7XG4gICAgICAgIGxldCBzZWdtZW50ZWRCYXIgPSA8U2VnbWVudGVkQmFyPmFyZ3Mub2JqZWN0O1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBzZWdtZW50ZWRCYXIuc2VsZWN0ZWRJbmRleDtcbiAgICB9XG5cbiAgICB0b2dnbGVMZWFkZXJCb2FyZCgpIHtcbiAgICAgICAgdGhpcy50b1Nob3dMZWFkZXJCb2FyZCA9ICF0aGlzLnRvU2hvd0xlYWRlckJvYXJkO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1wYW5lbHtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgXFxyXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxyXFxuICAgIG1hcmdpbjogMTU7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbi1sYWJlbHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24tYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzhmOTFkZTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi50aW1lLWluZm9ybWF0aW9uIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA0MDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDE1O1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbiAgICBmb250LXNpemU6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0tdGV4dCB7XFxyXFxuICAgIGNvbG9yOiAjZmZmXFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGY5MWRlO1xcclxcbiAgICBwYWRkaW5nOiAzMCAyMCA2MCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1waG90by1jb250YWluZXIge1xcclxcbiAgICBib3JkZXItd2lkdGg6IDEuNTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHBhZGRpbmc6IDU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5wcm9maWxlX19waG90byB7XFxyXFxuICAgIHdpZHRoOiA3MDtcXHJcXG4gICAgaGVpZ2h0OiA3MDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGUtaW5mb3JtYXRpb24tY29udGFpbmVyIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDAgMjA7XFxyXFxufVxcclxcblxcclxcbi5wcm9maWxlX19uYW1lIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNTtcXHJcXG4gICAgZm9udC1zaXplOiAxODtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGVfX2VtYWlsIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYXdlci1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDI0O1xcclxcbiAgICBtYXJnaW46IC00NSAzMCAxNSAxNTtcXHJcXG59XFxyXFxuXFxyXFxuLm93ZS1kYXNoYm9hcmQge1xcclxcbiAgICBwYWRkaW5nOiAwIDEwO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMzU7XFxyXFxufVxcclxcblxcclxcbi5vd2UtZGFzaGJvYXJkLWl0ZW0ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAxMCAxMCAxNTtcXHJcXG4gICAgbWFyZ2luOiAwIDY7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzO1xcclxcbn1cXHJcXG5cXHJcXG4ub3dlLWRhc2hib2FyZC1pdGVtLmFjdGl2ZSB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2JmOTdkZjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhc2hib2FyZF9faW5kaWNhdG9yIHtcXHJcXG4gICAgd2lkdGg6IDEwO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDI7XFxyXFxufVxcclxcblxcclxcbi5kYXNoYm9hcmQtdGl0bGVfX3RleHQge1xcclxcbiAgICBmb250LXNpemU6IDE0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGFzYm9hcmQtdmFsdWUge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxyXFxufVxcclxcblxcclxcbi5kYXNib2FyZC12YWx1ZS50b3RhbCB7XFxyXFxuICAgIGNvbG9yOiAjOGY5MWRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFzYm9hcmQtdmFsdWUub3dlIHtcXHJcXG4gICAgY29sb3I6ICNmNjc5Nzk7XFxyXFxufVxcclxcblxcclxcbi5kYXNib2FyZC12YWx1ZS5vd2VkIHtcXHJcXG4gICAgY29sb3I6ICM3OGQ0OWE7XFxyXFxufVxcclxcblxcclxcbi5vd2UtbGlzdCB7XFxyXFxuICAgIG1hcmdpbjogMCAxNSAxNTtcXHJcXG59XFxyXFxuXFxyXFxuLm93ZS1saXN0LWl0ZW0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ub3dlLW1haW4taW5mbyB7XFxyXFxuICAgIHBhZGRpbmc6IDEwIDE1O1xcclxcbn1cXHJcXG5cXHJcXG4ub3dlLWNhdGVnb3J5LWljb24ge1xcclxcbiAgICB3aWR0aDogNDU7XFxyXFxuICAgIGhlaWdodDogNDU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTU7XFxyXFxufVxcclxcblxcclxcbi5vd2UtaW5mby1jb250YWluZXIge1xcclxcbiAgICBjb2xvcjogI2FjYWNhYztcXHJcXG4gICAgZm9udC1zaXplOiAxMztcXHJcXG59XFxyXFxuXFxyXFxuLm93ZS10aXRsZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDU7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBmb250LXNpemU6IDE1O1xcclxcbn1cXHJcXG5cXHJcXG4ubGVuZGVyLW5hbWUsXFxyXFxuLmRlYnRvci1uYW1lIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY29sb3I6ICM4ZjkxZGU7XFxyXFxufVxcclxcblxcclxcbi5vd2UtYW1tb3VudCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiAjZjY3OTc5O1xcclxcbn1cXHJcXG5cXHJcXG4ub3dlZC1hbW1vdW50IHtcXHJcXG4gICAgY29sb3I6ICM3OGQ0OWE7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5wYXktYW1vdW50IHtcXHJcXG4gICAgY29sb3I6ICM4ZjkxZGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTU7XFxyXFxufVxcclxcblxcclxcbi5vd2Utc2Vjb25kYXJ5LWluZm8ge1xcclxcbiAgICBwYWRkaW5nOiA1IDE1O1xcclxcbiAgICBjb2xvcjogI2FjYWNhYztcXHJcXG4gICAgZm9udC1zaXplOiAxNDtcXHJcXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMTtcXHJcXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2U5ZTllOTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlYnRvci1saXN0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTA7XFxyXFxufVxcclxcblxcclxcbi5kZWJ0b3ItbGlzdC1pdGVtIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTA7XFxyXFxufVxcclxcblxcclxcbi5kZWJ0b3ItbGlzdC1pdGVtLWltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDMwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMjtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uc2V0dGxlLXVwLWljb24ge1xcclxcbiAgICB3aWR0aDogMTI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGl2aWRlciB7XFxyXFxuICAgIGhlaWdodDogMTU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU3ZTc7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhmOTFkZTtcXHJcXG4gICAgd2lkdGg6IDcwO1xcclxcbiAgICBoZWlnaHQ6IDcwO1xcclxcbiAgICBmb250LXNpemU6IDUwO1xcclxcbiAgICBwYWRkaW5nOiAwIDAgODtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNTtcXHJcXG59XFxyXFxuXFxyXFxuLm93ZS1saXN0LWZpbHRlciB7XFxyXFxuICAgIG1hcmdpbjogMjUgMTUgMTU7XFxyXFxufVxcclxcblxcclxcbi5vd2UtbGlzdC1maWx0ZXItaXRlbSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyNTtcXHJcXG59XFxyXFxuXFxyXFxuLm93ZS1saXN0LWZpbHRlcl9faWNvbiB7XFxyXFxuICAgIHdpZHRoOiAxNDtcXHJcXG4gICAgaGVpZ2h0OiAxNDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuLm93ZS1saXN0LWZpbHRlcl9fdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTU7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogY29sbGFwc2VkO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZS1vcGFjaXR5IHtcXHJcXG4gICAgb3BhY2l0eTogLjI7XFxyXFxufVxcclxcblxcclxcbi5ub3QtYWN0aXZlIHtcXHJcXG4gICAgb3BhY2l0eTogLjU7XFxyXFxufVxcclxcblxcclxcbi5kZWZhdWx0LWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnktaWNvbi1kZXRhaWwge1xcclxcbiAgICB3aWR0aDogNDA7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjA7XFxyXFxufVxcclxcblxcclxcbi5wcmljZS1kZXRhaWwge1xcclxcbiAgICBmb250LXNpemU6IDI1O1xcclxcbiAgICBjb2xvcjogIzhmOTFkZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDE0O1xcclxcbiAgICBtYXJnaW46IDE1IDA7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWwtc2VjdGlvbiB7XFxyXFxuICAgIG1hcmdpbjogMjAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbC1zZWN0aW9uX190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsLXBob3RvIHtcXHJcXG4gICAgd2lkdGg6IDQ1O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFpZC1wcmljZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxyXFxufVxcclxcblxcclxcbi5uby1tYXJnaW4ge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5vd2UtYXJyb3cge1xcclxcbiAgICB3aWR0aDogMzA7XFxyXFxuICAgIG1hcmdpbjogMTAgNTtcXHJcXG59XFxyXFxuXFxyXFxuLm93ZS1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNDtcXHJcXG4gICAgbWFyZ2luOiA1IDA7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWwtb3dlLWFtbW91bnQge1xcclxcbiAgICBmb250LXNpemU6IDE2O1xcclxcbiAgICBtYXJnaW46IDE1O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsLW93ZS1hbW1vdW50Lm93ZSB7XFxyXFxuICAgIGNvbG9yOiAjZjY3OTc5O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsLW93ZS1hbW1vdW50IC5zZXR0bGUge1xcclxcbiAgICBjb2xvcjogI2I4YjhiODtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi5kZWZhdWx0LWJ1dHRvbiB7ICAgIFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGY5MWRlO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogMTQgMTA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5zZXR0bGVkLXVwLXRleHQge1xcclxcbiAgICBjb2xvcjogI2I4YjhiODtcXHJcXG4gICAgZm9udC1zaXplOiAxMztcXHJcXG4gICAgbWFyZ2luLXRvcDogNTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhcy1wYWlkLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDE0O1xcclxcbiAgICBtYXJnaW46IDE1O1xcclxcbn1cXHJcXG5cXHJcXG4uaGlzdG9yeS1kYXRlIHtcXHJcXG4gICAgY29sb3I6ICNiOGI4Yjg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTY7XFxyXFxuICAgIG1hcmdpbjogLTUgMCAxNTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udHJvbCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2FjYWNhYztcXHJcXG4gICAgZm9udC1zaXplOiAyMjtcXHJcXG4gICAgcGFkZGluZzogMTAgNTtcXHJcXG59XFxyXFxuXFxyXFxuLmhyLWxpZ2h0IHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2FjYWNhYztcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udHJvbC5wcmljZSB7XFxyXFxuICAgIGNvbG9yOiAjOGY5MWRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb250cm9sLnNwbGl0LXByaWNlIHtcXHJcXG4gICAgd2lkdGg6IDEyMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0taWNvbiB7XFxyXFxuICAgIHdpZHRoOiAyMDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0taWNvbi5jYXRlZ29yeSB7XFxyXFxuICAgIHdpZHRoOiAzMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1yb3cge1xcclxcbiAgICBtYXJnaW46IDAgMCAxNTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbS1kcmF3ZXItY29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDAgMjAgMjA7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeS1kcmF3ZXItaXRlbSB7XFxyXFxuICAgIG1hcmdpbjogOCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnktZHJhd2VyX190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VnZ2VzdGlvbi1pdGVtIHtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcclxcbiAgICBib3JkZXItY29sb3I6ICNiOGI4Yjg7IFxcclxcbiAgICBwYWRkaW5nOiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuI2ltYWdlUGlja2VyUmVzdWx0IHtcXHJcXG4gICAgd2lkdGg6IDEwMDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUwO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDE7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2JmOTdkZjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGVkcmF3ZXItbGVmdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5zaWRlZHJhd2VyLWNvbnRlbnQge1xcclxcbiAgICBtYXJnaW4tdG9wOiA0MDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGVkcmF3ZXItbGlzdC1pdGVtLXRleHQge1xcclxcbiAgICBwYWRkaW5nOiAyMDtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjYmY5N2RmO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtMTtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFNjcm9sbFZpZXcgYmFja2dyb3VuZENvbG9yPVxcXCIjZThlN2U3XFxcIj5cXHJcXG4gICAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cXFwiY29sdW1uXFxcIiBjbGFzcz1cXFwib3dlLWxpc3RcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiI2U4ZTdlN1xcXCI+XFxyXFxuICAgICAgICA8U3RhY2tMYXlvdXQgc3R5bGU9XFxcImhlaWdodDogMTVcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICA8U3RhY2tMYXlvdXQgaWQ9XFxcIml0ZW0xXFxcIiBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIGNsYXNzPVxcXCJvd2UtbGlzdC1pdGVtXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCI+XFxyXFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgbnNSb3V0ZXJMaW5rPVxcXCIvY29udGVzdFxcXCIgY29sdW1ucz1cXFwiYXV0bywgKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0b1xcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIGhlaWdodD1cXFwiYXV0b1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcIm93ZS1tYWluLWluZm9cXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJ0b3BcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIHNyYz1cXFwifi9Bc3NldHMvc291dGgtYWZyaWNhLmpwZ1xcXCIgY2xhc3M9XFxcIm93ZS1jYXRlZ29yeS1pY29uXFxcIj48L0ltYWdlPlxcclxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgY2xhc3M9XFxcIm93ZS1pbmZvLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvXFxcIiByb3dzPVxcXCJhdXRvXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIjNoIDI1bSBsZWZ0XFxcIiBjbGFzcz1cXFwibGVuZGVyLW5hbWVcXFwiIGNsYXNzPVxcXCJ0aW1lLWluZm9ybWF0aW9uXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPEltYWdlIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIyXFxcIiBzcmM9XFxcIn4vQXNzZXRzL2F1c3RyYWxpYS5qcGdcXFwiIGNsYXNzPVxcXCJvd2UtY2F0ZWdvcnktaWNvblxcXCI+PC9JbWFnZT5cXHJcXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJkaXZpZGVyXFxcIiB0ZXh0PVxcXCJcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGlkPVxcXCJpdGVtMlxcXCIgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiBjbGFzcz1cXFwib3dlLWxpc3QtaXRlbVxcXCIgd2lkdGg9XFxcIjEwMCVcXFwiPlxcclxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IG5zUm91dGVyTGluaz1cXFwiL2NvbnRlc3RcXFwiIGNvbHVtbnM9XFxcImF1dG8sICosIGF1dG9cXFwiIHJvd3M9XFxcImF1dG9cXFwiIHdpZHRoPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcImF1dG9cXFwiXFxyXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJvd2UtbWFpbi1pbmZvXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwidG9wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPEltYWdlIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiBzcmM9XFxcIn4vQXNzZXRzL2VuZ2xhbmQuanBnXFxcIiBjbGFzcz1cXFwib3dlLWNhdGVnb3J5LWljb25cXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiBjbGFzcz1cXFwib3dlLWluZm8tY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG9cXFwiIHJvd3M9XFxcImF1dG9cXFwiIHdpZHRoPVxcXCIxMDAlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiMmQgNWggMm0gbGVmdFxcXCIgY2xhc3M9XFxcImxlbmRlci1uYW1lXFxcIiBjbGFzcz1cXFwidGltZS1pbmZvcm1hdGlvblxcXCIgcm93PVxcXCIwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w9XFxcIjBcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDxJbWFnZSByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMlxcXCIgc3JjPVxcXCJ+L0Fzc2V0cy9zcmktbGFua2EuanBnXFxcIiBjbGFzcz1cXFwib3dlLWNhdGVnb3J5LWljb25cXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiZGl2aWRlclxcXCIgdGV4dD1cXFwiXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgIDxTdGFja0xheW91dCBpZD1cXFwiaXRlbTNcXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgY2xhc3M9XFxcIm93ZS1saXN0LWl0ZW1cXFwiIHdpZHRoPVxcXCIxMDAlXFxcIj5cXHJcXG4gICAgICAgICAgICA8R3JpZExheW91dCBuc1JvdXRlckxpbms9XFxcIi9jb250ZXN0XFxcIiBjb2x1bW5zPVxcXCJhdXRvLCAqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCIgaGVpZ2h0PVxcXCJhdXRvXFxcIlxcclxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwib3dlLW1haW4taW5mb1xcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcInRvcFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxJbWFnZSByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgc3JjPVxcXCJ+L0Fzc2V0cy9hdXN0cmFsaWEuanBnXFxcIiBjbGFzcz1cXFwib3dlLWNhdGVnb3J5LWljb25cXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiBjbGFzcz1cXFwib3dlLWluZm8tY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG9cXFwiIHJvd3M9XFxcImF1dG9cXFwiIHdpZHRoPVxcXCIxMDAlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiM2QgMjVtIGxlZnRcXFwiIGNsYXNzPVxcXCJsZW5kZXItbmFtZVxcXCIgY2xhc3M9XFxcInRpbWUtaW5mb3JtYXRpb25cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugcm93PVxcXCIwXFxcIiBjb2w9XFxcIjJcXFwiIHNyYz1cXFwifi9Bc3NldHMvc3JpLWxhbmthLmpwZ1xcXCIgY2xhc3M9XFxcIm93ZS1jYXRlZ29yeS1pY29uXFxcIj48L0ltYWdlPlxcclxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImRpdmlkZXJcXFwiIHRleHQ9XFxcIlxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICA8U3RhY2tMYXlvdXQgaWQ9XFxcIml0ZW00XFxcIiBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIGNsYXNzPVxcXCJvd2UtbGlzdC1pdGVtXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCI+XFxyXFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgbnNSb3V0ZXJMaW5rPVxcXCIvY29udGVzdFxcXCIgY29sdW1ucz1cXFwiYXV0bywgKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0b1xcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIGhlaWdodD1cXFwiYXV0b1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcIm93ZS1tYWluLWluZm9cXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJ0b3BcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIHNyYz1cXFwifi9Bc3NldHMvYmFuZ2xhZGVzaC5qcGdcXFwiIGNsYXNzPVxcXCJvd2UtY2F0ZWdvcnktaWNvblxcXCI+PC9JbWFnZT5cXHJcXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIGNsYXNzPVxcXCJvd2UtaW5mby1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0b1xcXCIgcm93cz1cXFwiYXV0b1xcXCIgd2lkdGg9XFxcIjEwMCVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCIxdyAyOW0gbGVmdFxcXCIgY2xhc3M9XFxcImxlbmRlci1uYW1lXFxcIiBjbGFzcz1cXFwidGltZS1pbmZvcm1hdGlvblxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDxJbWFnZSByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMlxcXCIgc3JjPVxcXCJ+L0Fzc2V0cy9zb3V0aC1hZnJpY2EuanBnXFxcIiBjbGFzcz1cXFwib3dlLWNhdGVnb3J5LWljb25cXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiZGl2aWRlclxcXCIgdGV4dD1cXFwiXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgIDxTdGFja0xheW91dCBpZD1cXFwiaXRlbTVcXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgY2xhc3M9XFxcIm93ZS1saXN0LWl0ZW1cXFwiIHdpZHRoPVxcXCIxMDAlXFxcIj5cXHJcXG4gICAgICAgICAgICA8R3JpZExheW91dCBuc1JvdXRlckxpbms9XFxcIi9jb250ZXN0XFxcIiBjb2x1bW5zPVxcXCJhdXRvLCAqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCIgaGVpZ2h0PVxcXCJhdXRvXFxcIlxcclxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwib3dlLW1haW4taW5mb1xcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcInRvcFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxJbWFnZSByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgc3JjPVxcXCJ+L0Fzc2V0cy9hdXN0cmFsaWEuanBnXFxcIiBjbGFzcz1cXFwib3dlLWNhdGVnb3J5LWljb25cXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiBjbGFzcz1cXFwib3dlLWluZm8tY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG9cXFwiIHJvd3M9XFxcImF1dG9cXFwiIHdpZHRoPVxcXCIxMDAlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiMncgM2ggMjVtIGxlZnRcXFwiIGNsYXNzPVxcXCJsZW5kZXItbmFtZVxcXCIgY2xhc3M9XFxcInRpbWUtaW5mb3JtYXRpb25cXFwiIHJvdz1cXFwiMFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sPVxcXCIwXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugcm93PVxcXCIwXFxcIiBjb2w9XFxcIjJcXFwiIHNyYz1cXFwifi9Bc3NldHMvYmFuZ2xhZGVzaC5qcGdcXFwiIGNsYXNzPVxcXCJvd2UtY2F0ZWdvcnktaWNvblxcXCI+PC9JbWFnZT5cXHJcXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJkaXZpZGVyXFxcIiB0ZXh0PVxcXCJcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICA8L0ZsZXhib3hMYXlvdXQ+XFxyXFxuPC9TY3JvbGxWaWV3PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkNyaWNrZXRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY3JpY2tldC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2NyaWNrZXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENyaWNrZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgdG9TaG93U2luZ2xlQ29udGVzdDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkge31cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiU2VnbWVudGVkQmFyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGZhbnRhc3k7XFxyXFxuICAgIGZvbnQtc2l6ZTogOTtcXHJcXG4gICAgaGVpZ2h0OiA0MDtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEdyaWRMYXlvdXQgcm93cz1cXFwiMzAsICpcXFwiPlxcbiAgICA8TWVudT48L01lbnU+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJPbmdvaW5nIGNvbnRlc3RzXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhci1sYWJlbFxcXCI+PC9MYWJlbD5cXG48L0dyaWRMYXlvdXQ+XFxuXFxuPFN0YWNrTGF5b3V0IHJvdz1cXFwiMVxcXCIgc3R5bGU9XFxcInBhZGRpbmctdG9wOiAzMFxcXCI+XFxuICAgIDxTZWdtZW50ZWRCYXIgW2l0ZW1zXT1cXFwiaXRlbXNcXFwiIChzZWxlY3RlZEluZGV4Q2hhbmdlKT1cXFwib25TZWxlY3RlZEluZGV4Q2hhbmdlKCRldmVudClcXFwiPjwvU2VnbWVudGVkQmFyPlxcbiAgICA8R3JpZExheW91dCBbdmlzaWJpbGl0eV09XFxcInNlbGVjdGVkSW5kZXggPT09IDAgPyAndmlzaWJsZScgOiAnY29sbGFwc2VkJ1xcXCI+XFxuICAgICAgICA8Q3JpY2tldD48L0NyaWNrZXQ+XFxuICAgIDwvR3JpZExheW91dD5cXG4gICAgPEdyaWRMYXlvdXQgW3Zpc2liaWxpdHldPVxcXCJzZWxlY3RlZEluZGV4ID09PSAxID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlZCdcXFwiPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIkZvb3RiYWxsIG1hdGNoZXMgaGVyZVxcXCIgY2xhc3M9XFxcIm0tMTUgaDMgcC01IHRleHQtY2VudGVyXFxcIj48L0xhYmVsPlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIDxHcmlkTGF5b3V0IFt2aXNpYmlsaXR5XT1cXFwic2VsZWN0ZWRJbmRleCA9PT0gMiA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZWQnXFxcIj5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJLYWJhZGRpIG1hdGNoZXMgaGVyZVxcXCIgY2xhc3M9XFxcIm0tMTUgaDMgcC01IHRleHQtY2VudGVyXFxcIj48L0xhYmVsPlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIDxHcmlkTGF5b3V0IFt2aXNpYmlsaXR5XT1cXFwic2VsZWN0ZWRJbmRleCA9PT0gMyA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZWQnXFxcIj5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJRdWl6ZXMgaGVyZVxcXCIgY2xhc3M9XFxcIm0tMTUgaDMgcC01IHRleHQtY2VudGVyXFxcIj48L0xhYmVsPlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuPC9TdGFja0xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBTZWdtZW50ZWRCYXJJdGVtLCBTZWdtZW50ZWRCYXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWdtZW50ZWQtYmFyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgaXRlbXM6IEFycmF5PFNlZ21lbnRlZEJhckl0ZW0+O1xuICAgIHNlbGVjdGVkSW5kZXggPSAwO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIGxldCBzZWdtZW50ZWRCYXJJdGVtID0gPFNlZ21lbnRlZEJhckl0ZW0+bmV3IFNlZ21lbnRlZEJhckl0ZW0oKTtcbiAgICAgICAgc2VnbWVudGVkQmFySXRlbS50aXRsZSA9IFwiQ3JpY2tldFwiO1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goc2VnbWVudGVkQmFySXRlbSk7XG4gICAgICAgIHNlZ21lbnRlZEJhckl0ZW0gPSA8U2VnbWVudGVkQmFySXRlbT5uZXcgU2VnbWVudGVkQmFySXRlbSgpO1xuICAgICAgICBzZWdtZW50ZWRCYXJJdGVtLnRpdGxlID0gXCJGb290YmFsbFwiO1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goc2VnbWVudGVkQmFySXRlbSk7XG4gICAgICAgIHNlZ21lbnRlZEJhckl0ZW0gPSA8U2VnbWVudGVkQmFySXRlbT5uZXcgU2VnbWVudGVkQmFySXRlbSgpO1xuICAgICAgICBzZWdtZW50ZWRCYXJJdGVtLnRpdGxlID0gXCJLYWJhZGRpXCI7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChzZWdtZW50ZWRCYXJJdGVtKTtcbiAgICAgICAgc2VnbWVudGVkQmFySXRlbSA9IDxTZWdtZW50ZWRCYXJJdGVtPm5ldyBTZWdtZW50ZWRCYXJJdGVtKCk7XG4gICAgICAgIHNlZ21lbnRlZEJhckl0ZW0udGl0bGUgPSBcIlF1aXplc1wiO1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goc2VnbWVudGVkQmFySXRlbSk7XG4gICAgfVxuXG4gICAgb25TZWxlY3RlZEluZGV4Q2hhbmdlKGFyZ3MpIHtcbiAgICAgICAgbGV0IHNlZ21lbnRlZEJhciA9IDxTZWdtZW50ZWRCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHNlZ21lbnRlZEJhci5zZWxlY3RlZEluZGV4O1xuICAgIH1cbn1cbiIsIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xuXG5lbmFibGVQcm9kTW9kZSgpO1xucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLm1lbnUtaWNvbiB7XFxuICAgIGZvbnQtc2l6ZTogMjY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMztcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG59IFwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0IHJvdz1cXFwiMFxcXCIgY29sdW1ucz1cXFwiYXV0bywgKlxcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPlxcbiAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCImI3hmMGM5O1xcXCIgY2xhc3M9XFxcImZhIG1lbnUtaWNvblxcXCIgKHRhcCk9XFxcIm9uRHJhd2VyQnV0dG9uVGFwKCRldmVudClcXFwiPjwvTGFiZWw+XFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJNZW51XCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL21lbnUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vbWVudS5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQge1xuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1wYW5lbHtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgXFxyXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxyXFxuICAgIG1hcmdpbjogMTU7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbi1sYWJlbHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24tYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzhmOTFkZTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jb250ZXN0LWluZm9ybWF0aW9uIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyNTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDU7XFxyXFxuICAgIGNvbG9yOiAjMDMyNDM2O1xcclxcbiAgICBmb250LXNpemU6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0tdGV4dCB7XFxyXFxuICAgIGNvbG9yOiAjZmZmXFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGY5MWRlO1xcclxcbiAgICBwYWRkaW5nOiAzMCAyMCA2MCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1waG90by1jb250YWluZXIge1xcclxcbiAgICBib3JkZXItd2lkdGg6IDEuNTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHBhZGRpbmc6IDU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5wcm9maWxlX19waG90byB7XFxyXFxuICAgIHdpZHRoOiA3MDtcXHJcXG4gICAgaGVpZ2h0OiA3MDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGUtaW5mb3JtYXRpb24tY29udGFpbmVyIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDAgMjA7XFxyXFxufVxcclxcblxcclxcbi5wcm9maWxlX19uYW1lIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNTtcXHJcXG4gICAgZm9udC1zaXplOiAxODtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGVfX2VtYWlsIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYXdlci1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDI0O1xcclxcbiAgICBtYXJnaW46IC00NSAzMCAxNSAxNTtcXHJcXG59XFxyXFxuXFxyXFxuLm93ZS1kYXNoYm9hcmQge1xcclxcbiAgICBwYWRkaW5nOiAwIDEwO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMzU7XFxyXFxufVxcclxcblxcclxcbi5vd2UtZGFzaGJvYXJkLWl0ZW0ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAxMCAxMCAxNTtcXHJcXG4gICAgbWFyZ2luOiAwIDY7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzO1xcclxcbn1cXHJcXG5cXHJcXG4ub3dlLWRhc2hib2FyZC1pdGVtLmFjdGl2ZSB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2JmOTdkZjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhc2hib2FyZF9faW5kaWNhdG9yIHtcXHJcXG4gICAgd2lkdGg6IDEwO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDI7XFxyXFxufVxcclxcblxcclxcbi5kYXNoYm9hcmQtdGl0bGVfX3RleHQge1xcclxcbiAgICBmb250LXNpemU6IDE0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGFzYm9hcmQtdmFsdWUge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxyXFxufVxcclxcblxcclxcbi5kYXNib2FyZC12YWx1ZS50b3RhbCB7XFxyXFxuICAgIGNvbG9yOiAjOGY5MWRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFzYm9hcmQtdmFsdWUub3dlIHtcXHJcXG4gICAgY29sb3I6ICNmNjc5Nzk7XFxyXFxufVxcclxcblxcclxcbi5kYXNib2FyZC12YWx1ZS5vd2VkIHtcXHJcXG4gICAgY29sb3I6ICM3OGQ0OWE7XFxyXFxufVxcclxcblxcclxcbi5vd2UtbGlzdCB7XFxyXFxuICAgIG1hcmdpbjogMCAxNSAxNTtcXHJcXG59XFxyXFxuXFxyXFxuLm93ZS1saXN0LWl0ZW0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ub3dlLW1haW4taW5mbyB7XFxyXFxuICAgIHBhZGRpbmc6IDEwIDE1O1xcclxcbn1cXHJcXG5cXHJcXG4ub3dlLWNhdGVnb3J5LWljb24ge1xcclxcbiAgICB3aWR0aDogNDU7XFxyXFxuICAgIGhlaWdodDogNDU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTU7XFxyXFxufVxcclxcblxcclxcbi5vd2UtaW5mby1jb250YWluZXIge1xcclxcbiAgICBjb2xvcjogI2FjYWNhYztcXHJcXG4gICAgZm9udC1zaXplOiAxMztcXHJcXG59XFxyXFxuXFxyXFxuLm93ZS10aXRsZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDU7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBmb250LXNpemU6IDE1O1xcclxcbn1cXHJcXG5cXHJcXG4ubGVuZGVyLW5hbWUsXFxyXFxuLmRlYnRvci1uYW1lIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY29sb3I6ICM4ZjkxZGU7XFxyXFxufVxcclxcblxcclxcbi5vd2UtYW1tb3VudCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiAjZjY3OTc5O1xcclxcbn1cXHJcXG5cXHJcXG4ub3dlZC1hbW1vdW50IHtcXHJcXG4gICAgY29sb3I6ICM3OGQ0OWE7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5wYXktYW1vdW50IHtcXHJcXG4gICAgY29sb3I6ICM4ZjkxZGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTU7XFxyXFxufVxcclxcblxcclxcbi5vd2Utc2Vjb25kYXJ5LWluZm8ge1xcclxcbiAgICBwYWRkaW5nOiA1IDE1O1xcclxcbiAgICBjb2xvcjogI2FjYWNhYztcXHJcXG4gICAgZm9udC1zaXplOiAxNDtcXHJcXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMTtcXHJcXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2U5ZTllOTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlYnRvci1saXN0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTA7XFxyXFxufVxcclxcblxcclxcbi5kZWJ0b3ItbGlzdC1pdGVtIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTA7XFxyXFxufVxcclxcblxcclxcbi5kZWJ0b3ItbGlzdC1pdGVtLWltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDMwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMjtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uc2V0dGxlLXVwLWljb24ge1xcclxcbiAgICB3aWR0aDogMTI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGl2aWRlciB7XFxyXFxuICAgIGhlaWdodDogMTU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU3ZTc7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhmOTFkZTtcXHJcXG4gICAgd2lkdGg6IDcwO1xcclxcbiAgICBoZWlnaHQ6IDcwO1xcclxcbiAgICBmb250LXNpemU6IDUwO1xcclxcbiAgICBwYWRkaW5nOiAwIDAgODtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNTtcXHJcXG59XFxyXFxuXFxyXFxuLm93ZS1saXN0LWZpbHRlciB7XFxyXFxuICAgIG1hcmdpbjogMjUgMTUgMTU7XFxyXFxufVxcclxcblxcclxcbi5vd2UtbGlzdC1maWx0ZXItaXRlbSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyNTtcXHJcXG59XFxyXFxuXFxyXFxuLm93ZS1saXN0LWZpbHRlcl9faWNvbiB7XFxyXFxuICAgIHdpZHRoOiAxNDtcXHJcXG4gICAgaGVpZ2h0OiAxNDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuLm93ZS1saXN0LWZpbHRlcl9fdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTU7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogY29sbGFwc2VkO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZS1vcGFjaXR5IHtcXHJcXG4gICAgb3BhY2l0eTogLjI7XFxyXFxufVxcclxcblxcclxcbi5ub3QtYWN0aXZlIHtcXHJcXG4gICAgb3BhY2l0eTogLjU7XFxyXFxufVxcclxcblxcclxcbi5kZWZhdWx0LWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnktaWNvbi1kZXRhaWwge1xcclxcbiAgICB3aWR0aDogNDA7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjA7XFxyXFxufVxcclxcblxcclxcbi5wcmljZS1kZXRhaWwge1xcclxcbiAgICBmb250LXNpemU6IDI1O1xcclxcbiAgICBjb2xvcjogIzhmOTFkZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDE0O1xcclxcbiAgICBtYXJnaW46IDE1IDA7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWwtc2VjdGlvbiB7XFxyXFxuICAgIG1hcmdpbjogMjAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbC1zZWN0aW9uX190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsLXBob3RvIHtcXHJcXG4gICAgd2lkdGg6IDQ1O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFpZC1wcmljZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxyXFxufVxcclxcblxcclxcbi5uby1tYXJnaW4ge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5vd2UtYXJyb3cge1xcclxcbiAgICB3aWR0aDogMzA7XFxyXFxuICAgIG1hcmdpbjogMTAgNTtcXHJcXG59XFxyXFxuXFxyXFxuLm93ZS1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNDtcXHJcXG4gICAgbWFyZ2luOiA1IDA7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWwtb3dlLWFtbW91bnQge1xcclxcbiAgICBmb250LXNpemU6IDE2O1xcclxcbiAgICBtYXJnaW46IDE1O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsLW93ZS1hbW1vdW50Lm93ZSB7XFxyXFxuICAgIGNvbG9yOiAjZjY3OTc5O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsLW93ZS1hbW1vdW50IC5zZXR0bGUge1xcclxcbiAgICBjb2xvcjogI2I4YjhiODtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi5kZWZhdWx0LWJ1dHRvbiB7ICAgIFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGY5MWRlO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogMTQgMTA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5zZXR0bGVkLXVwLXRleHQge1xcclxcbiAgICBjb2xvcjogI2I4YjhiODtcXHJcXG4gICAgZm9udC1zaXplOiAxMztcXHJcXG4gICAgbWFyZ2luLXRvcDogNTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhcy1wYWlkLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDE0O1xcclxcbiAgICBtYXJnaW46IDE1O1xcclxcbn1cXHJcXG5cXHJcXG4uaGlzdG9yeS1kYXRlIHtcXHJcXG4gICAgY29sb3I6ICNiOGI4Yjg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTY7XFxyXFxuICAgIG1hcmdpbjogLTUgMCAxNTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udHJvbCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2FjYWNhYztcXHJcXG4gICAgZm9udC1zaXplOiAyMjtcXHJcXG4gICAgcGFkZGluZzogMTAgNTtcXHJcXG59XFxyXFxuXFxyXFxuLmhyLWxpZ2h0IHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2FjYWNhYztcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udHJvbC5wcmljZSB7XFxyXFxuICAgIGNvbG9yOiAjOGY5MWRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb250cm9sLnNwbGl0LXByaWNlIHtcXHJcXG4gICAgd2lkdGg6IDEyMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0taWNvbiB7XFxyXFxuICAgIHdpZHRoOiAyMDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0taWNvbi5jYXRlZ29yeSB7XFxyXFxuICAgIHdpZHRoOiAzMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1yb3cge1xcclxcbiAgICBtYXJnaW46IDAgMCAxNTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbS1kcmF3ZXItY29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDAgMjAgMjA7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeS1kcmF3ZXItaXRlbSB7XFxyXFxuICAgIG1hcmdpbjogOCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnktZHJhd2VyX190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VnZ2VzdGlvbi1pdGVtIHtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcclxcbiAgICBib3JkZXItY29sb3I6ICNiOGI4Yjg7IFxcclxcbiAgICBwYWRkaW5nOiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuI2ltYWdlUGlja2VyUmVzdWx0IHtcXHJcXG4gICAgd2lkdGg6IDEwMDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUwO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDE7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2JmOTdkZjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGVkcmF3ZXItbGVmdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5zaWRlZHJhd2VyLWNvbnRlbnQge1xcclxcbiAgICBtYXJnaW4tdG9wOiA0MDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGVkcmF3ZXItbGlzdC1pdGVtLXRleHQge1xcclxcbiAgICBwYWRkaW5nOiAyMDtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjYmY5N2RmO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtMTtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEdyaWRMYXlvdXQgcm93cz1cXFwiMzAsICpcXFwiPlxcclxcbiAgICA8TWVudT48L01lbnU+XFxyXFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJNeSBhY3RpdmUgY29udGVzdHNcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyLWxhYmVsXFxcIj48L0xhYmVsPlxcclxcbjwvR3JpZExheW91dD5cXHJcXG5cXHJcXG48U3RhY2tMYXlvdXQgcm93PVxcXCIxXFxcIiBzdHlsZT1cXFwicGFkZGluZy10b3A6IDMwXFxcIj5cXHJcXG4gICAgPEdyaWRMYXlvdXQ+XFxyXFxuICAgICAgICA8U2Nyb2xsVmlldyBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNlOGU3ZTdcXFwiPlxcclxcbiAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGZsZXhEaXJlY3Rpb249XFxcImNvbHVtblxcXCIgY2xhc3M9XFxcIm93ZS1saXN0XFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNlOGU3ZTdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgc3R5bGU9XFxcImhlaWdodDogMTVcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBpZD1cXFwiaXRlbTFcXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgY2xhc3M9XFxcIm93ZS1saXN0LWl0ZW1cXFwiIHdpZHRoPVxcXCIxMDAlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IG5zUm91dGVyTGluaz1cXFwiL2NvbnRlc3RcXFwiIGNvbHVtbnM9XFxcImF1dG8sICosIGF1dG9cXFwiIHJvd3M9XFxcImF1dG9cXFwiIHdpZHRoPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcImF1dG9cXFwiIGNsYXNzPVxcXCJvd2UtbWFpbi1pbmZvXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJ0b3BcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgc3JjPVxcXCJ+L0Fzc2V0cy9yZWFsLW1hZHJpZC5qcGdcXFwiIGNsYXNzPVxcXCJvd2UtY2F0ZWdvcnktaWNvblxcXCI+PC9JbWFnZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgY2xhc3M9XFxcIm93ZS1pbmZvLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG9cXFwiIHJvd3M9XFxcImF1dG9cXFwiIHdpZHRoPVxcXCIxMDAlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJDb250ZXN0IElkOiA2MTg3OFxcXCIgY2xhc3M9XFxcImxlbmRlci1uYW1lXFxcIiBjbGFzcz1cXFwiY29udGVzdC1pbmZvcm1hdGlvblxcXCIgcm93PVxcXCIwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbD1cXFwiMFxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIyXFxcIiBzcmM9XFxcIn4vQXNzZXRzL2JhcmNlbG9uYS5qcGdcXFwiIGNsYXNzPVxcXCJvd2UtY2F0ZWdvcnktaWNvblxcXCI+PC9JbWFnZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiZGl2aWRlclxcXCIgdGV4dD1cXFwiXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgaWQ9XFxcIml0ZW0yXFxcIiBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIGNsYXNzPVxcXCJvd2UtbGlzdC1pdGVtXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBuc1JvdXRlckxpbms9XFxcIi9jb250ZXN0XFxcIiBjb2x1bW5zPVxcXCJhdXRvLCAqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCIgaGVpZ2h0PVxcXCJhdXRvXFxcIiBjbGFzcz1cXFwib3dlLW1haW4taW5mb1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwidG9wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIHNyYz1cXFwifi9Bc3NldHMvc291dGgtYWZyaWNhLmpwZ1xcXCIgY2xhc3M9XFxcIm93ZS1jYXRlZ29yeS1pY29uXFxcIj48L0ltYWdlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiBjbGFzcz1cXFwib3dlLWluZm8tY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0b1xcXCIgcm93cz1cXFwiYXV0b1xcXCIgd2lkdGg9XFxcIjEwMCVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkNvbnRlc3QgSWQ6IDMxMjg4XFxcIiBjbGFzcz1cXFwibGVuZGVyLW5hbWVcXFwiIGNsYXNzPVxcXCJjb250ZXN0LWluZm9ybWF0aW9uXFxcIiByb3c9XFxcIjBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sPVxcXCIwXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugcm93PVxcXCIwXFxcIiBjb2w9XFxcIjJcXFwiIHNyYz1cXFwifi9Bc3NldHMvYXVzdHJhbGlhLmpwZ1xcXCIgY2xhc3M9XFxcIm93ZS1jYXRlZ29yeS1pY29uXFxcIj48L0ltYWdlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJkaXZpZGVyXFxcIiB0ZXh0PVxcXCJcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcclxcbiAgICAgICAgPC9TY3JvbGxWaWV3PlxcclxcbiAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuPC9TdGFja0xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBTZWdtZW50ZWRCYXJJdGVtLCBTZWdtZW50ZWRCYXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWdtZW50ZWQtYmFyL3NlZ21lbnRlZC1iYXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiTXlDb250ZXN0XCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL215Y29udGVzdC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL215Y29udGVzdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTXlDb250ZXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkge31cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEdyaWRMYXlvdXQgcm93cz1cXFwiMzAsICpcXFwiPlxcbiAgICA8TWVudT48L01lbnU+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJPZmZlcnMgem9uZVxcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXItbGFiZWxcXFwiPjwvTGFiZWw+XFxuPC9HcmlkTGF5b3V0PlxcblxcbjxTdGFja0xheW91dCByb3c9XFxcIjFcXFwiIHN0eWxlPVxcXCJwYWRkaW5nLXRvcDogMzBcXFwiPlxcbiAgICA8R3JpZExheW91dCB0a0V4YW1wbGVUaXRsZSB0a1RvZ2dsZU5hdkJ1dHRvbj5cXG4gICAgICAgIDxSYWRMaXN0VmlldyBbaXRlbXNdPVxcXCJpdGVtc1xcXCIgbWFyZ2luUmlnaHQ9XFxcIi0yXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNlNmU2ZTZcXFwiPlxcbiAgICAgICAgICAgIDxMaXN0Vmlld1N0YWdnZXJlZExheW91dCB0a0xpc3RWaWV3TGF5b3V0IHNjcm9sbERpcmVjdGlvbj1cXFwiVmVydGljYWxcXFwiXFxuICAgICAgICAgICAgICAgIHNwYW5Db3VudD1cXFwiMlxcXCI+PC9MaXN0Vmlld1N0YWdnZXJlZExheW91dD5cXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgdGtMaXN0SXRlbVRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG1hcmdpbj1cXFwiMTVcXFwiIGJvcmRlclJhZGl1cz1cXFwiMTBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwie3sgaXRlbS5pbWFnZVNyYyB9fVxcXCIgd2lkdGg9XFxcIjIwMFxcXCIgaGVpZ2h0PVxcXCIxMjBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgPC9SYWRMaXN0Vmlldz5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbjwvU3RhY2tMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJPZmZlcnNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vb2ZmZXJzLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIE9mZmVyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBpdGVtczogeyBpbWFnZVNyYzogc3RyaW5nIH1bXSA9IFtcbiAgICAgICAgeyBpbWFnZVNyYzogXCJ+L0Fzc2V0cy9tYy1kb25hbGRzLmpwZ1wiIH0sXG4gICAgICAgIHsgaW1hZ2VTcmM6IFwifi9Bc3NldHMva2ZjLmpwZ1wiIH0sXG4gICAgICAgIHsgaW1hZ2VTcmM6IFwifi9Bc3NldHMvZG9taW5vcy5qcGdcIiB9LFxuICAgICAgICB7IGltYWdlU3JjOiBcIn4vQXNzZXRzL3N1YndheS5qcGdcIiB9LFxuICAgICAgICB7IGltYWdlU3JjOiBcIn4vQXNzZXRzL3N0YXItYnVja3MuanBnXCIgfSxcbiAgICAgICAgeyBpbWFnZVNyYzogXCJ+L0Fzc2V0cy9iYXNraW4tcm9iYmlucy5qcGdcIiB9LFxuICAgICAgICB7IGltYWdlU3JjOiBcIn4vQXNzZXRzL2Jvb2tteXNob3cuanBnXCIgfSxcbiAgICAgICAgeyBpbWFnZVNyYzogXCJ+L0Fzc2V0cy9idXJnZXIta2luZy5qcGdcIiB9LFxuICAgICAgICB7IGltYWdlU3JjOiBcIn4vQXNzZXRzL2xpZmUtc3R5bGUuanBnXCIgfSxcbiAgICAgICAgeyBpbWFnZVNyYzogXCJ+L0Fzc2V0cy9wYW50YWxvb25zLmpwZ1wiIH0sXG4gICAgICAgIHsgaW1hZ2VTcmM6IFwifi9Bc3NldHMvcGl6emEtaHV0LmpwZ1wiIH1cbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCByb3dzPVxcXCIzMCwgKlxcXCI+XFxuICAgIDxNZW51PjwvTWVudT5cXG4gICAgPExhYmVsIHRleHQ9XFxcIlBvaW50cyBjYWxjdWxhdGlvblxcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXItbGFiZWxcXFwiPjwvTGFiZWw+XFxuPC9HcmlkTGF5b3V0PlxcblxcbjxHcmlkTGF5b3V0IHJvdz1cXFwiMVxcXCI+XFxuICAgIDxMYWJlbCBjbGFzcz1cXFwicGFnZS1wbGFjZWhvbGRlclxcXCIgdGV4dD1cXFwiUG9pbnRzIFBhZ2VcXFwiPjwvTGFiZWw+XFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiUG9pbnRzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BvaW50cy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBQb2ludHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCByb3dzPVxcXCIzMCwgKlxcXCI+XFxuICAgIDxNZW51PjwvTWVudT5cXG4gICAgPExhYmVsIHRleHQ9XFxcIk1hbmFnZSBwcm9maWxlXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhci1sYWJlbFxcXCI+PC9MYWJlbD5cXG48L0dyaWRMYXlvdXQ+XFxuXFxuPEdyaWRMYXlvdXQgcm93PVxcXCIxXFxcIj5cXG4gICAgPExhYmVsIGNsYXNzPVxcXCJwYWdlLXBsYWNlaG9sZGVyXFxcIiB0ZXh0PVxcXCJQcm9maWxlIFBhZ2VcXFwiPjwvTGFiZWw+XFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiUHJvZmlsZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wcm9maWxlLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCByb3dzPVxcXCIzMCwgKlxcXCI+XFxuICAgIDxNZW51PjwvTWVudT5cXG4gICAgPExhYmVsIHRleHQ9XFxcIlJlZmVyICYgRWFyblxcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXItbGFiZWxcXFwiPjwvTGFiZWw+XFxuPC9HcmlkTGF5b3V0PlxcblxcbjxHcmlkTGF5b3V0IHJvdz1cXFwiMVxcXCI+XFxuICAgIDxMYWJlbCBjbGFzcz1cXFwicGFnZS1wbGFjZWhvbGRlclxcXCIgdGV4dD1cXFwiUmVmZXJyYWwgUGFnZVxcXCI+PC9MYWJlbD5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJSZWZlcnJhbFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yZWZlcnJhbC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBSZWZlcnJhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0IHJvd3M9XFxcIjMwLCAqXFxcIj5cXG4gICAgPE1lbnU+PC9NZW51PlxcbiAgICA8TGFiZWwgdGV4dD1cXFwiTWFuYWdlIHNldHRpbmdzXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhci1sYWJlbFxcXCI+PC9MYWJlbD5cXG48L0dyaWRMYXlvdXQ+XFxuXFxuPEdyaWRMYXlvdXQgcm93PVxcXCIxXFxcIj5cXG4gICAgPExhYmVsIGNsYXNzPVxcXCJwYWdlLXBsYWNlaG9sZGVyXFxcIiB0ZXh0PVxcXCJTZXR0aW5ncyBQYWdlXFxcIj48L0xhYmVsPlxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlNldHRpbmdzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NldHRpbmdzLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkge31cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktYXV0b2NvbXBsZXRlL2FuZ3VsYXIvYXV0b2NvbXBsZXRlLWRpcmVjdGl2ZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL2FuZ3VsYXIvY2FsZW5kYXItZGlyZWN0aXZlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhci9jaGFydC1kaXJlY3RpdmVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyL2RhdGFmb3JtLWRpcmVjdGl2ZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWdhdWdlL2FuZ3VsYXIvZ2F1Z2VzLWRpcmVjdGl2ZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXIvbGlzdHZpZXctZGlyZWN0aXZlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2FjdGl2aXR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlZ21lbnRlZC1iYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWdtZW50ZWQtYmFyL3NlZ21lbnRlZC1iYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=