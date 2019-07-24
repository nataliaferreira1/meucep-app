import { Component } from '@angular/core';
import Endereco from 'src/app/domain/Endereco'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  enderecos:Array<Object> = []

  ionViewDidEnter(){
    let endereco1 = new Endereco()
    endereco1.rua = 'Viela Santa Emilia'
    endereco1.numero = '47'
    endereco1.bairro = 'Vila Japão'
    endereco1.cidade = "Itaquaquecetuba"
    endereco1.estado = 'SP'
    this.enderecos.push(endereco1)
  }
}
