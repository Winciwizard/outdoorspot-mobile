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

  //Variable qui servent à la navigation sur la tab
  tab1Root = FluxPage;
  tab2Root = ContactPage;
  tab3Root = SharePage;
  tab4Root = SearchPage;
  tab5Root = ProfilPage;

  //Déclaration des variables
  Lat: any;
  Long: any;
  idUser: any;
  body: any;

  //Déclaration des classes de navigation, d'appels d'API et de stockage local. Appel la fonction locate()
  constructor(
    public navCtlr: NavController,
    public navParams: NavParams,
    private storage: Storage,
    private userApiProvider: UserApiProvider)
  {
    this.locate();
  }

  //Récupération des coordonnées GPS de la personne connecté via le GPS du téléphone
  locate() {
    navigator.geolocation.getCurrentPosition(position => {
      this.Lat = position.coords.latitude;
      this.Long = position.coords.longitude;

      //Stockage des coordonnées dans la base de données via l'API LARAVEL
      this.storage.get('user_id').then((val) =>
      {
        this.idUser = val;
        this.body =
          {
          "latitude": this.Lat,
          "longitude": this.Long
          };
        console.log(this.body);
        this.userApiProvider.postUser(this.idUser, this.body).subscribe();
      })

    //En cas de succes
    }, err => console.log(err));
    var onSuccess = function (position)
    {
      console.log('Latitude: ' + position.coords.latitude + '\n' +
        'Longitude: ' + position.coords.longitude + '\n' +
        'Altitude: ' + position.coords.altitude + '\n' +
        'Accuracy: ' + position.coords.accuracy + '\n' +
        'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
        'Heading: ' + position.coords.heading + '\n' +
        'Speed: ' + position.coords.speed + '\n' +
        'Timestamp: ' + position.timestamp + '\n');

    };

    //En cas d'erreur
    function onError(error)
    {
      alert('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
    }

    let intervalID;

    //Fonction de répétition de récupération des coordoonnées GPS de façon récurante
    function geolocAgain()
    {
      intervalID = setInterval(nav, 10000);
    }

    //Fonction de stockage en base de donnée
    function nav()
    {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    geolocAgain();
  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad Tabs');
    //Stockage user_id
    this.storage.get('user_id').then((val) =>
    {
      if(val == null)
      {
        this.navCtlr.setRoot(LoginPage);
      }
    })

    //Geolocalisation
    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady()
    {
      console.log("navigator.geolocation works well");
    }
  }
}

