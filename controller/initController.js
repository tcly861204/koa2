"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _indexController=require("./indexController"),_indexController2=_interopRequireDefault(_indexController);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var controllerInit={init:function(e,t){e.use(t(function(e){e.get("/",_indexController2.default.index()),e.get("/index",_indexController2.default.indexDate())}))}};exports.default=controllerInit;