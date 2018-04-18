import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserApiProvider} from "../../providers/user-api/user-api";
import {Storage} from "@ionic/storage";
import {FriendApiProvider} from "../../providers/friend-api/friend-api";

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

  user = [];



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private userApiProvider: UserApiProvider,
              private storage: Storage,

  )
  {}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');

    this.storage.get('user_id').then((val) => {
      console.log(val);
      this.userApiProvider.getUser(val).subscribe(data => {
        console.log(data['data']);
        this.user = data['data'];
      })
    })
  }



}







