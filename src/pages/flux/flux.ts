import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {PostApiProvider} from "../../providers/post-api/post-api";
import {SpotPage} from "../spot/spot";
import {Storage} from "@ionic/storage";
import {LoginPage} from "../login/login";

/**
 * Generated class for the FluxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component(
  {
  selector: 'page-flux',
  templateUrl: 'flux.html',
})
export class FluxPage
{

  //Déclaration de la variable tableau de posts
  posts = [];

  //Déclaration des classes de navigation, d'appels d'API et de stockage local
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private postApiProvider: PostApiProvider,
    private storage: Storage,
    private app: App
  ) {}

  //Fonction de chargement de la page, chargements de l'ensemble des données des posts
  ionViewDidLoad()
  {
    console.log('ionViewDidLoad FluxPage');
    this.postApiProvider.getPosts().subscribe(data =>
    {
      this.posts = data['data'];
    });
  }

  //Fonction qui permet de visualiser un page de détail d'un post et transferant les données grâce à la variable post
  goToDetail(post)
  {
    this.navCtrl.push(SpotPage, post);
  }

  //Fonction qui permet à l'utilisateur de se déconnecter
  goLogout()
  {
    this.storage.set('user_id',null).then((val) =>
    {
      console.log(val);
      this.app.getRootNav().setRoot(LoginPage);
    })
  }

}
