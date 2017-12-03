import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PdfPage } from '../pdf/pdf';



@IonicPage()
@Component({
  selector: 'page-exames',
  templateUrl: 'exames.html',
})
export class ExamesPage {

  paciente = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.paciente = navParams.get('paciente');
  }

  visualizarExame(exame) {
    this.navCtrl.push(PdfPage, { exame: exame });
  }

}
