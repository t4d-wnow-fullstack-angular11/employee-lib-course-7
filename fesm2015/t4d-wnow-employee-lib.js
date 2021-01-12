import { Component, Input, NgModule, ɵɵdefineInjectable, ɵɵinject, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { catchError } from 'rxjs/operators';

class EmployeeTableComponent {
    constructor() {
        this.displayedColumns = [
            'username', 'firstName', 'lastName', 'title'
        ];
        this.employees = [];
    }
    ngOnInit() {
    }
}
EmployeeTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-employee-table',
                template: "<table mat-table [dataSource]=\"employees\">\n\n  <ng-container matColumnDef=\"username\">\n    <th mat-header-cell *matHeaderCellDef>Username</th>\n    <td mat-cell *matCellDef=\"let employee\"> {{employee.username}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"firstName\">\n    <th mat-header-cell *matHeaderCellDef>First Name</th>\n    <td mat-cell *matCellDef=\"let employee\"> {{employee.firstName}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"lastName\">\n    <th mat-header-cell *matHeaderCellDef>Last Name</th>\n    <td mat-cell *matCellDef=\"let employee\"> {{employee.lastName}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"title\">\n    <th mat-header-cell *matHeaderCellDef>Title</th>\n    <td mat-cell *matCellDef=\"let employee\"> {{employee.title}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n</table>\n",
                styles: ["table{width:100%}"]
            },] }
];
EmployeeTableComponent.ctorParameters = () => [];
EmployeeTableComponent.propDecorators = {
    employees: [{ type: Input }]
};

class EmployeeLibModule {
}
EmployeeLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EmployeeTableComponent],
                imports: [
                    CommonModule,
                    HttpClientModule,
                    MatTableModule,
                ],
                exports: [EmployeeTableComponent]
            },] }
];

class EmployeesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    all() {
        return this.httpClient.get('/api/employees').pipe(catchError(() => {
            throw Error('Unable to download employees');
        }));
    }
}
EmployeesService.ɵprov = ɵɵdefineInjectable({ factory: function EmployeesService_Factory() { return new EmployeesService(ɵɵinject(HttpClient)); }, token: EmployeesService, providedIn: "root" });
EmployeesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
EmployeesService.ctorParameters = () => [
    { type: HttpClient }
];

class EmployeesResolverService {
    constructor(employeesSvc) {
        this.employeesSvc = employeesSvc;
    }
    resolve(route, state) {
        return this.employeesSvc.all();
    }
}
EmployeesResolverService.ɵprov = ɵɵdefineInjectable({ factory: function EmployeesResolverService_Factory() { return new EmployeesResolverService(ɵɵinject(EmployeesService)); }, token: EmployeesResolverService, providedIn: "root" });
EmployeesResolverService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
EmployeesResolverService.ctorParameters = () => [
    { type: EmployeesService }
];

/*
 * Public API Surface of employee-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { EmployeeLibModule, EmployeeTableComponent, EmployeesResolverService, EmployeesService };
//# sourceMappingURL=t4d-wnow-employee-lib.js.map
