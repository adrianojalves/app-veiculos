import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as M from "materialize-css";

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {
  @ViewChild('modalSobre') modalElement?: ElementRef;
  modal: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    this.modal = M.Modal.init(this.modalElement?.nativeElement);
  }

  abrirSobre(){
    this.modal.open();
  }
}
