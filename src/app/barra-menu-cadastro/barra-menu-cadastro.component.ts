import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-barra-menu-cadastro',
  templateUrl: './barra-menu-cadastro.component.html',
  styleUrls: ['./barra-menu-cadastro.component.css']
})
export class BarraMenuCadastroComponent implements OnInit {
  @Output() aoSalvar = new EventEmitter<boolean>();
  @Output() aoVoltar = new EventEmitter<boolean>();

  @Input() desabilitar! : boolean;

  constructor() { }

  ngOnInit(): void {
  }

  salvar(){
    this.aoSalvar.emit();
  }

  voltar(){
    this.aoVoltar.emit();
  }

  get desabilitarCss(){
    return this.desabilitar?"disabled":"";
  }
}
