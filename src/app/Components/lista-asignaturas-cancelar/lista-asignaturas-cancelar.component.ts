import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lista-asignaturas-cancelar',
  templateUrl: './lista-asignaturas-cancelar.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./lista-asignaturas-cancelar.component.scss']
})
export class ListaAsignaturasCancelarComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }

  open(contenido:any){
    this.modal.open(contenido,{size:'sm',centered:true});
  }

}
