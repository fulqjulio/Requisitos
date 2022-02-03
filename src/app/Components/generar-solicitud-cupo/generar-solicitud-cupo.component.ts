import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-generar-solicitud-cupo',
  templateUrl: './generar-solicitud-cupo.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./generar-solicitud-cupo.component.scss']
})
export class GenerarSolicitudCupoComponent implements OnInit {

  codigo = new FormControl();
  grupo = new FormControl();
  motivo = new FormControl();

  Respuesta: RespuestaI[];

  constructor(private modal:NgbModal, public router: Router, public service: LoginService) { 
    this.Respuesta = [];
  }

  ngOnInit(): void {
  }

  summit(contenido: any, contenido2:any) {
    this.service.getBuscarAsignatura(this.codigo.value).subscribe(res => {
      this.Respuesta = res.message as RespuestaI[];
      if (this.Respuesta.length > 0) {
        const body:Solicitud = {
          codigo_asignatura: this.codigo.value,
          grupo: this.grupo.value,
          motivo: this.motivo.value
        }
        this.service.postSolicitudCupo(body).subscribe()
        this.open(contenido)
      }
      else {
        this.open(contenido2)
      }
    })
  }

  Back() {
    this.router.navigate(['Home'])
  }
  
  open(contenido:any){
    this.modal.open(contenido,{size:'sm',centered:true});
  }

}

interface Solicitud{
  codigo_asignatura: string,
  grupo: string,
  motivo: string,
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