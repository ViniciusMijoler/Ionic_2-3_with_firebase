webpackJsonp([0],{

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var extractError = function (error) {
    // In a real world app, we might use a remote logging infrastructure
    var errMsg;
    if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Response */]) {
        var body = error.json() || '';
        var err = body.error || JSON.stringify(body);
        errMsg = error.status + " - " + (error.statusText || '') + " " + err;
    }
    else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return errMsg;
};
var BaseService = /** @class */ (function () {
    function BaseService() {
    }
    BaseService.prototype.handlePromiseError = function (error) {
        return Promise.reject(extractError(error));
    };
    BaseService.prototype.handleObservableError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(extractError(error));
    };
    BaseService.prototype.mapListKeys = function (list) {
        return list
            .snapshotChanges()
            .map(function (actions) { return actions.map(function (action) { return (__assign({ $key: action.key }, action.payload.val())); }); });
    };
    BaseService.prototype.mapObjectKey = function (object) {
        return object
            .snapshotChanges()
            .map(function (action) { return (__assign({ $key: action.key }, action.payload.val())); });
    };
    return BaseService;
}());

//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SigninPage = /** @class */ (function () {
    function SigninPage(alertCtrl, authProvider, formBuilder, loadingCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.signinForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern(emailRegex)])],
            password: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(6)]],
        });
    }
    SigninPage.prototype.onSubmit = function () {
        var _this = this;
        var loading = this.showLoading();
        this.authProvider.signinWithEmail(this.signinForm.value)
            .then(function (isLogged) {
            if (isLogged) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
                loading.dismiss();
            }
        }).catch(function (error) {
            console.log(error);
            loading.dismiss();
            _this.showAlert(error);
        });
    };
    SigninPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.showLoading = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        return loading;
    };
    SigninPage.prototype.showAlert = function (message) {
        this.alertCtrl.create({
            message: message,
            buttons: ['Ok']
        }).present();
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"F:\Vinicius GitProjetos\Ionic_2-3_with_firebase\src\pages\signin\signin.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Sign In</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <h1 text-center>\n\n    <ion-icon class="auth-icon" name="person-add" color="primary"> </ion-icon>\n\n  </h1>\n\n  <form [formGroup]="signinForm" (ngSubmit) = "onSubmit(); $event.preventDefault()">\n\n\n\n    <ion-item>\n\n        <ion-icon name="mail" item-left> </ion-icon>\n\n        <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-icon name="lock" item-left> </ion-icon>\n\n          <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n\n        </ion-item>\n\n\n\n        <br>\n\n\n\n        <button ion-button full type="submit" [disabled]="signinForm.invalid"> Enter </button>\n\n\n\n  </form>\n\n\n\n  <button ion-button full clear text-center (click)="onSignup()"> Sign Up </button>\n\n\n\n </ion-content>\n\n'/*ion-inline-end:"F:\Vinicius GitProjetos\Ionic_2-3_with_firebase\src\pages\signin\signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabalhoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_service__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(176);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the TabalhoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TrabalhoProvider = /** @class */ (function (_super) {
    __extends(TrabalhoProvider, _super);
    function TrabalhoProvider(afAuth, db) {
        var _this = _super.call(this) || this;
        _this.afAuth = afAuth;
        _this.db = db;
        _this.getTrabalhos();
        console.log('Hello TrabalhoProvider Provider');
        return _this;
    }
    TrabalhoProvider.prototype.getTrabalhos = function () {
        var _this = this;
        console.log("Consulta todos os trabalhos");
        this.afAuth.authState
            .subscribe(function (authUser) {
            if (authUser) {
                _this.trabalhos = _this.db.list("/trabalhos", function (ref) { return ref.orderByChild('timestamp'); });
            }
        });
    };
    TrabalhoProvider.prototype.create = function (trabalho) {
        return this.db.object("/trabalhos/" + trabalho.$key)
            .set(trabalho)
            .catch(this.handlePromiseError);
    };
    TrabalhoProvider.prototype.edit = function (trabalho) {
        return this.db.object("/trabalhos/" + trabalho.$key)
            .update({ titulo: trabalho.titulo, descricao: trabalho.descricao, aluno1: trabalho.aluno1, aluno2: trabalho.aluno2 })
            .catch(this.handlePromiseError);
    };
    TrabalhoProvider.prototype.remove = function (trabalho) {
        return this.db.list("/trabalhos")
            .remove(trabalho.$key)
            .catch(this.handlePromiseError);
    };
    TrabalhoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object])
    ], TrabalhoProvider);
    return TrabalhoProvider;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_0__base_service__["a" /* BaseService */]));

//# sourceMappingURL=trabalho.js.map

/***/ }),

/***/ 215:
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
webpackEmptyAsyncContext.id = 215;

/***/ }),

/***/ 260:
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
webpackEmptyAsyncContext.id = 260;

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_service__ = __webpack_require__(189);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function (_super) {
    __extends(AuthProvider, _super);
    function AuthProvider(afAuth, http) {
        var _this = _super.call(this) || this;
        _this.afAuth = afAuth;
        _this.http = http;
        console.log('Hello AuthProvider Provider');
        return _this;
    }
    // cria uma autenticação com email e senha
    // retorna o UID da autenticação
    AuthProvider.prototype.createAuthUser = function (user) {
        return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
            .catch(this.handlePromiseError);
    };
    // login ou sign - entrada no sistema
    // retorna true se entrou e false se não entrou
    AuthProvider.prototype.signinWithEmail = function (user) {
        return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
            .then(function (authUser) {
            return authUser != null;
        }).catch(this.handlePromiseError);
    };
    // logout - encerra a conexão com o firebase
    AuthProvider.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    Object.defineProperty(AuthProvider.prototype, "authenticated", {
        // verifica se usuário está autenticado no Firebase
        get: function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.afAuth
                    .authState
                    .first()
                    .subscribe(function (authUser) {
                    (authUser) ? resolve(true) : reject(false);
                });
            });
        },
        enumerable: true,
        configurable: true
    });
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AuthProvider);
    return AuthProvider;
}(__WEBPACK_IMPORTED_MODULE_3__base_service__["a" /* BaseService */]));

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabalhoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_trabalho_trabalho__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_user__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_trabalho_model__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TrabalhoPage = /** @class */ (function () {
    function TrabalhoPage(authProvider, trabalhoProvider, navCtrl, navParams, alertCtrl, formBuilder, loadingCtrl, userProvider) {
        this.authProvider = authProvider;
        this.trabalhoProvider = trabalhoProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.userProvider = userProvider;
    }
    TrabalhoPage.prototype.ionViewWillLoad = function () {
        this.trabalho = this.navParams.get('trabalho');
        if (!this.trabalho) {
            this.trabalho = new __WEBPACK_IMPORTED_MODULE_6__models_trabalho_model__["a" /* Trabalho */](0, '', '', '', '');
        }
        this.trabalhoForm = this.formBuilder.group({
            titulo: [this.trabalho.titulo, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(3)]],
            descricao: [this.trabalho.descricao, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(3)]],
            aluno1: [this.trabalho.aluno1, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(3)]],
            aluno2: [this.trabalho.aluno2, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(3)]]
        });
    };
    TrabalhoPage.prototype.ionViewCanEnter = function () {
        return this.authProvider.authenticated;
    };
    TrabalhoPage.prototype.showLoading = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        return loading;
    };
    TrabalhoPage.prototype.showAlert = function (message) {
        this.alertCtrl.create({
            message: message,
            buttons: ['Ok']
        }).present();
    };
    TrabalhoPage.prototype.onSubmit = function () {
        var _this = this;
        var loading = this.showLoading();
        var form = this.trabalhoForm.value;
        this.trabalho.titulo = form.titulo;
        this.trabalho.descricao = form.descricao;
        this.trabalho.aluno1 = form.aluno1;
        this.trabalho.aluno2 = form.aluno2;
        if (!this.trabalho.$key) {
            this.trabalhoProvider.create(this.trabalho)
                .then(function () {
                console.log('Trabalho cadastrado!');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
                loading.dismiss();
                _this.showAlert("Trabalho cadastrado!");
            })
                .catch(function (err) {
                console.log(err);
                loading.dismiss();
                _this.showAlert("Erro ao cadastrar trabalho! " + err.message);
            });
        }
        else {
            this.trabalhoProvider.edit(this.trabalho)
                .then(function (res) {
                console.log('Trabalho editado!');
                //this.navCtrl.setRoot(HomePage);
                loading.dismiss();
                _this.showAlert("Trabalho editado!");
            })
                .catch(function (err) {
                console.log(err);
                loading.dismiss();
                _this.showAlert("Erro ao editar trabalho! " + err.message);
            });
        }
    };
    TrabalhoPage.prototype.delete = function () {
        var _this = this;
        var loading = this.showLoading();
        var form = this.trabalhoForm.value;
        this.trabalho.titulo = form.titulo;
        this.trabalho.descricao = form.descricao;
        this.trabalho.aluno1 = form.aluno1;
        this.trabalho.aluno2 = form.aluno2;
        this.trabalhoProvider.remove(this.trabalho)
            .then(function () {
            console.log('Trabalho deletado!');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
            loading.dismiss();
            _this.showAlert("Trabalho deletado!");
        })
            .catch(function (err) {
            console.log(err);
            loading.dismiss();
            _this.showAlert("Erro ao excluir trabalho! " + err.message);
        });
    };
    TrabalhoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-trabalho',template:/*ion-inline-start:"F:\Vinicius GitProjetos\Ionic_2-3_with_firebase\src\pages\trabalho\trabalho.html"*/'<!--\n\n  Generated template for the TrabalhoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Trabalho</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="trabalhoForm" (ngSubmit)="onSubmit(); $event.preventDefault()">\n\n\n\n    <ion-item>\n\n      <ion-label floating>Título</ion-label>\n\n      <ion-input type="text" formControlName="titulo"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Descrição</ion-label>\n\n      <ion-input type="text" formControlName="descricao"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Aluno 1</ion-label>\n\n      <ion-input type="text" formControlName="aluno1"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Aluno 2</ion-label>\n\n      <ion-input type="text" formControlName="aluno2"></ion-input>\n\n    </ion-item>\n\n\n\n    <br>\n\n\n\n    <button ion-button full type="submit" [disabled]="trabalhoForm.invalid"> Salvar </button>\n\n\n\n    <button ion-button full type="button" color="danger" *ngIf="trabalho.$key" (click)="delete()"> Excluir </button>\n\n\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"F:\Vinicius GitProjetos\Ionic_2-3_with_firebase\src\pages\trabalho\trabalho.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__providers_trabalho_trabalho__["a" /* TrabalhoProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_trabalho_trabalho__["a" /* TrabalhoProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__providers_user_user__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_user_user__["a" /* UserProvider */]) === "function" && _h || Object])
    ], TrabalhoPage);
    return TrabalhoPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=trabalho.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_user_user__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = /** @class */ (function () {
    function SignupPage(alertCtrl, loadingCtrl, authProvider, formBuilder, navCtrl, navParams, userProvider) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authProvider = authProvider;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        var emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.signupForm = this.formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(3)]],
            username: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(3)]],
            telefone: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(11)])],
            cpf: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(11)])],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(emailRegex)])],
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6)]],
        });
    }
    SignupPage.prototype.onSubmit = function () {
        var _this = this;
        var loading = this.showLoading();
        var formUser = this.signupForm.value;
        var username = formUser.username;
        this.userProvider.userExists(username)
            .first()
            .subscribe(function (userExists) {
            if (!userExists) {
                _this.authProvider.createAuthUser({
                    email: formUser.email,
                    password: formUser.password
                }).then(function (authUser) {
                    delete formUser.password;
                    var uuid = authUser.uid;
                    _this.userProvider.create(formUser, uuid) // cria usuário
                        .then(function () {
                        console.log('Usuario cadastrado!');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                        loading.dismiss();
                    }).catch(function (error) {
                        console.log(error);
                        loading.dismiss();
                        _this.showAlert(error);
                    });
                }).catch(function (error) {
                    console.log(error);
                    loading.dismiss();
                    _this.showAlert(error);
                });
            }
            else {
                _this.showAlert("O username " + username + " j\u00E1 est\u00E1 sendo usado em outra conta!");
                loading.dismiss();
            }
        });
    };
    SignupPage.prototype.showLoading = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        return loading;
    };
    SignupPage.prototype.showAlert = function (message) {
        this.alertCtrl.create({
            message: message,
            buttons: ['Ok']
        }).present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"F:\Vinicius GitProjetos\Ionic_2-3_with_firebase\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Sign Up</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <h1 text-center>\n\n    <ion-icon class="auth-icon" name="person-add" color="primary"> </ion-icon>\n\n  </h1>\n\n  <form [formGroup]="signupForm" (ngSubmit)="onSubmit(); $event.preventDefault()">\n\n\n\n    <ion-item>\n\n      <ion-icon name="person" item-left> </ion-icon>\n\n      <ion-input type="text" placeholder="Name" formControlName="name"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="at" item-left> </ion-icon>\n\n      <ion-input type="text" placeholder="Username" formControlName="username"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="contact" item-left> </ion-icon>\n\n      <ion-input type="text" placeholder="Telefone" formControlName="telefone"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="person" item-left> </ion-icon>\n\n      <ion-input type="text" placeholder="CPF" formControlName="cpf"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="mail" item-left> </ion-icon>\n\n      <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="lock" item-left> </ion-icon>\n\n      <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n\n    </ion-item>\n\n\n\n    <br>\n\n\n\n    <button ion-button full type="submit" [disabled]="signupForm.invalid"> Create </button>\n\n\n\n  </form>\n\n\n\n</ion-content>'/*ion-inline-end:"F:\Vinicius GitProjetos\Ionic_2-3_with_firebase\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__providers_user_user__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_user_user__["a" /* UserProvider */]) === "function" && _g || Object])
    ], SignupPage);
    return SignupPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_signin_signin__ = __webpack_require__(203);

var BaseComponent = /** @class */ (function () {
    function BaseComponent(alertCtrl, authProvider, app, menuCtrl) {
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.app = app;
        this.menuCtrl = menuCtrl;
    }
    BaseComponent.prototype.ngOnInit = function () {
        this.navCtrl = this.app.getActiveNavs()[0];
    };
    BaseComponent.prototype.onLogout = function () {
        var _this = this;
        this.alertCtrl.create({
            message: 'Do you want to quit?',
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        _this.authProvider.logout()
                            .then(function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_signin_signin__["a" /* SigninPage */]);
                            // desabilita o menu
                            _this.menuCtrl.enable(false, 'user-menu');
                        });
                    }
                },
                {
                    text: 'No'
                }
            ]
        }).present();
    };
    return BaseComponent;
}());

//# sourceMappingURL=base.component.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(name, username, telefone, cpf, email, photo) {
        this.name = name;
        this.username = username;
        this.telefone = telefone;
        this.cpf = cpf;
        this.email = email;
        this.photo = photo;
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProfilePage = /** @class */ (function () {
    function UserProfilePage(userProvider, authProvider, navCtrl, navParams) {
        this.userProvider = userProvider;
        this.authProvider = authProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.canEdit = false;
    }
    UserProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userProvider.currentUser
            .valueChanges()
            .subscribe(function (user) {
            _this.currentUser = user;
        });
    };
    UserProfilePage.prototype.ionViewCanEnter = function () {
        return this.authProvider.authenticated;
    };
    UserProfilePage.prototype.onSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.filePhoto) {
            var uploadTask_1 = this.userProvider.uploadPhoto(this.filePhoto, this.currentUser.$key);
            uploadTask_1.on('state_changed', function (snapshot) {
                _this.uploadProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            }, function (error) {
                // catch error
            });
            uploadTask_1.then(function (UploadTaskSnapshot) {
                _this.editUser(uploadTask_1.snapshot.downloadURL);
            });
        }
        else {
            this.editUser();
        }
    };
    UserProfilePage.prototype.editUser = function (photoUrl) {
        var _this = this;
        console.log("Usuário editado");
        this.userProvider
            .edit({
            name: this.currentUser.name,
            username: this.currentUser.username,
            telefone: this.currentUser.telefone,
            cpf: this.currentUser.cpf,
            photo: photoUrl || this.currentUser.photo || ''
        }).then(function () {
            _this.canEdit = false;
            _this.filePhoto = undefined;
            _this.uploadProgress = 0;
        });
    };
    UserProfilePage.prototype.onPhoto = function (event) {
        this.filePhoto = event.target.files[0];
    };
    UserProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-profile',template:/*ion-inline-start:"F:\Vinicius GitProjetos\Ionic_2-3_with_firebase\src\pages\user-profile\user-profile.html"*/'<ion-header>\n\n\n\n  <custom-logged-header [title]="\'User Profile\'"></custom-logged-header>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <user-info [user]="currentUser"></user-info>\n\n\n\n  <button ion-button block (click)="canEdit = !canEdit">Edit</button>\n\n\n\n  <form (ngSubmit)="onSubmit($event)" *ngIf="canEdit" #profileForm="ngForm">\n\n\n\n    <ion-item>\n\n      <ion-icon name="person" item-start></ion-icon>\n\n      <ion-input type="text" placeholder="Name" name="name" [(ngModel)]="currentUser.name" required minlenght="3">\n\n      </ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="at" item-start></ion-icon>\n\n      <ion-input type="text" placeholder="Username" name="username" [(ngModel)]="currentUser.username" required minlenght="3">\n\n      </ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="contact" item-start></ion-icon>\n\n    <ion-input type="text" placeholder="Telefone" name="telefone" [(ngModel)]="currentUser.telefone" minlenght="11" maxlenght="11">\n\n      </ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="person" item-start></ion-icon>\n\n      <ion-input type="text" placeholder="CPF" name="cpf" [(ngModel)]="currentUser.cpf" required minlenght="11" maxlenght="11">\n\n      </ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <input type="file" accept="image/*" (change)="onPhoto($event)">\n\n    </ion-item>\n\n\n\n    <progress-bar *ngIf="uploadProgress" [progress]="uploadProgress"></progress-bar>\n\n\n\n    <br>\n\n    <button ion-button block type="submit" [disabled]="profileForm.form.invalid">Save</button>\n\n\n\n  </form>\n\n\n\n</ion-content>'/*ion-inline-end:"F:\Vinicius GitProjetos\Ionic_2-3_with_firebase\src\pages\user-profile\user-profile.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _d || Object])
    ], UserProfilePage);
    return UserProfilePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=user-profile.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(452);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_progress_bar_progress_bar__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signin_signin__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_user_user__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_custom_logged_header_custom_logged_header__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_capitalize_capitalize__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_user_info_user_info__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_user_menu_user_menu__ = __webpack_require__(839);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_user_profile_user_profile__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_trabalho_trabalho__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_trabalho_trabalho__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var firebaseAppConfig = {
    apiKey: "AIzaSyBGLJ3ORodAvuGaDGDYZ9m_2j5HZIIxQ8w",
    authDomain: "vm-ionic-first-app.firebaseapp.com",
    databaseURL: "https://vm-ionic-first-app.firebaseio.com",
    projectId: "vm-ionic-first-app",
    storageBucket: "vm-ionic-first-app.appspot.com",
    messagingSenderId: "1072774317202"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_17__pipes_capitalize_capitalize__["a" /* CapitalizePipe */],
                __WEBPACK_IMPORTED_MODULE_16__components_custom_logged_header_custom_logged_header__["a" /* CustomLoggedHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_18__components_user_info_user_info__["a" /* UserInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_user_menu_user_menu__["a" /* UserMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_user_profile_user_profile__["a" /* UserProfilePage */],
                __WEBPACK_IMPORTED_MODULE_0__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_trabalho_trabalho__["a" /* TrabalhoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAppConfig),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_user_profile_user_profile__["a" /* UserProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_trabalho_trabalho__["a" /* TrabalhoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_15__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_trabalho_trabalho__["a" /* TrabalhoProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], ProgressBarComponent.prototype, "progress", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'progress-bar',template:/*ion-inline-start:"F:\Vinicius GitProjetos\Ionic_2-3_with_firebase\src\components\progress-bar\progress-bar.html"*/'<div class="progress-outer">\n\n    <div class="progress-inner" [style.width]="progress + \'%\'">\n\n      {{ progress }}%\n\n    </div>\n\n  </div>'/*ion-inline-end:"F:\Vinicius GitProjetos\Ionic_2-3_with_firebase\src\components\progress-bar\progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_service__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_storage__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_storage__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserProvider = /** @class */ (function (_super) {
    __extends(UserProvider, _super);
    function UserProvider(db, afAuth, firebaseApp) {
        var _this = _super.call(this) || this;
        _this.db = db;
        _this.afAuth = afAuth;
        _this.firebaseApp = firebaseApp;
        _this.listenAuthState();
        return _this;
    }
    // recupera a lista de usuários e retira usuário logado
    UserProvider.prototype.setUsers = function (uidToExclude) {
        this.users = this.mapListKeys(this.db.list("/users", function (ref) { return ref.orderByChild('name'); }))
            .map(function (users) {
            // retira o usuário logado da lista
            return users.filter(function (user) { return user.$key !== uidToExclude; });
        });
    };
    // cria um usuário no RealTime DataBase com o UID da autenticação
    UserProvider.prototype.create = function (user, uuid) {
        return this.db.object("/users/" + uuid)
            .set(user)
            .catch(this.handlePromiseError);
    };
    // verifica se o username utilizado no cadastro já existe
    UserProvider.prototype.userExists = function (username) {
        return this.db.list("/users", function (ref) { return ref.orderByChild('username').equalTo(username); })
            .valueChanges()
            .map(function (users) {
            console.log(" Tamanho " + users.length);
            return users.length > 0;
        }).catch(this.handleObservableError);
    };
    // executado quando usuário faz login
    UserProvider.prototype.listenAuthState = function () {
        var _this = this;
        this.afAuth
            .authState
            .subscribe(function (authUser) {
            if (authUser) {
                console.log('Auth state alterado!');
                _this.currentUser = _this.db.object("/users/" + authUser.uid);
                _this.setUsers(authUser.uid);
            }
        });
    };
    // recupera usuário pelo ID
    UserProvider.prototype.get = function (userId) {
        return this.db.object("/users/" + userId);
    };
    UserProvider.prototype.edit = function (user) {
        return this.currentUser
            .update(user)
            .catch(this.handlePromiseError);
    };
    UserProvider.prototype.uploadPhoto = function (file, userId) {
        return this.firebaseApp
            .storage()
            .ref()
            .child("/users/" + userId)
            .put(file);
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* FirebaseApp */]])
    ], UserProvider);
    return UserProvider;
}(__WEBPACK_IMPORTED_MODULE_4__base_service__["a" /* BaseService */]));

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_user_user__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(authProvider, platform, statusBar, splashScreen, userProvider) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__["a" /* SigninPage */];
        authProvider
            .afAuth
            .authState
            .subscribe(function (authUser) {
            if (authUser) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */];
                userProvider.currentUser
                    .valueChanges()
                    .subscribe(function (user) {
                    _this.currentUser = user;
                });
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__["a" /* SigninPage */];
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\Vinicius GitProjetos\Ionic_2-3_with_firebase\src\app\app.html"*/'<ion-menu [content]="content" enabled="false" id="user-menu" persistence="true"> \n\n    <user-menu [user]="currentUser"> </user-menu>\n\n</ion-menu>\n\n<ion-nav #content [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"F:\Vinicius GitProjetos\Ionic_2-3_with_firebase\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_0__providers_user_user__["a" /* UserProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trabalho; });
var Trabalho = /** @class */ (function () {
    function Trabalho(id, titulo, descricao, aluno1, aluno2) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.aluno1 = aluno1;
        this.aluno2 = aluno2;
    }
    return Trabalho;
}());

//# sourceMappingURL=trabalho.model.js.map

/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomLoggedHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_component__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(39);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CustomLoggedHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CustomLoggedHeaderComponent = /** @class */ (function (_super) {
    __extends(CustomLoggedHeaderComponent, _super);
    function CustomLoggedHeaderComponent(alertCtrl, authProvider, app, menuCtrl) {
        var _this = _super.call(this, alertCtrl, authProvider, app, menuCtrl) || this;
        _this.alertCtrl = alertCtrl;
        _this.authProvider = authProvider;
        _this.app = app;
        _this.menuCtrl = menuCtrl;
        return _this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CustomLoggedHeaderComponent.prototype, "title", void 0);
    CustomLoggedHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'custom-logged-header',template:/*ion-inline-start:"F:\Vinicius GitProjetos\Ionic_2-3_with_firebase\src\components\custom-logged-header\custom-logged-header.html"*/'\n\n<ion-navbar>\n\n\n\n    <button ion-button menuToggle="user-menu">\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n  <ion-title> {{title}} </ion-title>\n\n\n\n  <ion-buttons end>\n\n\n\n    <button ion-button icon-only (click)="onLogout()"> \n\n      <ion-icon name="exit"> </ion-icon>\n\n    </button>\n\n  </ion-buttons>\n\n\n\n\n\n</ion-navbar>'/*ion-inline-end:"F:\Vinicius GitProjetos\Ionic_2-3_with_firebase\src\components\custom-logged-header\custom-logged-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* MenuController */]])
    ], CustomLoggedHeaderComponent);
    return CustomLoggedHeaderComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_component__["a" /* BaseComponent */]));

//# sourceMappingURL=custom-logged-header.js.map

/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value, onlyFirst) {
        if (onlyFirst)
            return value.charAt(0).toUpperCase() + value.substr(1);
        var words = value.split(' ');
        var output = '';
        words.forEach(function (value, index, words) {
            output += value.charAt(0).toUpperCase() + value.substr(1).toLowerCase() + ' ';
        });
        return output;
    };
    CapitalizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'capitalize'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CapitalizePipe);
    return CapitalizePipe;
}());

//# sourceMappingURL=capitalize.js.map

/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent() {
        this.isMenu = false;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */])
    ], UserInfoComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], UserInfoComponent.prototype, "isMenu", void 0);
    UserInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'user-info',template:/*ion-inline-start:"F:\Vinicius GitProjetos\Ionic_2-3_with_firebase\src\components\user-info\user-info.html"*/'<div *ngIf="user">\n\n    <ion-avatar [ngClass]="{\'custom-background\': isMenu}">\n\n        <img class="round" [src]="user.photo || \'assets/imgs/no-photo.jpg\'">\n\n    </ion-avatar>\n\n  <h2 text-center>{{ user.name }}</h2>\n\n  <p text-center>@{{ user.username }}</p>\n\n</div>'/*ion-inline-end:"F:\Vinicius GitProjetos\Ionic_2-3_with_firebase\src\components\user-info\user-info.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], UserInfoComponent);
    return UserInfoComponent;
}());

//# sourceMappingURL=user-info.js.map

/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_component__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_user_profile_user_profile__ = __webpack_require__(446);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the UserMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var UserMenuComponent = /** @class */ (function (_super) {
    __extends(UserMenuComponent, _super);
    function UserMenuComponent(alertCtrl, authProvider, app, menuCtrl) {
        var _this = _super.call(this, alertCtrl, authProvider, app, menuCtrl) || this;
        _this.alertCtrl = alertCtrl;
        _this.authProvider = authProvider;
        _this.app = app;
        _this.menuCtrl = menuCtrl;
        return _this;
    }
    UserMenuComponent.prototype.onProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_user_profile_user_profile__["a" /* UserProfilePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('user'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */])
    ], UserMenuComponent.prototype, "currentUser", void 0);
    UserMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'user-menu',template:/*ion-inline-start:"F:\Vinicius GitProjetos\Ionic_2-3_with_firebase\src\components\user-menu\user-menu.html"*/'<ion-content>\n\n\n\n    <user-info [user]="currentUser" [isMenu]="true"></user-info>\n\n  \n\n    <ion-list no-lines>\n\n      <button ion-item icon-right detail-none menuClose="user-menu" (click)="onProfile()">\n\n        Profile\n\n        <ion-icon name="person" item-end></ion-icon>\n\n      </button>\n\n      <button ion-item icon-right detail-none menuClose="user-menu" (click)="onLogout()">\n\n        Logout\n\n        <ion-icon name="log-out" item-end></ion-icon>\n\n      </button>\n\n    </ion-list>\n\n  \n\n  </ion-content>'/*ion-inline-end:"F:\Vinicius GitProjetos\Ionic_2-3_with_firebase\src\components\user-menu\user-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* MenuController */]])
    ], UserMenuComponent);
    return UserMenuComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_component__["a" /* BaseComponent */]));

//# sourceMappingURL=user-menu.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_user__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trabalho_trabalho__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_trabalho_trabalho__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(authProvider, navCtrl, userProvider, menuController, trabalhoProvider) {
        this.authProvider = authProvider;
        this.navCtrl = navCtrl;
        this.userProvider = userProvider;
        this.menuController = menuController;
        this.trabalhoProvider = trabalhoProvider;
        this.view = 'trabalho';
        this.trabalhoPage = __WEBPACK_IMPORTED_MODULE_4__trabalho_trabalho__["a" /* TrabalhoPage */];
    }
    HomePage.prototype.ionViewCanEnter = function () {
        return this.authProvider.authenticated;
    };
    HomePage.prototype.ionViewDidLoad = function () {
        // habilita o menu depois que usuário estiver logado
        this.menuController.enable(true, 'user-menu');
        this.trabalhos = this.trabalhoProvider.mapListKeys(this.trabalhoProvider.trabalhos);
    };
    HomePage.prototype.onTrabalhoOpen = function (trabalho) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__trabalho_trabalho__["a" /* TrabalhoPage */], {
            trabalho: trabalho
        });
    };
    HomePage.prototype.onLogout = function () {
        this.authProvider.logout();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\Vinicius GitProjetos\Ionic_2-3_with_firebase\src\pages\home\home.html"*/'<ion-header>\n\n\n\n  <custom-logged-header [title]="view | capitalize:true"> </custom-logged-header>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <button ion-button (click)="navCtrl.push(trabalhoPage)" full> Adicionar </button>\n\n  <div [ngSwitch]="view">\n\n    <ion-list *ngSwitchCase="\'trabalho\'" no-lines>\n\n      <button ion-item *ngFor="let trabalho of trabalhos | async" (click)="onTrabalhoOpen(trabalho)">\n\n        <h2> {{ trabalho.titulo }} </h2>\n\n      </button>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"F:\Vinicius GitProjetos\Ionic_2-3_with_firebase\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__providers_user_user__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_user_user__["a" /* UserProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* MenuController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers_trabalho_trabalho__["a" /* TrabalhoProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_trabalho_trabalho__["a" /* TrabalhoProvider */]) === "function" && _e || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[447]);
//# sourceMappingURL=main.js.map