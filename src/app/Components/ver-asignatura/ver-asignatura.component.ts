import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-ver-asignatura',
  templateUrl: './ver-asignatura.component.html',
  styleUrls: ['./ver-asignatura.component.scss']
})
export class VerAsignaturaComponent implements OnInit {

  Asignatura: RespuestaI[];

  constructor(public router: Router, public service: LoginService) {
    this.Asignatura = []
    this.service.getBuscarAsignatura(this.service.getCurrentAsignatura()).subscribe(res => {
      this.Asignatura = res.message as RespuestaI[];
    });
  }

  ngOnInit(): void {
  }

  Back() {
    this.router.navigate(['BuscarAsignatura'])
  }
}

interface RespuestaI {
  nivel: string,
  departamento: string,
  nombre: string,
  codigo: string,
  horas_actividad_presencial: number,
  horas_actividad_autonomas: number,
  plan_de_estudios: string,
  validable: number,
  porcentaje_de_asistencia: string,
  tipologia: string,
  contenido: string,
  en_oferta: number
}
