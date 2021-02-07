import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './charts/barchart/barchart.component';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule

  ],
  providers: [
    AppService,
    {
      provide: LOCALE_ID,
      useValue: 'pt-PT'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
