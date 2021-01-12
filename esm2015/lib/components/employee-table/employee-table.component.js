import { Component, Input } from '@angular/core';
export class EmployeeTableComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWUtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2VtcGxveWVlLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9lbXBsb3llZS10YWJsZS9lbXBsb3llZS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRekQsTUFBTSxPQUFPLHNCQUFzQjtJQVFqQztRQU5PLHFCQUFnQixHQUFhO1lBQ2xDLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE9BQU87U0FBQyxDQUFDO1FBR3pDLGNBQVMsR0FBZSxFQUFFLENBQUM7SUFFbEIsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixzK0JBQThDOzthQUUvQzs7Ozt3QkFNRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbXBsb3llZSB9IGZyb20gJy4uLy4uL21vZGVscy9FbXBsb3llZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1lbXBsb3llZS10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9lbXBsb3llZS10YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2VtcGxveWVlLXRhYmxlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFbXBsb3llZVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbXG4gICAgJ3VzZXJuYW1lJywgJ2ZpcnN0TmFtZScsICdsYXN0TmFtZScsICd0aXRsZSddO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBlbXBsb3llZXM6IEVtcGxveWVlW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiJdfQ==