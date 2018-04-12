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


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    FluxPage,
    SpotPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    ProfilPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    FluxPage,
    SpotPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserApiProvider,
    PostApiProvider

  ]
})
export class AppModule {}
