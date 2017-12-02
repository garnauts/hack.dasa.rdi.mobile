import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ExamesPage } from '../pages/exames/exames';
import { ImagemPage } from '../pages/imagem/imagem';
import { PdfPage } from '../pages/pdf/pdf';
import { VisualizaExame } from '../pages/visualiza-exame/visualiza-exame';

@NgModule({
  declarations: [
    MyApp,    
    HomePage,
    ExamesPage,
    ImagemPage,
    PdfPage,
    VisualizaExame
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ExamesPage,
    ImagemPage,
    PdfPage,
    VisualizaExame
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
