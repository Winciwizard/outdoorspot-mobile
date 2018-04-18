import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Platform} from "ionic-angular";
import {Observable} from "rxjs/Observable";

/*
  Generated class for the FriendApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FriendApiProvider {

  private baseUrl: string = "../../assets/api/friend.json";

  friend: any[];
  id: any[];

  constructor(
    private readonly http: HttpClient,
    private readonly platform: Platform
  ) {
    console.log("Hello MovieApiProvider Provider");
    if (this.platform.is("cordova") && this.platform.is("android")) {
      this.baseUrl = "/android_asset/www/assets/api/friend.json";
    }
  }

  getfriend(): Observable<any> {


    return this.http.get(`${this.baseUrl}`);
  }
}
