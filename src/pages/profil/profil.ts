import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserApiProvider} from "../../providers/user-api/user-api";

/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  user  = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private userApiProvider: UserApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
    this.userApiProvider.getUsers().subscribe(data =>{
      this.user = data['data'][7];
    })
  }



}
