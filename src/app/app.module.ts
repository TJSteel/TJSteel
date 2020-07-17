import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TopNavComponent } from './screens/ui/top-nav/top-nav.component';
// Material Imports
import { MaterialModule } from './material.module';
import { HomeComponent } from './screens/home/home.component';
import { UnknownComponent } from './screens/unknown/unknown.component';
import { PortfolioComponent } from './screens/portfolio/portfolio.component';
import { SiteCardComponent } from './cards/site-card/site-card.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomeComponent,
    UnknownComponent,
    PortfolioComponent,
    SiteCardComponent
    ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
