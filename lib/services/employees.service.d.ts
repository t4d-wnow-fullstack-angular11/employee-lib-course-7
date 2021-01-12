import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';
export declare class EmployeesService {
    private httpClient;
    constructor(httpClient: HttpClient);
    all(): Observable<Employee[]>;
}
