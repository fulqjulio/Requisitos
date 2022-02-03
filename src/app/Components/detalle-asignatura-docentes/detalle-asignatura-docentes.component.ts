import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-detalle-asignatura-docentes',
  templateUrl: './detalle-asignatura-docentes.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./detalle-asignatura-docentes.component.scss']
})
export class DetalleAsignaturaDocentesComponent implements OnInit {

  Asignatura: AsignaturaI[];
  Solicitudes: SolicitudesI[]

  constructor(private modal:NgbModal, public router: Router, public service: LoginService) { 
    this.Asignatura = []
    this.service.getBuscarAsignatura(this.service.getCurrentAsignatura()).subscribe(res => {
      this.Asignatura = res.message as AsignaturaI[];
    });
    this.Solicitudes = []
    this.service.getSolicitudesCupo(this.service.getCurrentAsignatura()).subscribe(res => {
      this.Solicitudes = res.message as SolicitudesI[];
    });
  }

  ngOnInit(): void {
  }

  summit(id:number){
    this.service.deleteSolicitudesCupo(id).subscribe()
  }

  Back(){
    this.router.navigate(['ListaAsignaturasSolicitudCupos'])
  }

  open(contenido:any){
    this.modal.open(contenido,{size:'sm',centered:true});
  }
}


interface AsignaturaI {
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

interface SolicitudesI{
  id: number,
  grupo: string,
  motivo: string
}