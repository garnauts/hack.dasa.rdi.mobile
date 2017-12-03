import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Constants } from '../utils/constants';
import { Format } from '../utils/string.format';
import {Observable} from 'rxjs';

@Injectable()
export class CoreService {
    private url = Constants.URL;
    private paciente = Constants.paciente;
    private stringFormat = Format.stringFormat;
    
    constructor(private httpService: HttpService) {        
    }

    getPacienteByNome(nomePaciente) : Observable<any>{
        return this.httpService.get(this.url + this.stringFormat(this.paciente.getByNome) + nomePaciente, {});
    }

}
