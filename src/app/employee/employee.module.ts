import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeInsertComponent } from './employee-insert/employee-insert.component';

@NgModule({
    declarations: [
    EmployeeInsertComponent
  ],
    imports: [ CommonModule ],
    exports: [],
    providers: [],
})
export class EmployeeModule {}