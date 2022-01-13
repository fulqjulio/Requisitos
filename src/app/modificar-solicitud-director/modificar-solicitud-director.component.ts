import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modificar-solicitud-director',
  templateUrl: './modificar-solicitud-director.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./modificar-solicitud-director.component.scss']
})
export class ModificarSolicitudDirectorComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }

  open(contenido:any){
    this.modal.open(contenido,{size:'sm',centered:true});
  }
}
