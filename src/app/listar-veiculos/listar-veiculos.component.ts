import { KEY_VEICULO } from './../utils/memory-cache-util';
import { TipoVeiculo, Veiculo } from './../models/Veiculos';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemoreCacheUtil } from '../utils/memory-cache-util';

@Component({
  selector: 'app-listar-veiculos',
  templateUrl: './listar-veiculos.component.html',
  styleUrls: ['./listar-veiculos.component.css']
})
export class ListarVeiculosComponent implements OnInit {
  listVeiculos: Veiculo[] = [];

  hideCardAviso = true;
  segundos! : number;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.listVeiculos = MemoreCacheUtil.getList(KEY_VEICULO);
  }

  excluir(id: number){
    this.listVeiculos = MemoreCacheUtil.deletar(KEY_VEICULO, id);
    this.segundos = 3;
    this.hideCardAviso=false;

    this.showMessage();
  }

  editar(id: number){
    this.router.navigate(['/cadastrar-veiculo', id]);
  }

  novo(event : any){
    this.router.navigate(['/cadastrar-veiculo', 0]);
  }

  showMessage(){
    if(this.segundos==0){
      this.hideCardAviso=true;
      return;
    }
    else{
      setTimeout(()=>{
         this.segundos--;

         this.showMessage();
      },1000)
    }
  }
}
