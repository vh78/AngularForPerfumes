import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PerfumeService } from './../services/perfume.service';
let HomeComponent = class HomeComponent {
    constructor(perfumeService) {
        this.perfumeService = perfumeService;
    }
    getPerfumes() {
        this.perfumeService.getNewestPerfumes()
            .subscribe((response) => {
            if (response.length) {
                this.perfume = response;
            }
            else {
                console.log('Something went wrong');
            }
        });
    }
    ngOnInit() {
        this.getPerfumes();
        setTimeout(() => console.log(this.perfume), 2500);
    }
};
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [PerfumeService])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map