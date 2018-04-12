import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from "ionic-angular";
import {Observable} from "rxjs/Observable";


/*
  Generated class for the UserApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserApiProvider {

  private  baseUrl: string = "../../assets/api/users.json";

  users: any [];

  constructor(  private readonly http: HttpClient,
                private readonly platform: Platform) {
    console.log('Hello UserApiProvider Provider');
    if (this.platform.is("cordova") && this.platform.is("android")) {
      this.baseUrl = "/android_asset/www/assets/api/users.json";
    }
  }
    getUsers(): Observable<any> {
      return this.http.get(`${this.baseUrl}`);
    }
}
