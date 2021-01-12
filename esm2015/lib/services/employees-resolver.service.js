import { Injectable } from '@angular/core';
import { EmployeesService } from './employees.service';
import * as i0 from "@angular/core";
import * as i1 from "./employees.service";
export class EmployeesResolverService {
    constructor(employeesSvc) {
        this.employeesSvc = employeesSvc;
    }
    resolve(route, state) {
        return this.employeesSvc.all();
    }
}
EmployeesResolverService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EmployeesResolverService_Factory() { return new EmployeesResolverService(i0.ɵɵinject(i1.EmployeesService)); }, token: EmployeesResolverService, providedIn: "root" });
EmployeesResolverService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
EmployeesResolverService.ctorParameters = () => [
    { type: EmployeesService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWVzLXJlc29sdmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvZW1wbG95ZWUtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9lbXBsb3llZXMtcmVzb2x2ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFNdkQsTUFBTSxPQUFPLHdCQUF3QjtJQUVuQyxZQUFvQixZQUE4QjtRQUE5QixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7SUFBSSxDQUFDO0lBRXZELE9BQU8sQ0FDTCxLQUE2QixFQUM3QixLQUEwQjtRQUUxQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDakMsQ0FBQzs7OztZQVpGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBTFEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUmVzb2x2ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEVtcGxveWVlIH0gZnJvbSAnLi4vbW9kZWxzL0VtcGxveWVlJztcbmltcG9ydCB7IEVtcGxveWVlc1NlcnZpY2UgfSBmcm9tICcuL2VtcGxveWVlcy5zZXJ2aWNlJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFbXBsb3llZXNSZXNvbHZlclNlcnZpY2UgaW1wbGVtZW50cyBSZXNvbHZlPEVtcGxveWVlW10+IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVtcGxveWVlc1N2YzogRW1wbG95ZWVzU2VydmljZSkgeyB9XG5cbiAgcmVzb2x2ZShcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6XG4gICAgRW1wbG95ZWVbXSB8IE9ic2VydmFibGU8RW1wbG95ZWVbXT4gfCBQcm9taXNlPEVtcGxveWVlW10+IHtcbiAgICByZXR1cm4gdGhpcy5lbXBsb3llZXNTdmMuYWxsKCk7XG4gIH1cbn1cbiJdfQ==