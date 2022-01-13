import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detalle-solicitud-consejo',
  templateUrl: './detalle-solicitud-consejo.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./detalle-solicitud-consejo.component.scss']
})
export class DetalleSolicitudConsejoComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }

  open(contenido:any){
    this.modal.open(contenido,{size:'sm',centered:true});
  }
}
