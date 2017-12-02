import { Component } from '@angular/core';

import { PdfPage } from '../pdf/pdf';
import { ImagemPage } from '../imagem/imagem';

@Component({
  templateUrl: 'visualiza-exame.html'
})
export class VisualizaExame {

  tab1Root = PdfPage;
  tab2Root = ImagemPage;

  constructor() {

  }
  
}
