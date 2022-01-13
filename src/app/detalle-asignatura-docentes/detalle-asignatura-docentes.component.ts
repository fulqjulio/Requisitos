import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detalle-asignatura-docentes',
  templateUrl: './detalle-asignatura-docentes.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./detalle-asignatura-docentes.component.scss']
})
export class DetalleAsignaturaDocentesComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }

  open(contenido:any){
    this.modal.open(contenido,{size:'sm',centered:true});
  }
}
