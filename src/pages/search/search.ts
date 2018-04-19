import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserApiProvider} from "../../providers/user-api/user-api";
import {UserProfilPage} from "../user-profil/user-profil";

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  //Déclaration des variables
  users: any[];
  userslist: any[];

  //Déclaration des classes de navigation et d'appels d'API
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private userApiProvider: UserApiProvider
  )
  {
    this.initializeUsers();
  }

  //Récupere toutes les données des utilisateurs
  initializeUsers()
  {
    this.userApiProvider.getUsers().subscribe(data =>
    {
      this.userslist = data['data'];
    })
  }

  //Fonction de filtrage des pseudo sur les résultat instentanés
  getUser(ev: any)
  {
    this.initializeUsers();
    this.users = this.userslist;
    let val = ev.target.value;
    if(val && val.trim() != '')
    {
      this.users = this.users.filter((user)=>
      {
        return (user.pseudo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
      console.log(this.users);
    }
  }

  //Affichage du profil complet d'un utilisateur en passant les informations par la variable users
  goToProfil(users)
  {
    this.navCtrl.push(UserProfilPage, users);
  }

}
