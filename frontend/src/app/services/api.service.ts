import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpClientModule, HttpParams, HttpRequest, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {
    port: number = 9000;
    host: String = "localhost";
    protocol: String = "http";
    basePath: String = "/api";
    baseUrl: String = this.protocol + "://" + this.host + ":" + this.port + this.basePath;

    constructor(private _http: HttpClient) { }

    request<T>(verb, endpoint, options, headers): Observable<T> {
        let params = new HttpParams();
        for ( let i in options ) {
            let option = i;
            let value = options[i];

            params = params.set(option, value);
        }

        let resultHeaders = new HttpHeaders();
        for ( let i in headers ) {
          let header = i;
          let value = headers[i];

          resultHeaders = resultHeaders.set(header, value);
        }

        return this._http.request<T>(verb, this.baseUrl + endpoint, {
          params: params,
          headers: resultHeaders
        });
    }
}
