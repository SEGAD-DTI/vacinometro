import { environment } from '../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

    dashboardUrl: string;

    constructor(private http: HttpClient) {
      this.dashboardUrl = `${environment.baseUrl}/api/v1/dashboard`;
    }

    public index(): Promise<any> {
      return this.http
        .get(`${this.dashboardUrl}`)
        .toPromise()
        .then((response) => {
          return response;
        });
    }

    public filter(codigo): Promise<any> {
      return this.http
        .get(`${this.dashboardUrl}/filter/subcategorias?codCategoria=${codigo}`)
        .toPromise()
        .then((response) => {
          return response;
        });
    }
}
