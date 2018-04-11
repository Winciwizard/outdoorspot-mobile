import { Component } from '@angular/core';

import {SharePage} from "../share/share";
import {FluxPage} from "../flux/flux";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FluxPage;
  tab3Root = SharePage;

  constructor() {

  }
}
