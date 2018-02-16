import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './app.router';


import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Modules de ngx-Bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

// Font Awesome module
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GraphComponent } from './components/graph/graph.component';

// Imports des services
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    DashboardComponent,
    GraphComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [
    {provide: ApiService, useClass: ApiService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
