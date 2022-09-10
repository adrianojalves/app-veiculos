import { VeiculosCrudServiceService } from './../servicos/veiculos-crud-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veiculo } from '../models/Veiculos';

@Component({
  selector: 'app-listar-veiculos',
  templateUrl: './listar-veiculos.component.html',
  styleUrls: ['./listar-veiculos.component.css']
})
export class ListarVeiculosComponent implements OnInit {
  listVeiculos: Veiculo[] = [];

  hideCardAviso = true;
  segundos! : number;

  constructor(private router: Router,
              private veiculoCurdService : VeiculosCrudServiceService
    ) { }

  ngOnInit(): void {
    this.buscarVeiculos();
  }

  excluir(id: number){
    this.veiculoCurdService.delete(id)
        .then(() => {
            this.segundos = 3;
            this.hideCardAviso=false;

            this.showMessage();
        })
        .catch((error) =>{
          alert(error);
        })
  }

  editar(id: number){
    this.router.navigate(['/cadastrar-veiculo', id]);
  }

  novo(event : any){
    this.router.navigate(['/cadastrar-veiculo', 0]);
  }

  buscarVeiculos(){
    this.veiculoCurdService.getAll()
            .then((veiculos: Veiculo[]) => {
              this.listVeiculos = veiculos;
            } )
            .catch((error) => {
              alert(error);
            })
  }

  showMessage(){
    if(this.segundos==0){
      this.hideCardAviso=true;
      this.buscarVeiculos();
      return;
    }
    else{
      setTimeout(()=>{
         this.segundos--;

         this.showMessage();
      },1000)
    }
  }

  get desabilitarCss(){
    return !this.hideCardAviso?"disabled":"";
  }
}
