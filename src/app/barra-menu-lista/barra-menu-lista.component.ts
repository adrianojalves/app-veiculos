import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barra-menu-lista',
  templateUrl: './barra-menu-lista.component.html',
  styleUrls: ['./barra-menu-lista.component.css']
})
export class BarraMenuListaComponent implements OnInit {
  @Output() funcNovo = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  novo(){
    this.funcNovo.emit();
  }
}
