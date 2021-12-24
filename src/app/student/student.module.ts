import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentInsertComponent } from './student-insert.component';
import { StudentListComponent } from './student-list/student-list.component';

let studentrules=[{
    "path":"studentinsert","component":StudentInsertComponent
},{
    "path":"studentlist","component":StudentListComponent
}];
@NgModule({
    declarations: [StudentInsertComponent, StudentListComponent],
    imports: [ CommonModule,RouterModule.forChild(studentrules) ],
    exports: [],
    providers: [],
})
export class StudentModule {}