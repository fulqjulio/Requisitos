import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-ingreso-actividad',
  templateUrl: './ingreso-actividad.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./ingreso-actividad.component.scss']
})
export class IngresoActividadComponent implements OnInit {

  nombre = new FormControl();
  porcentaje = new FormControl();

  constructor(private modal: NgbModal, public router: Router, public service: LoginService) {
    
  }

  ngOnInit(): void {

  }

  open(contenido: any) {
    this.modal.open(contenido, { size: 'sm', centered: true });
  }
  
  Summit(contenido: any) {
    const body:Actividad = {
      codigo_asignatura: this.service.getCurrentAsignatura(),
      nombre: this.nombre.value,
      porcentaje: this.porcentaje.value
    }
    this.service.postCrearActividades(body).subscribe()
    this.open(contenido)
  }

  Back() {
    this.router.navigate(['CrearActividades'])
  }
}

interface Actividad{
  codigo_asignatura: string,
  nombre: string,
  porcentaje: string,
}