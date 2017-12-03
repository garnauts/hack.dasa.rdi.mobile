import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZoomPage } from './zoom';

@NgModule({
  declarations: [
    ZoomPage,
  ],
  imports: [
    IonicPageModule.forChild(ZoomPage),
  ],
})
export class ZoomPageModule {}
