import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/componentes/inicio/inicio.component';
import { ButtonComponent } from './inicio/componentes/shared/button/button.component';
import { TextInputComponent } from './inicio/componentes/shared/text-input/text-input.component';
import {MatFormField, MatLabel} from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ButtonComponent,
    TextInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormField,
    MatLabel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
