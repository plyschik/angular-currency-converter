import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxCurrencyModule } from 'ngx-currency';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConverterFormComponent } from './components/converter-form/converter-form.component';
import { ConverterResultComponent } from './components/converter-result/converter-result.component';

import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "ngx-currency/src/currency-mask.config";

export const customCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'left',
  allowNegative: false,
  allowZero: false,
  decimal: '.',
  precision: 2,
  prefix: '',
  suffix: '',
  thousands: ',',
  nullable: false
};

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AboutPageComponent,
    NavbarComponent,
    ConverterFormComponent,
    ConverterResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxCurrencyModule
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: customCurrencyMaskConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}