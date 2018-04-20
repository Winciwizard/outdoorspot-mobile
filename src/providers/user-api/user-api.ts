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

  //Déclaration de la variable de l'adresse de l'api users
  private  baseUrl: string = "https://proxy.apidae.net/www.rallyetribe.fr/api/users";

  users: any [];

  //Déclaration de la variable de l'adresse de l'api users
  constructor(private readonly http: HttpClient)
  {
    console.log('Hello UserApiProvider Provider');
  }

  //Récupération du JSON de tout les utilisateurs
  getUsers(): Observable<any>
  {
    return this.http.get(`${this.baseUrl}`);
  }

  //Récupération du JSON d'un utilisateur
  getUser(id): Observable<any>
  {
    return this.http.get(`${this.baseUrl}`+'/'+id);
  }

  //Mise à jour par JSON d'un utilisateurs
  postUser(id, body): Observable<any>
  {
    return this.http.patch(`${this.baseUrl}`+'/'+id, body);
  }
}
