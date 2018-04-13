import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Platform} from "ionic-angular";
import {Observable} from "rxjs/Observable";

/*
  Generated class for the PostApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostApiProvider {
  private baseUrl: string = "https://proxy.apidae.net/www.rallyetribe.fr/api/posts";

  posts: any[];

  constructor(
    private readonly http: HttpClient,
    private readonly platform: Platform,
    ) {
    console.log('Hello PostApiProvider Provider');
    if (this.platform.is("cordova") && this.platform.is("android")) {
      this.baseUrl = "/android_asset/www/assets/api/posts.json";
    }
  }

  getPosts(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
