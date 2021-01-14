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

/***/ "./apps/apis/user/src/app.config.ts":
/*!******************************************!*\
  !*** ./apps/apis/user/src/app.config.ts ***!
  \******************************************/
/*! exports provided: appConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appConfig", function() { return appConfig; });
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_toFinite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/toFinite */ "lodash/toFinite");
/* harmony import */ var lodash_toFinite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_toFinite__WEBPACK_IMPORTED_MODULE_1__);


const appConfig = Object(_nestjs_config__WEBPACK_IMPORTED_MODULE_0__["registerAs"])('app', () => ({
    port: lodash_toFinite__WEBPACK_IMPORTED_MODULE_1___default()(process.env.PORT) || 3333,
}));


/***/ }),

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
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.config */ "./apps/apis/user/src/app.config.ts");
/* harmony import */ var _core_observability_observability_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/observability/observability.module */ "./apps/apis/user/src/core/observability/observability.module.ts");
/* harmony import */ var _features_features_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/features.module */ "./apps/apis/user/src/features/features.module.ts");
/* harmony import */ var _core_configuration_configuration_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/configuration/configuration.module */ "./apps/apis/user/src/core/configuration/configuration.module.ts");







let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _core_configuration_configuration_module__WEBPACK_IMPORTED_MODULE_6__["ConfigurationModule"],
            _nestjs_config__WEBPACK_IMPORTED_MODULE_2__["ConfigModule"].forFeature(_app_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"]),
            _core_observability_observability_module__WEBPACK_IMPORTED_MODULE_4__["ObservabilityModule"],
            _features_features_module__WEBPACK_IMPORTED_MODULE_5__["FeaturesModule"],
        ],
    })
], AppModule);



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
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/identity */ "lodash/identity");
/* harmony import */ var lodash_identity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_identity__WEBPACK_IMPORTED_MODULE_3__);




let ConfigurationModule = class ConfigurationModule {
};
ConfigurationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_config__WEBPACK_IMPORTED_MODULE_2__["ConfigModule"].forRoot({
                envFilePath: [
                     false && false,
                    '.env',
                ].filter(lodash_identity__WEBPACK_IMPORTED_MODULE_3___default.a),
            }),
        ],
    })
], ConfigurationModule);



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
        exports: [_sources_api_api_module__WEBPACK_IMPORTED_MODULE_2__["ApiModule"]],
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
/* harmony import */ var _connection_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connection.module */ "./apps/apis/user/src/core/database/sources/api/connection.module.ts");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _connection_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connection.provider */ "./apps/apis/user/src/core/database/sources/api/connection.provider.ts");
/* harmony import */ var _subscribers_person_subscriber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscribers/person.subscriber */ "./apps/apis/user/src/core/database/sources/api/subscribers/person.subscriber.ts");
/* harmony import */ var _subscribers_user_subscriber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subscribers/user.subscriber */ "./apps/apis/user/src/core/database/sources/api/subscribers/user.subscriber.ts");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/omit */ "lodash/omit");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_7__);








const OrmModule = _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__["TypeOrmModule"].forRootAsync({
    imports: [_connection_module__WEBPACK_IMPORTED_MODULE_2__["ConnectionModule"]],
    useFactory(connection) {
        return lodash_omit__WEBPACK_IMPORTED_MODULE_7___default()(connection.config, 'name');
    },
    inject: [_connection_provider__WEBPACK_IMPORTED_MODULE_4__["ConnectionProvider"]],
});
let ApiModule = class ApiModule {
};
ApiModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [OrmModule, _connection_module__WEBPACK_IMPORTED_MODULE_2__["ConnectionModule"]],
        providers: [_subscribers_person_subscriber__WEBPACK_IMPORTED_MODULE_5__["PersonSubscriber"], _subscribers_user_subscriber__WEBPACK_IMPORTED_MODULE_6__["UserSubscriber"]],
        exports: [OrmModule],
    })
], ApiModule);



/***/ }),

/***/ "./apps/apis/user/src/core/database/sources/api/connection.config.ts":
/*!***************************************************************************!*\
  !*** ./apps/apis/user/src/core/database/sources/api/connection.config.ts ***!
  \***************************************************************************/
/*! exports provided: connectionConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectionConfig", function() { return connectionConfig; });
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ormconfig_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ormconfig.json */ "./apps/apis/user/src/core/database/sources/api/ormconfig.json");
var _ormconfig_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./ormconfig.json */ "./apps/apis/user/src/core/database/sources/api/ormconfig.json", 1);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/merge */ "lodash/merge");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);



const connectionConfig = Object(_nestjs_config__WEBPACK_IMPORTED_MODULE_0__["registerAs"])('api-db-connection', () => lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()(_ormconfig_json__WEBPACK_IMPORTED_MODULE_1__, {
    migrationsRun: Boolean(process.env.API_DB_RUN_MIGRATION &&
        process.env.API_DB_RUN_MIGRATION === 'true'),
    database: process.env.API_DB_NAME,
    username: process.env.API_DB_USER,
    password: process.env.API_DB_PASSWORD,
    logging: process.env.API_DB_LOGGING,
}));


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
/* harmony import */ var _configuration_configuration_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../configuration/configuration.module */ "./apps/apis/user/src/core/configuration/configuration.module.ts");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _connection_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connection.config */ "./apps/apis/user/src/core/database/sources/api/connection.config.ts");






let ConnectionModule = class ConnectionModule {
};
ConnectionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_configuration_configuration_module__WEBPACK_IMPORTED_MODULE_3__["ConfigurationModule"], _nestjs_config__WEBPACK_IMPORTED_MODULE_4__["ConfigModule"].forFeature(_connection_config__WEBPACK_IMPORTED_MODULE_5__["connectionConfig"])],
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
/* harmony import */ var _migrations_1610493939987_CreatePersonsTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./migrations/1610493939987-CreatePersonsTable */ "./apps/apis/user/src/core/database/sources/api/migrations/1610493939987-CreatePersonsTable.ts");
/* harmony import */ var _migrations_1610494267701_CreateUsersTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./migrations/1610494267701-CreateUsersTable */ "./apps/apis/user/src/core/database/sources/api/migrations/1610494267701-CreateUsersTable.ts");
/* harmony import */ var _entities_person_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entities/person.entity */ "./apps/apis/user/src/core/database/sources/api/entities/person.entity.ts");
/* harmony import */ var _entities_user_entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entities/user.entity */ "./apps/apis/user/src/core/database/sources/api/entities/user.entity.ts");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_6__);
var _a;







let ConnectionProvider = class ConnectionProvider {
    constructor(configService) {
        this.configService = configService;
        const config = configService.get('api-db-connection');
        this.config = Object.assign(Object.assign({}, config), { migrations: [
                _migrations_1610493939987_CreatePersonsTable__WEBPACK_IMPORTED_MODULE_2__["CreatePersonsTable1610493939987"],
                _migrations_1610494267701_CreateUsersTable__WEBPACK_IMPORTED_MODULE_3__["CreateUsersTable1610494267701"],
            ], entities: [_entities_person_entity__WEBPACK_IMPORTED_MODULE_4__["Person"], _entities_user_entity__WEBPACK_IMPORTED_MODULE_5__["User"]] });
    }
};
ConnectionProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _nestjs_config__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] !== "undefined" && _nestjs_config__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]) === "function" ? _a : Object])
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
/* harmony import */ var _user_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.entity */ "./apps/apis/user/src/core/database/sources/api/entities/user.entity.ts");
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
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["OneToMany"])(() => _user_entity__WEBPACK_IMPORTED_MODULE_2__["User"], (user) => user.person, { lazy: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], Person.prototype, "users", void 0);
Person = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])('persons')
], Person);



/***/ }),

/***/ "./apps/apis/user/src/core/database/sources/api/entities/user.entity.ts":
/*!******************************************************************************!*\
  !*** ./apps/apis/user/src/core/database/sources/api/entities/user.entity.ts ***!
  \******************************************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _person_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./person.entity */ "./apps/apis/user/src/core/database/sources/api/entities/person.entity.ts");
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

/***/ "./apps/apis/user/src/core/database/sources/api/ormconfig.json":
/*!*********************************************************************!*\
  !*** ./apps/apis/user/src/core/database/sources/api/ormconfig.json ***!
  \*********************************************************************/
/*! exports provided: type, host, username, port, password, database, maxQueryExecutionTime, migrationsTransactionMode, migrations, entities, logging, cli, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"postgres\",\"host\":\"localhost\",\"username\":\"user\",\"port\":5432,\"password\":\"password\",\"database\":\"api_development\",\"maxQueryExecutionTime\":200,\"migrationsTransactionMode\":\"each\",\"migrations\":[\"apps/apis/user/src/core/database/sources/api/migrations/*.ts\"],\"entities\":[\"apps/apis/user/src/core/database/sources/api/entities/**/*.entity.ts\"],\"logging\":\"all\",\"cli\":{\"entitiesDir\":\"apps/apis/user/src/core/database/sources/api/entities\",\"migrationsDir\":\"apps/apis/user/src/core/database/sources/api/migrations\"}}");

/***/ }),

/***/ "./apps/apis/user/src/core/database/sources/api/subscribers/person.subscriber.ts":
/*!***************************************************************************************!*\
  !*** ./apps/apis/user/src/core/database/sources/api/subscribers/person.subscriber.ts ***!
  \***************************************************************************************/
/*! exports provided: PersonSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonSubscriber", function() { return PersonSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _entities_person_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entities/person.entity */ "./apps/apis/user/src/core/database/sources/api/entities/person.entity.ts");
var _a;




let PersonSubscriber = class PersonSubscriber {
    constructor(connection) {
        this.connection = connection;
        connection.subscribers.push(this);
    }
    listenTo() {
        return _entities_person_entity__WEBPACK_IMPORTED_MODULE_3__["Person"];
    }
    beforeInsert(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            event.entity.id = event.entity.id || Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
        });
    }
};
PersonSubscriber = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["EventSubscriber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_1__["Connection"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_1__["Connection"]) === "function" ? _a : Object])
], PersonSubscriber);



/***/ }),

/***/ "./apps/apis/user/src/core/database/sources/api/subscribers/user.subscriber.ts":
/*!*************************************************************************************!*\
  !*** ./apps/apis/user/src/core/database/sources/api/subscribers/user.subscriber.ts ***!
  \*************************************************************************************/
/*! exports provided: UserSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSubscriber", function() { return UserSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _entities_user_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/user.entity */ "./apps/apis/user/src/core/database/sources/api/entities/user.entity.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
var _a;




let UserSubscriber = class UserSubscriber {
    constructor(connection) {
        this.connection = connection;
        connection.subscribers.push(this);
    }
    listenTo() {
        return _entities_user_entity__WEBPACK_IMPORTED_MODULE_2__["User"];
    }
    beforeInsert(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            event.entity.id = event.entity.id || Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
        });
    }
};
UserSubscriber = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["EventSubscriber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_1__["Connection"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_1__["Connection"]) === "function" ? _a : Object])
], UserSubscriber);



/***/ }),

/***/ "./apps/apis/user/src/core/encryption/encryption.module.ts":
/*!*****************************************************************!*\
  !*** ./apps/apis/user/src/core/encryption/encryption.module.ts ***!
  \*****************************************************************/
/*! exports provided: EncryptionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncryptionModule", function() { return EncryptionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _salt_salt_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./salt/salt.module */ "./apps/apis/user/src/core/encryption/salt/salt.module.ts");



let EncryptionModule = class EncryptionModule {
};
EncryptionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_salt_salt_module__WEBPACK_IMPORTED_MODULE_2__["SaltModule"]],
        exports: [_salt_salt_module__WEBPACK_IMPORTED_MODULE_2__["SaltModule"]],
    })
], EncryptionModule);



/***/ }),

/***/ "./apps/apis/user/src/core/encryption/salt/salt.module.ts":
/*!****************************************************************!*\
  !*** ./apps/apis/user/src/core/encryption/salt/salt.module.ts ***!
  \****************************************************************/
/*! exports provided: SaltModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaltModule", function() { return SaltModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _saltConfiguration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saltConfiguration */ "./apps/apis/user/src/core/encryption/salt/saltConfiguration.ts");
/* harmony import */ var _salt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./salt.service */ "./apps/apis/user/src/core/encryption/salt/salt.service.ts");





let SaltModule = class SaltModule {
};
SaltModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_config__WEBPACK_IMPORTED_MODULE_2__["ConfigModule"].forFeature(_saltConfiguration__WEBPACK_IMPORTED_MODULE_3__["saltConfiguration"])],
        providers: [_salt_service__WEBPACK_IMPORTED_MODULE_4__["SaltService"]],
        exports: [_salt_service__WEBPACK_IMPORTED_MODULE_4__["SaltService"]],
    })
], SaltModule);



/***/ }),

/***/ "./apps/apis/user/src/core/encryption/salt/salt.service.ts":
/*!*****************************************************************!*\
  !*** ./apps/apis/user/src/core/encryption/salt/salt.service.ts ***!
  \*****************************************************************/
/*! exports provided: SaltService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaltService", function() { return SaltService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);
var _a;




let SaltService = class SaltService {
    constructor(configService) {
        this.configService = configService;
        this.rounds = configService.get('salt.rounds', 10);
    }
    compare(str, hash) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return bcrypt__WEBPACK_IMPORTED_MODULE_3___default.a.compare(str, hash);
        });
    }
    salt(str) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return bcrypt__WEBPACK_IMPORTED_MODULE_3___default.a.hash(str, this.rounds);
        });
    }
};
SaltService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _nestjs_config__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] !== "undefined" && _nestjs_config__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]) === "function" ? _a : Object])
], SaltService);



/***/ }),

/***/ "./apps/apis/user/src/core/encryption/salt/saltConfiguration.ts":
/*!**********************************************************************!*\
  !*** ./apps/apis/user/src/core/encryption/salt/saltConfiguration.ts ***!
  \**********************************************************************/
/*! exports provided: saltConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saltConfiguration", function() { return saltConfiguration; });
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_toFinite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/toFinite */ "lodash/toFinite");
/* harmony import */ var lodash_toFinite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_toFinite__WEBPACK_IMPORTED_MODULE_1__);


const saltConfiguration = Object(_nestjs_config__WEBPACK_IMPORTED_MODULE_0__["registerAs"])('salt', () => ({
    rounds: lodash_toFinite__WEBPACK_IMPORTED_MODULE_1___default()(process.env.SALT_ROUNDS) || 10,
}));


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
/* harmony import */ var _jwt_jwt_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt/jwt.guard */ "./apps/apis/user/src/features/account/jwt/jwt.guard.ts");
/* harmony import */ var _account_interactor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.interactor */ "./apps/apis/user/src/features/account/account.interactor.ts");
/* harmony import */ var _new_account_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-account.dto */ "./apps/apis/user/src/features/account/new-account.dto.ts");
var _a, _b;





let AccountController = class AccountController {
    constructor(accountInteractor) {
        this.accountInteractor = accountInteractor;
    }
    createAccount(body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.accountInteractor.create(body);
        });
    }
    deleteAccount() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.accountInteractor.delete();
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpCode"])(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].CREATED),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UsePipes"])(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["ValidationPipe"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _new_account_dto__WEBPACK_IMPORTED_MODULE_4__["NewAccountDto"] !== "undefined" && _new_account_dto__WEBPACK_IMPORTED_MODULE_4__["NewAccountDto"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], AccountController.prototype, "createAccount", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Delete"])(),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseGuards"])(_jwt_jwt_guard__WEBPACK_IMPORTED_MODULE_2__["JwtGuard"]),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpCode"])(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].NO_CONTENT),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], AccountController.prototype, "deleteAccount", null);
AccountController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('account'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof _account_interactor__WEBPACK_IMPORTED_MODULE_3__["AccountInteractor"] !== "undefined" && _account_interactor__WEBPACK_IMPORTED_MODULE_3__["AccountInteractor"]) === "function" ? _b : Object])
], AccountController);



/***/ }),

/***/ "./apps/apis/user/src/features/account/account.interactor.ts":
/*!*******************************************************************!*\
  !*** ./apps/apis/user/src/features/account/account.interactor.ts ***!
  \*******************************************************************/
/*! exports provided: AccountInteractor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountInteractor", function() { return AccountInteractor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_database_sources_api_entities_user_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/database/sources/api/entities/user.entity */ "./apps/apis/user/src/core/database/sources/api/entities/user.entity.ts");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_database_sources_api_entities_person_entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/database/sources/api/entities/person.entity */ "./apps/apis/user/src/core/database/sources/api/entities/person.entity.ts");
/* harmony import */ var _core_encryption_salt_salt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/encryption/salt/salt.service */ "./apps/apis/user/src/core/encryption/salt/salt.service.ts");
var _a, _b, _c;







/**
 * @mermaid
 * erDiagram
 *    %% All entities also carry dates with soft deletion
 *    PERSON {
 *      uuid id
 *      string name
 *    }
 *    %% Passwords are salted
 *    USER {
 *      uuid id
 *      uuid person_id
 *      string email
 *      string password
 *    }
 *    %% Account is an interactor
 *    %% It is injected into requests' protected contexts
 *    ACCOUNT_INTERACTOR {
 *      uuid session_id
 *      uuid user_id
 *    }
 *    PERSON ||--|{ USER : has
 *    ACCOUNT_INTERACTOR ||--|| USER : administers
 */
let AccountInteractor = class AccountInteractor {
    constructor(userRepository, personRepository, saltService) {
        this.userRepository = userRepository;
        this.personRepository = personRepository;
        this.saltService = saltService;
    }
    validateCredentials(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({ where: { email } });
            if (!this.user) {
                return null;
            }
            const matches = yield this.saltService.compare(password, this.user.password);
            if (!matches) {
                return null;
            }
            return (this.user = user);
        });
    }
    create({ email, name, password }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.user) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["InternalServerErrorException"]('user should be already set');
            }
            yield this.userRepository.manager.transaction((manager) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const personRepository = manager.getRepository(_core_database_sources_api_entities_person_entity__WEBPACK_IMPORTED_MODULE_5__["Person"]);
                const person = personRepository.create({ name });
                const { identifiers: [{ id }], } = yield manager.insert(_core_database_sources_api_entities_person_entity__WEBPACK_IMPORTED_MODULE_5__["Person"], person);
                const userRepository = manager.getRepository(_core_database_sources_api_entities_user_entity__WEBPACK_IMPORTED_MODULE_3__["User"]);
                const user = userRepository.create({
                    email,
                    password: yield this.saltService.salt(password),
                    personId: id,
                });
                yield manager.insert(_core_database_sources_api_entities_user_entity__WEBPACK_IMPORTED_MODULE_3__["User"], user);
            }));
            return this.userRepository.findOne({ where: { email } });
        });
    }
    delete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.user) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["InternalServerErrorException"]('user should have been set already by jwt-guard');
            }
            const person = yield this.user.person;
            yield this.personRepository.delete(person.id);
            delete this.user;
        });
    }
};
AccountInteractor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_4__["InjectRepository"])(_core_database_sources_api_entities_user_entity__WEBPACK_IMPORTED_MODULE_3__["User"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_4__["InjectRepository"])(_core_database_sources_api_entities_person_entity__WEBPACK_IMPORTED_MODULE_5__["Person"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof typeorm__WEBPACK_IMPORTED_MODULE_2__["Repository"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_2__["Repository"]) === "function" ? _a : Object, typeof (_b = typeof typeorm__WEBPACK_IMPORTED_MODULE_2__["Repository"] !== "undefined" && typeorm__WEBPACK_IMPORTED_MODULE_2__["Repository"]) === "function" ? _b : Object, typeof (_c = typeof _core_encryption_salt_salt_service__WEBPACK_IMPORTED_MODULE_6__["SaltService"] !== "undefined" && _core_encryption_salt_salt_service__WEBPACK_IMPORTED_MODULE_6__["SaltService"]) === "function" ? _c : Object])
], AccountInteractor);



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
/* harmony import */ var _auth_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.controller */ "./apps/apis/user/src/features/account/auth.controller.ts");
/* harmony import */ var _jwt_jwt_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt/jwt.module */ "./apps/apis/user/src/features/account/jwt/jwt.module.ts");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account.service */ "./apps/apis/user/src/features/account/account.service.ts");
/* harmony import */ var _account_interactor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.interactor */ "./apps/apis/user/src/features/account/account.interactor.ts");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_database_sources_api_entities_user_entity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/database/sources/api/entities/user.entity */ "./apps/apis/user/src/core/database/sources/api/entities/user.entity.ts");
/* harmony import */ var _core_database_sources_api_entities_person_entity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/database/sources/api/entities/person.entity */ "./apps/apis/user/src/core/database/sources/api/entities/person.entity.ts");
/* harmony import */ var _core_encryption_encryption_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/encryption/encryption.module */ "./apps/apis/user/src/core/encryption/encryption.module.ts");
/* harmony import */ var _core_database_database_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/database/database.module */ "./apps/apis/user/src/core/database/database.module.ts");












let AccountModule = class AccountModule {
};
AccountModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _core_database_database_module__WEBPACK_IMPORTED_MODULE_11__["DatabaseModule"],
            _jwt_jwt_module__WEBPACK_IMPORTED_MODULE_4__["JwtModule"],
            _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_7__["TypeOrmModule"].forFeature([_core_database_sources_api_entities_user_entity__WEBPACK_IMPORTED_MODULE_8__["User"], _core_database_sources_api_entities_person_entity__WEBPACK_IMPORTED_MODULE_9__["Person"]]),
            _core_encryption_encryption_module__WEBPACK_IMPORTED_MODULE_10__["EncryptionModule"],
        ],
        providers: [_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"], _account_interactor__WEBPACK_IMPORTED_MODULE_6__["AccountInteractor"]],
        controllers: [_auth_controller__WEBPACK_IMPORTED_MODULE_3__["AuthController"], _account_controller__WEBPACK_IMPORTED_MODULE_2__["AccountController"]],
    })
], AccountModule);



/***/ }),

/***/ "./apps/apis/user/src/features/account/account.service.ts":
/*!****************************************************************!*\
  !*** ./apps/apis/user/src/features/account/account.service.ts ***!
  \****************************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_jwt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _account_interactor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.interactor */ "./apps/apis/user/src/features/account/account.interactor.ts");
var _a, _b;




let AccountService = class AccountService {
    constructor(jwtService, accountInteractor) {
        this.jwtService = jwtService;
        this.accountInteractor = accountInteractor;
    }
    validate(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.accountInteractor.validateCredentials(email, password);
        });
    }
};
AccountService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _nestjs_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtService"] !== "undefined" && _nestjs_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtService"]) === "function" ? _a : Object, typeof (_b = typeof _account_interactor__WEBPACK_IMPORTED_MODULE_3__["AccountInteractor"] !== "undefined" && _account_interactor__WEBPACK_IMPORTED_MODULE_3__["AccountInteractor"]) === "function" ? _b : Object])
], AccountService);



/***/ }),

/***/ "./apps/apis/user/src/features/account/auth-login.dto.ts":
/*!***************************************************************!*\
  !*** ./apps/apis/user/src/features/account/auth-login.dto.ts ***!
  \***************************************************************/
/*! exports provided: AuthLoginDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLoginDto", function() { return AuthLoginDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-validator */ "class-validator");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_1__);


class AuthLoginDto {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsEmail"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNotEmpty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AuthLoginDto.prototype, "email", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNotEmpty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AuthLoginDto.prototype, "password", void 0);


/***/ }),

/***/ "./apps/apis/user/src/features/account/auth.controller.ts":
/*!****************************************************************!*\
  !*** ./apps/apis/user/src/features/account/auth.controller.ts ***!
  \****************************************************************/
/*! exports provided: AuthController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthController", function() { return AuthController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.service */ "./apps/apis/user/src/features/account/account.service.ts");
/* harmony import */ var _auth_login_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-login.dto */ "./apps/apis/user/src/features/account/auth-login.dto.ts");
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_jwt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_6__);
var _a, _b, _c, _d, _e, _f;







let AuthController = class AuthController {
    constructor(accountService, configService, jwtService) {
        this.accountService = accountService;
        this.configService = configService;
        this.jwtService = jwtService;
    }
    login(body, response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.accountService.validate(body.email, body.password);
            if (!user) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UnauthorizedException"]('wrong credentials');
            }
            const payload = { email: user.email };
            const token = yield this.jwtService.signAsync(payload);
            const jwtConfig = this.configService.get('jwt');
            response.cookie(jwtConfig.cookieName, token, { httpOnly: true });
        });
    }
    logout(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const jwtConfig = this.configService.get('jwt');
            response.clearCookie(jwtConfig.cookieName);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('login'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpCode"])(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].NO_CONTENT),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Res"])({ passthrough: true })),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _auth_login_dto__WEBPACK_IMPORTED_MODULE_3__["AuthLoginDto"] !== "undefined" && _auth_login_dto__WEBPACK_IMPORTED_MODULE_3__["AuthLoginDto"]) === "function" ? _a : Object, typeof (_b = typeof express__WEBPACK_IMPORTED_MODULE_5__["Response"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_5__["Response"]) === "function" ? _b : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], AuthController.prototype, "login", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('logout'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Res"])({ passthrough: true })),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof express__WEBPACK_IMPORTED_MODULE_5__["Response"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_5__["Response"]) === "function" ? _c : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], AuthController.prototype, "logout", null);
AuthController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('auth'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof _account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] !== "undefined" && _account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]) === "function" ? _d : Object, typeof (_e = typeof _nestjs_config__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] !== "undefined" && _nestjs_config__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]) === "function" ? _e : Object, typeof (_f = typeof _nestjs_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtService"] !== "undefined" && _nestjs_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtService"]) === "function" ? _f : Object])
], AuthController);



/***/ }),

/***/ "./apps/apis/user/src/features/account/jwt/cookie.extractor.ts":
/*!*********************************************************************!*\
  !*** ./apps/apis/user/src/features/account/jwt/cookie.extractor.ts ***!
  \*********************************************************************/
/*! exports provided: cookieExtractor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cookieExtractor", function() { return cookieExtractor; });
const cookieExtractor = (cookieName) => (request) => {
    if (!request.cookies) {
        return null;
    }
    return request.cookies[cookieName] || null;
};


/***/ }),

/***/ "./apps/apis/user/src/features/account/jwt/jwt.config.ts":
/*!***************************************************************!*\
  !*** ./apps/apis/user/src/features/account/jwt/jwt.config.ts ***!
  \***************************************************************/
/*! exports provided: jwtConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtConfig", function() { return jwtConfig; });
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_0__);

const jwtConfig = Object(_nestjs_config__WEBPACK_IMPORTED_MODULE_0__["registerAs"])('jwt', () => ({
    secret: process.env.JWT_SECRET || 'asecret',
    cookieName: process.env.JWT_COOKIE_NAME || 'user-api-user-token',
    signOptions: { expiresIn: process.env.JWT_EXPIRES_IN || '120m' },
}));


/***/ }),

/***/ "./apps/apis/user/src/features/account/jwt/jwt.constants.ts":
/*!******************************************************************!*\
  !*** ./apps/apis/user/src/features/account/jwt/jwt.constants.ts ***!
  \******************************************************************/
/*! exports provided: JWT_STRATEGY_NAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWT_STRATEGY_NAME", function() { return JWT_STRATEGY_NAME; });
const JWT_STRATEGY_NAME = 'jwt_strategy';


/***/ }),

/***/ "./apps/apis/user/src/features/account/jwt/jwt.guard.ts":
/*!**************************************************************!*\
  !*** ./apps/apis/user/src/features/account/jwt/jwt.guard.ts ***!
  \**************************************************************/
/*! exports provided: JwtGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtGuard", function() { return JwtGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jwt_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwt.constants */ "./apps/apis/user/src/features/account/jwt/jwt.constants.ts");




let JwtGuard = class JwtGuard extends Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"])(_jwt_constants__WEBPACK_IMPORTED_MODULE_3__["JWT_STRATEGY_NAME"]) {
};
JwtGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtGuard);



/***/ }),

/***/ "./apps/apis/user/src/features/account/jwt/jwt.module.ts":
/*!***************************************************************!*\
  !*** ./apps/apis/user/src/features/account/jwt/jwt.module.ts ***!
  \***************************************************************/
/*! exports provided: JwtModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtModule", function() { return JwtModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jwt_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt.config */ "./apps/apis/user/src/features/account/jwt/jwt.config.ts");
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_jwt__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _jwt_strategy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jwt.strategy */ "./apps/apis/user/src/features/account/jwt/jwt.strategy.ts");
/* harmony import */ var _jwt_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jwt.guard */ "./apps/apis/user/src/features/account/jwt/jwt.guard.ts");








const config = _nestjs_config__WEBPACK_IMPORTED_MODULE_3__["ConfigModule"].forFeature(_jwt_config__WEBPACK_IMPORTED_MODULE_4__["jwtConfig"]);
const jwtModule = _nestjs_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtModule"].registerAsync({
    imports: [_nestjs_config__WEBPACK_IMPORTED_MODULE_3__["ConfigModule"], config],
    useFactory(configService) {
        return configService.get('jwt');
    },
    inject: [_nestjs_config__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]],
});
let JwtModule = class JwtModule {
};
JwtModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_passport__WEBPACK_IMPORTED_MODULE_2__["PassportModule"], jwtModule, _nestjs_config__WEBPACK_IMPORTED_MODULE_3__["ConfigModule"], config],
        providers: [_jwt_strategy__WEBPACK_IMPORTED_MODULE_6__["JwtStrategy"], _jwt_guard__WEBPACK_IMPORTED_MODULE_7__["JwtGuard"]],
        exports: [_nestjs_passport__WEBPACK_IMPORTED_MODULE_2__["PassportModule"], jwtModule, _jwt_strategy__WEBPACK_IMPORTED_MODULE_6__["JwtStrategy"], _jwt_guard__WEBPACK_IMPORTED_MODULE_7__["JwtGuard"], config],
    })
], JwtModule);



/***/ }),

/***/ "./apps/apis/user/src/features/account/jwt/jwt.strategy.ts":
/*!*****************************************************************!*\
  !*** ./apps/apis/user/src/features/account/jwt/jwt.strategy.ts ***!
  \*****************************************************************/
/*! exports provided: JwtStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtStrategy", function() { return JwtStrategy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport-jwt */ "passport-jwt");
/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _cookie_extractor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cookie.extractor */ "./apps/apis/user/src/features/account/jwt/cookie.extractor.ts");
/* harmony import */ var _jwt_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jwt.constants */ "./apps/apis/user/src/features/account/jwt/jwt.constants.ts");
var _a;







let JwtStrategy = class JwtStrategy extends Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_2__["PassportStrategy"])(passport_jwt__WEBPACK_IMPORTED_MODULE_1__["Strategy"], _jwt_constants__WEBPACK_IMPORTED_MODULE_6__["JWT_STRATEGY_NAME"]) {
    constructor(configService) {
        const jwtConfig = configService.get('jwt');
        super({
            jwtFromRequest: passport_jwt__WEBPACK_IMPORTED_MODULE_1__["ExtractJwt"].fromExtractors([
                Object(_cookie_extractor__WEBPACK_IMPORTED_MODULE_5__["cookieExtractor"])(jwtConfig.cookieName),
            ]),
            secretOrKey: jwtConfig.secret,
            ignoreExpiration: false,
        });
    }
};
JwtStrategy = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _nestjs_config__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] !== "undefined" && _nestjs_config__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]) === "function" ? _a : Object])
], JwtStrategy);



/***/ }),

/***/ "./apps/apis/user/src/features/account/new-account.dto.ts":
/*!****************************************************************!*\
  !*** ./apps/apis/user/src/features/account/new-account.dto.ts ***!
  \****************************************************************/
/*! exports provided: NewAccountDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAccountDto", function() { return NewAccountDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-validator */ "class-validator");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_1__);


class NewAccountDto {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsEmail"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNotEmpty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], NewAccountDto.prototype, "email", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNotEmpty"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["Length"])(8, 256),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], NewAccountDto.prototype, "password", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], NewAccountDto.prototype, "name", void 0);


/***/ }),

/***/ "./apps/apis/user/src/features/features.module.ts":
/*!********************************************************!*\
  !*** ./apps/apis/user/src/features/features.module.ts ***!
  \********************************************************/
/*! exports provided: FeaturesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesModule", function() { return FeaturesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account/account.module */ "./apps/apis/user/src/features/account/account.module.ts");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);




let FeaturesModule = class FeaturesModule {
    configure(consumer) {
        consumer.apply(cookie_parser__WEBPACK_IMPORTED_MODULE_3__());
    }
};
FeaturesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_account_account_module__WEBPACK_IMPORTED_MODULE_2__["AccountModule"]],
    })
], FeaturesModule);



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
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_4__);





void (function bootstrap() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_1__["NestFactory"].create(_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
        const logger = app.get(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Logger"]);
        const config = app.get(_nestjs_config__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]);
        const port = config.get('app.port');
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

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("class-validator");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "lodash/identity":
/*!**********************************!*\
  !*** external "lodash/identity" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/identity");

/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/merge");

/***/ }),

/***/ "lodash/omit":
/*!******************************!*\
  !*** external "lodash/omit" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/omit");

/***/ }),

/***/ "lodash/toFinite":
/*!**********************************!*\
  !*** external "lodash/toFinite" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/toFinite");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

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

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map