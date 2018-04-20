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

  //Déclaration de la variable de l'adresse de l'api friends
  private baseUrl: string = "../../assets/api/friend.json";

  friend: any[];
  id: any[];

  //Déclaration des classes de plateform et d'appels d'API
  constructor(
    private readonly http: HttpClient,
    private readonly platform: Platform
  )
  {
    console.log("Hello MovieApiProvider Provider");
    if (this.platform.is("cordova") && this.platform.is("android"))
    {
      this.baseUrl = "/android_asset/www/assets/api/friend.json";
    }
  }

  //Récupération du JSON de tout les amis
  getfriend(): Observable<any>
  {
    return this.http.get(`${this.baseUrl}`);
  }
}
