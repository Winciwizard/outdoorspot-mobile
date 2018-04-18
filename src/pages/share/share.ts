import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Camera, CameraOptions} from "@ionic-native/camera";

/**
 * Generated class for the SharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharePage');
  }

}
