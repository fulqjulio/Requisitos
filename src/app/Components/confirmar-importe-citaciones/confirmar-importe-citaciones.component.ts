import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmar-importe-citaciones',
  templateUrl: './confirmar-importe-citaciones.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./confirmar-importe-citaciones.component.scss']
})
export class ConfirmarImporteCitacionesComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }

  open(contenido:any){
    this.modal.open(contenido,{size:'sm',centered:true});
  }
}
