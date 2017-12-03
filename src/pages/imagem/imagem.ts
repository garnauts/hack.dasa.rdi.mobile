import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { ZoomPage } from '../zoom/zoom';

/**
 * Generated class for the ImagemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imagem',
  templateUrl: 'imagem.html',
})
export class ImagemPage {

  imagens = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagemPage');

    this.imagens.push('https://s3-sa-east-1.amazonaws.com/s1-major/lsgflsdksadlkladsfalgf04tt95095.jpg');
    this.imagens.push('https://s3-sa-east-1.amazonaws.com/s1-major/kfjsdfjsfj439r8498risdjf49.jpg');

  }

  viewImg(i) {
    let zoomModal = this.modalCtrl.create(ZoomPage, { url: i });
    zoomModal.present();
  }

}
