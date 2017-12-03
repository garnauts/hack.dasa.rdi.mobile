import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { ZoomPage } from '../zoom/zoom';
import { DataService } from '../../services/data.service';

@IonicPage()
@Component({
  selector: 'page-imagem',
  templateUrl: 'imagem.html',
})
export class ImagemPage {

  imagens = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public dataService: DataService ) {
    debugger;
    this.imagens = dataService.getExame().imagens;
  }

  viewImg(i) {
    let zoomModal = this.modalCtrl.create(ZoomPage, { url: i });
    zoomModal.present();
  }

}
