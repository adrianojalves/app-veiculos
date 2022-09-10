import { VeiculosCrudServiceService } from './../servicos/veiculos-crud-service.service';
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

  segundos!:number;
  hideCardAviso = true;

  codigo!: number;
  veiculo!: Veiculo;
  CORES = CORES;
  TipoVeiculo = TipoVeiculo;

  constructor(private router: Router,
              private activeRouter: ActivatedRoute,
              private veiculoCrudService : VeiculosCrudServiceService
            ) {
              this.veiculo = new Veiculo();
            }

  ngOnInit(): void {
    this.codigo = this.activeRouter.snapshot.params['id'];

    if(this.codigo && this.codigo>0){
      this.veiculoCrudService.getById(this.codigo)
                             .then((veiculoSave: Veiculo)=>{
                                this.veiculo = Veiculo.converter(veiculoSave);
                             })
                             .catch(()=>{
                                alert("Erro ao buscar o veículo");
                                this.veiculo = new Veiculo();
                             });
    }
    else
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
    if(!this.veiculo.id || this.veiculo.id<1){
      this.veiculoCrudService.save(this.veiculo)
                           .then(()=>{
                            this.iniciaRedirecionar();
                           })
                           .catch(()=>{
                            alert("Erro ao cadastrar o veículo");
                           })
    }
    else{
      this.veiculoCrudService.update(this.veiculo)
                           .then(()=>{
                            this.iniciaRedirecionar();
                           })
                           .catch(()=>{
                            alert("Erro ao cadastrar o veículo");
                           })
    }
  }

  private iniciaRedirecionar(){
    this.segundos = 3;

    this.hideCardAviso=false;

    this.redirecionar();
  }

  redirecionar(){
    if(this.segundos==0){
      this.voltar(null);
    }
    else{
      setTimeout(()=>{
         this.segundos--;

         this.redirecionar();
      },1000)
    }
  }

  get add(){
    return !this.codigo || this.codigo<1;
  }

  get update(){
    return !this.add;
  }

}
