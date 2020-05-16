import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let PerfumeService = class PerfumeService {
    constructor(http) {
        this.http = http;
    }
    getSearchedPerfume(selectedBrand, selectedModel, selectedPurpose, selectedQuantity) {
        throw new Error("Method not implemented.");
    }
    getNewestPerfumes() {
        return this.http.get(`http://localhost:3000/perfumes?_sort=date&_order=desc&_limit=4`);
    }
    getModelsForSelectedBrand(brand) {
        return this.http.get(`http://localhost:3000/Allperfumes/?brand=${brand}`);
    }
    getPerfumeBrandsForDropdown() {
        return this.http.get(`http://localhost:3000/Allperfumes?_sort=brand&_order=asc`);
        // return this.http.get<AllPerfume[]>(`http://localhost:3000/Allperfumes?_sort=brand&_order=asc`);
    }
    getSearchedPerfumes(brand, model, purpose, quantity) {
        return this.http.get(`http://localhost:3000/perfumes?brand=${brand}` +
            (model ? `&model=${model}` : ``) +
            (purpose ? `&purpose=${purpose}` : ``) +
            (quantity ? `&quantity=${quantity}` : ``));
    }
    // ternary expression
    getPerfumeById(perfumeId) {
        return this.http.get(`http://localhost:3000/perfumes/${perfumeId}`);
    }
};
PerfumeService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], PerfumeService);
export { PerfumeService };
//# sourceMappingURL=perfume.service.js.map