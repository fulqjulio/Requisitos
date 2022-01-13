import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detalle-asignatura-departamento',
  templateUrl: './detalle-asignatura-departamento.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./detalle-asignatura-departamento.component.scss']
})
export class DetalleAsignaturaDepartamentoComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }

  open(contenido:any){
    this.modal.open(contenido,{size:'sm',centered:true});
  }

}
