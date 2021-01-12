import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class EmployeesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    all() {
        return this.httpClient.get('/api/employees').pipe(catchError(() => {
            throw Error('Unable to download employees');
        }));
    }
}
EmployeesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EmployeesService_Factory() { return new EmployeesService(i0.ɵɵinject(i1.HttpClient)); }, token: EmployeesService, providedIn: "root" });
EmployeesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
EmployeesService.ctorParameters = () => [
    { type: HttpClient }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvZW1wbG95ZWUtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9lbXBsb3llZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU81QyxNQUFNLE9BQU8sZ0JBQWdCO0lBRTNCLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBSSxDQUFDO0lBRS9DLEdBQUc7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFhLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUMzRCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztZQWJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBUlEsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBFbXBsb3llZSB9IGZyb20gJy4uL21vZGVscy9FbXBsb3llZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEVtcGxveWVlc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkgeyB9XG5cbiAgYWxsKCk6IE9ic2VydmFibGU8RW1wbG95ZWVbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0PEVtcGxveWVlW10+KCcvYXBpL2VtcGxveWVlcycpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKCgpID0+IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ1VuYWJsZSB0byBkb3dubG9hZCBlbXBsb3llZXMnKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19