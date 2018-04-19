import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FriendApiProvider} from "../../providers/friend-api/friend-api";
import {Storage} from "@ionic/storage";
import {UserApiProvider} from "../../providers/user-api/user-api";
import {UserProfilPage} from "../user-profil/user-profil";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  //Déclaration des différentes variables necessaires
  friends: any[];
  currentuser: any[];
  myFriends: any [];
  myFriendsList = [];
  dataUser: any[];
  body: any;

  //Déclaration des classes de navigation, d'appels d'API et de stockage local
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private friendApiProvider: FriendApiProvider,
              private storage: Storage,
              private userApiProvider: UserApiProvider)
  {
    this.initializeFriend();
  }


  initializeFriend() {

    //Récupération de l'id de l'utilisateur connecté
    this.storage.get('user_id')
      .then((val) =>
      {
        this.currentuser = val;
      })
      //Récupération des données de l'utilisateur connecté
      .then((val) =>
      {
        return new Promise(resolve =>
        {
          this.userApiProvider.getUser(this.currentuser)
            .subscribe(data =>
            {
              this.dataUser = data['data'];
              resolve(this.dataUser);
            })
        })
      })
      //récupération du tableau d'id des amis de l'utilisateur connecté
      .then((val) =>
      {
        return new Promise(resolve =>
        {
          this.friendApiProvider.getfriend().subscribe(data =>
          {
            this.friends = data;
            this.myFriends = this.friends.filter((value) =>
            {
              return (value.user_id === this.currentuser);
            });
            this.myFriends = this.myFriends[0]['friend'];
            resolve(this.myFriends);
          })
        })
      })
      //Création du tableau d'objet des information des amis
      .then((val) =>
      {
        let getAllUsers = [];
        this.myFriends.forEach((id) =>
        {
          getAllUsers.push(new Promise( resolve =>
          {
            this.userApiProvider.getUser(id).subscribe((info) =>
              {
                this.myFriendsList.push(info['data']);
                resolve();
              }
            );
          }));
        });
        return Promise.all(getAllUsers);
      })
      //Triage de la liste d'amis par ordre de distance par rappor à l'utilisateur connecté
      .then((val) =>
      {
        this.myFriendsList.sort((a,b) =>
        {
          return this.getDistance(this.dataUser,a) - this.getDistance(this.dataUser,b);
        });
        console.log(this.myFriendsList);
      });
  }

  //Affiche une page du profil de l'utilisateur avec les données transférées grâce à la variable amis
  goToProfil(amis) {
    this.navCtrl.push(UserProfilPage, amis);
  }

  //Fonction de calcul de distance entre deux coordonnées GPS
  getDistance(start, end) {

    let R = 6371;
    let lat1 = start.latitude;
    let lon1 = start.longitude;
    let lat2 = end.latitude;
    let lon2 = end.longitude;

    let dLat = this.toRad((lat2 - lat1));
    let dLon = this.toRad((lon2 - lon1));
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;

    return d;
  }

  toRad(x) {
    return x * Math.PI / 180;
  }
}
























