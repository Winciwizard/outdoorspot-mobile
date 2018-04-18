import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FriendApiProvider} from "../../providers/friend-api/friend-api";
import {Storage} from "@ionic/storage";
import {UserApiProvider} from "../../providers/user-api/user-api";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  friends: any[];
  currentuser: any[];


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private friendApiProvider: FriendApiProvider,
              private storage: Storage,
              private userApiProvider: UserApiProvider) {
    this.initializeFriend();


  }


  initializeFriend() {

    this.friendApiProvider.getfriend().subscribe(data => {
      this.friends = data[0];
    })

  }

  // getCurrentUser() {
  //   this.storage.get('user_id').then((val) => {
  //     console.log(val);
  //     this.userApiProvider.getUser(val).subscribe(data => {
  //       console.log(data['data']);
  //       this.user = data['data'];
  //     })
  //   })
  // }






}




















