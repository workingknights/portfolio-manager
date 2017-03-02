webpackJsonp([0,4],{

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_jwt__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PortfolioService = (function () {
    function PortfolioService(auth, authHttp) {
        this.auth = auth;
        this.authHttp = authHttp;
        this.portfolioUrl = 'api/portfolio';
    }
    PortfolioService.prototype.getPortfolio = function () {
        return this.authHttp.get(this.portfolioUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PortfolioService.prototype.getPortfolioEntry = function (ticker) {
        return this.getPortfolio()
            .map(function (portfolio) { return portfolio.entries.find(function (portfolio) { return portfolio.ticker === ticker; }); });
    };
    PortfolioService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return PortfolioService;
}());
PortfolioService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* Auth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_jwt__["AuthHttp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_jwt__["AuthHttp"]) === "function" && _b || Object])
], PortfolioService);

var _a, _b;
//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/portfolio.service.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ticker; });
var Ticker = (function () {
    function Ticker(id, symbol, currency, exchange, fullName) {
        this.id = id;
        this.symbol = symbol;
        this.currency = currency;
        this.exchange = exchange;
        this.fullName = fullName;
    }
    return Ticker;
}());

//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/ticker.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Constants; });


var Utils = (function () {
    function Utils() {
    }
    Utils.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return Utils;
}());

var Constants = (function () {
    function Constants() {
    }
    return Constants;
}());

Constants.currencies = ['USD', 'GBP', 'GBp'];
Constants.exchanges = ['NYSEARCA', 'LSE'];
//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/utils.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_config__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(426);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Auth = (function () {
    function Auth(router) {
        var _this = this;
        this.router = router;
        if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
            // Configure Auth0
            this.lock = new Auth0Lock(__WEBPACK_IMPORTED_MODULE_3__auth_config__["a" /* authConfig */].clientID, __WEBPACK_IMPORTED_MODULE_3__auth_config__["a" /* authConfig */].domain, {});
            // Set userProfile attribute of already saved profile
            this.userProfile = JSON.parse(localStorage.getItem('profile'));
            // Add callback for lock `authenticated` event
            this.lock.on('authenticated', function (authResult) {
                localStorage.setItem('id_token', authResult.idToken);
                // Fetch profile information
                _this.lock.getProfile(authResult.idToken, function (error, profile) {
                    if (error) {
                        console.log(error);
                    }
                    localStorage.setItem('profile', JSON.stringify(profile));
                    _this.router.navigateByUrl('/portfolio', { skipLocationChange: true });
                    _this.userProfile = profile;
                });
                _this.lock.hide();
            });
        }
    }
    Auth.prototype.login = function () {
        // Call the show method to display the widget.
        if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
            this.lock.show();
        }
        else {
            localStorage.setItem('id_token', 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnb29nbGUtb2F1dGgyfDExODMwMDQwODMwMTA3NzYxNTI5MSIsImF1ZCI6IlQySFFVeFNVWFh1dGQxcmlnV3BVdmRFT05rZDVzMWdtIiwiaXNzIjoiaHR0cHM6Ly93b3JraW5na25pZ2h0cy5hdXRoMC5jb20vIiwiZXhwIjoxNDg4Mjk0MDAwLCJpYXQiOjE0ODMxOTY0MDB9.qdDMHPjNKjL-W_khcUwZiSYty-Q_bt0l5YWr3c0-GaU');
        }
        console.log('login() called.  authenticated = ' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])());
    };
    Auth.prototype.authenticated = function () {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])();
    };
    Auth.prototype.logout = function () {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        this.userProfile = undefined;
        // Send the user back to the home page after logout
        this.router.navigateByUrl('/');
    };
    return Auth;
}());
Auth = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], Auth);

var _a;
//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/auth.service.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__(167);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoldingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HoldingService = (function () {
    function HoldingService(auth, authHttp, utils) {
        this.auth = auth;
        this.authHttp = authHttp;
        this.utils = utils;
        this.holdingsUrl = 'api/holding';
    }
    HoldingService.prototype.getHoldings = function () {
        return this.authHttp.get(this.holdingsUrl)
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HoldingService.prototype.getHolding = function (id) {
        return this.getHoldings()
            .map(function (holdings) { return holdings.find(function (holding) { return holding.id === id; }); });
    };
    HoldingService.prototype.create = function (holding) {
        var _this = this;
        console.log('HoldingService:create() json=' + JSON.stringify(holding));
        return this.authHttp.post(this.holdingsUrl, holding)
            .flatMap(function (res) {
            var location = res.headers.get('Location');
            return _this.authHttp.get(location);
        })
            .map(function (res) { return res.json(); })
            .catch(this.utils.handleError);
    };
    HoldingService.prototype.updateHolding = function (holding) {
        var _this = this;
        console.log('HoldingService:updateHolding() json=' + JSON.stringify(holding));
        var url = this.holdingsUrl + "/" + holding.id;
        return this.authHttp.put(url, holding)
            .flatMap(function (res) {
            return _this.authHttp.get(url);
        })
            .map(function (res) { return res.json(); })
            .catch(this.utils.handleError);
    };
    HoldingService.prototype.delete = function (id) {
        var url = this.holdingsUrl + "/" + id;
        return this.authHttp
            .delete(url)
            .map(function () { return null; })
            .catch(this.handleError);
    };
    HoldingService.prototype.handleError = function (error) {
        console.error('handleError()');
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return HoldingService;
}());
HoldingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* Auth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__utils__["a" /* Utils */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__utils__["a" /* Utils */]) === "function" && _c || Object])
], HoldingService);

var _a, _b, _c;
//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/holding.service.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'Portfolio Manager';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(781),
        styles: [__webpack_require__(767)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* Auth */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/app.component.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// logged-in.guard.ts



var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.auth.authenticated()) {
            console.log('not authenticated so redirecting to root');
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* Auth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/auth.guard.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        if (!this.auth.authenticated()) {
            this.auth.login();
        }
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: ""
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* Auth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/dashboard.component.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Holding; });
var Holding = (function () {
    function Holding(id, ticker, shares, tradePrice, commission, tradeDate, initialMarketValue, initialMarketValueBase) {
        this.id = id;
        this.ticker = ticker;
        this.shares = shares;
        this.tradePrice = tradePrice;
        this.commission = commission;
        this.tradeDate = tradeDate;
        this.initialMarketValue = initialMarketValue;
        this.initialMarketValueBase = initialMarketValueBase;
    }
    return Holding;
}());

//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/holding.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__holding_service__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoldingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HoldingsComponent = (function () {
    function HoldingsComponent(holdingService, auth) {
        this.holdingService = holdingService;
        this.auth = auth;
        this.holdings = [];
        this.showHoldingDetailForm = false;
        this.editing = false;
        this.submittedForm = false;
        this.selected = [];
    }
    HoldingsComponent.prototype.ngOnInit = function () {
        if (this.auth.authenticated()) {
            this.loadHoldings();
        }
    };
    HoldingsComponent.prototype.loadHoldings = function () {
        var _this = this;
        this.holdingService.getHoldings()
            .subscribe(function (holdings) {
            var sortedHoldings = holdings.sort(_this.tradeDateSort);
            _this.holdings = sortedHoldings;
        }, function (error) { return _this.errorMessage = error; });
    };
    HoldingsComponent.prototype.editHolding = function () {
        this.selectedHolding = this.selected[0];
        this.showHoldingDetailForm = true;
        this.editing = true;
    };
    HoldingsComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        console.log('Select Event', this.selected);
    };
    HoldingsComponent.prototype.saveHolding = function (holding) {
        var _this = this;
        if (this.editing) {
            this.holdingService.updateHolding(holding)
                .subscribe(function (holding) { return _this.holdings.push(holding); }, function (error) { return _this.errorMessage = error; });
            this.showHoldingDetailForm = false;
        }
        else {
            this.holdingService.create(holding)
                .subscribe(function (holding) { return _this.holdings.push(holding); }, function (error) { return _this.errorMessage = error; });
        }
    };
    HoldingsComponent.prototype.delete = function (holding) {
        var _this = this;
        this.holdingService
            .delete(holding.id)
            .subscribe(function () {
            _this.holdings = _this.holdings.filter(function (h) { return h != holding; });
        }, function (error) { return _this.errorMessage = error; });
    };
    HoldingsComponent.prototype.tradeDateSort = function (h1, h2) {
        if (h1.tradeDate > h2.tradeDate) {
            return -1;
        }
        if (h1.tradeDate < h2.tradeDate) {
            return 1;
        }
        return 0;
    };
    return HoldingsComponent;
}());
HoldingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-holdings',
        template: __webpack_require__(783),
        styles: [__webpack_require__(769)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__holding_service__["a" /* HoldingService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__holding_service__["a" /* HoldingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__holding_service__["a" /* HoldingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* Auth */]) === "function" && _b || Object])
], HoldingsComponent);

var _a, _b;
//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/holdings.component.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model__ = __webpack_require__(418);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ModelService = (function () {
    function ModelService(auth, authHttp) {
        this.auth = auth;
        this.authHttp = authHttp;
        this.modelUrl = 'api/model';
    }
    ModelService.prototype.getModel = function (id) {
        return this.authHttp.get(this.modelUrl + "/" + id)
            .map(function (res) {
            if (res.status === 200) {
                return res.json();
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(new Error('Unexpected response status! [' + res.status + ']'));
            }
        })
            .catch(this.handleError);
    };
    ModelService.prototype.getModelForCurrentUser = function () {
        return this.authHttp.get(this.modelUrl)
            .map(function (res) { return res.json(); });
    };
    ModelService.prototype.createModel = function () {
        var _this = this;
        var newModel = new __WEBPACK_IMPORTED_MODULE_7__model__["a" /* Model */]('', '', []);
        return this.authHttp.post(this.modelUrl, newModel)
            .flatMap(function (res) {
            var location = res.headers.get('Location');
            console.log('loading model from location: ' + location);
            return _this.authHttp.get(location);
        })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ModelService.prototype.getAndCreateModel = function () {
        var _this = this;
        return this.authHttp.get(this.modelUrl)
            .map(function (res) {
            if (res) {
                if (res.status === 200) {
                    return res.json();
                }
            }
            else {
                console.log('Response was empty!');
            }
        })
            .catch(function (error) {
            if (error.status === 404) {
                // Need to create new model for user on first usage
                _this.createModel();
            }
            else if (error.status === 500) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(new Error(error.status));
            }
        });
    };
    ModelService.prototype.addModelEntry = function (modelId, modelEntry) {
        var _this = this;
        console.log('addModelEntry() json=' + JSON.stringify(modelEntry));
        var url = this.modelUrl + "/" + modelId + "/entry";
        return this.authHttp.put(url, modelEntry)
            .flatMap(function (res) {
            return _this.authHttp.get(_this.modelUrl + "/" + modelId);
        })
            .map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    ModelService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return ModelService;
}());
ModelService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* Auth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"]) === "function" && _b || Object])
], ModelService);

var _a, _b;
//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/model.service.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModelEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Model; });
var ModelEntry = (function () {
    function ModelEntry(ticker, portfolioWeight) {
        this.ticker = ticker;
        this.portfolioWeight = portfolioWeight;
    }
    return ModelEntry;
}());

;
var Model = (function () {
    function Model(id, userId, entries) {
        this.id = id;
        this.userId = userId;
        this.entries = entries;
    }
    return Model;
}());

;
//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/model.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_service__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModelComponent = (function () {
    function ModelComponent(modelService, auth, appRef) {
        this.modelService = modelService;
        this.auth = auth;
        this.appRef = appRef;
        this.showAddEntryForm = false;
    }
    ModelComponent.prototype.ngOnInit = function () {
        if (this.auth.authenticated()) {
            this.loadModel();
        }
    };
    ModelComponent.prototype.calcTotalWeight = function () {
        var total = 0;
        for (var _i = 0, _a = this.model.entries; _i < _a.length; _i++) {
            var entry = _a[_i];
            total += entry.portfolioWeight;
        }
        return total;
    };
    ModelComponent.prototype.loadModel = function () {
        var _this = this;
        this.modelService.getModelForCurrentUser()
            .subscribe(function (model) {
            _this.model = model;
            _this.totalWeight = _this.calcTotalWeight();
        }, function (error) { return console.log(error); });
    };
    ModelComponent.prototype.createModel = function () {
        var _this = this;
        this.modelService.createModel()
            .subscribe(function (model) { return _this.model = model; }, function (error) {
            console.log(error);
        });
    };
    ModelComponent.prototype.saveEntry = function (modelEntry) {
        var _this = this;
        console.log('saving entry: ' + modelEntry);
        this.modelService.addModelEntry(this.model.id, modelEntry)
            .subscribe(function (model) { return _this.model = model; }, function (error) { return console.log(error); });
    };
    ModelComponent.prototype.openAddEntryForm = function () {
        this.showAddEntryForm = true;
    };
    return ModelComponent;
}());
ModelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-model',
        template: __webpack_require__(785),
        styles: [__webpack_require__(771)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__model_service__["a" /* ModelService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_service__["a" /* ModelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_service__["a" /* ModelService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* Auth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]) === "function" && _c || Object])
], ModelComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/model.component.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__portfolio_service__ = __webpack_require__(165);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioEntryDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PortfolioEntryDetailComponent = (function () {
    function PortfolioEntryDetailComponent(portfolioService, route, location) {
        this.portfolioService = portfolioService;
        this.route = route;
        this.location = location;
    }
    PortfolioEntryDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.portfolioService.getPortfolioEntry(params['ticker']); })
            .subscribe(function (portfolioEntry) { return _this.portfolioEntry = portfolioEntry; });
    };
    PortfolioEntryDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return PortfolioEntryDetailComponent;
}());
PortfolioEntryDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-portfolio-entry-detail',
        template: __webpack_require__(786),
        styles: [__webpack_require__(772)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__portfolio_service__["a" /* PortfolioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__portfolio_service__["a" /* PortfolioService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _c || Object])
], PortfolioEntryDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/portfolio-entry-detail.component.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portfolio_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__holding_service__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__holding__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ticker__ = __webpack_require__(166);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PortfolioComponent = (function () {
    function PortfolioComponent(portfolioService, holdingService, appRef, auth) {
        this.portfolioService = portfolioService;
        this.holdingService = holdingService;
        this.appRef = appRef;
        this.auth = auth;
        this.portfolioEntries = [];
        this.newHolding = new __WEBPACK_IMPORTED_MODULE_4__holding__["a" /* Holding */]('', new __WEBPACK_IMPORTED_MODULE_5__ticker__["a" /* Ticker */]('', '', '', '', ''), 1, 1.0, 0.0, Date.now(), 0.0, 0.0);
        this.showAddHoldingForm = false;
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        console.log('PortfolioComponent:ngOnInit() authenticated = ' + this.auth.authenticated());
        if (this.auth.authenticated()) {
            this.loadPortfolio();
        }
    };
    PortfolioComponent.prototype.saveHolding = function (holding) {
        var _this = this;
        console.log('Portfolio:saveHolding() - holding = ', holding);
        this.holdingService.create(holding)
            .subscribe(function (holding) {
            console.log('reload portfolio...');
            _this.loadPortfolio();
        }, function (error) {
            console.log(error);
        });
        this.newHolding = new __WEBPACK_IMPORTED_MODULE_4__holding__["a" /* Holding */]('', new __WEBPACK_IMPORTED_MODULE_5__ticker__["a" /* Ticker */]('', '', '', '', ''), 1, 1.0, 0.0, Date.now(), 0.0, 0.0);
        this.showAddHoldingForm = false;
    };
    PortfolioComponent.prototype.loadPortfolio = function () {
        var _this = this;
        this.portfolioService.getPortfolio()
            .subscribe(function (portfolio) {
            _this.portfolioEntries = portfolio.entries;
            _this.summary = portfolio.summary;
        }, function (error) {
            _this.errorMessage = error;
            console.log(error);
        });
    };
    return PortfolioComponent;
}());
PortfolioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-portfolio',
        template: __webpack_require__(787),
        styles: [__webpack_require__(773)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__holding_service__["a" /* HoldingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__holding_service__["a" /* HoldingService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* Auth */]) === "function" && _d || Object])
], PortfolioComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/portfolio.component.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SandboxService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SandboxService = (function () {
    function SandboxService(auth, authHttp) {
        this.auth = auth;
        this.authHttp = authHttp;
        this.sandboxUrl = 'api/sandbox';
    }
    SandboxService.prototype.getSandboxPortfolio = function (scaledMV) {
        return this.authHttp.get(this.sandboxUrl + "?scaledMV=" + scaledMV)
            .map(function (res) { return res.json().entries; })
            .catch(this.handleError);
    };
    SandboxService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return SandboxService;
}());
SandboxService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* Auth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"]) === "function" && _b || Object])
], SandboxService);

var _a, _b;
//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/sandbox.service.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portfolio_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sandbox_service__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SandboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SandboxComponent = (function () {
    function SandboxComponent(portfolioService, sandboxService, auth) {
        this.portfolioService = portfolioService;
        this.sandboxService = sandboxService;
        this.auth = auth;
        this.portfolioEntries = [];
    }
    SandboxComponent.prototype.ngOnInit = function () {
        if (this.auth.authenticated()) {
            this.loadPortfolio();
        }
    };
    SandboxComponent.prototype.loadPortfolio = function () {
        var _this = this;
        this.portfolioService.getPortfolio()
            .subscribe(function (portfolio) {
            _this.portfolioEntries = portfolio.entries;
        }, function (error) {
            console.log(error);
        });
    };
    SandboxComponent.prototype.updateScaledMV = function (scaledMV) {
        var _this = this;
        this.sandboxService.getSandboxPortfolio(+scaledMV)
            .subscribe(function (portfolioEntries) {
            _this.portfolioEntries = portfolioEntries;
        }, function (error) {
            console.log(error);
        });
    };
    return SandboxComponent;
}());
SandboxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sandbox',
        template: __webpack_require__(788),
        styles: [__webpack_require__(774)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__sandbox_service__["a" /* SandboxService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__sandbox_service__["a" /* SandboxService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* Auth */]) === "function" && _c || Object])
], SandboxComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/sandbox.component.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(167);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TickerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TickerService = (function () {
    function TickerService(auth, authHttp, utils) {
        this.auth = auth;
        this.authHttp = authHttp;
        this.utils = utils;
        this.tickerUrl = 'api/ticker';
    }
    TickerService.prototype.getTickers = function () {
        return this.authHttp.get(this.tickerUrl)
            .map(function (res) { return res.json().data; })
            .catch(this.utils.handleError);
    };
    TickerService.prototype.saveTicker = function (ticker) {
        var _this = this;
        console.log('saveTicker() json=' + JSON.stringify(ticker));
        return this.authHttp.post(this.tickerUrl, ticker)
            .flatMap(function (res) {
            var location = res.headers.get('Location');
            return _this.authHttp.get(location);
        })
            .map(function (res) { return res.json(); })
            .catch(this.utils.handleError);
    };
    TickerService.prototype.updateTicker = function (ticker) {
        var _this = this;
        var url = this.tickerUrl + "/" + ticker.id;
        console.log('updateTicker() json=', JSON.stringify(ticker), url);
        return this.authHttp.put(url, ticker)
            .flatMap(function (res) {
            return _this.authHttp.get(url);
        })
            .map(function (res) { return res.json(); })
            .catch(this.utils.handleError);
    };
    return TickerService;
}());
TickerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* Auth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__utils__["a" /* Utils */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__utils__["a" /* Utils */]) === "function" && _c || Object])
], TickerService);

var _a, _b, _c;
//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/ticker.service.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ticker__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ticker_service__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TickersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TickersComponent = (function () {
    function TickersComponent(tickerService, auth) {
        this.tickerService = tickerService;
        this.auth = auth;
        this.currTicker = new __WEBPACK_IMPORTED_MODULE_1__ticker__["a" /* Ticker */]('', '', 'USD', 'NYSEARCA', '');
        this.tickers = [];
        this.showTickerDetailForm = false;
        this.editing = false;
        this.submittedForm = false;
        this.selected = [];
    }
    TickersComponent.prototype.ngOnInit = function () {
        if (this.auth.authenticated()) {
            this.loadTickers();
        }
    };
    TickersComponent.prototype.loadTickers = function () {
        var _this = this;
        this.tickerService.getTickers()
            .subscribe(function (tickers) { return _this.tickers = tickers; }, function (error) { return _this.errorMessage = error; });
    };
    TickersComponent.prototype.saveTicker = function (ticker) {
        var _this = this;
        console.log('saveTicker: ', ticker);
        if (this.editing) {
            this.tickerService.updateTicker(ticker)
                .subscribe(function (error) { return _this.errorMessage = error; });
        }
        else {
            this.tickerService.saveTicker(ticker)
                .subscribe(function (ticker) { return _this.tickers.push(ticker); }, function (error) { return _this.errorMessage = error; });
        }
    };
    TickersComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        console.log('Select Event', this.selected);
    };
    TickersComponent.prototype.editTicker = function () {
        this.currTicker = this.selected[0];
        this.showTickerDetailForm = true;
        this.editing = true;
        console.log('editing ticker', this.currTicker);
    };
    return TickersComponent;
}());
TickersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tickers',
        template: __webpack_require__(790),
        styles: [__webpack_require__(776)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__ticker_service__["a" /* TickerService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ticker_service__["a" /* TickerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ticker_service__["a" /* TickerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* Auth */]) === "function" && _b || Object])
], TickersComponent);

var _a, _b;
//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/tickers.component.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/environment.js.map

/***/ }),

/***/ 479:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 479;


/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(608);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/main.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__portfolio_portfolio_component__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__holdings_holdings_component__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_model_component__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sandbox_sandbox_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tickers_tickers_component__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__portfolio_entry_detail_portfolio_entry_detail_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_guard__ = __webpack_require__(413);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_3__portfolio_portfolio_component__["a" /* PortfolioComponent */] },
    { path: 'holdings', component: __WEBPACK_IMPORTED_MODULE_4__holdings_holdings_component__["a" /* HoldingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_guard__["a" /* AuthGuard */]] },
    { path: 'model', component: __WEBPACK_IMPORTED_MODULE_5__model_model_component__["a" /* ModelComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_guard__["a" /* AuthGuard */]] },
    { path: 'tickers', component: __WEBPACK_IMPORTED_MODULE_7__tickers_tickers_component__["a" /* TickersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_guard__["a" /* AuthGuard */]] },
    { path: 'sandbox', component: __WEBPACK_IMPORTED_MODULE_6__sandbox_sandbox_component__["a" /* SandboxComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_guard__["a" /* AuthGuard */]] },
    { path: 'portfolioEntry/:ticker', component: __WEBPACK_IMPORTED_MODULE_8__portfolio_entry_detail_portfolio_entry_detail_component__["a" /* PortfolioEntryDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_guard__["a" /* AuthGuard */]] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
    })
], AppRoutingModule);

//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/app-routing.module.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_jwt__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__holding_service__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__portfolio_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__model_service__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sandbox_service__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ticker_service__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__holdings_holdings_component__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__holding_form_holding_form_component__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__portfolio_entry_detail_portfolio_entry_detail_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__auth_guard__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__portfolio_portfolio_component__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__model_model_component__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__model_entry_form_model_entry_form_component__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__sandbox_sandbox_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__tickers_tickers_component__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__utils__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ticker_detail_form_ticker_detail_form_component__ = __webpack_require__(610);
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_6_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_6_angular2_jwt__["AuthConfig"]({
        globalHeaders: [{ 'Content-Type': 'application/json' }],
    }), http, options);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_15__holdings_holdings_component__["a" /* HoldingsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__holding_form_holding_form_component__["a" /* HoldingFormComponent */],
            __WEBPACK_IMPORTED_MODULE_17__portfolio_entry_detail_portfolio_entry_detail_component__["a" /* PortfolioEntryDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_20__portfolio_portfolio_component__["a" /* PortfolioComponent */],
            __WEBPACK_IMPORTED_MODULE_21__model_model_component__["a" /* ModelComponent */],
            __WEBPACK_IMPORTED_MODULE_22__model_entry_form_model_entry_form_component__["a" /* ModelEntryFormComponent */],
            __WEBPACK_IMPORTED_MODULE_23__sandbox_sandbox_component__["a" /* SandboxComponent */],
            __WEBPACK_IMPORTED_MODULE_24__tickers_tickers_component__["a" /* TickersComponent */],
            __WEBPACK_IMPORTED_MODULE_26__ticker_detail_form_ticker_detail_form_component__["a" /* TickerDetailFormComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__["NgxDatatableModule"],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__holding_service__["a" /* HoldingService */],
            __WEBPACK_IMPORTED_MODULE_11__portfolio_service__["a" /* PortfolioService */],
            __WEBPACK_IMPORTED_MODULE_12__model_service__["a" /* ModelService */],
            __WEBPACK_IMPORTED_MODULE_13__sandbox_service__["a" /* SandboxService */],
            __WEBPACK_IMPORTED_MODULE_14__ticker_service__["a" /* TickerService */],
            __WEBPACK_IMPORTED_MODULE_19__auth_service__["a" /* Auth */],
            __WEBPACK_IMPORTED_MODULE_25__utils__["a" /* Utils */],
            __WEBPACK_IMPORTED_MODULE_18__auth_guard__["a" /* AuthGuard */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_6_angular2_jwt__["AuthHttp"],
                useFactory: authHttpServiceFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]]
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/app.module.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authConfig; });
var authConfig = {
    clientID: 'T2HQUxSUXXutd1rigWpUvdEONkd5s1gm',
    domain: 'workingknights.auth0.com'
};
//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/auth.config.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__holding__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ticker__ = __webpack_require__(166);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoldingFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HoldingFormComponent = (function () {
    function HoldingFormComponent() {
        this.submitted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.closed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._holding = new __WEBPACK_IMPORTED_MODULE_1__holding__["a" /* Holding */]('', new __WEBPACK_IMPORTED_MODULE_2__ticker__["a" /* Ticker */]('', '', '', '', ''), 1, 1.0, 0.0, Date.now(), 0.0, 0.0);
    }
    Object.defineProperty(HoldingFormComponent.prototype, "holding", {
        get: function () { return this._holding; },
        // private submittedForm = false;
        set: function (holding) {
            this._holding = holding;
        },
        enumerable: true,
        configurable: true
    });
    HoldingFormComponent.prototype.onSubmit = function () {
        // this.submittedForm = true;
        var symbol = this.holding.ticker.symbol.trim();
        if (!symbol) {
            return;
        }
        this.submitted.emit(this.holding);
        this.newHolding();
    };
    HoldingFormComponent.prototype.newHolding = function () {
        this.holding = new __WEBPACK_IMPORTED_MODULE_1__holding__["a" /* Holding */]('', new __WEBPACK_IMPORTED_MODULE_2__ticker__["a" /* Ticker */]('', '', '', '', ''), 1, 1.0, 0.0, Date.now(), 0.0, 0.0);
    };
    HoldingFormComponent.prototype.closeForm = function () {
        this.closed.emit('complete');
    };
    HoldingFormComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        else {
            return null;
        }
    };
    Object.defineProperty(HoldingFormComponent.prototype, "tradeDate", {
        get: function () {
            return this.tradeDate.toISOString().substring(0, 10);
        },
        enumerable: true,
        configurable: true
    });
    return HoldingFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], HoldingFormComponent.prototype, "editing", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], HoldingFormComponent.prototype, "submitted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], HoldingFormComponent.prototype, "closed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__holding__["a" /* Holding */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__holding__["a" /* Holding */]) === "function" && _c || Object),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__holding__["a" /* Holding */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__holding__["a" /* Holding */]) === "function" && _d || Object])
], HoldingFormComponent.prototype, "holding", null);
HoldingFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'holding-detail-form',
        template: __webpack_require__(782),
        styles: [__webpack_require__(768)]
    })
], HoldingFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/holding-form.component.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(412);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(605);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/index.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(418);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelEntryFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModelEntryFormComponent = (function () {
    function ModelEntryFormComponent() {
        this.submitted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.closed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.modelEntry = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* ModelEntry */]('', 0.0);
        this.submittedForm = false;
    }
    ModelEntryFormComponent.prototype.onSubmit = function () {
        this.submittedForm = true;
        var ticker = this.modelEntry.ticker.trim();
        if (!ticker) {
            return;
        }
        // convert to percentage
        this.modelEntry.portfolioWeight = this.modelEntry.portfolioWeight / 100;
        this.submitted.emit(this.modelEntry);
        this.modelEntry = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* ModelEntry */]('', 0.0);
    };
    ModelEntryFormComponent.prototype.closeForm = function () {
        this.closed.emit('complete');
    };
    return ModelEntryFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ModelEntryFormComponent.prototype, "submitted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], ModelEntryFormComponent.prototype, "closed", void 0);
ModelEntryFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-model-entry-form',
        template: __webpack_require__(784),
        styles: [__webpack_require__(770)]
    }),
    __metadata("design:paramtypes", [])
], ModelEntryFormComponent);

var _a, _b;
//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/model-entry-form.component.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ticker__ = __webpack_require__(166);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TickerDetailFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TickerDetailFormComponent = (function () {
    function TickerDetailFormComponent() {
        this.submitted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.closed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._ticker = new __WEBPACK_IMPORTED_MODULE_2__ticker__["a" /* Ticker */]('', '', 'USD', 'LSE', '');
        this.currencies = __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Constants */].currencies;
        this.exchanges = __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Constants */].exchanges;
        this.submittedForm = false;
    }
    Object.defineProperty(TickerDetailFormComponent.prototype, "ticker", {
        get: function () { return this._ticker; },
        set: function (ticker) {
            console.log('set() - ticker', ticker);
            this._ticker = ticker;
        },
        enumerable: true,
        configurable: true
    });
    TickerDetailFormComponent.prototype.onSubmit = function () {
        console.log('onSubmit() - ticker', this._ticker);
        this.submittedForm = true;
        var symbol = this._ticker.symbol.trim();
        var currency = this._ticker.currency.trim();
        var exchange = this._ticker.exchange.trim();
        if (!symbol || !currency || !exchange) {
            return;
        }
        this.submitted.emit(this._ticker);
        this._ticker = new __WEBPACK_IMPORTED_MODULE_2__ticker__["a" /* Ticker */]('', '', 'USD', 'NYSEARCA', '');
    };
    TickerDetailFormComponent.prototype.closeForm = function () {
        this.closed.emit('complete');
    };
    return TickerDetailFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], TickerDetailFormComponent.prototype, "submitted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], TickerDetailFormComponent.prototype, "closed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ticker__["a" /* Ticker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ticker__["a" /* Ticker */]) === "function" && _c || Object),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ticker__["a" /* Ticker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ticker__["a" /* Ticker */]) === "function" && _d || Object])
], TickerDetailFormComponent.prototype, "ticker", null);
TickerDetailFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ticker-detail-form',
        template: __webpack_require__(789),
        styles: [__webpack_require__(775)]
    })
], TickerDetailFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/ticker-detail-form.component.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/anthony/dev/projects/pflo-mgr-parent/pflo-mgr-ui/src/polyfills.js.map

/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, "h2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\n.navbar {\n\tbackground-color: #416daf;\n\tmargin-bottom: 16px;\n\tbox-shadow: 0 2px 5px 0 rgba(0,0,0,0.24);\n}\n.navbar form span {\n\tcolor: #fff;\n}\na.navbar-brand {\n\tcolor: #fff;\n}\na.nav-link {\n\tcolor: #ccc;\n}\na.nav-link.active {\n\tcolor: #fff;\n}\n.btn-outline-primary, .btn-outline-primary:hover {\n\tborder-color: #fff;\n\tcolor: #ccc;\n}\n.btn-outline-primary:hover {\n\tbackground-color: #5680bd;\n\tcolor: #fff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, "\nbutton.btn-margin-left {\n\tmargin-left: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, "label {\n\tfont-size: 0.8em;\n}\n\n.form-control {\n\tfont-size: 0.8em;\n}\n\n.btn {\n\tfont-size: 0.8em;\n\tmargin-top: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, "div.pflo-detail, div.pflo-detail-header {\n\tpadding-left: 30px;\n\tpadding-right: 20px;\n\tdisplay: inline-block;\n\tmargin-bottom: 10px;\n}\n\ndiv.pflo-detail-header a, div.pflo-detail-header label {\n\tfont-size: 1.4em;\n\tmargin-bottom: 20px;\n}\n\nlabel {\n\tdisplay: inline;\n  width: 15em;\n  margin: .3em 0.1em;\n  color: #2d64bb;\n\tfont-size: 0.9em;\n}\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: .4em;\n}\nbutton {\n  margin-top: 30px;\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer; cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #ccc;\n  cursor: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, "a {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  box-sizing: border-box;\n}\nh3 {\n  text-align: center; margin-bottom: 0;\n}\nh4 {\n  position: relative;\n}\n\nbutton.btn-margin-left {\n\tmargin-left: 15px;\n}\n\nbutton.btn-margin-top {\n\tmargin-top: 10px;\n}\n\n.grid {\n  margin: 0;\n}\n.col-1-4 {\n  width: 25%;\n}\n.datatable {\n\tfont-size: 12px;\n\tmargin-top:18px;\n}\n.redCell {\n\tcolor: red;\n}\n.greenCell {\n\tcolor: green;\n}\n\nbutton.delete {\n  float:right;\n  margin-top: 2px;\n  margin-right: .8em;\n  background-color: gray !important;\n  color:white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, "\n.datatable {\n\tfont-size: 12px;\n\tmargin-top:18px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 781:
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fluid\"> -->\n<nav class=\"navbar navbar-toggleable-sm\">\n\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\"\n\t\taria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t  <span class=\"navbar-toggler-icon\"></span>\n\t</button>\n\t<div class=\"collapse navbar-collapse\" id=\"navbar\">\n\t\t<a class=\"navbar-brand\" href=\"/portfolio\">Portfolio Manager</a>\n\t\t<ul class=\"nav navbar-nav mr-auto\" *ngIf=\"auth.authenticated()\">\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/portfolio\" routerLinkActive=\"active\">Portfolio</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/holdings\" routerLinkActive=\"active\">Holdings</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/tickers\" routerLinkActive=\"active\">Tickers</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/model\" routerLinkActive=\"active\">Model</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/sandbox\" routerLinkActive=\"active\">Sandbox</a>\n\t\t\t</li>\n\t\t</ul>\n\t\t<form class=\"form-inline float-sm-right\">\n\t\t\t<span *ngIf=\"auth.authenticated() && auth.userProfile\" class=\"align-middle\" style=\"margin-right: 15px\">{{auth.userProfile.name}}</span>\n\t\t\t<button class=\"btn btn-outline-primary\" (click)=\"auth.login()\" *ngIf=\"!auth.authenticated()\">Log In</button>\n\t\t\t<button class=\"btn btn-outline-primary\" (click)=\"auth.logout()\" *ngIf=\"auth.authenticated()\">Log Out</button>\n\t\t</form>\n\t</div>\n</nav>\n<router-outlet></router-outlet>\n<!-- </div> -->\n"

/***/ }),

/***/ 782:
/***/ (function(module, exports) {

module.exports = "  <form (ngSubmit)=\"onSubmit()\" #holdingForm=\"ngForm\">\n\t\t<div class=\"row\">\n      <div class=\"form-group col-sm-2\">\n        <label for=\"symbol\">Symbol</label>\n        <input type=\"text\" class=\"form-control\" id=\"symbol\" required\n        [(ngModel)]=\"holding.ticker.symbol\" name=\"symbol\" #symbol=\"ngModel\">\n        <div [hidden]=\"symbol.valid || symbol.pristine\" class=\"alert alert-danger\">\n          Symbol is required\n        </div>\n      </div>\n\t\t\t<div class=\"form-group col-sm-3\">\n        <label for=\"tradeDate\">Trade Date</label>\n        <input type=\"date\" class=\"form-control\" id=\"tradeDate\" [value]=\"holding.tradeDate | date:'yyyy-MM-dd'\"\n\t\t\t\t(input)=\"holding.tradeDate=parseDate($event.target.value)\" name=\"tradeDate\" required>\n      </div>\n      <div class=\"form-group col-sm-2\">\n        <label for=\"shares\">Shares</label>\n        <input type=\"number\" min=\"1\" step=\"1\" class=\"form-control\" id=\"shares\" required\n        [(ngModel)]=\"holding.shares\" name=\"shares\">\n      </div>\n\t\t\t<div class=\"form-group col-sm-2\">\n        <label for=\"tradePrice\">Price</label>\n        <input type=\"number\" min=\"0\" step=\"any\" class=\"form-control\" id=\"tradePrice\" required=\"\"\n        [(ngModel)]=\"holding.tradePrice\" name=\"tradePrice\">\n      </div>\n\t\t\t<div class=\"form-group col-sm-2\">\n        <label for=\"commission\">Commission</label>\n        <input type=\"number\" min=\"0\" step=\"any\" class=\"form-control\" id=\"commission\" required=\"\"\n        [(ngModel)]=\"holding.commission\" name=\"commission\">\n      </div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!holdingForm.form.valid\">Submit</button>\n\t\t\t\t<button *ngIf=\"!editing\" type=\"button\" class=\"btn btn-outline-primary\" (click)=\"newHolding()\">New Holding</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeForm()\">Close</button>\n\t\t\t</div>\n\t\t</div>\n  </form>\n"

/***/ }),

/***/ 783:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"auth.authenticated()\">\n\n\t<div class=\"mt-sm-4 data-maintainer\">\n\n\t\t<div class=\"row mb-sm-2\">\n\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t<button class=\"btn btn-primary mt-1\" (click)=\"editHolding()\" [disabled]=\"selected.length < 1\">Edit Entry</button>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\" *ngIf=\"showHoldingDetailForm\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<holding-detail-form [holding]=\"selectedHolding\" [editing]=\"editing\" (submitted)=\"saveHolding($event)\"\n\t\t\t\t\t(closed)=\"showHoldingDetailForm=false; editing=false\">\n\t\t\t\t</holding-detail-form>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<ngx-datatable class=\"material\"\n\t\t\t\t\t[rows]=\"holdings\"\n\t\t\t\t\t[columnMode]=\"'flex'\"\n\t\t\t\t\t[rowHeight]=\"'auto'\"\n\t\t\t\t\t[selected]=\"selected\"\n\t\t\t\t\t[selectionType]=\"'single'\"\n\t\t\t\t\t(select)='onSelect($event)'>\n\t\t\t\t\t<ngx-datatable-column name=\"Ticker\" prop=\"ticker.symbol\" [flexGrow]=\"0.7\"></ngx-datatable-column>\n\t\t\t\t\t<ngx-datatable-column name=\"Currency\" prop=\"ticker.currency\" [flexGrow]=\"0.8\"></ngx-datatable-column>\n\t\t\t\t\t<ngx-datatable-column prop=\"tradeDate\" [flexGrow]=\"0.9\">\n\t\t\t\t\t\t<template let-value=\"value\" ngx-datatable-cell-template>\n\t\t\t\t\t\t\t{{value | date:'d/MM/y'}}\n\t\t\t\t\t\t</template>\n\t\t\t\t\t</ngx-datatable-column>\n\t\t\t\t\t<ngx-datatable-column prop=\"shares\" [flexGrow]=\"0.7\"></ngx-datatable-column>\n\t\t\t\t\t<ngx-datatable-column prop=\"tradePrice\" [flexGrow]=\"0.9\"></ngx-datatable-column>\n\t\t\t\t\t<ngx-datatable-column prop=\"commission\" [flexGrow]=\"0.9\"></ngx-datatable-column>\n\t\t\t\t\t<ngx-datatable-column prop=\"initialMarketValue\" [flexGrow]=\"1.3\">\n\t\t\t\t\t\t<template let-value=\"value\" ngx-datatable-cell-template>\n\t\t\t\t\t\t\t{{value.toFixed(2)}}\n\t\t\t\t\t\t</template>\n\t\t\t\t\t</ngx-datatable-column>\n\t\t\t\t\t<ngx-datatable-column prop=\"initialMarketValueBase\" [flexGrow]=\"1.6\">\n\t\t\t\t\t\t<template let-value=\"value\" ngx-datatable-cell-template>\n\t\t\t\t\t\t\t{{value | currency:'USD':true}}\n\t\t\t\t\t\t</template>\n\t\t\t\t\t</ngx-datatable-column>\n\t\t\t\t</ngx-datatable>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n</div>\n"

/***/ }),

/***/ 784:
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-3 mb-2\">\n\t<form (ngSubmit)=\"onSubmit(); modelForm.reset()\" #modelForm=\"ngForm\">\n\t\t<div class=\"row\">\n\t    <div class=\"form-group col-sm-2\">\n\t      <label for=\"ticker\">Ticker</label>\n\t      <input type=\"text\" class=\"form-control\" id=\"ticker\" required\n\t      [(ngModel)]=\"modelEntry.ticker\" name=\"ticker\" #ticker=\"ngModel\">\n\t      <div [hidden]=\"ticker.valid || ticker.pristine\" class=\"alert alert-danger\">\n\t        Ticker is required\n\t      </div>\n\t    </div>\n\t\t\t<div class=\"form-group col-sm-2\">\n\t      <label for=\"portfolioWeight\">Portfolio Weight</label>\n\t      <input type=\"number\" min=\"0\" step=\"any\" class=\"form-control\" id=\"portfolioWeight\" required=\"\"\n\t      [(ngModel)]=\"modelEntry.portfolioWeight\" name=\"portfolioWeight\">\n\t    </div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6\">\n\t      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!modelForm.form.valid\">Submit</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeForm()\">Close</button>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>\n"

/***/ }),

/***/ 785:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"auth.authenticated()\">\n\n\t<div class=\"data-maintainer\">\n\t\t<div class=\"row\" *ngIf=\"!model\">\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<span class=\"mx-auto\">No model exists yet</span>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t<form>\n\t\t\t\t\t<button class=\"btn btn-sm btn-primary btn-margin-top\" (click)=\"createModel()\">Create Model</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div *ngIf=\"model\" class=\"mt-sm-3\">\n\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"showAddEntryForm=true\">Add Entry</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t<li class=\"list-group-item\" style=\"height: calc(2rem + 3px)\">\n\t\t\t\t\t\t\tTotal Weight: <strong>{{totalWeight | percent:'1.2-2'}}</strong>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\" *ngIf=\"showAddEntryForm\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<app-model-entry-form (submitted)=\"saveEntry($event)\" (closed)=\"showAddEntryForm=false\"></app-model-entry-form>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-4 col-md-6 col-sm-8 col-xs-12\">\n\t\t\t\t\t<ngx-datatable class=\"material\"\n\t\t\t\t\t\t[rows]=\"model.entries\"\n\t\t\t\t\t\t[columnMode]=\"'flex'\"\n\t\t\t\t\t\t[rowHeight]=\"'auto'\">\n\t\t\t\t\t\t<ngx-datatable-column prop=\"ticker\" [flexGrow]=\"1\"></ngx-datatable-column>\n\t\t\t\t\t\t<ngx-datatable-column prop=\"portfolioWeight\" [flexGrow]=\"1\">\n\t\t\t\t\t\t\t<template let-value=\"value\" ngx-datatable-cell-template>\n\t\t\t\t\t\t\t\t{{value | percent:'1.0-2'}}\n\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t</ngx-datatable-column>\n\t\t\t\t\t</ngx-datatable>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n</div>\n"

/***/ }),

/***/ 786:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"portfolioEntry\" class=\"portfolio-entry\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-3 pflo-detail-header\">\n\t\t\t<a href=\"http://finance.yahoo.com/quote/{{portfolioEntry.ticker}}?ltr=1\" target=\"_blank\">{{portfolioEntry.ticker}}</a>\n\t\t</div>\n\t\t<div class=\"col-sm-9 pflo-detail-header\">\n\t\t\t<label>{{portfolioEntry.name}}</label>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-4 pflo-detail\">\n\t\t\t<span>Total Shares: </span><label>{{portfolioEntry.totalShares}}</label>\n\t\t</div>\n\t\t<div class=\"col-sm-4 pflo-detail\">\n\t\t\t<span>Market Value (Base): </span><label>{{portfolioEntry.marketValueBase | currency:'USD':true}}</label>\n\t\t</div>\n\t\t<div class=\"col-sm-4 pflo-detail\">\n\t\t\t<span>Total Gain (Base): </span><label>{{portfolioEntry.totalGainBase | currency:'USD':true}}</label>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-4 pflo-detail\">\n\t\t\t<span>Curr Price: </span><label>{{portfolioEntry.currPrice | number:'1.2-4'}}</label>\n\t\t</div>\n\t\t<div class=\"col-sm-4 pflo-detail\">\n\t\t\t<span>Daily % Change: </span><label>{{portfolioEntry.percentChange | percent:'1.2-2'}}</label>\n\t\t</div>\n\t\t<div class=\"col-sm-4 pflo-detail\">\n\t\t\t<span>Daily Gain (Base): </span><label>{{portfolioEntry.dailyGainBase | currency:'USD':true}}</label>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-4 pflo-detail\">\n\t\t\t<span>Avg Unit Cost: </span><label>{{portfolioEntry.avgUnitCost | number:'1.2-4'}}</label>\n\t\t</div>\n\t\t<div class=\"col-sm-4 pflo-detail\">\n\t\t\t<span>Settle Amount (Issue): </span><label>{{portfolioEntry.totalCost | number:'1.2-2'}}</label>\n\t\t</div>\n\t\t<div class=\"col-sm-4 pflo-detail\">\n\t\t\t<span>Market Value (Issue): </span><label>{{portfolioEntry.marketValue | number:'1.2-2'}}</label>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-4 pflo-detail\">\n\t\t\t<span>Issue Ccy: </span><label>{{portfolioEntry.currency}}</label>\n\t\t</div>\n\t\t<div class=\"col-sm-4 pflo-detail\">\n\t\t\t<span>Total Gain (Issue): </span><label>{{portfolioEntry.totalGain | number:'1.2-2'}}</label>\n\t\t</div>\n\t\t<div class=\"col-sm-4 pflo-detail\">\n\t\t\t<span>Total % Gain: </span><label>{{portfolioEntry.totalPercentGain | percent:'1.2-2'}}</label>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-4 pflo-detail\">\n\t\t\t<span>50 Day MA: </span><label>{{portfolioEntry.ma50Day | number:'1.2-2'}}</label>\n\t\t</div>\n\t\t<div class=\"col-sm-4 pflo-detail\">\n\t\t\t<span>200 Day MA: </span><label>{{portfolioEntry.ma200Day | number:'1.2-2'}}</label>\n\t\t</div>\n\t\t<div class=\"col-sm-4 pflo-detail\">\n\t\t\t<span>Year Low: </span><label>{{portfolioEntry.yearLow | number:'1.2-2'}}</label>\n\t\t</div>\n\t<!-- </div>\n\t<div class=\"row\"> -->\n\t\t<div class=\"col-sm-4 pflo-detail\">\n\t\t\t<span>Year High: </span><label>{{portfolioEntry.yearHigh |  number:'1.2-2'}}</label>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-4 pflo-detail\">\n\t\t\t<span>Recommendation: </span><label>{{portfolioEntry.recommendation.direction}}</label>\n\t\t</div>\n\t\t<div class=\"col-sm-4 pflo-detail\">\n\t\t\t<ul>\n\t\t\t\t<li *ngFor=\"let contributor of portfolioEntry.recommendation.contributors\">\n\t\t\t\t\t{{contributor}}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-sm-2\">\n\t\t<button (click)=\"goBack()\">Back</button>\n\t</div>\n</div>\n"

/***/ }),

/***/ 787:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"auth.authenticated()\">\n\n\t<span class=\"alert alert-warning\" *ngIf=\"errorMessage\">{{errorMessage}}</span>\n\n\t<div class=\"row\" *ngIf=\"summary\">\n\t\t<div class=col-sm-4>\n\t\t\t<ul class=\"list-group\">\n\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\tMarket Value: {{summary.marketValueBase | currency:'USD':true}}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=col-sm-4>\n\t\t\t<ul class=\"list-group\">\n\t\t\t\t<li class=\"list-group-item\" [ngClass]=\"{greenCell: summary.dailyGainBase > 0, redCell: summary.dailyGainBase < 0}\">\n\t\t\t\t\tDaily Gain: {{summary.dailyGainBase | currency:'USD':true}}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=col-sm-4>\n\t\t\t<ul class=\"list-group\">\n\t\t\t\t<li class=\"list-group-item\" [ngClass]=\"{greenCell: summary.totalGainBase > 0, redCell: summary.totalGainBase < 0}\">\n\t\t\t\t\tTotal Gain: {{summary.totalGainBase | currency:'USD':true}}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row data-maintainer\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<form class=\"form-inline float-sm-left\">\n\t\t\t\t<button class=\"btn btn-primary btn-margin-top\" (click)=\"showAddHoldingForm=true\">Add Holding</button>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n\t<div class=\"row data-maintainer\" *ngIf=\"showAddHoldingForm\">\n\t\t<div class=\"col-sm-12 mt-sm-3\">\n\t\t\t\t<holding-detail-form [holding]=\"newHolding\" (submitted)=\"saveHolding($event)\" (closed)=\"showAddHoldingForm=false\"></holding-detail-form>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<ngx-datatable\n\t\t\t\t[rows]=\"portfolioEntries\"\n\t\t\t\t[columnMode]=\"'flex'\"\n\t\t\t\t[rowHeight]=\"'auto'\"\n\t\t\t\t[scrollbarH]=\"true\"\n\t\t\t\tclass=\"material\">\n\t\t\t\t<ngx-datatable-column prop=\"ticker\" [flexGrow]=\"0.9\">\n\t\t\t\t\t<template let-value=\"value\" ngx-datatable-cell-template>\n\t\t\t\t\t\t<a [routerLink]=\"['/portfolioEntry', value]\">{{value}}</a>\n\t\t\t\t\t</template>\n\t\t\t\t</ngx-datatable-column>\n        <ngx-datatable-column name=\"Shares\" prop=\"totalShares\" [flexGrow]=\"0.7\"></ngx-datatable-column>\n\t\t\t\t<ngx-datatable-column name=\"B/S\" prop=\"recommendation.direction\" [flexGrow]=\"0.7\">\n\t\t\t\t\t<template let-value=\"value\" ngx-datatable-cell-template>\n\t\t\t\t\t\t<span [ngClass]=\"{greenCell: value === 'BUY', redCell: value === 'SELL'}\">{{value}}</span>\n\t\t\t\t\t</template>\n\t\t\t\t</ngx-datatable-column>\n        <ngx-datatable-column name=\"Curr Price\" prop=\"currPrice\" [flexGrow]=\"0.8\">\n\t\t\t\t\t<template let-value=\"value\" ngx-datatable-cell-template>\n\t\t\t\t\t\t<div>{{value | number:'1.2-2'}}</div>\n\t\t\t\t\t</template>\n\t\t\t\t</ngx-datatable-column>\n\t\t\t\t<ngx-datatable-column name=\"Total % Gain\" prop=\"totalPercentGain\" [flexGrow]=\"0.9\">\n\t\t\t\t\t<template let-value=\"value\" ngx-datatable-cell-template>\n\t\t\t\t\t\t<div style=\"text-align:right\">\n\t\t\t\t\t\t\t<span [ngClass]=\"{greenCell: value > 0, redCell: value < 0}\">{{value | percent:'1.2-2'}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</template>\n\t\t\t\t</ngx-datatable-column>\n\t\t\t\t<ngx-datatable-column name=\"% Change\" prop=\"percentChange\" [flexGrow]=\"0.9\">\n\t\t\t\t\t<template let-value=\"value\" ngx-datatable-cell-template>\n\t\t\t\t\t\t<span [ngClass]=\"{greenCell: value > 0, redCell: value < 0}\">{{value | percent:'1.2-2'}}</span>\n\t\t\t\t\t</template>\n\t\t\t\t</ngx-datatable-column>\n        <ngx-datatable-column name=\"Market Val (Base)\" prop=\"marketValueBase\" [flexGrow]=\"1.3\" >\n\t\t\t\t\t<template let-value=\"value\" ngx-datatable-cell-template>\n\t\t\t\t\t\t{{value | currency:'USD':true}}\n\t\t\t\t\t</template>\n\t\t\t\t</ngx-datatable-column>\n\t\t\t\t<ngx-datatable-column name=\"Rebal\" prop=\"rebalToModel\" [flexGrow]=\"1.1\" >\n\t\t\t\t\t<template let-value=\"value\" ngx-datatable-cell-template>\n\t\t\t\t\t\t<span [ngClass]=\"{greenCell: value > 0, redCell: value < 0}\">{{value | currency:'USD':true}}</span>\n\t\t\t\t\t</template>\n\t\t\t\t</ngx-datatable-column>\n\t\t\t</ngx-datatable>\n\t\t</div>\n\t</div>\n\n</div>\n"

/***/ }),

/***/ 788:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"auth.authenticated()\">\n\n\t<div class=\"data-maintainer\">\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<label for=\"scaled-mv\">Scaled Market Value:</label>\n\t\t\t\t<div class=\"input-group\">\n\t  \t\t\t<span class=\"input-group-addon\">$</span>\n\t\t\t\t\t<input #scaledMVInput id=\"scaled-mv\" type=\"text\" [(ngModel)]=\"scaledMV\">\n\t\t\t\t\t<span class=\"input-group-btn\">\n\t       \t\t<button (click)=\"updateScaledMV(scaledMVInput.value)\" class=\"btn btn-sm btn-primary\">Update</button>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<ngx-datatable\n\t\t\t\t\t[rows]=\"portfolioEntries\"\n\t\t\t\t\t[columnMode]=\"'flex'\"\n\t\t\t\t\t[rowHeight]=\"'auto'\"\n\t\t\t\t\tclass=\"material\">\n\t\t\t\t\t<ngx-datatable-column prop=\"ticker\" [flexGrow]=\"0.9\"></ngx-datatable-column>\n\t        <ngx-datatable-column name=\"Shares\" prop=\"totalShares\" [flexGrow]=\"0.8\"></ngx-datatable-column>\n\t\t\t\t\t<ngx-datatable-column name=\"B/S\" prop=\"recommendation.direction\" [flexGrow]=\"0.8\">\n\t\t\t\t\t\t<template let-value=\"value\" ngx-datatable-cell-template>\n\t\t\t\t\t\t\t<span [ngClass]=\"{greenCell: value === 'BUY', redCell: value === 'SELL'}\">{{value}}</span>\n\t\t\t\t\t\t</template>\n\t\t\t\t\t</ngx-datatable-column>\n\t\t\t\t\t<ngx-datatable-column name=\"Total % Gain\" prop=\"totalPercentGain\" [flexGrow]=\"1\">\n\t\t\t\t\t\t<template let-value=\"value\" ngx-datatable-cell-template>\n\t\t\t\t\t\t\t<div style=\"text-align:right\">\n\t\t\t\t\t\t\t\t<span [ngClass]=\"{greenCell: value > 0, redCell: value < 0}\">{{value | percent:'1.2-2'}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</template>\n\t\t\t\t\t</ngx-datatable-column>\n\t\t\t\t\t<ngx-datatable-column name=\"Total Gain (Base)\" prop=\"totalGainBase\" [flexGrow]=\"1.3\">\n\t\t\t\t\t\t<template let-value=\"value\" ngx-datatable-cell-template>\n\t\t\t\t\t\t\t<div style=\"text-align:right\">\n\t\t\t\t\t\t\t\t<span [ngClass]=\"{greenCell: value > 0, redCell: value < 0}\">{{value | currency:'USD':true}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</template>\n\t\t\t\t\t</ngx-datatable-column>\n\t        <ngx-datatable-column name=\"Market Val (Base)\" prop=\"marketValueBase\" [flexGrow]=\"1.3\" >\n\t\t\t\t\t\t<template let-value=\"value\" ngx-datatable-cell-template>\n\t\t\t\t\t\t\t{{value | currency:'USD':true}}\n\t\t\t\t\t\t</template>\n\t\t\t\t\t</ngx-datatable-column>\n\t\t\t\t\t<ngx-datatable-column name=\"Rebal\" prop=\"rebalToModel\" [flexGrow]=\"1.2\" >\n\t\t\t\t\t\t<template let-value=\"value\" ngx-datatable-cell-template>\n\t\t\t\t\t\t\t<span [ngClass]=\"{greenCell: value > 0, redCell: value < 0}\">{{value | currency:'USD':true}}</span>\n\t\t\t\t\t\t</template>\n\t\t\t\t\t</ngx-datatable-column>\n\t\t\t\t\t<ngx-datatable-column name=\"Rebal Shares\" prop=\"rebalShares\" [flexGrow]=\"1\"></ngx-datatable-column>\n\t\t\t\t</ngx-datatable>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</div>\n"

/***/ }),

/***/ 789:
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(); tickerForm.reset()\" #tickerForm=\"ngForm\">\n\t<div class=\"row\" *ngIf=\"ticker\">\n\t\t<div class=\"form-group col-sm-2\">\n\t\t\t<label for=\"symbol\">Ticker</label>\n\t\t\t<input type=\"text\" class=\"form-control\" id=\"symbol\" required\n\t\t\t[(ngModel)]=\"ticker.symbol\" name=\"symbol\" #symbol=\"ngModel\">\n\t\t\t<div [hidden]=\"symbol.valid || symbol.pristine\" class=\"alert alert-danger\">\n\t\t\t\tTicker is required\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group col-sm-2\">\n\t\t\t<label for=\"currency\">Currency</label>\n\t\t\t<select class=\"form-control\" id=\"currency\" required [(ngModel)]=\"ticker.currency\"\n\t\t\t\tname=\"currency\" #currency=\"ngModel\">\n\t\t\t\t<option *ngFor=\"let currency of currencies\" [value]=\"currency\">{{currency}}</option>\n\t\t\t</select>\n\t\t\t<div [hidden]=\"currency.valid || currency.pristine\" class=\"alert alert-danger\">\n\t\t\t\tCurrency is required\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group col-sm-2\">\n\t\t\t<label for=\"exchange\">Exchange</label>\n\t\t\t<select class=\"form-control\" id=\"exchange\" required [(ngModel)]=\"ticker.exchange\"\n\t\t\t\tname=\"exchange\" #exchange=\"ngModel\">\n\t\t\t\t<option *ngFor=\"let exchange of exchanges\" [value]=\"exchange\">{{exchange}}</option>\n\t\t\t</select>\n\t\t</div>\n\t\t<div class=\"form-group col-sm-5\">\n\t\t\t<label for=\"fullName\">Full Name</label>\n\t\t\t<input type=\"text\" class=\"form-control\" id=\"fullName\" required\n\t\t\t[(ngModel)]=\"ticker.fullName\" name=\"fullName\" #fullName=\"ngModel\">\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-6\">\n\t\t\t<button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!tickerForm.form.valid\">Submit</button>\n\t\t\t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeForm()\">Close</button>\n\t\t</div>\n\t</div>\n</form>\n"

/***/ }),

/***/ 790:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"auth.authenticated()\">\n\n\t<div class=\"mt-sm-3 data-maintainer\">\n\n\t\t<div class=\"row mt-1\">\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<button class=\"btn btn-primary\" (click)=\"showTickerDetailForm=true\">Add Entry</button>\n\t\t\t\t<button *ngIf=\"selected.length > 0\" class=\"btn btn-secondary\" (click)=\"editTicker()\">Edit Entry</button>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\" *ngIf=\"showTickerDetailForm\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<ticker-detail-form  (submitted)=\"saveTicker($event)\"\n\t\t\t\t(closed)=\"showTickerDetailForm=false; editing=false\" [ticker]=\"currTicker\"></ticker-detail-form>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-10 col-sm-12 col-xs-12\">\n\t\t\t\t<ngx-datatable class=\"material\"\n\t\t\t\t\t[rows]=\"tickers\"\n\t\t\t\t\t[columnMode]=\"'flex'\"\n\t\t\t\t\t[rowHeight]=\"'auto'\"\n\t\t\t\t\t[selected]=\"selected\"\n          [selectionType]=\"'single'\"\n          (select)='onSelect($event)'>\n\t\t\t\t\t<ngx-datatable-column prop=\"symbol\" [flexGrow]=\"1.3\"></ngx-datatable-column>\n\t\t\t\t\t<ngx-datatable-column prop=\"currency\" [flexGrow]=\"1.4\"></ngx-datatable-column>\n\t\t\t\t\t<ngx-datatable-column prop=\"exchange\" [flexGrow]=\"1.8\"></ngx-datatable-column>\n\t\t\t\t\t<ngx-datatable-column prop=\"fullName\" [flexGrow]=\"5\"></ngx-datatable-column>\n\t\t\t\t</ngx-datatable>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>\n"

/***/ }),

/***/ 815:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(480);


/***/ })

},[815]);
//# sourceMappingURL=main.bundle.js.map