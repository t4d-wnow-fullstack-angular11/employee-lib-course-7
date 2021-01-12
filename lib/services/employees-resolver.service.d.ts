import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';
import { EmployeesService } from './employees.service';
export declare class EmployeesResolverService implements Resolve<Employee[]> {
    private employeesSvc;
    constructor(employeesSvc: EmployeesService);
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Employee[] | Observable<Employee[]> | Promise<Employee[]>;
}
