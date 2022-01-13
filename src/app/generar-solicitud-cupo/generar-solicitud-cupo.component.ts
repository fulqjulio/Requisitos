import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-generar-solicitud-cupo',
  templateUrl: './generar-solicitud-cupo.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./generar-solicitud-cupo.component.scss']
})
export class GenerarSolicitudCupoComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }

  
  open(contenido:any){
    this.modal.open(contenido,{size:'sm',centered:true});
  }

}
