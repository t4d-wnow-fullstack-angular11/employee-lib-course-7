(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('@angular/material/table'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@t4d-wnow/employee-lib', ['exports', '@angular/core', '@angular/common', '@angular/common/http', '@angular/material/table', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['t4d-wnow'] = global['t4d-wnow'] || {}, global['t4d-wnow']['employee-lib'] = {}), global.ng.core, global.ng.common, global.ng.common.http, global.ng.material.table, global.rxjs.operators));
}(this, (function (exports, i0, common, i1, table, operators) { 'use strict';

    var EmployeeTableComponent = /** @class */ (function () {
        function EmployeeTableComponent() {
            this.displayedColumns = [
                'username', 'firstName', 'lastName', 'title'
            ];
            this.employees = [];
        }
        EmployeeTableComponent.prototype.ngOnInit = function () {
        };
        return EmployeeTableComponent;
    }());
    EmployeeTableComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-employee-table',
                    template: "<table mat-table [dataSource]=\"employees\">\n\n  <ng-container matColumnDef=\"username\">\n    <th mat-header-cell *matHeaderCellDef>Username</th>\n    <td mat-cell *matCellDef=\"let employee\"> {{employee.username}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"firstName\">\n    <th mat-header-cell *matHeaderCellDef>First Name</th>\n    <td mat-cell *matCellDef=\"let employee\"> {{employee.firstName}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"lastName\">\n    <th mat-header-cell *matHeaderCellDef>Last Name</th>\n    <td mat-cell *matCellDef=\"let employee\"> {{employee.lastName}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"title\">\n    <th mat-header-cell *matHeaderCellDef>Title</th>\n    <td mat-cell *matCellDef=\"let employee\"> {{employee.title}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n</table>\n",
                    styles: ["table{width:100%}"]
                },] }
    ];
    EmployeeTableComponent.ctorParameters = function () { return []; };
    EmployeeTableComponent.propDecorators = {
        employees: [{ type: i0.Input }]
    };

    var EmployeeLibModule = /** @class */ (function () {
        function EmployeeLibModule() {
        }
        return EmployeeLibModule;
    }());
    EmployeeLibModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [EmployeeTableComponent],
                    imports: [
                        common.CommonModule,
                        i1.HttpClientModule,
                        table.MatTableModule,
                    ],
                    exports: [EmployeeTableComponent]
                },] }
    ];

    var EmployeesService = /** @class */ (function () {
        function EmployeesService(httpClient) {
            this.httpClient = httpClient;
        }
        EmployeesService.prototype.all = function () {
            return this.httpClient.get('/api/employees').pipe(operators.catchError(function () {
                throw Error('Unable to download employees');
            }));
        };
        return EmployeesService;
    }());
    EmployeesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EmployeesService_Factory() { return new EmployeesService(i0.ɵɵinject(i1.HttpClient)); }, token: EmployeesService, providedIn: "root" });
    EmployeesService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    EmployeesService.ctorParameters = function () { return [
        { type: i1.HttpClient }
    ]; };

    var EmployeesResolverService = /** @class */ (function () {
        function EmployeesResolverService(employeesSvc) {
            this.employeesSvc = employeesSvc;
        }
        EmployeesResolverService.prototype.resolve = function (route, state) {
            return this.employeesSvc.all();
        };
        return EmployeesResolverService;
    }());
    EmployeesResolverService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EmployeesResolverService_Factory() { return new EmployeesResolverService(i0.ɵɵinject(EmployeesService)); }, token: EmployeesResolverService, providedIn: "root" });
    EmployeesResolverService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    EmployeesResolverService.ctorParameters = function () { return [
        { type: EmployeesService }
    ]; };

    /*
     * Public API Surface of employee-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.EmployeeLibModule = EmployeeLibModule;
    exports.EmployeeTableComponent = EmployeeTableComponent;
    exports.EmployeesResolverService = EmployeesResolverService;
    exports.EmployeesService = EmployeesService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=t4d-wnow-employee-lib.umd.js.map
