import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FriendApiProvider} from "../../providers/friend-api/friend-api";
import {Storage} from "@ionic/storage";
import {UserApiProvider} from "../../providers/user-api/user-api";
import {UserProfilPage} from "../user-profil/user-profil";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  friends: any[];
  currentuser: any[];
  myFriends: any [];
  myFriendsList = [];


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private friendApiProvider: FriendApiProvider,
              private storage: Storage,
              private userApiProvider: UserApiProvider) {
    this.initializeFriend();
  }


  initializeFriend() {

    this.storage.get('user_id').then((val) => {
      this.currentuser = val;
    }).then((va) => {
      this.friendApiProvider.getfriend().subscribe(data => {
        this.friends = data;
        this.myFriends = this.friends.filter((value) => {
          return (value.user_id === this.currentuser);
        });
        this.myFriends = this.myFriends[0]['friend'];

        this.myFriends.forEach((id) => {

          this.userApiProvider.getUser(id).subscribe((info) => {

              this.myFriendsList.push(info['data'])

            }
          );

        });
      });
    });
    console.log(this.myFriendsList);

  }

  goToProfil(amis){

    this.navCtrl.push(UserProfilPage, amis);


  }



}




















