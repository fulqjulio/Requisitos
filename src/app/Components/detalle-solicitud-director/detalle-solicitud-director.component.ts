import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detalle-solicitud-director',
  templateUrl: './detalle-solicitud-director.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./detalle-solicitud-director.component.scss']
})
export class DetalleSolicitudDirectorComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }

  open(contenido:any){
    this.modal.open(contenido,{size:'sm',centered:true});
  }
}
