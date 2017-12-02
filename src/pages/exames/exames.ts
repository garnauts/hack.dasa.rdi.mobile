import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VisualizaExame } from '../visualiza-exame/visualiza-exame';


@IonicPage()
@Component({
  selector: 'page-exames',
  templateUrl: 'exames.html',
})
export class ExamesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamesPage');
  }

  visualizarExame() {
    this.navCtrl.push(VisualizaExame);
  }

}
