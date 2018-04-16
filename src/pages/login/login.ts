import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {UserApiProvider} from "../../providers/user-api/user-api";
import {FluxPage} from "../flux/flux";

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
  users = [];
  email;
  idUser;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    private userApiProvider: UserApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.userApiProvider.getUsers().subscribe(data => {
      this.users = data['data'];
    });
  }

  goToFlux(){
    this.idUser = this.users.filter((user) => {
      return (user.email.indexOf(this.email) > -1);
    });


    this.idUser = this.idUser[0].id;

    this.storage.set('user_id',this.idUser).then((val) => {
      console.log(val);
    })

    this.navCtrl.pop();
  }

}
