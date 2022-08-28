import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {
  abrirModal: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  abrirSobre(){
    this.abrirModal = true;
  }

  aoFecharModal(valor: boolean){
    this.abrirModal = valor;
  }

  get tituloSobreMsgModal(){
    return "Sobre o APP-Veículos";
  }

  get msgSobreMsgModal(){
    return "APP desenvolvido como avaliação da disciplina Frameworks da Pós-JAVA UTFPR "+
    " | Aluno: Adriano de Jesus Alves - "+
    "adrianojesusalves@alunos.utfpr.edu.br";
  }
}
