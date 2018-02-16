import { Injectable } from '@angular/core';
import { AuthResult } from '../models/AuthResult';

@Injectable()
export class AuthService {
    endpoint: String = "auth";

    constructor(private _api: ApiService) { }

    auth(username, password): AuthResult {
      let headers = {
        "Authorization": "Basic " + btoa(username + ":" + password)
      };

      this._api.request("POST", "auth", {
        master_key: "//TODO"
      }, headers);
    }
}
