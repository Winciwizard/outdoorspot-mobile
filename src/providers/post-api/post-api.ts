import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the PostApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostApiProvider {

  //Déclaration de la variable de l'adresse de l'api posts
  private baseUrl: string = "https://proxy.apidae.net/www.rallyetribe.fr/api/posts";

  posts: any[];

  //Déclaration des classes d'appels d'API
  constructor(private readonly http: HttpClient)
  {
    console.log('Hello PostApiProvider Provider');
  }

  //Récupération du JSON de tout les posts
  getPosts(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }









}
