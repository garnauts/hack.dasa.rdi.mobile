import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../services/data.service';

@IonicPage()
@Component({
  selector: 'page-pdf',
  templateUrl: 'pdf.html',
})
export class PdfPage {

  exame = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataService) {
    this.exame = dataService.getExame();
  }

  goBack() {
    this.navCtrl.pop();
  }

  isLoaded: boolean = false;

  afterLoadComplete(pdfData: any) {
    this.isLoaded = true;
  }

}
