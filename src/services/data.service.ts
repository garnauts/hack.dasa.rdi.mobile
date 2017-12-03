import { Injectable } from '@angular/core';

@Injectable()
export class DataService {   
  private exame;
  
  constructor( ) {

  };   

  setExame(exame) {
      this.exame = exame;
  }

  getExame() {
      return this.exame;
  }
}
