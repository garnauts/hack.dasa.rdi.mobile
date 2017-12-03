import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { ZoomPage } from '../zoom/zoom';
import { DataService } from '../../services/data.service';
import { ImageViewerController } from 'ionic-img-viewer';

@IonicPage()
@Component({
  selector: 'page-imagem',
  templateUrl: 'imagem.html',
})
export class ImagemPage {
  _imageViewerCtrl: ImageViewerController;
  imagens = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public dataService: DataService
    ,public imageViewerCtrl: ImageViewerController ) {
      
    this.imagens = dataService.getExame().imagens;
    this._imageViewerCtrl = imageViewerCtrl;
  }

  viewImg(i) {
    let zoomModal = this.modalCtrl.create(ZoomPage, { url: i });
    zoomModal.present();
  }

  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
  }

}
