import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PacientesPage } from './pacientes';

@NgModule({
  declarations: [
    PacientesPage,
  ],
  imports: [
    IonicPageModule.forChild(PacientesPage),
  ],
})
export class PacientesPageModule {}
