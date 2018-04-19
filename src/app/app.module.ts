import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {LoginPageModule} from "../pages/login/login.module";
import {ProfilPageModule} from "../pages/profil/profil.module";
import { UserApiProvider } from '../providers/user-api/user-api';
import {FluxPage} from "../pages/flux/flux";
import {HttpClientModule} from "@angular/common/http";
import { PostApiProvider } from '../providers/post-api/post-api';
import {SpotPage} from "../pages/spot/spot";

import {SearchPage} from "../pages/search/search";
import {UserProfilPage} from "../pages/user-profil/user-profil";
import {IonicStorageModule} from "@ionic/storage";
import {FriendApiProvider } from '../providers/friend-api/friend-api';
import {ContactPage} from "../pages/contact/contact";
import {SharePage} from "../pages/share/share";



@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    FluxPage,
    SpotPage,
    SearchPage,
    UserProfilPage,
    ContactPage,
    SharePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    LoginPageModule,
    ProfilPageModule


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    FluxPage,
    SpotPage,
    SearchPage,
    UserProfilPage,
    ContactPage,
    SharePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserApiProvider,
    PostApiProvider,
    FriendApiProvider

  ]
})
export class AppModule {}
