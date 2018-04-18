import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import {LoginPage} from "../login/login";
import {ProfilPage} from "../profil/profil";
import {FluxPage} from "../flux/flux";
import {Storage} from "@ionic/storage";
import {NavController, NavParams} from "ionic-angular";
import {SearchPage} from "../search/search";
import {SharePage} from "../share/share";
import {UserApiProvider} from "../../providers/user-api/user-api";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = FluxPage;
  tab2Root = ContactPage;
  tab3Root = SharePage;
  tab4Root = SearchPage;
  tab5Root = ProfilPage;

  Lat: any;
  Long: any;
  idUser: any;
  body: any;

  constructor(
    public navCtlr: NavController,
    public navParams: NavParams,
    private storage: Storage,
    private userApiProvider: UserApiProvider)

  {this.locate();}
  locate() {
    navigator.geolocation.getCurrentPosition(position => {
      this.Lat = position.coords.latitude;
      this.Long = position.coords.longitude;

      this.storage.get('user_id').then((val) => {
        this.idUser = val;
        this.body = {
          "latitude": this.Lat,
          "longitude": this.Long
        };
        console.log(this.body);
        this.userApiProvider.postUser(this.idUser, this.body).subscribe();
      })


    }, err => console.log(err));
    var onSuccess = function (position) {
      console.log('Latitude: ' + position.coords.latitude + '\n' +
        'Longitude: ' + position.coords.longitude + '\n' +
        'Altitude: ' + position.coords.altitude + '\n' +
        'Accuracy: ' + position.coords.accuracy + '\n' +
        'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
        'Heading: ' + position.coords.heading + '\n' +
        'Speed: ' + position.coords.speed + '\n' +
        'Timestamp: ' + position.timestamp + '\n');

    };

    function onError(error) {
      alert('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
    }

    var intervalID;

    function geolocAgain() {
      intervalID = setInterval(nav, 10000);
    }

    function nav() {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);

    }
    geolocAgain();

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad Tabs');
    //stockage user_id
    this.storage.get('user_id').then((val) => {
      if(val == null){
        this.navCtlr.setRoot(LoginPage);
      }
    })

    //Geolocalisation
    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
      console.log("navigator.geolocation works well");
      }

}}

