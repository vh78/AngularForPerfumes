import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PerfumeService } from './../services/perfume.service';
let SearchComponent = class SearchComponent {
    constructor(perfumeService) {
        this.perfumeService = perfumeService;
    }
    getPerfumeBrandsForDropdown() {
        this.perfumeService.getPerfumeBrandsForDropdown()
            .subscribe((resoponse) => {
            this.receivedAllPerfume = resoponse;
            // console.log(data);
        });
    }
    onBrandChange() {
        this.perfumeService.getModelsForSelectedBrand(this.selectedBrand)
            .subscribe((response) => {
            this.receivedModels = response[0].models;
            // console.log(response);
        });
    }
    getSearchedPerfume() {
        this.perfumeService.getSearchedPerfume(this.selectedBrand, this.selectedModel, this.selectedPurpose, this.selectedQuantity)
            .subscribe((resoponse) => {
            if (resoponse.length) {
                this.receivedPerfume = resoponse;
                console.log(this.receivedPerfume);
                this.noPerfumesFound = false;
            }
            else {
                console.log('No perfume found');
                this.noPerfumesFound = true;
                this.receivedPerfume = [];
            }
        });
    }
    ngOnInit() {
        this.getPerfumesBrandsForDropdown();
    }
};
SearchComponent = tslib_1.__decorate([
    Component({
        selector: 'app-search',
        templateUrl: './search.component.html',
        styleUrls: ['./search.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [PerfumeService])
], SearchComponent);
export { SearchComponent };
//# sourceMappingURL=search.component.js.map