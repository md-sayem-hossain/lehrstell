import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonService } from './core/services/common.service';
import { FooterComponent } from './modules/layout/footer/footer.component';
import { HeaderComponent } from './modules/layout/header/header.component';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de-CH';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BerufswahlUnterrichtsmaterialComponent } from './modules/shared/components/berufswahl-unterrichtsmaterial/berufswahl-unterrichtsmaterial.component';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localeDe);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BerufswahlUnterrichtsmaterialComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule 
  ],
  providers: [CommonService, { provide: LOCALE_ID, useValue: 'de-ch' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
