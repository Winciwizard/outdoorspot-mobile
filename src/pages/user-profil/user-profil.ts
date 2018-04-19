import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserApiProvider} from "../../providers/user-api/user-api";
import {PostApiProvider} from "../../providers/post-api/post-api";
import {SpotPage} from "../spot/spot";

/**
 * Generated class for the UserProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profil',
  templateUrl: 'user-profil.html',
})
export class UserProfilPage {

  //Déclaration des variables
  user  = [];
  posts = [];
  myPost;

  //Déclaration des classes de navigation et d'appels d'API
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private userApiProvider: UserApiProvider,
              private postApiProvider: PostApiProvider,
  ) {}

  //Fonction de chargement, récupére l'id de l'utilisateur et ses information
  ionViewDidLoad()
  {
    console.log('ionViewDidLoad ProfilPage');
    this.user = this.navParams.data;
    console.log(this.user['id']);

    this.postApiProvider.getPosts().subscribe(data =>
    {
        this.posts = data['data'];
        console.log(this.posts);
        this.myPost = this.posts.filter((post) =>
        {
          return (post.user_id === this.user['id'])
        })
    })
  }


  goToDetail(post)
  {
    this.navCtrl.push(SpotPage, post);
  }

}
