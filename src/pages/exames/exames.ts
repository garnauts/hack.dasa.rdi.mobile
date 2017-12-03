import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VisualizaExame } from '../visualiza-exame/visualiza-exame';
import { DataService } from '../../services/data.service';



@IonicPage()
@Component({
  selector: 'page-exames',
  templateUrl: 'exames.html',
})
export class ExamesPage {

  paciente = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataService) {
    this.paciente = navParams.get('paciente');
  }

  visualizarExame(exame) {
    this.dataService.setExame(exame);
    console.log(exame);
    this.navCtrl.push(VisualizaExame);
  }

}
