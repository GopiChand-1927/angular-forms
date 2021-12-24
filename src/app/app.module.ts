import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { StudentModule } from './student/student.module';
import { EmployeeModule } from './employee/employee.module';

let rules=[
  {"path":"r1","component":HomeComponent},
  {"path":"r2","component":AboutComponent},
  {"path":"r3","component":ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rules)
    ,RouterModule,
     StudentModule,
    EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
