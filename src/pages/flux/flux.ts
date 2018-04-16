import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {PostApiProvider} from "../../providers/post-api/post-api";
import {SpotPage} from "../spot/spot";
import {Storage} from "@ionic/storage";
import {LoginPage} from "../login/login";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the FluxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flux',
  templateUrl: 'flux.html',
})
export class FluxPage {
  posts = [];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private postApiProvider: PostApiProvider,
    private storage: Storage,
    private app: App
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FluxPage');
    this.postApiProvider.getPosts().subscribe(data => {
      this.posts = data['data'];
    });
  }

  goToDetail(post) {
    this.navCtrl.push(SpotPage, post);
  }

  goLogout(){
    this.storage.set('user_id',null).then((val) => {
      console.log(val);
      this.app.getRootNav().setRoot(LoginPage);
    })
  }

}
