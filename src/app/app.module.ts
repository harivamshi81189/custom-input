import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInputFieldComponent } from './custom-input-field/custom-input-field.component';
import { NumberWithCommasDirective } from './directives/number-with-commos.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomInputFieldComponent,
    NumberWithCommasDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
