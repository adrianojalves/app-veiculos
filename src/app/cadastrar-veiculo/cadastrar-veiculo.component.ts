import { Veiculo } from './../models/Veiculos';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-veiculo',
  templateUrl: './cadastrar-veiculo.component.html',
  styleUrls: ['./cadastrar-veiculo.component.css']
})
export class CadastrarVeiculoComponent implements OnInit {
  codigo!: number;
  veiculo!: Veiculo;

  constructor(private router: Router,
              private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.codigo = this.activeRouter.snapshot.params['id'];
    this.veiculo = new Veiculo();

    if(this.codigo==1)
      this.veiculo.nome="Civic";
    else
      this.veiculo.nome="Fazer";
    this.veiculo.id = this.codigo;
  }

  voltar(){
    this.router.navigate(['/listar-veiculos']);
  }

  salvar(){
    this.router.navigate(['/listar-veiculos']);
  }
}
