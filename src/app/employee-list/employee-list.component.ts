import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
              <h2> Employee List </h2>
              <h3> {{errorMessage}}</h3>
              <ul *ngFor = "let employee of employees">
                  <li>
                    {{employee.name}}
                  </li>
              </ul>
            `
})
export class EmployeeListComponent implements OnInit {
  errorMessage: string = "";
  employees = []
  constructor(private _employeeService : EmployeeService) { }

  ngOnInit() {
  // this.employees = this._employeeService.getEmployees();

  this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
                resEmpError => this.errorMessage = resEmpError
                )
      };
}
