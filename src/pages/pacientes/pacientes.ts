import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoreService } from '../../services/core.services';
import { ExamesPage } from '../exames/exames';

@IonicPage()
@Component({
  selector: 'page-pacientes',
  templateUrl: 'pacientes.html',
})
export class PacientesPage {

  listaPacientes = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private core: CoreService) {
    
  }

  searchNome(nome) {
    this.core.getPacienteByNome(nome).subscribe(data => {
      this.listaPacientes = data;
    }, error => console.log(error));  
  }

  selecionaPaciente(paciente) {
    this.navCtrl.push(ExamesPage, { paciente: paciente });
  }

}
