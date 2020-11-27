import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirstComponent } from './first/first.component';
import { NewcompComponent } from './newcomp.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AtmComponent } from './atm/atm.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TheIfComponentComponent } from './the-if-component/the-if-component.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    NewcompComponent,
    TwoWayDataBindingComponent,
    LoginComponent,
    AtmComponent,
    CalculatorComponent,
    TheIfComponentComponent,
    EmployeeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
