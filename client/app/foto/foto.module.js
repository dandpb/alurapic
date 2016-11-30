"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var foto_pipes_1 = require('./foto.pipes');
var core_1 = require('@angular/core');
var foto_component_1 = require('./foto.component');
var FotoModule = (function () {
    function FotoModule() {
    }
    FotoModule = __decorate([
        core_1.NgModule({
            declarations: [foto_component_1.FotoComponent, foto_pipes_1.FiltroPorTituloPipe],
            exports: [foto_component_1.FotoComponent, foto_pipes_1.FiltroPorTituloPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], FotoModule);
    return FotoModule;
}());
exports.FotoModule = FotoModule;
//# sourceMappingURL=foto.module.js.map