import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SpotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spot',
  templateUrl: 'spot.html',
})
export class SpotPage {

  //Déclaration de la variable post
  post: any;

  //Déclaration des classes de navigation
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  //Fonction de chargement de page, intégre les donnés de data dans la variable post
  ionViewDidLoad()
  {
    console.log('ionViewDidLoad SpotPage');
    this.post = this.navParams.data;
  }

}
