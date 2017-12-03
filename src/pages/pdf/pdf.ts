import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pdf',
  templateUrl: 'pdf.html',
})
export class PdfPage {

  exame = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    debugger;
    this.exame = navParams.get('exame');
  }

  goBack() {
    this.navCtrl.pop();
  }

  isLoaded: boolean = false;

  afterLoadComplete(pdfData: any) {
    this.isLoaded = true;
  }

}
