import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftControlMenuComponent } from './components/left-control-menu/left-control-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionMenuComponent } from './components/accordion-menu/accordion-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftControlMenuComponent,
    AccordionMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
