import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsLibraryComponent } from './components-library/components-library.component';
import { AppRoutingModule } from './/app-routing.module';
import { ButtonModule } from './button/button.module';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsLibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
