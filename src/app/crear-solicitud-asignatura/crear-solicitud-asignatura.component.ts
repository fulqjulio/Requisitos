import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-crear-solicitud-asignatura',
  templateUrl: './crear-solicitud-asignatura.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./crear-solicitud-asignatura.component.scss']
})
export class CrearSolicitudAsignaturaComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }

  open(contenido:any){
    this.modal.open(contenido,{size:'sm',centered:true});
  }
}
