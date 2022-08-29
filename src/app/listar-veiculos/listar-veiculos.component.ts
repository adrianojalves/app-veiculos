import { TipoVeiculo, Veiculo } from './../models/Veiculos';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-veiculos',
  templateUrl: './listar-veiculos.component.html',
  styleUrls: ['./listar-veiculos.component.css']
})
export class ListarVeiculosComponent implements OnInit {
  listVeiculos: Veiculo[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    let v1 = new Veiculo();
    v1.id=1;
    v1.nome="Cívic";
    v1.tipo = TipoVeiculo.Carro;

    let v2 = new Veiculo();
    v2.id=2;
    v2.nome="Fazer";
    v2.tipo = TipoVeiculo.Moto;

    this.listVeiculos.push(v1);
    this.listVeiculos.push(v2);
  }


  editar(id: number){
    this.router.navigate(['/cadastrar-veiculo', id]);
  }

  novo(event : any){
    this.router.navigate(['/cadastrar-veiculo', 0]);
  }
}
