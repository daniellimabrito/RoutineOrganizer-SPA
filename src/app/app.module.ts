import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuotesComponent } from './quotes/quotes.component';
import { AgendaFormComponent } from './agenda-form/agenda-form.component';
// import { DatepickermonthComponent } from './datepickermonth/datepickermonth.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { DatepickermonthComponent } from './datepickermonth/datepickermonth.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    AppComponent,
      QuotesComponent,
      AgendaFormComponent,
      DatepickermonthComponent,
      FormDebugComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
