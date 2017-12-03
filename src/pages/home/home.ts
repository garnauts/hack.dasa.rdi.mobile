import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PacientesPage } from '../pacientes/pacientes';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  pesquisarPaciente() {
    this.navCtrl.push(PacientesPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
