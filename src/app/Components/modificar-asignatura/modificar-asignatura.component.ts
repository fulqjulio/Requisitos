import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modificar-asignatura',
  templateUrl: './modificar-asignatura.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./modificar-asignatura.component.scss']
})
export class ModificarAsignaturaComponent implements OnInit {

  constructor(private modal:NgbModal, public router: Router) { }

  ngOnInit(): void {
  }

  open(contenido:any){
    this.modal.open(contenido,{size:'sm',centered:true});
  }

  Back(){
    this.router.navigate(['ModificarAsignaturaBuscar'])
  }
}
