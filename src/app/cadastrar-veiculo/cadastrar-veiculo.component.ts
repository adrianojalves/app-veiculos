import { Veiculo, TipoVeiculo } from './../models/Veiculos';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CORES } from '../models/ModelsUtils';
import * as M from "materialize-css";

@Component({
  selector: 'app-cadastrar-veiculo',
  templateUrl: './cadastrar-veiculo.component.html',
  styleUrls: ['./cadastrar-veiculo.component.css']
})
export class CadastrarVeiculoComponent implements OnInit {
  @ViewChild('cor') corSelect!: ElementRef;
  @ViewChild('status') statusSelect!: ElementRef;
  @ViewChild('tipo') tipoSelect!: ElementRef;

  codigo!: number;
  veiculo!: Veiculo;
  CORES = CORES;
  TipoVeiculo = TipoVeiculo;

  constructor(private router: Router,
              private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.codigo = this.activeRouter.snapshot.params['id'];
    this.veiculo = new Veiculo();

  }

  ngAfterViewInit(): void{
    setTimeout(() => {
      M.FormSelect.init(this.statusSelect.nativeElement), 100});
    setTimeout(() => {
      M.FormSelect.init(this.corSelect.nativeElement),100});
    setTimeout(() => {
        M.FormSelect.init(this.tipoSelect.nativeElement),100});
  }

  voltar(event: any){
    this.router.navigate(['/listar-veiculos']);
  }

  salvar(event: any){
    console.log(this.veiculo);
    //this.router.navigate(['/listar-veiculos']);
  }
}
