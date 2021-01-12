import { OnInit } from '@angular/core';
import { Employee } from '../../models/Employee';
export declare class EmployeeTableComponent implements OnInit {
    displayedColumns: string[];
    employees: Employee[];
    constructor();
    ngOnInit(): void;
}
