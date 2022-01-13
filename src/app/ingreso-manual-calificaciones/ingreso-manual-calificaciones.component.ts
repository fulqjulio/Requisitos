import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ingreso-manual-calificaciones',
  templateUrl: './ingreso-manual-calificaciones.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./ingreso-manual-calificaciones.component.scss']
})
export class IngresoManualCalificacionesComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }

  open(contenido:any){
    this.modal.open(contenido,{size:'sm',centered:true});
  }
}
