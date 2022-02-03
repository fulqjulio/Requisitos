import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-crear-asignatura2',
  templateUrl: './crear-asignatura2.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./crear-asignatura2.component.scss']
})
export class CrearAsignatura2Component implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }

  open(contenido:any){
    this.modal.open(contenido,{size:'sm',centered:true});
  }

}
