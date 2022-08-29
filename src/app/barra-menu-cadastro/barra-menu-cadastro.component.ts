import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barra-menu-cadastro',
  templateUrl: './barra-menu-cadastro.component.html',
  styleUrls: ['./barra-menu-cadastro.component.css']
})
export class BarraMenuCadastroComponent implements OnInit {
  @Output() aoSalvar = new EventEmitter<boolean>();
  @Output() aoVoltar = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  salvar(){
    this.aoSalvar.emit();
  }

  voltar(){
    this.aoVoltar.emit();
  }
}
