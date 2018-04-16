import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {LoginPage} from "../login/login";
import {ProfilPage} from "../profil/profil";

import {FluxPage} from "../flux/flux";
import {SearchPage} from "../search/search";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = FluxPage;
  tab2Root = AboutPage;
  tab3Root = SearchPage;
  tab4Root = LoginPage;
  tab5Root = ProfilPage;

  constructor() {

  }
}
