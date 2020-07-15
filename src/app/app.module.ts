import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './footer.component';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { CustoommaterialModule } from './custoommaterial.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    MatCardModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustoommaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
