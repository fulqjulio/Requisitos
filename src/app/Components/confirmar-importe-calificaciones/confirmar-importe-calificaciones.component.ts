import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmar-importe-calificaciones',
  templateUrl: './confirmar-importe-calificaciones.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./confirmar-importe-calificaciones.component.scss']
})
export class ConfirmarImporteCalificacionesComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }

  open(contenido:any){
    this.modal.open(contenido,{size:'sm',centered:true});
  }
}
