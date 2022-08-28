import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ElementRef } from '@angular/core';

import * as M from "materialize-css";

@Component({
  selector: 'app-app-msg-modal',
  templateUrl: './app-msg-modal.component.html',
  styleUrls: ['./app-msg-modal.component.css']
})
export class AppMsgModalComponent implements OnInit {
  @ViewChild('modalSobre') modalElement?: ElementRef;
  modal: any;

  @Input() titulo!: string;
  @Input() msg!: string;
  @Input() executar!: boolean;

  @Output() aoFecharModal = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    this.modal = M.Modal.init(this.modalElement?.nativeElement);
  }

  ngOnChanges(){
    if(this.executar){
      this.modal.open();
    }
  }

  retornarValor(){
    this.aoFecharModal.emit(false);
  }
}
