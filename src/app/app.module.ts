import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { PropertiesComponent } from './properties/properties.component';
import { SchoolsComponent } from './schools/schools.component';
import { CONST_ROUTING } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PropertiesComponent,
    SchoolsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	CONST_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }