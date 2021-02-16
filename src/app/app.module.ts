import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { AuthService } from './auth.service';
import { Interceptor } from "./interceptor";


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './charts/barchart/barchart.component';
import ptBr from '@angular/common/locales/pt';
import { CommonModule, registerLocaleData } from '@angular/common';
import { environment } from 'src/environments/environment.prod';
import { JwtModule } from '@auth0/angular-jwt';

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
    ChartsModule,
    CommonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        // rotas permitidas
        allowedDomains:  environment.tokenWhitelistedDomains,
        // rotas não permitidas
        disallowedRoutes: environment.tokenBlacklistedRoutes,
      }
    })
  ],
  providers: [
    AppService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true } ,
    {
      provide: LOCALE_ID,
      useValue: 'pt-PT'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
