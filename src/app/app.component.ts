import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  template: `
              <h1> Random Company </h1>
              <app-employee-list></app-employee-list>
              <app-employee-details></app-employee-details>
            `,
  providers : [EmployeeService]
})
export class AppComponent {
}
