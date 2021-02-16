import { environment } from '../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable(  )
export class AuthService {

    public oauthTokenUrl: string;

    constructor(
        private http: HttpClient,
        private jwtHelper: JwtHelperService
        ){
            this.oauthTokenUrl = `${environment.baseUrl}/oauth/token`;
        }

    public login(): Promise<void> {

        let headers = new HttpHeaders();

        headers = headers
                    .set('Content-Type', 'application/x-www-form-urlencoded');

        const body = `grant_type=client_credentials&client_id=${environment.clientId}&client_secret=${environment.secret}`;

        return this.http.post(this.oauthTokenUrl, body, {headers, withCredentials: false})
          .toPromise()
          .then(response => {
            this.armazenarToken(response['access_token']);
            return Promise.resolve(null);
          })
          .catch(response => {
            const responseError = response.error;

            if (response.status === 400) {
              if (responseError.error === 'invalid_grant') {
                alert("Acesso negado. Se o problema persistir entre em contato com o administrado do sistema.");
                return Promise.resolve(null);
              }
            }
          });
    }

    private armazenarToken(token: string): void {
        localStorage.setItem('token', token);
    }

    public token(): string{
        let token =  localStorage.getItem('token');
        if(token){
            return token;
        }
        return null;
    }

    public isAccessTokenInvalido(): boolean {
        const token = localStorage.getItem('token');
        return !token || this.jwtHelper.isTokenExpired(token);
      }
}
