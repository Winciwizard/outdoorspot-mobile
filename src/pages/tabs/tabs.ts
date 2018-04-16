import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import {LoginPage} from "../login/login";
import {ProfilPage} from "../profil/profil";
import {FluxPage} from "../flux/flux";
import {Storage} from "@ionic/storage";
import {NavController, NavParams} from "ionic-angular";
import {SearchPage} from "../search/search";
import {SharePage} from "../share/share";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = FluxPage;
  tab2Root = ContactPage;
  tab3Root = SearchPage;
  tab4Root = ProfilPage;
  tab5Root = SharePage;


  constructor(
    public navCtlr: NavController,
    public navParams: NavParams,
    private storage: Storage)
  {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs');
    this.storage.get('user_id').then((val) => {
      if(val == null){
        this.navCtlr.setRoot(LoginPage);
      }
    })
  }

}

