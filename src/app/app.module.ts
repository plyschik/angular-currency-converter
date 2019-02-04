import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConverterFormComponent } from './components/converter-form/converter-form.component';
import { ConverterResultComponent } from './components/converter-result/converter-result.component';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import { NullMoneyFormatPipe } from './pipes/null-money-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AboutPageComponent,
    NavbarComponent,
    ConverterFormComponent,
    ConverterResultComponent,
    NumbersOnlyDirective,
    NullMoneyFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}