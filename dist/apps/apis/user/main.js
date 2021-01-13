(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/apis/user/src/app.module.ts":
/*!******************************************!*\
  !*** ./apps/apis/user/src/app.module.ts ***!
  \******************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.module */ "./apps/apis/user/src/core/core.module.ts");
/* harmony import */ var _features_account_account_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/account/account.module */ "./apps/apis/user/src/features/account/account.module.ts");




let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"], _features_account_account_module__WEBPACK_IMPORTED_MODULE_3__["AccountModule"]],
    })
], AppModule);



/***/ }),

/***/ "./apps/apis/user/src/core/authentication/authentication.controller.ts":
/*!*****************************************************************************!*\
  !*** ./apps/apis/user/src/core/authentication/authentication.controller.ts ***!
  \*****************************************************************************/
/*! exports provided: AuthenticationController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationController", function() { return AuthenticationController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let AuthenticationController = class AuthenticationController {
};
AuthenticationController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('authentication')
], AuthenticationController);



/***/ }),

/***/ "./apps/apis/user/src/core/authentication/authentication.module.ts":
/*!*************************************************************************!*\
  !*** ./apps/apis/user/src/core/authentication/authentication.module.ts ***!
  \*************************************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authentication_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.controller */ "./apps/apis/user/src/core/authentication/authentication.controller.ts");



let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        controllers: [_authentication_controller__WEBPACK_IMPORTED_MODULE_2__["AuthenticationController"]],
    })
], AuthenticationModule);



/***/ }),

/***/ "./apps/apis/user/src/core/configuration/configuration.module.ts":
/*!***********************************************************************!*\
  !*** ./apps/apis/user/src/core/configuration/configuration.module.ts ***!
  \***********************************************************************/
/*! exports provided: ConfigurationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationModule", function() { return ConfigurationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let ConfigurationModule = class ConfigurationModule {
};
ConfigurationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({})
], ConfigurationModule);



/***/ }),

/***/ "./apps/apis/user/src/core/core.module.ts":
/*!************************************************!*\
  !*** ./apps/apis/user/src/core/core.module.ts ***!
  \************************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication/authentication.module */ "./apps/apis/user/src/core/authentication/authentication.module.ts");
/* harmony import */ var _database_database_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./database/database.module */ "./apps/apis/user/src/core/database/database.module.ts");
/* harmony import */ var _health_health_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./health/health.module */ "./apps/apis/user/src/core/health/health.module.ts");
/* harmony import */ var _observability_observability_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./observability/observability.module */ "./apps/apis/user/src/core/observability/observability.module.ts");
/* harmony import */ var _configuration_configuration_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuration/configuration.module */ "./apps/apis/user/src/core/configuration/configuration.module.ts");
/* harmony import */ var _metrics_metrics_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./metrics/metrics.module */ "./apps/apis/user/src/core/metrics/metrics.module.ts");








let CoreModule = class CoreModule {
};
CoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_2__["AuthenticationModule"],
            _database_database_module__WEBPACK_IMPORTED_MODULE_3__["DatabaseModule"],
            _health_health_module__WEBPACK_IMPORTED_MODULE_4__["HealthModule"],
            _observability_observability_module__WEBPACK_IMPORTED_MODULE_5__["ObservabilityModule"],
            _configuration_configuration_module__WEBPACK_IMPORTED_MODULE_6__["ConfigurationModule"],
            _metrics_metrics_module__WEBPACK_IMPORTED_MODULE_7__["MetricsModule"],
        ],
    })
], CoreModule);



/***/ }),

/***/ "./apps/apis/user/src/core/database/database.module.ts":
/*!*************************************************************!*\
  !*** ./apps/apis/user/src/core/database/database.module.ts ***!
  \*************************************************************/
/*! exports provided: DatabaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseModule", function() { return DatabaseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sources_api_api_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sources/api/api.module */ "./apps/apis/user/src/core/database/sources/api/api.module.ts");



let DatabaseModule = class DatabaseModule {
};
DatabaseModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_sources_api_api_module__WEBPACK_IMPORTED_MODULE_2__["ApiModule"]],
    })
], DatabaseModule);



/***/ }),

/***/ "./apps/apis/user/src/core/database/sources/api/api.module.ts":
/*!********************************************************************!*\
  !*** ./apps/apis/user/src/core/database/sources/api/api.module.ts ***!
  \********************************************************************/
/*! exports provided: ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return ApiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _orm_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orm.module */ "./apps/apis/user/src/core/database/sources/api/orm.module.ts");
/* harmony import */ var _connection_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connection.module */ "./apps/apis/user/src/core/database/sources/api/connection.module.ts");




let ApiModule = class ApiModule {
};
ApiModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_orm_module__WEBPACK_IMPORTED_MODULE_2__["OrmModule"], _connection_module__WEBPACK_IMPORTED_MODULE_3__["ConnectionModule"]],
    })
], ApiModule);



/***/ }),

/***/ "./apps/apis/user/src/core/database/sources/api/connection.module.ts":
/*!***************************************************************************!*\
  !*** ./apps/apis/user/src/core/database/sources/api/connection.module.ts ***!
  \***************************************************************************/
/*! exports provided: ConnectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionModule", function() { return ConnectionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _connection_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connection.provider */ "./apps/apis/user/src/core/database/sources/api/connection.provider.ts");



let ConnectionModule = class ConnectionModule {
};
ConnectionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        providers: [_connection_provider__WEBPACK_IMPORTED_MODULE_2__["ConnectionProvider"]],
        exports: [_connection_provider__WEBPACK_IMPORTED_MODULE_2__["ConnectionProvider"]],
    })
], ConnectionModule);



/***/ }),

/***/ "./apps/apis/user/src/core/database/sources/api/connection.provider.ts":
/*!*****************************************************************************!*\
  !*** ./apps/apis/user/src/core/database/sources/api/connection.provider.ts ***!
  \*****************************************************************************/
/*! exports provided: ConnectionProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionProvider", function() { return ConnectionProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ormconfig_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ormconfig.json */ "./apps/apis/user/src/core/database/sources/api/ormconfig.json");
var _ormconfig_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./ormconfig.json */ "./apps/apis/user/src/core/database/sources/api/ormconfig.json", 1);
/* harmony import */ var _migrations_1610493939987_CreatePersonsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./migrations/1610493939987-CreatePersonsTable */ "./apps/apis/user/src/core/database/sources/api/migrations/1610493939987-CreatePersonsTable.ts");
/* harmony import */ var _migrations_1610494267701_CreateUsersTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./migrations/1610494267701-CreateUsersTable */ "./apps/apis/user/src/core/database/sources/api/migrations/1610494267701-CreateUsersTable.ts");
/* harmony import */ var _migrations_1610497375029_CreateSessionTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./migrations/1610497375029-CreateSessionTable */ "./apps/apis/user/src/core/database/sources/api/migrations/1610497375029-CreateSessionTable.ts");
/* harmony import */ var _entities_person_entity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entities/person.entity */ "./apps/apis/user/src/core/database/sources/api/entities/person.entity.ts");
/* harmony import */ var _entities_user_user_entity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./entities/user/user.entity */ "./apps/apis/user/src/core/database/sources/api/entities/user/user.entity.ts");
/* harmony import */ var _entities_session_entity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entities/session.entity */ "./apps/apis/user/src/core/database/sources/api/entities/session.entity.ts");









let ConnectionProvider = class ConnectionProvider {
    constructor() {
        this.config = Object.assign(Object.assign({}, _ormconfig_json__WEBPACK_IMPORTED_MODULE_2__), { migrations: [
                _migrations_1610493939987_CreatePersonsTable__WEBPACK_IMPORTED_MODULE_3__["CreatePersonsTable1610493939987"],
                _migrations_1610494267701_CreateUsersTable__WEBPACK_IMPORTED_MODULE_4__["CreateUsersTable1610494267701"],
                _migrations_1610497375029_CreateSessionTable__WEBPACK_IMPORTED_MODULE_5__["CreateSessionTable1610497375029"],
            ], entities: [_entities_person_entity__WEBPACK_IMPORTED_MODULE_6__["Person"], _entities_user_user_entity__WEBPACK_IMPORTED_MODULE_7__["User"], _entities_session_entity__WEBPACK_IMPORTED_MODULE_8__["Session"]] });
    }
};
ConnectionProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ConnectionProvider);



/***/ }),

/***/ "./apps/apis/user/src/core/database/sources/api/entities/person.entity.ts":
/*!********************************************************************************!*\
  !*** ./apps/apis/user/src/core/database/sources/api/entities/person.entity.ts ***!
  \********************************************************************************/
/*! exports provided: Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user_user_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.entity */ "./apps/apis/user/src/core/database/sources/api/entities/user/user.entity.ts");
var _a;



let Person = class Person {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryColumn"])({ type: 'uuid' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Person.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Index"])(),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({ name: 'name', type: 'varchar', length: 256 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Person.prototype, "name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["OneToMany"])(() => _user_user_entity__WEBPACK_IMPORTED_MODULE_2__["User"], (user) => user.person, { lazy: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], Person.prototype, "users", void 0);
Person = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])('persons')
], Person);



/***/ }),

/***/ "./apps/apis/user/src/core/database/sources/api/entities/session.entity.ts":
/*!*********************************************************************************!*\
  !*** ./apps/apis/user/src/core/database/sources/api/entities/session.entity.ts ***!
  \*********************************************************************************/
/*! exports provided: Session */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return Session; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
var _a, _b;


let Session = class Session {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryColumn"])({ type: 'uuid' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Session.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Index"])(),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({ name: 'user_id', type: 'uuid', nullable: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Session.prototype, "userId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({
        name: 'expires_at',
        type: 'timestamp with time zone',
        nullable: false,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Session.prototype, "expiresAt", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["CreateDateColumn"])({
        name: 'created_at',
        type: 'timestamp with time zone',
        nullable: false,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Session.prototype, "createdAt", void 0);
Session = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])('sessions')
], Session);



/***/ }),

/***/ "./apps/apis/user/src/core/database/sources/api/entities/user/user.entity.ts":
/*!***********************************************************************************!*\
  !*** ./apps/apis/user/src/core/database/sources/api/entities/user/user.entity.ts ***!
  \***********************************************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _person_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../person.entity */ "./apps/apis/user/src/core/database/sources/api/entities/person.entity.ts");
var _a;



let User = class User extends typeorm__WEBPACK_IMPORTED_MODULE_1__["BaseEntity"] {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryColumn"])({ type: 'uuid' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], User.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Index"])(),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({ name: 'email', type: 'varchar', length: 254, unique: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], User.prototype, "email", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({ name: 'password', type: 'varchar', length: 256 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], User.prototype, "password", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({ name: 'person_id', type: 'character varying', nullable: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], User.prototype, "personId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["ManyToOne"])(() => _person_entity__WEBPACK_IMPORTED_MODULE_2__["Person"], (person) => person.users, {
        lazy: true,
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
    }),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["JoinColumn"])({ name: 'person_id' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], User.prototype, "person", void 0);
User = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])('users')
], User);



/***/ }),

/***/ "./apps/apis/user/src/core/database/sources/api/migrations/1610493939987-CreatePersonsTable.ts":
/*!*****************************************************************************************************!*\
  !*** ./apps/apis/user/src/core/database/sources/api/migrations/1610493939987-CreatePersonsTable.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CreatePersonsTable1610493939987 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePersonsTable1610493939987", function() { return CreatePersonsTable1610493939987; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);


class CreatePersonsTable1610493939987 {
    up(queryRunner) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm__WEBPACK_IMPORTED_MODULE_1__["Table"]({
                name: CreatePersonsTable1610493939987.TABLE_NAME,
                indices: [
                    {
                        columnNames: ['name'],
                    },
                ],
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        length: '256',
                    },
                ],
            }), false, false, true);
        });
    }
    down(queryRunner) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield queryRunner.dropTable(CreatePersonsTable1610493939987.TABLE_NAME, false, false, true);
        });
    }
}
CreatePersonsTable1610493939987.TABLE_NAME = 'persons';


/***/ }),

/***/ "./apps/apis/user/src/core/database/sources/api/migrations/1610494267701-CreateUsersTable.ts":
/*!***************************************************************************************************!*\
  !*** ./apps/apis/user/src/core/database/sources/api/migrations/1610494267701-CreateUsersTable.ts ***!
  \***************************************************************************************************/
/*! exports provided: CreateUsersTable1610494267701 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUsersTable1610494267701", function() { return CreateUsersTable1610494267701; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _1610493939987_CreatePersonsTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./1610493939987-CreatePersonsTable */ "./apps/apis/user/src/core/database/sources/api/migrations/1610493939987-CreatePersonsTable.ts");



class CreateUsersTable1610494267701 {
    up(queryRunner) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const foreignKeys = [
                {
                    columnNames: ['person_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: _1610493939987_CreatePersonsTable__WEBPACK_IMPORTED_MODULE_2__["CreatePersonsTable1610493939987"].TABLE_NAME,
                    onDelete: 'CASCADE',
                    onUpdate: 'NO ACTION',
                },
            ];
            const indices = [
                {
                    columnNames: ['email'],
                },
            ];
            const columns = [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                },
                {
                    name: 'email',
                    type: 'varchar',
                    length: '254',
                    isUnique: true,
                },
                {
                    name: 'password',
                    type: 'varchar',
                    length: '256',
                },
                {
                    name: 'person_id',
                    type: 'uuid',
                    isNullable: false,
                },
            ];
            yield queryRunner.createTable(new typeorm__WEBPACK_IMPORTED_MODULE_1__["Table"]({
                name: CreateUsersTable1610494267701.TABLE_NAME,
                foreignKeys,
                indices,
                columns,
            }), false, true, true);
        });
    }
    down(queryRunner) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield queryRunner.dropTable(CreateUsersTable1610494267701.TABLE_NAME, false, true, true);
        });
    }
}
CreateUsersTable1610494267701.TABLE_NAME = 'users';


/***/ }),

/***/ "./apps/apis/user/src/core/database/sources/api/migrations/1610497375029-CreateSessionTable.ts":
/*!*****************************************************************************************************!*\
  !*** ./apps/apis/user/src/core/database/sources/api/migrations/1610497375029-CreateSessionTable.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CreateSessionTable1610497375029 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSessionTable1610497375029", function() { return CreateSessionTable1610497375029; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);


class CreateSessionTable1610497375029 {
    up(queryRunner) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm__WEBPACK_IMPORTED_MODULE_1__["Table"]({
                name: CreateSessionTable1610497375029.TABLE_NAME,
                indices: [
                    {
                        columnNames: ['user_id'],
                    },
                ],
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'user_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'expires_at',
                        type: 'timestamp with time zone',
                        isNullable: false,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp with time zone',
                        isNullable: false,
                        default: 'now()',
                    },
                ],
            }), false, false, true);
        });
    }
    down(queryRunner) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield queryRunner.dropTable(CreateSessionTable1610497375029.TABLE_NAME, false, false, true);
        });
    }
}
CreateSessionTable1610497375029.TABLE_NAME = 'sessions';


/***/ }),

/***/ "./apps/apis/user/src/core/database/sources/api/orm.module.ts":
/*!********************************************************************!*\
  !*** ./apps/apis/user/src/core/database/sources/api/orm.module.ts ***!
  \********************************************************************/
/*! exports provided: OrmModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrmModule", function() { return OrmModule; });
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _connection_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection.provider */ "./apps/apis/user/src/core/database/sources/api/connection.provider.ts");
/* harmony import */ var _connection_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connection.module */ "./apps/apis/user/src/core/database/sources/api/connection.module.ts");



const OrmModule = _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_0__["TypeOrmModule"].forRootAsync({
    imports: [_connection_module__WEBPACK_IMPORTED_MODULE_2__["ConnectionModule"]],
    useFactory(connection) {
        return connection.config;
    },
    inject: [_connection_provider__WEBPACK_IMPORTED_MODULE_1__["ConnectionProvider"]],
});


/***/ }),

/***/ "./apps/apis/user/src/core/database/sources/api/ormconfig.json":
/*!*********************************************************************!*\
  !*** ./apps/apis/user/src/core/database/sources/api/ormconfig.json ***!
  \*********************************************************************/
/*! exports provided: name, type, host, username, port, password, database, maxQueryExecutionTime, migrationsTransactionMode, migrations, entities, logging, cli, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"API_DATABASE\",\"type\":\"postgres\",\"host\":\"localhost\",\"username\":\"user\",\"port\":5432,\"password\":\"password\",\"database\":\"api_development\",\"maxQueryExecutionTime\":200,\"migrationsTransactionMode\":\"each\",\"migrations\":[\"apps/apis/user/src/core/database/sources/api/migrations/*.ts\"],\"entities\":[\"apps/apis/user/src/core/database/sources/api/entities/**/*.entity.ts\"],\"logging\":\"all\",\"cli\":{\"entitiesDir\":\"apps/apis/user/src/core/database/sources/api/entities\",\"migrationsDir\":\"apps/apis/user/src/core/database/sources/api/migrations\"}}");

/***/ }),

/***/ "./apps/apis/user/src/core/health/health.controller.ts":
/*!*************************************************************!*\
  !*** ./apps/apis/user/src/core/health/health.controller.ts ***!
  \*************************************************************/
/*! exports provided: HealthController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthController", function() { return HealthController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_terminus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/terminus */ "@nestjs/terminus");
/* harmony import */ var _nestjs_terminus__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_terminus__WEBPACK_IMPORTED_MODULE_2__);
var _a, _b, _c;



let HealthController = class HealthController {
    constructor(health, db, memory) {
        this.health = health;
        this.db = db;
        this.memory = memory;
    }
    readiness() {
        return this.health.check([
            () => this.db.pingCheck('database', { timeout: 1500 }),
            () => this.memory.checkRSS('memory_rss', 150 * 1024 * 1024),
            () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
        ]);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('readiness'),
    Object(_nestjs_terminus__WEBPACK_IMPORTED_MODULE_2__["HealthCheck"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], HealthController.prototype, "readiness", null);
HealthController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('health'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _nestjs_terminus__WEBPACK_IMPORTED_MODULE_2__["HealthCheckService"] !== "undefined" && _nestjs_terminus__WEBPACK_IMPORTED_MODULE_2__["HealthCheckService"]) === "function" ? _a : Object, typeof (_b = typeof _nestjs_terminus__WEBPACK_IMPORTED_MODULE_2__["TypeOrmHealthIndicator"] !== "undefined" && _nestjs_terminus__WEBPACK_IMPORTED_MODULE_2__["TypeOrmHealthIndicator"]) === "function" ? _b : Object, typeof (_c = typeof _nestjs_terminus__WEBPACK_IMPORTED_MODULE_2__["MemoryHealthIndicator"] !== "undefined" && _nestjs_terminus__WEBPACK_IMPORTED_MODULE_2__["MemoryHealthIndicator"]) === "function" ? _c : Object])
], HealthController);



/***/ }),

/***/ "./apps/apis/user/src/core/health/health.module.ts":
/*!*********************************************************!*\
  !*** ./apps/apis/user/src/core/health/health.module.ts ***!
  \*********************************************************/
/*! exports provided: HealthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthModule", function() { return HealthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _health_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./health.controller */ "./apps/apis/user/src/core/health/health.controller.ts");
/* harmony import */ var _nestjs_terminus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/terminus */ "@nestjs/terminus");
/* harmony import */ var _nestjs_terminus__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_terminus__WEBPACK_IMPORTED_MODULE_3__);




let HealthModule = class HealthModule {
};
HealthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_terminus__WEBPACK_IMPORTED_MODULE_3__["TerminusModule"]],
        controllers: [_health_controller__WEBPACK_IMPORTED_MODULE_2__["HealthController"]],
    })
], HealthModule);



/***/ }),

/***/ "./apps/apis/user/src/core/metrics/metrics.module.ts":
/*!***********************************************************!*\
  !*** ./apps/apis/user/src/core/metrics/metrics.module.ts ***!
  \***********************************************************/
/*! exports provided: MetricsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricsModule", function() { return MetricsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let MetricsModule = class MetricsModule {
};
MetricsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({})
], MetricsModule);



/***/ }),

/***/ "./apps/apis/user/src/core/observability/observability.module.ts":
/*!***********************************************************************!*\
  !*** ./apps/apis/user/src/core/observability/observability.module.ts ***!
  \***********************************************************************/
/*! exports provided: ObservabilityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservabilityModule", function() { return ObservabilityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let ObservabilityModule = class ObservabilityModule {
};
ObservabilityModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        providers: [_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"]],
        exports: [_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"]],
    })
], ObservabilityModule);



/***/ }),

/***/ "./apps/apis/user/src/features/account/account.controller.ts":
/*!*******************************************************************!*\
  !*** ./apps/apis/user/src/features/account/account.controller.ts ***!
  \*******************************************************************/
/*! exports provided: AccountController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountController", function() { return AccountController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let AccountController = class AccountController {
};
AccountController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseGuards"])(),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('account')
], AccountController);



/***/ }),

/***/ "./apps/apis/user/src/features/account/account.module.ts":
/*!***************************************************************!*\
  !*** ./apps/apis/user/src/features/account/account.module.ts ***!
  \***************************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _account_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.controller */ "./apps/apis/user/src/features/account/account.controller.ts");



let AccountModule = class AccountModule {
};
AccountModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        controllers: [_account_controller__WEBPACK_IMPORTED_MODULE_2__["AccountController"]],
    })
], AccountModule);



/***/ }),

/***/ "./apps/apis/user/src/main.ts":
/*!************************************!*\
  !*** ./apps/apis/user/src/main.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.module */ "./apps/apis/user/src/app.module.ts");




void (function bootstrap() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_1__["NestFactory"].create(_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
        const logger = app.get(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Logger"]);
        const port = process.env.PORT || 3333;
        yield app.listen(port, () => {
            logger.log('Listening at http://localhost:' + port + '/');
        });
    });
})();


/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi ./apps/apis/user/src/main.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/perotti/workspace/code/battle-of-state-managers/apps/apis/user/src/main.ts */"./apps/apis/user/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/terminus":
/*!***********************************!*\
  !*** external "@nestjs/terminus" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/terminus");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map