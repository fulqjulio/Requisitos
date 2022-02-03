import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-buscar-asignatura',
  templateUrl: './buscar-asignatura.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./buscar-asignatura.component.scss']
})
export class BuscarAsignaturaComponent implements OnInit {

  Asignatura = new FormControl();
  Respuesta: RespuestaI[];

  constructor(private modal: NgbModal, public router: Router, public service: LoginService) {
    this.Respuesta = [];
  }

  ngOnInit(): void {
  }

  summit(contenido: any) {
    this.service.getBuscarAsignatura(this.Asignatura.value).subscribe(res => {
      this.Respuesta = res.message as RespuestaI[];
      if (this.Respuesta.length > 0) {
        this.service.setCurrentAsignatura(this.Asignatura.value)
        this.router.navigate(['VerAsignatura'])
      }
      else {
        this.open(contenido)
      }
    });
    
  }

  Back() {
    this.router.navigate(['Home'])
  }

  open(contenido: any) {
    this.modal.open(contenido, { size: 'sm', centered: true });
  }
}

class RespuestaI {
  nivel: string = "";
  departamento: string = "";
  nombre: string = "";
  codigo: string = "";
  horas_actividad_presencial: number = 0;
  horas_actividad_autonomas: number = 0;
  plan_de_estudios: string = "";
  validable: boolean = true;
  porcentaje_de_asistencia: string = "";
  tipologia: string = "";
  contenido: string = "";
}