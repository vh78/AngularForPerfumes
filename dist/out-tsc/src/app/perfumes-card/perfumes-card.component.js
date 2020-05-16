import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Perfume } from '../models/perfume-model';
let PerfumesCardComponent = class PerfumesCardComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Perfume)
], PerfumesCardComponent.prototype, "Perfumes", void 0);
PerfumesCardComponent = tslib_1.__decorate([
    Component({
        selector: 'app-perfumes-card',
        templateUrl: './perfumes-card.component.html',
        styleUrls: ['./perfumes-card.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], PerfumesCardComponent);
export { PerfumesCardComponent };
//# sourceMappingURL=perfumes-card.component.js.map