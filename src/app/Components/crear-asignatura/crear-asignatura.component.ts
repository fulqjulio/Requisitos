import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-crear-asignatura',
  templateUrl: './crear-asignatura.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./crear-asignatura.component.scss']
})
export class CrearAsignaturaComponent implements OnInit {

  codigo = new FormControl();
  nivel = new FormControl();
  departamento = new FormControl();
  nombre = new FormControl();
  horas_actividad_presencial = new FormControl();
  horas_actividad_autonomas = new FormControl();
  plan_de_estudios = new FormControl();
  validable = new FormControl();
  porcentaje_de_asistencia = new FormControl();
  tipologia = new FormControl();
  contenido = new FormControl();
  codigo_requisitos = new FormControl();
  tipo_requisitos = new FormControl();
  objetivo_de_formacion = new FormControl();
  bibliografia_minima = new FormControl();
  metodologia = new FormControl();
  descripcion = new FormControl();

  constructor(private modal: NgbModal, public router: Router, public service: LoginService) { }

  ngOnInit(): void {
  }

  summit(contenido: any) {
    const body: AsignaturaI = {
      codigo: this.codigo.value,
      nivel: this.nivel.value,
      departamento: this.departamento.value,
      nombre: this.nombre.value,
      horas_actividad_presencial: this.horas_actividad_presencial.value,
      horas_actividad_autonomas: this.horas_actividad_autonomas.value,
      plan_de_estudios: this.plan_de_estudios.value,
      validable: this.validable.value,
      porcentaje_de_asistencia: this.porcentaje_de_asistencia.value,
      tipologia: this.tipologia.value,
      contenido:  this.contenido.value,
      codigo_requisitos: this.codigo_requisitos.value,
      tipo_requisitos: this.tipo_requisitos.value,
      objetivo_de_formacion: this.objetivo_de_formacion.value,
      bibliografia_minima: this.bibliografia_minima.value,
      metodologia: this.metodologia.value,
      descripcion: this.descripcion.value,
    }
    this.service.CrearAsignatura(body).subscribe()
    this.open(contenido)
    this.router.navigate(['Home'])
  }

  Back() {
    this.router.navigate(['Home'])
  }

  open(contenido: any) {
    this.modal.open(contenido, { size: 'sm', centered: true });
  }
}

interface AsignaturaI {
  codigo: string,
  nivel: string,
  departamento: string,
  nombre: string,
  horas_actividad_presencial: string,
  horas_actividad_autonomas: string,
  plan_de_estudios: string,
  validable: string,
  porcentaje_de_asistencia: string,
  tipologia: string,
  contenido: string,
  codigo_requisitos: string,
  tipo_requisitos: string,
  objetivo_de_formacion: string,
  bibliografia_minima: string,
  metodologia: string,
  descripcion: string
}

