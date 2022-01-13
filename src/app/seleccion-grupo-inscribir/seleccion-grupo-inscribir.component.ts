import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-seleccion-grupo-inscribir',
  templateUrl: './seleccion-grupo-inscribir.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./seleccion-grupo-inscribir.component.scss']
})
export class SeleccionGrupoInscribirComponent implements OnInit {

  constructor(private modal:NgbModal, private _config:NgbAccordionConfig) { 
    _config.closeOthers=false;
  }

  ngOnInit(): void {
  }

  open(contenido:any){
    this.modal.open(contenido,{size:'sm',centered:true});
  }
}
