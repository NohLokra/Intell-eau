import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  port: number = 9000;
  host: String = "localhost";
  protocol: String = "http";
  basePath: String = "/api";
  baseUrl: String = this.protocol + "://" + this.host + ":" + this.port + this.basePath;

  constructor() { }
    _request<T>(verb, endpoint, options, headers): Observable<T> {

        let request = new HttpRequest();

        let params = new HttpParams();
        for ( let i in options ) {
            let option = i;
            let value = options[i];

            params = params.set(option, value);
        }

        request = request.clone({
          params: params
        });

        let headers = new HttpHeaders();
        for ( let i in headers ) {
          let header = i;
          let value = headers[i];

          headers = headers.set(header, value);
        }


        request = request.clone({
          headers: headers
        });

        return this._http.request<T>(verb, this.baseUrl + endpoint, {
            params: params,
            headers: headers
        });
    }
}
