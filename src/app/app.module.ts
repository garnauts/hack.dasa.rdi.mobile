import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CoreService } from '../services/core.services';
import { HttpService } from '../services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { HomePage } from '../pages/home/home';
import { ExamesPage } from '../pages/exames/exames';
import { ImagemPage } from '../pages/imagem/imagem';
import { PdfPage } from '../pages/pdf/pdf';
import { VisualizaExame } from '../pages/visualiza-exame/visualiza-exame';
import { ZoomPage } from '../pages/zoom/zoom';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZoomAreaModule } from 'ionic2-zoom-area';
import { PacientesPage } from '../pages/pacientes/pacientes';
import { DataService } from '../services/data.service';

import { IonicImageViewerModule } from 'ionic-img-viewer';  

@NgModule({
  declarations: [
    MyApp,    
    HomePage,
    ExamesPage,
    ImagemPage,
    PdfPage,
    VisualizaExame,
    ZoomPage,
    PacientesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PdfViewerModule,
    BrowserAnimationsModule,
    IonicImageViewerModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ExamesPage,
    ImagemPage,
    PdfPage,
    VisualizaExame,
    ZoomPage,
    PacientesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CoreService,
    HttpService,
    DataService
  ]
})
export class AppModule {}
