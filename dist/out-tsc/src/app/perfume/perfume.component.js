import * as tslib_1 from "tslib";
import { PerfumeService } from '../services/perfume.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
let PerfumeComponent = class PerfumeComponent {
    constructor(activatedRoute, perfumeService) {
        this.activatedRoute = activatedRoute;
        this.perfumeService = perfumeService;
        this.perfumeId = this.activatedRoute.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.perfumeService.getPerfumeById(this.perfumeId).subscribe((response) => this.perfume = response);
    }
};
PerfumeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-perfume',
        templateUrl: './perfume.component.html',
        styleUrls: ['./perfume.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute, PerfumeService])
], PerfumeComponent);
export { PerfumeComponent };
//# sourceMappingURL=perfume.component.js.map