import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PostApiProvider} from "../../providers/post-api/post-api";
import {SpotPage} from "../spot/spot";

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
    private postApiProvider: PostApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FluxPage');
    this.postApiProvider.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

  goToDetail(post) {
    this.navCtrl.push(SpotPage, post);
  }

}
