import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detalle-solicitud-comite',
  templateUrl: './detalle-solicitud-comite.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./detalle-solicitud-comite.component.scss']
})
export class DetalleSolicitudComiteComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }

  open(contenido:any){
    this.modal.open(contenido,{size:'sm',centered:true});
  }
}
