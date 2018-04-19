import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {UserApiProvider} from "../../providers/user-api/user-api";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  //Déclaration des variables
  users = [];
  email;
  idUser;

  //Déclaration des classes de navigation, d'appels d'API et de stockage local
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    private userApiProvider: UserApiProvider)
  {}

  //Fonction de chargement de la page, chargements de l'ensemble des données des posts
  ionViewDidLoad()
  {
    console.log('ionViewDidLoad LoginPage');
    this.userApiProvider.getUsers().subscribe(data =>
    {
      this.users = data['data'];
    });
  }

  //Fonction de renvoi vers la page de flux, stock l'id de l'utilisateur connecté en local
  goToFlux()
  {
    this.idUser = this.users.filter((user) =>
    {
      return (user.email.indexOf(this.email) > -1);
    });
    this.idUser = this.idUser[0].id;
    this.storage.set('user_id',this.idUser).then((val) =>
    {
      console.log(val);
    });
    this.navCtrl.setRoot(TabsPage);
  }

}
