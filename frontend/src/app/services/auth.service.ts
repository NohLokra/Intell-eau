import { Injectable } from '@angular/core';
import { AuthResult } from '../models/AuthResult';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
    endpoint: String = "auth";

    constructor(private _api: ApiService) { }

    auth(username, password): Observable<AuthResult> {
      let headers = {
        "Authorization": "Basic " + btoa(username + ":" + password)
      };

      let options = {
          master_key: "//TODO"
      };

      return this._api.request<AuthResult>("POST", "auth", options, headers);
    }
}
