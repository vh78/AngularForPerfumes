import * as tslib_1 from "tslib";
import { PerfumeService } from './../services/perfume.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
let PublishComponent = class PublishComponent {
    constructor(httpClient, fb, router, perfumeService) {
        this.httpClient = httpClient;
        this.fb = fb;
        this.router = router;
        this.perfumeService = perfumeService;
        this.dateNow = Date.now();
        this.rForm = this.fb.group({
            'brand': ['', Validators.required],
            'model': ['', Validators.required],
            // 'email': new FormControl('', [Validators.required, Validators.email]),
            'purpose': ['', Validators.required],
            'quantity': ['', Validators.required],
            'ImageUrl': ['', Validators.required]
        });
    }
    onBrandChange() {
        this.perfumeService.getModelsForSelectedBrand(this.rForm.get('brand').value)
            .subscribe((data) => {
            if (data.length) {
                this.models = data[0].models;
                // console.log(this.models);
            }
        });
    }
    postPerfume() {
        this.httpClient.post(`http://localhost:3000/perfumes`, {
            brand: this.rForm.get('brand').value,
            model: this.rForm.get('model').value,
            purpose: this.rForm.get('purpose').value,
            quantity: this.rForm.get('quantity').value,
            ImageUrl: this.rForm.get('ImageUrl').value
        })
            .subscribe((data) => {
            if (data) {
                console.log('It works');
                this.NavigeteToHome();
            }
        });
    }
    getPerfumeBrandsForDropdown() {
        this.perfumeService.getPerfumeBrandsForDropdown()
            .subscribe((data) => {
            this.perfumes = data;
        });
    }
    NavigeteToHome() {
        this.router.navigate(['Home']);
    }
    ngOnInit() {
        this.getPerfumeBrandsForDropdown();
    }
};
PublishComponent = tslib_1.__decorate([
    Component({
        selector: 'app-publish',
        templateUrl: './publish.component.html',
        styleUrls: ['./publish.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient, FormBuilder, Router,
        PerfumeService])
], PublishComponent);
export { PublishComponent };
//# sourceMappingURL=publish.component.js.map