import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserApiProvider} from "../../providers/user-api/user-api";
import {Storage} from "@ionic/storage";
import {PostApiProvider} from "../../providers/post-api/post-api";
import {SpotPage} from "../spot/spot";
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

  user  = [];
  posts = [];
  idUser;
  myPost;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private userApiProvider: UserApiProvider,

              private postApiProvider: PostApiProvider,
              private storage: Storage
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');



    this.storage.get('user_id').then((val) => {

      this.idUser = val;
      this.userApiProvider.getUser(val).subscribe(data =>{
        this.user = data['data'];
      });
    }).then( (po) => {
      this.postApiProvider.getPosts().subscribe(data => {
        this.posts = data['data'];
        console.log(this.posts);
        this.myPost = this.posts.filter((post) => {
          return (post.user_id === this.idUser)
        })

      })
    })
  }

  goToDetail(post) {
    this.navCtrl.push(SpotPage, post);
  }




}







